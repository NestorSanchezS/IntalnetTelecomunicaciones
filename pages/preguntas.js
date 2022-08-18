import Link from "next/link";
import { AppPage } from "../components/AppPage";
import styles from "../styles/Home.module.css";

export default function NuestraEmpresa() {
  return (
    <AppPage title="Preguntas | Intalnet">
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <Link href="/">Preguntas Frecuentes</Link>
          </h1>

          <p className={styles.description}>
            Get started by editing{" "}
            <code className={styles.code}>pages/nuestraempresa.js</code>
          </p>
        </main>
      </div>
    </AppPage>
  );
}
