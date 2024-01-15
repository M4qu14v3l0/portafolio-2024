import styles from '@/styles/specific_work.module.css'
import Image from "next/image"

const projects = [
    {id:1, title: 'mentorito', src: '/projects/mentorito.png', color: '#000000', description: 'It is a course recommendation system powered by artificial intelligence and machine learning. The user experience is personalized and promises to attract many students to TECSUP.'},
    {id:2, title: 'mall aventura', src: '/projects/mall_aventura.png', color: '#EDC344', description: 'Registration system with a high capacity for user traffic and storage in the database. Similar applications were developed for: Mall Aventura Iquitos, Mall Aventura Santa Anita, Mall Aventura Arequipa'},
    {id:3 , title: 'proyecto verdeo', src: '/projects/proyecto_verdeo.png', color: '#00BF63', description: 'I collaborated with Proyecto Verdeo, an organization with the mission of promoting environmental care. I developed their website to assist in expanding this environmental movement that aims for the common good.'},
    {id:4, title: 'TWF', src: '/projects/twf.png', color: '#26232C', description: 'TWF is a modern landing page created for one of the ANALYTIC areas, with the objective of showcasing the attractiveness and brilliance of one of the largest digital marketing companies in southern Peru in terms of interface development and design.'},
    {id:5 , title: 'roberts dercocenter', src: '/projects/roberts_derco.png', color: '#F5F5F5', description: 'Created a landing page for Roberts Dercocenter, providing access to all their vehicle offerings to clients. Additionally, it enables real-time connection between customers and sales agents at Roberts.'},
    {id:6, title: 'ISA', src: '/projects/isa.png', color: '#5E17EB', description: 'ISA is a modern and fresh landing page for a web development agency, featuring incredible animations and a unique user experience.'},
]

export default function Page( {params} ) {

    const job = projects.find( (project) => project.id == params.id)

  return (
    <div className={styles.container}>

        <div className={styles.image_container}>
            <Image 
                src={job.src}
                alt={job.title}
                fill
                style={{objectFit:'cover', objectPosition:'center'}}
                priority
            />
        </div>

        <div className={styles.details}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
        </div>
    </div>
  )
}
