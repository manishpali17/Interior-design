import Link from "next/link";

export default function Footer() {
  const footerNavItems = [
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Privacy" },
  ];

  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#1e88e5] text-white">
      <p className="text-xs">
        &copy; 2024 Interior Design Co. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        {footerNavItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
