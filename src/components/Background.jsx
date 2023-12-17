import { Sphere, useScroll } from "@react-three/drei"
import * as THREE from "three"
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

export const Background = () => {
    const material = useRef();
    const color = useRef({
        color : "#b9bcff"
    })

    const data = useScroll();

    useFrame(() => {
        tl.current.progress(data.scroll.current);
        material.current.color = new THREE.Color(color.current.color);
    })

    const tl = useRef();
    useEffect(() => {
        tl.current = gsap.timeline();
        tl.current.to(color.current,{
            color: "#D89DAC",
        });
        tl.current.to(color.current,{
            color: "#7a7ca5",
        });
        tl.current.to(color.current,{
            color: "#9b96dd",
        });
    },[]);
    return(
    <group>
        <Sphere scale={[30,30,30]}>
            <meshBasicMaterial ref={material} side={THREE.BackSide} toneMapped={false} />
        </Sphere>
    </group>);
};