
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                Welcome to WeightSage. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you visit our 
                website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">2. The Data We Collect About You</h2>
              <p>
                Personal data means any information about an individual from which that person can be identified. 
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier, date of birth, and gender.</li>
                <li><strong>Contact Data</strong> includes billing address, delivery address, email address, and telephone numbers.</li>
                <li><strong>Financial Data</strong> includes payment card details.</li>
                <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><strong>Profile Data</strong> includes your username and password, purchases or orders made by you, your interests, preferences, feedback, and survey responses.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website, products, and services.</li>
                <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
                <li><strong>Health Data</strong> includes information about your weight, height, BMI, medical conditions, medications, and other health-related information you provide to us.</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Personal Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
                <li>With your consent.</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know. They will only process your personal data on our instructions, and they are subject to a duty of confidentiality.
              </p>
              <p className="mt-4">
                We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">5. Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4">
                <p><strong>Email:</strong> privacy@weightsage.com</p>
                <p><strong>Phone:</strong> (800) 555-1234</p>
                <p><strong>Address:</strong> 123 WeightSage Way, Health City, WS 12345</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
