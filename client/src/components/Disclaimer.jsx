import React from 'react'

const Disclaimer = () => {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#702a2a] text-[#fdecec] p-8 md:p-12 rounded-lg md:rounded-tl-[6rem] md:rounded-br-[6rem] shadow-lg">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-center mb-6 text-[#ff7a7a]">Disclaimer</h1>

          <p className="italic text-sm mb-4"><strong className="mb-2">Disclaimer</strong>
          <br />
          "Delivery timelines may vary due to courier delays or unforeseen circumstances. Shipping charges are non-refundable."</p>

          <div className='mb-6'>
            <h4>Note:</h4>
          </div>

          <div className="space-y-4 text-sm leading-relaxed">
            <div>
              <p>• All product images on our website are for <span className='font-bold'>representation purposes only</span>. Slight variations in color,texture,and finish may occur due to photography,lighting,and screen settings.</p>

            </div>

            <div>
              <p>• Saree with <span className='font-bold'>handwoven or handcrafted work</span> may have minor irregularities, which are natural and a sign of genuine craftsmanship.</p>
            </div>

            <div>
              <p>• We make every effort to provide accurate product details; however, we do not guarantee that descriptions or other content are <span className='font-bold'>error-free, complete, or current.</span></p>
            </div>

            <div>
              <p>• By purchasing from our website, you agree that the responsibility for <span className='font-bold'> product selection, usage, and maintenance </span> lies with the customer.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Disclaimer