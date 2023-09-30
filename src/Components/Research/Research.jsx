import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import Spinner from '../Spinner'

const Research = () => {
    let { data, isFetching } = useQuery({
        queryKey: ["research-publications"],
        queryFn: () => axios.get("https://openaicom-api-bdcpf8c6d2e9atf6.z01.azurefd.net/api/v1/research-publications?include=media%2Ctopics%2Cmodels%2Ccontent-types%2Cresearch-publication-links&sort=-publicationDate%2C-createdAt&filter%5Bpublished%5D=true&page%5Bsize%5D=20&page%5Bnumber%5D=1")
            .then((res) => res.data.data)
    })

    console.log(data);

    if (isFetching) {
        return <Spinner/>
    }
    return (
        <div className=''>
            <div className="pt-52 h-[30rem] space-y-6  px-5 flex justify-end flex-col pb-20">
                <h1 className='text-8xl'>Research index</h1>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-10">
                        <input type="search" className='w-full border-[1px] p-3 border-gray-400 placeholder:font-semibold placeholder:text-xl placeholder:text-gray-400' placeholder='Search the database' />
                    </div>
                    <div className='col-span-2'>
                        <button className='w-full py-3 text-xl font-semibold text-white bg-black'>Search</button>
                    </div>
                </div>
            </div>

            <div className="px-5">
                {
                    data.map((item, index) => (
                        <div key={index} className='flex flex-col justify-between  text-xl font-semibold   '>
                            <h1 className='w-full h-[1px] bg-black my-3'> </h1>
                            <div className='flex justify-between cursor-pointer'>
                            <h1>{item.attributes.publicationDateFormatted}</h1>
                            <h1>{item.attributes.title}</h1>
                            <p>Read Paper</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Research
