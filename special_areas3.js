var myAction = function(area,imageId) {
	// fa qualcosa quando l'immagine "imageId" entra nell'area "area"
	// ....
}

var areaA1 = {top:0, left:0, width:100, height:100};
var areaA2 = {top:300, left:0, width:100, height:100};

var special_area_groups = [
{
  areas: [ areaA1, areaA2 ],
  onenter: function(area,imageId){
	// ....
  },
  onmove: function(area,imageId){
	// ...
  },
  onleave: function(imageId){
	// ...
  }
},

{
  areas: [ {top:200, left:200, width:300, height:300} ],
  onenter: function(area,imageId){
	// ....
  },
  onmove: function(area,imageId){
	// ...
  },
  onleave: function(area,imageId){
	// ...
  }
}];

console.log("special area");
console.log(special_areas);
console. log(special_areas.length);

for (i in special_areas) {
        console.log(special_areas[i].top,special_areas[i].left,special_areas[i].width,special_areas[i].height);
}
//console.log(position);
