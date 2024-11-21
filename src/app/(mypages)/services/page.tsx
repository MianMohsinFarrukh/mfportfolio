import React from 'react'
import Image from 'next/image'
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { ImQuill } from "react-icons/im";
import { RiSeoLine } from "react-icons/ri";
import { MdOutlineVideoSettings } from "react-icons/md";
import { MdAddAPhoto } from "react-icons/md";
export default function Services() {
  return (
    <div><section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-indigo-500">OUR SERVICES</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
        </div>
        <div className="flex flex-wrap -m-4 ">
          <div className="lg:w-1/3 sm:w-1/2 p-4 ">
            <div className="flex relative outline-dashed">






              {/* 1 first dev */}

              <div><Image className="absolute inset-0  object-cover object-center mx-20 mt-10  " src="/images/one.png" alt='image' width={150} height={150} ></Image></div>
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-90 ">
                <div><RiCustomerServiceFill className="text-2xl" /></div>
                <h1 className="title-font text-lg font-medium text-indigo-500 mb-1">CUSTOMER SERVICES</h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              </div>
            </div>
          </div>








          {/* 2 second dev */}

          <div className="lg:w-1/3 sm:w-1/2 p-4 " >
            <div className="flex relative outline-dashed">
              <div><Image className="absolute inset-0  object-cover object-center mx-20 mt-10 " src="/images/two.png" alt='image' width={150} height={150} ></Image></div>

              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-90 ">
                <div><FaCode className="text-2xl" /></div>
                <h1 className="title-font text-lg font-medium text-indigo-500 mb-1">WEB DEVELOPMENT</h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              </div>
            </div>
          </div>







          {/* 3 third dev */}

          <div className="lg:w-1/3 sm:w-1/2 p-4 " >
            <div className="flex relative outline-dashed">
              <div><Image className="absolute inset-0  object-cover object-center mx-20 mt-10 " src="/images/three.png" alt='image' width={142} height={150} ></Image></div>

              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-90 ">
                <div><ImQuill className="text-2xl" /></div>
                <h1 className="title-font text-lg font-medium text-indigo-500 mb-1">UI / UX DESIGN</h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              </div>
            </div>
          </div>






          {/* 4 fourth dev */}

          <div className="lg:w-1/3 sm:w-1/2 p-4 " >
            <div className="flex relative outline-dashed">
              <div><Image className="absolute inset-0  object-cover object-center mx-20 mt-8 " src="/images/four.png" alt='image' width={150} height={150} ></Image></div>

              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-90 ">
                <div><RiSeoLine className="text-2xl" /></div>
                <h1 className="title-font text-lg font-medium text-indigo-500 mb-1">SEO</h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              </div>
            </div>
          </div>






          {/* 5 fifth dev */}

          <div className="lg:w-1/3 sm:w-1/2 p-4 " >
            <div className="flex relative outline-dashed">
              <div><Image className="absolute inset-0  object-cover object-center mx-20 mt-8 " src="/images/five.png" alt='image' width={150} height={150} ></Image></div>

              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-90 ">
                <div><MdOutlineVideoSettings className="text-2xl" /></div>
                <h1 className="title-font text-lg font-medium text-indigo-500 mb-1">VIDEO EDITING</h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              </div>
            </div>
          </div>






          {/* sixth dev */}

          <div className="lg:w-1/3 sm:w-1/2 p-4 " >
            <div className="flex relative outline-dashed">
              <div><Image className="absolute inset-0  object-cover object-center mx-20 mt-8 " src="/images/six.png" alt='image' width={160} height={160} ></Image></div>

              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-90 ">

                <div><MdAddAPhoto className="text-2xl" /></div>

                <h1 className="title-font text-lg font-medium text-indigo-500 mb-1">PHOTOGRAPHY</h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              </div>
            </div>
          </div>




        </div>
      </div>
    </section>
    
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Shooting Stars</h2>
        <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
        <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">The Catalyzer</h2>
        <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
        <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
        </svg>
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">The 400 Blows</h2>
        <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
        <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
  </div>
</section>
    
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}
