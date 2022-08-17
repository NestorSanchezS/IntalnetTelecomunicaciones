import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function NuestraEmpresa() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Intalnet Telecomunicaciones</title>
        <meta name="description" content="Nuestra Empresa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/">Inicio</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/nuestraempresa.js</code>
        </p>
      </main>
    </div>
  );
}
