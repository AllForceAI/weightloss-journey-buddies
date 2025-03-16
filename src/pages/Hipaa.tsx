
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Hipaa = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">HIPAA Privacy Notice</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.</h2>
              
              <p>
                At WeightSage, we are committed to protecting the privacy of your health information. This Notice of Privacy Practices ("Notice") describes how we may use and disclose your protected health information to carry out treatment, payment, or healthcare operations, and for other purposes that are permitted or required by law.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">1. Our Responsibilities</h2>
              <p>
                We are required by law to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Maintain the privacy of your health information</li>
                <li>Provide you with this Notice of our legal duties and privacy practices with respect to information we collect and maintain about you</li>
                <li>Abide by the terms of this Notice</li>
                <li>Notify you if we are unable to agree to a requested restriction</li>
                <li>Accommodate reasonable requests you may have to communicate health information by alternative means or at alternative locations</li>
                <li>Notify you of a breach of unsecured protected health information</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">2. How We May Use and Disclose Your Health Information</h2>
              <p>
                The following categories describe different ways that we may use and disclose your health information. For each category, we will explain what we mean and give some examples. Not every use or disclosure in a category will be listed. However, all of the ways we are permitted to use and disclose information will fall within one of the categories.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">For Treatment</h3>
              <p>
                We may use health information about you to provide you with medical treatment or services. We may disclose health information about you to doctors, nurses, technicians, office staff, or other personnel who are involved in taking care of you and your health.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">For Payment</h3>
              <p>
                We may use and disclose health information about you so that the treatment and services you receive from us may be billed to and payment may be collected from you, an insurance company, or a third party.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">For Healthcare Operations</h3>
              <p>
                We may use and disclose health information about you in order to run the office and make sure that you and our other patients receive quality care. For example, we may use your health information to evaluate the performance of our staff in caring for you.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">3. Your Rights Regarding Your Health Information</h2>
              <p>
                You have the following rights regarding health information we maintain about you:
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Right to Inspect and Copy</h3>
              <p>
                You have the right to inspect and copy your health information, such as medical and billing records, that we use to make decisions about your care.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Right to Amend</h3>
              <p>
                If you believe health information we have about you is incorrect or incomplete, you may ask us to amend the information.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Right to an Accounting of Disclosures</h3>
              <p>
                You have the right to request an "accounting of disclosures." This is a list of the disclosures we made of medical information about you for purposes other than treatment, payment, and healthcare operations.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Right to Request Restrictions</h3>
              <p>
                You have the right to request a restriction or limitation on the health information we use or disclose about you for treatment, payment, or healthcare operations.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Right to Request Confidential Communications</h3>
              <p>
                You have the right to request that we communicate with you about medical matters in a certain way or at a certain location.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Right to a Paper Copy of This Notice</h3>
              <p>
                You have the right to a paper copy of this Notice. You may ask us to give you a copy of this Notice at any time.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">4. Changes to This Notice</h2>
              <p>
                We reserve the right to change this Notice. We reserve the right to make the revised or changed Notice effective for health information we already have about you as well as any information we receive in the future.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">5. Complaints</h2>
              <p>
                If you believe your privacy rights have been violated, you may file a complaint with our office or with the Secretary of the Department of Health and Human Services. To file a complaint with our office, contact our Privacy Officer. All complaints must be submitted in writing. You will not be penalized for filing a complaint.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
              <p>
                For more information about this Notice or to report concerns regarding privacy practices, please contact:
              </p>
              <div className="mt-4">
                <p><strong>Privacy Officer</strong></p>
                <p>WeightSage</p>
                <p>123 WeightSage Way, Health City, WS 12345</p>
                <p>privacy@weightsage.com</p>
                <p>(800) 555-1234</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Hipaa;
