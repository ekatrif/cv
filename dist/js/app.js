(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
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
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
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
        await new Promise((resolve => setTimeout(resolve, 1500)));
        clearInterval(interval);
    }
    let qualities = document.getElementsByClassName("quality__bar");
    let emptyBox = `<li class="quality__item">&nbsp;</li>`;
    let fullBox = `<li class="quality__item quality__item_full">&nbsp;</li>`;
    for (let item of qualities) {
        let currentProgress = item.getAttribute("progress");
        for (let i = 1; i <= 5; i++) if (i <= currentProgress) item.insertAdjacentHTML("afterbegin", fullBox); else item.insertAdjacentHTML("beforeend", emptyBox);
    }
    const portfolioItems = [ {
        id: 1,
        url: "https://promo.ofs.team",
        img: "@img/portfolio/promo_ofs_team.jpg",
        title: "Промо-сайт Элайнеры",
        tags: [ "development", "administration", "seo", "functionalityExtension", "advertising" ]
    }, {
        id: 2,
        url: "https://www.имплантмен.рф",
        img: "@img/portfolio/имплантмен_рф.jpg",
        title: "Сайт хирургической стоматологии",
        tags: [ "administration", "seo", "advertising" ]
    }, {
        id: 3,
        url: "https://isdk.ru",
        img: "@img/portfolio/isdk_pro.jpg",
        title: "Корпоративный сайт ISDK",
        tags: [ "administration", "development" ]
    }, {
        id: 4,
        url: "http://bysina.ru",
        img: "@img/portfolio/bysina_ru.jpg",
        title: "Интернет-магазин Bysina",
        tags: [ "administration", "development", "advertising" ]
    }, {
        id: 5,
        url: "http://stefco.ru",
        img: "@img/portfolio/stefco_ru.jpg",
        title: "Магазин сценического ооборудования",
        tags: [ "functionalityExtension" ]
    }, {
        id: 6,
        url: "https://um-detki.ru",
        img: "@img/portfolio/um-detki.ru.jpg",
        title: "Интернет-магазин настольных игр",
        tags: [ "functionalityExtension", "development" ]
    }, {
        id: 7,
        url: "https://satinoff.ru",
        img: "@img/portfolio/satinoff_ru.jpg",
        title: "Магазин постельного белья",
        tags: [ "administration", "development" ]
    }, {
        id: 8,
        url: "https://keep-smiling.ru",
        img: "@img/portfolio/keep-smiling_ru.jpg",
        title: "Сайт-визитка врача-ортодонта",
        tags: [ "administration", "development" ]
    }, {
        id: 9,
        url: "https://globalstage.ru",
        img: "@img/portfolio/globalstage_ru.jpg",
        title: "Сайт-визитка GlobalStage",
        tags: [ "functionalityExtension" ]
    } ];
    const portfolioContainer = document.getElementById("portfolio-container");
    const portfolioTags = document.getElementById("portfolio-tags");
    function insertPortfolioItems(array) {
        let itemTemplate;
        for (const portfolioItem of array) {
            itemTemplate = `<div class="portfolio__screenshot project">\n    <img src="${portfolioItem.img}" alt="" />\n    <div class="project__about about-project">\n    <h3 class="about-project__title">${portfolioItem.title}</h3>\n    <div class="about-project__url">\n    <span>URL: </span><a href="${portfolioItem.url}" target="_blank" rel="nofollow">${portfolioItem.url}</a>\n    </div>\n    </div>\n    </div>`;
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
        for (let item of tagsCollection) if (item.tagName && "li" === item.tagName.toLowerCase() && item.classList.contains("tag-active")) {
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
        filteredArray = portfolioItems.filter((item => item.tags.includes(tag)));
        portfolioContainer.textContent = "";
        insertPortfolioItems(filteredArray);
    }
    window["FLS"] = true;
    isWebp();
    spollers();
})();