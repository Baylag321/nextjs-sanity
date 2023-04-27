import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full object-cover"
            height={50}
            width={50}
            src="https://yt3.googleusercontent.com/oYmh_vAg_RMbv3BQWPhobyD8S0UOwP5W0ZUJl30Hh911AKRDKe5JTxJC8FS1fuUvmRgObuyaaA=s88-c-k-c0x00ffffff-no-rj"
            alt="logo"
          />
        </Link>
        <h1>Gej Yu Ve?</h1>
      </div>
      <div>
        <Link
          href="/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center"
        >
          Бүртгүүлж нийтлэл нийтлээрэй
        </Link>
      </div>
    </header>
  );
}

export default Header;
