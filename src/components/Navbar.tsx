import { IconProps } from "@radix-ui/react-icons/dist/types";
import Link from "next/link";
import { ModeToggle } from "./modetoggle";

export default function Header() {
  const navItems = [
    { href: "#", label: "Services" },
    { href: "#", label: "Projects" },
    { href: "#", label: "About" },
    { href: "#", label: "Contact" },
  ];

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-[#1e88e5] text-white">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <HomeIcon className="h-6 w-6" />
        <span className="sr-only">Interior Design Co.</span>
      </Link>
      <Link
        href="#"
        className="flex items-center justify-center ml-2 hidden sm:block"
        prefetch={false}
      >
        Your Company Logo
        <span className="sr-only">Company Logo</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-sm font-medium hover:underline underline-offset-4 mx-2"
            prefetch={false}
          >
            {item.label}
          </Link>
        ))}
      </nav>
        <ModeToggle/>
    </header>
  );
}

function HomeIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
