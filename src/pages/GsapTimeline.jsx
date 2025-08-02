import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import Header from "../components/Header";

export default function GsapTimeline() {
  const title = "GsapTimeline";
  const description = "Metode gsap.timeline() digunakan untuk membuat sebuah instance timeline yang dapat digunakan untuk mengelola beberapa animasi sekaligus. Metode gsap.timeline() mirip dengan metode gsap.to(), gsap.from(), dan gsap.fromTo(), tetapi perbedaannya adalah gsap.timeline() digunakan untuk membuat dan mengatur urutan beberapa animasi.";
  // Function to animate the blue box using gsap.timeline()
  useGSAP(() => {
    const tl = gsap.timeline({repeat:-1});
    tl.to("#red-box1", { 
      x: 300, 
      duration: 2, 
      rotation: 360, 
      borderRadius: "100%",
      ease: "back.inOut"
    })
    .to("#red-box1",{
      x: 500, 
      duration: 2, 
      rotation: 360, 
      borderRadius: "8px",
      ease: "back.inOut"
    })
    
    tl.to("#red-box2", { duration: 1, x: 300, scale: 1.5, ease: "power1.in",}, "-=2")
      .to("#red-box3", { duration: 1, x: 300, ease: "power1.out", }, "-=0.1");
  }, []);
  return (
    <div className='flex flex-col items-center'>
      <div className="w-full md:w-2/3">
        <Header title={title} />
        <div className="my-3 mx-5">
          <div className='text-xl'>
            <p>{description}</p>
          </div>
          <div className='mt-20'>
            <div id="red-box1" className='w-20 h-20 bg-red-400 rounded-lg' />
          </div>
          <div className='mt-20'>
            <div id="red-box2" className='w-20 h-20 bg-red-400 rounded-lg' />
          </div>
          <div className='mt-20'>
            <div id="red-box3" className='w-20 h-20 bg-red-400 rounded-lg' />
          </div>
        </div>
      </div>
    </div>
  )
}
