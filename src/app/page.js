'use client';
import Navbar from './_components/navbar'
import HeroBanner from './_components/hero_banner'
import EmoticonTile from './_components/emoticon_tile'
import BulletScroll from './_components/bullet_scroll'
import StarSteps from './_components/star_steps'
import SocialConnection from './_components/social_connection'
import TileScroll from './_components/tile_scroll'
import VacancyTile from './_components/vacancy_tile'
import Footer from './_components/footer'
import Analytics from './_components/analytics'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useState } from 'react';
import data from './_utils/data.json' assert {type: 'json'}
import FeatureCard from './_components/feactureCard';


export default function Home() {
  const features = [
    {
      title: "Financial Support",
      description: "Crowdfunding platform for medical expenses with transparent blockchain-based donations and local payment options.",
      icon: "💰"
    },
    {
      title: "Health Expertise Access",
      description: "Connect with specialists and receive AI-powered health assistance for personalized care.",
      icon: "👨‍⚕️"
    },
    {
      title: "Medication Verification",
      description: "Blockchain-based authentication and tracking of medications to ensure safety and quality.",
      icon: "💊"
    },
    {
      title: "Medical Clinic Tracking",
      description: "Locate nearby clinics, check real-time availability, and read community reviews.",
      icon: "🏥"
    }
  ];

  gsap.registerPlugin(ScrollTrigger);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/app-proto/discover.png', '/app-proto/chats.png', '/app-proto/acall.png', '/app-proto/vcall.png', '/app-proto/preview-details.png', '/app-proto/profile-1.png', '/app-proto/step3.png', '/app-proto/preview.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      var arrMoveInLeft = document.querySelectorAll('.move-in-left')
      var arrMoveInRight = document.querySelectorAll('.move-in-right')
      var arrFadeIn = document.querySelectorAll('.fade-in')
      var arrScaleUp = document.querySelectorAll('.scale-up')
      var arrScaleUpLeft = document.querySelectorAll('.scale-up-left')
      var arrScaleUpRight = document.querySelectorAll('.scale-up-right')
      
      for (let i = 0; i < arrMoveInLeft.length; i++) {
        gsap.from(arrMoveInLeft[i], {scrollTrigger: {trigger: arrMoveInLeft[i]}, x: -1600, duration: 1, ease: "power2.out"})
      }
      
      for (let i = 0; i < arrMoveInRight.length; i++) {
        gsap.from(arrMoveInRight[i], {scrollTrigger: {trigger: arrMoveInRight[i]}, x: 1600, duration: 1, ease: "power2.out"})
      }

      for (let i = 0; i < arrFadeIn.length; i++) {
        gsap.from(arrFadeIn[i], {scrollTrigger: {trigger: arrFadeIn[i]}, opacity: 0, duration: 1, ease: "power2.in"})
      }

      for (let i = 0; i < arrScaleUp.length; i++) {
        gsap.from(arrScaleUp[i], {scrollTrigger: {trigger: arrScaleUp[i]}, scale: 0, duration: 1, ease: "power2.out"})
      }

      for (let i = 0; i < arrScaleUpLeft.length; i++) {
        gsap.from(arrScaleUpLeft[i], {scrollTrigger: {trigger: arrScaleUpLeft[i]}, scale: 0, x: -arrScaleUpLeft[i].clientWidth, duration: 1, ease: "power2.out"})
      }

      for (let i = 0; i < arrScaleUpRight.length; i++) {
        gsap.from(arrScaleUpRight[i], {scrollTrigger: {trigger: arrScaleUpRight[i]}, scale: 0, x: arrScaleUpLeft[i].clientWidth, duration: 1, ease: "power2.out"})
      }

      var t1 = gsap.timeline({scrollTrigger: ".sounds-familiar .character-move-in"})
      t1.fromTo(".sounds-familiar .character-move-in", {x: 1600, y: 50, rotation:-90}, {x: 0, y: 50, duration: 2, ease: "power1.out"})
      .fromTo(".sounds-familiar .character-move-in", {y: 50, rotation:-90}, {y: 0, duration: 1, rotation:-30, ease: "power1.out"}, "-=1")

      gsap.from(".emoticon-tile-container", {scrollTrigger: ".emoticon-tile-container", x: 1600, duration: 2, ease: "back.out(1)"})
      
      var t2 = gsap.timeline({scrollTrigger: ".meet-app .circle-boundary"})
      t2.to(".meet-app .circle-boundary", {left:0, duration: 2, ease: "none"})
      .to(".meet-app .circle-boundary", {translateX: "-50%", duration: 0.5, ease: "power1.out"})
      .to(".meet-app  .circle-boundary", {translateY: 0, duration: 0.5, ease: "none"}, "-=0.5")

      var t3 = gsap.timeline({scrollTrigger: ".meet-app .character"})
      t3.fromTo(".meet-app .character", {opacity: 0, scale: 0, rotation: 30}, {opacity: 1, scale: 1, rotation: 30, duration: 1, ease: "none"})
      .fromTo(".meet-app .character", {rotation: 30}, {rotation: 0, ease: "none", duration: 0.5}, "-=0.5")
      .from(".meet-app .star", {top: "50%", opacity: 0, ease: "none", duration: 0.5}, "-=0.5")

      gsap.to(".meet-app .leaf-1", {scrollTrigger: ".meet-app .leaf-1", x: -100, y: -100, rotation: "+="+720, duration: 3, ease: "power.1.out"})
      gsap.to(".meet-app .circle-1", {scrollTrigger: ".meet-app .leaf-1", x: -100, y: -150, duration: 3, ease: "power.1.out"})
      gsap.to(".meet-app .circle-2", {scrollTrigger: ".meet-app .leaf-1", x: -100, y: -80, duration: 3, ease: "power.1.out"})
      gsap.to(".meet-app .leaf-2", {scrollTrigger: ".meet-app .leaf-2", rotation: "-="+720, duration: 3, ease: "power.1.out"})
      gsap.to(".meet-app .flower", {scrollTrigger: ".meet-app .flower", rotation: "-="+360, duration: 3, ease: "power.1.out"})

      var t4 = gsap.timeline({scrollTrigger: ".self-improvement"})
      
      t4.fromTo(".self-improvement .character-move-in", {top: "1000%", left: "100%", rotation:0}, {top: "100%", left: "100%", duration: 2, ease: "sine.out"})
      .fromTo(".self-improvement .character-move-in", {rotation: 0}, {duration: 1, rotation:-90, ease: "sine.in"}, "-=1")
      .fromTo(".self-improvement .character-move-in", {left: "100%"}, {left: "0%", duration: 2, ease: "sine.in"}, "-=1")
      .fromTo(".self-improvement .character-move-in", {rotation: -90, top: "100%",}, {rotation: 30, top: "0%", duration: 1, ease: "power3.out"})

      gsap.from(".start-test .start-test-btn", {scrollTrigger: ".start-test .start-test-btn", opacity: 0, scale: 0, duration: 0.5})

      var t5 = gsap.timeline({scrollTrigger: ".work-with-us .character"})
      t5.to(".work-with-us .character", {rotation: 15, duration: 0.5, ease: "power1.out"})
      t5.to(".work-with-us .character", {rotation: 0, duration: 0.5, ease: "power1.in"})
      .to(".work-with-us .character", {rotation: -30, duration: 0.5, scale: 1.05, ease: "power1.out"})
      .to(".work-with-us .character", {rotation: 0, duration: 1, scale: 1, ease: "back.out(1.4)"})
    })
  
    return () => {
      ctx.revert()
    }
  }, [])
  


  return (
    <div className="main-div w-full max-w-[90rem] m-auto">
      <Navbar></Navbar>
      <HeroBanner></HeroBanner>

      <div id="about" className="py-20 px-20 flex flex-row space-x-8 justify-center">
        <div className="w-80 text-4xl font-semibold">
            <h2>
              Why SALi
            </h2>
            <div className="mt-4">
              <img src="/app-proto/preview.png" width={100} className="h-full rotate-y-12 z-10"></img>
            </div>
        </div>
        <div className="w-1/2 leading-8 text-gray-600">
        SALi Fund is a groundbreaking platform dedicated to connecting individuals facing health challenges with financial constraints to generous donors and qualified health specialists
        <br />
        SALi focuses on creating a secure, transparent, and accessible healthcare ecosystem tailored to the unique needs of Sierra Leone. By leveraging blockchain technology, local payment methods like Orange Money, and AI assistance, SALi Fund provides an innovative solution to ensure every child and student can access quality healthcare regardless of their economic situation.
        </div>
      </div>

      <div className="w-full sounds-familiar overflow-x-clip py-20">
        <div className="flex flex-row">
          <div className="move-in-left heading fade-in scale-up pl-16 pr-8 text-5xl font-semibold pb-16">
            Here is our analytics
          </div>
          </div>
          <div className="w-full overflow-x-clip flex flex-row justify-end py-4">
          <Analytics></Analytics>
          </div>
          </div>
      <div className="w-full sounds-familiar overflow-x-clip py-20">
        <div className="flex flex-row">
          <div className="move-in-left heading fade-in scale-up pl-16 pr-8 text-5xl font-semibold pb-16">
           FAQ
          </div>
          <div className="w-16 h-16 relative flex justify-center items-center self-start character-move-in">
            <img src="/character/nerd-1.png" className="absolute z-10"></img>
            <img src="/character/nerd-bg-red.png" className="absolute opacity-10 scale-125 opacity-20"></img>
          </div>
        </div>
 
        <div className="w-full overflow-x-clip flex flex-row justify-end py-4">
          <div className="emoticon-tile-container w-fit mx-auto flex flex-row px-8 items-center space-x-8">
            <EmoticonTile {...data.faqData[0]}></EmoticonTile>
            <EmoticonTile {...data.faqData[1]}></EmoticonTile>
            <EmoticonTile {...data.faqData[2]}></EmoticonTile>
            <EmoticonTile {...data.faqData[3]}></EmoticonTile>
            <EmoticonTile {...data.faqData[4]}></EmoticonTile>
          </div>
        </div>
      </div>

      <div className="w-full px-8 py-20" id="theApp">
        <div className="meet-app w-full relative overflow-clip rounde d-3xl flex flex-col justify-center space-y-20 px-12 py-20 bg-orange-50">

          <div className="w-100 grid grid-cols-2 gap-x-10 z-30">
            <div className="move-in-left heading fade-in scale-up flex flex-col space-y-6">
              <div className="text-gray-700 text-sm font-medium">
                connecting charity with technology
              </div>
              <div className="text-5xl font-semibold">
                Meet the SALi app
              </div>
            </div>
            <div></div>
          </div>
          
          <div className="w-100 grid grid-cols-2 gap-x-10 z-20">
            
            <div className="relative">
              <div className="relative z-10 rounded-full bg-gray-50 -translate-x-1/2 -translate-y-1/2 left-[40%] top-1/2 w-[16rem] aspect-square flex justify-center items-center">
                <div className="w-10/12 aspect-square rounded-full bg-white flex justify-center items-center overflow-hidden">
                  {images.map((src, index) => (
                    <img
                      key={src}
                      src={src}
                      className={`character w-1/2 absolute transition-all duration-500 ${
                        index === currentImageIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'
                      }`}
                      alt={`App screenshot ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute z-0 right-0 bottom-0">
                <div className="leaf-1 absolute bottom-0 right-0 rounded-t-full w-12 h-6 scale-x-150 rotate-45 bg-emerald-300"></div>
                <div className="circle-1 absolute rounded-full w-6 h-6 bottom-8 right-0 bg-red-200"></div>
                <div className="circle-2 absolute rounded-full w-12 h-12 top-2 right-6 bg-orange-200 flex flex-row items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                </div>
              </div>
            </div>

            <div className="scale-up-left fade-in max-w-md flex flex-col space-y-3">
              <div className="leading-6 tracking-wide text-gray-600">
                The SALi App is an innovative mobile solution that bridges healthcare access for children and students in Sierra Leone. It connects individuals facing health challenges with donors and specialists through a user-friendly interface. 
              </div>
              <div className="leading-6 tracking-wide text-gray-600">
                The app utilizes blockchain for secure, transparent transactions and integrates local payment methods like Orange Money, allowing users to donate or receive funds easily. With AI assistance, the app ensures personalized support, making quality healthcare accessible regardless of economic status, even in areas with limited internet access.
              </div>
              <div className="">
                <button class="bg-black text-sm text-white px-6 py-3 rounded-full">Go to Figma</button>
              </div>
            </div>
          </div>

          <div className="circle-boundary absolute w-1/5 aspect-square rounded-full left-2/3 bottom-0 translate-y-1/2 bg-orange-100"></div>
          <div className="leaf-2 absolute top-6 right-24 rounded-t-full w-12 h-6 scale-x-150 rotate-45 bg-emerald-300"></div>
          <div className="flower absolute -top-16 right-16 z-10 w-12 aspect-square">
            <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-1/4 aspect-square bg-orange-500"></div>
            <div className="absolute rotate-[15deg] rounded-lg w-full h-1/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-200"></div>
            <div className="absolute rotate-[75deg] rounded-lg w-full h-1/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-200"></div>
            <div className="absolute rotate-[135deg] rounded-lg w-full h-1/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-200"></div>
          </div>

        </div>
      </div>

      <div className="w-100 h-fit px-8 py-20">
        <div className="self-improvement w-100 rounded-3xl flex flex-col justify-center space-y-16 px-12 py-10">
          <div className="heading flex flex-col space-y-6">
            <div className="move-in-left fade-in scale-up text-gray-700 text-md font-medium">
              let's connect you with  donors
            </div>
            <div className="flex flex-row w-100 items-center space-x-4 relative">
              <div className="move-in-left fade-in scale-up text-5xl font-semibold">
                How to setup a funding campaign
              </div>
              <div className="flex-1 self-stretch relative flex flex-col justify-center">
                <div className="absolute character-move-in w-16 h-16 flex justify-center items-center">
                  <img src="/character/happy-1.png" className="absolute z-10"></img>
                  <img src="/character/happy-bg-gray.png" className="absolute scale-125 opacity-40"></img>
                </div>
              </div>
            </div>
          </div>
          
          <BulletScroll points={data.start_campaign_steps}></BulletScroll>

        </div>
      </div>
                
      <div className="py-20 px-20 flex flex-row space-x-8 justify-center">
        <div className="w-80 text-4xl font-semibold">
          Why a Mobile App in Sierra Leone
        </div>
        <div className="w-80 leading-8 text-gray-600">
          In Sierra Leone, mobile phone usage is widespread, with many people relying on mobile technology for communication, banking, and accessing information due to limited internet infrastructure. A mobile app allows for greater accessibility, enabling individuals to seek medical funding and assistance easily. 
        </div>
        <div className="w-80 leading-8 text-gray-600">
          It provides a user-friendly platform for connecting donors, healthcare professionals, and patients, even in remote areas. This approach bridges the gap between urban and rural communities, ensuring wider reach and impact
        </div>
      </div>
                {/* key features go here */}
      <div className="w-full px-8 py-20 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
                
      <div className="w-100 px-8 py-20">
        <div className="w-100 social-skills rounded-3xl flex flex-col justify-center items-center space-y-16 px-12 py-10 bg-sky-50">
          
          <div className="flex flex-col heading space-y-6 items-center">
            <div className="text-gray-700 text-md font-medium">
              we will be focusing on these areas one after the other 
            </div>
            <div className="text-5xl font-semibold">
              SALi Fund's Primary Focus Areas:
            </div>
          </div>

          <div className="max-w-[60rem]">
            <StarSteps steps={data.star_steps}></StarSteps>
          </div>

          <div className="w-[40rem] max-w-full">
            <SocialConnection></SocialConnection>
          </div>

        </div>
      </div>

      <div className="w-100 px-8 py-20">
        <div className="w-100 py-40 flex flex-row justify-center">

          <div className="start-test w-[40em] flex flex-col justify-center items-center text-center">
            <div className="text-gray-700 py-2">
              we draw inspiration from all the kids seeking medical funding and specialist access
            </div>
            <div className="py-2 font-bold text-3xl">
              SALi was inspired by IBRAHIM SORIE KAMARA
            </div>
            <div className="py-3 font-semibold text-xl text-gray-700">
              "Inspired by my cousin and close friend, Ibrahim Sorie Kamara, who is currently seeking funds for his critical sickle cell surgery"
            </div>
            <div className="py-4 flex flex-row items-end space-x-2">
              <div className="text-gray-700">
                with love, 
              </div>
              
            </div>
            <div className="py-4">
              <input type="email" placeholder="Enter your email" className="start-test-btn bg-white border border-gray-300 rounded-full text-black py-4 px-8 text-sm mx-4" />
              <button className="start-test-btn bg-black rounded-full text-white py-4 px-8 text-sm">Join Waiting List</button>
            </div>
            <div className="text-sm text-gray-600">
              Give us your email and we will notify you when the app is ready
            </div>
          </div>

        </div>
      </div>

      {/* <div className="w-100 px-8 py-20">
        <div className="work-with-us w-100 rounded-3xl flex flex-row space-x-6 px-12 py-10 bg-purple-50">
          
          <div className="w-1/2 flex flex-col space-y-12">
            <div className="move-in-left head fade-in scale-up text-5xl font-semibold">
              Work with us
            </div>
            <div className="w-[30rem] rounded-xl flex flex-col overflow-clip">
              {
                [
                  {"head": "About", "color": "bg-white", "body": "At sali our goal is to make self-improvement fun and lasting. We know there's a way how to make it work. And that's what aHead is all about!"},
                  {"head": "Product", "color": "bg-orange-50", "body": "Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did..."}
                ].map((item, index) =>(
                  <div className={`p-6 flex flex-col ${item.color}`}>
                    {
                      index == 0 ?
                      <div className="character origin-[50%_0%] relative w-fit py-2">
                        <img src="/character/happy-bg-gray.png" width={50} height={50} className="opacity-50 scale-125"></img>
                        <img src="/character/happy-2.png" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></img>
                      </div>
                      :
                      null
                    }
                    <div className="py-2 font-semibold text-lg">
                      {item.head}
                    </div>
                    <div className="text-gray-500 leading-8 ">
                      {item.body}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          
          <div className="flex flex-col space-y-12">
            <div className="move-in-right fade-in scale-up text-5xl font-semibold text-violet-600 self-end pr-12">
              sali
            </div>
            <div className="w-[30rem] h-[30rem]">
              <TileScroll list={data.tile_scroll_list}></TileScroll>
            </div>
          </div>
        
        </div>
      </div>

      <div className="w-100 px-8 py-20">
        <div className="w-100 rounded-3xl flex flex-col space-y-6 px-12 py-10">
          <div className="flex flex-col space-y-12">
            
            <div className="move-in-left fade-in scale-up text-5xl font-semibold">
              Open vacancies
            </div>
            
            <div className="flex flex-row items-start flex-wrap gap-10">
                {
                  data.vacancy_list.map(item => (
                    <VacancyTile {...item}></VacancyTile>
                  ))
                }
            </div>

          </div>
        </div>
      </div> */}
      
      <Footer></Footer>
    </div>
  )
}
