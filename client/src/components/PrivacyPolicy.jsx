import React from 'react'

const PrivacyPolicy = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#722d2d] text-[#fdecec] p-8 md:p-12 rounded-lg md:rounded-tl-[8rem] md:rounded-br-[8rem] shadow-lg">
          <h1 className="flex text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-6 justify-center text-[#ff7a7a]">Privacy Policy</h1>

          <p className="text-sm mb-4 ">
            <strong>Disclaimer</strong>
            <br />
            Product colors and texture may slightly vary due to photography and screen settings. Please follow care instructions for best results. We are not responsible for any damages caused by misuse.All purchases are subject to our Return,Refund & Shipping policies.
          </p>

          <p className="text-sm mb-6">At <span className="font-semibold text-[#fff694]">"Antariksh Silk",</span> we value your privacy and are committed to protecting your personal information.</p>

          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <h3 className="font-semibold mb-2">1. Information We Collect</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Personal details like name,phone,email,and address during order placement.</li>
                <li>Paymwnt details (processed securely through trusted gateways).</li>
                <li>Browsing data to improve our website experience.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">2. How We Use Your Information</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>To process and delivery your orders</li>
                <li>To update you on order status,offers,and promotions.</li>
                <li>To imporove our services and website performance.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">3. Data Protection</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your payment details are encrypted and handled by secure and payment gateways.</li>
                <li>We never share, sell, or misuse your personal information.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">4. Cookies</h3>
              <span className="list-disc space-y-1">
                Our website may use cookies to enhance your browsing experience and show personalized offers.
              </span>
            </div>

            <div>
              <h3 className="font-semibold mb-2">5. Third-Party Services</h3>
              <span className="list-disc space-y-1">
                We may share limited data with delivery partners or payment processors only for completing your order.
              </span>
            </div>

            <div>
              <h3 className="font-semibold mb-2">6. Your Rights</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>You can request to update or delete your personal information.</li>
                <li>You may unsubscribe from promotional emails anytime.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">7. Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, please contact us at: <br /><span className="font-medium">support@[yourbrand].com</span> | +91 98765 43210</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy