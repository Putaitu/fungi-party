'use strict';

Engine.Core.on('init', () => {
	class ColorTile extends Engine.Actors.Actor {
		constructor(config) {
			super(config);
						
			this.addComponent(new Engine.Components.GeometrySprite({
				type: 'rectangle',
				width: 400,
				height: 400,
				fillColor: this.color.getHex()
			}));
		}
	}
	
	for (let i = 0; i < 10; i++)
	{	
		let tile = new ColorTile({
			position: { x: i*(Engine.Graphics.screenWidth/10)+200, y: Engine.Graphics.screenHeight - 200 },
			color: Engine.Math.Color.getRandom()
		});
	}

});