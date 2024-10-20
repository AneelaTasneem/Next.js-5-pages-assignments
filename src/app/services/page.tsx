export default async function Services (){
  await new Promise((resolve) => {
    setTimeout(resolve, 5000)
  })
    return (
      <div className="min-h-screen bg-yellow-400">
        <h1 className="text-3xl font-bold text-center mb-11">Our Services</h1>
         {/* Service cards 1*/}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-yellow-300 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold">Service 1</h2>
            <img src="my-image-1.png" alt="Service 1" className="w-full h-auto mt-4"/>
            <p className="mt-4 text-blue-700 font-extrabold " >Description Of Service</p>
            <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae vero, voluptatum deserunt ab laudantium corporis error nesciunt cum debitis? In!</p>
          </div>

         {/* Service card 2  */}
          <div className="bg-yellow-300 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold">Service 2</h2>
            <img src="my-image-2.png" alt="Service 1" className="w-full h-auto mt-4"/>
            <p className="mt-4 text-blue-700 font-extrabold " >Description Of Service</p>
            <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae vero, voluptatum deserunt ab laudantium corporis error nesciunt cum debitis? In!</p>
          </div>

          {/* Service card 3 */}
          <div className="bg-yellow-300 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold">Service 3</h2>
            <img src="my-image-3.png" alt="Service 1" className="w-full h-auto mt-4"/>
            <p className="mt-4 text-blue-700 font-extrabold " >Description Of Service</p>
            <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae vero, voluptatum deserunt ab laudantium corporis error nesciunt cum debitis? In!</p>
          </div>
          
            {/* Service card 4  */}
          <div className="bg-yellow-300 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold">Service 4</h2>
            <img src="my-image-1.png" alt="Service 4" className="w-full h-auto mt-4"/>
            <p className="mt-4 text-blue-700 font-extrabold " >Description Of Service</p>
            <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae vero, voluptatum deserunt ab laudantium corporis error nesciunt cum debitis? In!</p>
          </div>
         </div>
      </div>
    )
  }