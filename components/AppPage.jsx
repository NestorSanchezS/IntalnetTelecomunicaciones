import Head from "next/head";
import Link from "next/link";
import { NavBar } from "./NavBar";
import styles from "../styles/Home.module.css";

export const AppPage = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      {children}
    </>
  );
};

AppPage.defaultProps = {
  title: "Intalnet Telecomunicaciones",
  Descripcion: "INTALNET TELECOMUNICACIONES S.A.S",
};
