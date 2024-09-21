'use client'

import Navbar from '@/Components/Navbar/Navbar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Image from 'next/image'
const page = ({params}) => {
    const [data,setdata]=useState([]);
    const [ingredients,setingredients]=useState([]);
    const [instructions,setinstructions]=useState([]);
    const getdetail= async()=>{
        try {
                const {data} = await axios.get(`https://dummyjson.com/recipes/${params.detail}`)
                setdata(data)
                setingredients(data.ingredients) 
                setinstructions(data.instructions) 
            } catch (error) {
               console.log(error) 
        }
    }
    useEffect(() => {
     getdetail();
    }, [])
        
   return (
    <>
    <Navbar/>
        <div className='w-full flex flex-wrap items-center pt-20 justify-around below-sm:gap-8 pb-12'>
            <img className='w-[30%] rounded-e-md below-sm:w-[80%] ' src={data.image} alt={data.name} />
        <div className='w-[40%] flex flex-col gap-3 below-sm:w-[90%]' >
            <h2 className='text-4xl text-center font-bold underline  ' >{data.name}</h2>
            <h4 className='text-2xl below-sm:mt-5' >⭐ingredients:-</h4>
            {
                ingredients.map((item,index)=>{
                    return(
                        <li key={index} >{item}</li>
                    )
                })
            }
            <h4 className='text-2xl below-sm:mt-5' >⭐instructions:-</h4>
            {
                instructions.map((item,index)=>{
                    return(
                        <li key={index} >{item}</li>
                    )
                })
            }
        </div>
        </div>
    </>
  )
}

export default page