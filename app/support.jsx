import bgImage from "../public/bg.jpg"
import Image from "next/image";

export default function Support() {
    return(
        <div className="w-full min-h-screen bg-gradient-to-b from-gray-300 to-teal-100 bg-two-d  dark:bg-dark transition-all ">
        <div className="w-full h-[600px] bg-gray-900/90 absolute">
          <Image src={bgImage} className="w-full h-full object-cover mix-blend-overlay"/>
        </div>

        <div className="max-w-[1240px] mx-auto text-white relative">
          <div className="px-4 py-12">
          <h3 className="text-white text text-7xl  py-10 pt-20 font-bold xl:text-center md:text-4xl text-center sm:text-4xl text-center ">Why hire me?</h3>
        <p className="text-md py-2 px-20 text-center text-white dark:text-white">
        Hire me for adaptable communication, swift and precise edits, and unlimited revisions until perfection. Your success, communicated and crafted your way.
        </p>
          </div>
        </div>
        <div className="cards  lg:flex-row xl:flex">
        <div className="grid grid-cols-1  relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div className="w-14 p-4 bg-teal-300 text-dark rounded-lg mt-[-4rem]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              </div>
              <h3 className="font-bold text-2xl my-6">Good Communication</h3>
              <p className="text-gray-600 text-xl">Adaptable, attentive, and always connected – I'm your success partner. Opt for collaboration where communication is the driving force, not just a tool.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1  relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div className="w-14 p-4 bg-teal-300 text-dark  rounded-lg mt-[-4rem]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                </svg>

              </div>
              <h3 className="font-bold text-2xl my-6">Unlimited Revisions</h3>
              <p className="text-gray-600 text-xl">Opt for me and experience limitless revisions until perfection. Dedicated to your satisfaction, I refine each iteration closer to excellence. Your content, your way – let's get it just right.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1  relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div className="w-14 p-4 bg-teal-300 text-dark  rounded-lg mt-[-4rem]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>

              </div>
              <h3 className="font-bold text-2xl my-6">Faster Delivery Time</h3>
              <p className="text-gray-600 text-xl">Precision edits with speedy delivery – your content, instantly impactful. Time matters, and I'm here to make your work shine, pronto!</p>
            </div>
          </div>
        </div>
        
        </div>
      </div>
    )
}