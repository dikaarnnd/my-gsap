import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import Header from "../components/Header";

export default function GsapFrom() {
  const title = "GsapFrom";
  const description = "Metode gsap.from() digunakan untuk menganimasikan elemen dari keadaan baru menuju keadaan saat ini. Metode ini mirip dengan gsap.to(), tetapi perbedaannya adalah gsap.from() memulai animasi dari nilai baru menuju posisi atau nilai saat ini, sedangkan gsap.to() memulai animasi dari posisi atau nilai saat ini menuju nilai baru.";
  // Function to animate the blue box using gsap.form()
  useGSAP(() => {
    gsap.from("#green-box1", {
      duration: 2,
      x: 300, // Move the box 300 pixels to the right
      rotation: 360, // Rotate the box 360 degrees
      // scale: 1.5, // Scale the box to 1.5 times its original size
      ease: "power1.inOut", // Use a smooth easing function
      repeat: -1, // Repeat the animation indefinitely
    });
    gsap.from("#green-box2", {
      duration: 2,
      x: 300, // Move the box 300 pixels to the right
      // rotation: 360, // Rotate the box 360 degrees
      // scale: 1.5, // Scale the box to 1.5 times its original size
      ease: "power1.in", // Use a smooth easing function
      repeat: -1, // Repeat the animation indefinitely
    });
    gsap.from("#green-box3", {
      duration: 2,
      x: 300, // Move the box 300 pixels to the right
      // rotation: 360, // Rotate the box 360 degrees
      scale: 1.5, // Scale the box to 1.5 times its original size
      ease: "power1.out", // Use a smooth easing function
      repeat: -1, // Repeat the animation indefinitely
    });
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
            <div id="green-box1" className='w-20 h-20 bg-green-400 rounded-lg' />
          </div>
          <div className='mt-20'>
            <div id="green-box2" className='w-20 h-20 bg-green-400 rounded-lg' />
          </div>
          <div className='mt-20'>
            <div id="green-box3" className='w-20 h-20 bg-green-400 rounded-lg' />
          </div>
        </div>
      </div>
    </div>
  )
}