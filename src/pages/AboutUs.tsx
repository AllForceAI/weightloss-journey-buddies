
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About GLPONE</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p>
                At GLPONE, we're committed to making modern weight loss medicine accessible to everyone. 
                We believe that effective weight management should be supported by medical science, professional 
                supervision, and ongoing support.
              </p>
              <p className="mt-4">
                Our mission is to help people achieve sustainable weight loss through FDA-approved GLP-1 
                medications, combined with personalized care from our team of specialists.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
              <p>
                We take a comprehensive approach to weight management that includes:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Medical Evaluation</strong> - Each patient undergoes a thorough medical assessment to determine eligibility for GLP-1 medications.</li>
                <li><strong>Personalized Treatment</strong> - Treatment plans are tailored to individual health profiles, goals, and needs.</li>
                <li><strong>Ongoing Support</strong> - Regular check-ins with healthcare providers to monitor progress and adjust treatment as needed.</li>
                <li><strong>Educational Resources</strong> - Access to comprehensive information about GLP-1 medications, weight management strategies, and healthy lifestyle choices.</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
              <p>
                GLPONE is powered by a team of dedicated healthcare professionals with extensive experience in weight management and metabolic health.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-brand-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-brand-blue-600 mb-2">Dr. Sarah Johnson, MD</h3>
                  <p className="text-gray-700 italic mb-3">Medical Director</p>
                  <p className="text-gray-600">
                    Board-certified in Internal Medicine with a specialization in weight management. Dr. Johnson has helped hundreds of patients achieve their weight loss goals through GLP-1 therapy.
                  </p>
                </div>
                
                <div className="bg-brand-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-brand-blue-600 mb-2">Dr. Michael Chen, MD</h3>
                  <p className="text-gray-700 italic mb-3">Chief Medical Officer</p>
                  <p className="text-gray-600">
                    With over 15 years of experience in obesity medicine, Dr. Chen oversees our clinical operations and ensures the highest standards of patient care.
                  </p>
                </div>
                
                <div className="bg-brand-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-brand-blue-600 mb-2">Jennifer Martinez, NP</h3>
                  <p className="text-gray-700 italic mb-3">Nurse Practitioner</p>
                  <p className="text-gray-600">
                    Specialized in metabolic health and weight management, Jennifer works closely with patients to provide personalized care and support throughout their treatment journey.
                  </p>
                </div>
                
                <div className="bg-brand-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-brand-blue-600 mb-2">Robert Williams, PharmD</h3>
                  <p className="text-gray-700 italic mb-3">Clinical Pharmacist</p>
                  <p className="text-gray-600">
                    Robert provides expert guidance on medication management, helping patients understand their GLP-1 prescriptions and manage any side effects.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Why Choose GLPONE?</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-brand-blue-500 pl-4 py-2">
                  <p><strong>100% Online:</strong> Access medical consultations and prescription management from the comfort of your home.</p>
                </div>
                <div className="border-l-4 border-brand-blue-500 pl-4 py-2">
                  <p><strong>Personalized Care:</strong> Treatment plans tailored to your specific health profile and weight loss goals.</p>
                </div>
                <div className="border-l-4 border-brand-blue-500 pl-4 py-2">
                  <p><strong>FDA-Approved Medications:</strong> Access to GLP-1 medications with proven effectiveness for weight management.</p>
                </div>
                <div className="border-l-4 border-brand-blue-500 pl-4 py-2">
                  <p><strong>Ongoing Support:</strong> Regular check-ins with your healthcare provider to monitor progress and adjust treatment.</p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Start Your Journey Today</h2>
              <p className="mb-6">
                Ready to take the first step towards effective, medically-supervised weight loss? 
                Complete our online assessment to see if GLP-1 treatment is right for you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/quiz">
                  <Button className="bg-brand-blue-600 hover:bg-brand-blue-700">
                    Start Assessment
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
