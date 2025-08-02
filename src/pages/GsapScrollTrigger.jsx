import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import Header from "../components/Header";

gsap.registerPlugin(ScrollTrigger);

export default function GsapScrollTrigger() {
  const title = "GsapScrollTrigger";
  const description = "GSAP ScrollTrigger adalah sebuah plugin yang memungkinkan Anda membuat animasi yang dipicu oleh posisi scroll halaman. Dengan ScrollTrigger, Anda dapat menentukan berbagai aksi yang dipicu pada titik scroll tertentu, seperti memulai atau mengakhiri animasi, menyelaraskan animasi dengan gerakan scroll pengguna (scrubbing), menempelkan elemen ke layar (pinning), dan pengaturan lainnya untuk menciptakan pengalaman pengguna yang dinamis dan responsif.";

  const scrollRef1 = useRef();
  const scrollRef2 = useRef();

  // Function to animate the blue box using ScrollTrigger
  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef1.current.children);

    boxes.forEach((box) => {
      gsap.to(box, { 
        x: 600, 
        rotation: 360, 
        borderRadius: "100%",
        scrollTrigger: {
          trigger: "#red-box1",
          start: "top center",
          end: "center bottom",
          scrub: 3,
          pin: true,
          markers: true
        },
        ease: "power1.inOut",
      },)
    }, {scope: scrollRef1})
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <div className="w-full md:w-2/3">
        <Header title={title} />
        <div className="my-3 mx-5">
          <div className='text-xl'>
            <p>{description}</p>
          </div>
          <div className='flex flex-col gap-5 mt-20 justify-center' >
            <div id="purple-box1" className='w-20 h-30 bg-gradient-to-t from-purple-800 to-purple-300 rounded-lg' />
            <div id="purple-box1" className='w-20 h-30 bg-gradient-to-t from-purple-800 to-purple-300 rounded-lg' />
            <div id="purple-box1" className='w-20 h-30 bg-gradient-to-t from-purple-800 to-purple-300 rounded-lg' />
            <div id="purple-box1" className='w-20 h-30 bg-gradient-to-t from-purple-800 to-purple-300 rounded-lg' />
            <div id="purple-box1" className='w-20 h-30 bg-gradient-to-t from-purple-800 to-purple-300 rounded-lg' />
            <div id="purple-box1" className='w-20 h-30 bg-gradient-to-t from-purple-800 to-purple-300 rounded-lg' />
          </div>
          <div className='flex mt-20 w-full h-screen items-center' ref={scrollRef1}>
            <div id="red-box1" className='w-20 h-20 bg-red-400 rounded-lg' />
          </div>
          <div className='flex flex-col gap-5 mt-20 justify-center'>
            <div id="purple-box1" className='w-20 h-30 bg-gradient-to-t from-purple-800 to-purple-300 rounded-lg' />
            <div id="purple-box1" className='w-20 h-30 bg-gradient-to-t from-purple-800 to-purple-300 rounded-lg' />
            <div id="purple-box1" className='w-20 h-30 bg-gradient-to-t from-purple-800 to-purple-300 rounded-lg' />
            <div id="purple-box1" className='w-20 h-30 bg-gradient-to-t from-purple-800 to-purple-300 rounded-lg' />
            <div id="purple-box1" className='w-20 h-30 bg-gradient-to-t from-purple-800 to-purple-300 rounded-lg' />
            <div id="purple-box1" className='w-20 h-30 bg-gradient-to-t from-purple-800 to-purple-300 rounded-lg' />
          </div>
        </div>
      </div>
    </div>
  )
}
