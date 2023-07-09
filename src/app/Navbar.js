import Link from "next/link";

const Navbar = () =>{
    return (
        
<nav className="bg-slate-950 border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="https://raulnunez-dev.vercel.app" target="_blank">
            <img src="https://res.cloudinary.com/dktn6k3uc/image/upload/v1687472253/logoLight_ldjrfd.png" className="h-12 mr-3" alt="Flowbite Logo" />
        </Link>
  </div>
</nav>

    )
}

export default Navbar;