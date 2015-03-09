var special_areas =
[
	{
	top:265, left:0, bottom:465, right:100,
		
		onenter: function(id){

			console.log("sono entrato: "+ id);
			zoom(id, this);
			//info_image(id);
		},
		
		onmove: function(id){

			var id_image = document.getElementById(id).firstChild.id;
			console.log(id_image +" mi sto muovendo all'interno della zona: ");
		},

		onleave: function(id){
			remove_zoom_pan(id, this);
			console.log("sono uscito");
		}
	},

	{
	top:615, left:0, bottom:815, right:100,

		onenter: function(id){

			console.log("sono entrato: "+ id);
			remove(id);
		},
	
		//onenter: remove,
		
		onmove: function(id){

			var id_image = document.getElementById(id).firstChild.id;
			console.log(id_image +" mi sto muovendo all'interno della zona: ");
		},

		onleave: function(id){

			console.log("sono uscito");
		}
	},
	
	{
	top:265, left:1820, bottom:465, right:1920,

		onenter: function(id){
			//var s = 22222222;
			//console.log("SONO ENTRATO: "+ s);
			remove(id);
			//console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");
		},
		
		onmove: function(id){
			console.log(this);
			console.log("MI STO MUOVENDO ALL'INTERNO DELLA ZONA 2 ");
		},
	
		onleave: function(id){
			//remove(id);
			console.log("SONO USCITO DALLA ZONA 2");
			//console.log("img" + position[i].id+" zona:"+position[i].area);
		}
	},

	{
	top:615, left:1820, bottom:815, right:1920,

		onenter: function(id){
	
			zoom(id, this);
			console.log("elimino l'elemento: "+ id);

		},
		
		onmove: function(id){
			console.log("MI STO MUOVENDO ALL'INTERNO DELLA ZONA 2 ");
		},
	
		onleave: function(id){
			remove_zoom_pan(id, this);
			console.log("SONO USCITO DALLA ZONA 2");
			//console.log("img" + position[i].id+" zona:"+position[i].area);
		}
	}
];

	console.log("special area");
	console.log(special_areas);
	console. log(special_areas.length);

	for (i in special_areas) {
		console.log(special_areas[i].top,special_areas[i].left,special_areas[i].bottom,special_areas[i].right);
	}
	//console.log(position);
