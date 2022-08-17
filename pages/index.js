import Link from "next/link";
import { AppPage } from "../components/AppPage";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <AppPage>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Ir a <Link href="/nuestraempresa">Nuestra Empresa</Link>
          </h1>

          <p className={styles.description}>
            Get started by editing{" "}
            <code className={styles.code}>pages/index.js</code>
          </p>
        </main>
      </div>
    </AppPage>
  );
}
