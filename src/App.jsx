import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Nav from './components/Nav';
import About from './views/About';
import Ecosystem from './views/Ecosystem';
import Hero from './views/Hero';
import Tokenomics from './views/Tokenomics';
import Roadmap from './views/Roadmap';
import Footer from './views/Footer';
import Box from './components/Box'
import Button from './components/Button'
import { motion } from 'framer-motion'
import TextAnim from './anim/TextAnim'
import AnimOnce from './anim/AnimOnce'

Modal.setAppElement('#root');

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalIsOpen]);

  const modalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: "999",
      backdropFilter: "blur(4px)",
      WebkitBackdropFilter: "blur(4px)",
    },
    content: {
      width: "400px",
      height: "400px",
      margin: "auto",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      overflow: "hidden",
      padding: "0",
      backgroundColor: "rgba(108, 59, 187, 0.8)",
    },
  };
  

  return (
    <div className='text-white font-poppins bg-blk overflow-hidden'>
      <Nav />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={modalStyles}
      >
        <div className="relative">
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-800 transition duration-300"
            onClick={closeModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="bg-white rounded-lg p-8 h-full">
          <AnimOnce>
  <h1 className='mb-2 font-inter text-center 2xl:text-5xl md:text-4xl text-2xl max-w-[34rem] font-[800] mx-auto w-fit lg:mx-0'>JOIN THE <span className='bg-gradient-to-r from-[#6C3BBB] to-cyan inline-block text-transparent bg-clip-text'>FAIRLAUNCH</span></h1>
</AnimOnce>

            <p className="mb-4 text-center">
            It will run until 05-12 18:00 UTC! 
<br></br><br></br>
Don't forget to get your affliate link and shill it around, from everyone who bought using your link you will get 5% rewards in BNB! 
            </p>
            <div className="flex gap-x-8 justify-center">
              <AnimOnce>
        <a href="https://www.pinksale.finance/launchpad/0x2A1180051729a52dEAE979038E299958b8899ebB?chain=BSC&refId=0xAF05c0d3DA8B7C3f9a067fBBE65cDB599d955EcA" className="">
          <Button className="mt-8 bg-gradient-to-r from-[#6C3BBB] to-cyan hover:from-[#6C3BBB] hover:to-purple-700">
            BUY FAIRLAUNCH
          </Button>
        </a>
      </AnimOnce>
      </div>
    </div>
  </div>
</Modal>




      <Hero />
      <About />
      <Ecosystem />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default App;
