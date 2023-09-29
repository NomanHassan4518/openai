import React from 'react'
import { Link } from 'react-router-dom'

const TextOverview = () => {
    let text = [
        {
            img: "https://images.openai.com/blob/5b1e6906-9f64-42b7-97e4-f24633ad56b9/aligning-language-models-to-follow-instructions.png?trim=0,0,0,0&width=800",
            title: "Aligning language models to follow instructions",
            desc: "We’ve trained language models that are much better at following user intentions than GPT-3.",
        },
        {
            img: "https://images.openai.com/blob/5a1f46b8-7e89-42f1-a831-8587b61b971b/summarizing-books.jpg?trim=0,747,0,757&width=800",
            title: "Summarizing books with human feedback",
            desc: "We've trained a model to summarize entire books with human feedback.",
        },
        {
            img: "https://images.openai.com/blob/40660b0a-561d-412e-a1ff-1fc1b3fcaa6b/language-models-are-few-shot-learners.png?trim=0,0,0,0&width=800",
            title: "Language models are few-shot learners",
            desc: "We trained GPT-3, an autoregressive language model with 175 billion parameters.",
        },
    ]
    return (
        <div>
            <div className='w-full h-[1px] bg-gray-400 mt-24 mx-5'></div>
            <div className="grid grid-cols-2 mt-3 px-5">
                <h1 className='text-4xl font-bold'>Text</h1>
                <p className='text-[18px] font-[500]'>
                    Our text models are advanced language processing tools that can generate, classify, and summarize text with high levels of coherence and accuracy.</p>
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

export default TextOverview
