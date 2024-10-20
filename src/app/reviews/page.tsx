 export default function Reviews() {
  return (
    <div className="min-h-screen bg-yellow-400 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-11">Client Reviews</h1>

      {/* Review Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12">
        {/* Review 1 */}
        <div className="bg-yellow-300 shadow-md rounded-lg p-6">
          <img src="user.png" alt="Reviewer 1" className="w-20 h-20rounded-full mx-auto" />
          <h3 className="text-xl font-semibold text-center mt-4 text-blue-700">John Doe</h3>
          <p className="mt-2 text-center">⭐⭐⭐⭐⭐</p>
          <p className="mt-4 text-justify">
            “This service is amazing! It has completely transformed the way we do business.”
          </p>
        </div> 

        {/* Review 2 */}
        <div className="bg-yellow-300 shadow-md rounded-lg p-6">
        <img src="user.png" alt="Reviewer 1" className="w-20 h-20rounded-full mx-auto" />
          <h3 className="text-xl font-semibold text-center mt-4 text-blue-700">Jane Smith</h3>
          <p className="mt-2 text-center">⭐⭐⭐⭐</p>
          <p className="mt-4 text-justify">
            “The team is very professional, and the service exceeded my expectations.”
          </p>
        </div>

        {/* Review 3 */}
        <div className="bg-yellow-300 shadow-md rounded-lg p-6">
        <img src="user.png" alt="Reviewer 1" className="w-20 h-20rounded-full mx-auto" />
          <h3 className="text-xl font-semibold text-center mt-4 text-blue-700">Alex Johnson</h3>
          <p className="mt-2 text-center">⭐⭐⭐⭐⭐</p>
          <p className="mt-4 text-justify">
            “I highly recommend this service. Great quality and excellent support.”
          </p>
        </div>
      </div>
    </div>
  );
}
