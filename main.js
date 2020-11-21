
var slidenum = 5;
var imgsrc;
var roomname = [{name:"첨단강의실", num:"3공학관 304"},{name:"IC-PBL실", num:"4공학관 416"},{name:"MAROON", num:"클러스터 506"},{name:"PURPLE", num:"클러스터 509"}];
// setInterval(() => {
//     slide_right();
// }, 3000);
function slide_left(){          
    
    if(--slidenum<5){slidenum=8;}
    $("#card1").css("opacity","0.1");          
    setTimeout(() => {
        $("#card1").css("opacity","1");    
        imgsrc = "newimg/room" + slidenum + ".png";        
        document.getElementById("card1").src = imgsrc;
        document.getElementById("card-text-p-description").innerHTML = roomname[slidenum-5].num;    
        document.getElementById("card-text-p-name").innerHTML = roomname[slidenum-5].name;       
    }, 300);
    
    
}
function slide_right(){            
    if(++slidenum>8){slidenum=5;}
    $("#card1").css("opacity","0.1");          
    setTimeout(() => {
        $("#card1").css("opacity","1");    
        imgsrc = "newimg/room" + slidenum + ".png";        
        document.getElementById("card1").src = imgsrc;
        document.getElementById("card-text-p-description").innerHTML = roomname[slidenum-5].num;    
        document.getElementById("card-text-p-name").innerHTML = roomname[slidenum-5].name;       
    }, 300);
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
function login(){
    alert(document.getElementById("input_1").value);
    // if(document.getElementById("input_1").value ==""){
    //     alert("Please insert blank");
    // }
}


function topmenu_click(num){    
    for (let index = 1; index < 5; index++) {
        var li = "#li" + index +"";
        var dli = ".topmenu-li" + index;
        $(dli).css("display","none");        
        $(li).css("color","rgb(68, 100, 117)");
        $(li).css("backgroundColor","#E6E6E6");
    }
    var li = "#li" + num;
    var dli = ".topmenu-li" + num;
    $(dli).css("display","flex");        
    $(li).css("backgroundColor","rgb(68, 86, 117)");
    $(li).css("color","#E6E6E6");     
}
function changeimg_campusmap(){   
    const s = document.getElementById('silsa');
    if(s.value == 1){
        document.getElementById('campusmap').src = "newimg/campusmap_silsa.png";
        document.getElementById('silsa').innerText = "안내도보기";
        s. value = 2;
    }
    else{
        document.getElementById('campusmap').src = "newimg/campusmap.png";
        document.getElementById('silsa').innerText = "실사이미지보기";
        s. value = 1;
    }    
    
}
