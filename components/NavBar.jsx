import Link from "next/link";
import React from "react";

export const NavBar = () => {
  return (
    <div className="header_absolute header_layout_1">
      <header className="page_header ls justify-nav-end">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-4 col-md-5 col-11">
              <Link href="./">
                <a className="logo">
                  <span class="logo-text py-20">
                    <strong>Intal</strong>net
                  </span>
                </a>
              </Link>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 col-1">
              <div className="nav-wrap">
                <nav className="top-nav">
                  <ul className="nav sf-menu">
                    <li className="active">
                      <Link href="/">
                        <a>Inicio</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="nuestraempresa">
                        <a>Nuestra Empresa</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="servicios">
                        <a>Servicios</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="regulacion">
                        <a>Regulacion</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="preguntas">
                        <a>Preguntas Frecuentes</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="internetsano">
                        <a>Internet Sano</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="contactenos">
                        <a>Contactenos</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
