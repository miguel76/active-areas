var special_areas =
[
/*
	{
	top:115, left:0, bottom:315, right:100,
		// 1_A zoom
		onenter: function(id){

			console.log("sono entrato: "+ id);
			zoom(id, this);
		},
		
		onmove: function(id){

			//var id_image = document.getElementById(id).firstChild.id;
			console.log(" mi sto muovendo all'interno della zona: ");
		},

		onleave: function(id){
			remove_zoom_pan(id, this);
			console.log("sono uscito");
		}
	},
	
	{
	top:440, left:0, bottom:640, right:100,
		// 2_A info
		onenter: function(id){

			console.log("sono entrato: "+ id);
			info_image(id,this);
			
		},
	
		//onenter: remove,
		
		onmove: function(id){

			//var id_image = document.getElementById(id).firstChild.id;
			console.log(" mi sto muovendo all'interno della zona: ");
		},

		onleave: function(id){
			remove_descr(id, this);
			console.log("sono uscito");
		}
	},
*/
	{
	top:765, left:0, bottom:965, right:100,
		// 3_A trash
		onenter: function(id){

			console.log("sono entrato: "+ id);
			remove(id);
		},
	
		//onenter: remove,
		
		onmove: function(id){

			//var id_image = document.getElementById(id).firstChild.id;
			console.log(" mi sto muovendo all'interno della zona: ");
		},

		onleave: function(id){
			//remove_zoom_pan(id, this);
			console.log("sono uscito, oggetto eliminato");
		}
	},
	
	{
	top:115, left:1820, bottom:315, right:1920,
		// 1_B trash
		onenter: function(id){
			//var s = 22222222;
			//console.log("SONO ENTRATO: "+ s);
			remove(id);
			//info_image(id, this);
			//console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");
		},
		
		onmove: function(id){
			//console.log(this);
			console.log("MI STO MUOVENDO ALL'INTERNO DELLA ZONA");
		},
	
		onleave: function(id){
			//remove(id);
			//remove_zoom_pan(id, this);
			console.log("SONO USCITO DALLA ZONA 2");
			//console.log("img" + position[i].id+" zona:"+position[i].area);
		}
	}
/*
	
	{
	top:440, left:1820, bottom:640, right:1920,
		// 2_B info
		onenter: function(id){

			console.log("sono entrato: "+ id);
			info_image(id,this);
			
		},
	
		//onenter: remove,
		
		onmove: function(id){

			//var id_image = document.getElementById(id).firstChild.id;
			console.log(" mi sto muovendo all'interno della zona: ");
		},

		onleave: function(id){
			remove_descr(id, this);
			console.log("sono uscito");
		}
	},

	{
	top:765, left:1820, bottom:965, right:1920,
		// 3_B info
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
*/
];

	//console.log("special area");
	//console.log(special_areas);
	//console. log(special_areas.length);

	//for (i in special_areas) {
	//	console.log(special_areas[i].top,special_areas[i].left,special_areas[i].bottom,special_areas[i].right);
	//}
	//console.log(position);
