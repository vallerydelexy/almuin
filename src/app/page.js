"use client";
import animation from "@/lottie/animation.json";
import Lottie from "lottie-react";
import Image from "next/image";

export default function Homepage() {
  const phoneNumber = 83830777057;
  const countryCode = 62;
  return (
    <section className="relative bg-white">
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center">
        <div className="absolute top-0 w-full h-full bg-center bg-cover">
          <span
            id="blackOverlay"
            className="w-full h-full absolute bg-green-900"
          ></span>
        </div>

        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="">
                <div className="">
                  <Image
                    className="mx-auto"
                    src="/logo.webp"
                    height="100"
                    width="100"
                  />
                </div>
                <h1 className="text-white font-semibold text-3xl">
                  Al Mu'in Syarif Hidayatullah
                </h1>
                <p className="mt-4 text-lg text-blueGray-200">
                  <a href="https://www.google.com/maps/place/Yayasan+Al+Muin+Syarif+Hidyatullah/@-7.3721176,112.7722083,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd7e58aa03adb79:0x21236acf003808a3!8m2!3d-7.3721176!4d112.7722083!16s%2Fg%2F11sjjtps3p?entry=ttu">
                    Jl. Semampir no 61, Sedati, Sidoarjo 61253
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="pb-10 bg-green-200 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <a
                    href={`tel:${countryCode}${phoneNumber}`}
                    className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </a>
                  <h6 className="text-xl font-semibold text-green-900">
                    Hubungi Sekertariat
                  </h6>
                  <p className="mt-2 mb-4 text-green-900">{`0${phoneNumber}`}</p>
                  <div className="max-w-screen-sm mx-auto">
                    <Lottie animationData={animation} loop={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="relative  pt-8 pb-6 mt-1">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                <div className="text-sm text-green-900 font-semibold py-1">
                  Made with ❤️ by{" "}
                  <a
                    href="https://aprita.web.id"
                    className="text-blueGray-500 hover:text-blueGray-800"
                    target="_blank"
                  >
                    {" "}
                    RA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </section>
  );
}
