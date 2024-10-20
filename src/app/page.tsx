export default function Home (){
  return (
    <div className="flex justify-between items-center p-20 bg-yellow-400 ">
      <div className="flex-1 pr-5">
      <h1 className="text-4xl font-bold mb-4 ml-10 ">FRONT END DEVELOPER</h1>
      <p className="text-lg ml-11"> It's my <span className="text-blue-700 font-extrabold">FIRST ASSIGNMENT</span> of Next.js</p>
      <button className="bg-blue-700 mt-11 text-white rounded py-2 px-2 absolute"> 
        Click me</button>
      </div>
      <div className="flex-1 text-center ">
        <img src="/my-image.png.png" alt="Image" width={500} height={500}/>
      </div>
    </div>
  )
}