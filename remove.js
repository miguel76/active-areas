function remove(id){
    
    //var parent = document.getElementById(id).parentNode;
    //console.log(parent_image);
   
	 var child = document.getElementById(id);
    var parent = child.parentNode;
	 
    parent.removeChild(child);
    
}

