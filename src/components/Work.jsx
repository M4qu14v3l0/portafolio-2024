'use client'

import { useState } from "react"

import { Modal } from "./projects/Modal"
import { Project } from "./projects/Project"

import styles from '@/styles/work.module.css'
import { Decorator } from "./decorator/Decorator"


const projects = [
    {id:0, title: 'mentorito', src: '/projects/mentorito.png', color: '#11AEED', description: 'It is a course recommendation system powered by artificial intelligence and machine learning. The user experience is personalized and promises to attract many students to TECSUP.'},
    {id:1, title: 'mall aventura', src: '/projects/mall_aventura.png', color: '#EDC344', description: 'Registration system with a high capacity for user traffic and storage in the database. Similar applications were developed for: Mall Aventura Iquitos, Mall Aventura Santa Anita, Mall Aventura Arequipa'},
    {id:2 , title: 'proyecto verdeo', src: '/projects/proyecto_verdeo.png', color: '#00BF63', description: 'I collaborated with Proyecto Verdeo, an organization with the mission of promoting environmental care. I developed their website to assist in expanding this environmental movement that aims for the common good.'},
    {id:3, title: 'TWF', src: '/projects/twf.png', color: '#FF3344', description: 'TWF is a modern landing page created for one of the ANALYTIC areas, with the objective of showcasing the attractiveness and brilliance of one of the largest digital marketing companies in southern Peru in terms of interface development and design.'},
    {id:4 , title: 'roberts dercocenter', src: '/projects/roberts_derco.png', color: '#003366', description: 'Created a landing page for Roberts Dercocenter, providing access to all their vehicle offerings to clients. Additionally, it enables real-time connection between customers and sales agents at Roberts.'},
    {id:5, title: 'ISA', src: '/projects/isa.png', color: '#5E17EB', description: 'ISA is a modern and fresh landing page for a web development agency, featuring incredible animations and a unique user experience.'},
]



export const Work = () => {

    const [modal, setModal] = useState({active:false,index:0})
    const [object , setObject] = useState({index:0})




  return (
    <section className={styles.section_container}>
        <div className={styles.grid}>
            <article className={styles.decorator_container}>
                <Decorator color={projects[object.index].color}/>
                <div className={styles.details}>
                    <h2>{projects[object.index].title}</h2>
                    <p>{projects[object.index].description}</p>
                </div>
            </article>
            <article className={styles.projects_container}>
                {
                    projects.map( (project, index) => {
                        return <Project index={index} title={project.title} setModal={setModal} setObject={setObject} id={project.id} key={index}/>
                    })
                }
            </article>
        </div>

        <Modal modal={modal} projects={projects}/>    
    </section>
  )
}
