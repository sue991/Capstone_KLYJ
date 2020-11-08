var slidenum = 5;
var imgsrc;
var roomname = [{name:"대강의실", num:703},{name:"대강당", num:201},{name:"소강의실", num:705},{name:"화상회의실", num:309}];
function slide_right(){                
    if(--slidenum<5){slidenum=8;}
    imgsrc = "newimg/room" + slidenum + ".png";
    document.getElementById("card1").src = imgsrc;
    document.getElementById("card-text-p-description").innerHTML = roomname[slidenum-5].num;    
    document.getElementById("card-text-p-name").innerHTML = roomname[slidenum-5].name;    
    // $(c+ slidenum).css("transform","translateX(-1200px)");    
    // $(c+ (slidenum+1) ).css("opacity","1");    
    // if(slidenum++==5){slidenum=1;}
    // alert(slidenum);
}
function slide_left(){            
    if(++slidenum>8){slidenum=5;}
    imgsrc = "newimg/room" + slidenum + ".png";
    document.getElementById("card1").src = imgsrc;
    document.getElementById("card-text-p-description").innerHTML = roomname[slidenum-5].num;    
    document.getElementById("card-text-p-name").innerHTML = roomname[slidenum-5].name;    
    // $(c+ slidenum).css("transform","translateX(0px)");    
    // $(c+ (slidenum+1) ).css("opacity","0");        
    // if(slidenum--==0){slidenum=4;}
    // alert(slidenum);
}

function clicked_menu(a){
    if(a==1){$(".menu").css("transform","translateY(0)");}
    else{$(".menu").css("transform","translateY(-100%)");}
}
function verify_input(a){    
    var num = ".v" + a.split("_")[1];
    if(a!='input_4'){        
        if(document.getElementById(a).value != "" ){        
            $(num).css("backgroundColor","#0B2161")
        }
        else{
            $(num).css("backgroundColor","white")
        }
    }
    else{
        var option = document.getElementById("selectoption");
        option = option.options[option.selectedIndex].value;        
        if(option!=""){            
            $(num).css("backgroundColor","#0B2161")
        }
    }
    
}