import React, { useRef } from "react";
import { useGLTF,useTexture } from "@react-three/drei";
import * as THREE from "three";
import {motion} from "framer-motion-3d";

export function Office(props) {

  const {section} = props;
  const { nodes, materials } = useGLTF("models/3Droom.gltf");

    const texture = useTexture("textures/wood.jpg");
    const floortexture = useTexture("textures/lamfloor.jpg");

    

    texture.flipY = false;
    floortexture.flipY = false;

    


    texture.colorSpace = THREE.SRGBColorSpace

    const textureMaterial = new THREE.MeshStandardMaterial({
        map:texture
    })

    const redmaterial = new THREE.MeshStandardMaterial({
        color:"#D70040"
    })

    const floorMaterial = new THREE.MeshStandardMaterial({
        map:floortexture
    })

    const brickMaterial = new THREE.MeshStandardMaterial({
        color:"#824348"
    })


    
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls.geometry}
        material={brickMaterial}
        position={[-0.33, 2.144, -0.262]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[3, 2.29, 2.25]}
      />
      <group
        position={[0.153, 0.391, 0.109]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[3, 2.289, 2.249]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={floorMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_1.geometry}
          material={floorMaterial}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.walls_floor.geometry}
        material={floorMaterial}
        position={[-0.365, 2.146, -0.263]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[3, 2.29, 2.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair.geometry}
        material={materials.Wheel}
        position={[0.808, 0.443, -0.511]}
        rotation={[1.569, 0.069, 0.373]}
        scale={[0.054, 0.041, 0.054]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair001.geometry}
          material={materials.Yellorange}
          position={[11.012, 12.103, -16.913]}
          rotation={[-1.554, 0.378, 0.014]}
          scale={[4.226, 4.047, 5.111]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle.geometry}
          material={materials.Grey}
          position={[8.249, 8.475, -3.459]}
          rotation={[-1.554, 0.378, -0.03]}
          scale={[6.015, 5.76, 7.274]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials.Grey}
          position={[8.631, 8.344, -9.017]}
          rotation={[-1.554, 0.378, 0.014]}
          scale={[0.677, 0.324, 0.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials.Wheel}
          position={[17.812, 3.721, 1.074]}
          rotation={[-0.027, -0.062, -0.381]}
          scale={[1.044, 0.973, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials.Wheel}
          position={[9.483, -4.684, 0.696]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={materials.Wheel}
          position={[-1.773, 13.706, -0.358]}
          rotation={[0.117, 0.243, -0.493]}
          scale={[1.065, 0.957, 1.003]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials.Wheel}
          position={[6.399, 21.872, 0.025]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={materials.Wheel}
          position={[16.109, 16.986, 0.74]}
          rotation={[0.045, -0.045, -0.895]}
          scale={[1.193, 0.865, 1.001]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamp.geometry}
        material={materials.darkgreen}
        position={[-1.031, 2.081, 1.426]}
        rotation={[-Math.PI, 0, -Math.PI / 2]}
        scale={0.081}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials.darkgreen}
          position={[-20.613, -0.032, -0.014]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
          scale={[13.292, 12.346, 13.292]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002.geometry}
          material={materials.darkgreen}
          position={[-1.858, -0.032, -2.609]}
          rotation={[3.112, 0.932, -1.546]}
          scale={[5.915, 7.926, 5.915]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials.darkgreen}
          position={[8.214, -0.048, 11.24]}
          rotation={[-2.977, -0.473, -1.531]}
          scale={[2.191, 4.383, 2.191]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book1.geometry}
        material={materials.Book2}
        position={[0.219, 1.381, -1.402]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book2.geometry}
        material={materials.Yellorange}
        position={[0.219, 1.428, -1.402]}
        rotation={[0, -0.235, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book2001.geometry}
        material={materials.BookRosé}
        position={[0.219, 1.467, -1.402]}
        rotation={[0, -0.015, 0]}
        scale={[0.595, 0.306, 0.595]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cactus.geometry}
        material={materials.Vase}
        position={[1.358, 2.253, -1.929]}
        scale={[0.061, 0.101, 0.052]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere004.geometry}
          material={materials.Cactus}
          position={[0.033, 1.327, 0.003]}
          scale={[0.861, 1.301, 1.09]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere005.geometry}
          material={materials.Cactus}
          position={[0.833, 1.839, -0.366]}
          rotation={[-0.248, 0.209, -0.511]}
          scale={[0.409, 0.657, 0.497]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cactus001.geometry}
        material={materials.Vase}
        position={[-2.37, 2.563, 0.751]}
        rotation={[0, 1.293, 0]}
        scale={[0.084, 0.139, 0.072]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere006.geometry}
          material={materials.Cactus}
          position={[0.033, 1.327, 0.003]}
          scale={[0.861, 1.301, 1.09]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere007.geometry}
          material={materials.Cactus}
          position={[0.833, 1.839, -0.366]}
          rotation={[-0.248, 0.209, -0.511]}
          scale={[0.409, 0.657, 0.497]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere008.geometry}
          material={materials.Cactus}
          position={[-0.849, 1.839, 0.193]}
          rotation={[-0.645, 0.432, 0.998]}
          scale={[0.266, 0.462, 0.342]}
        />
      </mesh>
      <motion.group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plant.geometry}
        material={materials.Vase}
        position={[-1.62, 0.411, 1.911]}
        rotation={[0, 1.293, 0]}
        scale={[0.2, 0.326, 0.186]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.Leaf}
          position={[-1.622, 1.463, 0.45]}
          rotation={[0.686, -1.228, 0.725]}
          scale={[5.345, 3.156, 4.982]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.Leaf}
          position={[-0.924, 1.712, -0.811]}
          rotation={[2.762, -0.918, 2.942]}
          scale={[5.212, 3.2, 5.093]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials.Leaf}
          position={[0.678, 1.375, -1.145]}
          rotation={[2.92, 0.687, -2.842]}
          scale={[5.147, 3.172, 5.177]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials.Leaf}
          position={[0.535, 1.463, 1.309]}
          rotation={[0.259, 0.511, -0.099]}
          scale={[5.097, 3.181, 5.221]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials.Leaf}
          position={[-0.719, 1.957, 1.633]}
          rotation={[0.221, -0.156, 0.041]}
          scale={[5.021, 3.175, 5.297]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials.Leaf}
          position={[-1.491, 2.206, 0.424]}
          rotation={[0.302, -1.06, 0.457]}
          scale={[5.268, 3.177, 5.051]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials.Leaf}
          position={[-1.098, 1.869, -1.274]}
          rotation={[2.909, -0.439, -3.129]}
          scale={[5.053, 3.195, 5.255]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials.Leaf}
          position={[0.919, 1.957, -0.1]}
          rotation={[1.937, 1.368, -1.806]}
          scale={[5.365, 3.161, 4.957]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials.Leaf}
          position={[0.085, 2.347, -1.329]}
          rotation={[2.923, 0.07, -3.123]}
          scale={[5.014, 7.473, 5.574]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={materials.Leaf}
          position={[1.185, 2.688, -0.267]}
          rotation={[2.871, 0.973, -2.73]}
          scale={[5.362, 7.435, 5.282]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010.geometry}
          material={materials.Leaf}
          position={[0.7, 2.379, 1.532]}
          rotation={[0.247, 0.525, -0.016]}
          scale={[5.172, 7.49, 5.447]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011.geometry}
          material={materials.Leaf}
          position={[-1.287, 2.597, 1.138]}
          rotation={[0.239, -0.483, 0.186]}
          scale={[5.109, 7.456, 5.497]}
        />
      </mesh>
      </motion.group>
      <group position={[-2.424, 3.456, 1.321]} scale={[0.092, 0.119, 0.092]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle008.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle008_1.geometry}
          material={materials.CandleLight}
        />
      </group>
      <group position={[-2.371, 3.456, 1.532]} scale={0.078}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle010.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle010_1.geometry}
          material={materials.CandleLight}
        />
      </group>
      <group position={[-2.419, 3.456, 1.663]} scale={0.045}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle011.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle011_1.geometry}
          material={materials.CandleLight}
        />
      </group>
      <group position={[-1.965, 2.134, -1.716]} scale={0.075}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle012.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle012_1.geometry}
          material={materials.CandleLight}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Laptop.geometry}
        material={materials.Laptop_mat1}
        position={[1.081, 1.363, -0.75]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.209, 0.301, 0.312]}
      />
      <group
        position={[1.876, 1.508, -1.496]}
        rotation={[-Math.PI, 0.258, -Math.PI]}
        scale={[0.299, 0.304, 0.299]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025.geometry}
          material={materials.Body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025_1.geometry}
          material={materials.Goggles}
        />
      </group>
      <motion.group
      scale={[0,0,0]}
      animate={{
        scale: section === 0 ? 1 : 0,
      }}
      >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pillow.geometry}
        material={redmaterial}
        position={[-1.539, 1.219, -1.449]}
        rotation={[2.142, 0, 0]}
        scale={[0.191, 0.141, 0.2]}
      />
      </motion.group>
      <group
        position={[1.75, 2.799, -1.974]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.517, 1.967, 1.967]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.window_1.geometry}
          material={materials.window}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.window_2.geometry}
          material={materials.Woods}
        />
      </group>
      <group
        position={[1.75, 3.898, -1.903]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.474, 1.967, 1.967]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.window002_1.geometry}
          material={materials.window}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.window002_2.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        position={[1.75, 3.334, -2.052]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[7.578, 1.967, 4.064]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.window003.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.window003_1.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        position={[1.757, 3.736, -1.884]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={[0.625, 1, 0.589]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group11767427_1.geometry}
          material={materials.mat19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group11767427_2.geometry}
          material={materials.blinds}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1246942833.geometry}
          material={materials["mat20.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1477700025.geometry}
          material={materials.mat19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1512631129.geometry}
          material={materials.mat17}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1606767967.geometry}
          material={materials["mat20.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1840719534.geometry}
          material={materials.mat17}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1856349250.geometry}
          material={materials.mat19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group298871933.geometry}
          material={materials.mat17}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group427675855.geometry}
          material={materials.mat19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group848587833.geometry}
          material={materials.mat17}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group970697144.geometry}
          material={materials.mat17}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1024187379_1.geometry}
          material={materials.blinds}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1024187379_2.geometry}
          material={materials.mat19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1103958513_1.geometry}
          material={materials.blinds}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1103958513_2.geometry}
          material={materials.mat19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1614564418_1.geometry}
          material={materials.blinds}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1614564418_2.geometry}
          material={materials.mat19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1774544435_1.geometry}
          material={materials.blinds}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1774544435_2.geometry}
          material={materials.mat19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1785529362_1.geometry}
          material={materials.blinds}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1785529362_2.geometry}
          material={materials.mat19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2011576104_1.geometry}
          material={materials.mat19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2011576104_2.geometry}
          material={materials.blinds}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group205479027_1.geometry}
          material={materials.mat19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group205479027_2.geometry}
          material={materials.blinds}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group451389640_1.geometry}
          material={materials.blinds}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group451389640_2.geometry}
          material={materials.mat19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group491062930_1.geometry}
          material={materials.blinds}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group491062930_2.geometry}
          material={materials.mat19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group765891613_1.geometry}
          material={materials.blinds}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group765891613_2.geometry}
          material={materials.mat19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group77709967_1.geometry}
          material={materials.blinds}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group77709967_2.geometry}
          material={materials.mat19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group77709967_3.geometry}
          material={materials.mat17}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group830606209_1.geometry}
          material={materials.blinds}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group830606209_2.geometry}
          material={materials.mat19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group928384235_1.geometry}
          material={materials.blinds}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group928384235_2.geometry}
          material={materials.mat19}
        />
      </group>
      <motion.group
        scale={[0,0,0]}
        animate={{
          scale: section === 0 ? 1 : 0,
        }}
      >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table.geometry}
        material={textureMaterial}
        position={[2.108, 1.296, -1.143]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.335, 2.29, 0.641]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Handle.geometry}
          material={materials.DoorKnob}
          position={[0.012, -0.037, -1.007]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={[0.03, 0.027, 0.018]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Handle001.geometry}
          material={materials.DoorKnob}
          position={[0.012, -0.133, -1.007]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={[0.03, 0.027, 0.018]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Handle002.geometry}
          material={materials.DoorKnob}
          position={[0.012, -0.242, -1.007]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={[0.03, 0.027, 0.018]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Handle003.geometry}
          material={materials.DoorKnob}
          position={[0.012, -0.341, -1.007]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={[0.03, 0.027, 0.018]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TableLeg.geometry}
          material={textureMaterial}
          position={[1.505, 0.002, -0.795]}
          scale={[0.03, 0.465, 0.062]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TableTop.geometry}
          material={textureMaterial}
          position={[0.814, 0.769, 0.17]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TableTop001.geometry}
          material={textureMaterial}
          position={[2.718, 0.348, 1.008]}
          scale={[0.6, 1.259, 0.367]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TableTop002.geometry}
          material={textureMaterial}
          position={[3.421, 0.537, -3.635]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[1.25, 1.259, 0.176]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TableTop003.geometry}
          material={textureMaterial}
          position={[3.421, 0.926, -3.635]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[1.25, 1.259, 0.176]}
        />
      </mesh>
      </motion.group>
      <motion.group
        scale={[0,0,0]}
        animate={{
          scale: section === 0 ? 1 : 0,
        }}
      >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bed.geometry}
        material={redmaterial}
        position={[-1.549, 1.01, -0.169]}
        scale={[0.805, 0.1, 1.25]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BedFrame.geometry}
          material={textureMaterial}
          position={[1.015, -1.133, 0.806]}
          scale={[0.097, 0.78, 0.062]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mattress.geometry}
          material={materials.Bed}
          position={[0, -0.616, -0.214]}
        />
      </mesh>
      </motion.group>
      <group position={[1.63, 3.338, -2.338]} scale={[0.86, 1.185, 0.185]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={redmaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials.window}
        />
      </group>
      <group position={[1.63, 2.257, -2.267]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_1.geometry}
          material={materials.window}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Poster.geometry}
        material={materials.Poster}
        position={[-2.609, 3.275, -0.703]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.65, 1, 0.9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Poster2.geometry}
        material={materials.Poster2}
        position={[-1.345, 3.503, -1.942]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.536, 0.752, 0.704]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CadrePoster2.geometry}
          material={textureMaterial}
          position={[-0.029, -0.005, -0.022]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[1.193, 4.357, 1.181]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamp003.geometry}
        material={materials.darkgreen}
        position={[2.288, 1.352, -1.435]}
        rotation={[Math.PI, -0.897, Math.PI]}
        scale={[0.5, 0.786, 0.5]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials.darkgreen}
          position={[-0.161, 0.23, 0.002]}
          rotation={[0, 0, 0.589]}
          scale={[0.022, 0.211, 0.025]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={materials.darkgreen}
          position={[-0.164, 0.516, 0.002]}
          rotation={[0, 0, -0.655]}
          scale={[0.022, 0.188, 0.025]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010.geometry}
          material={materials.darkgreen}
          position={[0.059, 0.67, 0.002]}
          rotation={[0, 0, -1.175]}
          scale={[0.017, 0.055, 0.025]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lamp001.geometry}
          material={materials.darkgreen}
          position={[-0.318, 0.382, 0.004]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.027, 0.041, 0.043]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lamp002.geometry}
          material={materials.darkgreen}
          position={[-0.015, 0.648, 0.004]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.027, 0.041, 0.043]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          material={materials.darkgreen}
          position={[-0.001, 0.068, 0.004]}
          scale={[0.043, 0.027, 0.043]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere002.geometry}
          material={materials.darkgreen}
          position={[0.31, 0.676, 0.01]}
          rotation={[0, 0, 0.68]}
          scale={[0.189, 0.173, 0.216]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere003.geometry}
          material={materials.darkgreen}
          position={[0.155, 0.68, 0.001]}
          rotation={[0, 0, 1.24]}
          scale={[0.037, 0.056, 0.055]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book2002.geometry}
        material={materials.BookRosé}
        position={[-1.656, 2.156, -1.75]}
        rotation={[0, 0.339, 0]}
        scale={0.797}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book1001.geometry}
        material={materials.Book2}
        position={[-1.169, 2.316, -1.775]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book1002.geometry}
        material={materials.Yellorange}
        position={[-1.239, 2.316, -1.775]}
        rotation={[Math.PI / 2, -0.136, -Math.PI / 2]}
        scale={[1, 0.796, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book1003.geometry}
        material={materials.BookRosé}
        position={[-2.493, 2.761, 1.731]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[1, 1.224, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book1004.geometry}
        material={nodes.book1004.material}
        position={[-2.493, 2.761, 1.68]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[1, 0.857, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book1005.geometry}
        material={materials.Book2}
        position={[-2.493, 2.761, 1.631]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[1, 0.857, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book1006.geometry}
        material={materials.BookRosé}
        position={[-2.493, 2.585, 1.207]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1.224, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book1007.geometry}
        material={materials.Yellorange}
        position={[-2.493, 2.688, 1.207]}
        rotation={[0, -0.175, 0]}
        scale={[0.745, 0.913, 0.745]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book1008.geometry}
        material={materials.Book2}
        position={[-2.463, 2.636, 1.207]}
        rotation={[-Math.PI, Math.PI / 9, -Math.PI]}
        scale={[1, 1.02, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book1009.geometry}
        material={materials.BookRosé}
        position={[-2.493, 3.648, 0.65]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[1, 1.224, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book1010.geometry}
        material={materials.Book2}
        position={[-2.493, 3.648, 0.598]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[1, 0.857, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book1011.geometry}
        material={materials.Yellorange}
        position={[-2.493, 3.648, 0.549]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[1, 0.857, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book1012.geometry}
        material={nodes.book1012.material}
        position={[-2.493, 3.609, 0.723]}
        rotation={[1.387, 0, Math.PI]}
        scale={[0.822, 0.612, 0.822]}
      />
    </group>
  );
}

useGLTF.preload("models/3Droom.gltf");
useTexture.preload("textures/wood.jpg");
useTexture.preload("textures/lamfloor.jpg");
