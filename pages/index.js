import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Head>
      <title>pagina principal</title>
      <meta name="keywords" content='Roupas, calças, Boné'/>
      <meta name="description" content='encontre a melhor roupa'/>
    </Head>
    <div>
      <h1 className={styles.title}>Hello Word next.js</h1>
      <Image src="/images/city.jpg"
        width="300" 
        height="450" 
        alt="cidade"/>
    </div>
    </>
  )
}

