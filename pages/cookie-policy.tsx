import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CookiePolicy = () => {
  return (
    <>
      <Head>
        <title>Cookie Policy | RootAMZ</title>
        <meta name="description" content="Cookie Policy for RootAMZ" />
      </Head>
      <div className="bg-dark text-white min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 pt-32 py-12">
          <h1 className="text-4xl font-bold mb-4">Cookie Policy for RootAMZ</h1>
          <p className="mb-4">
            This is the Cookie Policy for RootAMZ, accessible from{' '}
            <a href="https://www.rootamz.com" className="text-purple-500 hover:underline">
              www.rootamz.com
            </a>.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">What Are Cookies</h2>
          <p className="mb-4">
            As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored; however, this may downgrade or 'break' certain elements of the site's functionality.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Cookies</h2>
          <p className="mb-4">
            We use cookies for a variety of reasons detailed below. Unfortunately, in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Disabling Cookies</h2>
          <p className="mb-4">
            You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore, it is recommended that you do not disable cookies.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">The Cookies We Set</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <strong>Account related cookies:</strong> If you create an account with us, then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out; however, in some cases, they may remain afterwards to remember your site preferences when logged out.
            </li>
            <li>
              <strong>Login related cookies:</strong> We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.
            </li>
            <li>
              <strong>Email newsletters related cookies:</strong> This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.
            </li>
            <li>
              <strong>Orders processing related cookies:</strong> This site offers e-commerce or payment facilities and some cookies are essential to ensure that your order is remembered between pages so that we can process it properly.
            </li>
            <li>
              <strong>Surveys related cookies:</strong> From time to time we offer user surveys and questionnaires to provide you with interesting insights, helpful tools, or to understand our user base more accurately. These surveys may use cookies to remember who has already taken part in a survey or to provide you with accurate results after you change pages.
            </li>
            <li>
              <strong>Forms related cookies:</strong> When you submit data through a form (such as those found on contact pages or comment forms), cookies may be set to remember your user details for future correspondence.
            </li>
            <li>
              <strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page affected by your preferences.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Third Party Cookies</h2>
          <p className="mb-4">
            In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              This site uses Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content. For more information on Google Analytics cookies, see the{" "}
              <a href="https://support.google.com/analytics/answer/6004245" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
                official Google Analytics page
              </a>.
            </li>
            <li>
              Third party analytics are used to track and measure usage of this site so that we can continue to produce engaging content.
            </li>
            <li>
              From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features, these cookies may be used to ensure that you receive a consistent experience whilst on the site, while ensuring we understand which optimisations our users appreciate the most.
            </li>
            <li>
              The Google AdSense service we use to serve advertising uses a DoubleClick cookie to serve more relevant ads across the web and limit the number of times that a given ad is shown to you. For more information on Google AdSense, see the{" "}
              <a href="https://support.google.com/adsense/answer/12654" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
                official Google AdSense privacy FAQ
              </a>.
            </li>
            <li>
              We use adverts to offset the costs of running this site and provide funding for further development. The behavioural advertising cookies used by this site are designed to ensure that we provide you with the most relevant adverts where possible by anonymously tracking your interests and presenting similar things that may be of interest.
            </li>
            <li>
              Several partners advertise on our behalf and affiliate tracking cookies simply allow us to see if our customers have come to the site through one of our partner sites so that we can credit them appropriately and, where applicable, allow our affiliate partners to provide any bonus that they may provide you for making a purchase.
            </li>
            <li>
              We also use social media buttons and/or plugins on this site that allow you to connect with your social network in various ways. For these to work properly, the respective social media sites will set cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">More Information</h2>
          <p className="mb-4">
            Hopefully that has clarified things for you and, as mentioned, if there is something that you aren't sure whether you need or not, it's usually safer to leave cookies enabled in case they are interacting with one of the features you use on our site.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Ready to Elevate Your E-commerce?</h2>
          <p className="mb-4">
            Take the first step towards maximizing your online business potential. Contact us today for a tailored e-commerce solution.
          </p>
          <div className="mt-12">
            <a href="/contact" className="bg-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors">
              Contact Us
            </a>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CookiePolicy; 