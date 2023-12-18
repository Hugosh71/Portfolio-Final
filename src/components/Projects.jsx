import { useFrame, useThree } from "@react-three/fiber"
import { motion } from "framer-motion-3d";
import * as THREE from "three";
import { Image } from "@react-three/drei";
import { Text } from "@react-three/drei";
import { atom,useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { animate, useMotionValue } from "framer-motion";


export const projects = [
    {
        title:"Way of the Blade",
        url:"https://wayoftheblade.netlify.app/",
        image:"projects/wayof.png",
        description:"2 player fighting game made in JS",

    },
    {
        title:"Marble Race",
        url:"https://marble-game-threejs.netlify.app/",
        image:"projects/marble.png",
        description:"Ball game made in React-Three-Fiber",

    },
    {
        title:"MetroHess",
        url:"https://github.com/Hugosh71/MetroHess",
        image:"projects/metrohess.png",
        description:"My first video game made in C",

    },
    {
        title:"IWNDA",
        url:"https://github.com/Hugosh71/IWillNeverDA",
        image:"projects/iwnda.png",
        description:"Short horror game made in Unity",

    },
    {
        title:"Carnival Unending",
        url:"https://github.com/Hugosh71/Carnival_Unending",
        image:"projects/carnival.png",
        description:"Game submission for the narrative driven jam 2023 made in Ren'py",

    },
    {
        title:"Resc'you",
        url:"https://view.genial.ly/62a4bc4cad3b5100188c739f/guide-rescyou",
        image:"projects/Rescyou.png",
        description:"Autonomous rescue car project made at school",

    },
    {
        title:"Emotions recognition",
        url:"https://github.com/Hugosh71/Rec.-facial-IA",
        image:"projects/ref.jpg",
        description:"AI recognizing facial emotions made at school",

    },
    {
        title:"Pizza or not Pizza",
        url:"https://github.com/Hugosh71/Pizza-or-not-Pizza-",
        image:"projects/bannerpizza.png",
        description:"Ai detecting if a picture is a pizza or not made at school",

    },
    {
        title:"PenCity",
        url:"https://github.com/Karamouche/pencity",
        image:"projects/pencitylogo.png",
        description:"Create your city with a pen using AR and AI (5th year final project)",

    },
    
]

const Project = (props) => {
    const {project, highlighted} = props;

    const background = useRef();
    const backgroundopacity = useMotionValue(0.4);

    useEffect(() => {
        animate(backgroundopacity, highlighted ? 0.7 : 0.4)
    }, [highlighted]);

    useFrame(() => {
        background.current.material.opacity = backgroundopacity.get();
    });

    return (
        <group {...props}>
            <mesh position={-0.001} onClick={() => window.open(project.url,"_blank")} ref={background} >
                <planeGeometry args={[2.2,2]}/>
                <meshBasicMaterial color="black" transparent opacity={0.4}/>
            </mesh>
            <Image 
                scale={[2,1.2,1]} 
                url={project.image} 
                toneMapped={false} 
                position-y={0.3} />
                <Text 
                    maxWidth={3}
                    anchorX={"left"}
                    anchorY={"top"}
                    fontSize={0.18}
                    position={[-1,-0.4,0]}

                >
                    {project.title.toUpperCase()}
                </Text>
                <Text
                    maxWidth={2}
                    anchorX="left"
                    anchorY="top"
                    fontSize={0.13}
                    position={[-1,-0.63,0]}

                >
                    {project.description}
                </Text> 
        </group>
    );
};

export const currentProjectAtom = atom(Math.floor(projects.length/2));

export const Projects = () => {

    const{viewport} = useThree();
    const [currentProject] = useAtom(currentProjectAtom);


    return (
        <group position-y={-viewport.height*2+1}>
            {projects.map((project, index)=> (
                <motion.group key={"project_" + index} 
                    position={[index*2.5,0,-3]} 
                    animate={{
                        x:0 + (index - currentProject) * 2.5,
                        y: currentProject === index ? 0 : -0.1,
                        z: currentProject === index ? -2 : -3,
                        rotateX: currentProject === index ? 0 : -Math.PI / 3,
                        rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
                    }}
                    >
                        <Project project={project} highlighted={index===currentProject} />
                    </motion.group>
                ))
            }
        </group>
    )
}