function info_image(id, area){

	var image_list = readJSON("json_image_file.json");
	//console.log("imagelist -----");
	console.log(image_list);

	var sub_string = id.substr(7);
	//console.log(sub_string);
	//console.log("indice");
	//console.log(indice);
	var str = (image_list[parseInt(sub_string)-1].info).toString();//.fontsize(4);
	var left = area.left;
	//var s = new String(str);
	//var c = s.fontsize(1);
	var id_descr = document.getElementById("descr");
	//for(var i=0 ; i<s.length; i++){
	
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
	
	}
		
	id_descr.insertAdjacentHTML("beforeend", "<g id=\""+id+"_g_descr\" transform=\"translate("+translate_x+","+translate_y+") rotate("+alpha+")\"><foreignObject width=\""+height_pan+"\" height=\""+width_pan+"\"><body xmlns=\"http://www.w3.org/1999/xhtml\"><p><h2>"+str+"</h2></p></body></foreignObject></g>");
	
	
	//}
	//console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
	//console.log("");
	//console.log("INFO IMAGE "+id+": "+image_list[parseInt(sub_string)-1].info);
	//console.log("");
	/*
	  <g id="text" transform="rotate(90)">
    <foreignObject width="100" height="400">
      <body xmlns="http://www.w3.org/1999/xhtml">
        <p>Here is a paragraph that requires word wrap</p>
      </body>
    </foreignObject>
    </g>
	*/


	//return str;//.toUpperCase();
}

function remove_descr(id, area){

	var id_element = document.getElementById(id).id;
	console.log(id_element);
	var str = id_element+"_g_descr";
	remove(str);

}






