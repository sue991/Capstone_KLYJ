function slideimg(){
    // $(".card").css("transform","rotate(-90deg) translate(0,-150%)");
    // $(".card").src = 'newimg/hills2.jpg';
    document.getElementById("card12").src = 'newimg/hills2.jpg';
}

function clicked_menu(a){
    if(a==1){$(".menu").css("transform","translateY(0)");}
    else{$(".menu").css("transform","translateY(-100%)");}
}
function verify_input(a){
    var num = ".v" + a.split("_")[1];
    if(document.getElementById(a).value != ""){        
        $(num).css("backgroundColor","#A5DF00")
    }
    else{
        $(num).css("backgroundColor","white")
    }
}