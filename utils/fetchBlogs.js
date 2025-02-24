// utils/fetchBlogs.js

const HASHNODE_API_URL = 'https://api.hashnode.com/';

// Query to fetch multiple blog posts
const HASHNODE_QUERY = `
  query GetUserArticles($page: Int!) {
    publication(host: "rootamzblog.hashnode.dev") {
      posts(page: $page) {
        title
        slug
        brief
        coverImage
        contentMarkdown
        dateAdded
        publishedAt
      }
    }
  }
`;

export async function fetchBlogs() {
  try {
    const response = await fetch(HASHNODE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.HASHNODE_API_KEY
      },
      body: JSON.stringify({
        query: HASHNODE_QUERY,
        variables: {
          page: 0
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (!data.data?.publication?.posts) {
      console.error('Unexpected API response structure:', data);
      return [];
    }

    // Transform Hashnode posts to match your blog's format
    const posts = data.data.publication.posts.map(post => ({
      title: post.title,
      slug: post.slug,
      content: post.brief || '',
      dateAdded: post.dateAdded || post.publishedAt,
      coverImage: post.coverImage
    }));

    return posts;

  } catch (error) {
    console.error('Error fetching blogs from Hashnode:', error);
    return [];
  }
}

// Query to fetch a single blog post by slug
const SINGLE_POST_QUERY = `
  query GetArticle($slug: String!) {
    publication(host: "rootamzblog.hashnode.dev") {
      post(slug: $slug) {
        title
        slug
        contentMarkdown
        coverImage
        dateAdded
      }
    }
  }
`;

export async function fetchBlogBySlug(slug) {
  try {
    const response = await fetch(HASHNODE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.HASHNODE_API_KEY
      },
      body: JSON.stringify({
        query: SINGLE_POST_QUERY,
        variables: {
          slug: slug,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const post = data.data?.publication?.post;

    if (!post) {
      return null;
    }

    return {
      title: post.title,
      slug: post.slug,
      content: post.contentMarkdown,
      dateAdded: post.dateAdded,
      coverImage: post.coverImage,
    };

  } catch (error) {
    console.error('Error fetching blog post from Hashnode:', error);
    return null;
  }
}
