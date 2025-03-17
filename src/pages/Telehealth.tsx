
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const Telehealth = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold mb-6">Telehealth Consent</h1>
          <Separator className="mb-8" />
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold mb-3">Introduction</h2>
              <p>This Telehealth Consent Form outlines the rights and responsibilities of patients utilizing GLPONE.com's telehealth services. Telehealth involves the use of electronic communications to enable healthcare providers to deliver clinical health care at a distance.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">Benefits of Telehealth</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Improved access to medical care by enabling patients to remain at home</li>
                <li>More efficient medical evaluation and management</li>
                <li>Obtaining expertise of specialists beyond geographic limitations</li>
                <li>Reduced travel time and associated costs</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">Possible Risks</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Technology failures, such as interruptions or disconnections</li>
                <li>Limitations on physical examination capabilities</li>
                <li>Security protocols could fail, potentially causing privacy breaches</li>
                <li>Delay in medical evaluation and treatment could occur due to equipment deficiencies</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">Patient Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Withhold or withdraw consent at any time</li>
                <li>Access your medical information and receive copies of your medical records</li>
                <li>Expect all information disclosed during telehealth sessions to be kept confidential</li>
                <li>Be informed about all individuals who will be present during telehealth sessions</li>
                <li>Exclude anyone from your telehealth session</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">Patient Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ensure you're in a private, quiet location with reliable internet access during sessions</li>
                <li>Provide accurate and complete information about your medical history and current condition</li>
                <li>Inform your provider if someone else is present during your telehealth session</li>
                <li>Not record telehealth sessions without prior written consent from your provider</li>
                <li>Understand that telehealth is not appropriate for emergency situations</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">Emergency Protocols</h2>
              <p>Telehealth services are not intended for emergency situations. In case of an emergency, you should:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Call 911 or go to the nearest emergency room</li>
                <li>Contact your primary care physician</li>
              </ul>
            </section>
            
            <section className="pt-4">
              <p className="italic">By utilizing GLPONE.com's telehealth services, you acknowledge that you have read and understand the information provided above regarding telehealth, and all your questions have been answered to your satisfaction.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Telehealth;
