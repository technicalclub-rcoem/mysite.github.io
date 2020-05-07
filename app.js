Stage(function(stage){

	var number=0;
	stage.viewbox(50,50);

	stage.on('click',function(){

		console.log("num :"+number);
		number++;
	});

});

Stage(
	textures :{
		
	}
);