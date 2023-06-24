import React from 'react'
import { motion } from 'framer-motion'
import TextAnimSkew from '../anim/TextAnimSkew'
import TextAnim from '../anim/TextAnim'
import Floating from '../anim/Floating'
import Ecosystem from './Ecosystem'

const About = () => {
    return (

        <>
            <section className="w-full h-auto bg-blk py-20 flex justify-center relative md:px-20 px-12 flex-col gap-y-20 z-10" id="about">

                <motion.div initial={{ scale: 1 }} animate={{ scale: 1.3 }} transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="md:w-[18rem] md:h-[18rem] w-[12rem] h-[12rem] bg-purple rounded-full absolute 2xl:left-[35rem] lg:left-[30rem] md:right-10 right-5 top-[27rem] blur-[120px]"></motion.div>

                <motion.div initial={{ scale: 1 }} animate={{ scale: 1.3 }} transition={{ delay: 1, duration: 3, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="md:w-[18rem] md:h-[18rem] w-[12rem] h-[12rem] bg-aqua rounded-full absolute 2xl:left-[14rem] lg:left-[10rem] md:left-20 left-10 top-[16rem]  blur-[120px]"></motion.div>

                <div className="max-w-[1300px] w-full mx-auto text-center skew-x-6 lg:text-6xl sm:text-4xl text-2xl font-[800]">
                    <TextAnimSkew>
                        <h1 className=''>ABOUT <span className='stroke opacity-20'>$CRYPTO</span></h1>
                    </TextAnimSkew>

                    <TextAnimSkew>
                        <h1 className=''>$CRYPTO</h1>
                    </TextAnimSkew>
                </div>


                <div className="w-fit mx-auto flex items-center gap-x-28 relative z-10 lg:flex-row flex-col gap-y-10 text-center lg:text-left">

                    <Floating>
                        <img src="/about.webp" alt="About" className="w-[25rem]" />
                    </Floating>

                    <div className="max-w-[33rem] 2xl:max-w-[40rem]">
                        <TextAnimSkew>
                            <h3 className="text-2xl font-[600] skew-x-6">CONCEPT OF $CRYPTO</h3>
                        </TextAnimSkew>
                        <div className="text-sm opacity-60 mt-2 flex flex-col gap-y-4">

                            <TextAnim>
                                <p className="">Don’t worry, you’re early.  Less than 5% of the worlds population currently dabble in $CRYPTO.  </p>
                            </TextAnim>
                            <TextAnim>
                                <p className="">You’re way early. </p>
                            </TextAnim>
                            <TextAnim>
                                <p className="">You want a rags to riches story?  You dream, of a 1000x?  This is only possible with $CRYPTO.  No other assets in the world can give you returns like $CRYPTO does.  $CRYPTO is on the cutting edge of technology, and will bring about wealth & change across the world.  With companies like Blackrock getting heavily involved, you can be your bottom dollar on $CRYPTO exploding into adoption.</p>
                            </TextAnim>
                            <TextAnim>
                                <p className="">So, just strap in, enjoy the ride to the moon.  Coz you’re early in $CRYPTO.
</p>
                            </TextAnim>
                        </div>
                    </div>
                </div>

            </section>
        </>

    )
}

export default About