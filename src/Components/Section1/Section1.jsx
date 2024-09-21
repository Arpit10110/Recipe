import Link from "next/link"
import section1Img from "@/assets/section1Img.png"
import Image from 'next/image';
const Section1 = () => {
  return (
   <>
   <section className="w-full flex flex-wrap items-center  px-16 justify-between below-sm:flex-col below-sm:pt-20 below-sm:px-5 below-sm:gap-12 h-[90vh] below-sm:h-fit " >
        <div className="w-[45%] flex flex-col gap-5 justify-center below-sm:w-[100%] " >
            <h2 className="font-medium text-4xl text-red-400  " >Discover and Savor the World's Best Fusion Flavors</h2>
            <p className="font-normal w-[100%] text-2xl below-sm:w-[95%] " >
            Welcome to FlavorFusion, where we bring together the finest global cuisines in one place. Whether you're a home cook or an experienced chef, explore our wide range of recipes that effortlessly combine tradition with innovation. Join us on a flavorful journey that turns ordinary dishes into unforgettable experiences.
            </p>
            <div className="flex items-center w-full mt-5 gap-10" >
                <Link className="bg-[rgba(253,224,71,0.8)] text-black p-3 font-bold rounded-2xl text-xl hover:scale-105 transition-all "   href={"/recipes"} >View Recipe</Link>
                <Link  className="bg-[rgba(253,224,71,0.8)] text-black p-3 font-bold rounded-2xl text-xl hover:scale-105 transition-all"  href={"/contact"} >Contact Us</Link>
            </div>
        </div>
        <div className="w-[40%] below-sm:w-[90%] " >
            <Image className="w-full" src={section1Img} alt="section1Img" />
        </div>
   </section>
   </>
  )
}

export default Section1
