import Head from "next/head";
import { Inter } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaFacebook, FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";

export default function Index() {
  const [refCard, inViewCard] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Percentage of element visibility required to trigger the animation
  });

  const [refText, inViewText] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Percentage of element visibility required to trigger the animation
  });

  const [refWelcome, inViewwelcome] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Percentage of element visibility required to trigger the animation
  });

  return (
    <>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Welcome page of the DevGlimpse" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className="bg-gradient-to-b from-blackGray-200 to-blackGray-100">
        <div className="flex flex-col h-screen bg- mb-10">
          <div className="flex min-w-full p-5 h-[10vh]">
            <img src="/logo.png" />
            <div className="flex flex-row h-full w-full items-center justify-end text-white font-extrabold">
              <p className="ml-5">Home</p>
              <p className="ml-5">Articles</p>
              <p className="ml-5">Menu</p>
            </div>
          </div>

          {/* main section starts here !! */}
          <div className="flex flex-col flex-grow justify-center items-center">
            <div ref={refWelcome}>
              {inViewwelcome && (
                <motion.div
                  initial={{ opacity: 0 }} // Initial state
                  animate={{ opacity: 1 }} // Final state
                  transition={{ duration: 1 }} // Animation duration
                >
                  <p className="text-6xl font-extrabold text-white mb-4">
                    The <span className="text-myPurple">Ultimate</span>{" "}
                    Developers <span className="text-myOrange">Hub 🧔</span>
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col h-screen min-w-full">
          <div ref={refCard}>
            {inViewCard && (
              <motion.div
                initial={{ opacity: 0, x: -20 }} // Initial state
                animate={{ opacity: 1, x: 10 }} // Final state
                transition={{ duration: 1 }} // Animation duration
                className="bg-blackGray-100 rounded-xl p-24 m-4 shadow-2xl w-1/2"
              >
                <p className="text-3xl font-extrabold text-white text-center mb-5">
                  A place to keep you{" "}
                  <span className="text-myPurple">informed</span> 🧐
                </p>
                <p className="text-xl font-extrabold text-white text-center">
                  For every week's <span className="text-myOrange">hot</span>🔥
                  dev topics
                </p>
              </motion.div>
            )}
          </div>

          <div ref={refCard} className="flex justify-end">
            {inViewCard && (
              <motion.div
                initial={{ opacity: 0, x: 30 }} // Initial state
                animate={{ opacity: 1, x: 0 }} // Final state
                transition={{ duration: 1 }} // Animation duration
                className="bg-blackGray-100 rounded-xl p-24 m-4 shadow-2xl w-1/2"
              >
                <p className="text-3xl font-extrabold text-white text-center mb-5">
                  <span className="text-myPurple">AI Generated</span> 🤖
                  articles
                </p>
                <p className="text-xl font-extrabold text-white text-center">
                  To achieve <span className="text-myOrange">best</span>
                  informance 📜
                </p>
              </motion.div>
            )}
          </div>
        </div>

        <div className="flex flex-col h-screen min-w-full justify-center mt-20">
          <div ref={refText}>
            {inViewText && (
              <motion.div
                initial={{ opacity: 0, y: 30 }} // Initial state
                animate={{ opacity: 1, y: 0 }} // Final state
                transition={{ duration: 1 }} // Animation duration
              >
                <p className="text-5xl font-extrabold text-white text-center mb-32">
                  Code <span className="text-myOrange">Tips</span> and{" "}
                  <span className="text-myPurple">suggestions</span> 🤜🤛
                </p>
              </motion.div>
            )}
          </div>

          <div ref={refText}>
            {inViewText && (
              <motion.div
                initial={{ opacity: 0, x: -50 }} // Initial state
                animate={{ opacity: 1, x: 0 }} // Final state
                transition={{ duration: 1 }} // Animation duration
              >
                <p className="text-4xl font-extrabold text-white text-center mb-5">
                  To make you <span className="text-myPurple">The Best</span> 💯
                </p>
              </motion.div>
            )}
          </div>

          <div ref={refText}>
            {inViewText && (
              <motion.div
                initial={{ opacity: 0, x: 50 }} // Initial state
                animate={{ opacity: 1, x: 0 }} // Final state
                transition={{ duration: 1 }} // Animation duration
              >
                <p className="text-2xl font-extrabold text-white text-center">
                  <span className="text-myOrange">Developer</span> 👨‍💻 out there
                  !
                </p>
              </motion.div>
            )}
          </div>
        </div>

        <div className="flex flex-col h-[20vh] min-w-max justify-center items-center mb-20">
          <a href="/home" className="text-xl text-white font-extrabold bg-myPurple rounded-xl shadow-2xl w-fit p-5">
            Start Reading now !
          </a>
        </div>

        <div className="flex flex-col min-w-full p-5 mb-24">
          <p className="text-white text-3xl font-extrabold mb-3">
            A little more about the site ?
            <span className="text-myPurple"> Absolutely!</span>
          </p>
          <div className="flex border-solid border-4 border-myPurple w-[25vh] rounded-full mb-24"></div>
          <div className="flex flex-col text-white items-center align-middle p-10 bg-blackGray-100 rounded-2xl shadow-2xl w-fit max-w-[90vh] mb-16">
            <p className="text-3xl font-extrabold mb-4">
              It's <span className="text-myOrange!">Open</span> Source !
            </p>
            <div className="flex border-solid border-4 border-white w-[25vh] rounded-full mb-4"></div>
            <p className="font-extrabold text-l">
              Yes its true ! You can find how this site works on github ! Beware
              not all code used is open to the public but we are sure we covered
              everything you might need
            </p>
          </div>

          <div className="flex flex-col items-end">
            <p className="text-4xl text-end font-extrabold text-white">
              Can it really help me become a better developer?
            </p>
            <div className="border-solid border-4 border-myPurple w-[25vh] rounded-full mt-4 mb-24"></div>

            <div className="flex flex-col text-white items-center align-middle p-10 bg-blackGray-100 rounded-2xl shadow-2xl w-fit max-w-[90vh] mb-16">
              <p className="text-3xl font-extrabold text-white mb-4">
                Yes ! Yes it can !
              </p>
              <div className="flex border-solid border-4 border-white w-[25vh] rounded-full mb-4"></div>
              <p className="text-l font-extrabold">
                A developer needs to be informed for new trends and topics in
                the software engineering market ! Reading multiple articles from
                multiple sites. Now with just a few clicks someone can have
                everything this community is going through in just one modern
                website !
              </p>
            </div>
          </div>

          <p className="text-4xl font-extrabold text-white">
            What about the team behind it ?
          </p>
          <div className="border-solid border-4 border-myPurple w-[25vh] rounded-full mt-4 mb-24"></div>
          <div className="flex flex-col text-white items-center align-middle p-10 bg-blackGray-100 rounded-2xl shadow-2xl w-fit max-w-[90vh] mb-24">
            <p className="text-3xl text-white font-extrabold mb-4">The Dream team</p>
          <div className="flex border-solid border-4 border-white w-[25vh] rounded-full mb-4"></div>
            <p className="font-extrabold text-l text-white">
              We are "coffee drinkers" ! A team that wants to create tools for creators !
              Developers , Designers , video-photo experts You name it ! We are excited about
              the future, it looks bright ! With AI evolving it's our duty to use it making
              our lives better and easier ! Want to learn more about us ? click the button bellow
            </p>
          </div>

          <div className="flex flex-col h-[20vh] min-w-max justify-center items-center mb-10">
          <button className="text-xl text-white font-extrabold bg-myPurple rounded-xl shadow-2xl w-fit p-5">
            Learn the team !
          </button>
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