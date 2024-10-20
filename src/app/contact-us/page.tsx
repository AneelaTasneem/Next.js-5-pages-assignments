export  function ContactUs() {
  return (
    <div className="min-h-screen bg-yellow-400 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-11">Contact Us</h1>

      {/* Contact Information Section */}
      <div className="bg-yellow-300 shadow-md rounded-lg p-6 w-10/12 sm:w-8/12 lg:w-6/12">
        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
        
        <p className="mb-4 text-justify">
          We'd love to hear from you! Whether you have a question, feedback, or just want to say hi, feel free to reach out to us through any of the methods below.
        </p>

        {/* Contact Details */}
        <div className="space-y-4">
          <div className="flex items-center">
            <img src="whatsapp (1).png" alt="Phone icon" className="mr-4 h-7 w-7" />
            <p className="text-lg">Phone: +1 (123) 456-7890</p>
          </div>

          <div className="flex items-center">
            <img src="email.png" alt="Email icon" className="mr-4 h-7 w-7" />
            <p className="text-lg">Email: contact@yourcompany.com</p>
          </div>

          <div className="flex items-center">
            <img src="gps.png" alt="Location icon" className="mr-4 h-7 w-7" />
            <p className="text-lg">Address: 1234 Elm St, City, Country</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#https://www.facebook.com/login.php/" className="text-blue-700">Facebook</a>
            <a href="#https://www.instagram.com/accounts/login/" className="text-blue-700">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}
