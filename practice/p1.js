var clicked=true;
function click_menu(){
    if(clicked){
        $(".menubar").css("transform","translateX(0px)");
        $(".menubar").css("border-radius","0 0 300px 0");
        $(".pre_icon").css("transform","translateX(350px)");
        $(".post_icon").css("opacity","1");
        $(".pre_opacity").css("opacity","0");

        // 메뉴 위,아래 라인 가운데로 흡수효과
        $(".line--1").css(
            "transform","translateY(10px) rotate(30deg)");
        $(".line--3").css(
            "transform","translateY(-10px) rotate(-30deg)");
        
        clicked=false;
    }
    else{
        $(".menubar").css("transform","translateX(-500px)");
        $(".menubar").css("border-radius","0 0 0 0");
        $(".pre_icon").css("transform","translateX(0px)");
        $(".pre_opacity").css("opacity","1");
        
        $(".post_icon").css("opacity","0");
        // 메뉴 위,아래 라인 원래대로
        $(".line--1").css(
            "transform","translateY(0px) rotate(0deg)");
            $(".line--3").css(
                "transform","translateY(0px) rotate(0deg)");
        clicked=true;
    }

}