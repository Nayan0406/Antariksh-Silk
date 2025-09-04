import React from 'react'

const ShippingPolicy = () => {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#702a2a] text-[#fdecec] p-8 md:p-12 rounded-lg md:rounded-tl-[6rem] md:rounded-br-[6rem] shadow-lg">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-center mb-6 text-[#ff7a7a]">Shipping Policy</h1>

          <p className="italic text-sm mb-4"><strong className="mb-2">Disclaimer</strong>
          <br />
          "Delivery timelines may vary due to courier delays or unforeseen circumstances. Shipping charges are non-refundable."</p>

          <div className='mb-6'>
            <h4>Note:</h4>
          </div>

          <div className="space-y-4 text-sm leading-relaxed">
            <div>
              <p>• <span className="font-semibold">Processing Time:</span> Orders are processed within 1-2 business days after confirmation.</p>

            </div>

            <div>
              <p>• <span className="font-semibold">Deliver Time:</span> Standard delivery takes 5-7 business days within india. For international orders, delivery may take 10-15 business days depending on location.</p>
            </div>

            <div>
              <p>• <span className="font-semibold">Shipping Charges:</span> Fress shipping on all prepaid orders above 999. Standard shipping charges apply for COD and international deliveries.</p>
            </div>

            <div>
              <p>• <span className="font-semibold">Order Tracking:</span> Once shipped, you will receive a tracking ID via email/SMS to track your package.</p>
            </div>

            <div>
              <p>• <span className="font-semibold">Delays:</span> Delivery timelines may vary due to unforessen circumsances like weather, courier delays, or holidays.</p>
            </div>

            <div>
              <p>• <span className="font-semibold">Damaged Packages:</span> If your parcel arrives damaged, please contact us immediately at support@[yourbrand].com with photos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShippingPolicy