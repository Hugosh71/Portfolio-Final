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
        category:"game",

    },
    {
        title:"Marble Race",
        url:"https://marble-game-threejs.netlify.app/",
        image:"projects/marble.png",
        description:"Ball game made in React-Three-Fiber",
        category:"game",

    },
    {
        title:"MetroHess",
        url:"https://github.com/Hugosh71/MetroHess",
        image:"projects/metrohess.png",
        description:"My first video game made in C",
        category:"game",

    },
    {
        title:"IWNDA",
        url:"https://github.com/Hugosh71/IWillNeverDA",
        image:"projects/iwnda.png",
        description:"Short horror game made in Unity",
        category:"game",

    },
    {
        title:"Carnival Unending",
        url:"https://github.com/Hugosh71/Carnival_Unending",
        image:"projects/carnival.png",
        description:"Game submission for the narrative driven jam 2023 made in Ren'py",
        category:"game",

    },
    {
        title:"Resc'you",
        url:"https://view.genial.ly/62a4bc4cad3b5100188c739f/guide-rescyou",
        image:"projects/Rescyou.png",
        description:"Autonomous rescue car project made at school",
        category:"ai",
    },
    {
        title:"Emotions recognition",
        url:"https://github.com/Hugosh71/Rec.-facial-IA",
        image:"projects/ref.jpg",
        description:"AI recognizing facial emotions made at school",
        category:"ai",
    },
    {
        title:"Pizza or not Pizza",
        url:"https://github.com/Hugosh71/Pizza-or-not-Pizza-",
        image:"projects/bannerpizza.png",
        description:"Ai detecting if a picture is a pizza or not made at school",
        category:"ai",
    },
    {
        title:"PenCity",
        url:"https://github.com/Hugosh71/pencity",
        image:"projects/pencitylogo.png",
        description:"Create your city with a pen using AR and AI (5th year final project)",
        category:"ai",
    },
    {
        title:"Icarus Imagery",
        url:"https://github.com/Hugosh71/Icarus_Imagery",
        image:"projects/icarus.png",
        description:"AI text-to-image generator made using Replicate",
        category:"ai",
    },
    {
        title:"Reinforcement Chess",
        url:"https://github.com/Hugosh71/Reinforcement-Learning-Chess",
        image:"projects/chess.png",
        description:"Ai learns to play chess using Reinforcement Learning",
        category:"ai",
    },
    

]
const Project = (props) => {
    const { project, highlighted } = props;

    const background = useRef();
    const backgroundopacity = useMotionValue(0.4);
    const labelRef = useRef(); // Ref for the label to animate

    // Set background color based on the project category
    const backgroundColor = project.category === "ai" ? "blue" : "black";  // Blue for AI, black for games

    useEffect(() => {
        animate(backgroundopacity, highlighted ? 0.7 : 0.4);
    }, [highlighted]);

    // Floating animation: update the position of the label
    useFrame(({ clock }) => {
        if (labelRef.current) {
            const time = clock.getElapsedTime();  // Get time for smooth animation
            labelRef.current.position.y = 1.3 + Math.sin(time * 2) * 0.05;  // Use sine wave for up-down effect
        }
    });

    return (
        <group {...props}>
            <mesh position={-0.001} onClick={() => window.open(project.url, "_blank")} ref={background}>
                <planeGeometry args={[2.2, 2]} />
                <meshBasicMaterial color={backgroundColor} transparent opacity={0.4} />  {/* Use dynamic color */}
            </mesh>

            {/* Display category label at the top when highlighted */}
            {highlighted && (
                <Text
                    ref={labelRef} // Apply the ref to the label for animation
                    fontSize={0.4}  // Adjust font size as needed
                    anchorX="center"
                    anchorY="bottom"
                    position={[0, 1.3, 0]}  // Initial position at the top of the project
                    color="white"
                >
                    {project.category === "ai" ? "AI" : "Game"}
                </Text>
            )}

            <Image 
                scale={[2, 1.2, 1]} 
                url={project.image} 
                toneMapped={false} 
                position-y={0.3} 
            />

            <Text 
                maxWidth={3}
                anchorX={"left"}
                anchorY={"top"}
                fontSize={0.18}
                position={[-1, -0.4, 0]}
            >
                {project.title.toUpperCase()}
            </Text>

            <Text
                maxWidth={2}
                anchorX="left"
                anchorY="top"
                fontSize={0.13}
                position={[-1, -0.63, 0]}
            >
                {project.description}
            </Text> 
        </group>
    );
};

// Current project atom definition
export const currentProjectAtom = atom(Math.floor(projects.length / 2));

// Projects component definition
export const Projects = () => {
    const { viewport } = useThree();
    const [currentProject] = useAtom(currentProjectAtom);

    return (
        <group position-y={-viewport.height * 2 + 1}>
            {projects.map((project, index) => (
                <motion.group
                    key={"project_" + index}
                    position={[index * 2.5, 0, -3]}
                    animate={{
                        x: 0 + (index - currentProject) * 2.5,
                        y: currentProject === index ? 0 : -0.1,
                        z: currentProject === index ? -2 : -3,
                        rotateX: currentProject === index ? 0 : -Math.PI / 3,
                        rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
                    }}
                >
                    <Project project={project} highlighted={index === currentProject} />
                </motion.group>
            ))}
        </group>
    );
};

