

import styles from '@/styles/about.module.css'

import { RiLinkedinFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

import Link from 'next/link'
import Image from 'next/image';

import  MagneticIcon  from '../magnetic_icon/MagneticIcon'

export const About = () =>  {

  return (
    <>
      <section className={styles.general_container}>
      <div className={styles.sub_container}>
        <div className={styles.container}>
          <div className={styles.col}>
            <FirstCol />
          </div>
          <div className={styles.col}>
            <SecondCol />
          </div>
          <div className={styles.col}>
            <ThridCol />
          </div>
        </div>
      </div>
    </section>
    </>

  )
}



const FirstCol = () => {
  return (
    <>
      <article className={styles.about_me_container}>
          <p>
              Marcelo Llerena <br/>
              is a software developer currently <span className={styles.highligth_text}>looking for best companies to collaborate with</span>
          </p>
          <div className={styles.data_container}>
            <div className={styles.icons_container}>
              <span className={styles.icon_container}>
                <MagneticIcon>
                  <Link href={'https://www.linkedin.com/in/marcelo-llerena-desarrollador-front-end/'} target='_blank'>
                      <RiLinkedinFill className={styles.icon} />
                  </Link>
                </MagneticIcon>
              </span>
              <span className={styles.icon_container}>
                  <MagneticIcon>
                    <Link href={'mailto:marcelo.gabriel.llerena@gmail.com'} target='_blank'>
                        <BiLogoGmail className={styles.icon} />
                    </Link>
                  </MagneticIcon>
              </span>
              <span className={styles.icon_container}>
                  <MagneticIcon>
                    <Link href={'https://www.instagram.com/_marcelo_llerena/'} target='_blank'>
                        <BsInstagram className={styles.icon} />
                    </Link>
                  </MagneticIcon>
              </span>
              <span className={styles.icon_container}>
                  <MagneticIcon>
                    <Link href={'https://github.com/M4qu14v3l0'} target='_blank'>
                        <FaGithub className={styles.icon} />
                    </Link>
                  </MagneticIcon>
              </span>
            </div>
            <MagneticIcon>
              <Link className={styles.resume} href={"/resume/MarceloCV.pdf"} target='_blank'><FiDownload className={styles.icon_download}/> <p>Resume</p></Link>
            </MagneticIcon>
          </div>
      </article>

      <article>
        <p className={styles.my_background}>My Background</p>
        <div className={styles.p_container}>
          <p>I grew up in Arequipa, Peru. Thanks to video games, I began to connect significantly with the <span>digital world and technology.</span></p>
          <p>My <span>passion for computing stems</span> from my interaction with my brother, who is a programmer. I was fascinated by the endless possibilities that computers offered.</p>
          <p>I decided to study programming and <span>delve into the digital world</span>. It was in college where I discovered my love for web development. <span>I appreciate the ability to create unique user experiences</span> and provide solutions by automating business or school tasks with an appealing interface and complex logical processes in the background.</p>
          <p>Today, I continue to create these experiences, and I am passionate about the numerous tools available to learn, working towards <span>my goal of becoming a great web developer</span></p>
        </div>
      </article>

      <article>
        <p className={styles.toolkit_title}>My Toolkit</p>
        <div className={styles.toolkit_container}>
          <Image src={'/tech/nodejs.svg'} width={30} height={30} alt='Node'/>
          <Image src={'/tech/next.svg'} width={30} height={30} alt='Next'/>
          <Image src={'/tech/angular.svg'} width={30} height={30} alt='Angular'/>
          <Image src={'/tech/react_native.svg'} width={30} height={30} alt='React'/>
          <Image src={'/tech/typescript.svg'} width={30} height={30} alt='Typescript'/>
          <Image src={'/tech/python.svg'} width={30} height={30} alt='Python'/>
          <Image src={'/tech/django.svg'} width={30} height={30} alt='Django'/>
          <Image src={'/tech/dart.svg'} width={30} height={30} alt='Dart'/>
          <Image src={'/tech/flutterio.svg'} width={30} height={30} alt='Flutter'/>
          <Image src={'/tech/tailwindcss.svg'} width={30} height={30} alt='Tailwind'/>
          <Image src={'/tech/docker.svg'} width={30} height={30} alt='docker'/>
          <Image src={'/tech/git.svg'} width={30} height={30} alt='Git'/>
          <Image src={'/tech/figma.svg'} width={30} height={30} alt='figma'/>
          <Image src={'/tech/gsap.svg'} width={30} height={30} alt='Gsap'/>
          <Image src={'/tech/framer.svg'} width={30} height={30} alt='Framer Motion'/>
          <Image src={'/tech/blender.svg'} width={30} height={30} alt='Blender'/>
        </div>
      </article>
    </>
  )
}

const SecondCol = () => {
  return (
    <>
      <article className={styles.myself_bg}>
        <div className={styles.myself}>
          <Image src={'/bento_grid/me_gray.png'} fill alt='Marcelo Llerena' priority style={{objectFit:'cover', objectPosition:'top'}}/>
        </div>
        <p className={styles.maqui}>M4qu14v3l0</p>
      </article>

      <article className={styles.education_container}>
        <p className={styles.education_title}>
          Education
        </p>

        <div className={styles.education_item}>
          <p>2020 - 2023</p>

          <div>
            <p>Software Technician</p>
            <span>TECSUP</span>
          </div>
        </div>
        <div className={styles.education_item}>
          <p>2020 - 2023</p>

          <div>
            <p>Full Stack Engineer</p>
            <span>CoderHouse</span>
          </div>
        </div>

        <div className={styles.education_item}>
          <p>2020 - 2021</p>

          <div>
            <p>B2 English Speaker</p>
            <span>El Cultural</span>
          </div>
        </div>
      </article>
    </>

  )
}

export const ThridCol = () => {
  return (
    <>
    <article className={styles.experience_container}>
        <p className={styles.experience_title}>
          Experience
        </p>
        <div className={styles.experience_item}>
          <p>2020 - Now</p>

          <div>
            <p>Freelancer Developer</p>
            <span>Workana</span>
          </div>
        </div>
        <div className={styles.experience_item}>
          <p>2023</p>
          <div>
            <p>Full Stack developer</p>
            <span>ANALYTIC</span>
          </div>
        </div>

        <div className={styles.experience_item}>
          <p>2021 - 2023</p>
          <div>
            <p>Full Stack developer</p>
            <span>NO COUNTRY</span>
          </div>
        </div>
      </article>
    </>
  )
}

