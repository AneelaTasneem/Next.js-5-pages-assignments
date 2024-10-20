export default function About (){
    return (
      <div className="min-h-screen bg-yellow-400">
        <h1 className="text-3xl font-bold text-center mb-11">About Me</h1>
        <p className="text-lg text-center mb-10">Hello! I'm <span className="text-blue-700 font-extrabold">ANEELA TASNEEM</span>,<br /> this is my first project using Next.js. I'm excited to share a little about myself</p>

         <div className="max-w-xl mx-auto bg-yellow-300 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">My Qualification</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Bachlor's Degree in Micro-Biology</li>
            <li>Certificated in CIT</li>
            <li>Currently learning web development with Next.js and Tailwind CSS</li>
          </ul>
         </div>
      </div>
    )
  }