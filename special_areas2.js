var myAction = function(area,imageId) {
	// fa qualcosa quando l'immagine "imageId" entra nell'area "area"
	// ....
}

var special_areas = [{

top:0, left:0, width:100, height:100,

onenter: function(id){
	myAction(this,id);
},
onmove: function(id){
    
                     var id_image = document.getElementById(id).firstChild.id;
                     console.log(id_image +" mi sto muovendo all'interno della zona: ");//+special_areas[i].top,special_areas[i].left,special_areas[i].width,special_areas[i].height);
},
onleave: function(id){
    
    console.log("sono uscito");
    //console.log("img " +position[i].id+" zona:"+position[i].area); //controllare!!!! attenzione all'id dell'immagine!
}},

{
top:200, left:200, width:300, height:300,

onenter: function(id){
	myAction(this,id);
},
onmove: function(id){
    console.log(this);
    console.log("MI STO MUOVENDO ALL'INTERNO DELLA ZONA 2 ");//+special_areas[i].top,special_areas[i].left,special_areas[i].width,special_areas[i].height);
},
onleave: function(id){
    console.log("SONO USCITO DALLA ZONA 2");
    //console.log("img" + position[i].id+" zona:"+position[i].area);
}
}];

console.log("special area");
console.log(special_areas);
console. log(special_areas.length);

for (i in special_areas) {
        console.log(special_areas[i].top,special_areas[i].left,special_areas[i].width,special_areas[i].height);
}
//console.log(position);
