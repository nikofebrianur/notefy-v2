import React, { useEffect, useMemo, useState } from "react";
import Routes from "./routes";
import Header from "./components/layout/Header";
import Loading from "./components/layout/Loading";
import LocaleContext from "./contexts/LocaleContext";
import AuthContext from "./contexts/AuthContext";
import ThemeContext from "./contexts/ThemeContext";
import { getUserLogged } from "./utils/network-data";
import useTheme from "./hooks/useTheme";

function App() {
  const [auth, setAuth] = useState(null);
  const [locale, setLocale] = useState("id");
  const [theme, changeTheme] = useTheme();
  const [loading, setLoading] = useState(true);

  const toggleLocale = () => {
    localStorage.setItem("locale", locale === "id" ? "en" : "id");
    setLocale((prevLocale) => (prevLocale === "id" ? "en" : "id"));
  };

  const localeContextValue = useMemo(
    () => ({
      locale,
      toggleLocale,
    }),
    [locale]
  );

  const authContextValue = useMemo(
    () => ({
      auth,
      setAuth,
    }),
    [auth]
  );

  const themeContextValue = useMemo(
    () => ({
      theme,
      changeTheme,
    }),
    [auth]
  );

  useEffect(() => {
    getUserLogged()
      .then((res) => {
        if (!res.error) {
          setAuth(res.data);
        } else {
          setAuth(null);
        }
        setLoading(false);
      })
      .catch(() => {
        alert("Authorization Error");
      });

    if (localStorage.locale && ["id", "en"].includes(localStorage.locale)) {
      setLocale(localStorage.locale);
    }

    if (localStorage.theme) {
      changeTheme(localStorage.theme);
    } else {
      localStorage.setItem("theme", "dark");
      changeTheme("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <AuthContext.Provider value={authContextValue}>
          <div className="app-container">
            <Header />
            <main>{loading ? <Loading /> : <Routes />}</main>
          </div>
        </AuthContext.Provider>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
