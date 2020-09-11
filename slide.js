var lnum = -600;
var clicknum=1;
var clickmenu=true;
var barnum = 0;
var cardnum=2 
var c = ".c";

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
        var tmp = c+cardnum;
        var tmp2 = c+(cardnum-1);
        var tmp3 = c+(cardnum+1);
        $(tmp).css("opacity","1");
        $(tmp2).css("opacity","0.4");
        $(tmp3).css("opacity","0.4");
        $(tmp).css("box-shadow","0px 5px 10px 5px gray");
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
        var tmp = c+cardnum;
        var tmp2 = c+(cardnum-1);
        var tmp3 = c+(cardnum+1);
        $(tmp).css("opacity","1");
        $(tmp2).css("opacity","0.4");
        $(tmp3).css("opacity","0.4");
        $(tmp).css("box-shadow","0px 5px 10px 5px gray");

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
        $(".menu").css("transform","translateX(0)");
        
        clickmenu=false;
    }
    else{
        $(".menu").css("transform","translateX(100%)");
        clickmenu=true;
    }
    
}