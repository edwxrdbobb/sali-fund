import { useEffect } from "react"
import gsap from "gsap"
 
export default function PhoneDemo() {
    

    const character_list_1 = [
        {"image_url": "/character/angry-1.png", "background_url": "/character/angry-bg-white.png", "scale": "scale-100", "rotation1": "rotate-0", "rotation2": "rotate-12"},
        {"image_url": "/character/nerd-3.png", "background_url": "/character/nerd-bg-white.png", "scale": "scale-125", "rotation1": "-rotate-[120deg]", "rotation2": "rotate-[100deg]"},
        {"image_url": "/character/happy-2.png", "background_url": "/character/happy-bg-white.png", "scale": "scale-150", "rotation1": "rotate-[120deg]", "rotation2": "-rotate-[112deg]"},
    ]

    const character_list_2 = [
        {"image_url": "/character/nerd-bg-red.png", "scale": "scale-50", "rotation": "-rotate-[30deg]"},
        {"image_url": "/character/nerd-bg-pink.png", "scale": "scale-50", "rotation": "rotate-[180deg]"},
        {"image_url": "/character/nerd-bg-blue.png", "scale": "scale-50", "rotation": "rotate-[60deg]"},
    ]

    useEffect(() => {
        var charatersBig = document.querySelectorAll(".phone-demo > .character-big");
        var charatersSmall = document.querySelectorAll(".phone-demo > .character-small");

      let ctx = gsap.context(() => {
        gsap.from(".phone-demo", {scale: 0, opacity: 0, duration: 1, rotationX: -30, rotationY: 30})
        gsap.from(charatersBig, {rotation: "-="+180, duration: 3, ease: "back.out(1)"})
        gsap.from(charatersSmall, {rotation: "+="+180, duration: 3, ease: "back.out(1)"})
        gsap.from(charatersBig, {opacity: 0, duration: 3, overwrite: "auto"})
        gsap.from(charatersSmall, {opacity: 0, duration: 3, overwrite: "auto"})
      })
    
      return () => {
        ctx.revert()
      }
    }, [])
    

    return (
        <div className="w-full h-full flex items-center">
            <div className="w-full h-full p-16">

                <div className="phone-demo relative h-full w-full">
                    
                    <div className="w-full relative aspect-square rounded-full text-xl flex justify-center items-center"> 
                        <div className="w-3/4 h-3/4 z-20 relative flex justify-center items-center">
                            <div className="absolute rounded-full w-5/6 h-5/6 bg-purple-200">
                            </div>
                            <img src="/app-proto/discover.png" className="h-full rotate-y-12 z-10"></img>
                            <img src="/app-proto/login.png" className="h-full z-10 rotate-12"></img>
                            <img src="/app-proto/messages.png" className="h-full z-10 rotate-16"></img>
                          
                        </div>
                    </div>

                    {
                        character_list_1.map(item => (
                            <div className={`character-big w-full h-full absolute z-50 top-0 ${item.rotation1} text-xl flex flex-row justify-end items-center`}>
                                <div className={`w-1/12 absolute ${item.scale}`}>
                                    <img src={item.image_url} className={`z-20 absolute ${item.rotation2}`}></img>
                                    <img src={item.background_url} className={`z-10 absolute ${item.rotation2} scale-125`}></img>
                                </div>
                            </div>
                        ))
                    }

                    {       
                        character_list_2.map(item => (
                            <div className={`character-small w-full h-full absolute z-50 ${item.rotation} top-0 text-xl flex flex-row justify-end items-center`}>
                                <div className={`w-1/12 absolute ${item.scale} translate-x-1/2`}>
                                    <img src={item.image_url} className={`z-20 absolute`}></img>
                                    <img src={item.background_url} className={`z-10 absolute scale-125`}></img>
                                </div>
                            </div>
                        ))
                    }

                    <div className="w-full absolute z-0 top-0 aspect-square rounded-full border-4 border-white border-dashed text-xl flex justify-center items-center"> 
                    </div>

                </div>

            </div>
        </div>
    )
}
