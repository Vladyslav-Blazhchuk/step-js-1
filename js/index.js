"use strict";

const DATA = [
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m1.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "8 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f1.png",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m2.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Тетяна",
		"last name": "Мороз",
		photo: "./img/trainers/trainer-f2.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
	},
	{
		"first name": "Сергій",
		"last name": "Коваленко",
		photo: "./img/trainers/trainer-m3.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
	},
	{
		"first name": "Олена",
		"last name": "Лисенко",
		photo: "./img/trainers/trainer-f3.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
	},
	{
		"first name": "Андрій",
		"last name": "Волков",
		photo: "./img/trainers/trainer-m4.jpg",
		specialization: "Бійцівський клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
	},
	{
		"first name": "Наталія",
		"last name": "Романенко",
		photo: "./img/trainers/trainer-f4.jpg",
		specialization: "Дитячий клуб",
		category: "спеціаліст",
		experience: "3 роки",
		description:
			"Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
	},
	{
		"first name": "Віталій",
		"last name": "Козлов",
		photo: "./img/trainers/trainer-m5.jpg",
		specialization: "Тренажерний зал",
		category: "майстер",
		experience: "10 років",
		description:
			"Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
	},
	{
		"first name": "Юлія",
		"last name": "Кравченко",
		photo: "./img/trainers/trainer-f5.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
	},
	{
		"first name": "Олег",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-m6.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "12 років",
		description:
			"Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
	},
	{
		"first name": "Лідія",
		"last name": "Попова",
		photo: "./img/trainers/trainer-f6.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
	},
	{
		"first name": "Роман",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m7.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
	},
	{
		"first name": "Анастасія",
		"last name": "Гончарова",
		photo: "./img/trainers/trainer-f7.jpg",
		specialization: "Басейн",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
	},
	{
		"first name": "Валентин",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-m8.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
	},
	{
		"first name": "Лариса",
		"last name": "Петренко",
		photo: "./img/trainers/trainer-f8.jpg",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "7 років",
		description:
			"Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
	},
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m9.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "11 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f9.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m10.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Наталія",
		"last name": "Бондаренко",
		photo: "./img/trainers/trainer-f10.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "8 років",
		description:
			"Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
	},
	{
		"first name": "Андрій",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m11.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
	},
	{
		"first name": "Софія",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-f11.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "6 років",
		description:
			"Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
	},
	{
		"first name": "Дмитро",
		"last name": "Ковальчук",
		photo: "./img/trainers/trainer-m12.png",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
	},
	{
		"first name": "Олена",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-f12.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "5 років",
		description:
			"Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
	},
];

const trainerCardsBlock = document.querySelector(".trainers-cards");
const trainersContainer = document.querySelector(".trainers-cards__container");
const sortingButtons = document.querySelectorAll(".sorting__btn");
const form = document.querySelector(".sidebar__filters");
const localStorageData = {
	...JSON.parse(localStorage.getItem("filter_parameters")),
	...JSON.parse(localStorage.getItem("sorting_parameter"))
};

// *********************Прелоадер*******************************************

const createLoader = () => {
	const divLoader = document.createElement("div");
	divLoader.className = "loading-container";
	divLoader.innerHTML = `
	  <div class="loading-text">
		<span>L</span>
		<span>O</span>
		<span>A</span>
		<span>D</span>
		<span>I</span>
		<span>N</span>
		<span>G</span>
	  </div>
	`;
	return divLoader;
};

function showLoader() {
	trainersContainer.style.display = "none";
	document.querySelector(".loading-container").style.display = "block";
}

function hideLoader() {
	document.querySelector(".loading-container").style.display = "none";
	trainersContainer.style.display = "grid";
}

// ************************Current display trainers***************

let trainersToShow = DATA;

// ************************Translation****************************

const translationMap = {
	gym: "Тренажерний зал",
	"fight club": "Бійцівський клуб",
	"kids club": "Дитячий клуб",
	"swimming pool": "Басейн",
	master: "майстер",
	specialist: "спеціаліст",
	instructor: "інструктор",
};

//    *********************Показ карток***************************

const displayTrainers = () => {
	trainersContainer.innerHTML = "";

	trainersToShow.forEach((trainer) => {
		const trainerCard = document
			.querySelector("#trainer-card")
			.content.cloneNode(true);
		trainerCard.querySelector(".trainer__img").src = trainer.photo;
		trainerCard.querySelector(".trainer__img").alt =
			trainer["first name"] + " " + trainer["last name"];
		trainerCard.querySelector(".trainer__name").textContent =
			trainer["first name"] + " " + trainer["last name"];
		trainersContainer.appendChild(trainerCard);
	});

	document.querySelectorAll(".trainer__show-more").forEach((button, index) => {
		button.addEventListener("click", () => openModal(index));
	});
};

// ************************Показ сайдбару************************************

const showSidebar = () => {
	document.querySelector(".sorting").removeAttribute("hidden");
	document.querySelector(".sidebar").removeAttribute("hidden");
};

//	************************Модальне вікно***********************************

function openModal(index) {
	const existingModal = document.querySelector(".modal");
	if (existingModal) {
		document.body.removeChild(existingModal);
	}

	const trainer = trainersToShow[index];
	const modalTemplate = document
		.querySelector("#modal-template")
		.content.cloneNode(true);
	const modal = modalTemplate.querySelector(".modal");

	modal.querySelector(".modal__img").src = trainer.photo;
	modal.querySelector(".modal__img").alt =
		trainer["first name"] + " " + trainer["last name"];
	modal.querySelector(".modal__name").textContent =
		trainer["first name"] + " " + trainer["last name"];
	modal.querySelector(".modal__point--category").textContent =
		"Категорія: " + trainer.category;
	modal.querySelector(".modal__point--experience").textContent =
		"Досвід: " + trainer.experience;
	modal.querySelector(".modal__point--specialization").textContent =
		"Напрям тренера: " + trainer.specialization;
	modal.querySelector(".modal__text").textContent = trainer.description;

	document.body.appendChild(modal);
	document.body.style.overflow = "hidden";

	modal.querySelector(".modal__close").addEventListener("click", function () {
		document.body.removeChild(modal);
		document.body.style.overflow = "";
	});
}

// ***************************Сортування******************************

const sortingList = [sortByDefault, sortBySurname, sortByExperience];

function sortByDefault() {
	trainersToShow = DATA;
}

function sortBySurname() {
	let temporaryTrainters = [...trainersToShow];
	temporaryTrainters.sort((a, b) =>
		a["last name"].localeCompare(b["last name"])
	);
	trainersToShow = temporaryTrainters;
}

function sortByExperience() {
	let temporaryTrainters = [...trainersToShow];
	temporaryTrainters.sort((a, b) => {
		const experienceA = parseInt(a.experience.match(/\d+/), 10);
		const experienceB = parseInt(b.experience.match(/\d+/), 10);

		return experienceB - experienceA;
	});
	trainersToShow = temporaryTrainters;
}

function toogleActiveButton(indexOfActiveButton) {
	sortingButtons.forEach((button) => {
		button.classList.remove("sorting__btn--active");
	});
	sortingButtons[indexOfActiveButton].classList.add("sorting__btn--active");
}

const setListenersToSortButtons = () => {
	sortingButtons.forEach((button, index) => {
		button.addEventListener('click', () => {
			if (index === 0) {
				form.reset();
			}
			toogleActiveButton(index);
			saveSortingParameterToLocalStorage(index);
			sortingList[index]();
			displayTrainers();
		})
	})
};

// **********************Фільтрація******************************

const setFormSubmitListener = () => {
	form.addEventListener("submit", function (e) {
		e.preventDefault();
		showLoader();

		const directionValue = form.querySelector(
			'input[name="direction"]:checked'
		).value;
		const categoryValue = form.querySelector(
			'input[name="category"]:checked'
		).value;

		saveFilterParametersToLocalStorage(directionValue, categoryValue);

		applyFilters(directionValue, categoryValue);

		displayTrainers();
		hideLoader();
	});
};

function applyFilters(directionValue, categoryValue) {
	trainersToShow = trainersToShow.filter((trainer) => {
		const directionMatch =
			directionValue === "all" ||
			trainer.specialization === translationMap[directionValue];
		const categoryMatch =
			categoryValue === "all" ||
			trainer.category === translationMap[categoryValue];
		return directionMatch && categoryMatch;
	});
}

// **************************Збереження****************************

const saveSortingParameterToLocalStorage = ((activeButtonIndex) => {
	localStorage.setItem("sorting_parameter", JSON.stringify({
		sortButtonIndex: activeButtonIndex,
	}));
})

const saveFilterParametersToLocalStorage = ((directionValue, categoryValue) => {
	let data = {
		directionValue: directionValue,
		categoryValue: categoryValue
	}

	localStorage.setItem("filter_parameters", JSON.stringify(data));
})

const setDataFromLocalStorageToForm = (() => {
	if (Object.entries(localStorageData).length === 0) {
		return;
	}

	let sortingButtonIndex = localStorageData.sortButtonIndex;
	sortingList[sortingButtonIndex]();
	toogleActiveButton(sortingButtonIndex);

	let directionValue = localStorageData.directionValue;
	let categoryValue = localStorageData.categoryValue;
	form.querySelector(`input[name="direction"][value="${directionValue}"]`).click();
	form.querySelector(`input[name="category"][value="${categoryValue}"]`).click();
	applyFilters(directionValue, categoryValue);
})

document.addEventListener("DOMContentLoaded", () => {
	trainerCardsBlock.appendChild(createLoader());
	hideLoader();
	setDataFromLocalStorageToForm();
	displayTrainers();
	showSidebar();
	setListenersToSortButtons();
	setFormSubmitListener();
});


