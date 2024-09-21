import Navbar from "@/Components/Navbar/Navbar"
import Card from "@/Components/Card/Card"
import axios from "axios"
const getrecipes = async()=>{
    
    try {
            const {data} = await axios.get('https://dummyjson.com/recipes');
            return data.recipes;
    } catch (error) {
        console.error(error);
    }
}

const page = async() => {
    const data= await getrecipes();
  return (
    <>
    <Navbar/>
    <div className="flex flex-wrap w-[100%] py-20 px-12 gap-x-16 gap-y-12 justify-center  " >
    {
        data.map((i,index)=>{
            return(
                <Card key={index} id={i.id} name={i.name} image={i.image} rating={i.rating} cuisine={i.cuisine} />
            )
        })
    }
    </div>
    </>
  )
}

export default page
