import Link from "next/link"
import styles from "@/styles/sidebar.module.css"


export const SideBar = () => {
  
    return (

    <navbar className={styles.navbar}>
        <ul>
            <li>
                <Link href={'#home'} >   
                    <span>01</span>
                    M
                </Link>
            </li>

            <li>
                <Link href={'#about'} >
                <span>02</span>
                    About
                </Link>
            </li>

            <li>
                <Link href={'#work'} >
                <span>03</span>
                    Work
                </Link>
            </li>
        </ul>
    </navbar>
  )
}
