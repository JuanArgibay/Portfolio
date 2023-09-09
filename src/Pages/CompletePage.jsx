import { useContext } from "react";
import { Header } from "../components/Header/Header";
import { DarkContext } from "../context/darkMode";
import { About } from "./About";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export const CompletePage = () => {
  const { darkMode } = useContext(DarkContext);

  return (
    <div
      id="test"
      className={darkMode}
    >
      <div
        id="app-container"
        className={darkMode}
      >
        <Header />
        <main>
          <div className="decorationBar-container">
            <div
              className={darkMode}
              id="decorationBar"
            />
          </div>
          <About />
          <Skills />
          <Projects />
        </main>
      </div>
    </div>
  );
};
