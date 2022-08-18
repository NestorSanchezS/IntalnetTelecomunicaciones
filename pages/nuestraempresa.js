import Link from "next/link";
import { AppPage } from "../components/AppPage";
import styles from "../styles/Home.module.css";

export default function NuestraEmpresa() {
  return (
    <AppPage title="Nuestra Empresa | Intalnet">
      <div className="mt-200">
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
    </AppPage>
  );
}
