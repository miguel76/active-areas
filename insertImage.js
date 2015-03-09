var d = 0;
var position = new Array();
var border = 100;
var randomOrientation = true;

function insertImage(imageURI){
    
//    var all_images = group;
    var all_images = document.getElementById("all_images");
    var estremo_x = document.getElementById("mainElement").width.baseVal.value-(2*border);
    var estremo_y = document.getElementById("mainElement").height.baseVal.value-(2*border);
    console.log("EX: "+ estremo_x);
    console.log("EY: "+ estremo_y);
    
        var position_x = (Math.random() * estremo_x)+border;
        var position_y = (Math.random() * estremo_y)+border;
       
        d++;
        
        var alpha = randomOrientation ? ((Math.random() * 360) + 0) : 0;

            all_images.insertAdjacentHTML(
		"beforeend",
		"<g id=\"movable"+d+"\" class=\"movable\" transform=\"translate("+position_x+","+position_y+") rotate("+alpha+")\" ontouchstart=\"touchstart(Event)\" ontouchmove=\"touchmove(Event)\" ontouchend=\"touchend(Event)\">"+
//		"<use width='300' height='300' xlink:href='puzzle.svg#foto'/>"+
		"<image transform='translate(-214,-98.5)' width='431.535' height='245' xlink:href='foto.svg'/>"+
//		"<image id=\"mov"+d+"\" x=\""+x+"\" y=\""+y+"\" width="+"\""+images[i].width+"\" height=\""+images[i].height+"\" xlink:href=\""+images[i].URL+"\"/>"+
		"<image id='mov"+d+"' x='-160' y='-85' width='320' height='170' xlink:href='"+imageURI+"'/>"+
		"</g>");
            
            //position.push({id : "mov"+d, area : [0, 0, 0, 0]});
            position["movable"+d] = null;
            //console.log(position[i].id);

		var newElement = document.getElementById("movable"+d);
                newElement.addEventListener('touchstart',touchstart);
                newElement.addEventListener('touchmove',touchmove);
                newElement.addEventListener('touchend',touchend);


}
/*    
    console.log(position);
    
    for (i in position) {
        for (j in position[i]) {
            console.log(position[i]);
            console.log(j + " = " + position[i][j]);
        }
    }
*/
  
/*
function getImage(){

var request = new XMLHttpRequest();
request.open("GET", "json_image_file.json", false);
    request.send(null);
var my_JSON_object = JSON.parse(request.responseText);
var images = my_JSON_object.result;
}
*/

var imageCount = 0;

function loadImage(){
    
	var file = 'images/image'+imageCount+'.uri';

    var request = new XMLHttpRequest();
    request.open('GET', file, false);
    request.send();
    
    if (request.status == 200){
        insertImage(request.responseText);
        imageCount++;
    }
};

