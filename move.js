var startMatrix = [];
var startElement = [];
var touchStart = [];
var positions = [];
var central_area = 35.0;

var verifica_zona_punto = "centro";

function distanzaTraDuePunti2(px1,py1,px2,py2){
    
    var px = px2-px1;
    var py = py2-py1;
    
    var distpunti = Math.sqrt(Math.pow(px,2) + Math.pow(py,2));
    
    return distpunti;
}

function getCenterImage(element){
    
    //var width = document.getElementById("mov").getAttribute("width")/2;
    //var height = document.getElementById("mov").getAttribute("height")/2;
    
    var width = element.firstChild.width.baseVal.value;
    var height = element.firstChild.height.baseVal.value;
    
    if(width >= height){
        return width*central_area/100.0;
    }
    else return height*central_area/100.0;
    
}

function touchstart(evt) {
    
    if(evt.changedTouches != undefined){
        
        for (var currTouchId = 0; currTouchId < evt.changedTouches.length; currTouchId++ ) {
            
	    var currTouch = evt.changedTouches[currTouchId];
            //alert(currTouch.identifier);
            touchStart[currTouch.identifier] = currTouch;
            //touchStart[currTouch.identifier]={'x1':currTouch.pageX, 'y1':currTouch.pageY};
            console.log(currTouch);
            console.log(currTouch.identifier);
            
            //startMatrix = this.transform.baseVal.getItem(0).matrix;
            //console.log("prima");
            //console.log(startMatrix);
            //console.log(this.transform);
            
            //-----prova rotate in caricamento
            //var translate = this.transform.baseVal.getItem(0).matrix;
            //var rotate = this.transform.baseVal.getItem(1).matrix;
            
            //var t_r = this.transform.baseVal.consolidate();
            
            //startMatrix = translate.multiply(rotate);
            //startMatrix[currTouch.identifier] = t_r.matrix;
            
            startElement[currTouch.identifier]=this; //oggetto iniziale
            
            var svgElement= document.getElementsByTagName("svg").item(0);
            //var appoggio_matrice = svgElement.createSVGMatrix().multiply(startMatrix[currTouch.identifier]);
            //startMatrix[currTouch.identifier] = appoggio_matrice;

            startMatrix[currTouch.identifier] = svgElement.createSVGMatrix().multiply(this.transform.baseVal.consolidate().matrix);
            
            //console.log("seconda");
            //console.log(startMatrix);
            
            //var startMatrixVett = {'a':startMatrix.a,'c':startMatrix.c ,'e':startMatrix.e, 'b':startMatrix.b, 'd':startMatrix.d, 'f':startMatrix.f};
            
            //var cx = startMatrix[currTouch.identifier].e;
            //var cy = startMatrix[currTouch.identifier].f;
            //console.log("centro("+cx+","+cy+")");
            console.log("centro("+startMatrix[currTouch.identifier].e+","+startMatrix[currTouch.identifier].f+")");
            //var x1 = currTouch.pageX;
            //var y1 = currTouch.pageY;
            //console.log("T1("+x1+","+y1+")");
            console.log("T1("+currTouch.pageX+","+currTouch.pageY+")");
            //in_zone_flag=0;
            
            //prova json file
            /*
             if(y1 > special_areas.top && x1 > special_areas.left && x1 < special_areas.width && y1 < special_areas.height){
             in_zone_flag = 1;
             }else in_zone_flag=0;
             */
        }
        evt.preventDefault();
    }

}

function touchmove(evt) {
    
    if(evt.changedTouches != undefined){
        
        for(var currTouchId = 0; currTouchId < evt.changedTouches.length; currTouchId++ ){
            
            var currTouch = evt.changedTouches[currTouchId];
            var currTouchStart = touchStart[currTouch.identifier];
            
            console.log(currTouch);
            console.log(currTouch.identifier);
            console.log(currTouchStart);

            //var imageElement= document.getElementsByTagName("image");
            //var id_group = this.id;
            //console.log("id_group");
            //console.log(id_group);
            //var indice = id_group.charAt(id_group.length-1);
            //console.log(id_group.charAt(id_group.length-1));
            //var id_image = imageElement[parseInt(indice-1)].id;
            //console.log("immagine -----> "+id_image);
            
            /*
            //var altro = document.getElementById("mov");
            //console.log(altro);
            //var imageElement= document.getElementsByTagName("id_group");
            //console.log("imageElement");
            //console.log(imageElement);
            //var id_image = imageElement.item(0).nodeValue;
            //console.log("id_image")
            //console.log(id_image);
            */
            var x1 = currTouchStart.pageX;
            var y1 = currTouchStart.pageY;
            
            var cx = startMatrix[currTouch.identifier].e;
            var cy = startMatrix[currTouch.identifier].f;
            
            var x2 = currTouch.pageX; //devo aggiornare x2 ed y2 per calcolare le distanze tra i punti nelle funzioi che seguono
            var y2 = currTouch.pageY; //per avere le dimensioni dei cateti sui quali poi calcolare l'angolo di inclinazione
            
            console.log("TOUCH MOVE");
            
            var a = distanzaTraDuePunti2(cx,cy,x1,y1);

            var image = startElement[currTouch.identifier];
            var center_image = getCenterImage(image);
            var id_group = image.id;
            console.log(id_group);
            //var b = distanzaTraDuePunti2(cx,cy,x2,y2);
            //var c = distanzaTraDuePunti2(x1,y1,x2,y2);
            
            console.log("centro("+cx+","+cy+") T1("+x1+","+y1+") T2("+x2+","+y2+")");
            
            //if( (x1 < cx+20 && x1 > cx-20) && (y1 < cy+20 && y1 > cy-20) ){
            
            var svgElement= document.getElementsByTagName("svg").item(0);
            var appoggio_matrice = svgElement.createSVGMatrix().multiply(startMatrix[currTouch.identifier]);
            startMatrix[currTouch.identifier] = appoggio_matrice;

            if(a < center_image){ //cerchio; impostazione variabile --
                
                var newTransform = svgElement.createSVGMatrix()
                .translate(currTouch.pageX - currTouchStart.pageX, currTouch.pageY - currTouchStart.pageY)
				.multiply(startMatrix[currTouch.identifier]);
                
                if(verifica_zona_punto == "centro"){
                
                    var c_move_x = newTransform.e;
                    var c_move_y = newTransform.f;
                    verifica_zona(id_group, c_move_x, c_move_y);
                }
                else verifica_zona(id_group, x2, y2);
                
                //var newTransform = startMatrix.translate(currTouch.pageX - currTouchStart.pageX, currTouch.pageY - currTouchStart.pageY);

                //verifica_zona(id_image, cx, cy);
                
            }
            else{
                //console.log("PIPPO");
                //console.log("R1: "+ (x2-cx) + ","+ (y2-cy));
                //console.log("R2: "+ (x1-cx) + ","+ (-y1+cy));
                
/*
                var newTransform =
			startMatrix
				.translate(currTouch.pageX - currTouchStart.pageX, currTouch.pageY - currTouchStart.pageY)
				.translate(x1-cx,y1-cy)
				.rotateFromVector(x2-cx, y2-cy)
				.rotateFromVector(x1-cx, -y1+cy)
				//.rotate(provaAlpha)
				.translate(-x1+cx,-y1+cy);
*/

                var newTransform = svgElement.createSVGMatrix()
				.translate(currTouch.pageX - currTouchStart.pageX, currTouch.pageY - currTouchStart.pageY)
				.translate(x1,y1)
				.rotateFromVector(x2-cx, y2-cy)
				.rotateFromVector(x1-cx, -y1+cy)
				.translate(-x1,-y1)
				.multiply(startMatrix[currTouch.identifier]);
                
                if(verifica_zona_punto == "centro"){

                    var c_move_x = newTransform.e;
                    var c_move_y = newTransform.f;
                    verifica_zona(id_group, c_move_x, c_move_y);
                }
                else verifica_zona(id_group, x2, y2);
                //verifica_zona(id_image, cx, cy);
                
            }
            
            var appTransform = image.transform.baseVal.getItem(0);
            appTransform.setMatrix(newTransform);
            image.transform.baseVal.initialize(appTransform);
            
        }
        evt.preventDefault();
    }
    //evt.preventDefault();
}

function touchend(evt) {
    
    console.log("");
    console.log("");
   // evt.preventDefault();
}

