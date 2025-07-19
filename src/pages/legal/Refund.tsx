import React from 'react';

const Refund = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Refund and Cancellation Policy</h1>
          <p className="text-gray-600">Last updated: January 1, 2024</p>
        </div>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">1. Service Cancellation</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Clients may cancel services according to the terms specified in their individual service agreements. 
              Cancellation requests must be submitted in writing and will be processed according to the project phase 
              and cancellation terms outlined in the contract.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">2. Refund Eligibility</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Refunds are evaluated on a case-by-case basis and depend on the specific service and project status:
            </p>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li>• Work completed and delivered is generally non-refundable</li>
              <li>• Unused portions of prepaid services may be eligible for partial refunds</li>
              <li>• Monthly subscription services can be cancelled with appropriate notice</li>
              <li>• Custom development projects have specific refund terms outlined in contracts</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">3. Refund Process</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To request a refund, clients must:
            </p>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li>• Submit a written refund request to billing@gdservices.com</li>
              <li>• Include project details and reason for refund request</li>
              <li>• Allow 10-15 business days for review and processing</li>
              <li>• Provide any required documentation or project materials</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">4. Project-Specific Terms</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Web Development Projects</h3>
                <p className="text-gray-700 leading-relaxed">
                  Refunds for custom development work are based on project milestones completed. 
                  Completed phases are generally non-refundable.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Marketing Services</h3>
                <p className="text-gray-700 leading-relaxed">
                  Marketing campaigns can be cancelled with 30 days notice. Unused advertising budget 
                  may be refunded minus management fees.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Consulting Services</h3>
                <p className="text-gray-700 leading-relaxed">
                  Hourly consulting services are billed as used and are non-refundable once delivered.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">5. Force Majeure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In cases where services cannot be delivered due to circumstances beyond our control 
              (natural disasters, technical failures, etc.), clients may be eligible for refunds 
              or service credits for undelivered work.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">6. Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If a refund request is disputed, we encourage open communication to resolve issues. 
              Our goal is to ensure client satisfaction while maintaining fair business practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">7. Contact for Refunds</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For refund requests or questions about this policy, please contact:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Billing Department</strong><br />
                Email: billing@gdservices.com<br />
                Phone: +1 (555) 123-4567<br />
                Address: 123 Business Avenue, Tech City, TC 12345
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Refund;