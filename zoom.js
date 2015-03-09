

function zoom(id, area){
    
    var id_zoom_pan = document.getElementById("zoom_pan");
    console.log("ID-ZOOM-PAN");
    console.log(id_zoom_pan);
    
    var image_list = readJSON("json_image_file.json");
    //var sub_string = id.substr(7);
    
    var left = area.left;
    
    var id_image = document.getElementById(id).firstChild;
    console.log("IMAGE_ZOOM");
    console.log(id_image.id);
    console.log("WIDTH");
    console.log(id_image.width.baseVal.value);
    console.log(id_image.getAttribute("xlink:href"));
    
    var svgElement_width = document.getElementsByTagName("svg").item(0).width.baseVal.value;
    var svgElement_height = document.getElementsByTagName("svg").item(0).height.baseVal.value;
    
    if(left < svgElement_width/2){
        
        //var translate_x = top + 50;
        //var translate_y = left + 50;
        
        var translate_x =  150;
        var translate_y =  50;
        var value_scale = 0.5
        var s = info_image(id);

    }
    else{
        
        var translate_x = (svgElement_width/2) + 50;
        var translate_y = 50;
        var value_scale = 2;
        var s = "";
    }
    //var matrix_element = document.getElementById(id).transform.baseVal.getItem(0).matrix;
    //console.log(matrix_element);
    
    //var translate_x =  50;
    //var translate_y =  50;
    
    //var scale = id_element.scale(2);

    var width_pan = (svgElement_width/2) - 50 ;
    var height_pan = (svgElement_height/2) - 50;
    
    
    id_zoom_pan.insertAdjacentHTML("beforeend", "<g id=\""+id_image.id+"_g_zoom\" transform=\"translate("+translate_x+","+translate_y+") scale("+value_scale+")\"> <image id=\""+id_image.id+"_zoom\" width="+"\""+id_image.width.baseVal.value+"\" height=\""+id_image.height.baseVal.value+"\" xlink:href=\""+id_image.getAttribute("xlink:href")+"\"/><text>"+s+"</text></g>");
}



//viewBox=\""+ 50 50 width_pan height_pan +

    /*
    var svgElement = document.getElementsByTagName("svg");
    console.log(svgElement);
    var svgElement_width = document.getElementsByTagName("svg").item(0).width.baseVal.value;
    var svgElement_height = document.getElementsByTagName("svg").item(0).height.baseVal.value;
    
    var id_element = document.getElementById(id).transform.baseVal.getItem(0).matrix;
    console.log(id_element);
    */
    
    
