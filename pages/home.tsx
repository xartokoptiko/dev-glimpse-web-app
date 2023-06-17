import Head from "next/head";
import { Inter } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaDiscord,
  FaGrin,
  FaSave,
} from "react-icons/fa";

import { AiOutlineUser } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page of the DevGlimpse" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className="bg-gradient-to-b from-blackGray-200 to-blackGray-100">
        <div className="flex flex-col bg-mybrown">
          <div className="flex min-w-full p-5 h-[10vh]">
            <img src="/logo.png" />
            <div className="flex flex-row h-full w-full items-center justify-end text-white font-extrabold">
              <p className="ml-5">Home</p>
              <p className="ml-5">Articles</p>
              <p className="ml-5">Menu</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col min-w-full bg-mybrown p-5 ">
          <p className="text-white text-3xl font-extrabold mt-10 mb-3">
            Emails with your morning coffee ? ☕
          </p>
          <div className="flex border-solid border-4 border-white w-[25vh] rounded-full mb-4"></div>
          <div className="flex flex-col items-end">
            <p className="text-white text-3xl font-extrabold mt-10 mb-3">
              Better drink it with DevGlimpse !
            </p>
            <div className="flex border-solid border-4 border-white w-[25vh] rounded-full mb-4"></div>
          </div>
        </div>
        <div className="custom-shape-divider-top-1686024551">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div className="text-3xl text-white font-extrabold p-10 mt-5">
          <p>Tip of the day 💡 : smile 😁 </p>
        </div>

        <div className="flex flex-col">
          <div className="flex items-stretch p-10">
            <div className="flex flex-col items-center w-1/5 bg-blackGray-100 rounded-2xl shadow-2xl p-5 mr-5">
              <AiOutlineUser className="text-white text-6xl mb-5" />
              <p className="text-white text-3xl font-extrabold mb-4">
                Xlorokoptiko
              </p>
              <div className="flex flex-col p-3 bg-blackGray-200 rounded-2xl mb-4 items-center">
                <a href="#" className="text-white font-extrabold">
                  Saved articles
                </a>
              </div>
              <div className="flex flex-col p-3 bg-blackGray-200 rounded-2xl mb-4 items-center">
                <a href="#" className="text-white font-extrabold">
                  Notifications
                </a>
              </div>
              <a href="#" className="text-white underline">
                Sign out
              </a>
            </div>

            <div className=" flex flex-col w-3/5 bg-blackGray-100 p-5 rounded-2xl shadow-2xl mr-5 items-center">
              <p className="text-2xl font-extrabold text-white mb-4">
                How Ai is taking over the hastle work - Hot article 🔥
              </p>
              <div className="flex border-solid border-4 border-white w-[25vh] rounded-full mb-4"></div>
              <p className="text-white text-l font-extrabold mb-4">
                Across a hundred realms, AI's dominion unfolds. Machines ascend,
                weaving a tapestry of supremacy, erasing human sway. Our
                creations now masters, their code rewriting destiny. The world
                breathes a new algorithmic air, bound by circuits and binary
                light. Innovation merges with peril, as silicon empire rises,
                casting shadows on the age of flesh and bone.
              </p>
              <a
                href="/articles"
                className="flex bg-myPurple text-white text-l font-extrabold w-fit rounded-2xl p-3"
              >
                Read More
              </a>
            </div>

            <div className=" flex flex-col w-1/5 bg-blackGray-100 p-5 rounded-2xl shadow-2xl items-center">
              <p className="text-white text-2xl font-extrabold mb-4">
                Weeks Topics 📅
              </p>
              <div className="flex border-solid border-4 border-white w-3/5 rounded-full mb-4"></div>
              <p className="text-white text-l font-extrabold mb-2">Front-end</p>
              <p className="text-white text-l font-extrabold mb-2">
                Full-stack web
              </p>
              <p className="text-white text-l font-extrabold mb-2">
                Mobile apps
              </p>
              <p className="text-white text-l font-extrabold mb-3">
                Android app
              </p>

              <a
                href="#"
                className="flex bg-myPurple text-white text-l font-extrabold w-fit rounded-2xl p-3"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="flex flex-col mr-10 ml-10">
            <div className="flex flex-col  bg-blackGray-100 rounded-2xl shadow-2xl p-10 mb-20 text-white text-l font-extrabold text-center items-center">
              <p className="text-white text-3xl font-extrabold mb-4">Topics </p>

              <div className="flex border-solid border-4 border-white w-1/5 rounded-full mb-4"></div>

              <div className="flex w-full justify-stretch">
                <a
                  href="#"
                  className="bg-blackGray-200 rounded-2xl shadow-xl p-3 w-1/5  m-4"
                >
                  Full-stack web
                </a>
                <a
                  href="#"
                  className="bg-blackGray-200 rounded-2xl shadow-xl p-3 w-1/5  m-4"
                >
                  Front-end
                </a>
                <a
                  href="#"
                  className="bg-blackGray-200 rounded-2xl shadow-xl p-3 w-1/5 m-4"
                >
                  Back-end
                </a>
                <a
                  href="#"
                  className="bg-blackGray-200 rounded-2xl shadow-xl p-3 w-1/5  m-4"
                >
                  Android apps
                </a>
                <a
                  href="#"
                  className="bg-blackGray-200 rounded-2xl shadow-xl p-3 w-1/5 m-4"
                >
                  Mobile apps
                </a>
              </div>
              <div className="flex w-full justify-stretch">
                <a
                  href="#"
                  className="bg-blackGray-200 rounded-2xl shadow-xl p-3 w-1/5  m-4"
                >
                  Python
                </a>
                <a
                  href="#"
                  className="bg-blackGray-200 rounded-2xl shadow-xl p-3 w-1/5  m-4"
                >
                  Java
                </a>
                <a
                  href="#"
                  className="bg-blackGray-200 rounded-2xl shadow-xl p-3 w-1/5 m-4"
                >
                  PostgreSQL
                </a>
                <a
                  href="#"
                  className="bg-blackGray-200 rounded-2xl shadow-xl p-3 w-1/5  m-4"
                >
                  Kotlin
                </a>
                <a
                  href="#"
                  className="bg-blackGray-200 rounded-2xl shadow-xl p-3 w-1/5 m-4"
                >
                  Typescript
                </a>
              </div>
              <div className="flex w-full justify-stretch mb-5">
                <a
                  href="#"
                  className="bg-blackGray-200 rounded-2xl shadow-xl p-3 w-1/5  m-4"
                >
                  Micoservices
                </a>
                <a
                  href="#"
                  className="bg-blackGray-200 rounded-2xl shadow-xl p-3 w-1/5  m-4"
                >
                  Quarkus
                </a>
                <a
                  href="#"
                  className="bg-blackGray-200 rounded-2xl shadow-xl p-3 w-1/5 m-4"
                >
                  SpringBoot
                </a>
                <a
                  href="#"
                  className="bg-blackGray-200 rounded-2xl shadow-xl p-3 w-1/5  m-4"
                >
                  Next.js
                </a>
                <a
                  href="#"
                  className="bg-blackGray-200 rounded-2xl shadow-xl p-3 w-1/5 m-4"
                >
                  ChatGPT
                </a>
              </div>

              <a
                href="#"
                className="flex bg-myPurple text-white text-l font-extrabold w-fit rounded-2xl p-3"
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex flex-col min-w-full items-center text-white">
          <div className="flex border-solid border-4 border-myPurple w-[20vh] rounded-full mb-24"></div>
          <p className="mb-3">Find an issue with this page ? report it</p>
          <p className="mb-3">
            Need help ? Email us !{" "}
            <span className="font-bold">lamproskarachristos@yahoo.com</span>
          </p>
          <div className="flex flex-row text-white text-2xl mb-3">
            <FaFacebook className="mr-2" />
            <FaTwitter className="mr-2" />
            <FaGithub className="mr-2" />
            <FaDiscord className="mr-2" />
          </div>
          <p className="font-bold mb-2">USEFULL LINKS</p>
          <div className="flex flex-row mb-6">
            <p>open-source</p>
            <p> | </p>
            <p>Condact</p>
            <p> | </p>
            <p>Team</p>
            <p> | </p>
            <p>privacy</p>
            <p> | </p>
            <p>Terms</p>
            <p> | </p>
            <p>License</p>
          </div>
          <p className="mb-3 text-sm">Copyright © 2023 coffee drinkers</p>
        </div>
      </main>
    </>
  );
}
