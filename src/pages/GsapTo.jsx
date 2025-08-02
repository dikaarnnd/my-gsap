import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import Header from "../components/Header";

export default function GsapTo() {
  const title = "GsapTo";
  const description = "Metode gsap.to() digunakan untuk menganimasikan elemen dari keadaan saat ini ke keadaan baru. Metode ini mirip dengan gsap.from(), tetapi perbedaannya adalah gsap.to() memulai animasi dari posisi atau nilai saat ini menuju nilai baru, sedangkan gsap.from() memulai animasi dari nilai baru menuju posisi atau nilai saat ini.";
  
  // Function to animate the blue box using gsap.to()
  useGSAP(() => {
    gsap.to("#blue-box1", {
      duration: 2,
      x: 300, // Move the box 300 pixels to the right
      rotation: 360, // Rotate the box 360 degrees
      // scale: 1.5, // Scale the box to 1.5 times its original size
      ease: "power1.inOut", // Use a smooth easing function
      repeat: -1, // Repeat the animation indefinitely
    });
    gsap.to("#blue-box2", {
      duration: 2,
      x: 300, // Move the box 300 pixels to the right
      // rotation: 360, // Rotate the box 360 degrees
      // scale: 1.5, // Scale the box to 1.5 times its original size
      ease: "power1.in", // Use a smooth easing function
      repeat: -1, // Repeat the animation indefinitely
    });
    gsap.to("#blue-box3", {
      duration: 2,
      x: 300, // Move the box 300 pixels to the right
      // rotation: 360, // Rotate the box 360 degrees
      scale: 1.5, // Scale the box to 1.5 times its original size
      ease: "power1.out", // Use a smooth easing function
      repeat: -1, // Repeat the animation indefinitely
    });
  }, []);
  return (
    <div className='flex flex-col items-center pb-3'>
      <div className="w-full md:w-2/3">
        <Header title={title} />
        <div className="my-3 mx-5">
          <div className='text-xl'>
            <p>{description}</p>
          </div>
          <div className='mt-20'>
            <div id="blue-box1" className='w-20 h-20 bg-blue-400 rounded-lg' />
          </div>
          <div className='mt-20'>
            <div id="blue-box2" className='w-20 h-20 bg-blue-400 rounded-lg' />
          </div>
          <div className='mt-20'>
            <div id="blue-box3" className='w-20 h-20 bg-blue-400 rounded-lg' />
          </div>
        </div>
      </div>
    </div>
  )
}