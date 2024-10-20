import Link from "next/link";

function Navbar(){
    return(
        <nav className="bg-yellow-400 p-4">
            <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-black font-bold text-4xl">Next.js Design</Link>
                <ul className="flex space-x-6">
                    <li><Link href="/" className="text-black hover:text-blue-500">Home</Link></li>
                    <li><Link href="/about-us" className="text-black hover:text-blue-500">About</Link></li>
                    <li><Link href="/services" className="text-black hover:text-blue-500">Services</Link></li>
                    <li><Link href="/reviews" className="text-black hover:text-blue-500">Reviews</Link></li>
                    <li><Link href="/contact-us" className="text-black hover:text-blue-500">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;