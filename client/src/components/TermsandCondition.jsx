import React from 'react'

const TermsandCondition = () => {
  return (
    <section className="py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#722d2d] text-[#fdecec] p-6 sm:p-8 md:p-12 rounded-lg md:rounded-tl-[8rem] md:rounded-br-[8rem] shadow-lg max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto">
          <h1 className="flex text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-6 justify-center text-[#ff7a7a]">Terms &amp; Conditions</h1>

          <p className="text-sm md:text-base mb-4">
            <strong>Disclaimer</strong>
            <br />
            By using our website and placing an order, you agree to our terms. Product colors may vary slightly, prices may change without notice, and orders are confirmed only after payment. Returns and refunds are accepted as per our policy. We are not responsible for delays or third-party issues.
          </p>

          <p className="text-sm md:text-base mb-6">Welcome to <span className="font-semibold text-[#fff694]">"Antariksh Silk"</span>. By accessing or using our website, you agree to the following terms and conditions. Please read them carefully.</p>

          <div className="space-y-6 text-sm md:text-base leading-relaxed">
            <div>
              <h3 className="font-semibold mb-2">1. General</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>These terms apply to all visitors, users, and customers of our website.</li>
                <li>We may update these terms at any time without prior notice.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">2. Products &amp; Pricing</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>We make every effort to display saree colors, designs, and details accurately. Slight variations may occur due to screen resolution.</li>
                <li>Prices are subject to change without prior notice.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">3. Orders &amp; Payments</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>All orders are confirmed only after successful payment.</li>
                <li>We use secure payment gateways to protect your information.</li>
                <li>We reserve the right to cancel any order in case of payment issues or stock unavailability.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">4. Shipping &amp; Delivery</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Orders are shipped within the mentioned timeline.</li>
                <li>Delivery times may vary depending on location and courier services.</li>
                <li>We are not responsible for delays caused by courier partners or unforeseen events.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">5. Returns &amp; Refunds</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Returns/refunds are accepted only as per our Return &amp; Refund Policy.</li>
                <li>Sarees must be unused, unwashed, and returned in original condition with tags.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">6. Use of Website</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>You agree not to misuse the website, including unauthorized access or harmful activities.</li>
                <li>All content, images, and designs are the property of "Antariksh Silk" and cannot be copied without permission.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">7. Limitation of Liability</h3>
              <p>We are not liable for any indirect, incidental, or consequential damages arising from the use of our products or services.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">8. Governing Law</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>These terms shall be governed by the laws of India.</li>
                <li>Any disputes will be subject to the jurisdiction of courts in [Your City/State].</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">9. Contact Us</h3>
              <p>For any queries, please reach out at: <br /><span className="font-medium">support@[yourbrand].com</span> | +91 98765 43210</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TermsandCondition