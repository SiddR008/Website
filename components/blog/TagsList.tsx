type TagsListProps = {
  tags: string[];
  onTagClick: (tag: string) => void;
  selectedTag?: string;
};

export default function TagsList({ tags, onTagClick, selectedTag }: TagsListProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagClick(tag)}
          className={`px-3 py-1 rounded-full text-sm ${
            selectedTag === tag
              ? 'bg-purple-600'
              : 'bg-gray-800 hover:bg-gray-700'
          }`}
        >
          #{tag}
        </button>
      ))}
    </div>
  );
} 