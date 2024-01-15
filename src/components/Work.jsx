'use client'

import { useState } from "react"

import { Modal } from "./projects/Modal"
import { Project } from "./projects/Project"

import styles from '@/styles/work.module.css'

const projects = [
    {id:1,title: 'mentorito', src: '/projects/mentorito.png', color: '#000000'},
    {id:2,title: 'mall aventura', src: '/projects/mall_aventura.png', color: '#EDC344'},
    {id:3,title: 'proyecto verdeo', src: '/projects/proyecto_verdeo.png', color: '#00BF63'},
    {id:4,title: 'TWF', src: '/projects/twf.png', color: '#26232C'},
    {id:5,title: 'roberts dercocenter', src: '/projects/roberts_derco.png', color: '#F5F5F5'},
    {id:6,title: 'ISA', src: '/projects/isa.png', color: '#5E17EB'},
]


export const Work = () => {

    const [modal, setModal] = useState({active:false,index:0})


  return (
    <section className={styles.section_container}>

        <div className={styles.h2_container}>
            <h2>My <span>Work</span></h2>
        </div>

        <article className={styles.projects_container}>
            {
                projects.map( (project, index) => {
                    return <Project index={index} title={project.title} setModal={setModal} id={project.id} key={index}/>
                })
            }
        </article>
        <Modal modal={modal} projects={projects}/>    
    </section>
  )
}
