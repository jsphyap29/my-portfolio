import Icons from "./icons"
import Image from "next/image";
import devjsph from '../public/2213.jpg'
import design from '../public/design.png'
import web1 from '../public/web1.jpg'
import web2 from '../public/web2.jpg'
import bg2 from '../public/bg2.png'
import web4 from '../public/web4.jpg'
import web11 from '../public/web11.jpg'
import web9 from '../public/web9.png'
import Support from "./support";
import photography from '../public/photography.png'
import montage from '../public/montage.png'
import ThemeToggle from "./ThemeToggle";
import ".//globals.css";
import 'animate.css';
import Footer from "./footer";


export default function Home() {
return (
<div className="font-Montserrat">
  <div class="custom-shape-divider-bottom-1700807598">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        class="shape-fill"></path>
    </svg>
  </div>
  <main className="">
    <header className="bg-white sm:px-30 md:px-40 lg:px-40 xl:px-40 dark:bg-dark transition-all">
      <section className='min-h-screen'>
        <nav className='cust-nav pt-10 mb-1 flex justify-between ml-10'>
          <h1 className="animate__animated animate__fadeInLeft text-xl dark:text-white">@jsphyaps</h1>
          <ul className="nav-list flex items-center">
            <li>
              <ThemeToggle />
            </li>
            <li>
                <div className="flex justify-center items-center ">
                <a className="flex justify-center items-center w-20 mx-10 bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-2 rounded-md"
                  href="https://drive.google.com/file/d/1McAmBnynUEFMZUPlx9q8rFDGtXV_ZHMo/view?usp=sharing"
                  target="blank_">Resume</a>
                </div>
            </li>
          </ul>
        </nav>

        <div className="flex justify-center">
          <Image src={devjsph} className="relative mx-auto rounded-full w-60 h-65 mt-20 shadow-lg " />
        </div>

        <div className="text-center p-10 animate__animated animate__fadeInUp ">
          <h2 className=" text-3xl py-2 text-teal-600 font-bold lg:text-3xl xl:text-6xl dark:text-teal-300">Joseph Andrei Yap</h2>
          <h3 className="text-xl py-2 md:text-lg dark:text-gray-400">Video Editor/Creator</h3>
          <p className="text-sm leading-5 text-gray-800 dark:text-white">I am a
            talented hardworking
            experienced video editor,
            photographer, and video grapher, I am adept at handling multiple tasks
            on a daily basis competently and at working well under pressure</p>
        </div>
        <div className="flex justify-center pb-5">
          <div className="w-56">
          <div
              className="animate__animated animate__fadeIn animate__delay-1s flex gap-10 text-gray-600 dark:text-gray-300">
              <Icons />
            </div>
          </div>
        </div>
        
      </section>
    </header>


    <section className="second-sec bg-gradient-to-b from-gray-300 to-teal-100 bg-two-d px-10 sm:px-20 md:px-20 lg:px-40 xl:px-40 dark:bg-two-d transition-all ">
      <div>
        <h3 className="text-white text text-7xl  py-10 pt-20 font-bold xl:text-center md:text-4xl text-center sm:text-4xl text-center dark:text-black ">Services Offered</h3>
        <p className="text-md py-2 leading-8 text-white dark:text-black">
          Unlock a world of creative possibilities with my diverse range of services, spanning Video Animation, Photo
          and Videography, and Video Editing, where every project is meticulously crafted to captivate, communicate, and
          leave a lasting impact.
        </p>
        <p className="text-md py-2 leading-8 text-white dark:text-black"> I craft seamless, captivating narratives
          tailored to your
          vision. Expect creative excellence, timely delivery, and collaborative spirit.</p>
      </div>
      <div className="justify-center items-center lg:flex gap-10 py-10 xl:flex gap-10 py-10">
        <div className="text-black bg-slate-200 text-center py-14 px-14 rounded-xl my-10 dark:bg-gray-700 shadow-lg shadow-blue-500/30">
          <div>
            <h3 className="text-lg font-extrabold dark:text-white">Video Animation</h3>
            <div className="img-wrap flex justify-center">
              <Image className="my-10" src={design} width={100} height={100} />
            </div>
            <p className="dark:text-white">Creative Motion Mastery</p>
            <h4 className="py-4 text-teal-600 dark:text-teal-300">Design tools I use</h4>
            <div className="text-gray-500 py-1 dark:text-gray-400">
              <p>Adobe After Effects</p>
              <p>DaVinci Resolve</p>
              <p>Adobe Premiere Pro</p>
            </div>
          </div>
        </div>
        <div className="text-black bg-slate-200 text-center py-14 px-14 rounded-xl my-10 dark:bg-gray-700 shadow-lg shadow-blue-500/30">
          <div>
          <h3 className="text-lg font-extrabold dark:text-white">Video and Photography</h3>
            <div className="img-wrap flex flex-nowrap justify-center">
              <Image className="my-10" src={photography} width={100} height={100} />
            </div>
            <p className="dark:text-white">Visual Storytelling Excellence</p>
            <h4 className="py-4 text-teal-600 dark:text-teal-300">Design tools I use</h4>
            <div className="text-gray-500 py-1 dark:text-gray-400">
              <p>DJI RS3 MINI</p>
              <p>SONY A7IV</p>
              <p>CANON 650d</p>
            </div>
          </div>
        </div>
        <div className="text-black bg-slate-200 text-center py-14 px-14 rounded-xl dark:bg-gray-700 shadow-lg shadow-blue-500/30">
        <div>
        <h3 className="text-lg font-extrabold dark:text-white">Video Editing</h3>
          <div className="img-wrap flex flex-nowrap justify-center">
            <Image className="my-10" src={montage} width={100} height={100} />
          </div>
          
          <p className="dark:text-white">Precision in Post.</p>
          <h4 className="py-4 text-teal-600 dark:text-teal-300">Design tools I use</h4>
          <div className="text-gray-500 py-1 dark:text-gray-400">
            <p>DaVinci Resolve</p>
            <p>Adobe Premiere Pro</p>
            <p>Final Cut Pro</p>
          </div>
        </div>
      </div>
      </div>
    </section>

    <section className="bg-white px-10 md:px-20 lg:px-40 dark:bg-dark transition-all">
      <div>
        <h3 className="text text-center text-5xl py-5 font-bold pt-10 dark:text-white">Portfolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">To work in a dynamic professional
          environment with a growing
          organization and utilize my creativity and innovative
          thinking for benefit of the organization and myself.
          Step into a world where memories transform into cinematic treasures. As a skilled video editor and videography
          photographer, I offer tailored services that bring your moments to life.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white"> I craft seamless, captivating narratives
          tailored to your
          vision. Expect creative excellence, timely delivery, and collaborative spirit.</p>
      </div>

      <div className="flex flex-col gap-10 py-10 xl:flex-row xl:flex-wrap lg:flex-row lg:flex-wrap md:flex-row md:flex-wrap ">
        <div className="basis-1/3 flex-1">
          <a href="https://bonaudswedding.pixieset.com/bonandaudrey/" target="_blank">
            <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
          </a>
          <p className="port-desc dark:text-white">PRENUP WEDDING</p>
        </div>
        <div className="basis-1/3 flex-1">
          <a href="">
            <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
          </a>
          <p className="port-desc dark:text-white ">CARS</p>
        </div>
        <div className="basis-1/3 flex-1">
          <a href="">
            <Image src={web11} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
          </a>
          <p className="port-desc dark:text-white">VACATION</p>
        </div>
        <div className="basis-1/3 flex-1">
          <a href="">
            <Image src={bg2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
          </a>
          <p className="port-desc dark:text-white">EXPLAINER</p>
        </div>
        <div className="basis-1/3 flex-1">
          <a href="">
            <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
          </a>
          <p className="port-desc dark:text-white">EVENTS</p>
        </div>
        <div className="basis-1/3 flex-1">
          <a href="">
            <Image src={web9} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
          </a>
          <p className="port-desc dark:text-white">RANDOM</p>
        </div>
      </div>
    </section>


  </main>
  <Support/>
  <Footer />


</div>
)
}