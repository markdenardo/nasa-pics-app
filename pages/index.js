import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NASA API</title>
     
      </Head>

      <main className={styles.main}>
        Main Content
      </main>

      <footer className={styles.footer}>
       Basic Footer
      </footer>
    </div>
  )
}
