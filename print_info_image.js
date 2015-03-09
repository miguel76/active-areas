function info_image(id){

	var image_list = readJSON("json_image_file.json");
	//console.log("imagelist -----");
	console.log(image_list);

	var sub_string = id.substr(7);
	//console.log(sub_string);
	//console.log("indice");
	//console.log(indice);
	var str = ("INFO IMAGE "+id+": "+image_list[parseInt(sub_string)-1].info).toString();//.fontsize(4);
	
	//var s = new String(str);
	//var c = s.fontsize(1);
	
	//for(var i=0 ; i<s.length; i++){
		
		
	
	//}
	//console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
	//console.log("");
	//console.log("INFO IMAGE "+id+": "+image_list[parseInt(sub_string)-1].info);
	//console.log("");

	return str;//.toUpperCase();
}

