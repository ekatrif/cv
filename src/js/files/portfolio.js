const portfolioItems = [
  {
    id: 1,
    git: "https://github.com/ekatrif/eCommerce-Application",
    deploy: "https://touristtracks-store.netlify.app/",
    img: "@img/portfolio/1.jpg",
    title: "Интернет-магазин спортивных товаров",
    tags: [
      "ecommerce",
    ],
  },

  {
    id: 2,
    git: "https://github.com/ekatrif/Momentum",
    deploy: "https://ekatrif.github.io/Momentum/dist/index.html",
    img: "@img/portfolio/2.jpg",
    title: "Клон приложения Momentum",
    tags: ["spa"],
  },

  {
    id: 3,
    git: "https://github.com/ekatrif/minesweeper",
    deploy: "https://ekatrif.github.io/minesweeper/dist/",
    img: "@img/portfolio/3.jpg",
    title: "Клон игры Minesweeper",
    tags: ["spa", "game"],
  },

  {
    id: 4,
    git: "https://github.com/ekatrif/rs-selectors",
    deploy: "https://ekatrif.github.io/rs-selectors/dist/",
    img: "@img/portfolio/4.jpg",
    title: "Клон приложения CSS Diner",
    tags: ["spa", "game"],
  },

  {
    id: 5,
    git: "https://github.com/ekatrif/shelter",
    deploy: "https://ekatrif.github.io/shelter/dist/",
    img: "@img/portfolio/5.png",
    title: "Сайт приюта для животных",
    tags: ["landing"],
  },

  {
    id: 6,
    git: "https://github.com/ekatrif/plants",
    deploy: "https://ekatrif.github.io/plants/",
    img: "@img/portfolio/6.jpg",
    title: "Лэндинг Plants",
    tags: ["landing",],
  },

  {
    id: 7,
    git: "https://github.com/ekatrif/virtual-keyboard",
    deploy: "https://ekatrif.github.io/virtual-keyboard",
    img: "@img/portfolio/7.jpg",
    title: "Виртуальная клавиатура",
    tags: ["spa"],
  },

  {
    id: 8,
    git: "https://github.com/ekatrif/films-rating",
    deploy: "https://ekatrif.github.io/films-rating/dist/",
    img: "@img/portfolio/8.jpg",
    title: "Голосование за фильм недели",
    tags: ["spa"],
  },

  {
    id: 9,
    git: "https://github.com/ekatrif/spiker-time-control",
    deploy: "https://ekatrif.github.io/spiker-time-control/dist/",
    img: "@img/portfolio/9.jpg",
    title: "Контроль времени выступления спикера",
    tags: ["spa"],
  },

  {
    id: 10,
    git: "https://github.com/ekatrif/online-shop-prototype",
    deploy: "https://ekatrif.github.io/online-shop-prototype/",
    img: "@img/portfolio/10.jpg",
    title: "Прототип интернет-магазина",
    tags: ["ecommerce"],
  },

  {
    id: 11,
    git: "https://github.com/ekatrif/1146-Edu-project",
    deploy: "https://ekatrif.github.io/1146-Edu-project/",
    img: "@img/portfolio/11.jpg",
    title: "Интернет-магазина постеров",
    tags: ["ecommerce"],
  },

  {
    id: 12,
    git: "https://github.com/ekatrif/funbox-test-task",
    deploy: "https://ekatrif.github.io/funbox-test-task/dist/",
    img: "@img/portfolio/12.png",
    title: "Каталог товаров",
    tags: ["ecommerce"],
  },
];

const portfolioContainer = document.getElementById("portfolio-container");
const portfolioTags = document.getElementById("portfolio-tags");

//Отображает элементы портфолио

function insertPortfolioItems(array) {
  let itemTemplate;
  for (const portfolioItem of array) {
    itemTemplate = `
    <div class="portfolio__screenshot project">
      <a href="${portfolioItem.deploy}" target="_blank" rel="nofollow"><img src="${portfolioItem.img}" alt="" /></a>
      <div class="project__about about-project">
        <h3 class="about-project__title">${portfolioItem.title}</h3>
        <div class="about-project__url">
          <a class="about-project__link link-git" href="${portfolioItem.git}" target="_blank" rel="nofollow">Guthub</a></button>
          <a class="about-project__link link-demo" href="${portfolioItem.deploy}" target="_blank" rel="nofollow">Демо</a></>
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
  if (currentTag === "all") {
    showContent();
  } else {
    getFiteredItems(currentTag);
    showContent();
  }
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
