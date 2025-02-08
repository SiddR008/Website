import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | RootAMZ</title>
        <meta name="description" content="Privacy Policy for RootAMZ" />
      </Head>
      <div className="bg-dark text-white min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 pt-32 py-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy for RootAMZ</h1>
          <p className="mb-4">
            At RootAMZ, accessible from{' '}
            <a href="https://www.rootamz.com" className="text-purple-500 hover:underline">
              www.rootamz.com
            </a>
            , one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by RootAMZ and how we use it.
          </p>

          <p className="mb-4">
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
          </p>

          <p className="mb-4">
            This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in RootAMZ. This policy is not applicable to any information collected offline or via channels other than this website.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Consent</h2>
          <p className="mb-4">
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
          <p className="mb-4">
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>
          <p className="mb-4">
            If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          </p>
          <p className="mb-4">
            When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect in various ways, including to:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>
              Communicate with you, either directly or through one of our partners, including for customer service,
              to provide you with updates and other information relating to the website, and for marketing and promotional purposes
            </li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Log Files</h2>
          <p className="mb-4">
            RootAMZ follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this
            and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses,
            browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
            These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends,
            administering the site, tracking users' movement on the website, and gathering demographic information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Cookies and Web Beacons</h2>
          <p className="mb-4">
            Like any other website, RootAMZ uses 'cookies'. These cookies are used to store information including visitors' preferences,
            and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience
            by customizing our web page content based on visitors' browser type and/or other information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Advertising Partners Privacy Policies</h2>
          <p className="mb-4">
            You may consult this list to find the Privacy Policy for each of the advertising partners of RootAMZ.
          </p>
          <p className="mb-4">
            Third-party ad servers or ad networks may use technologies like cookies, JavaScript, or Web Beacons in their respective
            advertisements and links that appear on RootAMZ, which are sent directly to users' browsers. They automatically receive your IP
            address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to
            personalize the advertising content that you see on websites that you visit.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Third Party Privacy Policies</h2>
          <p className="mb-4">
            RootAMZ's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy
            Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about
            how to opt-out of certain options.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
          <p className="mb-4">
            Under the CCPA, among other rights, California consumers have the right to:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
            </li>
            <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
            <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
          </ul>
          <p className="mb-4">
            If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">GDPR Data Protection Rights</h2>
          <p className="mb-4">
            We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
            <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
            <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
            <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
            <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
            <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
          </ul>
          <p className="mb-4">
            If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Children's Information</h2>
          <p className="mb-4">
            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to
            observe, participate in, and/or monitor and guide their online activity.
          </p>
          <p className="mb-4">
            RootAMZ does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you believe that
            your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Ready to Elevate Your E-commerce?</h2>
          <p className="mb-4">
            Take the first step towards maximizing your online business potential. Contact us today for a tailored e-commerce solution.
          </p>
          <div className="mt-12">
            <a
              href="/contact"
              className="bg-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy; 