import React, { useEffect, useState } from 'react'
import useWindow from '../../hooks/useWindow'
import Box from '../components/Box'
import Button from '../components/Button'
import { motion } from 'framer-motion'
import TextAnim from '../anim/TextAnim'
import AnimOnce from '../anim/AnimOnce'

const Hero = () => {

    const box = [
        {
            image: 'btc',
            color: '#ff9416'
        },
        {
            image: 'eth',
            color: '#627ee9'
        },
        {
            image: 'bnb',
            color: '#f0b90b'
        },
        {
            image: 'meta',
            color: '#E4761B'
        },
        {
            image: 'etherscan',
            color: '#fff'
        },
        {
            image: 'uniswap',
            color: '#ff007a'
        },
    ]

    const [boxList, setBox] = useState(
        [
            {
                image: '',
                color: ''
            }
        ]
    )

    const { width, height } = useWindow()

    useEffect(() => {
        setBox(box)

        if (width <= 1280) {
            const sliced = box.slice(0, 4)
            setBox(sliced)
        } else {
            setBox(box)
        }

    }, [width])


    return (
        <section className="w-full h-screen bg-blk flex items-center py-20 px-16 overflow-hidden relative" id="/">

            <motion.div initial={{ scale: 1 }} animate={{ scale: 1.3 }} transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="w-[18rem] h-[18rem] bg-purple rounded-full absolute right-[30rem] top-32 blur-[120px]"></motion.div>
            <motion.div initial={{ scale: 1 }} animate={{ scale: 1.3 }} transition={{ delay: 1, duration: 3, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="w-[18rem] h-[18rem] bg-aqua rounded-full absolute right-[8rem] top-[24rem]  blur-[120px]"></motion.div>

            <div className="w-fit mx-auto flex items-center gap-x-[8rem] h-auto ">
                <div className="w-full relative text-center lg:text-left">
                    <motion.img initial={{ opacity: 0, y: -50 }} animate={{ opacity: 0.3, y: 0 }} transition={{ duration: 1.5, ease: [0.16, 0.77, 0.47, .97] }} src="/ethside.webp" alt="Eth" className="bnw absolute top-0 bottom-0 my-auto md:-left-52 -left-32" />
                    <div className="relative z-10">
                        <AnimOnce>
                            <h1 className='font-inter 2xl:text-8xl md:text-7xl text-4xl max-w-[34rem] font-[800] mx-auto w-fit lg:mx-0'><span className='bg-gradient-to-r from-[#6C3BBB] to-cyan inline-block text-transparent bg-clip-text'>$CRYPTO</span></h1>
                        </AnimOnce>

                        <AnimOnce>
                            <p className='opacity-70 max-w-[40rem]'>Most of the time, you are late to the party. We are early.<br></br> $CRYPTO for all.</p>
                          
                        </AnimOnce>

                        <AnimOnce>
                            <a href="#" className="">
                                <Button className="mt-8">
                                    BUY FAIRLAUNCH
                                </Button>
                            </a>
                        </AnimOnce>

                    </div>


                </div>

                <div className="w-full h-full ml-4 lg:block hidden">
                    <div className="grid xl:grid-cols-3 grid-cols-2 w-fit gap-3">
                        {boxList.map((items, i) => {
                            return (
                                <motion.div initial={{ x: 200, opacity: 0, skewX: "12deg" }} animate={{ x: 0, opacity: 1, skewX: "6deg" }} transition={{ duration: 1.5, delay: i * 0.08, ease: [0.16, 0.77, 0.47, .97] }} className="" key={i}>
                                    <Box image={items.image} color={items.color} />
                                </motion.div>


                            )
                        })}
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Hero
