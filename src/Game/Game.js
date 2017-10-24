'use strict';

Engine.Core.on('init', () => {
	let test = new Engine.Actors.Actor({
		position: { x: 200, y: 200 }
	});

	test.addComponent(new Engine.Components.GeometrySprite({ 
		type: 'circle',
		fillColor: '#ffa200',
		strokeColor: '#0033ff',
		strokeWidth: 2,
		radius: 100
	}));
	
	test.addComponent(new Engine.Components.GeometrySprite({
		fillColor: '#ff0000',
		strokeColor: '#ff00ff',
		type: 'rectangle',
		strokeWidth: 6,
		width: 200,
		height: 200,
	}));
	
	test.addComponent(new Engine.Components.GeometrySprite({
		position: { x: 400, y: 0 },
		strokeColor: '#00ff00',
		strokeWidth: 10,
		type: 'line',
		moveX: 200,
		moveY: 0,
	}));
	
});