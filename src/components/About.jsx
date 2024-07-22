import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion"
import BrianResume from '../assets/BrianMontenegro_Resume_2024.pdf'
import { IoMdDownload } from "react-icons/io";
import { FaDirections } from "react-icons/fa";

const About = () => {
    return (
        <div className="borber-b border-neutral-900 pb-4">
            <motion.h1 
                 whileInView={{opacity:1, y:0}}
                 initial={{opacity: 0, y:-75}}
                 transition={{duration: 2}}
                 viewport={{ once: true }}
                className="my-20 text-center text-4xl">
                    About Me 
            </motion.h1>

            <div className="flex flex-wrap">
                <motion.div 
                whileInView={{opacity: 1, x:0}}
                initial={{opacity:0, x: -100}}
                viewport={{ once: true }}
                transition={{duration: .5}}
                className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl" src={aboutImg} alt="about" />
                    </div> 
                </motion.div>
                <motion.div 
                whileInView={{opacity: 1, x:0}}
                initial={{opacity:0, x: 100}}
                viewport={{ once: true }}
                transition={{duration: .5}}
                className='w-full lg:w-1/2'>
                        <div className='flex justify-center lg:justify-start'>
                            <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}
                            </p>                 
                        </div>
                        <div className='flex flex-wrap lg:flex-row justify-center lg:justify-start'>
                        <a href={BrianResume} download="brianMontenegroResume2024.pdf" className='flex items-center sm:justify-center mr-4 mt-4 rounded bg-neutral-900 px-2 py-1 text-m font-medium'>
                                Resume<IoMdDownload className='ml-1' />
                        </a>
                        <a href='https://github.com/bmonten3' className='flex items-center mr-4 mt-4 rounded bg-neutral-900 px-2 py-1 text-m font-medium'>
                                GitHub<FaDirections className='ml-1'/>
                        </a>
                        <a href='https://www.linkedin.com/in/brian-montenegro-774814230/' className='flex items-center mr-4 mt-4 rounded bg-neutral-900 px-2 py-1 text-m font-medium'>
                                Linkedin<FaDirections className='ml-1'/>
                        </a>
                        <a href="#contact" className='flex items-center mr-4 mt-4 rounded bg-neutral-900 px-2 py-1 text-m font-medium'>
                                Contact<FaDirections className='ml-1'/>
                        </a>
                        </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About;