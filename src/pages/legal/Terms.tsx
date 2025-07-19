import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
          <p className="text-gray-600">Last updated: January 1, 2024</p>
        </div>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing and using GD Services' website and services, you accept and agree to be bound by the terms and provision of this agreement. These Terms and Conditions apply to all visitors, users, and others who access or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">2. Services Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              GD Services provides IT consulting, web development, mobile app development, digital marketing, cybersecurity, and related technology services. Our services are provided subject to these terms and conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">3. User Responsibilities</h2>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li>• Provide accurate and complete information when requested</li>
              <li>• Maintain the confidentiality of your account credentials</li>
              <li>• Use our services in compliance with all applicable laws</li>
              <li>• Not engage in any activity that could harm our systems or other users</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">4. Payment Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Payment terms are specified in individual service agreements. Generally, payments are due according to the agreed schedule. Late payments may incur additional charges as specified in the service agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">5. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content, trademarks, and intellectual property on our website remain the property of GD Services. Custom work created for clients will be governed by the specific terms outlined in individual project agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">6. Privacy and Data Protection</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are committed to protecting your privacy. Our collection, use, and protection of personal information is governed by our Privacy Policy, which is incorporated into these terms by reference.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              GD Services shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of our services, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">8. Service Availability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we strive to maintain continuous service availability, we do not guarantee that our services will be uninterrupted or error-free. We reserve the right to modify or discontinue services with reasonable notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">9. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Either party may terminate services according to the terms specified in individual service agreements. Upon termination, certain provisions of these terms may continue to apply.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">10. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction where GD Services operates, without regard to conflict of law principles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to update these terms and conditions at any time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">12. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>GD Services</strong><br />
                123 Business Avenue<br />
                Tech City, TC 12345<br />
                Email: legal@gdservices.com<br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;