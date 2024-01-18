import { useGLTF } from "@react-three/drei"

export const Model = () => {
    const {nodes , materials} = useGLTF('/desk/setup.glb')
  return (

    <group scale={[1,1,1]}>
      <group
        position={[2.376, 1.737, -0.286]}
        rotation={[-Math.PI / 2, 0, -1.259]}
      >
        <group scale={0.153}>
          <group position={[-3.77, -4.977, 1.178]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_0.geometry}
              material={materials.initialShadingGroup}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_1.geometry}
              material={materials.initialShadingGroup}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_2.geometry}
              material={materials.initialShadingGroup}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_3.geometry}
              material={materials.initialShadingGroup}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_4.geometry}
              material={materials.initialShadingGroup}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_5.geometry}
              material={materials.initialShadingGroup}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_6.geometry}
              material={materials.initialShadingGroup}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_7.geometry}
              material={materials.initialShadingGroup}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_8.geometry}
              material={materials.initialShadingGroup}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh_9.geometry}
              material={materials.initialShadingGroup}
            />
          </group>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.002"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group
        position={[-0.003, 2.671, -2.527]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.506}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_2.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_3.geometry}
          material={materials["Material.005"]}
        />
      </group>
      <group
        position={[-0.766, 2.587, -0.992]}
        rotation={[Math.PI / 2, 0, 0.153]}
        scale={1.552}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials.screen}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.006"]}
        position={[-0.766, 2.587, -0.992]}
        rotation={[Math.PI / 2, 0, 0.153]}
        scale={1.552}
      />
      <group
        position={[-0.567, 2.587, 1.437]}
        rotation={[Math.PI / 2, 0, -0.324]}
        scale={1.552}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials.screen}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.006"]}
        position={[-0.567, 2.587, 1.437]}
        rotation={[Math.PI / 2, 0, -0.324]}
        scale={1.552}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials["Material.007"]}
        position={[0.528, 2.599, 0.413]}
        rotation={[Math.PI / 2, 0, -1.607]}
        scale={0.782}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials["Material.008"]}
        position={[0.527, 2.609, -1.063]}
        rotation={[Math.PI / 2, 0, -1.405]}
        scale={0.187}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials.Material}
        position={[0.457, 2.595, 0]}
        scale={[0.582, 1, 1.832]}
      />
      <group
        position={[2.387, 0, -0.364]}
        rotation={[Math.PI / 2, 0, 2.27]}
        scale={0.82}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_Cube001_1.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_Cube001_2.geometry}
          material={materials["Material.013"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.heart.geometry}
        material={materials.Wool}
        position={[-0.598, 4.677, 1.417]}
        rotation={[1.529, 0.057, 1.178]}
        scale={0.402}
      />
    </group>

  )
}

// function Mesh({node}){

//     const { castShadow , receiveShadow, geometry, material } = node
//     return(

//             <mesh
//             castShadow={castShadow}
//             receiveShadow={receiveShadow}
//             geometry={geometry}
//             material={material}  
//           />


//     )

// }

useGLTF.preload("/desk/desk.glb")
