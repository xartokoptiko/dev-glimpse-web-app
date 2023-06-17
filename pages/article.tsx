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
  FaRegComment,
  FaShare,
} from "react-icons/fa";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import { AiOutlineUser, AiOutlineLike } from "react-icons/ai";
import { getPostData } from "./api/hello";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData("article");

  return {
    props: {
      postData,
    },
  };
}

export default function Article({ postData }) {
  return (
    <>
      <Head>
        <title>Artificial Intelligence 🤖(AI) and Machine Learning (ML)</title>
        <meta name="description" content="Topic and article page " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className="bg-gradient-to-b from-blackGray-200 to-blackGray-100 min-w-full">
        <div className="flex flex-col bg-blackGray-100">
          <div className="flex min-w-full p-5 h-[10vh]">
            <img src="/logo.png" />
            <div className="flex flex-row h-full w-full items-center justify-end text-white font-extrabold">
              <p className="ml-5">Home</p>
              <p className="ml-5">Articles</p>
              <p className="ml-5">Menu</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-[10vh] bg-blackGray-100"></div>
        <div className="custom-shape-divider-top-1686074993">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-stretch">
            <div className="flex flex-col w-2/12 bg-blackGray-100 rounded-2xl shadown-2xl m-5 p-5 text-center text-white text-l font-extrabold">
              <p className="text-white text-xl font-extrabold underline m-5">
                Similar topics
              </p>
              <p className="mb-3">ChatGPT 🔥</p>
              <p className="mb-3">Next.js 🔥</p>
              <p className="mb-3">SpringBoot 🔥</p>
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
            <div className="flex flex-col p-10 w-10/12">
              <ReactMarkdown
                className="text-white mb-10"
                remarkPlugins={[remarkGfm]}
              >
                {postData.contentHtml}
              </ReactMarkdown>
              <div className="flex border-solid border-4 border-white w-[25vh] rounded-full mb-10 justify-center"></div>
              <div className="flex flex-row justify-items-stretch mb-10">
                <div className="flex flex-row text-white text-xl font-extrabold justify-items-center align-middle w-1/3 justify-start">
                  <AiOutlineLike className="mr-3 text-3xl" />
                  <p>Like</p>
                  <p>-</p>
                  <p>234</p>
                </div>

                <div className="flex flex-row text-white text-xl font-extrabold justify-items-center align-middle w-1/3 justify-center">
                  <FaRegComment className="mr-3 text-3xl" />
                  <p>Comment</p>
                  <p>-</p>
                  <p>24</p>
                </div>

                <div className="flex flex-row text-white text-xl font-extrabold justify-items-center align-middle w-1/3 justify-end">
                  <FaShare className="mr-3 text-3xl" />
                  <p>Share</p>
                </div>
              </div>

              <div className="flex flex-col w-full">
                <textarea className="p-3 text-l text-white font-extrabold bg-blackGray-100 border-blackGray-200 border-4 rounded-2xl shadow-2xl h-[20vh] mb-5" />
                <div className="flex min-w-full justify-end">
                  <button className="bg-blackGray-200 text-white text-l font-extrabold p-5 rounded-2xl shadow-2xl w-fit">
                    comment
                  </button>
                </div>
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
