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
        $(".menu1").children('img').attr("src","../asset/images/mobile_button3.png");
        
        
        

        if($(this).children('ul').css('display')=="none"){
            $(this).children('ul').slideDown(300);
            $(this).children('img').attr("src","../asset/images/mobile_button4.png");
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


  
    $(window).scroll(function()
    
    {setTimeout(function(){
        var height1 = $(".main").outerHeight(true);
        var scrollTop = $(window).scrollTop();
        if(scrollTop>height1){
            $(".fixed").fadeIn(300);
        }else{
            $(".fixed").fadeOut(300);
        }
    },300);});
    $(window).scroll(function()
    
    {setTimeout(function(){
        var height1 = $(".main").outerHeight(true);
        var scrollTop = $(window).scrollTop();
        if(scrollTop>height1){
            $(".fixed").fadeIn(300);
        }else{
            $(".fixed").fadeOut(300);
        }
        },100);
    });
    $('.sub_object1').click(function(){
        $('.mapBox1').css("z-index","1");
        $('.mapBox2').css("z-index","0");
        $('.sub_object1').css("color","#141514");
        $('.sub_object2').css("color","#5d555180");
        $('.sub_object_underbar').css("left","0%");
        $('.sub_object1').css("background-color","#fff");
        $('.sub_object2').css("background-color","#efefef");
        $('.farminfo1').css("z-index","1");
        $('.farminfo2').css("z-index","0");
    })
    $('.sub_object2').click(function(){
        $('.mapBox2').css("z-index","1");
        $('.mapBox1').css("z-index","0");
        $('.sub_object1').css("color","#5d555180");
        $('.sub_object2').css("color","#141514");
        $('.sub_object_underbar').css("left","50%");
        $('.sub_object2').css("background-color","#fff");
        $('.sub_object1').css("background-color","#efefef");
        $('.farminfo1').css("z-index","0");
        $('.farminfo2').css("z-index","1");
    })
});
