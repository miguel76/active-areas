

function verifica_zona(id ,cx, cy){
    
    console.log("verifica_Zona---------> "+id+" "+cx+" "+cy);
    //console.log(special_areas[0]);
    //console.log(special_areas[1]);
    //console.log(special_areas.length);
    console.log(id);
    
    for(var i=0 ; i<special_areas.length ; i++){
    
        if(cx > special_areas[i].left && cy > special_areas[i].top && cy < special_areas[i].bottom && cx < special_areas[i].right){
        
            if(position[id] != special_areas[i]){
                
                console.log("AREEEEEEEEEEE");
                console.log(special_areas[i]);
                
                if(position[id] != null){
                    
                    position[id].onleave(id);
                    special_areas[i].onenter(id);
                    
                }
                else special_areas[i].onenter(id);
                
                position[id] = special_areas[i];
                
            }
            else position[id].onmove(id);
            
        return;
        
        }
        
    }
    
    if(position[id] != null){
        position[id].onleave(id);
        position[id]=null;
    }

}


        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    
