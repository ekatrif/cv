const portfolioItems = [
  {
    id: 1,
    url: "https://promo.ofs.team",
    img: "@img/portfolio/promo_ofs_team.jpg",
    title: "Промо-сайт Элайнеры",
    tags: [
      "development",
      "administration",
      "seo",
      "functionalityExtension",
      "advertising",
    ],
  },

  {
    id: 2,
    url: "https://www.имплантмен.рф",
    img: "@img/portfolio/имплантмен_рф.jpg",
    title: "Сайт хирургической стоматологии",
    tags: ["administration", "seo", "advertising"],
  },

  {
    id: 3,
    url: "https://isdk.ru",
    img: "@img/portfolio/isdk_pro.jpg",
    title: "Корпоративный сайт ISDK",
    tags: ["administration", "development"],
  },

  {
    id: 4,
    url: "http://bysina.ru",
    img: "@img/portfolio/bysina_ru.jpg",
    title: "Интернет-магазин Bysina",
    tags: ["administration", "development", "advertising"],
  },

  {
    id: 5,
    url: "http://stefco.ru",
    img: "@img/portfolio/stefco_ru.jpg",
    title: "Магазин сценического ооборудования",
    tags: ["functionalityExtension"],
  },

  {
    id: 6,
    url: "https://um-detki.ru",
    img: "@img/portfolio/um-detki.ru.jpg",
    title: "Интернет-магазин настольных игр",
    tags: ["functionalityExtension", "development"],
  },

  {
    id: 7,
    url: "https://satinoff.ru",
    img: "@img/portfolio/satinoff_ru.jpg",
    title: "Магазин постельного белья",
    tags: ["administration", "development"],
  },

  {
    id: 8,
    url: "https://keep-smiling.ru",
    img: "@img/portfolio/keep-smiling_ru.jpg",
    title: "Сайт-визитка врача-ортодонта",
    tags: ["administration", "development"],
  },

  {
    id: 9,
    url: "https://globalstage.ru",
    img: "@img/portfolio/globalstage_ru.jpg",
    title: "Сайт-визитка GlobalStage",
    tags: ["functionalityExtension"],
  },
];

const portfolioContainer = document.getElementById("portfolio-container");
const portfolioTags = document.getElementById("portfolio-tags");

//Отображает элементы портфолио

function insertPortfolioItems(array) {
  let itemTemplate;
  for (const portfolioItem of array) {
    itemTemplate = `<div class="portfolio__screenshot project">
    <img src="${portfolioItem.img}" alt="" />
    <div class="project__about about-project">
    <h3 class="about-project__title">${portfolioItem.title}</h3>
    <div class="about-project__url">
    <span>URL: </span><a href="${portfolioItem.url}" target="_blank" rel="nofollow">${portfolioItem.url}</a>
    </div>
    </div>
    </div>`;
    portfolioContainer.insertAdjacentHTML("beforeend", itemTemplate);
  }
}
insertPortfolioItems(portfolioItems);

//Устанавливаем слушатель событий на плашки-теги через делегирование
portfolioTags.addEventListener("click", function (e) {
  hideContent();
  toggleTagClass(e);
  const currentTag = e.target.getAttribute("data-tag");
  getFiteredItems(currentTag);
  showContent();
});

//Переключение стилей плашек тегов
function toggleTagClass(e) {
  const tagsCollection = e.currentTarget.childNodes;
  for (let item of tagsCollection) {
    if (
      item.tagName &&
      item.tagName.toLowerCase() === "li" &&
      item.classList.contains("tag-active")
    ) {
      item.classList.remove("tag-active");
      item.classList.add("tag-noactive");
    }
  }
  e.target.classList.remove("tag-noactive");
  e.target.classList.add("tag-active");
}

//Анимация при исчезновении
function hideContent() {
  if (portfolioContainer.classList.contains("show")) {
    portfolioContainer.classList.remove("show");
  }
  portfolioContainer.classList.add("hide");
}
//Анимация при появлении
function showContent() {
  setTimeout(function () {
    if (portfolioContainer.classList.contains("hide")) {
      portfolioContainer.classList.remove("hide");
    }
    portfolioContainer.classList.add("show");
  }, 500);
}
//Фильтруем элементы портфолио по тегам
async function getFiteredItems(tag) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  let filteredArray = [];
  filteredArray = portfolioItems.filter((item) => item.tags.includes(tag));
  portfolioContainer.textContent = "";
  insertPortfolioItems(filteredArray);
}
