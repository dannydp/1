//http://forum.jscourse.com/t/15-zadanie-dom/691
/*Релизовать функцию createList(listData, listContainer, itemContainer), возвращаюшую узел списка. 
Использовать innerHTML нельзя. Второй и третий аргументы не обязательные. 
Значения по умолчанию для них - ul и li. listData - массив. 
listData Может содержать как элементы (текст), так и массивы элементов. 
Глубина вложенности массивов любая.*/

function isArray(arg) {
	return Object.prototype.toString.call(arg) === '[object Array]';
}

function createList(listData, listContainer, itemContainer) {
	listContainer = listContainer || "ul";
	itemContainer = itemContainer || "li";
	var result = document.createElement(listContainer);
	var listItemConteiner;
	for (var i = 0; i < listData.length; i += 1) {
		if (isArray(listData[i])) {
			listItemConteiner.appendChild(createList(listData[i]));
		} else {
			listItemConteiner = document.createElement(itemContainer);
			listItemConteiner.innerText = listData[i];
			result.appendChild(listItemConteiner);
		}
	}

	return result;
}

createList(['мясо', 'рыба']);
createList(['мясо', ['яблоки', 'бананы']], 'ol');
createList(['мясо', ['яблоки', 'бананы']], 'div', 'div');