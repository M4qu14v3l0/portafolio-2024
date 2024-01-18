'use client'

import { Canvas } from "@react-three/fiber"
import { Model } from "./Model"

import styles from '@/styles/desk.module.css'
import { Environment, OrbitControls, Stage, Stats } from "@react-three/drei"


export const Desk = () => {

  
    return (
    
    <div className={styles.canvas}>

        <Canvas 
            shadows dpr={[1, 2]} camera={{ fov: 40 }}             
            onCreated={({ gl }) => {
                gl.domElement.style.touchAction = "none";
              }}
            resize={{scroll:false}}
              >
            <Stage  preset="rembrandt" intensity={1}  environment="city">
            <Model />
            <OrbitControls autoRotate={true} enableZoom={true} />
            </Stage>
            
        </Canvas>


    </div>
  )
}