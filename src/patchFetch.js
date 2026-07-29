/* eslint-disable max-len */
import textsRu from "@server-data/texts/ru.json"
import textsEn from "@server-data/texts/en.json"
import avatar1 from "@server-data/imgs/avatar_1.jpg"
import avatar2 from "@server-data/imgs/avatar_2.png"
import avatar3 from "@server-data/imgs/avatar_3.png"
import avatar4 from "@server-data/imgs/avatar_4.png"
import avatar5 from "@server-data/imgs/avatar_5.png"
import OurProject from "@server-data/imgs/Our_Project.png"
import GameShop from "@server-data/imgs/GameShop.png"
import screensaverParticles from "@server-data/imgs/screensaver-particles.gif"
import recipeBook from "@server-data/imgs/recipe-book.png"
import proj1 from "@server-data/imgs/proj1.jpg"
import proj2 from "@server-data/imgs/proj2.jpg"
import proj3 from "@server-data/imgs/proj3.jpg"
import proj4 from "@server-data/imgs/proj4.jpg"
import proj5 from "@server-data/imgs/proj5.jpg"

const originalFetch = window.fetch;
// eslint-disable-next-line no-undef
const serverUrl = SERVERURL

export function patchFetch()
{
	const staticDataMap = {
		[`${serverUrl}/texts?lang=ru`]: textsRu,
		[`${serverUrl}/texts?lang=en`]: textsEn,
		[`${serverUrl}/comments`]: comments,
		[`${serverUrl}/comment`]: "ok",
		[`${serverUrl}/places?lang=ru`]: places.map(place => ({
			person: place.person.ru,
			places: place.places.map(p => ({
				...p,
				address: p.address.ru,
			})),
		})),
		[`${serverUrl}/places?lang=en`]: places.map(place => ({
			person: place.person.en,
			places: place.places.map(p => ({
				...p,
				address: p.address.en,
			})),
		})),
		[`${serverUrl}/persons?lang=ru`]: persons.map(p => ({
			...p,
			name: p.name.ru,
			descriptionShort: p.descriptionShort.ru,
			description: p.description.ru,
		})),
		[`${serverUrl}/persons?lang=en`]: persons.map(p => ({
			...p,
			name: p.name.en,
			descriptionShort: p.descriptionShort.en,
			description: p.description.en,
		})),
		[`${serverUrl}/projects?lang=ru`]: projects.map(p => ({
			...p,
			title: p.title.ru,
			description: p.description.ru,
			type: p.type.ru,
			authors: p.authors.ru,
		})),
		[`${serverUrl}/projects?lang=en`]: projects.map(p => ({
			...p,
			title: p.title.en,
			description: p.description.en,
			type: p.type.en,
			authors: p.authors.en,
		})),
	};
	window.fetch = async (url, options) =>
	{
		if (staticDataMap[url])
		{
			await new Promise(resolve => setTimeout(resolve, Math.random() * 1500 + 500));
			return new Response(JSON.stringify(staticDataMap[url]), {
				status: 200,
				headers: { "Content-Type": "application/json" },
			});
		}
		return originalFetch(url, options);
	};
}

const comments = [
	{
		id: 1,
		author: "Mixel",
		rate: 5,
		text: "Классный сайт \\_(0_0)_/",
	},
	{
		id: 2,
		author: "Пётр Иванов",
		rate: 2.5,
		text: "Lorem ipsum dolor amet consectetur. Duis sed velit libero urna vivamus sem sit. Ut consequat tempus enim ac ullamcorper.",
	},
	{
		id: 3,
		author: "Иван Петров",
		rate: 4,
		text: "Lorem ipsum dolor amet consectetur. Duis sed velit libero urna vivamus sem sit. Ut consequat tempus enim ac ullamcorper.",
	}
];

const places = [
	{
		person: { ru: "Влад", en: "Vlad" },
		places: [
			{ address: { ru: "Школа", en: "School" }, coods: [53.536171, 49.317428] },
			{ address: { ru: "Дом", en: "House" }, coods: [53.540613, 49.323303] }
		],
	},
	{
		person: { ru: "Николай", en: "Nikolai" },
		places: [
			{ address: { ru: "Школа", en: "School" }, coods: [51.64884, 39.126086] },
			{ address: { ru: "Дом", en: "House" }, coods: [51.653668, 39.139031] }
		],
	},
	{
		person: { ru: "Михаил", en: "Mike" },
		places: [
			{ address: { ru: "Школа", en: "School" }, coods: [55.669585, 37.370439] },
			{ address: { ru: "Дом", en: "House" }, coods: [55.819721, 37.611704] }
		],
	},
	{
		person: { ru: "Дарья", en: "Daria" },
		places: [
			{ address: { ru: "Школа", en: "School" }, coods: [55.741931, 37.653343] },
			{ address: { ru: "Дом", en: "House" }, coods: [55.755246, 37.617779] }
		],
	}
];

const persons = [
	{
		id: 1,
		name: { ru: "Влад", en: "Vlad" },
		descriptionShort: { ru: "Лидер команды", en: "Team leader" },
		imageId: avatar1,
		telegram: "https://t.me/VladNikulinn",
		github: "https://github.com/Flasck",
		description: {
			ru: "Окончил Тольяттинский экономико-технологический колледж. Изучаю программирование в компьютерных системах, программное обеспечение вычислительной техники и автоматизированных систем. Активно занимаюсь установкой/настройкой ПО \"South\" и настройкой/обслуживанием сетей (VPN,WI-FI,firewall и т.д.)",
			en: "Graduated from the Togliatti College of Economics and Technology. I study programming in computer systems, computer software and automated systems. I am actively involved in installing/configuring \"South\" software and configuring/maintaining networks (VPN, WI-FI, firewall, etc.)",
		},
		technology: ["HTML", "CSS", "Python", "React"],
	},
	{
		id: 2,
		name: { ru: "Николай", en: "Nikolai" },
		descriptionShort: { ru: "Мастер webpack'а", en: "webpack master" },
		imageId: avatar2,
		telegram: "https://t.me/Lapxi010",
		github: "https://github.com/Lapxi010",
		description: {
			ru: "Обожаю программирование и нахожу себя в этой профессии. После московского института электронной техники (Москва МПиТК) начал усердно трудиться над изучением программного обеспечения вычислительной техники и автоматизированных систем. Сейчас занимаюсь разработкой Backend приложений и их структуризацией.",
			en: "I love programming and find myself in this profession. After the Moscow Institute of Electronic Technology (Moscow MPiTK), he began to work hard on the study of software for computer technology and automated systems. Now I am developing Backend applications and their structuring.",
		},
		technology: ["Redux", "HTML", "JavaScript", "React"],
	},
	{
		id: 3,
		name: { ru: "Михаил", en: "Mike" },
		descriptionShort: { ru: "Начинающий Full Stack", en: "Beginner Full Stack developer" },
		imageId: avatar3,
		telegram: "https://t.me/MixelTe",
		github: "https://github.com/MixelTe",
		description: {
			ru: "Начал свое обучение Web технологиям с 2013 года. После успешного выпуска с волжского университета им. В.Н. Татищева в Тольятти факультета информатики и телекоммуникаций, получил профессию веб-разработчика и начал работать в данной стизе. Изучаю Elasticsearch, php7, Python, Django Framework, algolia.",
			en: "Began his training in Web technologies since 2013. After a successful graduation from the Volga University. V.N. Tatishchev in Togliatti, Faculty of Informatics and Telecommunications, received the profession of a web developer and began working in this style. I study Elasticsearch, php7, Python, Django Framework, algolia.",
		},
		technology: ["TypeScript", "React", "C#", "Python"],
	},
	{
		id: 4,
		name: { ru: "Дарья", en: "Daria" },
		descriptionShort: { ru: "Дизайнер, знаток Figma", en: "Designer, Figma expert" },
		imageId: avatar4,
		telegram: "https://t.me/dstarichkova",
		github: "https://github.com/dstarichkova",
		description: {
			ru: "В данный момент осваиваю ASP.NET Core, микросервисы, паттерны. Учу английский. Всегда готова в кратчайшие сроки изучать новые технологии и адаптироваться под команду! Имею диплом от МГОТУ факультета информационных технологий, прикладной информатики. Сопровождаю проект на стеке .net/SQL Server/WPF, etc.",
			en: "At the moment I am mastering ASP.NET Core, microservices, patterns. Learn English. Always ready to learn new technologies and adapt to the team as soon as possible! I have a diploma from Moscow State Technical University, Faculty of Information Technology, Applied Informatics. I maintain a project on the .net/SQL Server/WPF stack, etc.",
		},
		technology: ["HTML", "CSS", "JavaScript", "React"],
	},
	{
		id: 5,
		name: { ru: "Александр", en: "Alexander" },
		descriptionShort: { ru: "Большой Босс", en: "Big boss" },
		imageId: avatar5,
		telegram: "https://t.me/AlexandrPutilin",
		github: "https://github.com/F0biYA",
		description: {
			ru: "Web-разработка привлекает меня современными технологиями и быстрым развитием. Возможностью использования большой вариавтиности технологий и методологий разработки ПО.\nДлительное время занимался разработкой систем электропитания для космических аппаратов. Соответственно имею опыт в разработке высоконадежных систем и алгоритмов управления. ",
			en: "Web development attracts me with modern technologies and rapid development. The ability to use a wide variety of technologies and software development methodologies.\nFor a long time he was engaged in the development of power supply systems for spacecraft. Accordingly, I have experience in the development of highly reliable systems and control algorithms.",
		},
		technology: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
	}
];

const projects = [
	{
		id: 1,
		title: { ru: "Сайт-визитка", en: "Business card site" },
		date: "2022-12-09",
		imageId: OurProject,
		link: "https://github.com/Flasck/Own_project",
		description: {
			ru: "Сайт нашей компании",
			en: "Website of our company",
		},
		type: { ru: "Проект для Академии", en: "Project for the Academy" },
		authors: { ru: ["Влад", "Николай", "Михаил", "Дарья"], en: ["Vlad", "Nikolai", "Mike", "Daria"] },
		technologies: ["HTML", "CSS", "JavaScript", "React"],
	},
	{
		id: 2,
		title: { ru: "GameShop", en: "GameShop" },
		date: "2021-18-03",
		imageId: GameShop,
		link: "https://github.com/Lapxi010/Online-Game-Store",
		description: {
			ru: "Итоговый проект для 9 класса интернет магазин игр с классным дизайном созданный на vue.",
			en: "The final project for the 9th grade is an online game store with a cool design created on vue.",
		},
		type: { ru: "Личный проект", en: "Personal project" },
		authors: { ru: ["Николай"], en: ["Nikolai"] },
		technologies: ["Vue.js"],
	},
	{
		id: 3,
		title: { ru: "Screensaver Частицы", en: "Screensaver Particles" },
		date: "2021-04-10",
		imageId: screensaverParticles,
		link: "https://github.com/MixelTe/ScreensaverParticles",
		description: {
			ru: "Screensaver с частицами, которые хаотично летают, образовывая созвездия или образовывая часы с текущем временем.",
			en: "Screensaver with particles that fly around randomly forming constellations or forming clocks with the current time.",
		},
		type: { ru: "Личный проект", en: "Personal project" },
		authors: { ru: ["Михаил"], en: ["Mike"] },
		technologies: ["C#"],
	},
	{
		id: 4,
		title: { ru: "Книга Рецептов", en: "Book of recipes" },
		date: "2022-04-08",
		imageId: recipeBook,
		link: "https://github.com/MixelTe/RecipeBook",
		description: {
			ru: "Сайт на Flask и Bootstrap для хранения, просмотра и поиска рецептов.",
			en: "Flask and Bootstrap site for storing, viewing and searching recipes.",
		},
		type: { ru: "Проект для Академии", en: "Project for the Academy" },
		authors: { ru: ["Михаил"], en: ["Mike"] },
		technologies: ["JavaScript", "Python", "Flask"],
	},
	{
		id: 5,
		title: { ru: "Сайт для горной компании", en: "Website for a mining company" },
		date: "2021-04-06",
		imageId: proj1,
		link: null,
		description: {
			ru: "Сайт с адаптивным дизайном. Корпоративный стиль, корпоративные цвета, логотип, контакты, каталог продукции, форма обратной связи, форма заказа. Дизайн прост и понятен для понимания, без излишеств.",
			en: "Website with responsive design. Corporate identity, corporate colors, logo, contacts, product catalog, feedback form, order form. The design is simple and clear to understand, no frills.",
		},
		type: { ru: "Проект для Академии", en: "Project for the Academy" },
		authors: { ru: ["Влад", "Михаил"], en: ["Vlad", "Mike"] },
		technologies: ["HTML", "CSS", "JavaScript", "React"],
	},
	{
		id: 6,
		title: { ru: "Магазин цветов", en: "Flower shop" },
		date: "2020-25-05",
		imageId: proj2,
		link: null,
		description: {
			ru: "Сайт представляет собой интернет-магазин по продаже цветов и сопутствующих товаров.\nСайт сделан для продажи цветов (букетов) через интернет. Cайт введён в поисковую систему Яндекс и Google.\nПодключены счетчики статистики (Яндекс.Метрика и Google Analitics).",
			en: "The site is an online store selling flowers and related products.\nThe site is made for the sale of flowers (bouquets) via the Internet. The site was entered into the search engine Yandex and Google.\nStatistics counters are connected (Yandex.Metrika and Google Analytics).",
		},
		type: { ru: "Проект для Академии", en: "Project for the Academy" },
		authors: { ru: ["Николай", "Влад", "Александр"], en: ["Nikolai", "Vlad", "Alexander"] },
		technologies: ["HTML", "CSS", "JavaScript", "React"],
	},
	{
		id: 7,
		title: { ru: "Сайт по продаже авто", en: "Website for the sale of cars" },
		date: "2020-21-07",
		imageId: proj3,
		link: null,
		description: {
			ru: "Сайт для компании по продаже авто \"Автосервис No1\"\nНа сайте: возможность добавления фото и видео материалов. Без лишних картинок, баннеров, ссылок. С удобной навигацией, посетитель может легко найти нужную ему информацию. Возможность просмотра в разных форматах, как на компьютере, так и на смартфоне. Возможностью оплаты товаров и услуг. Возможность комментирования.",
			en: "Website for the company selling cars \"Autoservice No1\"\nOn the site: the ability to add photos and video materials. No extra pictures, banners, links. With easy navigation, the visitor can easily find the information he needs. The ability to view in different formats, both on a computer and on a smartphone. Ability to pay for goods and services. Possibility of commenting.",
		},
		type: { ru: "Личный проект", en: "Personal project" },
		authors: { ru: ["Михаил"], en: ["Mike"] },
		technologies: ["HTML", "CSS", "TypeScript", "React", "Redux", "Python"],
	},
	{
		id: 8,
		title: { ru: "Сайт пластиковых окон", en: "Website for plastic windows" },
		date: "2020-11-11",
		imageId: proj4,
		link: null,
		description: {
			ru: "Сайт для фирмы занимающейся продажей и установкой пластиковых окон.\nНа сайте: Главная страница (главная), Каталог продукции.\nКаталог - это просто страница с товарами (окна, двери, балконы, лоджии, входные группы, перегородки).\nВ нем будут кнопки «добавить товар в корзину» и «купить в 1 клик».",
			en: "Website for a company engaged in the sale and installation of plastic windows.\nOn the site: Main page (main), Product catalog.\nThe catalog is just a page with goods (windows, doors, balconies, loggias, entrance groups, partitions).\nIt will have buttons \"add item to cart\" and \"buy in 1 click\".",
		},
		type: { ru: "Проект для Академии", en: "Project for the Academy" },
		authors: { ru: ["Николай", "Дарья"], en: ["Nikolai", "Daria"] },
		technologies: ["HTML", "CSS", "TypeScript", "React", "Redux"],
	},
	{
		id: 9,
		title: { ru: "Магазин мороженого", en: "Ice cream shop" },
		date: "2021-22-05",
		imageId: proj5,
		link: null,
		description: {
			ru: "Сайт содержит информацию о продукте (описание, состав, свойства, фото и пр.). Для каждого продукта создан свой раздел.\nТакже на сайте есть раздел для обратной связи, где можно оставить отзыв о товаре. Возможность добавления товаров в корзину и возможность заказа товара.",
			en: "The site contains information about the product (description, composition, properties, photos, etc.). Each product has its own section.\nThe site also has a feedback section where you can leave a review about the product. Possibility of adding goods to the basket and the possibility of ordering goods.",
		},
		type: { ru: "Проект для Академии", en: "Project for the Academy" },
		authors: { ru: ["Дарья", "Влад", "Михаил", "Николай"], en: ["Daria", "Vlad", "Mike", "Nikolai"] },
		technologies: ["HTML", "CSS", "JavaScript", "React", "Redux"],
	},
	{
		id: 10,
		title: { ru: "Lorem ipsum", en: "Lorem ipsum" },
		date: "2022-04-02",
		imageId: null,
		link: null,
		description: {
			ru: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ultrices lectus. Sed volutpat pretium orci eu vehicula. Integer sollicitudin commodo dui, tincidunt cursus nisi posuere id. Sed feugiat arcu quis tortor pharetra fermentum. Nam ut magna sit amet justo vehicula sodales. Curabitur gravida dapibus egestas.",
			en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ultrices lectus. Sed volutpat pretium orci eu vehicula. Integer sollicitudin commodo dui, tincidunt cursus nisi posuere id. Sed feugiat arcu quis tortor pharetra fermentum. Nam ut magna sit amet justo vehicula sodales. Curabitur gravida dapibus egestas.",
		},
		type: { ru: "Проект для Академии", en: "Project for the Academy" },
		authors: { ru: ["Влад"], en: ["Vlad"] },
		technologies: [],
	},
	{
		id: 11,
		title: { ru: "Lorem ipsum", en: "Lorem ipsum" },
		date: "2022-02-05",
		imageId: null,
		link: null,
		description: {
			ru: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ultrices lectus. Sed volutpat pretium orci eu vehicula. Integer sollicitudin commodo dui, tincidunt cursus nisi posuere id. Sed feugiat arcu quis tortor pharetra fermentum. Nam ut magna sit amet justo vehicula sodales. Curabitur gravida dapibus egestas.",
			en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ultrices lectus. Sed volutpat pretium orci eu vehicula. Integer sollicitudin commodo dui, tincidunt cursus nisi posuere id. Sed feugiat arcu quis tortor pharetra fermentum. Nam ut magna sit amet justo vehicula sodales. Curabitur gravida dapibus egestas.",
		},
		type: { ru: "Проект для Академии", en: "Project for the Academy" },
		authors: { ru: ["Михаил"], en: ["Mike"] },
		technologies: [],
	},
	{
		id: 12,
		title: { ru: "Lorem ipsum", en: "Lorem ipsum" },
		date: "2021-18-03",
		imageId: null,
		link: null,
		description: {
			ru: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ultrices lectus. Sed volutpat pretium orci eu vehicula. Integer sollicitudin commodo dui, tincidunt cursus nisi posuere id. Sed feugiat arcu quis tortor pharetra fermentum. Nam ut magna sit amet justo vehicula sodales. Curabitur gravida dapibus egestas.",
			en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ultrices lectus. Sed volutpat pretium orci eu vehicula. Integer sollicitudin commodo dui, tincidunt cursus nisi posuere id. Sed feugiat arcu quis tortor pharetra fermentum. Nam ut magna sit amet justo vehicula sodales. Curabitur gravida dapibus egestas.",
		},
		type: { ru: "Проект для Академии", en: "Project for the Academy" },
		authors: { ru: ["Николай"], en: ["Nikolai"] },
		technologies: [],
	}
];
