  import { useEffect } from "react";
  import './App.css';
  import './index.js'
  import AOS from "aos";
  import "aos/dist/aos.css";
  import {Button} from "@nextui-org/react";
  import'@fontsource/poppins';
import Footer from "./Footer";

function Toggle(e, n){
  document.querySelector('.mh-active').classList.remove('mh-active');
  e.classList.add('mh-active');

  if (n === 1) {
    if (!document.getElementById('t1').classList.contains('active')) {
      document.querySelector('.active').classList.remove('active');
      document.getElementById('t1').classList.add('active');
    }
  }
  else if (n === 2) {
    if (!document.getElementById('t2').classList.contains('active')) {
      document.querySelector('.active').classList.remove('active');
      document.getElementById('t2').classList.add('active');
    }
  }
  else if(n === 3) {
    if (!document.getElementById('t3').classList.contains('active')) {
      document.querySelector('.active').classList.remove('active');
      document.getElementById('t3').classList.add('active');
    }
  }
  else if(n === 4) {
    if (!document.getElementById('t4').classList.contains('active')) {
      document.querySelector('.active').classList.remove('active');
      document.getElementById('t4').classList.add('active');
    }
  }
  else if(n === 5) {
    if (!document.getElementById('t5').classList.contains('active')) {
      document.querySelector('.active').classList.remove('active');
      document.getElementById('t5').classList.add('active');
    }
  }
  else if(n === 6) {
    if (!document.getElementById('t6').classList.contains('active')) {
      document.querySelector('.active').classList.remove('active');
      document.getElementById('t6').classList.add('active');
    }
  }
} 

  function App() {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

    return (
      <>
        <div className="sec1 flex flex-row mx-auto overflow-hidden h-svh tablet:flex-col tablet:flex-col-reverse mobile:flex-col mobile:flex-col-reverse mobile:z-10" data-aos="fade-up">
          <div className="baseline-1/2 text-left tablet:w-full mobile:w-full">
            <div className='flex justify-between'>
            <img className="h-20 w-20  -ml-4"src="src\files\screen 1\Logo Small Size.png" alt="" /> 
            </div>         
            <h1 className="text-6xl text-blue font-extrablack my-4 tracking-widest leading-normal w-5/6 mobile:text-3xl">Explore & Dive into Digital <span className='text-teal'>Abyss</span></h1>
            <p className="my-4 font-bold antialiased tracking-widest w-4/5">Get top-notch IT Services to optimise your business operations and
              enhance your digital presence. </p>
              <div className="flex align-items-center">
                <Button className="text-white bg-btncolor text-xl p-6 rounded-2xl mt-10" variant="bordered">Know More</Button>
                <img className="h-21 -mt-4 p-0" src="src/files/screen 1/animation_lkuy19vf_small.gif" alt="" />
              </div>
              <div>
                <img src="src/files/screen 1/Happy faces.jpg" alt=""/>
              </div>
              <div className='flex font-bold align-items-center'>
                <img src="src/files/screen 1/Verified Account.png" alt=""/>
                <p>Trusted by 200+ Clientele Review</p>
              </div>
          </div>
          <div className="basis-1/2 relative h-svh grid justify-items-end overflow-visible tablet:w-full tablet:overflow-hidden mobile:w-full mobile:overflow-hidden">
          <Button className="btn mt-8 text-lg py-5 px-6 rounded-br-none text-black font-bold border-black float-right mr-6 shadow-xl" color="primary" variant="bordered">Get Help...</Button>
          <img className="max-w-lg absolute mt-24 -ml-28 tablet:justify-self-center ml-0 mobile:justify-self-center" src="src/files/screen 1/Hand art 1.png" alt="" />
          </div>
        </div>

        {/* company logo animation */}
        <div className='relative py-20 flex flex-col justify-center h-full  m-1'>
          <h1 className='text-3xl text-center mt-4'>Trusted by more than 50+ companies</h1>
          <div className="photocontainer relative overflow-hidden mt-16 items-center">
        <div className="photobanner1 flex mt-16 absolute overflow-hidden m-1">
            <img src="src/files/screen 1/slider 1/Awign.png" alt=""/>
            <img src="src/files/screen 1/slider 1/Cultfit.png" alt=""/>
            <img src="src/files/screen 1/slider 1/Fastag.png" alt=""/>
            <img src="src/files/screen 1/slider 1/Ola.png" alt=""/>
            <img src="src/files/screen 1/slider 1/Paytm.png" alt=""/>
            <img src="src/files/screen 1/slider 1/Phonepe.png" alt=""/>
            <img src="src/files/screen 1/slider 1/Upgrad.png" alt=""/>
            <img src="src/files/screen 1/slider 1/Zomato.png" alt=""/>
            <img src="src/files/screen 1/slider 1/Awign.png" alt=""/>
            <img src="src/files/screen 1/slider 1/Cultfit.png" alt=""/>
            <img src="src/files/screen 1/slider 1/Fastag.png" alt=""/>
            <img src="src/files/screen 1/slider 1/Ola.png" alt=""/>
            <img src="src/files/screen 1/slider 1/Paytm.png" alt=""/>
            <img src="src/files/screen 1/slider 1/Phonepe.png" alt=""/>
            <img src="src/files/screen 1/slider 1/Upgrad.png" alt=""/>
            <img src="src/files/screen 1/slider 1/Zomato.png" alt=""/>
        </div>
        <div className="photobanner flex mt-26 absolute overflow-hidden m-1">
        <img src="src/files/screen 1/slider 2/Amazonpay.png" alt=""/>
            <img src="src/files/screen 1/slider 2/FI.png" alt=""/>
            <img src="src/files/screen 1/slider 2/Flipkart.png" alt=""/>
            <img src="src/files/screen 1/slider 2/Airtel Payment bank.png" alt=""/>
            <img src="src/files/screen 1/slider 2/meesho.png" alt=""/>
            <img src="src/files/screen 1/slider 2/Rapido.png" alt=""/>
            <img src="src/files/screen 1/slider 2/TPSODL.png" alt=""/>
            <img src="src/files/screen 1/slider 2/Idemia.png" alt=""/>
            <img src="src/files/screen 1/slider 2/Amazonpay.png" alt=""/>
            <img src="src/files/screen 1/slider 2/FI.png" alt=""/>
            <img src="src/files/screen 1/slider 2/Flipkart.png" alt=""/>
            <img src="src/files/screen 1/slider 2/Airtel Payment bank.png" alt=""/>
            <img src="src/files/screen 1/slider 2/meesho.png" alt=""/>
            <img src="src/files/screen 1/slider 2/Rapido.png" alt=""/>
            <img src="src/files/screen 1/slider 2/TPSODL.png" alt=""/>
            <img src="src/files/screen 1/slider 2/Idemia.png" alt=""/>
        </div>
      </div>
      </div>
      <main>

    <div className="relative mh3 mh003 -mt-32 py-5 ">
      <div className="mh31">
      <h1>Industry focused Services <span className="text-center text-blue">For Enterprises</span></h1>
      <div className="mh311 flex">
        <div className="mh3111 mh-active" onClick= { () => Toggle(this, 1)}>
            <p>IT Services &<br></br>
              Consulting</p>
          </div>
          <div className="mh3111" onClick={ () =>  Toggle(this, 2)}>
            <p>Back-End <br></br>
              Services</p>
          </div>
          <div className="mh3111" onClick={ () => Toggle(this, 3)}>
            <p>Digital Customer<br></br>
              Experience</p>
          </div>
          <div className="mh3111" onClick={ () => Toggle(this, 4)}>
            <p>Finance & <br></br>
              Accounting</p>
          </div>
          <div className="mh3111" onClick={ () => Toggle(this, 5)}>
            <p>Recuitment<br></br>
              On-Demand</p>
          </div>
          <div className="mh3111" onClick={ () => Toggle(this, 6)}>
            <p>GIS &<br></br>
              Geo Spatial</p>
          </div>

        </div>

        <div className="mh312 flex active" id="t1">
          <div className="mh3121">
            <h5>Comprehensive IT Services & Consulting to Boost <br></br>Your Business</h5>
            <p>Providing top-notch IT solutions that empowers to thrive in the modern technological age</p>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Managed IT Services </p>
            </div>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Software Development </p>
            </div>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Cybersecurity & Compliance </p>
            </div>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Cloud Consultation & Migration </p>
            </div>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Data Management & Backup </p>
            </div>
          </div>
          <div className="mh3122">
            <img src="src/files/screen 1/Img 1.jpg" alt=""/>
          </div>
        </div>

        <div className="mh312 flex" id="t2">
          <div className="mh3121">
            <h5>Enhancing Operational Excellence & Streamlining Success</h5>
            <p>Elevate your digital experiences and operational efficiency with our experts.</p>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Data Entry & Management </p>
            </div>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>IT Helpdesk & Technical Support</p>
            </div>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Catalog Management</p>
            </div>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Quality Assurance & Testing</p>
            </div>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Customer Support & Chat Support</p>
            </div>
          </div>
          <div className="mh3122">
            <img src="src/files/screen 1/Img 2.jpg" alt=""/>
          </div>
        </div>

        <div className="mh312 flex" id="t3">
          <div className="mh3121">
            <h5>Elevate Your Business with Crafted Digital <br></br>Customer Experience</h5>
            <p>Future of business where every click, tap, and interaction shapes your brand&apos;s story.</p>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Online Reputation Management </p>
            </div>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Social Media Engagement Strategies </p>
            </div>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Seamless Multi-Channel Support </p>
            </div>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Virtual Assistants & Chatbots </p>
            </div>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>User-Centric Digital Transformation </p>
            </div>
          </div>
          <div className="mh3122">
            <img src="src/files/screen 1/Img 3.jpg" alt=""/>
          </div>
        </div>

      
        <div className="mh312 flex" id="t4">
      <div className="mh3121">
          <h5>Implementing robust Financial Management<br/> Strategy</h5>
            <p>Transform your financial management into a strategic advantage that<br/> propels your business forward.</p>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Accounts Payable & Recievable </p>
            </div>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Financial Reporting & Analysis </p>
            </div>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Payroll Processing</p>
            </div>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Financial Advisory & Consultation</p>
            </div>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Tax Preparation & Compliance </p>
            </div>
      </div>
          <div className="mh3122">
            <img src="src/files/screen 1/Img 4.jpg" alt=""/>
          </div>
        </div>


        <div className="mh312 flex" id="t5">
          <div className="mh3121">
            <h5>Tech ahead Decodes the Complexities of <br />On-Demand Recruitment</h5>
            <p>With our expertise, you can access a pool of top-tier candidates & <br/>streamline your hiring process. </p>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Customized Talent Search</p>
            </div>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Flexible Staffing Solutions</p>
            </div>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Access to Expertise</p>
            </div>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Time and Cost Efficiency</p>
            </div>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Agile Recruitment Process </p>
            </div>
          </div>
          <div className="mh3122">
            <img src="src/files/screen 1/Img 5.jpg" alt=""/>
          </div>
        </div>

        <div className="mh312 flex" id="t6">
          <div className="mh3121">
            <h5>Unlocking the Power of GIS & Transforming <br /> Data into Insights</h5>
            <p>We harness the power of geographic information to transform data into <br/>actionable intelligence</p>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Survey & Data Collection </p>
            </div>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Asset & Consumer Indexing </p>
            </div>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Digitization & Base Map</p>
            </div>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Asset Mapping</p>
            </div>
            <div className="mh31211 flex">
              <img src="src/files/Right.png" alt=""/>
              <p>Town Planning </p>
            </div>
          </div>
          <div className="mh3122">
            <img src="src/files/screen 1/Img 6.jpg" alt=""/>
          </div>
        </div>

        </div>
      </div>

      {/* why to choose  */}
        <div className='flex flex-col min-h-svh p-6  mobile:p-0'>
          <h1 className='text-center font-bold text-5xl m-10 mobile:text-3xl' data-aos="fade-up">Why to choose <span className='text-blue'>Past Venture</span></h1>
        <div className="flex items-center justify-center p-5 mobile:flex-col mobile:p-0" data-aos="fade-right">
          <div className="flex w-1/2 items-center  gap-4 mobile:w-full mobile:flex-col mobile:gap-x-6">
            <div className='bg-seascape rounded-full p-2'>
            <img className='float-left bg-orchid rounded-full p-2 border-white'src="src/files/screen 1/Time.png" alt="" />
            </div>
            <h3 className='text-2xl font-bold mobile:text-xl'>Ahead of the Curve</h3>
          </div>
          <div className="w-1/2 mobile:w-full">
            <p className='mobile:text-sm'>Stay ahead of the curve with our innovative approach that embraces the latest technologies and industry
                trends.</p>
          </div>
        </div>

        <div className="choosecontainer relative mobile:mt-4">
            <img className='absolute' src="src/files/Sportive car hand drawn outline.png" alt=""/>
            <img src="src/files/Vector 3.png" alt=""/>
            <img className="absolute ml-48 mt-28" src="src/files/Swirly scribbled arrow.png" alt=""/>
          </div>

        <div className="flex items-center justify-center p-5 mobile:flex-col mobile:p-0 mobile:flex-col-reverse" data-aos="fade-left">
        <div className="w-1/2 mobile:w-full">
            <p className='mobile:text-sm'>From day-to-day troubleshooting to strategic guidance, we&apos;re here to provide reliable support whenever
                you need it.</p>
          </div>
          <div className="flex w-1/2 items-center justify-center gap-4 mobile:w-full mobile:flex-col mobile:gap-x-6 ">
            <div className='bg-seascape rounded-full p-2'>
            <img className='float-left bg-orchid rounded-full p-2 border-white'src="src/files/screen 1/24 hours support.png" alt="" />
            </div>
            <h3 className='text-2xl font-bold mobile:text-xl'>Reliable Support</h3>
          </div>
        </div>

        <div className="choosecontainer relative ">
            <img src="src/files/Vector 4.png" alt=""/>
            <img className='absolute mt-24 ml-20' src="src/files/Scribble.png" alt=""/>
          </div>

        <div className="flex items-center justify-center p-5 mobile:flex-col mobile:p-0" data-aos="fade-right">
          <div className="flex w-1/2 items-center gap-4 mobile:w-full mobile:flex-col mobile:gap-x-6">
            <div className='bg-seascape rounded-full p-2'>
            <img className='float-left bg-orchid rounded-full p-2 border-white'src="src/files/screen 1/Badge.png" alt="" />
            </div>
            <h3 className='text-2xl font-bold mobile:text-xl'>Experienced Professionals</h3>
          </div>
          <div className="w-1/2 mobile:w-full">
            <p className='mobile:text-sm'>Our team comprises seasoned IT experts with a track record of delivering successful projects across
                diverse industries.</p>
          </div>
        </div>
        </div>
        </main>
        {/* Recognition */}
        <div className="sec1 recogcontainer min-h-svh m-2">
          <h1 className="text-center text-5xl font-bold m-1 " data-aos="fade-up"><span className="text-blue">Recognised</span>By</h1>
          <p className="text-center text-xl m-6" data-aos="fade-up">We have been acknowledged & honoured</p>
          <div className="recogimg flex flex-wrap items-center justify-center gap-x-40 gap-y-10 " data-aos="fade-up">
             <img src="src/files/screen 1/Startup Odisha.png" alt="" />
             <img src="src/files/screen 1/Startup india 1.png" alt="" />
             <img src="src/files/screen 1/MSME 1.png" alt="" />
             <img src="src/files/screen 1/LSE 1.png" alt="" />
             <img className="img1"src="src/files/screen 1/UNDP_logo 1.png" alt="" />
          </div>
        </div>
        {/* differ */}
        <div className="sec1 min-h-svh">
          <h1 className='text-5xl text-center font-bold mobile:text-4xl' data-aos="fade-up">How we are Differ <span className="text-blue">from others ?</span></h1>
          <div className="flex p-8 items-center mobile:flex-col">
            <div className='p-4 -mt-16 space-y-5 mobile:mt-0'>
              <img className="" src="src/files/screen 1/Test 1.jpg" alt="" data-aos="fade-right"/>
              <b className='text-2xl font-bold mt-1' data-aos="fade-right">Client-Centric Philosophy</b>
              <p className='mt-5' data-aos="fade-right">Unlike others, we don&apos;t just provide cookie-cutter solutions. We start by deeply understanding your
                unique challenges, goals, and aspirations. This client-centric approach forms the foundation of every
                solution we craft.</p>

              <img className="" src="src/files/screen 1/Test 2.jpg" alt="" data-aos="fade-right"/>  
              <b className='text-2xl font-bold mt-1' data-aos="fade-right">Innovation Beyond Buzzwords</b>
              <p className='mt-5' data-aos="fade-right">Innovation is a buzzword in the industry, but at Past Venture, it&apos;s in our DNA. Our innovation goes
                beyond just adopting the latest trends. We proactively explore groundbreaking technologies and tailor
                them to deliver real, tangible value to your business.</p>
            </div>
            <div className='p-8 mobile:hidden' >
              <img className="w-12 "src="src/files/Line 3.png" alt=""/>
            </div>
            <div className='p-4 space-y-10 mt-12'>
              <div className="flex flex-col mobile:flex-col-reverse">
                <div className="">
                  <b className='text-2xl font-bold mt-1' data-aos="fade-left">Special Expertise</b>
                  <p className='mt-5' data-aos="fade-left">While many claim a global presence, we truly deliver on that promise. Our nationwide network of experts
                   combines global best practices with local insights, resulting in solutions that resonate with your
                    specific market dynamics </p>
                </div> 
                  <img className="mt-5" src="src/files/screen 1/Test 3.jpg" alt="" data-aos="fade-left"/>
              </div>

              <div className="flex flex-col mobile:flex-col-reverse">
                <div className="">
                  <b className='text-2xl font-bold mt-1' data-aos="fade-left">End-to-End Partnership</b>
                  <p className='mt-5' data-aos="fade-left">We&apos;re not just vendors; we&apos;re your partners in progress. From initial consultations to ongoing support,
                    we&apos;re by your side throughout your technology journey. We&apos;re invested in your success, and our
                    collaboration reflects that commitment. </p>
                </div> 
                  <img className="mt-5" src="src/files/screen 1/Test 4.jpg" alt="" data-aos="fade-left"/>
              </div>
            </div>
          </div>
        </div>

        {/* customer choose us */}
        <div className="sec1 -mt-16 mobile:-mt-8">
          <h1 className="text-5xl text-center font-bold m-6 mobile:text-3xl" data-aos="fade-up">Here&apos;s Why <span className="text-blue">Our Customers</span>Choose Us</h1>
          <img src="src/files/Clients Word.jpg" alt="" data-aos="fade-up"/>
        </div>

        <div className="sec1 flex relative items-center mobile:flex-col" data-aos="fade-up">
          <div className="flex">
            <div>
            <div className=' flex mt-12 ml-8'>
            <div className='-mt-20 ml-4'>
            <img src="src/files/Speedometer hand drawn tool.png" alt=""/>
            </div>
            <h2 className='text-4xl -ml-4 w-96 font-bold leading-normal'>We are here to <span className='border-y-4 '>assist</span> your project</h2>
            <img className='absolute ml-80 mt-14' src="src/files/screen 1/Paper plane.png" alt=""/>
          </div>
          <div className='flex items-center relative'>
            <a className='flex items-center relative' href="/Career">
            <img className='absolute ml-40' src="src/files/379 1.png"/>
            <h4 className='z-0 ml-32 text-3xl -ml-4 w-96 font-bold leading-normal'>Let&apos;s talk!</h4>
            <img className='z-10 -ml-36' src="src/files/screen 1/Rotated right arrow with broken line.png" alt=""/>
            </a>
            
          </div>
        </div>
            </div>  

            <div className='w-1/2 grid justify-items-end' data-aos="ease-out">
            <img className="w-96" src="src/files/screen 1/2204_w048_n004_56a_p1_56.jpg" alt=""/>
            </div>
          </div>
          {/* footer section */}
            <Footer />


      </> 
    )
  }

  export default App
