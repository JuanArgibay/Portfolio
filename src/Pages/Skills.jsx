import { ImageSkills } from '../components/ImageSkills/ImageSkills';
import { HtmlLogo } from '../components/Logos/HtmlLogo/HtmlLogo'
import { CssLogo } from '../components/Logos/CssLogo/CssLogo'
import { JavascriptLogo } from '../components/Logos/JavascriptLogo/JavascriptLogo'
import { ReactLogo } from '../components/Logos/ReactLogo/ReactLogo';
import { NodeLogo } from '../components/Logos/NodeLogo/NodeLogo';
import { MySqlLogo } from '../components/Logos/MySqlLogo/MySqlLogo';
import { GitLogo } from '../components/Logos/GitLogo/GitLogo';
import { PostmanLogo } from '../components/Logos/PostmanLogo/PostmanLogo';
import { useContext } from 'react';
import { DarkContext } from '../context/darkMode';
import { MySqlLogoDark } from '../components/Logos/MySqlLogo/MySqlLogoDark';

export const Skills = () => {

  const { darkMode, lang } = useContext(DarkContext);

  return (
    <section id="skills" className={darkMode}>
      <div className='skillsPageContainer'>
        <h2 className='titlePage'>{lang === 'Es' ? 'Habilidades' : 'Skills'}</h2>
        <p>{lang === 'Es' ?
          'Estas son las herramientas que utilizo para facilitar mi trabajo.'
          :
          'These are the tools that I use to make easier my work.'}</p>
        <div className='skillsContainer'>
          <div className='imageSkillsContainer'>
            <ImageSkills />
          </div>
          <ul>
            <li>
              <article className='skillCard'>
                <HtmlLogo />
                <p>HTML</p>
              </article>
            </li>
            <li>
              <article className='skillCard'>
                <CssLogo />
                <p>CSS</p>
              </article>
            </li>
            <li>
              <article className='skillCard javascript'>
                <JavascriptLogo />
                <p>JAVASCRIPT</p>
              </article>
            </li>
            <li>
              <article className='skillCard'>
                <ReactLogo />
                <p>REACT</p>
              </article>
            </li>
            <li>
              <article className='skillCard'>
                <NodeLogo />
                <p>NODE</p>
              </article>
            </li>
            <li>
              <article className='skillCard'>
                {darkMode === 'light' ? <MySqlLogo /> : <MySqlLogoDark />}
                <p>MYSQL</p>
              </article>
            </li>
            <li>
              <article className='skillCard'>
                <GitLogo />
                <p>GIT</p>
              </article>
            </li>
            <li>
              <article className='skillCard'>
                <PostmanLogo />
                <p>POSTMAN</p>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
