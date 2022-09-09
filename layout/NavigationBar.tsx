import React from 'react'
import styles from "@/styles/Navigation.module.css"
import Link from 'next/link'


function NavigationBar() {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
        <h1><Link href="/home">Section 5</Link></h1>
        </div>
        <nav>
            <ul>
                <li><Link href="/Q5">Question 5</Link></li>
                <li><Link href="/Q6">Question 6</Link></li>
                <li><Link href="/Q7">Question 7</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default NavigationBar
