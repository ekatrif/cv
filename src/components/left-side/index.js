import * as flsFunctions from "../../js/files/functions.js";
import { translation } from "../../js/files/translation.js";

export const renderLeftSide = () => {
  const language = localStorage.getItem('language');
  const main = document.querySelector('.page');
  const html = `
  <div class="column-left">
  <section class="column-left__header header">
    <div class="header__photo"><img src="@img/photo.jpg" alt="" /></div>
    <div class="header__about about">
      <div class="about__title">${translation.name[language]} <span>${translation.surname[language]}</span></div>
      <div class="about__subtitle">${translation.position[language]}</div>
      <div class="about__contacts contacts">
        <ul class="contacts__list">
          <li class="contacts__item _icon-phone">
            <a href="tel:89263420922">+7 (926) 342-09-22</a>
          </li>
          <li class="contacts__item _icon-telegram">
            <a href="https://t.me/trifonova_ekaterina">trifonova_ekaterina</a>
          </li>
          <li class="contacts__item _icon-email">
            <a href="mailto:3420922@gmail.com">3420922@gmail.com</a>
          </li>
          <li class="contacts__item _icon-location">${translation.city[language]}</li>
        </ul>
      </div>
    </div>
  </section>
  <section class="column-left__main">
    <div class="column-left__timeline"></div>
    <div class="column-left__content">
      <article class="experience">
        <div class="experience__content content-block">
          <div class="content-block__title title-article">
            <img src="@img/experience.svg" alt="" />
            <h2>${translation.experience[language]}</h2>
          </div>
          <div class="content-block__block block">
            <div data-spollers class="spollers">
              <div class="spollers__item">
                <button
                  type="button"
                  data-spoller
                  class="spollers__title spoller-active _spoller-active"
                >
                  <div class="block__title">${translation.position[language]}, ${translation.freelance[language]}</div>
                  <div class="block__year">2023</div>
                  <div class="block__subtitle">
                  ${translation.course[language]} "Rolling Scopes School. JAVASCRIPT/FRONT-END 2023Q1".
                  </div>
                </button>

                <div class="spollers__body">
                  <div class="block__text">
                    <ul class="content-list">
                      <li class="content-list__item _icon-arrow-list-dark">
                      ${translation.expRS21[language]}
                      </li>
                      <li class="content-list__item _icon-arrow-list-dark">
                      ${translation.expRS22[language]}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="content-block__block block">
            <div data-spollers class="spollers">
              <div class="spollers__item">
                <button
                  type="button"
                  data-spoller
                  class="spollers__title"
                >
                  <div class="block__title">${translation.position[language]}, ${translation.freelance[language]}</div>
                  <div class="block__year">2022</div>
                  <div class="block__subtitle">
                  ${translation.course[language]} "Rolling Scopes School. JS/FE PRE-SCHOOL 2022Q4".
                  </div>
                </button>
                <div class="spollers__body">
                  <div class="block__text">
                    <ul class="content-list">
                      <li class="content-list__item _icon-arrow-list-dark">
                      ${translation.expRS11[language]}
                      </li>
                      <li class="content-list__item _icon-arrow-list-dark">
                      ${translation.expRS12[language]}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="content-block__block block">
            <div data-spollers class="spollers">
              <div class="spollers__item">
                <button
                  type="button"
                  data-spoller
                  class="spollers__title"
                >
                  <div class="block__title">${translation.position[language]}, ${translation.freelance[language]}</div>
                  <div class="block__year">2021</div>
                  <div class="block__subtitle">
                  ${translation.course[language]} ${translation.profCourse[language]}
                  </div>
                </button>

                <div class="spollers__body">
                  <div class="block__text">
                    <ul class="content-list">
                      <li class="content-list__item _icon-arrow-list-dark">
                      ${translation.expProf1[language]}
                      </li>
                      <li class="content-list__item _icon-arrow-list-dark">
                      ${translation.expProf2[language]}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </article>
      <article class="portfolio">
        <div class="portfolio__content content-block">
          <div class="content-block__title title-article">
            <img src="@img/portfolio.svg" alt="" />
            <h2>${translation.portfolio[language]}</h2>
          </div>
          <div class="body-portfolio__tags">
            <ul id="portfolio-tags">
              <li class="tag-active" data-tag="ecommerce">
              ${translation.ecommerce[language]}
              </li>
              <li class="tag-noactive" data-tag="spa">
              ${translation.spa[language]}
              </li>
              <li class="tag-noactive" data-tag="game">
              ${translation.game[language]}
              </li>
              <li class="tag-noactive" data-tag="landing">
              ${translation.landing[language]}
              </li>
              <li class="tag-noactive" data-tag="all">
              ${translation.all[language]}
              </li>
            </ul>
          </div>
          <div
            class="portfolio__body body-portfolio"
            id="portfolio-container"
          ></div>
        </div>
      </article>
      <article class="education">
        <div class="education__content">
          <div class="content-block__title title-article">
            <img src="@img/education.svg" alt="" />
            <h2>${translation.education[language]}</h2>
          </div>
          <div class="content-block__block block">
            <div data-spollers class="spollers">
              <button
              type="button"
              data-spoller
              class="spollers__title spoller-active _spoller-active"
              >
                <div class="block__title">Rolling Scopes School</div>
                <div class="block__year">2023</div>
                <div class="block__subtitle">${translation.certificate[language]}</div>
                <div class="block__text">Javascript / Typescript / React JS</div>
              </button>
              <div class="spollers__body">
                <div class="block__text">
                  <!-- <ul class="content-list">
                    <li class="content-list__item _icon-arrow-list-dark">
                      Изучила базовые алгоритмы и структуры данных.
                    </li>  
                    <li class="content-list__item _icon-arrow-list-dark">
                      Освоила основы ООП.
                    </li>
                    <li class="content-list__item _icon-arrow-list-dark">
                      Изучила основы NodeJS. Научилась работать с файловой системой.
                    </li>
                    <li class="content-list__item _icon-arrow-list-dark">
                      Начала применять в проектах Typescript вместо Javascript.
                    </li>                       
                    <li class="content-list__item _icon-arrow-list-dark">
                      Начала писать тесты на JEST.
                    </li>
                    <li class="content-list__item _icon-arrow-list-dark">
                      Научилась работе с данными через RESTful API.
                    </li>
                    <li class="content-list__item _icon-arrow-list-dark">
                      Самостоятельно настроила сборщик Webpack.
                    </li>
                    <li class="content-list__item _icon-arrow-list-dark">
                      Изучила основы командной работы с помощью Kanban, Scrum, Agile.
                    </li>
                    <li class="content-list__item _icon-arrow-list-dark">
                      Успешно выполнила финальный командный проект - интернет-магазин на React / Redux / Typescript с использованием бэкэнд-платформы Commercetools.
                    </li>
                    <li class="content-list__item _icon-arrow-list-dark">
                      Получила высший балл по результатам 3 технических скринингов в формате интервью и лайв-кодинга.
                    </li>
                  </ul> -->
                </div>
                <div class="block__images">
                  <a href="@img/certificates/RS-school-stage2.jpg" target="_blank" data-pswp-width="800" 
                  data-pswp-height="566" >
                    <img src="@img/certificates/RS-school-stage2.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>                    
          </div>
          <div class="content-block__block block">
            <div data-spollers class="spollers">
              <button
              type="button"
              data-spoller
              class="spollers__title"
              >
                <div class="block__title">Rolling Scopes School</div>
                <div class="block__year">2022</div>
                <div class="block__subtitle">${translation.certificate[language]}</div>
                <div class="block__text">Javascript / Front-end</div>
              </button>
              <div class="spollers__body">
                <div class="block__text">
                  <!-- <ul class="content-list">
                    <li class="content-list__item _icon-arrow-list-dark">
                      Изучила основы HTML, CSS, Javascript, Git, Webpack.
                    </li>
                    <li class="content-list__item _icon-arrow-list-dark">
                      Решила более 50 задач Codewars (Javascript).
                    </li>
                    <li class="content-list__item _icon-arrow-list-dark">
                      Научилась верстать адаптивно и кроссбраузерно по макетам Figma.
                    </li>
                    <li class="content-list__item _icon-arrow-list-dark">Выполнила более 10 учебных проектов.
                    </li>
                  </ul> -->
                </div>
                <div class="block__images">
                  <a href="@img/certificates/RS-school-stage0.jpg" target="_blank" data-pswp-width="800" 
                  data-pswp-height="566" >
                    <img src="@img/certificates/RS-school-stage0.jpg" alt="" />
                  </a>
                </div>
              </div>  
            </div>
          </div>
          <div class="content-block__block block">
            <div data-spollers class="spollers">
              <button
              type="button"
              data-spoller
              class="spollers__title"
              >
                <div class="block__title">${translation.professional[language]}</div>
                <div class="block__year">2021</div>
                <div class="block__subtitle">${translation.diploma[language]}</div>
                <div class="block__text">${translation.development[language]}</div>
              </button>
              <div class="spollers__body">
                <div class="block__text">
                  <!-- <ul class="content-list">
                    <li class="content-list__item _icon-arrow-list-dark">
                      Изучила основы HTML, CSS, Javascript.
                    </li>
                    <li class="content-list__item _icon-arrow-list-dark">
                      Сверстала несколько адаптивных страниц (десктоп, планшет, мобильную версии).
                    </li>
                    <li class="content-list__item _icon-arrow-list-dark">
                      Использовала в проектах библиотеки jQuery, Bootstrap, Axios.
                    </li>
                    <li class="content-list__item _icon-arrow-list-dark">
                      Научилась работать с Git, завела аккаунт на Github.
                    </li>
                    <li class="content-list__item _icon-arrow-list-dark">
                      Реализовала около 20 учебных проектов и защитила выпускную дипломную работу с отметкой "отлично".
                    </li>
                  </ul> -->
                </div>
                <div class="block__images">
                  <a href="@img/certificates/professional1.jpg" target="_blank" data-pswp-width="800" 
                  data-pswp-height="564" >
                    <img src="@img/certificates/professional1.jpg" alt="" />
                  </a>
                  <a href="@img/certificates/professional2.jpg" target="_blank" data-pswp-width="800" 
                  data-pswp-height="564" >
                    <img src="@img/certificates/professional2.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>  
          </div>
          <div class="content-block__block block">
            <div class="block__title">${translation.bmstu[language]}</div>
            <div class="block__year">2007</div>
            <div class="block__subtitle">${translation.diploma[language]}</div>
            <div class="block__text">

            </div>
            <div class="block__text"></div>
          </div>
        </div>
      </article>
    </div>
  </section>
</div>
  `;
  main.insertAdjacentHTML('afterbegin', html);  
  flsFunctions.spollers();
}