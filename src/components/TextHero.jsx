import styles from '@/styles/text_hero.module.css'
import { Desk } from './desk/Desk'
import { Suspense } from 'react'
import Loading from './Loading'



export const TextHero = () => {
  return (
    <section className={styles.hero}>
        
        <Suspense fallback={<Loading />}>
            <Desk /> 
        </Suspense>
        <article className={styles.text_hero}>
            <span className={styles.text_300}>don&apos;t</span>

            <div className={styles.text_row}>
                <span className={styles.text_240}>be</span>
                <div className={styles.text_column}>
                    <span className={styles.text_80}>
                    one of
                    </span>
                    <span className={styles.text_180}>those who</span>
                </div>
            </div>
            <div className={styles.text_highligth_container}>
                <span className={`${styles.text_240} ${styles.text_highligth}`}>seek</span>
                <span className={styles.coma}>,</span>
                <span className={`${styles.text_240} ${styles.text_highligth}`}>find</span>
            </div>
            <div className={`${styles.text_row} ${styles.text_final}`}>
                <div className={styles.text_column}>
                    <span className={`${styles.text_180} ${styles.text_and}`}>
                    and
                    </span>
                    <span className={`${styles.text_80} ${styles.text_then}`}>then</span>
                </div>
                <span className={`${styles.text_240} ${styles.text_highligth}`}>flee</span>
                <div className={styles.text_column}>
                    <span className={styles.text_80}>
                    in
                    </span>
                    <span className={styles.text_180}>fear</span>
                </div>
            </div>
        </article>
    </section>

  )
}
