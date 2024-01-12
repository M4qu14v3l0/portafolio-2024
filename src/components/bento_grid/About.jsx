'use client'

import styles from '@/styles/about.module.css'
import { useRef } from 'react'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

import { RiLinkedinFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link'

export const About = () => {

  const first_container = useRef(null)
  const second_container = useRef(null)

  gsap.registerPlugin(ScrollTrigger)
  
  useGSAP(() => {
    
    gsap.from(first_container.current, {
      scrollTrigger: {
        trigger: first_container.current,
        scrub: true,
        start: '0px bottom',
        end: 'bottom+=400px bottom',
      },
      opacity: 0,
      left: '-200px',
      ease: 'power3.out'
    }) 

    gsap.from(second_container.current, {
      scrollTrigger: {
        trigger: second_container.current,
        scrub: true,
        start: '0px bottom',
        end: 'bottom+=600px bottom'
      },
      opacity: 0,
      right: '-200px',
      ease: 'power3.out'
    }) 


  }, [])

  return (

    <section className={styles.who_is}>

      <div className={styles.first_row} ref={first_container}>
        <article >
          <span className={styles.background_image}>
            <Image 
              src={'/bento_grid/me_arequipa.png'}                     
              fill={true}
              alt="background image"
              style={{objectFit: 'cover' , borderRadius: '30px'}}
              priority={true}
            />
          </span>
            <p>
                marcelo Llerena <br/>
                is a software developer currently <span className={styles.highligth_text}>looking for best companies to collaborate with</span>
            </p>
        </article>
        <article>
          <span className={styles.icon_container}>
            <Link href={'https://www.linkedin.com/in/marcelo-llerena-desarrollador-front-end/'} target='_blank'>
              <RiLinkedinFill className={styles.icon} />
            </Link>
          </span>
          <span className={styles.icon_container}>
            <Link href={'mailto:marcelo.gabriel.llerena@gmail.com'} target='_blank'>
              <BiLogoGmail className={styles.icon} />
            </Link>
          </span>
          <span className={styles.icon_container}>
            <Link href={'https://www.instagram.com/_marcelo_llerena/'} target='_blank'>
              <BsInstagram className={styles.icon} />
            </Link>
          </span>
          <span className={styles.icon_container}>
            <Link href={'https://github.com/M4qu14v3l0'} target='_blank'>
              <FaGithub className={styles.icon} />
            </Link>
          </span>
        </article>
      </div>

      <div className={styles.second_row} ref={second_container}>
        <article >
          <span className={styles.background_image}>
            <Image 
              src={'/bento_grid/arequipa.png'}                     
              fill={true}
              alt="background image"
              style={{objectFit: 'cover' , borderRadius: '30px'}}
              priority={true}
            />
          </span>
            <p>
                Based In<br/>
                Peru,<br/>
                Arequipa<br/>
                <span className={styles.highligth_text}>GMT-5</span>
            </p>
        </article>
        <article>
        <span className={styles.background_image}>
            <Image 
              src={'/bento_grid/premio.png'}                     
              fill={true}
              alt="background image"
              style={{objectFit: 'cover' , borderRadius: '30px'}}
              priority={true}
            />
          </span>
          <p>
            Marcelo, a skilled front-end developer, transforms ideas into captivating and <span className={styles.highligth_text}>innovative interfaces with excellence and cutting-edge design.</span>
          </p>
        </article>

      </div>
    </section>
  )
}
