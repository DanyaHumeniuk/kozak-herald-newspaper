

const Hero = () => {
  return (
    <div className="flex flex-col items-center w-full h-full bg-red-500">

        <div className="bg-gray-600 mt-14 w-10/12 min-h-12 rounded-lg">Hello</div>

        <div className="mt-14 w-10/12 min-h-80 sm:min-h-60 flex flex-row gap-8">
            <div className="bg-gray-600 w-3/4 rounded-md">Sup</div>
            <div className="bg-gray-600 w-1/4 rounded-md">Hey</div>
        </div>

        <div className="bg-gray-600 mt-14 w-10/12 min-h-12 rounded-lg">Hello</div>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 w-10/12 mx-auto bg-gray-600 ">
            <div className="bg-white rounded shadow p-4">Helo</div>
            <div className="bg-white rounded shadow p-4">Helo</div>
            <div className="bg-white rounded shadow p-4">Helo</div>
            <div className="bg-white rounded shadow p-4">Helo</div>
            <div className="bg-white rounded shadow p-4">Helo</div>
            <div className="bg-white rounded shadow p-4">Helo</div>
        </div>
    </div>
  )
}

export default Hero