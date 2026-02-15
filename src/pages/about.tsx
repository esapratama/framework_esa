import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return(
    <div>
      <h1>About Me</h1> <br />
      <p>Esa Pratama Putri</p>
      <p>2341720061</p>
      <p>D4-Teknik Informatika</p>
    </div>
    )
}
