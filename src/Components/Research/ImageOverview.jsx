import React from 'react'
import { Link } from 'react-router-dom'

const ImageOverview = () => {
    let text = [
        {
            img: "https://images.openai.com/blob/7c44eedc-3563-4438-9fb0-ea297250807e/hierarchical-text-conditional-image-generation-with-clip-latents.jpg?trim=0,0,0,0&width=800",
            title: "Hierarchical text-conditional image generation with CLIP latents",
            desc: "We show that explicitly generating image representations improves image diversity with minimal loss in photorealism and caption similarity.",
        },
        {
            img: "https://images.openai.com/blob/ed21faee-ce44-4d91-a70f-26538ad66d5b/dall-e.jpg?trim=0,0,0,0&width=1400",
            title: "DALL·E: Creating images from text",
            desc: "We’ve trained a neural network called DALL·E that creates images from text captions for a wide range of concepts expressible in natural language.",
        },
        {
            img: "https://images.openai.com/blob/5e490f66-703f-4228-8a0c-ccfeddee81a4/clip.jpg?width=800",
            title: "CLIP: Connecting text and images",
            desc: "We’re introducing a neural network called CLIP which efficiently learns visual concepts from natural language supervision.",
        },
    ]
  return (
    <div>
    <div className='w-full h-[1px] bg-gray-400 mt-24 mx-5'></div>
    <div className="grid grid-cols-2 mt-3 px-5">
        <h1 className='text-4xl font-bold'>Image</h1>
        <p className='text-[18px] font-[500]'>
        Our research on generative modeling for images has led to representation models like CLIP, which makes a map between text and images that an AI can read, and DALL-E, a tool for creating vivid images from text descriptions.</p>
    </div>

    <div className="my-12 grid grid-cols-3 gap-5 px-5">
        {
            text.map((item, index) => (
                <div key={index} className=''>
                    <Link to="/" >
                        <div className='w-full h-full'>
                            <img src={item.img} alt="" />
                            <h1 className='mt-2 text-lg font-bold'>{item.title}</h1>
                            <p className='mt-1 text-lg font-[500]'>{item.desc}</p>
                        </div>

                    </Link>
                </div>
            ))
        }
    </div>
</div>
  )
}

export default ImageOverview
