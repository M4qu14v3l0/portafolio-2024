
import styles from '@/styles/projects.module.css'


export const Project = ({index,title,setModal}) => {
  return (
    <div 
    onMouseEnter={() => {setModal({active:true, index})}} 
    onMouseLeave={() => {setModal({active:false, index})}} className={styles.project}>
        <h2>{title}</h2>
        <p>Design & Development</p>
    </div>
  )
}
