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

export default function Articles() {
  return (
    <>
      <Head>
        <title>Topics & Articles</title>
        <meta name="description" content="Topic and article page " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className="bg-gradient-to-b from-blackGray-200 to-blackGray-100 min-w-full">
        <div className="flex flex-col bg-myPurple">
          <div className="flex min-w-full p-5 h-[10vh]">
            <img src="/logo.png" />
            <div className="flex flex-row h-full w-full items-center justify-end text-white font-extrabold">
              <p className="ml-5">Home</p>
              <p className="ml-5">Articles</p>
              <p className="ml-5">Menu</p>
            </div>
          </div>
        </div>
        <div className="flex h-[10vh] bg-myPurple">

        </div>
        <div className="custom-shape-divider-top-1686044277">
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

        <p className="text-white text-4xl font-extrabold p-10"><span className="text-myPurple">Trending</span> Articles</p>

        <div className="flex flex-col min-w-full mt-5">
          <div className="flex flex-row items-stretch min-w-full h-full">
            <div className="flex flex-col bg-blackGray-100 mr-5 ml-5 rounded-2xl shadow-2xl p-5 items-center text-white text-l w-3/12">
              <p className="text-2xl text-white font-extrabold mb-5">Topics</p>
              <div className="flex flex-col bg-blackGray-200 p-3 rounded-2xl text-white text-l mb-3">
                <p className="mb-3 text-l underline">Weeks topics</p>
                <p className="mb-3">ChatGPT 🔥</p>
                <p className="mb-3">Next.js 🔥</p>
                <p className="mb-3">SpringBoot 🔥</p>
                <p className="mb-3">Quarkus</p>
                <p className="mb-3">Kotlin</p>
                <p className="mb-3">Java</p>
              </div>
              <p className="mb-3">ChatGPT</p>
              <p className="mb-3">Next.js</p>
              <p className="mb-3">SpringBoot</p>
              <p className="mb-3">Quarkus</p>
              <p className="mb-3">Kotlin</p>
              <p className="mb-3">Java</p>
              <p className="mb-3">ChatGPT</p>
              <p className="mb-3">Next.js</p>
              <p className="mb-3">SpringBoot</p>
              <p className="mb-3">Quarkus</p>
              <p className="mb-3">Kotlin</p>
              <p className="mb-3">Java</p>
            </div>

            <div className="flex flex-col w-9/12 text-white text-center items-center mr-5">
              <div className="flex items-center flex-col min-w-full bg-blackGray-100 rounded-2xl shadow-2xl mb-16 p-10 text-l font-extrabold">
                <p className="mb-4 text-3xl">
                Artificial Intelligence 🤖(AI) and Machine Learning (ML)
                </p>
                <div className="flex border-solid border-4 border-white w-[25vh] rounded-full mb-4"></div>
                <p className="mb-5">
                  Artificial Intelligence (AI) and Machine Learning (ML) are
                  revolutionizing industries through advancements in deep
                  learning, natural language processing, computer vision, and
                  reinforcement learning. These technologies enable systems to
                  learn from data, make intelligent decisions, and perform tasks
                  that typically require human intelligence. AI and ML are being
                  integrated into diverse sectors such as healthcare, finance,
                  autonomous vehicles, and robotics, enhancing efficiency,
                  accuracy, and automation. From diagnosing diseases and
                  personalizing treatments to analyzing financial data and
                  enabling self-driving cars, the applications of AI and ML are
                  expanding rapidly, transforming the way we live, work, and
                  interact with technology.
                </p>
                <a
                href="/article"
                className="flex bg-myPurple text-white text-l font-extrabold w-fit rounded-2xl p-3"
              >
                Read More
              </a>
              </div>
              <div className="flex flex-col items-center min-w-full bg-blackGray-100 rounded-2xl shadow-2xl mb-16 p-10 text-l font-extrabold">
                <p className="mb-4 text-3xl">
                  Artificial Intelligence 🤖(AI) and Machine Learning (ML)
                </p>
                <div className="flex border-solid border-4 border-white w-[25vh] rounded-full mb-4"></div>
                <p className="mb-5">
                  Artificial Intelligence (AI) and Machine Learning (ML) are
                  revolutionizing industries through advancements in deep
                  learning, natural language processing, computer vision, and
                  reinforcement learning. These technologies enable systems to
                  learn from data, make intelligent decisions, and perform tasks
                  that typically require human intelligence. AI and ML are being
                  integrated into diverse sectors such as healthcare, finance,
                  autonomous vehicles, and robotics, enhancing efficiency,
                  accuracy, and automation. From diagnosing diseases and
                  personalizing treatments to analyzing financial data and
                  enabling self-driving cars, the applications of AI and ML are
                  expanding rapidly, transforming the way we live, work, and
                  interact with technology.
                </p>
                <a
                href="/article"
                className="flex bg-myPurple text-white text-l font-extrabold w-fit rounded-2xl p-3"
              >
                Read More
              </a>
              </div>
              <div className="flex flex-col items-center min-w-full bg-blackGray-100 rounded-2xl shadow-2xl mb-16 p-10 text-l font-extrabold">
                <p className="mb-4 text-3xl">
                  Artificial Intelligence 🤖(AI) and Machine Learning (ML)
                </p>
                <div className="flex border-solid border-4 border-white w-[25vh] rounded-full mb-4"></div>
                <p className="mb-5">
                  Artificial Intelligence (AI) and Machine Learning (ML) are
                  revolutionizing industries through advancements in deep
                  learning, natural language processing, computer vision, and
                  reinforcement learning. These technologies enable systems to
                  learn from data, make intelligent decisions, and perform tasks
                  that typically require human intelligence. AI and ML are being
                  integrated into diverse sectors such as healthcare, finance,
                  autonomous vehicles, and robotics, enhancing efficiency,
                  accuracy, and automation. From diagnosing diseases and
                  personalizing treatments to analyzing financial data and
                  enabling self-driving cars, the applications of AI and ML are
                  expanding rapidly, transforming the way we live, work, and
                  interact with technology.
                </p>
                <a
                href="/article"
                className="flex bg-myPurple text-white text-l font-extrabold w-fit rounded-2xl p-3"
              >
                Read More
              </a>
              </div>
              <div className="flex flex-col items-center min-w-full bg-blackGray-100 rounded-2xl shadow-2xl mb-16 p-10 text-l font-extrabold">
                <p className="mb-4 text-3xl">
                  Artificial Intelligence 🤖(AI) and Machine Learning (ML)
                </p>
                <div className="flex border-solid border-4 border-white w-[25vh] rounded-full mb-4"></div>
                <p className="mb-5">
                  Artificial Intelligence (AI) and Machine Learning (ML) are
                  revolutionizing industries through advancements in deep
                  learning, natural language processing, computer vision, and
                  reinforcement learning. These technologies enable systems to
                  learn from data, make intelligent decisions, and perform tasks
                  that typically require human intelligence. AI and ML are being
                  integrated into diverse sectors such as healthcare, finance,
                  autonomous vehicles, and robotics, enhancing efficiency,
                  accuracy, and automation. From diagnosing diseases and
                  personalizing treatments to analyzing financial data and
                  enabling self-driving cars, the applications of AI and ML are
                  expanding rapidly, transforming the way we live, work, and
                  interact with technology.
                </p>
                <a
                href="/article"
                className="flex bg-myPurple text-white text-l font-extrabold w-fit rounded-2xl p-3"
              >
                Read More
              </a>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex flex-col min-w-full items-center text-white mt-24">
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
