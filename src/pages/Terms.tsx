
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                Welcome to WeightSage. These Terms of Service govern your use of our website and services. 
                By accessing our website or using our services, you agree to these Terms. Please read them carefully.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
              <p>
                Throughout these Terms of Service, "we", "us", and "our" refer to WeightSage. "You" refers to you, 
                the person accessing this website and accepting these Terms of Service. "Services" refers to the weight 
                loss program, consultations, and related services provided by WeightSage.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">3. Eligibility</h2>
              <p>
                Our services are intended for individuals who are at least 18 years of age and are seeking weight loss 
                assistance. By using our services, you represent and warrant that you are at least 18 years old and that 
                you have the legal capacity to enter into these Terms.
              </p>
              <p className="mt-4">
                You must complete our health assessment questionnaire truthfully and accurately. Based on your responses, 
                we will determine if you are eligible for our services. We reserve the right to decline service to anyone 
                based on their health assessment or for any other reason at our discretion.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">4. Medical Disclaimer</h2>
              <p>
                WeightSage connects you with licensed healthcare providers, but we are not a medical practice or healthcare 
                provider. The information provided on our website and through our services is for general informational purposes 
                only and is not intended as a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <p className="mt-4">
                Always seek the advice of your physician or other qualified health provider with any questions you may have 
                regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of 
                something you have read on our website.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">5. Account Registration</h2>
              <p>
                To access certain features of our website or to use our services, you may need to create an account. 
                When you create an account, you must provide accurate and complete information. You are solely responsible 
                for the activity that occurs on your account, and you must keep your account password secure.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">6. Payment Terms</h2>
              <p>
                By signing up for our services, you agree to pay all fees associated with the services you select. 
                Prices for our services are listed on our website and may change from time to time. Unless otherwise 
                noted, all fees are in U.S. dollars.
              </p>
              <p className="mt-4">
                We use third-party payment processors to process payments. By providing your payment information, you 
                authorize us to charge your payment method for the services you have selected.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">7. Cancellation and Refunds</h2>
              <p>
                You may cancel your subscription at any time by contacting our customer support team. Refunds are 
                subject to our refund policy, which may be updated from time to time. In general, we do not provide 
                refunds for services already rendered.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">8. Privacy Policy</h2>
              <p>
                Our Privacy Policy describes how we handle the information you provide to us when you use our services. 
                You understand that through your use of our services, you consent to the collection and use of this 
                information as set forth in the Privacy Policy.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL WEIGHTSAGE, ITS AFFILIATES, OFFICERS, DIRECTORS, 
                EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, 
                OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR 
                OTHER INTANGIBLE LOSSES, THAT RESULT FROM THE USE OF, OR INABILITY TO USE, THE SERVICES OR CONTENT.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">10. Changes to These Terms</h2>
              <p>
                We may revise these Terms of Service from time to time. The most current version will always be posted 
                on our website. By continuing to access or use our services after those revisions become effective, you 
                agree to be bound by the revised terms.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4">
                <p><strong>Email:</strong> legal@weightsage.com</p>
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

export default Terms;
