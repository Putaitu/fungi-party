const COLOR_COMPONENT_POINTS = 10;
const COLOR_COMPONENT_DIVIDEND = 5;

class Game
{
	// the constructor
	constructor()
	{
		this.buttons = {
			r: document.querySelector('.input-r'),
			g: document.querySelector('.input-g'),
			b: document.querySelector('.input-b'),
			submit: document.querySelector('.input-submit')
		};
		
		this.currentScoreDisplay = document.querySelector('.current-score');
		
		this.currentCanvas = document.querySelectorAll('.current-canvas td');
		this.currentTarget = document.querySelectorAll('.current-target td');
		
		this.currentTargetIndex = 0;
		this.currentScore = 0;
		
		this.initButtons();
		this.draw();
	}
	
	// Event: Click R button
	onClickR() {
		let pixel = this.currentCanvas[this.currentTargetIndex];
		let color = pixel.dataset.color.split(',');
		color[0] = parseFloat(color[0]) + (1/COLOR_COMPONENT_DIVIDEND);
		if (color[0] > 1){color[0] = 1;}
		pixel.dataset.color = color.join(',');
		this.draw();
	}
	
	// Event: Click G button
	onClickG() {
		let pixel = this.currentCanvas[this.currentTargetIndex];
		let color = pixel.dataset.color.split(',');
		color[1] = parseFloat(color[1]) + (1/COLOR_COMPONENT_DIVIDEND);
		if (color[1] > 1){color[1] = 1;}
		pixel.dataset.color = color.join(',');
		this.draw();
	}
	
	// Event: Click B button
	onClickB() {
		let pixel = this.currentCanvas[this.currentTargetIndex];
		let color = pixel.dataset.color.split(',');
		color[2] = parseFloat(color[2]) + (1/COLOR_COMPONENT_DIVIDEND);
		if (color[2] > 1){color[2] = 1;}
		pixel.dataset.color = color.join(',');
		this.draw();
	}
	
	// Event: Click submit button
	onClickSubmit() {
		// Input color
		let iCol = this.currentCanvas[this.currentTargetIndex].dataset.color.split(',');
		
		// Target color
		let tCol = this.currentTarget[this.currentTargetIndex].dataset.color.split(',');
		
		let diff = Color.compare(iCol[0], iCol[1], iCol[2], tCol[0], tCol[1], tCol[2]);
		
		this.currentScore += Math.round((COLOR_COMPONENT_POINTS * 3) - (diff * COLOR_COMPONENT_POINTS));
		
		console.log(this.currentScore);
		
		this.currentTargetIndex++;
		
		if(this.currentTargetIndex >= this.currentTarget.length){
			//TODO end the round
			alert('Your score was ' + this.currentScore + ' out of ' + (COLOR_COMPONENT_POINTS * 3 * this.currentTarget.length));
			
			// Make sure the index is not out of bounds
			this.currentTargetIndex = this.currentTarget.length - 1;
		}
		
		this.draw();
	}
	
	// Initialize the buttons
	initButtons()
	{
		this.buttons.r.addEventListener('click', () => { this.onClickR(); });
		this.buttons.g.addEventListener('click', () => { this.onClickG(); });
		this.buttons.b.addEventListener('click', () => { this.onClickB(); });
		this.buttons.submit.addEventListener('click', () => { this.onClickSubmit(); });
		
		document.addEventListener('keyup', (e) => {
			switch(e.which)
			{
				case 13: case 32: //enter or space	
					this.onClickSubmit();
					break;
				
				case 81: //Q
					this.onClickR();
					break;
				
				case 87: //W
					this.onClickG();
					break;
				
				case 69: //E
					this.onClickB();
					break;
			}
			
		});
	}
	
	// Draw
	draw()
	{
		
		// Draw the target pixels
		for (let i=0; i<this.currentTarget.length; i++)
		{
			let pixel = this.currentTarget[i];
			let color = pixel.dataset.color.split(',');
			pixel.style.backgroundColor = '#' + Color.toHex(color[0], color[1], color[2]);
			pixel.classList.toggle('current', i === this.currentTargetIndex);
		}
		
		// Draw the canvas pixels
		for (let i=0; i<this.currentCanvas.length; i++)
		{
			let pixel = this.currentCanvas[i];
			let color = pixel.dataset.color.split(',');
			pixel.style.backgroundColor = '#' + Color.toHex(color[0], color[1], color[2]);
			pixel.classList.toggle('current', i === this.currentTargetIndex);
		}		
		
		// Display the current score
		this.currentScoreDisplay.innerHTML = this.currentScore;
	}
}

class Color
{
	/**
	 * Converts RGB values to HEX
	 *
	 * @param {Number} r Red
	 * @param {Number} g Green
	 * @param {Number} b Blue
	 *
	 * @returns {String} HEX color
	 */
	static toHex(r, g, b)
	{
		r = parseFloat(r);
		g = parseFloat(g);
		b = parseFloat(b);
		
		r = Math.round(r*255).toString(16);
		g = Math.round(g*255).toString(16);
		b = Math.round(b*255).toString(16);
		
		if(r === '0') { r = '00'; }
		if(g === '0') { g = '00'; }
		if(b === '0') { b = '00'; }
		
		return r + g + b;
	}
	
	/**
	 * Compares 2 colors
	 */
	static compare(r1, g1, b1, r2, g2, b2)
	{
		let diffR = Math.abs(r1 - r2);
		let diffG = Math.abs(g1 - g2);
		let diffB = Math.abs(b1 - b2);
		
		return diffR + diffG + diffB;
	}
}	

new Game();	