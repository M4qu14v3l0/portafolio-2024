'use client'



import { Canvas } from "@react-three/fiber"
import { Model } from "./Model"

import styles from '@/styles/decorator.module.css'
import { Environment } from "@react-three/drei"
import { useEffect } from "react"
import { useMotionValue, useSpring } from "framer-motion"


export const Decorator = ( {color}) => {

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const smoothMouse = {
        x: useSpring(mouse.x, {stiffness: 75, damping: 100, mass:3}),
        y: useSpring(mouse.y, {stiffness: 75, damping: 100, mass:3})
    }

    const manageMouseMove = (e) => {
        const { clientX , clientY } = e
        const { innerWidth, innerHeight } = window
        const x = clientX / innerWidth
        const y = clientY / innerHeight
        mouse.x.set(x)
        mouse.y.set(y)
    }


    useEffect( () => {
        window.addEventListener("mousemove", manageMouseMove)

        return () => {window.removeEventListener("mousemove", manageMouseMove)}
    }, [])

  
    return (
    
    <div className={styles.canvas}>
        <Canvas orthographic camera={{position: [0,0,200], zoom: 160}}>

            <Model mouse={smoothMouse} color={color}/>
            <Environment preset="studio"/>
        </Canvas>
    </div>
  )
}
