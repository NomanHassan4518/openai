import React from 'react'
import { Link } from 'react-router-dom'


const AudioOverview = () => {
    let text = [
        {
            img: "https://images.openai.com/blob/13c810cb-0592-442d-9580-714838b8ed28/whisper.jpg?trim=0,0,0,0&width=800",
            title: "Introducing Whisper",
            desc: "We’ve trained and are open-sourcing a neural net that approaches human level robustness and accuracy on English speech recognition.",
        },
        {
            img: "https://images.openai.com/blob/1f223ed0-8e6b-4add-90e8-eda1dc393c9c/jukebox.jpg?trim=0,0,836,0&width=800",
            title: "Jukebox",
            desc: "We’re introducing Jukebox, a neural net that generates music as raw audio in a variety of genres and artist styles.",
        },
        {
            img: "https://images.openai.com/blob/cd5a2134-380b-4ecb-8a04-434cf5d4452a/musenet.jpg?trim=0,0,836,0&width=800",
            title: "MuseNet",
            desc: "We’ve created MuseNet, a deep neural network that can generate 4-minute musical compositions with 10 different instruments.",
        },
    ]
    return (
        <div>
            <div className='w-full h-[1px] bg-gray-400 mt-24 mx-5'></div>
            <div className="grid grid-cols-2 mt-3 px-5">
                <h1 className='text-4xl font-bold'>Audio</h1>
                <p className='text-[18px] font-[500]'>
                    Our research on applying AI to audio processing and audio generation has led to developments in automatic speech recognition and original musical compositions.</p>
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

            <div className="w-full h-full">
                <img src="https://images.openai.com/blob/baf6343c-caf4-452d-8e21-d57e334654b6/stangel-2022-1249.jpg?trim=0,0,0,0&width=1400" alt="" />
            </div>
        </div>
    )
}

export default AudioOverview
