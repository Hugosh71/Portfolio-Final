import { motion } from "framer-motion";
import { currentProjectAtom } from "./Projects";
import { useAtom } from "jotai";
import { projects } from "./Projects";
import { useForm, ValidationError } from '@formspree/react';


const Section = (props) => {
    const {children, mobileTop} = props;

    return (
        <motion.section className={`
        h-screen w-screen p-8 max-w-screen-2xl mx-auto
        flex flex-col items-start ${mobileTop ? "justify-start md:justficy-center" : "justify-center"}
        `}
        initial={{
            opacity: 0,
            y: 50,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.6,
            },
        }}
        >
            {children}
        </motion.section>
    )
}

export const Interface = (props) => {
    const { setSection } = props;
    return (
        <div className="flex flex-col items-center w-screen">
        <AboutSection setSection={setSection} />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
        </div>
    );
};

const AboutSection = (props) => {
    const { setSection } = props;
    return (
    <Section mobileTop>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-snug mt-8 md:mt-0">
            Hello I'm
            <br/>
            <span className="">
                Hugo Fanchini
            </span> 
            </h1>
            <motion.p className="text-lg text-gray-900 mt-4"
            initial={{
                opacity: 0,
                y: 25,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
                transition= {{
                    duration: 1,
                    delay: 1.5,
                }}
            >
                    I'm an engineer specialized in Artificial Intelligence.
                <br/>
                    I develop video games, AI and do 3D modeling in my free time.
            </motion.p>
            <motion.button 
            onClick={() => setSection(3)}
            className={`bg-blue-600 text-white py-4 px-8 rounded-lg
            font-bold text-lg mt-4 md:mt-16`}
            initial={{
                opacity: 0,
                y: 25,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
                transition= {{
                    duration: 1,
                    delay: 2,
                }}
            >
                Contact me
            </motion.button>
            
    </Section>
    );
};

const skills =[
    {
        title: "Unity",
        level: 85,
    },
    {
        title: "C# / C++ ",
        level: 80,
    },
    {
        title: "Python",
        level: 70,
    },
    {
        title: "JavaScript / React-Three-Fiber",
        level: 80,
    },
    {
        title: "HTML / CSS",
        level: 60,
    },
    {
        title: "Blender",
        level: 50,
    },
    {
        title: "Unreal Engine",
        level: 70,
    },
    
];

const languages = [
    {
        title: "French 🇫🇷",
        level: 100,
    },
    {
        title: "English 🇬🇧",
        level: 90,
    }
]

const SkillSection = () => {
    return(
        <Section>
        <motion.div className="w-full" whileInView={"visible"}>
            <h2 className="text-3xl md:text-5xl font-bold">Skills</h2>
            <div className="mt-8 space-y-3">
                {skills.map((skill,index) => (
                    <div className="w-full md:w-64" key={index}>
                    <motion.h3 className="text-lg md:text-xl font-bold text-gray-800"
                        initial={{
                            opacity: 0,
                        }}
                        variants={{
                            visible:{
                                opacity: 1,
                                transition:{
                                    duration: 1,
                                    delay: 1 + index * 0.2,
                                }
                            }
                        }}
                    >{skill.title}</motion.h3>
                    <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                        <motion.div
                            className="h-full bg-blue-500 rounded-full"
                            style={{width : `${skill.level}%`}}
                            initial={{
                                scaleX: 0,
                                originX: 0,
                            }}
                            variants={{
                                visible: {
                                scaleX: 1,
                                transition:{
                                    duration: 1,
                                    delay: 1 + index * 0.2,
                                }
                                }
                            }}
                        />
                    </div>
                    </div>
                )
                )}
        </div>
        <div>
        <h2 className="text-4xl font-bold mt-10">Languages</h2>
        <div className="mt-8 space-y-2">
            {languages.map((lng,index)=>(
                <div className="w-full md:w-64" key={index}>
                <motion.h3 className="text-lg md:text-xl font-bold text-gray-800"
                    initial={{
                        opacity: 0,
                    }}
                    variants={{
                        visible:{
                            opacity: 1,
                            transition:{
                                duration: 1,
                                delay: 2 + index * 0.2,
                            }
                        }
                    }}
                >{lng.title}</motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                    <motion.div
                        className="h-full bg-blue-500 rounded-full"
                        style={{width : `${lng.level}%`}}
                        initial={{
                            scaleX: 0,
                            originX: 0,
                        }}
                        variants={{
                            visible: {
                            scaleX: 1,
                            transition:{
                                duration: 1,
                                delay: 2 + index * 0.2,
                            }
                            }
                        }}
                    />
                </div>
                </div>
            )
            )}
            </div>
        </div>
        </motion.div>
        </Section>

    );
};

const ProjectSection = () => {

    const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

    const nextProject = () => {
        console.log("current project before update:", currentProject)
        setCurrentProject((currentProject + 1) % projects.length);
        console.log("current project after update :", currentProject)
    };

    const previousProject = () => {
        console.log("current project before update:", currentProject)
        setCurrentProject((currentProject - 1 + projects.length) % projects.length);
        console.log("current project after update :", currentProject)
    };

    return(
        <Section>
            <div className="flex w-full h-full gap-8 items-center justify-center">
                <button 
                    className="hover:text-indigo-800 transition-colors"
                    onClick={previousProject}
                >
                    ← Previous
                </button>
                <h2 className="text-5xl font-bold">Projects</h2>
                <button
                    className="hover:text-indigo-800 transition-colors"
                    onClick={nextProject}
                >
                    Next →
                </button>
            </div>
        </Section>
    );
    };

const ContactSection = () => {
    const [state, handleSubmit] = useForm("mgegwvzn");
    return(
        <Section>
            <h2 className="text-5xl font-bold">Contact me</h2>
            <div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
                
                    {state.succeeded ? (
                        <p className="text-gray-900 text-center">
                            Your message has been sent !
                        </p>
                    ) : (
                    <form onSubmit={handleSubmit}>
                    <label for="name" className="font-medium text-gray-900 block mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 "/>
                        <label 
                            for="email" 
                            className="font-medium text-gray-900 block mb-1 mt-8">
                                Email
                        </label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1"/>
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    <label
                        for="email"
                        className="font-medium text-gray-900 block mb-1 mt-8">
                            Message
                        </label>
                    <textarea
                        name="message"
                        id="message"
                        className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1">
                        </textarea>
                        <ValidationError className="mt-1 text-red-500"
                            errors={state.errors}
                        />
          
                        <button disabled={state.submitting} className="bg-blue-600 text-white py-4 px-8 rounded-lg font-bold text-lg">
                            Submit 
                        </button>
                    </form>
                    )}
                    
                    
            </div>
        </Section>
    )
    }
