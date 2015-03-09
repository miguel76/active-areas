var special_areas = [{

top:100, left:0, bottom:300, right:100,

onenter: function(id){
  
    //console.log("WAREA:"+what_area);
    //position[i].area = [special_areas[what_area].top, special_areas[what_area].left, special_areas[what_area].width, special_areas[what_area].height];
    console.log("sono entrato: "+ id);
    //alert(position[i].id);
    zoom(id, this);
    info_image(id);
                     
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
top:100, left:600, bottom:300, right:700,

onenter: function(id){
var s = 22222222;
console.log("SONO ENTRATO: "+ s);
                     zoom(id, this);
console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");
},
onmove: function(id){
    console.log(this);
    console.log("MI STO MUOVENDO ALL'INTERNO DELLA ZONA 2 ");//+special_areas[i].top,special_areas[i].left,special_areas[i].width,special_areas[i].height);
},
onleave: function(id){
                     //remove(id);
    console.log("SONO USCITO DALLA ZONA 2");
    //console.log("img" + position[i].id+" zona:"+position[i].area);
}},
                     {
                     top:400, left:600, bottom:600, right:700,
                     
                     onenter: function(id){
                     
                     console.log("elimino l'elemento: "+ id);
                     remove(id);
                     
                     },
                     onmove: function(id){
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
        console.log(special_areas[i].top,special_areas[i].left,special_areas[i].bottom,special_areas[i].right);
}
//console.log(position);
