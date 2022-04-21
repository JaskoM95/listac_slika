$(document).ready (function () {

    var holder = $ ('#holder');
    var current =1; 
    var loop;

    loop = setInterval (sljedeca,4000) ;


  

 function sljedeca () {

      
    current ++;

    if (current==6) {
        current=1;
    }

  
    

    
    holder.append ('<img src="images/'+current+'.jpg"></img>'); 
    holder.animate ({

        'margin-left' : '-=1000px' 


        





    },1500
    
    )

}




});