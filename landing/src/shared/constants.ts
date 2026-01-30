import { Project, TeamMember, TeamStats } from './types';

const stepanPhoto = new URL('../assets/Step.png', import.meta.url).href;
const MarksPhoto = new URL('../assets/Mark.PNG', import.meta.url).href;
const autoImage = new URL('../assets/auto.png', import.meta.url).href;
const codeImage = new URL('../assets/code.png', import.meta.url).href;
const bookImage = new URL('../assets/book.png', import.meta.url).href;
const finImage = new URL('../assets/fin.png', import.meta.url).href;
const botImage = new URL('../assets/bot.png', import.meta.url).href;

export const TEAM_NAME = "чупапис";
export const TEAM_DESCRIPTION = "Мы — команда из двух разработчиков: frontend и backend. Уже больше двух лет мы работаем вместе и за это время успели реализовать несколько масштабных проектов. На Олимпиаде Prod мы делаем веб-продукт под ключ: React на фронте и Python на бэке — с упором на качество, архитектуру и скорость.";

export const STATS: TeamStats = {
  totalProjects: 9,
  yearsCombined: 2,
  coffeesConsumed: 408
};

export const MEMBERS: TeamMember[] = [
	  {
	    id: 1,
	    name: "Stephan", 
	    role: "Frontend",
	    bio: "Да я фронтендер и что. Делаю быстрые и аккуратные интерфейсы, уделяю внимание UX и визуальным деталям. Основной стек — React + TypeScript + Tailwind. Для хакатонов и MVP быстро собираю UI на shadcn/ui, добавляю анимации через Framer Motion, а для параллельной разработки использую Prism.",
	    techStack: ["React", "TypeScript", "Vite", "Docker", "Tailwind CSS", "Shadcn", "Motion", "Prism", "Netlify"],
	    experience: "2 Years",
	    githubUrl: "https://github.com/luhgeek1",
	    imagePlaceholderColor: "from-zinc-800 to-zinc-900",
	    imageSrc: stepanPhoto,
	  },
    {
     id: 1,
     name: "Mark", 
     role: "Backend",
     bio: "Я пишу рабочий бэкенд на п*тоне быстро и надежно. Собираю api на FastAPI, проектирую схемы в Postgres, слежу за архитектурой и контрактами. Для async и фоновых задач использую Celery + RabbitMQ/Redis. Деплою через Docker и шарю за CI/CD.",
     techStack: [
    "Python",
    "FastAPI",
    "SQLAlchemy",
    "Postgres",
    "Redis",
    "RabbitMQ",
    "Celery",
    "APScheduler",
    "Docker",
    "CI/CD",
  ],
     experience: "3 Years",
     githubUrl: "https://github.com/laughinme",
     imagePlaceholderColor: "from-zinc-800 to-zinc-900",
     imageSrc: MarksPhoto,
   },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "CodeMetrics",
    description:
      "Платформа аналитики для команды разработки: дашборды, метрики и быстрый просмотр состояния проекта.",
    longDescription:
      "CodeMetrics — внутренний сервис для сбора и визуализации метрик разработки. Это веб-дашборд с фильтрами, графиками и статистикой, который помогает быстро оценивать состояние проекта и команды. Проект сделали вдвоём за 2 дня в хакатон-режиме; по итогам заняли 2 место на хакатоне T1.",
    techHighlights: [
      "Frontend: React + Vite + Tailwind (быстрый UI и сборка)",
      "Backend: FastAPI (REST API) + Swagger /docs",
      "Хранилища: PostgreSQL (основные данные) + Redis (кэш/очереди)",
      "Инфра: Docker Compose + Nginx (reverse proxy)",
    ],
    timeline: "⏱ 2 дня",
    githubUrl: "https://github.com/laughinme/CodeMetrics",
    link: "https://github.com/laughinme/CodeMetrics",
    tags: ["React", "Vite", "Tailwind", "TS", "FastAPI", "PostgreSQL", "Redis", "Docker", "Nginx"],
    imagePlaceholderColor: "bg-neutral-900",
    imageSrc: codeImage,
  },

  {
    id: 2,
    title: "AutoSpareParts",
    description:
      "Монорепо под продукт в домене автозапчастей: backend + frontend + mobile в единой структуре.",
    longDescription:
      "AutoSpareParts — флагманский full-stack проект: маркетплейс для размещения и продажи автозапчастей, который вырос из идеи потенциального бизнес-продукта. Здесь много сложной доменной логики на бэкенде и “большая” архитектура, поэтому проект ощущается как настоящий продакшн-кандидат, а не учебный прототип. Над веб-частью работали два человека, параллельно команда из двух разработчиков делала интерфейс для Android-приложения. Отдельно выделяется платежная часть — подключена интеграция со Stripe",
    techHighlights: [
      "Монорепо структура: backend / frontend / mobile",
      "Есть docker-compose.yml для поднятия окружения локально",
      "Проект стартует от шаблона (template-based setup) — хороший фундамент для роста",
      "Разные клиенты/слои — удобно развивать параллельно",
    ],
    timeline: "⏱ 3 недели",
    githubUrl: "https://github.com/laughinme/auto-spare-parts",
    link: "https://github.com/laughinme/auto-spare-parts",
    tags: ["React", "Vite", "Tailwind", "TS", "FastAPI", "PostgreSQL", "Redis", "Nginx"],
    imagePlaceholderColor: "bg-zinc-900",
    imageSrc: autoImage,
  },

  {
    id: 3,
    title: "BookExchange",
    description:
      "Проект хакатона: быстрое full-stack решение в формате монорепо с разделением на backend/frontend/mobile.",
    longDescription:
      "BookExchange — первый проект в рамках хакатона: платформа-маркетплейс для обмена книгами. Идея взята из кейсов командного тура PROD 2025, поэтому проект делался “по-взрослому”: сразу с разделением на веб и мобильную версию. Веб-часть писали два человека, ещё двое занимались мобильным вариантом. Сейчас дизайн намеренно “классический” и требует рефактора, но как хакатон-результат проект хорошо показывает командную сборку, быстрые решения и умение доводить продукт до рабочего состояния.",
    techHighlights: [
      "Монорепо: backend / frontend / mobile (единая точка сборки команды)",
      "Разделение по слоям: API/логика отдельно от интерфейса и мобильного клиента",
      "База под процессы разработки: папка .github/workflows (CI/автоматизации)",
    ],
    timeline: "⏱ 4 дня",
    githubUrl: "https://github.com/laughinme/hackathon",
    link: "https://github.com/laughinme/hackathon",
    tags: ["React", "Vite", "Tailwind", "JS", "FastAPI", "PostgreSQL", "Redis", "Nginx"],
    imagePlaceholderColor: "bg-stone-900",
    imageSrc: bookImage,
  },

  {
    id: 4,
    title: "financial-work",
    description:
      "Full-stack проект с Telegram-логином и dev-инфраструктурой под HTTPS через Nginx.",
    longDescription:
      "financial-work — MVP, сделанный как бизнес-задача от итальянской стороны: сервис по продаже инвестиционных стратегий. Проект стал первым по-настоящему масштабным опытом: веб-продукт с графиками и аналитическими экранами, а также платежами через Stripe. Хотя технически проект выполнен не идеально (много вещей хотелось бы сделать чище и устойчивее), на стороне заказчика он “зашёл” — как MVP он выполняет главную задачу и демонстрирует ценность. Реализован в формате веб-версии без мобильного клиента.",
    techHighlights: [
      "Слои в репо: backend / frontend / bot / nginx",
      "HTTPS dev-сетап: Nginx + self-signed сертификат (443)",
      "Reverse proxy: единая точка входа, маршрутизация на сервисы",
      "Запуск окружения через Docker Compose",
    ],
    timeline: "⏱ 2 недели",
    githubUrl: "https://github.com/laughinme/financial-work",
    link: "https://github.com/laughinme/financial-work",
    tags: ["React", "Vite", "CSS", "JS", "FastAPI", "PostgreSQL", "Redis", "Docker", "Nginx"],
    imagePlaceholderColor: "bg-neutral-800",
    imageSrc: finImage,
  },

  {
    id: 5,
    title: "helpus3 (Homework Helper)",
    description:
      "Telegram-бот для учебы: домашка и расписание в одном месте + уведомления и архив заданий.",
    longDescription:
      "helpu3 — Telegram-бот для школьной рутины: расписание, добавление домашки и напоминания о начале уроков. Это самый первый личный проект Марка, который со временем превратился в полноценный продукт “для себя и пользователей”: он до сих пор в разработке, регулярно улучшается и обрастает новыми сценариями. Проект хорошо показывает путь от первого MVP к постепенно взрослеющей системе — когда функциональность наращивается без потери удобства.",
    techHighlights: [
      "Python + aiogram (бот-логика и обработчики)",
      "Парсинг расписания со школьного сайта → сохранение в БД",
      "Отдельная логика настроек пользователя (гибкое отображение и поведение)",
      "Уведомления по времени: до уроков / после занятий",
      "Env-конфиги: BOT_TOKEN, admin_id, опционально OPENAI_API_KEY",
    ],
    timeline: "⏱ a lot",
    githubUrl: "https://github.com/laughinme/helpus3",
    link: "https://github.com/laughinme/helpus3",
    tags: ["Python", "Telegram Bot", "aiogram", "Parsing", "Notifications"],
    imagePlaceholderColor: "bg-zinc-800",
    imageSrc: botImage,
  },
];
