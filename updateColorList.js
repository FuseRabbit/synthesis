function updateColorList(selectedColor) {
	const listItems = document.querySelectorAll('#colorList li');
	const selectedRgbColor = hexToRgb(selectedColor);
	
	listItems.forEach(item => {
		if (item.querySelector('.color-box').style.backgroundColor === selectedRgbColor) {
		item.style.backgroundColor = 'white';
		item.style.color = 'black';
		} else {
			item.style.backgroundColor = '';
			item.style.color = '#fff';
		}
	});
}