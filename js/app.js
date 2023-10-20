(() => {
    "use strict";
    var __webpack_modules__ = {};
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }
    __webpack_require__.m = __webpack_modules__;
    (() => {
        __webpack_require__.d = (exports, definition) => {
            for (var key in definition) if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
            });
        };
    })();
    (() => {
        __webpack_require__.f = {};
        __webpack_require__.e = chunkId => Promise.all(Object.keys(__webpack_require__.f).reduce(((promises, key) => {
            __webpack_require__.f[key](chunkId, promises);
            return promises;
        }), []));
    })();
    (() => {
        __webpack_require__.u = chunkId => chunkId + ".app.js";
    })();
    (() => {
        __webpack_require__.miniCssF = chunkId => {};
    })();
    (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    })();
    (() => {
        var inProgress = {};
        var dataWebpackPrefix = "cv-portfolio:";
        __webpack_require__.l = (url, done, key, chunkId) => {
            if (inProgress[url]) {
                inProgress[url].push(done);
                return;
            }
            var script, needAttach;
            if (key !== void 0) {
                var scripts = document.getElementsByTagName("script");
                for (var i = 0; i < scripts.length; i++) {
                    var s = scripts[i];
                    if (s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) {
                        script = s;
                        break;
                    }
                }
            }
            if (!script) {
                needAttach = true;
                script = document.createElement("script");
                script.charset = "utf-8";
                script.timeout = 120;
                if (__webpack_require__.nc) script.setAttribute("nonce", __webpack_require__.nc);
                script.setAttribute("data-webpack", dataWebpackPrefix + key);
                script.src = url;
            }
            inProgress[url] = [ done ];
            var onScriptComplete = (prev, event) => {
                script.onerror = script.onload = null;
                clearTimeout(timeout);
                var doneFns = inProgress[url];
                delete inProgress[url];
                script.parentNode && script.parentNode.removeChild(script);
                doneFns && doneFns.forEach((fn => fn(event)));
                if (prev) return prev(event);
            };
            var timeout = setTimeout(onScriptComplete.bind(null, void 0, {
                type: "timeout",
                target: script
            }), 12e4);
            script.onerror = onScriptComplete.bind(null, script.onerror);
            script.onload = onScriptComplete.bind(null, script.onload);
            needAttach && document.head.appendChild(script);
        };
    })();
    (() => {
        __webpack_require__.r = exports => {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
        };
    })();
    (() => {
        __webpack_require__.p = "/";
    })();
    (() => {
        var installedChunks = {
            179: 0
        };
        __webpack_require__.f.j = (chunkId, promises) => {
            var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : void 0;
            if (installedChunkData !== 0) if (installedChunkData) promises.push(installedChunkData[2]); else if (true) {
                var promise = new Promise(((resolve, reject) => installedChunkData = installedChunks[chunkId] = [ resolve, reject ]));
                promises.push(installedChunkData[2] = promise);
                var url = __webpack_require__.p + __webpack_require__.u(chunkId);
                var error = new Error;
                var loadingEnded = event => {
                    if (__webpack_require__.o(installedChunks, chunkId)) {
                        installedChunkData = installedChunks[chunkId];
                        if (installedChunkData !== 0) installedChunks[chunkId] = void 0;
                        if (installedChunkData) {
                            var errorType = event && (event.type === "load" ? "missing" : event.type);
                            var realSrc = event && event.target && event.target.src;
                            error.message = "Loading chunk " + chunkId + " failed.\n(" + errorType + ": " + realSrc + ")";
                            error.name = "ChunkLoadError";
                            error.type = errorType;
                            error.request = realSrc;
                            installedChunkData[1](error);
                        }
                    }
                };
                __webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
            }
        };
        var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
            var [chunkIds, moreModules, runtime] = data;
            var moduleId, chunkId, i = 0;
            if (chunkIds.some((id => installedChunks[id] !== 0))) {
                for (moduleId in moreModules) if (__webpack_require__.o(moreModules, moduleId)) __webpack_require__.m[moduleId] = moreModules[moduleId];
                if (runtime) runtime(__webpack_require__);
            }
            if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
            for (;i < chunkIds.length; i++) {
                chunkId = chunkIds[i];
                if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) installedChunks[chunkId][0]();
                installedChunks[chunkId] = 0;
            }
        };
        var chunkLoadingGlobal = self["webpackChunkcv_portfolio"] = self["webpackChunkcv_portfolio"] || [];
        chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
        chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
    })();
    function getHash() {
        if (location.hash) return location.hash.replace("#", "");
    }
    let _slideUp = (target, duration = 500, showmore = 0) => {
        if (!target.classList.contains("_slide")) {
            target.classList.add("_slide");
            target.style.transitionProperty = "height, margin, padding";
            target.style.transitionDuration = duration + "ms";
            target.style.height = `${target.offsetHeight}px`;
            target.offsetHeight;
            target.style.overflow = "hidden";
            target.style.height = showmore ? `${showmore}px` : `0px`;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            window.setTimeout((() => {
                target.hidden = !showmore ? true : false;
                !showmore ? target.style.removeProperty("height") : null;
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                !showmore ? target.style.removeProperty("overflow") : null;
                target.style.removeProperty("transition-duration");
                target.style.removeProperty("transition-property");
                target.classList.remove("_slide");
                document.dispatchEvent(new CustomEvent("slideUpDone", {
                    detail: {
                        target
                    }
                }));
            }), duration);
        }
    };
    let _slideDown = (target, duration = 500, showmore = 0) => {
        if (!target.classList.contains("_slide")) {
            target.classList.add("_slide");
            target.hidden = target.hidden ? false : null;
            showmore ? target.style.removeProperty("height") : null;
            let height = target.offsetHeight;
            target.style.overflow = "hidden";
            target.style.height = showmore ? `${showmore}px` : `0px`;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            target.offsetHeight;
            target.style.transitionProperty = "height, margin, padding";
            target.style.transitionDuration = duration + "ms";
            target.style.height = height + "px";
            target.style.removeProperty("padding-top");
            target.style.removeProperty("padding-bottom");
            target.style.removeProperty("margin-top");
            target.style.removeProperty("margin-bottom");
            window.setTimeout((() => {
                target.style.removeProperty("height");
                target.style.removeProperty("overflow");
                target.style.removeProperty("transition-duration");
                target.style.removeProperty("transition-property");
                target.classList.remove("_slide");
                document.dispatchEvent(new CustomEvent("slideDownDone", {
                    detail: {
                        target
                    }
                }));
            }), duration);
        }
    };
    let _slideToggle = (target, duration = 500) => {
        if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
    };
    let bodyLockStatus = true;
    let bodyUnlock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            setTimeout((() => {
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = "0px";
                }
                body.style.paddingRight = "0px";
                document.documentElement.classList.remove("lock");
            }), delay);
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    function spollers() {
        const spollersArray = document.querySelectorAll("[data-spollers]");
        if (spollersArray.length > 0) {
            const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                return !item.dataset.spollers.split(",")[0];
            }));
            if (spollersRegular.length) initSpollers(spollersRegular);
            let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
            if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                mdQueriesItem.matchMedia.addEventListener("change", (function() {
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
            }));
            function initSpollers(spollersArray, matchMedia = false) {
                spollersArray.forEach((spollersBlock => {
                    spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                    if (matchMedia.matches || !matchMedia) {
                        spollersBlock.classList.add("_spoller-init");
                        initSpollerBody(spollersBlock);
                        spollersBlock.addEventListener("click", setSpollerAction);
                    } else {
                        spollersBlock.classList.remove("_spoller-init");
                        initSpollerBody(spollersBlock, false);
                        spollersBlock.removeEventListener("click", setSpollerAction);
                    }
                }));
            }
            function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                if (spollerTitles.length) {
                    spollerTitles = Array.from(spollerTitles).filter((item => item.closest("[data-spollers]") === spollersBlock));
                    spollerTitles.forEach((spollerTitle => {
                        if (hideSpollerBody) {
                            spollerTitle.removeAttribute("tabindex");
                            if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                        } else {
                            spollerTitle.setAttribute("tabindex", "-1");
                            spollerTitle.nextElementSibling.hidden = false;
                        }
                    }));
                }
            }
            function setSpollerAction(e) {
                const el = e.target;
                if (el.closest("[data-spoller]")) {
                    const spollerTitle = el.closest("[data-spoller]");
                    const spollersBlock = spollerTitle.closest("[data-spollers]");
                    const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (!spollersBlock.querySelectorAll("._slide").length) {
                        if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                        spollerTitle.classList.toggle("_spoller-active");
                        _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                    }
                    e.preventDefault();
                }
            }
            function hideSpollersBody(spollersBlock) {
                const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                    spollerActiveTitle.classList.remove("_spoller-active");
                    _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                }
            }
            const spollersClose = document.querySelectorAll("[data-spoller-close]");
            if (spollersClose.length) document.addEventListener("click", (function(e) {
                const el = e.target;
                if (!el.closest("[data-spollers]")) spollersClose.forEach((spollerClose => {
                    const spollersBlock = spollerClose.closest("[data-spollers]");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (!spollersBlock.querySelectorAll("._slide").length) {
                        spollerClose.classList.remove("_spoller-active");
                        _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                    }
                }));
            }));
        }
    }
    function menuClose() {
        bodyUnlock();
        document.documentElement.classList.remove("menu-open");
    }
    function FLS(message) {
        setTimeout((() => {
            if (window.FLS) console.log(message);
        }), 0);
    }
    function uniqArray(array) {
        return array.filter((function(item, index, self) {
            return self.indexOf(item) === index;
        }));
    }
    function dataMediaQueries(array, dataSetValue) {
        const media = Array.from(array).filter((function(item, index, self) {
            if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
        }));
        if (media.length) {
            const breakpointsArray = [];
            media.forEach((item => {
                const params = item.dataset[dataSetValue];
                const breakpoint = {};
                const paramsArray = params.split(",");
                breakpoint.value = paramsArray[0];
                breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                breakpoint.item = item;
                breakpointsArray.push(breakpoint);
            }));
            let mdQueries = breakpointsArray.map((function(item) {
                return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
            }));
            mdQueries = uniqArray(mdQueries);
            const mdQueriesArray = [];
            if (mdQueries.length) {
                mdQueries.forEach((breakpoint => {
                    const paramsArray = breakpoint.split(",");
                    const mediaBreakpoint = paramsArray[1];
                    const mediaType = paramsArray[2];
                    const matchMedia = window.matchMedia(paramsArray[0]);
                    const itemsArray = breakpointsArray.filter((function(item) {
                        if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                    }));
                    mdQueriesArray.push({
                        itemsArray,
                        matchMedia
                    });
                }));
                return mdQueriesArray;
            }
        }
    }
    const translation = {
        surname: {
            ru: "Трифонова",
            en: "Trifonova"
        },
        name: {
            ru: "Екатерина",
            en: "Ekaterina"
        },
        position: {
            ru: "Фронтэнд разработчик",
            en: "Front-end developer"
        },
        freelance: {
            ru: "фриланс",
            en: "freelance"
        },
        city: {
            ru: "г. Москва",
            en: "Moscow"
        },
        experience: {
            ru: "Опыт работы",
            en: "Experience"
        },
        course: {
            ru: "Курс",
            en: "Сourses"
        },
        expRS21: {
            ru: "Выполнила 10+ проектов.",
            en: "Completed 10+ projects."
        },
        expRS22: {
            ru: "Успешно завершила финальный командный проект - интернет-магазин на React / Redux / Typescript с использованием бэкэнд-платформы Commercetools.",
            en: "Successfully completed the final team project - the online store, used React / Redux / Typescript and the Commercetools backend platform."
        },
        expRS11: {
            ru: "Выполнила 50+ задач Codewars (Javascript).",
            en: "Solved 50+ Codewars tasks (Javascript)."
        },
        expRS12: {
            ru: "Завершила 10+ учебных проектов.",
            en: "Completed 10+ educational projects."
        },
        expProf1: {
            ru: "Реализовала 20+ проектов.",
            en: "Completed 20+ educational projects."
        },
        expProf2: {
            ru: 'Защитила выпускную дипломную работу с отметкой "отлично".',
            en: "Finished the final project with an “excellent” mark."
        },
        profCourse: {
            ru: '"Frontend разработчик" учебного центра "Профессионал".',
            en: '"Front-end developer", educational center "Professional"'
        },
        portfolio: {
            ru: "Портфолио",
            en: "Projects"
        },
        ecommerce: {
            ru: "интернет-магазин",
            en: "eCommerce"
        },
        landing: {
            ru: "сайт-визитка",
            en: "landing page"
        },
        spa: {
            ru: "приложение",
            en: "SPA"
        },
        spa: {
            ru: "приложение",
            en: "SPA"
        },
        game: {
            ru: "игра",
            en: "game"
        },
        all: {
            ru: "показать все",
            en: "show all"
        },
        demo: {
            ru: "Демо",
            en: "Live Demo"
        },
        education: {
            ru: "Образование",
            en: "Education"
        },
        professional: {
            ru: 'УЦ "Профессионал"',
            en: 'Educational Center "Professional"'
        },
        diploma: {
            ru: "Диплом с отличием",
            en: "Diploma with honors"
        },
        certificate: {
            ru: "Сертификат",
            en: "Certificate"
        },
        development: {
            ru: "Frontend-разработка",
            en: "Front-end development"
        },
        bmstu: {
            ru: "МГТУ им. Н.Э.Баумана",
            en: "Bauman MSTU"
        },
        aboutMe: {
            ru: "Считаю Front-end одним из самых увлекательных и творческих направлений среди IT-профессий. Люблю решать рабочие задачи, работать как в команде, так и самостоятельно, стремлюсь к улучшению результатов и повышению компетенции.",
            en: "I consider Front-end development to be one of the most exciting and creative fields among IT professions. I enjoy solving real-world problems, working both in a team and independently, strive to improve results and enhance my skills."
        },
        stack: {
            ru: "Стек технологий",
            en: "Expertise"
        },
        softSkills: {
            ru: "Личные качества",
            en: "Soft skills"
        },
        team: {
            ru: "Командная работа",
            en: "Working in team"
        },
        flexibility: {
            ru: "Гибкость",
            en: "Flexibility"
        },
        trainability: {
            ru: "Обучаемость",
            en: "Trainability"
        },
        responsibility: {
            ru: "Ответственность",
            en: "Responsibility"
        },
        discipline: {
            ru: "Дисциплинированность",
            en: "Discipline"
        },
        determination: {
            ru: "Целеустремленность",
            en: "Determination"
        },
        independence: {
            ru: "Самостоятельность",
            en: "Independence"
        },
        languages: {
            ru: "Языки",
            en: "Languages"
        },
        english: {
            ru: "Английский (C1)",
            en: "English (C1)"
        },
        french: {
            ru: "Французский (B2)",
            en: "French (B2)"
        },
        russian: {
            ru: "Русский (Родной)",
            en: "Russian (Native)"
        },
        links: {
            ru: "Ссылки",
            en: "Links"
        },
        certifications: {
            ru: "Сертификаты",
            en: "Certifications"
        },
        download: {
            ru: "Скачать резюме",
            en: "Download CV"
        },
        cv: {
            ru: "https://drive.google.com/file/d/1SIMhnrz2XNm-Ym7mH28oq2scwWPJzSo2",
            en: "https://drive.google.com/file/d/1gTmErF5ALkNH5NHivkj-dnRQ88ye4H97"
        }
    };
    const renderLeftSide = () => {
        const language = localStorage.getItem("language");
        const main = document.querySelector(".page");
        const html = `\n  <div class="column-left">\n  <section class="column-left__header header">\n    <div class="header__photo"><img src="img/photo.jpg" alt="" /></div>\n    <div class="header__about about">\n      <div class="about__title">${translation.name[language]} <span>${translation.surname[language]}</span></div>\n      <div class="about__subtitle">${translation.position[language]}</div>\n      <div class="about__link">\n        <a href="${translation.cv[language]}">${translation.download[language]}</a>\n      </div>\n      <div class="about__contacts contacts">\n        <ul class="contacts__list">\n          <li class="contacts__item _icon-phone">\n            <a href="tel:89263420922">+7 (926) 342-09-22</a>\n          </li>\n          <li class="contacts__item _icon-telegram">\n            <a href="https://t.me/trifonova_ekaterina">trifonova_ekaterina</a>\n          </li>\n          <li class="contacts__item _icon-email">\n            <a href="mailto:3420922@gmail.com">3420922@gmail.com</a>\n          </li>\n          <li class="contacts__item _icon-location">${translation.city[language]}</li>\n        </ul>\n      </div>\n    </div>\n  </section>\n  <section class="column-left__main">\n    <div class="column-left__timeline"></div>\n    <div class="column-left__content">\n      <article class="experience">\n        <div class="experience__content content-block">\n          <div class="content-block__title title-article">\n            <img src="img/experience.svg" alt="" />\n            <h2>${translation.experience[language]}</h2>\n          </div>\n          <div class="content-block__block block">\n            <div data-spollers class="spollers">\n              <div class="spollers__item">\n                <button\n                  type="button"\n                  data-spoller\n                  class="spollers__title spoller-active _spoller-active"\n                >\n                  <div class="block__title">${translation.position[language]}, ${translation.freelance[language]}</div>\n                  <div class="block__year">2023</div>\n                  <div class="block__subtitle">\n                  ${translation.course[language]} "Rolling Scopes School. JAVASCRIPT/FRONT-END 2023Q1".\n                  </div>\n                </button>\n\n                <div class="spollers__body">\n                  <div class="block__text">\n                    <ul class="content-list">\n                      <li class="content-list__item _icon-arrow-list-dark">\n                      ${translation.expRS21[language]}\n                      </li>\n                      <li class="content-list__item _icon-arrow-list-dark">\n                      ${translation.expRS22[language]}\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class="content-block__block block">\n            <div data-spollers class="spollers">\n              <div class="spollers__item">\n                <button\n                  type="button"\n                  data-spoller\n                  class="spollers__title"\n                >\n                  <div class="block__title">${translation.position[language]}, ${translation.freelance[language]}</div>\n                  <div class="block__year">2022</div>\n                  <div class="block__subtitle">\n                  ${translation.course[language]} "Rolling Scopes School. JS/FE PRE-SCHOOL 2022Q4".\n                  </div>\n                </button>\n                <div class="spollers__body">\n                  <div class="block__text">\n                    <ul class="content-list">\n                      <li class="content-list__item _icon-arrow-list-dark">\n                      ${translation.expRS11[language]}\n                      </li>\n                      <li class="content-list__item _icon-arrow-list-dark">\n                      ${translation.expRS12[language]}\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class="content-block__block block">\n            <div data-spollers class="spollers">\n              <div class="spollers__item">\n                <button\n                  type="button"\n                  data-spoller\n                  class="spollers__title"\n                >\n                  <div class="block__title">${translation.position[language]}, ${translation.freelance[language]}</div>\n                  <div class="block__year">2021</div>\n                  <div class="block__subtitle">\n                  ${translation.course[language]} ${translation.profCourse[language]}\n                  </div>\n                </button>\n\n                <div class="spollers__body">\n                  <div class="block__text">\n                    <ul class="content-list">\n                      <li class="content-list__item _icon-arrow-list-dark">\n                      ${translation.expProf1[language]}\n                      </li>\n                      <li class="content-list__item _icon-arrow-list-dark">\n                      ${translation.expProf2[language]}\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </article>\n      <article class="portfolio">\n        <div class="portfolio__content content-block">\n          <div class="content-block__title title-article">\n            <img src="img/portfolio.svg" alt="" />\n            <h2>${translation.portfolio[language]}</h2>\n          </div>\n          <div class="body-portfolio__tags">\n            <ul id="portfolio-tags">\n              <li class="tag-active" data-tag="ecommerce">\n              ${translation.ecommerce[language]}\n              </li>\n              <li class="tag-noactive" data-tag="spa">\n              ${translation.spa[language]}\n              </li>\n              <li class="tag-noactive" data-tag="game">\n              ${translation.game[language]}\n              </li>\n              <li class="tag-noactive" data-tag="landing">\n              ${translation.landing[language]}\n              </li>\n              <li class="tag-noactive" data-tag="all">\n              ${translation.all[language]}\n              </li>\n            </ul>\n          </div>\n          <div\n            class="portfolio__body body-portfolio"\n            id="portfolio-container"\n          ></div>\n        </div>\n      </article>\n      <article class="education">\n        <div class="education__content">\n          <div class="content-block__title title-article">\n            <img src="img/education.svg" alt="" />\n            <h2>${translation.education[language]}</h2>\n          </div>\n          <div class="content-block__block block">\n            <div data-spollers class="spollers">\n              <button\n              type="button"\n              data-spoller\n              class="spollers__title spoller-active _spoller-active"\n              >\n                <div class="block__title">Rolling Scopes School</div>\n                <div class="block__year">2023</div>\n                <div class="block__subtitle">${translation.certificate[language]}</div>\n                <div class="block__text">Javascript / Typescript / React JS</div>\n              </button>\n              <div class="spollers__body">\n                <div class="block__text">\n                  \x3c!-- <ul class="content-list">\n                    <li class="content-list__item _icon-arrow-list-dark">\n                      Изучила базовые алгоритмы и структуры данных.\n                    </li>  \n                    <li class="content-list__item _icon-arrow-list-dark">\n                      Освоила основы ООП.\n                    </li>\n                    <li class="content-list__item _icon-arrow-list-dark">\n                      Изучила основы NodeJS. Научилась работать с файловой системой.\n                    </li>\n                    <li class="content-list__item _icon-arrow-list-dark">\n                      Начала применять в проектах Typescript вместо Javascript.\n                    </li>                       \n                    <li class="content-list__item _icon-arrow-list-dark">\n                      Начала писать тесты на JEST.\n                    </li>\n                    <li class="content-list__item _icon-arrow-list-dark">\n                      Научилась работе с данными через RESTful API.\n                    </li>\n                    <li class="content-list__item _icon-arrow-list-dark">\n                      Самостоятельно настроила сборщик Webpack.\n                    </li>\n                    <li class="content-list__item _icon-arrow-list-dark">\n                      Изучила основы командной работы с помощью Kanban, Scrum, Agile.\n                    </li>\n                    <li class="content-list__item _icon-arrow-list-dark">\n                      Успешно выполнила финальный командный проект - интернет-магазин на React / Redux / Typescript с использованием бэкэнд-платформы Commercetools.\n                    </li>\n                    <li class="content-list__item _icon-arrow-list-dark">\n                      Получила высший балл по результатам 3 технических скринингов в формате интервью и лайв-кодинга.\n                    </li>\n                  </ul> --\x3e\n                </div>\n                <div class="block__images">\n                  <a href="img/certificates/RS-school-stage2.jpg" target="_blank" data-pswp-width="800" \n                  data-pswp-height="566" >\n                    <img src="img/certificates/RS-school-stage2.jpg" alt="" />\n                  </a>\n                </div>\n              </div>\n            </div>                    \n          </div>\n          <div class="content-block__block block">\n            <div data-spollers class="spollers">\n              <button\n              type="button"\n              data-spoller\n              class="spollers__title"\n              >\n                <div class="block__title">Rolling Scopes School</div>\n                <div class="block__year">2022</div>\n                <div class="block__subtitle">${translation.certificate[language]}</div>\n                <div class="block__text">Javascript / Front-end</div>\n              </button>\n              <div class="spollers__body">\n                <div class="block__text">\n                  \x3c!-- <ul class="content-list">\n                    <li class="content-list__item _icon-arrow-list-dark">\n                      Изучила основы HTML, CSS, Javascript, Git, Webpack.\n                    </li>\n                    <li class="content-list__item _icon-arrow-list-dark">\n                      Решила более 50 задач Codewars (Javascript).\n                    </li>\n                    <li class="content-list__item _icon-arrow-list-dark">\n                      Научилась верстать адаптивно и кроссбраузерно по макетам Figma.\n                    </li>\n                    <li class="content-list__item _icon-arrow-list-dark">Выполнила более 10 учебных проектов.\n                    </li>\n                  </ul> --\x3e\n                </div>\n                <div class="block__images">\n                  <a href="img/certificates/RS-school-stage0.jpg" target="_blank" data-pswp-width="800" \n                  data-pswp-height="566" >\n                    <img src="img/certificates/RS-school-stage0.jpg" alt="" />\n                  </a>\n                </div>\n              </div>  \n            </div>\n          </div>\n          <div class="content-block__block block">\n            <div data-spollers class="spollers">\n              <button\n              type="button"\n              data-spoller\n              class="spollers__title"\n              >\n                <div class="block__title">${translation.professional[language]}</div>\n                <div class="block__year">2021</div>\n                <div class="block__subtitle">${translation.diploma[language]}</div>\n                <div class="block__text">${translation.development[language]}</div>\n              </button>\n              <div class="spollers__body">\n                <div class="block__text">\n                  \x3c!-- <ul class="content-list">\n                    <li class="content-list__item _icon-arrow-list-dark">\n                      Изучила основы HTML, CSS, Javascript.\n                    </li>\n                    <li class="content-list__item _icon-arrow-list-dark">\n                      Сверстала несколько адаптивных страниц (десктоп, планшет, мобильную версии).\n                    </li>\n                    <li class="content-list__item _icon-arrow-list-dark">\n                      Использовала в проектах библиотеки jQuery, Bootstrap, Axios.\n                    </li>\n                    <li class="content-list__item _icon-arrow-list-dark">\n                      Научилась работать с Git, завела аккаунт на Github.\n                    </li>\n                    <li class="content-list__item _icon-arrow-list-dark">\n                      Реализовала около 20 учебных проектов и защитила выпускную дипломную работу с отметкой "отлично".\n                    </li>\n                  </ul> --\x3e\n                </div>\n                <div class="block__images">\n                  <a href="img/certificates/professional1.jpg" target="_blank" data-pswp-width="800" \n                  data-pswp-height="564" >\n                    <img src="img/certificates/professional1.jpg" alt="" />\n                  </a>\n                  <a href="img/certificates/professional2.jpg" target="_blank" data-pswp-width="800" \n                  data-pswp-height="564" >\n                    <img src="img/certificates/professional2.jpg" alt="" />\n                  </a>\n                </div>\n              </div>\n            </div>  \n          </div>\n          <div class="content-block__block block">\n            <div class="block__title">${translation.bmstu[language]}</div>\n            <div class="block__year">2007</div>\n            <div class="block__subtitle">${translation.diploma[language]}</div>\n            <div class="block__text">\n\n            </div>\n            <div class="block__text"></div>\n          </div>\n        </div>\n      </article>\n    </div>\n  </section>\n</div>\n  `;
        main.insertAdjacentHTML("afterbegin", html);
        spollers();
    };
    const runProgressBar = () => {
        let currentWidth;
        let speed = 0;
        let maxWidth;
        let progress = document.getElementsByClassName("skill__bar");
        for (const element of progress) element.style.display = "none";
        async function loadBars(array) {
            for (const item of array) await drawBar(item);
        }
        loadBars(progress);
        async function drawBar(currentBar) {
            currentBar.style.display = "block";
            currentWidth = 0;
            maxWidth = parseInt(currentBar.style.width);
            let interval = setInterval((function() {
                currentBar.style.width = currentWidth + "%";
                let sign = Math.random() > .5 ? 1 : -1;
                if (speed > 0) speed += sign * Math.random() * .4;
                if (speed <= 0) speed = .4;
                if (currentWidth >= maxWidth) speed = 0; else currentWidth += speed;
            }), 10);
            await new Promise((resolve => setTimeout(resolve, 0)));
            clearInterval(interval);
        }
    };
    const runQualities = () => {
        let qualities = document.getElementsByClassName("quality__bar");
        let emptyBox = `<li class="quality__item">&nbsp;</li>`;
        let fullBox = `<li class="quality__item quality__item_full">&nbsp;</li>`;
        for (let item of qualities) {
            let currentProgress = item.getAttribute("progress");
            for (let i = 1; i <= 5; i++) if (i <= currentProgress) item.insertAdjacentHTML("afterbegin", fullBox); else item.insertAdjacentHTML("beforeend", emptyBox);
        }
    };
    const runPortfolio = () => {
        const language = localStorage.getItem("language");
        const portfolioItems = [ {
            id: 1,
            git: "https://github.com/ekatrif/eCommerce-Application",
            deploy: "https://touristtracks-store.netlify.app/",
            img: "img/portfolio/1.jpg",
            title: "Интернет-магазин спортивных товаров",
            tags: [ "ecommerce" ]
        }, {
            id: 2,
            git: "https://github.com/ekatrif/Momentum",
            deploy: "https://ekatrif.github.io/Momentum/dist/index.html",
            img: "img/portfolio/2.jpg",
            title: "Клон приложения Momentum",
            tags: [ "spa" ]
        }, {
            id: 3,
            git: "https://github.com/ekatrif/minesweeper",
            deploy: "https://ekatrif.github.io/minesweeper/dist/",
            img: "img/portfolio/3.jpg",
            title: "Клон игры Minesweeper",
            tags: [ "spa", "game" ]
        }, {
            id: 4,
            git: "https://github.com/ekatrif/rs-selectors",
            deploy: "https://ekatrif.github.io/rs-selectors/dist/",
            img: "img/portfolio/4.jpg",
            title: "Клон приложения CSS Diner",
            tags: [ "spa", "game" ]
        }, {
            id: 5,
            git: "https://github.com/ekatrif/shelter",
            deploy: "https://ekatrif.github.io/shelter/dist/",
            img: "img/portfolio/5.png",
            title: "Сайт приюта для животных",
            tags: [ "landing" ]
        }, {
            id: 6,
            git: "https://github.com/ekatrif/plants",
            deploy: "https://ekatrif.github.io/plants/",
            img: "img/portfolio/6.jpg",
            title: "Лэндинг Plants",
            tags: [ "landing" ]
        }, {
            id: 7,
            git: "https://github.com/ekatrif/virtual-keyboard",
            deploy: "https://ekatrif.github.io/virtual-keyboard",
            img: "img/portfolio/7.jpg",
            title: "Виртуальная клавиатура",
            tags: [ "spa" ]
        }, {
            id: 8,
            git: "https://github.com/ekatrif/films-rating",
            deploy: "https://ekatrif.github.io/films-rating/dist/",
            img: "img/portfolio/8.jpg",
            title: "Голосование за фильм недели",
            tags: [ "spa" ]
        }, {
            id: 9,
            git: "https://github.com/ekatrif/spiker-time-control",
            deploy: "https://ekatrif.github.io/spiker-time-control/dist/",
            img: "img/portfolio/9.jpg",
            title: "Контроль времени выступления спикера",
            tags: [ "spa" ]
        }, {
            id: 10,
            git: "https://github.com/ekatrif/online-shop-prototype",
            deploy: "https://ekatrif.github.io/online-shop-prototype/",
            img: "img/portfolio/10.jpg",
            title: "Прототип интернет-магазина",
            tags: [ "ecommerce" ]
        }, {
            id: 11,
            git: "https://github.com/ekatrif/1146-Edu-project",
            deploy: "https://ekatrif.github.io/1146-Edu-project/",
            img: "img/portfolio/11.jpg",
            title: "Интернет-магазина постеров",
            tags: [ "ecommerce" ]
        }, {
            id: 12,
            git: "https://github.com/ekatrif/funbox-test-task",
            deploy: "https://ekatrif.github.io/funbox-test-task/dist/",
            img: "img/portfolio/12.png",
            title: "Каталог товаров",
            tags: [ "ecommerce" ]
        } ];
        const portfolioContainer = document.getElementById("portfolio-container");
        const portfolioTags = document.getElementById("portfolio-tags");
        getFiteredItems("ecommerce");
        showContent();
        function insertPortfolioItems(array) {
            let itemTemplate;
            for (const portfolioItem of array) {
                itemTemplate = `\n      <div class="portfolio__screenshot project">\n        <a href="${portfolioItem.deploy}" target="_blank" rel="nofollow"><img src="${portfolioItem.img}" alt="" /></a>\n        <div class="project__about about-project">\n          <div class="about-project__url">\n            <a class="about-project__link link-git" href="${portfolioItem.git}" target="_blank" rel="nofollow">Guthub</a></button>\n            <a class="about-project__link link-demo" href="${portfolioItem.deploy}" target="_blank" rel="nofollow">${translation.demo[language]}</a></>\n          </div>\n        </div>\n      </div>`;
                portfolioContainer.insertAdjacentHTML("beforeend", itemTemplate);
            }
        }
        insertPortfolioItems(portfolioItems);
        portfolioTags.addEventListener("click", (function(e) {
            hideContent();
            toggleTagClass(e);
            const currentTag = e.target.getAttribute("data-tag");
            getFiteredItems(currentTag);
            showContent();
        }));
        function toggleTagClass(e) {
            const tagsCollection = e.currentTarget.childNodes;
            for (let item of tagsCollection) if (item.tagName && item.tagName.toLowerCase() === "li" && item.classList.contains("tag-active")) {
                item.classList.remove("tag-active");
                item.classList.add("tag-noactive");
            }
            e.target.classList.remove("tag-noactive");
            e.target.classList.add("tag-active");
        }
        function hideContent() {
            if (portfolioContainer.classList.contains("show")) portfolioContainer.classList.remove("show");
            portfolioContainer.classList.add("hide");
        }
        function showContent() {
            setTimeout((function() {
                if (portfolioContainer.classList.contains("hide")) portfolioContainer.classList.remove("hide");
                portfolioContainer.classList.add("show");
            }), 500);
        }
        async function getFiteredItems(tag) {
            await new Promise((resolve => setTimeout(resolve, 500)));
            let filteredArray = [];
            filteredArray = tag === "all" ? [ ...portfolioItems ] : portfolioItems.filter((item => item.tags.includes(tag)));
            portfolioContainer.textContent = "";
            insertPortfolioItems(filteredArray);
        }
    };
    const renderRightSide = () => {
        const language = localStorage.getItem("language");
        const main = document.querySelector(".page");
        const html = `\n  <aside class="column-right">\n  <div class="column-right__about _icon-quote">\n    "${translation.aboutMe[language]}"\n  </div>\n  <div class="column-right__skills skills">\n    <div class="skills__title">${translation.stack[language]}</div>\n    <div class="skills__body">\n      <div class="column-right__skill skill">\n        <div class="skill__title">HTML</div>\n        <div class="skill__container">\n          <div class="skill__bar" style="width: 100%"></div>\n        </div>\n      </div>\n  \n      <div class="column-right__skill skill">\n        <div class="skill__title">CSS / SCSS / BEM / Bootstrap / MaterialUI</div>\n        <div class="skill__container">\n          <div class="skill__bar" style="width: 100%"></div>\n        </div>\n      </div>\n  \n      <div class="column-right__skill skill">\n        <div class="skill__title">Javascript</div>\n        <div class="skill__container">\n          <div class="skill__bar" style="width: 100%"></div>\n        </div>\n      </div>\n      <div class="column-right__skill skill">\n        <div class="skill__title">Typescript</div>\n        <div class="skill__container">\n          <div class="skill__bar" style="width: 100%"></div>\n        </div>\n      </div>\n  \n      <div class="column-right__skill skill">\n        <div class="skill__title">Git / Github</div>\n        <div class="skill__container">\n          <div class="skill__bar" style="width: 100%"></div>\n        </div>\n      </div>\n      <div class="column-right__skill skill">\n        <div class="skill__title">React JS / Redux</div>\n        <div class="skill__container">\n          <div class="skill__bar" style="width: 100%"></div>\n        </div>\n      </div>\n  \n      <div class="column-right__skill skill">\n        <div class="skill__title">Vue.js / Vuex</div>\n        <div class="skill__container">\n          <div class="skill__bar" style="width: 100%"></div>\n        </div>\n      </div>\n  \n      <div class="column-right__skill skill">\n        <div class="skill__title">NPM / YARN</div>\n        <div class="skill__container">\n          <div class="skill__bar" style="width: 100%"></div>\n        </div>\n      </div>\n  \n      <div class="column-right__skill skill">\n        <div class="skill__title">Webpack / Gulp / Vite</div>\n        <div class="skill__container">\n          <div class="skill__bar" style="width: 100%"></div>\n        </div>\n      </div>\n  \n      <div class="column-right__skill skill">\n        <div class="skill__title">Jest</div>\n        <div class="skill__container">\n          <div class="skill__bar" style="width: 100%"></div>\n        </div>\n      </div>\n  \n      <div class="column-right__skill skill">\n        <div class="skill__title">Prettier / ESLint</div>\n        <div class="skill__container">\n          <div class="skill__bar" style="width: 100%"></div>\n        </div>\n      </div>\n  \n      <div class="column-right__skill skill">\n        <div class="skill__title">FIGMA</div>\n        <div class="skill__container">\n          <div class="skill__bar" style="width: 100%"></div>\n        </div>\n      </div>\n  \n      <div class="column-right__skill skill">\n        <div class="skill__title">Agile / Scrum / Trello</div>\n        <div class="skill__container">\n          <div class="skill__bar" style="width: 100%"></div>\n        </div>\n      </div>\n  \n    </div>\n  </div>\n  <div class="column-right__qualities qualities">\n    <div class="qualities__title">${translation.softSkills[language]}</div>\n    <div class="qualities__body">\n      <div class="quality">\n        <div class="quality__title">${translation.team[language]}</div>\n        <ul class="quality__bar" progress="5"></ul>\n      </div>\n      <div class="quality">\n        <div class="quality__title">${translation.trainability[language]}</div>\n        <ul class="quality__bar" progress="5"></ul>\n      </div>\n      <div class="quality">\n        <div class="quality__title">${translation.responsibility[language]}</div>\n        <ul class="quality__bar" progress="5"></ul>\n      </div>\n      <div class="quality">\n        <div class="quality__title">${translation.discipline[language]}</div>\n        <ul class="quality__bar" progress="5"></ul>\n      </div>\n      <div class="quality">\n        <div class="quality__title">${translation.determination[language]}</div>\n        <ul class="quality__bar" progress="5"></ul>\n      </div>\n      <div class="quality">\n        <div class="quality__title">${translation.independence[language]}</div>\n        <ul class="quality__bar" progress="5"></ul>\n      </div>\n    </div>\n  </div>\n  <div class="column-right__certs certs">\n    <div class="certs__title">${translation.certifications[language]}</div>\n    <ul class="personal__list">\n      <li class="personal__item _icon-arrow-list-light">\n      <a href="http://app.rs.school/certificate/8gnkockf" target="_blank">\n        Javascript / Front-end 2023Q1 (Javascript)\n      </a>\n      </li>\n      <li class="personal__item _icon-arrow-list-light">\n      <a href="https://www.efset.org/cert/q5Nzny" target="_blank">\n        EF SET English Certificate (71 / 100)\n      </a>\n      </li>\n    </ul>\n  </div>\n  <div class="column-right__languages languages">\n    <div class="languages__title">${translation.languages[language]}</div>\n    <ul class="personal__list">\n      <li class="personal__item _icon-arrow-list-light">\n      ${translation.english[language]}\n      </li>\n      <li class="personal__item _icon-arrow-list-light">\n      ${translation.french[language]}\n      </li>\n      <li class="personal__item _icon-arrow-list-light">\n      ${translation.russian[language]}\n      </li>\n    </ul>\n  </div>\n  <div class="column-right__personal personal">\n    <div class="personal__title">${translation.links[language]}</div>\n    <ul class="personal__list">\n      <li class="personal__item _icon-arrow-list-light">\n        <a target="_blank" href="https://github.com/ekatrif"\n          >Github</a\n        >\n      </li>\n      <li class="personal__item _icon-arrow-list-light">\n      <a target="_blank" href="http://www.linkedin.com/in/ekatrif"\n        >LinkedIn</a\n      >\n      </li>\n      <li class="personal__item _icon-arrow-list-light">\n        <a target="_blank" href="https://www.codewars.com/users/rsschool_8ce2c48f923ed0a1"\n          >Codewars</a\n        >\n      </li>\n    </ul>\n  </div>\n</aside>\n  `;
        main.insertAdjacentHTML("beforeend", html);
        runProgressBar();
        runQualities();
        runPortfolio();
    };
    /*!
  * PhotoSwipe Lightbox 5.4.2 - https://photoswipe.com
  * (c) 2023 Dmytro Semenov
  */    function createElement(className, tagName, appendToEl) {
        const el = document.createElement(tagName);
        if (className) el.className = className;
        if (appendToEl) appendToEl.appendChild(el);
        return el;
    }
    function toTransformString(x, y, scale) {
        let propValue = `translate3d(${x}px,${y || 0}px,0)`;
        if (scale !== void 0) propValue += ` scale3d(${scale},${scale},1)`;
        return propValue;
    }
    function setWidthHeight(el, w, h) {
        el.style.width = typeof w === "number" ? `${w}px` : w;
        el.style.height = typeof h === "number" ? `${h}px` : h;
    }
    const LOAD_STATE = {
        IDLE: "idle",
        LOADING: "loading",
        LOADED: "loaded",
        ERROR: "error"
    };
    function specialKeyUsed(e) {
        return "button" in e && e.button === 1 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey;
    }
    function getElementsFromOption(option, legacySelector, parent = document) {
        let elements = [];
        if (option instanceof Element) elements = [ option ]; else if (option instanceof NodeList || Array.isArray(option)) elements = Array.from(option); else {
            const selector = typeof option === "string" ? option : legacySelector;
            if (selector) elements = Array.from(parent.querySelectorAll(selector));
        }
        return elements;
    }
    function isPswpClass(fn) {
        return typeof fn === "function" && fn.prototype && fn.prototype.goTo;
    }
    function isSafari() {
        return !!(navigator.vendor && navigator.vendor.match(/apple/i));
    }
    class PhotoSwipeEvent {
        constructor(type, details) {
            this.type = type;
            this.defaultPrevented = false;
            if (details) Object.assign(this, details);
        }
        preventDefault() {
            this.defaultPrevented = true;
        }
    }
    class Eventable {
        constructor() {
            this._listeners = {};
            this._filters = {};
            this.pswp = void 0;
            this.options = void 0;
        }
        addFilter(name, fn, priority = 100) {
            var _this$_filters$name, _this$_filters$name2, _this$pswp;
            if (!this._filters[name]) this._filters[name] = [];
            (_this$_filters$name = this._filters[name]) === null || _this$_filters$name === void 0 || _this$_filters$name.push({
                fn,
                priority
            });
            (_this$_filters$name2 = this._filters[name]) === null || _this$_filters$name2 === void 0 || _this$_filters$name2.sort(((f1, f2) => f1.priority - f2.priority));
            (_this$pswp = this.pswp) === null || _this$pswp === void 0 || _this$pswp.addFilter(name, fn, priority);
        }
        removeFilter(name, fn) {
            if (this._filters[name]) this._filters[name] = this._filters[name].filter((filter => filter.fn !== fn));
            if (this.pswp) this.pswp.removeFilter(name, fn);
        }
        applyFilters(name, ...args) {
            var _this$_filters$name3;
            (_this$_filters$name3 = this._filters[name]) === null || _this$_filters$name3 === void 0 || _this$_filters$name3.forEach((filter => {
                args[0] = filter.fn.apply(this, args);
            }));
            return args[0];
        }
        on(name, fn) {
            var _this$_listeners$name, _this$pswp2;
            if (!this._listeners[name]) this._listeners[name] = [];
            (_this$_listeners$name = this._listeners[name]) === null || _this$_listeners$name === void 0 || _this$_listeners$name.push(fn);
            (_this$pswp2 = this.pswp) === null || _this$pswp2 === void 0 || _this$pswp2.on(name, fn);
        }
        off(name, fn) {
            var _this$pswp3;
            if (this._listeners[name]) this._listeners[name] = this._listeners[name].filter((listener => fn !== listener));
            (_this$pswp3 = this.pswp) === null || _this$pswp3 === void 0 || _this$pswp3.off(name, fn);
        }
        dispatch(name, details) {
            var _this$_listeners$name2;
            if (this.pswp) return this.pswp.dispatch(name, details);
            const event = new PhotoSwipeEvent(name, details);
            (_this$_listeners$name2 = this._listeners[name]) === null || _this$_listeners$name2 === void 0 || _this$_listeners$name2.forEach((listener => {
                listener.call(this, event);
            }));
            return event;
        }
    }
    class Placeholder {
        constructor(imageSrc, container) {
            this.element = createElement("pswp__img pswp__img--placeholder", imageSrc ? "img" : "div", container);
            if (imageSrc) {
                const imgEl = this.element;
                imgEl.decoding = "async";
                imgEl.alt = "";
                imgEl.src = imageSrc;
                imgEl.setAttribute("role", "presentation");
            }
            this.element.setAttribute("aria-hidden", "true");
        }
        setDisplayedSize(width, height) {
            if (!this.element) return;
            if (this.element.tagName === "IMG") {
                setWidthHeight(this.element, 250, "auto");
                this.element.style.transformOrigin = "0 0";
                this.element.style.transform = toTransformString(0, 0, width / 250);
            } else setWidthHeight(this.element, width, height);
        }
        destroy() {
            var _this$element;
            if ((_this$element = this.element) !== null && _this$element !== void 0 && _this$element.parentNode) this.element.remove();
            this.element = null;
        }
    }
    class Content {
        constructor(itemData, instance, index) {
            this.instance = instance;
            this.data = itemData;
            this.index = index;
            this.element = void 0;
            this.placeholder = void 0;
            this.slide = void 0;
            this.displayedImageWidth = 0;
            this.displayedImageHeight = 0;
            this.width = Number(this.data.w) || Number(this.data.width) || 0;
            this.height = Number(this.data.h) || Number(this.data.height) || 0;
            this.isAttached = false;
            this.hasSlide = false;
            this.isDecoding = false;
            this.state = LOAD_STATE.IDLE;
            if (this.data.type) this.type = this.data.type; else if (this.data.src) this.type = "image"; else this.type = "html";
            this.instance.dispatch("contentInit", {
                content: this
            });
        }
        removePlaceholder() {
            if (this.placeholder && !this.keepPlaceholder()) setTimeout((() => {
                if (this.placeholder) {
                    this.placeholder.destroy();
                    this.placeholder = void 0;
                }
            }), 1e3);
        }
        load(isLazy, reload) {
            if (this.slide && this.usePlaceholder()) if (!this.placeholder) {
                const placeholderSrc = this.instance.applyFilters("placeholderSrc", this.data.msrc && this.slide.isFirstSlide ? this.data.msrc : false, this);
                this.placeholder = new Placeholder(placeholderSrc, this.slide.container);
            } else {
                const placeholderEl = this.placeholder.element;
                if (placeholderEl && !placeholderEl.parentElement) this.slide.container.prepend(placeholderEl);
            }
            if (this.element && !reload) return;
            if (this.instance.dispatch("contentLoad", {
                content: this,
                isLazy
            }).defaultPrevented) return;
            if (this.isImageContent()) {
                this.element = createElement("pswp__img", "img");
                if (this.displayedImageWidth) this.loadImage(isLazy);
            } else {
                this.element = createElement("pswp__content", "div");
                this.element.innerHTML = this.data.html || "";
            }
            if (reload && this.slide) this.slide.updateContentSize(true);
        }
        loadImage(isLazy) {
            var _this$data$src, _this$data$alt;
            if (!this.isImageContent() || !this.element || this.instance.dispatch("contentLoadImage", {
                content: this,
                isLazy
            }).defaultPrevented) return;
            const imageElement = this.element;
            this.updateSrcsetSizes();
            if (this.data.srcset) imageElement.srcset = this.data.srcset;
            imageElement.src = (_this$data$src = this.data.src) !== null && _this$data$src !== void 0 ? _this$data$src : "";
            imageElement.alt = (_this$data$alt = this.data.alt) !== null && _this$data$alt !== void 0 ? _this$data$alt : "";
            this.state = LOAD_STATE.LOADING;
            if (imageElement.complete) this.onLoaded(); else {
                imageElement.onload = () => {
                    this.onLoaded();
                };
                imageElement.onerror = () => {
                    this.onError();
                };
            }
        }
        setSlide(slide) {
            this.slide = slide;
            this.hasSlide = true;
            this.instance = slide.pswp;
        }
        onLoaded() {
            this.state = LOAD_STATE.LOADED;
            if (this.slide && this.element) {
                this.instance.dispatch("loadComplete", {
                    slide: this.slide,
                    content: this
                });
                if (this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode) {
                    this.append();
                    this.slide.updateContentSize(true);
                }
                if (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR) this.removePlaceholder();
            }
        }
        onError() {
            this.state = LOAD_STATE.ERROR;
            if (this.slide) {
                this.displayError();
                this.instance.dispatch("loadComplete", {
                    slide: this.slide,
                    isError: true,
                    content: this
                });
                this.instance.dispatch("loadError", {
                    slide: this.slide,
                    content: this
                });
            }
        }
        isLoading() {
            return this.instance.applyFilters("isContentLoading", this.state === LOAD_STATE.LOADING, this);
        }
        isError() {
            return this.state === LOAD_STATE.ERROR;
        }
        isImageContent() {
            return this.type === "image";
        }
        setDisplayedSize(width, height) {
            if (!this.element) return;
            if (this.placeholder) this.placeholder.setDisplayedSize(width, height);
            if (this.instance.dispatch("contentResize", {
                content: this,
                width,
                height
            }).defaultPrevented) return;
            setWidthHeight(this.element, width, height);
            if (this.isImageContent() && !this.isError()) {
                const isInitialSizeUpdate = !this.displayedImageWidth && width;
                this.displayedImageWidth = width;
                this.displayedImageHeight = height;
                if (isInitialSizeUpdate) this.loadImage(false); else this.updateSrcsetSizes();
                if (this.slide) this.instance.dispatch("imageSizeChange", {
                    slide: this.slide,
                    width,
                    height,
                    content: this
                });
            }
        }
        isZoomable() {
            return this.instance.applyFilters("isContentZoomable", this.isImageContent() && this.state !== LOAD_STATE.ERROR, this);
        }
        updateSrcsetSizes() {
            if (!this.isImageContent() || !this.element || !this.data.srcset) return;
            const image = this.element;
            const sizesWidth = this.instance.applyFilters("srcsetSizesWidth", this.displayedImageWidth, this);
            if (!image.dataset.largestUsedSize || sizesWidth > parseInt(image.dataset.largestUsedSize, 10)) {
                image.sizes = sizesWidth + "px";
                image.dataset.largestUsedSize = String(sizesWidth);
            }
        }
        usePlaceholder() {
            return this.instance.applyFilters("useContentPlaceholder", this.isImageContent(), this);
        }
        lazyLoad() {
            if (this.instance.dispatch("contentLazyLoad", {
                content: this
            }).defaultPrevented) return;
            this.load(true);
        }
        keepPlaceholder() {
            return this.instance.applyFilters("isKeepingPlaceholder", this.isLoading(), this);
        }
        destroy() {
            this.hasSlide = false;
            this.slide = void 0;
            if (this.instance.dispatch("contentDestroy", {
                content: this
            }).defaultPrevented) return;
            this.remove();
            if (this.placeholder) {
                this.placeholder.destroy();
                this.placeholder = void 0;
            }
            if (this.isImageContent() && this.element) {
                this.element.onload = null;
                this.element.onerror = null;
                this.element = void 0;
            }
        }
        displayError() {
            if (this.slide) {
                var _this$instance$option, _this$instance$option2;
                let errorMsgEl = createElement("pswp__error-msg", "div");
                errorMsgEl.innerText = (_this$instance$option = (_this$instance$option2 = this.instance.options) === null || _this$instance$option2 === void 0 ? void 0 : _this$instance$option2.errorMsg) !== null && _this$instance$option !== void 0 ? _this$instance$option : "";
                errorMsgEl = this.instance.applyFilters("contentErrorElement", errorMsgEl, this);
                this.element = createElement("pswp__content pswp__error-msg-container", "div");
                this.element.appendChild(errorMsgEl);
                this.slide.container.innerText = "";
                this.slide.container.appendChild(this.element);
                this.slide.updateContentSize(true);
                this.removePlaceholder();
            }
        }
        append() {
            if (this.isAttached || !this.element) return;
            this.isAttached = true;
            if (this.state === LOAD_STATE.ERROR) {
                this.displayError();
                return;
            }
            if (this.instance.dispatch("contentAppend", {
                content: this
            }).defaultPrevented) return;
            const supportsDecode = "decode" in this.element;
            if (this.isImageContent()) if (supportsDecode && this.slide && (!this.slide.isActive || isSafari())) {
                this.isDecoding = true;
                this.element.decode().catch((() => {})).finally((() => {
                    this.isDecoding = false;
                    this.appendImage();
                }));
            } else this.appendImage(); else if (this.slide && !this.element.parentNode) this.slide.container.appendChild(this.element);
        }
        activate() {
            if (this.instance.dispatch("contentActivate", {
                content: this
            }).defaultPrevented || !this.slide) return;
            if (this.isImageContent() && this.isDecoding && !isSafari()) this.appendImage(); else if (this.isError()) this.load(false, true);
            if (this.slide.holderElement) this.slide.holderElement.setAttribute("aria-hidden", "false");
        }
        deactivate() {
            this.instance.dispatch("contentDeactivate", {
                content: this
            });
            if (this.slide && this.slide.holderElement) this.slide.holderElement.setAttribute("aria-hidden", "true");
        }
        remove() {
            this.isAttached = false;
            if (this.instance.dispatch("contentRemove", {
                content: this
            }).defaultPrevented) return;
            if (this.element && this.element.parentNode) this.element.remove();
            if (this.placeholder && this.placeholder.element) this.placeholder.element.remove();
        }
        appendImage() {
            if (!this.isAttached) return;
            if (this.instance.dispatch("contentAppendImage", {
                content: this
            }).defaultPrevented) return;
            if (this.slide && this.element && !this.element.parentNode) this.slide.container.appendChild(this.element);
            if (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR) this.removePlaceholder();
        }
    }
    function getViewportSize(options, pswp) {
        if (options.getViewportSizeFn) {
            const newViewportSize = options.getViewportSizeFn(options, pswp);
            if (newViewportSize) return newViewportSize;
        }
        return {
            x: document.documentElement.clientWidth,
            y: window.innerHeight
        };
    }
    function parsePaddingOption(prop, options, viewportSize, itemData, index) {
        let paddingValue = 0;
        if (options.paddingFn) paddingValue = options.paddingFn(viewportSize, itemData, index)[prop]; else if (options.padding) paddingValue = options.padding[prop]; else {
            const legacyPropName = "padding" + prop[0].toUpperCase() + prop.slice(1);
            if (options[legacyPropName]) paddingValue = options[legacyPropName];
        }
        return Number(paddingValue) || 0;
    }
    function getPanAreaSize(options, viewportSize, itemData, index) {
        return {
            x: viewportSize.x - parsePaddingOption("left", options, viewportSize, itemData, index) - parsePaddingOption("right", options, viewportSize, itemData, index),
            y: viewportSize.y - parsePaddingOption("top", options, viewportSize, itemData, index) - parsePaddingOption("bottom", options, viewportSize, itemData, index)
        };
    }
    const MAX_IMAGE_WIDTH = 4e3;
    class ZoomLevel {
        constructor(options, itemData, index, pswp) {
            this.pswp = pswp;
            this.options = options;
            this.itemData = itemData;
            this.index = index;
            this.panAreaSize = null;
            this.elementSize = null;
            this.fit = 1;
            this.fill = 1;
            this.vFill = 1;
            this.initial = 1;
            this.secondary = 1;
            this.max = 1;
            this.min = 1;
        }
        update(maxWidth, maxHeight, panAreaSize) {
            const elementSize = {
                x: maxWidth,
                y: maxHeight
            };
            this.elementSize = elementSize;
            this.panAreaSize = panAreaSize;
            const hRatio = panAreaSize.x / elementSize.x;
            const vRatio = panAreaSize.y / elementSize.y;
            this.fit = Math.min(1, hRatio < vRatio ? hRatio : vRatio);
            this.fill = Math.min(1, hRatio > vRatio ? hRatio : vRatio);
            this.vFill = Math.min(1, vRatio);
            this.initial = this._getInitial();
            this.secondary = this._getSecondary();
            this.max = Math.max(this.initial, this.secondary, this._getMax());
            this.min = Math.min(this.fit, this.initial, this.secondary);
            if (this.pswp) this.pswp.dispatch("zoomLevelsUpdate", {
                zoomLevels: this,
                slideData: this.itemData
            });
        }
        _parseZoomLevelOption(optionPrefix) {
            const optionName = optionPrefix + "ZoomLevel";
            const optionValue = this.options[optionName];
            if (!optionValue) return;
            if (typeof optionValue === "function") return optionValue(this);
            if (optionValue === "fill") return this.fill;
            if (optionValue === "fit") return this.fit;
            return Number(optionValue);
        }
        _getSecondary() {
            let currZoomLevel = this._parseZoomLevelOption("secondary");
            if (currZoomLevel) return currZoomLevel;
            currZoomLevel = Math.min(1, this.fit * 3);
            if (this.elementSize && currZoomLevel * this.elementSize.x > MAX_IMAGE_WIDTH) currZoomLevel = MAX_IMAGE_WIDTH / this.elementSize.x;
            return currZoomLevel;
        }
        _getInitial() {
            return this._parseZoomLevelOption("initial") || this.fit;
        }
        _getMax() {
            return this._parseZoomLevelOption("max") || Math.max(1, this.fit * 4);
        }
    }
    function lazyLoadData(itemData, instance, index) {
        const content = instance.createContentFromData(itemData, index);
        let zoomLevel;
        const {options} = instance;
        if (options) {
            zoomLevel = new ZoomLevel(options, itemData, -1);
            let viewportSize;
            if (instance.pswp) viewportSize = instance.pswp.viewportSize; else viewportSize = getViewportSize(options, instance);
            const panAreaSize = getPanAreaSize(options, viewportSize, itemData, index);
            zoomLevel.update(content.width, content.height, panAreaSize);
        }
        content.lazyLoad();
        if (zoomLevel) content.setDisplayedSize(Math.ceil(content.width * zoomLevel.initial), Math.ceil(content.height * zoomLevel.initial));
        return content;
    }
    function lazyLoadSlide(index, instance) {
        const itemData = instance.getItemData(index);
        if (instance.dispatch("lazyLoadSlide", {
            index,
            itemData
        }).defaultPrevented) return;
        return lazyLoadData(itemData, instance, index);
    }
    class PhotoSwipeBase extends Eventable {
        getNumItems() {
            var _this$options;
            let numItems = 0;
            const dataSource = (_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.dataSource;
            if (dataSource && "length" in dataSource) numItems = dataSource.length; else if (dataSource && "gallery" in dataSource) {
                if (!dataSource.items) dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
                if (dataSource.items) numItems = dataSource.items.length;
            }
            const event = this.dispatch("numItems", {
                dataSource,
                numItems
            });
            return this.applyFilters("numItems", event.numItems, dataSource);
        }
        createContentFromData(slideData, index) {
            return new Content(slideData, this, index);
        }
        getItemData(index) {
            var _this$options2;
            const dataSource = (_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.dataSource;
            let dataSourceItem = {};
            if (Array.isArray(dataSource)) dataSourceItem = dataSource[index]; else if (dataSource && "gallery" in dataSource) {
                if (!dataSource.items) dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
                dataSourceItem = dataSource.items[index];
            }
            let itemData = dataSourceItem;
            if (itemData instanceof Element) itemData = this._domElementToItemData(itemData);
            const event = this.dispatch("itemData", {
                itemData: itemData || {},
                index
            });
            return this.applyFilters("itemData", event.itemData, index);
        }
        _getGalleryDOMElements(galleryElement) {
            var _this$options3, _this$options4;
            if ((_this$options3 = this.options) !== null && _this$options3 !== void 0 && _this$options3.children || (_this$options4 = this.options) !== null && _this$options4 !== void 0 && _this$options4.childSelector) return getElementsFromOption(this.options.children, this.options.childSelector, galleryElement) || [];
            return [ galleryElement ];
        }
        _domElementToItemData(element) {
            const itemData = {
                element
            };
            const linkEl = element.tagName === "A" ? element : element.querySelector("a");
            if (linkEl) {
                itemData.src = linkEl.dataset.pswpSrc || linkEl.href;
                if (linkEl.dataset.pswpSrcset) itemData.srcset = linkEl.dataset.pswpSrcset;
                itemData.width = linkEl.dataset.pswpWidth ? parseInt(linkEl.dataset.pswpWidth, 10) : 0;
                itemData.height = linkEl.dataset.pswpHeight ? parseInt(linkEl.dataset.pswpHeight, 10) : 0;
                itemData.w = itemData.width;
                itemData.h = itemData.height;
                if (linkEl.dataset.pswpType) itemData.type = linkEl.dataset.pswpType;
                const thumbnailEl = element.querySelector("img");
                if (thumbnailEl) {
                    var _thumbnailEl$getAttri;
                    itemData.msrc = thumbnailEl.currentSrc || thumbnailEl.src;
                    itemData.alt = (_thumbnailEl$getAttri = thumbnailEl.getAttribute("alt")) !== null && _thumbnailEl$getAttri !== void 0 ? _thumbnailEl$getAttri : "";
                }
                if (linkEl.dataset.pswpCropped || linkEl.dataset.cropped) itemData.thumbCropped = true;
            }
            return this.applyFilters("domItemData", itemData, element, linkEl);
        }
        lazyLoadData(itemData, index) {
            return lazyLoadData(itemData, this, index);
        }
    }
    class PhotoSwipeLightbox extends PhotoSwipeBase {
        constructor(options) {
            super();
            this.options = options || {};
            this._uid = 0;
            this.shouldOpen = false;
            this._preloadedContent = void 0;
            this.onThumbnailsClick = this.onThumbnailsClick.bind(this);
        }
        init() {
            getElementsFromOption(this.options.gallery, this.options.gallerySelector).forEach((galleryElement => {
                galleryElement.addEventListener("click", this.onThumbnailsClick, false);
            }));
        }
        onThumbnailsClick(e) {
            if (specialKeyUsed(e) || window.pswp) return;
            let initialPoint = {
                x: e.clientX,
                y: e.clientY
            };
            if (!initialPoint.x && !initialPoint.y) initialPoint = null;
            let clickedIndex = this.getClickedIndex(e);
            clickedIndex = this.applyFilters("clickedIndex", clickedIndex, e, this);
            const dataSource = {
                gallery: e.currentTarget
            };
            if (clickedIndex >= 0) {
                e.preventDefault();
                this.loadAndOpen(clickedIndex, dataSource, initialPoint);
            }
        }
        getClickedIndex(e) {
            if (this.options.getClickedIndexFn) return this.options.getClickedIndexFn.call(this, e);
            const clickedTarget = e.target;
            const childElements = getElementsFromOption(this.options.children, this.options.childSelector, e.currentTarget);
            const clickedChildIndex = childElements.findIndex((child => child === clickedTarget || child.contains(clickedTarget)));
            if (clickedChildIndex !== -1) return clickedChildIndex; else if (this.options.children || this.options.childSelector) return -1;
            return 0;
        }
        loadAndOpen(index, dataSource, initialPoint) {
            if (window.pswp || !this.options) return false;
            if (!dataSource && this.options.gallery && this.options.children) {
                const galleryElements = getElementsFromOption(this.options.gallery);
                if (galleryElements[0]) dataSource = {
                    gallery: galleryElements[0]
                };
            }
            this.options.index = index;
            this.options.initialPointerPos = initialPoint;
            this.shouldOpen = true;
            this.preload(index, dataSource);
            return true;
        }
        preload(index, dataSource) {
            const {options} = this;
            if (dataSource) options.dataSource = dataSource;
            const promiseArray = [];
            const pswpModuleType = typeof options.pswpModule;
            if (isPswpClass(options.pswpModule)) promiseArray.push(Promise.resolve(options.pswpModule)); else if (pswpModuleType === "string") throw new Error("pswpModule as string is no longer supported"); else if (pswpModuleType === "function") promiseArray.push(options.pswpModule()); else throw new Error("pswpModule is not valid");
            if (typeof options.openPromise === "function") promiseArray.push(options.openPromise());
            if (options.preloadFirstSlide !== false && index >= 0) this._preloadedContent = lazyLoadSlide(index, this);
            const uid = ++this._uid;
            Promise.all(promiseArray).then((iterableModules => {
                if (this.shouldOpen) {
                    const mainModule = iterableModules[0];
                    this._openPhotoswipe(mainModule, uid);
                }
            }));
        }
        _openPhotoswipe(module, uid) {
            if (uid !== this._uid && this.shouldOpen) return;
            this.shouldOpen = false;
            if (window.pswp) return;
            const pswp = typeof module === "object" ? new module.default(this.options) : new module(this.options);
            this.pswp = pswp;
            window.pswp = pswp;
            Object.keys(this._listeners).forEach((name => {
                var _this$_listeners$name;
                (_this$_listeners$name = this._listeners[name]) === null || _this$_listeners$name === void 0 || _this$_listeners$name.forEach((fn => {
                    pswp.on(name, fn);
                }));
            }));
            Object.keys(this._filters).forEach((name => {
                var _this$_filters$name;
                (_this$_filters$name = this._filters[name]) === null || _this$_filters$name === void 0 || _this$_filters$name.forEach((filter => {
                    pswp.addFilter(name, filter.fn, filter.priority);
                }));
            }));
            if (this._preloadedContent) {
                pswp.contentLoader.addToCache(this._preloadedContent);
                this._preloadedContent = void 0;
            }
            pswp.on("destroy", (() => {
                this.pswp = void 0;
                delete window.pswp;
            }));
            pswp.init();
        }
        destroy() {
            var _this$pswp;
            (_this$pswp = this.pswp) === null || _this$pswp === void 0 || _this$pswp.destroy();
            this.shouldOpen = false;
            this._listeners = {};
            getElementsFromOption(this.options.gallery, this.options.gallerySelector).forEach((galleryElement => {
                galleryElement.removeEventListener("click", this.onThumbnailsClick, false);
            }));
        }
    }
    let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
        const targetBlockElement = document.querySelector(targetBlock);
        if (targetBlockElement) {
            let headerItem = "";
            let headerItemHeight = 0;
            if (noHeader) {
                headerItem = "header.header";
                headerItemHeight = document.querySelector(headerItem).offsetHeight;
            }
            let options = {
                speedAsDuration: true,
                speed,
                header: headerItem,
                offset: offsetTop,
                easing: "easeOutQuad"
            };
            document.documentElement.classList.contains("menu-open") ? menuClose() : null;
            if (typeof SmoothScroll !== "undefined") (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                window.scrollTo({
                    top: targetBlockElementPosition,
                    behavior: "smooth"
                });
            }
            FLS(`[gotoBlock]: Юхуу...едем к ${targetBlock}`);
        } else FLS(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${targetBlock}`);
    };
    let addWindowScrollEvent = false;
    function pageNavigation() {
        document.addEventListener("click", pageNavigationAction);
        document.addEventListener("watcherCallback", pageNavigationAction);
        function pageNavigationAction(e) {
            if (e.type === "click") {
                const targetElement = e.target;
                if (targetElement.closest("[data-goto]")) {
                    const gotoLink = targetElement.closest("[data-goto]");
                    const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                    const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                    const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                    const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                    gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                    e.preventDefault();
                }
            } else if (e.type === "watcherCallback" && e.detail) {
                const entry = e.detail.entry;
                const targetElement = entry.target;
                if (targetElement.dataset.watch === "navigator") {
                    document.querySelector(`[data-goto]._navigator-active`);
                    let navigatorCurrentItem;
                    if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                        const element = targetElement.classList[index];
                        if (document.querySelector(`[data-goto=".${element}"]`)) {
                            navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                            break;
                        }
                    }
                    if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                }
            }
        }
        if (getHash()) {
            let goToHash;
            if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
            goToHash ? gotoBlock(goToHash, true, 500, 20) : null;
        }
    }
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const renderHtml = () => {
        const language = "en";
        localStorage.setItem("language", language);
        renderLeftSide();
        renderRightSide();
        const lightbox = new PhotoSwipeLightbox({
            gallery: ".block__images",
            children: "a",
            pswpModule: () => __webpack_require__.e(561).then(__webpack_require__.bind(__webpack_require__, 561))
        });
        lightbox.init();
        pageNavigation();
    };
    const src = renderHtml;
    window["FLS"] = true;
    src();
})();