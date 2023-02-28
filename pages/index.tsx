import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Skatespots</title>
        <meta name="description" content="My little skatespot database app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <p>
            A Board With A Bag Skate Spots
          </p>
        </div>
        <div className={styles.center}>
          <a
            href="https://aboardwithabag.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/abwab.png"
              alt="A Board With A Bag"
              className={styles.abwabLogo}
              width={100}
              height={100}
              priority
            />
          </a>
        </div>
      </main>
    </>
  )
}
