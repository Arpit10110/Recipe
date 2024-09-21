import Link from "next/link"
const Navbar = () => {
  return (
    <>
    <nav className="flex h-[10vh] items-center  justify-between pl-8 pr-8 bg-gray-600 " >
        <div className="text-4xl cursor-default ">
            <h2>FlavorFusion</h2>
        </div>
        <div className="flex gap-6 text-2xl">
            <Link className=" hover:text-red-400 " href={"/"} >Home</Link>
            <Link className=" hover:text-red-400 " href={"/recipes"} >Recipes</Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar
