var lnum = -300;
var clicknum=1;
var barnum = 0;

function right_button() {   
    var a = $(".card"); 
    var bar = $(".bar");
    if(barnum<=90){
        lnum-=300;
        barnum += 30;
        a.css("transform","translate("+lnum+"px,0)");
        bar.css("transform","translate("+barnum+"px");
    }
    
    
    // var list = ["c1","c2","c3","c4","c5"];
    // for (var i=0; i<list.length; i++){
    //     var tmp = $("." + list[i]);
    //     tmp.css("transform","translate(-100px,0)");     
    // }
}

function left_button() {    
    var a = $(".card");
    var bar = $(".bar"); 
    if(barnum>=30){
        lnum+=300;
        barnum-=30;
        a.css("transform","translate("+lnum+"px,0)");
        bar.css("transform","translate("+barnum+"px");
    }
    
    // var list = ["c1","c2","c3","c4","c5"];
    // for (var i=0; i<list.length; i++){
    //     var tmp = $("." + list[i]);
    //     tmp.css("transform","translate(+100px,0)");
    // }

}
function clicked_search(){
    if(clicknum==1){
        // $("#menu").css("transform","rotate(90deg)");
        $(".popup").css("opacity","0.8");
        clicknum=2;
    }
    else{
        // $(".popup").css("z-index","-1");
        $(".popup").css("opacity","0");
        // $("#menu").css("transform","rotate(0deg)");
        clicknum=1;
    }
        
    
}
// setInterval(left_button,3000);