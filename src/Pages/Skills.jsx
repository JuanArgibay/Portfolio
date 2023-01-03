import { ImageSkills } from '../components/ImageSkills/ImageSkills';
import { HtmlLogo } from '../components/Logos/HtmlLogo/HtmlLogo'
import { CssLogo } from '../components/Logos/CssLogo/CssLogo'
import { JavascriptLogo } from '../components/Logos/JavascriptLogo/JavascriptLogo'
import  { ReactLogo } from '../components/Logos/ReactLogo/ReactLogo';
import  { NodeLogo } from '../components/Logos/NodeLogo/NodeLogo';
import  { MySqlLogo } from '../components/Logos/MySqlLogo/MySqlLogo';
import { GitLogo } from '../components/Logos/GitLogo/GitLogo';
import { PostmanLogo } from '../components/Logos/PostmanLogo/PostmanLogo';
import { useContext } from 'react';
import { DarkContext } from '../context/darkMode';

export const Skills = () => {

  const {darkMode} = useContext(DarkContext);

  return (
    <section id="skills" className={darkMode}>
          <div className='skillsPageContainer'>
          <h2 className='titlePage'>Habilidades</h2>
          <p>Estas son las herramientas que utilizo para facilitar mi trabajo.</p>
          <div className='skillsContainer'>
            <div className='imageSkillsContainer'>
              <ImageSkills/>
            </div>
            <ul>
              <li>
                <article className='skillCard'>
                  <HtmlLogo/>
                  <p>HTML</p>
                </article>
              </li>
              <li>
                <article className='skillCard'>
                  <CssLogo/>
                  <p>CSS</p>
                </article>
              </li>
              <li>
                <article className='skillCard javascript'>
                <JavascriptLogo/>
                <p>JAVASCRIPT</p>
                </article>
              </li>
              <li>
                <article className='skillCard'>
                <ReactLogo/>
                <p>REACT</p>
                </article>
              </li>
              <li>
                <article className='skillCard'>
                <NodeLogo/>
                <p>NODE</p>
                </article>
              </li>
              <li>
                <article className='skillCard'>
                <MySqlLogo/>
                <p>MYSQL</p>
                </article>
              </li>
              <li>
                <article className='skillCard'>
                <GitLogo/>
                <p>GIT</p>
                </article>
              </li>
              <li>
                <article className='skillCard'>
                <PostmanLogo/>
                <p>POSTMAN</p>
                </article>
              </li>
            </ul>
          </div>
          </div>
        </section>
  )
}
