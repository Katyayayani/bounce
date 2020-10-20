function bounce(mr,fr) {
   
    if(abs(mr.x-fr.x)<mr.width/2+fr.width/2 && abs (mr.y-fr.y)<mr.height/2+fr.height/2){
        
        return true   
      }
      else{
        return false
      }

}


