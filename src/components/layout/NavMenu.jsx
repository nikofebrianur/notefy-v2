import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import useLang from "../../hooks/useLang";
import LangToggle from "./LangToggle";
import LogoutButton from "./LogoutButton";
import ThemeToggle from "./ThemeToggle";

export default function NavMenu() {
  const { auth } = useContext(AuthContext);
  const { pathname } = useLocation();
  const text = useLang("app");

  return (
    <>
      {auth ? (
        <nav className="navigation">
          <ul>
            <li>
              {pathname !== "/archives" ? (
                <Link to="/archives" title={text.nav.archives}>
                  {text.nav.archives}
                </Link>
              ) : (
                <Link to="/" title={text.nav.archives}>
                  {text.nav.home}
                </Link>
              )}
            </li>
          </ul>
        </nav>
      ) : (
        ""
      )}
	  <LangToggle/>
	  <ThemeToggle/>
	  <LogoutButton/>
    </>
  );
}
