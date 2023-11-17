function updateColorList(selectedColor) {
	const listItems = document.querySelectorAll('#colorList li');
	const selectedRgbColor = hexToRgb(selectedColor);

	
	
	
	listItems.forEach(item => {
		const colorBox = item.querySelector('.color-box');
		if (colorBox.style.backgroundColor === selectedRgbColor) {
			//highlight the selected color
			item.style.backgroundColor = 'white';
			item.style.color = 'black';
			// and shade the border of the color box to contrast
			colorBox.style.border = '1px solid black';
		
		} else {
			item.style.backgroundColor = 'rgba(119,130,145,0.0)';
			item.style.color = 'white';
			
			colorBox.style.border = '1px solid white';
			// console.log(item.querySelector('.color-box'));
			
		}
	});
}