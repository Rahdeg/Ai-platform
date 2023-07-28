"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const testimonial = [
    {
        name: "Antonio",
        avatar: "A",
        title: "Software Engineer",
        describtion: "This is the best i have seen"
    },
     {
        name: "Antonio",
        avatar: "A",
        title: "Software Engineer",
        describtion: "This is the best i have seen"
    },
    {
        name: "Antonio",
        avatar: "A",
        title: "Software Engineer",
        describtion: "This is the best i have seen"
    },
    {
        name: "Antonio",
        avatar: "A",
        title: "Software Engineer",
        describtion: "This is the best i have seen"
    }
]

const LandingContent = () => {
  return (
    <div className=' px-10 pb-20'>
        <h2 className=' text-center text-xl mb-10 font-extrabold text-white'>
            Testimonials
        </h2>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                testimonial.map((item)=>(
                    <Card key={item.describtion} className=" bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className=" flex items-center gap-x-2"> 
                            <div className="">
                                <p className=" text-lg">{item.name}</p>
                                <p className=" text-zinc-400 text-sm">{item.title}</p>
                            </div>
                            </CardTitle>
                            <CardContent className=" pt-4 px-0">
                                {item.describtion}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))
            }
        </div>
    </div>
  )
}

export default LandingContent