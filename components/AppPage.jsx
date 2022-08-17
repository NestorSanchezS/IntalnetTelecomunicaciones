import Head from "next/head";
import Link from "next/link";
import { NavBar } from "./NavBar";
import styles from "../styles/Home.module.css";

export const AppPage = ({ children }) => {
  return (
    <>
      <Head>
        <title>Intalnet Telecomunicaciones</title>
        <meta name="description" content="Nuestra Empresa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      {children}
    </>
  );
};
