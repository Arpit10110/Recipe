import Link from "next/link"
const Card = ({id,name,image,rating,cuisine}) => {
  return (
    <>
    <Link className="w-[20%] below-sm:w-[90%] " href={`/recipes/${id}`} >
    <div className="hover:scale-105 transition-all border-[1px] w-[100%] rounded-md border-gray-500 flex flex-col justify-center items-center p-5 gap-5 ">
        <img className="w-[95%] bg-cover   " src={image} alt={name}  />
        <div className="w-full items-center flex flex-col">
            <h2 className="text-2xl">{name}</h2>
            <div className="flex text-gray-300 gap-10 mt-5 text-xl items-start justify-start " >
                <h2>Cuisine:-{cuisine}</h2>
                <h2>Rating:-{rating}</h2>
            </div>
        </div>
    </div>
    </Link>
    </>
  )
}

export default Card
