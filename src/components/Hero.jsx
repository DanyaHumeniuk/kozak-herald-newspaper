

const Hero = () => {
  return (
    <div className="flex flex-col items-center w-full h-full ">

        <div className="bg-gray-600 mt-14 w-10/12 min-h-12 rounded-lg text-transparent">Hello</div>

        <div className="mt-14 w-10/12 min-h-80 sm:min-h-60 flex flex-row gap-8">
            <div className="bg-gray-600 w-3/4 rounded-md text-transparent">Sup</div>
            <div className="bg-gray-600 w-1/4 rounded-md text-transparent">Hey</div>
        </div>

        <div className="bg-gray-600 mt-14 w-10/12 min-h-12 rounded-lg text-transparent">Hello</div>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-14 w-10/12 mx-auto">
          <div className="bg-gray-600 rounded shadow p-4 text-transparent">Helo</div>
          <div className="bg-gray-600 rounded shadow p-4 text-transparent">Helo</div>
          <div className="bg-gray-600 rounded shadow p-4 text-transparent">Helo</div>
          <div className="bg-gray-600 rounded shadow p-4 text-transparent">Helo</div>
          <div className="bg-gray-600 rounded shadow p-4 text-transparent">Helo</div>
          <div className="bg-gray-600 rounded shadow p-4 text-transparent">Helo</div>
        </div>
    </div>
  )
}

export default Hero