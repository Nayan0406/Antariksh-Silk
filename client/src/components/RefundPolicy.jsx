import React from 'react'

const RefundPolicy = () => {
  return (
    <section className="py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#702a2a] text-[#fdecec] p-6 sm:p-8 md:p-12 rounded-lg md:rounded-tl-[6rem] md:rounded-br-[6rem] shadow-lg max-w-7xl mx-auto">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-center mb-6 text-[#ff7a7a]">Return &amp; Refund Policy</h1>

          <p className="italic text-sm md:text-base mb-4"><strong className="mb-2">Disclaimer</strong>
          <br />
          "Returns are subject to quality check. Customized or discounted sarees are non-returnable. Shipping charges are non-refundable."</p>

          <p className="text-sm md:text-base mb-6">We want you to love your saree! If you are not completely satisfied, you may request a return or exchange under the following conditions:</p>

          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <div>
              <p className="font-semibold">• Return Period:</p>
              <p>Returns are accepted within 7 days of delivery.</p>
            </div>

            <div>
              <p className="font-semibold">• Condition:</p>
              <p>Saree must be unused, unwashed, and with all original tags &amp; packaging intact.</p>
            </div>

            <div>
              <p className="font-semibold">• Non-returnable Items:</p>
              <p>Custom-stitched blouses, fall/pico services, or discounted items cannot be returned.</p>
            </div>

            <div>
              <p className="font-semibold">• Refund Method:</p>
              <p>Refunds will be processed to your original payment method within 5–7 business days after quality check.</p>
            </div>

            <div>
              <p className="font-semibold">• Exchange Option:</p>
              <p>You may also choose to exchange your saree for another product of the same or higher value.</p>
            </div>

            <div className="pt-4">
              <p className="text-sm md:text-base">For assistance, please contact us at <span className="font-medium">support@[yourbrand].com</span> with your order details.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RefundPolicy
