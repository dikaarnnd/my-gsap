import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import Header from "../components/Header";

export default function GsapStagger() {
  const title = "GsapStagger";
  const description = "GSAP stagger adalah fitur yang memungkinkan Anda menerapkan animasi dengan jeda bertahap pada sekelompok elemen. Dengan menggunakan fitur stagger di GSAP, Anda dapat menentukan jumlah waktu jeda antar animasi untuk setiap elemen, serta menyesuaikan easing dan durasi dari masing-masing animasi. Ini memungkinkan Anda membuat efek yang dinamis dan menarik secara visual, seperti Fade bertahap, Rotasi bertahap, atau pergerakan bertahap pada elemen-elemen yang berbeda.";
  // Function to animate the blue box using gsap.stagger()
  useGSAP(() => {
    gsap.to("#purple-box1", {
      y: -200,
      opacity: 0,
      duration: 2,
      repeat: -1,
      stagger: {
        amount: 2, // Total time for the stagger effect
        from: "first", // Start from the first element
        ease: "circ.in" // Easing function for the animation
      }
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
          <div className='flex gap-5 mt-20 justify-center'>
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
