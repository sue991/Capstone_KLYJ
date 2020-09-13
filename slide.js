var lnum = -600;
var clicknum=1;
var clickmenu=true;
var barnum = 0;
var cardnum=2 

// var tmp = c+(cardnum-1);
// var tmp2 = c+(cardnum+1);
// $(tmp).css("opacity","0.2");
// $(tmp2).css("opacity","0.2");


function right_button() {   
    
    var a = $(".card"); 
    var bar = $(".bar");
    if(barnum<=90){
        cardnum++;
        lnum-=800;
        barnum += 30;
        a.css("transform","translate("+lnum+"px,0)");
        bar.css("transform","translate("+barnum+"px");
        
        $(".c"+cardnum).css("filter","brightness(100%)");
        $(".c"+(cardnum-1)).css("filter","brightness(35%)");
        $(".c"+(cardnum+1)).css("filter","brightness(35%)");
        // $(tmp).css("box-shadow","0px 5px 10px 5px gray");
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
        cardnum-- 
        lnum+=800;
        barnum-=30;
        a.css("transform","translate("+lnum+"px,0)");
        bar.css("transform","translate("+barnum+"px");
        
        $(".c"+cardnum).css("filter","brightness(100%)");
        $(".c"+(cardnum-1)).css("filter","brightness(35%)");
        $(".c"+(cardnum+1)).css("filter","brightness(35%)");
        // $(tmp).css("box-shadow","0px 5px 10px 5px gray");

    }
    
    // var list = ["c1","c2","c3","c4","c5"];
    // for (var i=0; i<list.length; i++){
    //     var tmp = $("." + list[i]);
    //     tmp.css("transform","translate(+100px,0)");
    // }
}

function clicked_search(){
    if(clicknum==1){
        
        $(".popup").css("opacity","0.8");
        clicknum=2;
    }
    else{
        // $(".popup").css("z-index","-1");
        $(".popup").css("opacity","0");
        
        clicknum=1;
    }
}
function clicked_menu(){
    if(clickmenu){
        clickmenu=false;
        $(".menu").css("transform","translateX(0)");
        $(".menuline-1").css("transform","translateY(12px) rotate(45deg) ");
        $(".menuline-2").css("transform","translateY(0px) rotate(-45deg) ");
        $(".menuline-2").css("width","40px");
        $(".menuline-3").css("transform","translateY(20px)");
        
    }
    else{
        clickmenu=true;
        $(".menu").css("transform","translateX(110%)");
        $(".menuline-1").css("transform","translateY(0px) rotate(0deg) ");
        $(".menuline-2").css("transform","translateY(0px) rotate(0deg) ");
        $(".menuline-2").css("width","35px");
        $(".menuline-3").css("transform","translateY(0px)");
    }
    
}



//booking_main
function showcontainer(){
    $(".select_container").css("transform","translateX(0px)");
}
function hidecontainer(){
    $(".select_container").css("transform","translateX(-850px)");
}