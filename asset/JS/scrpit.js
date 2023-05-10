$(document).ready(function(){
    $(".mobile_button").click(function(){
        $(".menu").css("z-index","6");
        $(".accordianWarp").css("display","block");
    });
    $(".mobile_button2").click(function(){
        $(".menu").css("z-index","0");
        $(".accordianWarp").css("display","none");
        $(".menu1").children('ul').slideUp(300);
    });
    $(".fixed").click(function(){
        $(".menu").css("z-index","6");
        $(".accordianWarp").css("display","block");
    });
    $(".menuLogo").click(function(){
        $(".menu").css("z-index","0");
        $(".accordianWarp").css("display","none");
        $(".menu1").children('ul').slideUp(300);
        
    });
    $('html').click(function(event) {
        const clickedElement = event.target;
        console.log(clickedElement);
        
    });
    $(".menu1").click(function(){
        $(".menu1").children('ul').stop().slideUp(300);
        $(this).children('img').css("transform","rotate(90deg)");
        $(".menu1").children('img').attr("src","asset/images/mobile_button3.png");
        
        
        

        if($(this).children('ul').css('display')=="none"){
            $(this).children('ul').slideDown(300);
            $(this).children('img').attr("src","asset/images/mobile_button4.png");
            $(".menu1").children('img').css("transform","rotate(90deg)");
            $(this).children('img').css("transform","rotate(0deg)");
        }
    });
    $('.menu2>a').click(function(e){
        e.stopPropagation();
    });
    var scrollheight =  Math.max( $(".wapper").scrollHeight, $(".wapper").offsetHeight, 
                        window.clientHeight, window.scrollHeight, window.offsetHeight )
    $(window).resize(function()
        {setTimeout(function(){
            $("filter2").css("height")== scrollheight;
        },100);  
    })
    {setTimeout(function(){
        $("filter2").css("height")== scrollheight;
    },100)};

    var height2 = $(".headWrap").height();
    $(".filter").css("height",height2);

  
    $(window).scroll(function()
    
    {setTimeout(function(){
        var height1 = $(".main").outerHeight(true);
        var scrollTop = $(window).scrollTop();
        if(scrollTop>height1){
            $(".fixed").fadeIn(300);
        }else{
            $(".fixed").fadeOut(300);
        }
        },300);
    });
    // let timerId;
    // $(window).scroll(function() {
    //     // 타이머가 실행 중인 경우 이전 타이머를 취소합니다.
    //     clearTimeout(timerId);
    // $(window).scroll(function()
    // {setTimeout(function(){
    //     console.log("test")
    // },300);});
    //     // 0.3초 후에 함수를 실행합니다.
    //     timerId = setTimeout(function() {
    //       // 여기에 실행하려는 코드를 작성합니다.
    //       console.log("test");
    //     }, 300);
    //   });
});
