import { runProgressBar } from '../../js/files/progress-bar.js';
import { runQualities } from '../../js/files/qualities.js';
import { runPortfolio } from '../../js/files/portfolio.js';
import { translation } from "../../js/files/translation.js";

export const renderRightSide = () => {
  const language = localStorage.getItem('language');
  const main = document.querySelector('.page');
  const html = `
  <aside class="column-right">
  <div class="column-right__about _icon-quote">
    "${translation.aboutMe[language]}"
  </div>
  <div class="column-right__skills skills">
    <div class="skills__title">${translation.stack[language]}</div>
    <div class="skills__body">
      <div class="column-right__skill skill">
        <div class="skill__title">HTML</div>
        <div class="skill__container">
          <div class="skill__bar" style="width: 100%"></div>
        </div>
      </div>
  
      <div class="column-right__skill skill">
        <div class="skill__title">CSS / SCSS / BEM / Bootstrap / MaterialUI</div>
        <div class="skill__container">
          <div class="skill__bar" style="width: 100%"></div>
        </div>
      </div>
  
      <div class="column-right__skill skill">
        <div class="skill__title">Javascript</div>
        <div class="skill__container">
          <div class="skill__bar" style="width: 100%"></div>
        </div>
      </div>
      <div class="column-right__skill skill">
        <div class="skill__title">Typescript</div>
        <div class="skill__container">
          <div class="skill__bar" style="width: 100%"></div>
        </div>
      </div>
  
      <div class="column-right__skill skill">
        <div class="skill__title">Git / Github</div>
        <div class="skill__container">
          <div class="skill__bar" style="width: 100%"></div>
        </div>
      </div>
      <div class="column-right__skill skill">
        <div class="skill__title">React JS / Redux</div>
        <div class="skill__container">
          <div class="skill__bar" style="width: 100%"></div>
        </div>
      </div>
  
      <div class="column-right__skill skill">
        <div class="skill__title">Vue.js / Vuex</div>
        <div class="skill__container">
          <div class="skill__bar" style="width: 100%"></div>
        </div>
      </div>
  
      <div class="column-right__skill skill">
        <div class="skill__title">NPM / YARN</div>
        <div class="skill__container">
          <div class="skill__bar" style="width: 100%"></div>
        </div>
      </div>
  
      <div class="column-right__skill skill">
        <div class="skill__title">Webpack / Gulp / Vite</div>
        <div class="skill__container">
          <div class="skill__bar" style="width: 100%"></div>
        </div>
      </div>
  
      <div class="column-right__skill skill">
        <div class="skill__title">Jest</div>
        <div class="skill__container">
          <div class="skill__bar" style="width: 100%"></div>
        </div>
      </div>
  
      <div class="column-right__skill skill">
        <div class="skill__title">Prettier / ESLint</div>
        <div class="skill__container">
          <div class="skill__bar" style="width: 100%"></div>
        </div>
      </div>
  
      <div class="column-right__skill skill">
        <div class="skill__title">FIGMA</div>
        <div class="skill__container">
          <div class="skill__bar" style="width: 100%"></div>
        </div>
      </div>
  
      <div class="column-right__skill skill">
        <div class="skill__title">Agile / Scrum / Trello</div>
        <div class="skill__container">
          <div class="skill__bar" style="width: 100%"></div>
        </div>
      </div>
  
    </div>
  </div>
  <div class="column-right__qualities qualities">
    <div class="qualities__title">${translation.certifications[language]}</div>
    <ul class="personal__list">
      <li class="personal__item _icon-arrow-list-light">
      <a href="http://app.rs.school/certificate/8gnkockf" target="_blank">
        Javascript / Front-end 2023Q1 (Javascript)
      </a>
      </li>
      <li class="personal__item _icon-arrow-list-light">
      <a href="https://www.efset.org/cert/q5Nzny" target="_blank">
        EF SET English Certificate (71 / 100)
      </a>
      </li>
    </ul>
  </div>
  <div class="column-right__qualities qualities">
    <div class="qualities__title">${translation.softSkills[language]}</div>
    <div class="qualities__body">
      <div class="quality">
        <div class="quality__title">${translation.team[language]}</div>
        <ul class="quality__bar" progress="5"></ul>
      </div>
      <div class="quality">
        <div class="quality__title">${translation.trainability[language]}</div>
        <ul class="quality__bar" progress="5"></ul>
      </div>
      <div class="quality">
        <div class="quality__title">${translation.responsibility[language]}</div>
        <ul class="quality__bar" progress="5"></ul>
      </div>
      <div class="quality">
        <div class="quality__title">${translation.discipline[language]}</div>
        <ul class="quality__bar" progress="5"></ul>
      </div>
      <div class="quality">
        <div class="quality__title">${translation.determination[language]}</div>
        <ul class="quality__bar" progress="5"></ul>
      </div>
      <div class="quality">
        <div class="quality__title">${translation.independence[language]}</div>
        <ul class="quality__bar" progress="5"></ul>
      </div>
    </div>
  </div>
  <div class="column-right__personal personal">
    <div class="personal__title">${translation.languages[language]}</div>
    <ul class="personal__list">
      <li class="personal__item _icon-arrow-list-light">
      ${translation.english[language]}
      </li>
      <li class="personal__item _icon-arrow-list-light">
      ${translation.french[language]}
      </li>
      <li class="personal__item _icon-arrow-list-light">
      ${translation.russian[language]}
      </li>
    </ul>
  </div>
  <div class="column-right__personal personal">
    <div class="personal__title">${translation.links[language]}</div>
    <ul class="personal__list">
      <li class="personal__item _icon-arrow-list-light">
        <a target="_blank" href="https://github.com/ekatrif"
          >Github</a
        >
      </li>
      <li class="personal__item _icon-arrow-list-light">
      <a target="_blank" href="http://www.linkedin.com/in/ekatrif"
        >LinkedIn</a
      >
      </li>
      <li class="personal__item _icon-arrow-list-light">
        <a target="_blank" href="https://www.codewars.com/users/rsschool_8ce2c48f923ed0a1"
          >Codewars</a
        >
      </li>
    </ul>
  </div>
</aside>
  `;
  main.insertAdjacentHTML('beforeend', html);
  runProgressBar();
  runQualities();
  runPortfolio();
}