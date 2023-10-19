import Link from "next/link";

const Footer = () => {
  return (
    // Container
    <div className="h-auto bg-slate-900 flex justify-center gap-12 mt-8">
      {/* Contact */}
      <div className="flex flex-col sm:flex-row flex-2 relative text-gray-200 md:gap-8 p-12 justify-between text-center sm:text-left">
        {/* Motto */}
        <div className="flex flex-[7] pb-10 sm:py-0">
          <h1 className="text-2xl sm:text-[32px] font-bold text-gray-100">
            WE ARE COMMITTED TO SERVING YOU THE BEST MEATS
          </h1>
        </div>

        {/* Locations */}
        <div className="flex-[3] py-0 sm:px-5">
          <h1 className="text-xl sm:text-[18px] text-amber-300 font-bold pb-5">
            FIND OUR STORES
          </h1>
          <p className="text-[16px] pb-5">
            123 Addy Way,
            <br />
            Notacity, 98765
            <br /> (123) 456-7890
          </p>
          <p className="text-[16px] pb-5">
            1234 Addy Way,
            <br />
            Notacity, 98765
            <br /> (123) 456-7890
          </p>
        </div>

        {/* Hours */}
        <div className="flex-[3] flex flex-col gap-4">
          <h1 className="text-xl sm:text-[18px] text-amber-300 font-bold pb-1">
            INFORMATION
          </h1>
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className="text-[16px] text-white p-0 hover:underline"
            >
              CAREERS
            </Link>
            <Link
              href="/"
              className="text-[16px] text-white p-0 hover:underline"
            >
              SHIPPING
            </Link>
            <Link
              href="/"
              className="text-[16px] text-white p-0 hover:underline"
            >
              MOBILE APP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
