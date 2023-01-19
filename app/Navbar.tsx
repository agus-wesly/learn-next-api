import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const navItems = ["home", "admin"];
  return (
    <nav className="sticky z-10 top-0 bg-[#6913d8] flex items-center justify-between py-5 px-5 md:px-10 w-screen">
      <div className="flex items-center space-x-10 flex-1 text-white font-bold">
        <Link href="/" className="w-[81px] h-[24px]">
          <img
            src="/logo.svg"
            alt="logo"
            className="w-full h-full object-contain"
          />
        </Link>

        {navItems.map((item, i) => (
          <Link
            href={i === 0 ? "/" : `/${item}`}
            className="text-sm relative after:hidden hover:after:block after:absolute after:left-0 after:-bottom-[2px] font-bold after:content-[''] after:w-full after:h-[2px] after:bg-neutral-50 cursor-pointer hidden md:flex capitalize"
            key={i}
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="flex space-x-5 items-center justify-end">
        <Image
          src={"/search.svg"}
          width={28}
          height={28}
          alt="search"
          className="cursor-pointer"
        />

        <Link
          href={"/auth"}
          className="bg-[#4e09a8] text-white py-2 px-4 rounded-full text-xs font-bold grid place-items-center
        "
        >
          Sign In
        </Link>

        <Link
          href="/register"
          className="hidden bg-white text-[#6913d8] py-2 px-4 rounded-full text-xs font-semibold md:grid place-items-center
        "
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
