

function zoom(id, area){
    
    var id_zoom_pan = document.getElementById("zoom_pan");
    console.log("ID-ZOOM-PAN");
    console.log(id_zoom_pan);
    
    var image_list = readJSON("json_image_file.json");
    //var sub_string = id.substr(7);
    
    var left = area.left;
    
    var image = document.getElementById(id).firstChild;
   
	 /*
	 console.log("IMAGE_ZOOM");
    console.log(id_image.id);
    console.log("WIDTH");
    console.log(id_image.width.baseVal.value);
    console.log(id_image.getAttribute("xlink:href"));
	 */
	 
	 var image_width = image.width.baseVal.value;
	 var image_height = image.height.baseVal.value;
    
    var svgElement_width = document.getElementsByTagName("svg").item(0).width.baseVal.value;
    var svgElement_height = document.getElementsByTagName("svg").item(0).height.baseVal.value;
	 
	 var width_pan = (svgElement_width/2) - 200 ;
    var height_pan = (svgElement_height) - 100;
   
	 var alpha = 90;
	 
    if(left < svgElement_width/2){
        
        //var translate_x = top + 50;
        //var translate_y = left + 50;
        
        var translate_x =  150 + width_pan;
        var translate_y =  50;

        //var s = info_image(id);

    }
    else{
        
        var translate_x = (svgElement_width/2) + 50;
        var translate_y = 50 + height_pan;
		  alpha = -alpha;
		  var s = "";
    }
    //var matrix_element = document.getElementById(id).transform.baseVal.getItem(0).matrix;
    //console.log(matrix_element);
    
    //var translate_x =  50;
    //var translate_y =  50;
    
    //var scale = id_element.scale(2);
	//"transform=\"rotate("+alpha+")\"

 
    
    
    //id_zoom_pan.insertAdjacentHTML("beforeend", "<g id=\""+id_image.id+"_g_zoom\" transform=\"translate("+translate_x+","+translate_y+") scale("+value_scale+")\"><image id=\""+id_image.id+"_zoom\" width="+"\""+id_image.width.baseVal.value+"\" height=\""+id_image.height.baseVal.value+"\" xlink:href=\""+id_image.getAttribute("xlink:href")+"\" transform=\"rotate("+alpha+","+image_width/2+","+image_height/2+")\"/><text x=\""+(translate_x - id_image.width.baseVal.value)+"\" y=\""+(id_image.height.baseVal.value + translate_y)+"\" style=\"font-size:40;font-weight:bold;fill:black\">"+s+"</text></g>");
	 
	 id_zoom_pan.insertAdjacentHTML("beforeend", "<g id=\""+image.id+"_g_zoom\" transform=\"translate("+translate_x+","+translate_y+") rotate("+alpha+")\"><image id=\""+image.id+"_zoom\" width="+"\""+height_pan+"\" height=\""+width_pan+"\" xlink:href=\""+image.getAttribute("xlink:href")+"\"/></g>");
}


function remove_zoom_pan(id, area){
	
	var id_image = document.getElementById(id).firstChild.id;
	var str = id_image+"_g_zoom";
	remove(str);

}
