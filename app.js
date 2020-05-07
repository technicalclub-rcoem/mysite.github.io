Stage(function(stage){

	var number=0;
	stage.viewbox(50,50).pin('handle',-0.5);


	stage.on('click',function(){

		// console.log("num :"+number);

		Stage.image('b').appendTo(stage).pin('handle',0.5);
		// number++;
	});

});

Stage({
	textures :{
		'b' : Stage.canvas(function(ctx){
			ratio = 20;
			this.size(10,10,ratio);
			ctx.scale(ratio,ratio);

			ctx.moveTo(0,0);
			ctx.lineTo(10,10);

			ctx.moveTo(10,0);
			ctx.lineTo(0,10);
			ctx.strokeWidth = 1;
			ctx.stroke();
		})
	}
});