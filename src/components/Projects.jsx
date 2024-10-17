import { PROJECTS } from "../constants";
import { motion, useTime } from "framer-motion";
import { useState } from "react";
import SlidePortal from "./SlidePortal";


const Projects = () => {

    const [isImgStackOpen, setImgStack] = useState(false);
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const openProject = (index) => {
        setCurrentProjectIndex(index);
        setCurrentImgIndex(0);
        setImgStack(true); 
      };

      const nextSlide = () => {
        setCurrentImgIndex((prevIndex) => {
          const projectImages = PROJECTS[currentProjectIndex].image;
          return (prevIndex + 1) % projectImages.length;
        });
      };
      
      const prevSlide = () => {
        setCurrentImgIndex((prevIndex) => {
          const projectImages = PROJECTS[currentProjectIndex].image;
          return (prevIndex - 1 + projectImages.length) % projectImages.length;
        });
      };

    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2 
                whileInView={{opacity:1, y:0}}
                initial={{opacity: 0, y:-75}}
                transition={{duration: 1}}
                viewport={{ once: true }}
                className="my-20 text-center text-4xl">
                    Projects 
            </motion.h2>
            <motion.h6 
                whileInView={{opacity:1, y:0}}
                initial={{opacity: 0, y:-75}}
                transition={{duration: 1}}
                viewport={{ once: true }}
                className="my-10 text-center text-m">
            </motion.h6>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 sm:px-2 flex flex-wrap lg:justify-center">
                        <motion.div 
                        whileInView={{opacity: 1, x:0}}
                        initial={{opacity:0, x: -100}}
                        transition={{duration: 1}}
                        viewport={{ once: true }}
                        className="w-full flex justify-center lg:w-1/4">
                        <div>
                            <img 
                            src={project.image[0]} 
                            alt={project.title} 
                            onClick={() => openProject(index)}
                            className="mb-6 w-full max-w-xs rounded lg:mr-16 cursor-pointer"
                            />
                            </div>
                        </motion.div>
                        { 
                            isImgStackOpen ? (
                                <SlidePortal>              
                                        
                                        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center" onClick={() => setImgStack(false)} >
                                                <div 
                                                    className="relative bg-white max-w-md md:max-w-lg lg:max-w-[1280px] lg:h-[720px] h-64 md:h-80 w-full mx-auto p-0 rounded-lg shadow-lg"
                                                    onClick={(e) => e.stopPropagation()}
                                                   >
                                                    <div className="">
                                                    <img
                                                            src={PROJECTS[currentProjectIndex].image[currentImgIndex]}
                                                            alt="Slideshow"
                                                            className="absolute inset-0 w-full h-full rounded-lg object-cover"
                                                        />
                                                        <button
                                                            onClick={() => setImgStack(false)}
                                                            className="absolute top-8 right-8 bg-white p-4 rounded-full shadow-lg"
                                                            aria-label="Close"
                                                        >
                                                            &times;
                                                        </button>
                                                        <button className="absolute bottom-4 left-1/4 bg-white p-4 rounded-full shadow-lg" onClick={() => prevSlide()}>◀</button>
                                                        <button className="absolute bottom-4 right-1/4 bg-white p-4 rounded-full shadow-lg" onClick={() => nextSlide()}>▶</button>
                                                    </div>
                                               </div>
                                             </div>                                       
                                </SlidePortal>
                            ) : null
                        }   
            <motion.div 
                        whileInView={{opacity: 1, x:0}}
                        initial={{opacity:0, x: 100}}
                        transition={{duration: 1}}
                        viewport={{ once: true }}
                        className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            <div className="flex flex-wrap">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                                    {tech}
                                </span>
                            ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;