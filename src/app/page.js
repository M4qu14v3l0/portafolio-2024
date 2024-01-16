'use client'

import { useEffect } from 'react'

import styles from './page.module.css'

import  {About}  from '@/components/bento_grid/About'
import { TextHero } from '@/components/TextHero'
import { Work } from '@/components/Work'

export default function Home() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <main className={styles.main_container}>
      <TextHero />
      {/* 
      <About />
      <Work /> */}
    </main>
  )
}
