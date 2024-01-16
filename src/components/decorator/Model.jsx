import { Float, useGLTF } from "@react-three/drei"
import { useTransform} from "framer-motion"
import {motion} from 'framer-motion-3d'

export const Model = ( {mouse, color}) => {

    const {nodes , materials} = useGLTF('/decorator/decorator.glb')


  return (
    <group>
        <Mesh node = {nodes.Circle} material={materials} mouse={mouse} color={color} multiplier={2}/>

    </group>
  )
}

function Mesh({node , mouse , color , multiplier}){

    const { castShadow , receiveShadow, geometry, material, rotation , position} = node
    const rotationX = useTransform(mouse.x, [0,1], [rotation.x -multiplier , rotation.x +multiplier])
    const rotationY = useTransform(mouse.y, [0,1], [rotation.y -multiplier , rotation.y +multiplier])

    const positionX = useTransform(mouse.x, [0,1], [position.x -multiplier , position.x +multiplier])
    const positionY = useTransform(mouse.y, [0,1], [position.y -multiplier , position.y +multiplier])

    return(

        <Float>
            <motion.mesh
            material-color={color}
            castShadow={castShadow}
            receiveShadow={receiveShadow}
            geometry={geometry}
            material={material}  
            rotation-x={rotationY}
            rotation-y={rotationX}
            position-x={positionX}
            position-y={positionY}
          />
        </Float>

    )

}

useGLTF.preload("/decorator/decorator.glb")
