import styles from '@/styles/title.module.css'


export const Title = ({first , second , id}) => {
  return (
    <section className={styles.title_container} id={id}>
        <h2 className={styles.title}>{first} <span> {second} </span></h2>
    </section>


  )
}
