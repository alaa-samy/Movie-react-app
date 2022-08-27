import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (

    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1 className="text-base text-red-500 font-semibold">Welcome to Masterpiece, let's watch movies</h1>
          <div className="search-bar">
            <input type="search" placeholder='Search' className='border bg-amber-'/>
          </div>
        </div>

        <div className="mt-10 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div className="bg-amber-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
            <div className="mt-2 font-bold">John Doe</div>
            <div className="font-light">Some description</div>
          </div>
        </div>
      </div>
    </div>

  )
}
