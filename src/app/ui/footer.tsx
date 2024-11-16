import Link from "next/link";
import { SiX, SiInstagram, SiTiktok } from "react-icons/si";

export const Footer = () => {
  return (
    <>
      <footer
        id="footer"
        className="pt-20 w-full flex flex-col justify-center items-center bg-dark"
      >
        <div className="w-5/6 md:max-w-[100rem] flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-accent font-bold text-5xl md:text-7xl">
              ReTech
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-10">
              <div className="flex flex-row gap-2 items-center">
                {/* <GoLocation color="#6BE7F1" /> */}
                <p className="text-light text-xs sm:text-base">Indonesia</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                {/* <GoOrganization color="#6BE7F1" /> */}
                <p className="text-light text-xs sm:text-base">
                  Bina Nusantara University
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
              {/* <TbMail color="#6BE7F1" /> */}
              <p className="text-light text-xs sm:text-base">
                retechentre@gmail.com
              </p>
              <p className="text-light text-xs sm:text-base">
                (+62) 0822-9987-9929
              </p>
            </div>
          </div>
        </div>
        <section id="Socials" className="py-4 mt-4">
          <div className="flex flex-row justify-center items-center gap-10">
            <Link
              target="_blank"
              href="https://x.com/retech_eco"
              className="p-3 rounded-full transition-colors duration-200 hover:bg-slate-800 active:scale-95 focus:outline focus:outline-2 focus:outline-myBlue1 focus:outline-offset-2"
            >
              <SiX color="#E2DBD0" size={25} />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/retech.eco/"
              className="p-3 rounded-full transition-colors duration-200 hover:bg-slate-800 active:scale-95 focus:outline focus:outline-2 focus:outline-myBlue1 focus:outline-offset-2"
            >
              <SiInstagram color="#E2DBD0" size={25} />
            </Link>
            <Link
              target="_blank"
              href="https://www.tiktok.com/@retech.eco?lang=id-ID"
              className="p-3 rounded-full transition-colors duration-200 hover:bg-slate-800 active:scale-95 focus:outline focus:outline-2 focus:outline-myBlue1 focus:outline-offset-2"
            >
              <SiTiktok color="#E2DBD0" size={25} />
            </Link>
          </div>
        </section>
      </footer>
    </>
  );
};
