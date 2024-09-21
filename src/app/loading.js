import loadinggif from "@/assets/Spinner@1x-1.0s-200px-200px.gif"
import Image from "next/image"
const Loading = () => {
  return (
   <>
   <div className="w-full flex items-center justify-center h-[70vh]">
    <Image className="w-[20%]" src={loadinggif} alt="Loading..." />
   </div>
   </>
  )
}

export default Loading