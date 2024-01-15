
import styles from '@/styles/projects.module.css'
import Link from 'next/link'


export const Project = ({index,title,setModal, id}) => {
  return (
    <Link
    href={`/projects/${id}`}
    onMouseEnter={() => {setModal({active:true, index})}} 
    onMouseLeave={() => {setModal({active:false, index})}} className={styles.project}>
        <h2>{title}</h2>
        <p>Design & Development</p>
    </Link>
  )
}
