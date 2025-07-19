import React from 'react';

const Shipping = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shipping and Delivery Policy</h1>
          <p className="text-gray-600">Last updated: January 1, 2024</p>
        </div>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">1. Service Delivery Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a digital services company, GD Services primarily delivers services electronically. 
              This policy outlines our delivery methods, timelines, and any physical shipments when applicable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">2. Digital Service Delivery</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most of our services are delivered digitally through:
            </p>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li>• Email delivery of completed projects and documentation</li>
              <li>• Secure client portals for project access and downloads</li>
              <li>• Cloud-based collaboration platforms</li>
              <li>• Direct server deployment for web applications</li>
              <li>• Video conferences for consulting and training sessions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">3. Delivery Timelines</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Web Development Projects</h3>
                <p className="text-gray-700 leading-relaxed">
                  Custom websites: 4-12 weeks depending on complexity<br />
                  E-commerce platforms: 6-16 weeks<br />
                  Web applications: 8-24 weeks based on requirements
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Marketing Services</h3>
                <p className="text-gray-700 leading-relaxed">
                  Campaign setup: 1-2 weeks<br />
                  SEO reports: Monthly delivery<br />
                  Content creation: 1-3 weeks per batch
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Consulting Services</h3>
                <p className="text-gray-700 leading-relaxed">
                  Strategy sessions: Scheduled within 1-2 weeks<br />
                  Technical audits: 1-3 weeks for completion<br />
                  Training programs: Delivered as scheduled
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">4. Physical Deliveries</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In rare cases where physical materials are required (such as branded USB drives, 
              printed documentation, or hardware), we use the following shipping methods:
            </p>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li>• Standard shipping: 5-7 business days</li>
              <li>• Express shipping: 2-3 business days</li>
              <li>• Overnight delivery: Next business day</li>
              <li>• International shipping: 10-21 business days</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">5. Delivery Confirmation</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For digital deliveries:
            </p>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li>• Email confirmation with project files and instructions</li>
              <li>• Client portal notifications for new uploads</li>
              <li>• Handover meetings for complex projects</li>
              <li>• Training sessions when applicable</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              For physical shipments, tracking information will be provided via email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">6. Delays and Issues</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If delivery delays occur, we will:
            </p>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li>• Notify clients immediately of any expected delays</li>
              <li>• Provide updated timeline estimates</li>
              <li>• Offer compensation when delays are due to our error</li>
              <li>• Work with clients to minimize project impact</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">7. Client Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To ensure timely delivery, clients should:
            </p>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li>• Provide accurate contact and delivery information</li>
              <li>• Respond promptly to requests for feedback or approvals</li>
              <li>• Maintain active communication throughout the project</li>
              <li>• Provide necessary access and credentials when required</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">8. International Clients</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For international clients, all digital services are delivered online regardless of location. 
              Time zone differences will be considered for live sessions and communications. 
              Any physical deliveries may incur additional customs fees and extended delivery times.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">9. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions about delivery or shipping, please contact:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Project Delivery Team</strong><br />
                Email: delivery@gdservices.com<br />
                Phone: +1 (555) 123-4567<br />
                Business Hours: Monday-Friday, 9:00 AM - 6:00 PM
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Shipping;