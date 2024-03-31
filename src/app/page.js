"use client"


import { useState } from 'react'
import Week1 from './component/Week1'
import Week2 from './component/Week2'
import styles from './page.module.css'

export default function Home () {
 <head>
    <style>
      @import
      url('https://fonts.googleapis.com/css2?family=Short+Stack&display=swap')
    </style>
  </head>
  const [nextStep ,setNextstep]=useState(false)

  return (
    <>
   {nextStep? <Week2 nextStep={nextStep} setNextstep={setNextstep} />
   : <Week1 nextStep={nextStep} setNextstep={setNextstep}/>}
    </>
  )
}
