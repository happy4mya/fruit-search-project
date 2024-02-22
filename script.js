const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
let allItems = [];

const fruit = [
	'Apple',
	'Apricot',
	'Avocado 0',
	'Banana',
	'Bilberry',
	'Blackberry',
	'Blackcurrant',
	'Blueberry',
	'Boysenberry',
	'Currant',
	'Cherry',
	'Coconut',
	'Cranberry',
	'Cucumber',
	'Custard apple',
	'Damson',
	'Date',
	'Dragonfruit',
	'Durian',
	'Elderberry',
	'Feijoa',
	'Fig',
	'Gooseberry',
	'Grape',
	'Raisin',
	'Grapefruit',
	'Guava',
	'Honeyberry',
	'Huckleberry',
	'Jabuticaba',
	'Jackfruit',
	'Jambul',
	'Juniper berry',
	'Kiwifruit',
	'Kumquat',
	'Lemon',
	'Lime',
	'Loquat',
	'Longan',
	'Lychee',
	'Mango',
	'Mangosteen',
	'Marionberry',
	'Melon',
	'Cantaloupe',
	'Honeydew',
	'Watermelon',
	'Miracle fruit',
	'Mulberry',
	'Nectarine',
	'Nance',
	'Olive',
	'Orange',
	'Clementine',
	'Mandarine',
	'Tangerine',
	'Papaya',
	'Passionfruit',
	'Peach',
	'Pear',
	'Persimmon',
	'Plantain',
	'Plum',
	'Pineapple',
	'Pomegranate',
	'Pomelo',
	'Quince',
	'Raspberry',
	'Salmonberry',
	'Rambutan',
	'Redcurrant',
	'Salak',
	'Satsuma',
	'Soursop',
	'Star fruit',
	'Strawberry',
	'Tamarillo',
	'Tamarind',
	'Yuzu',
];

function search(str) {
	let results = [];

	const fruits = [...fruit];

	str = str.toLowerCase();
	let lowerCasedFruits = fruits.map((fruit) => fruit.toLowerCase());

	results = lowerCasedFruits.filter((fruit) => {
		return fruit.includes(str);
	});
	return results;
}

function searchHandler(e) {
	const searchQuery = e.target.value;
	const results = search(searchQuery);
	showSuggestions(results, searchQuery);
}

function showSuggestions(results, inputVal) {
	reset();
	results.forEach((result) => {
		let listItem = document.createElement('li');
		listItem.innerText = result;
		suggestions.appendChild(listItem);
	});

	allItems = document.querySelectorAll('.suggestions ul li');
	allItems.forEach((item) => {
		item.addEventListener('mouseover', () => {
			highlightSuggestion(item);
		});

		item.addEventListener('click', useSuggestion);
	});
}

function reset() {
	suggestions.innerHTML = '';
}
function useSuggestion(e) {
	input.value = e.target.innerText;
}

function highlightSuggestion(hoveredItem) {
	console.log('highlight item');
	const allItems = document.querySelectorAll('.suggestions ul li');
	allItems.forEach((item) => {
		item.classList.remove('highlight');
	});

	hoveredItem.classList.add('highlight');
}

input.addEventListener('keyup', searchHandler);

