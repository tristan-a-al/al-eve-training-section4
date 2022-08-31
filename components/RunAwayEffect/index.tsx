import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from "@/styles/Home.module.css"


//Question 6.1

function RunAwayEffect() {

  const [counter , setCounter] = useState<number>(0)


  useEffect(()=>{
    setCounter(counter+1)
  })

    

  return (
    <div>
      I have re-rendered: {counter} times...










      {counter < 10 && <Link href="/Q6-2"><div className={styles.card}>Continue...</div></Link>}
    </div>
  )
}

export default RunAwayEffect
