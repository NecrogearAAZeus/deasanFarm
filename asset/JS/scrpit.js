$(document).ready(function(){


   
    if(width>2560){
        $(".pc_title_BG").css("width","100%");
    }

    $('html').click(function(event) {
        const click = event.target;
        console.log(click);
        
    });
    $(".menu1,.menu4").mouseover(function(){
        if(width>768){
            $(this).children('ul').stop().fadeIn(300,'linear').css({
                                                                    "border-left":"1px solid #ffffff99",
                                                                    "border-bottom":"1px solid #ffffff99",
                                                                    "border-right":"1px solid #ffffff99",
                                                                    "top":"-10px"});
            $(this).children('div').css({"border-radius":"5px 5px 0 0",
                                        "background-color":"#ffffff50",
                                        "box-sizing":"box-sizing:border-box",
                                        "position":"relative",
                                        "border":"1px solid #ffffff99",
                                        "top":"-9px"
                                                                  
                                    });
            $(this).children(".green2").stop().fadeIn(300,'linear');
            $(this).children(".white").stop().fadeIn(300,'linear');
            $('.menu4').children('div').css("border-radius","5px 5px 5px 5px");

            $(this).css("color","#56e28a");
        }
        

    });
    $(".menu1,.menu4").mouseleave(function(){
        if(width>768){
            $(this).children('ul').stop().fadeOut(300,'linear').css({
                "border":"none",
                "top":"-8px"});
            $(this).children('div').css({
                                        "background-color":"transparent",
                                        "box-sizing":"box-sizing:border-box",
                                        "position":"relative",
                                        "border":"none",
                                        "top":"-8px"
                                    });
            $(this).children(".green2").stop().fadeOut(300,'linear');
            $(this).children(".white").stop().fadeIn(300,'linear');

            $(this).css("color","#ffffffcc");
        }
        


    });
    
    $(".menu1").click(function(){
        if(width<=768){
            $(".menu1").children('ul').stop().slideUp(300);
            $(this).children('.size1').css("transform","rotate(90deg)");
            $(".menu1").children('.size1').attr("src","asset/images/mobile_button3.png");
            
            
            

            if($(this).children('ul').css('display')=="none"){
                $(this).children('ul').slideDown(300);
                $(this).children('.size1').attr("src","asset/images/mobile_button4.png");
                $(".menu1").children('.size1').css("transform","rotate(90deg)");
                $(this).children('.size1').css("transform","rotate(0deg)");
            }
        }
    });


    $(".main_bottom").children().children('img').mouseover(function(){
        $(this).next().stop().fadeIn(300);
    });
    $(".social_bottom").children().children('.black').mouseover(function(){
        $(this).next().stop().fadeIn(300);
        $(this).stop().fadeOut(300);
    });
    $(".green").mouseleave(function(){
        $(this).stop().fadeOut(300);
        $(".black").stop().fadeIn(300);
    });


    $('.menu2>a').click(function(e){
        e.stopPropagation();
    });
    var scrollheight =  Math.max( $(".wapper").scrollHeight, $(".wapper").offsetHeight, 
                        window.clientHeight, window.scrollHeight, window.offsetHeight )

    var width = $(window).outerWidth(true);
    var Vh = screen.height;

    $(window).resize(function()
        {setTimeout(function(){
            width = $(window).outerWidth(true);
            Vh = screen.height;
            console.log(width);
            $(".filter2").css("height") ===scrollheight;
            
            if(Vh>1560){
                $(".pc_title_BG").css({
                    "width":"auto",
                    "height":"100%"
            })
            }else{
                $(".pc_title_BG").css({
                    "width":"100%",
                    "height":"auto"
            })
            }

            if(width<=1200 && 768<width){
                $(".info").css("left","180px");
                $(".leisure").css("left","280px");
                $(".market").css("left","380px");
                $(".social2").css("left","480px");
                $(".menu1").css("width","100px");
                $(".menuBox").css("width","100px");
                $(".sub_text").css("width","88.5%");
                $(".footerfont").css({
                    "left":"50%",
                    "width":"400px",
                    "transform":"translate(0%,-50%)"
                });
                
                $(".footerlogo").css({
                    "top":"40%",
                    "left":"8.3%",
                    "margin-left":"50px"
                });
                $(".social_bottom").css({
                    "top":"75%",
                    "right":"91.7%",
                    "margin-right":"-300px"
                });
            };
            if(width>1200){
                $(".info").css("left","200px");
                $(".leisure").css("left","320px");
                $(".market").css("left","440px");
                $(".social2").css("left","560px");
                $(".menu1").css("width","120px");
                $(".menuBox").css("width","120px");
                $(".sub_text").css("width","75%");
                $(".footerfont").css({
                    "left":"50%",
                    "width":"600px",
                    "transform":"translate(-50%,-50%)"
                });
                $(".footerlogo").css({
                    "top":"50%",
                    "left":"8.3%",
                    "margin-left":"0px"
                });
                $(".social_bottom").css({
                    "top":"50%",
                    "right":"8.3%",
                    "margin-right":"0px"
                });
            };
            
            if(768<width && width<900){
                $('html').css("font-size","10px");

            };
            if(width>900 && width<=1300){
                $('html').css("font-size"," 1vw");

            };
            if(width>1300){
                $('html').css("font-size"," 16px")
            }
            if(width<=768){
                $('html').css("font-size","20px");
                $(".box1").css("right","0rem");
                $(".box2").css("left","0rem");
                $(".white",".green").css("display","none");
                $(".menu").css({"z-index":"0",});
                $(".accordianWarp").css("display","none");
                $(".menu1").children('ul').slideUp(300);
                $(".menu1").css(
                    "width","100%"
                )
                $(".menuBox").css({
                    "display":"inline-block",
                    "width":"100%",
                    "height":"3.0rem",
                    "background-color":"#eee",
                    "line-height": "3.0rem",
                    "border-top":"1px solid #8e978e70",
                    "border-bottom":"1px solid #8e978e70",
                    "text-indent":"1rem",
                    "position":"relative",
                    "top":"0px",
                    "border-radius":"0px",
                    "text-align": "left",
                    "font-size":"20px",
                    "padding":"0"
                    
                    

                });
                $(".menu1,.menu4").css(
                    "color","#141514"
                )
                $(".footerlogo").css({
                    "top":"11%",
                    "margin-left":"0",
                    "position":"absolute",
                    "left":"50%"
                });
                $(".footerfont").css({
                    "top":"50%",
                    "left":"50%",
                    "width":"350px",
                    "transform":"translate(-50%,0)"
                });
                $(".social_bottom").css({
                    "height":"73%",
                    "width":"100%",
                    "position":"relative",
                    "top":"25.5rem",
                    "opacity":"90%",
                    "margin-right":"0"
                });

                $(".farming_animation").css({
                    "opacity":"1",
                    "bottom":"0"
                });
                $(".fSub_title,.box4,.fParagraph,.fParagraph2").css({
                    "opacity":"1",
                    "bottom":"0"
                });
                $(".farming_animation2").css({
                    "opacity":"1",
                    "bottom":"0"
                });
                $(".farming_animation3").css({
                    "opacity":"1",
                    "bottom":"0"
                });
            }else{

                $(".box1").css("right","1rem");
                $(".box2").css("left","1rem");
                $(".menu").css("z-index","1");
                $(".accordianWarp").css("display","block");
                $(".menuBox").css({
                    "padding":"6px 10px",

                    "text-align": "center",
                    "position":"relative",
                    "font-size": "16px",
                    "top":"-8px",
                    "background-color":"transparent",
                    "border":"none",
                    "text-indent":"0rem",
                    "line-height": "16px"

                });
                $(".menu1,.menu4").css(
                    "color","#ffffff"

                )
                $(".social_bottom").css({
                    "width":"300px",
                    "position":"absolute",
                    "opacity":"100%"
                });

            };


           
        },100);

    });
    
    if(Vh>1560){
        $(".pc_title_BG").css({
            "width":"auto",
            "height":"100%"
    })
    }

    if(768<width){
        $(".latter1").css({
                            "opacity":"0%",
                            "bottom":"-50px"
                        })
                    .animate({opacity:0.85,bottom:"0px"},500);

        $(".latter2").css({
                            "opacity":"0%",
                            "bottom":"-50px"
                        }).delay(500).animate({opacity:1,bottom:"0px"},500);
        $(".latter3").css({
                            "opacity":"0%",
                            "bottom":"-50px"
        }).delay(1000).animate({opacity:0.85,bottom:"0px"},500);
    }
    if(768<width && width<900){
        $('html').css("font-size","10px");
    }
    if(width<=768){
        $('html').css("font-size","20px");
        $(".menu1").css(
            "width","100%"
        );
        $(".menuBox").css(
            "width","100%"
        );

    }else{
        $(".sub_title2").css({
            "opacity":"0%",
            "left":"40%"
        });
        $(".paragraph1").css({
            "opacity":"0%",
            "right":"40%"
        });
        $(".farming_animation").css({
            "opacity":"0%",
            "bottom":"-50px"
        });
        $(".fSub_title,.box4,.fParagraph,.fParagraph2").css({
            "opacity":"0%",
            "bottom":"-50px"
        });
        $(".farming_animation2").css({
            "opacity":"0%",
            "bottom":"-50px"
        });
        $(".farming_animation3").css({
            "opacity":"0%",
            "bottom":"-50px"
        });
    }
    if(width<1200 && width>768){
        $(".info").css("left","180px");
        $(".leisure").css("left","280px");
        $(".market").css("left","380px");
        $(".social2").css("left","480px");
        $(".menu1").css("width","100px");
        $(".menuBox").css("width","100px");
        $(".sub_text").css("width","75%");
        $(".footerfont").css({
            "left":"50%",
            "width":"400px",
            "transform":"translate(0%,-50%)"
        });
        $(".footerlogo").css({
            "top":"40%",
            "left":"8.3%",
            "margin-left":"50px"
        });
        $(".social_bottom").css({
            "top":"75%",
            "right":"91.7%",
            "margin-right":"-300px"
        });
    }
    if(width>1200){
        $(".info").css("left","200px");
        $(".leisure").css("left","320px");
        $(".market").css("left","440px");
        $(".social2").css("left","560px");
        $(".menu1").css("width","120px");
        $(".menuBox").css("width","120px");
        $(".sub_text").css("width","88.5%");
    }
    if(width>1300){
        $('html').css("font-size"," 16px")
    }
  
        $(".mobile_button").click(function(){
            if(width<=768){
                $(".menu").css("z-index","6");
                $(".accordianWarp").css("display","block");
            };
        });
        $(".mobile_button2").click(function(){
            if(width<=768){
                $(".menu").css("z-index","0");
                $(".accordianWarp").css("display","none");
                $(".menu1").children('ul').slideUp(300);
            }
        });
        $(".fixed").click(function(){
            if(width<=768){
                $(".menu").css("z-index","6");
                $(".accordianWarp").css("display","block");
            }
        });
        $(".menuLogo").click(function(){
            if(width<=768){    
                $(".menu").css("z-index","0");
                $(".accordianWarp").css("display","none");
                $(".menu1").children('ul').slideUp(300);
            }
        });
    
    {setTimeout(function(){
        $(".filter2").css("height") === scrollheight;
    },100)};

    var height2 = $(".headWrap").height();
    $(".filter").css("height",height2);

    
    $(window).scroll(function()
    
    {setTimeout(function(){
        var height1 = $(".main").outerHeight(true);
        var scrollTop = $(window).scrollTop();
        var height2 = $(".sub_textBox").outerHeight(true);
        if(width<=768){

            console.log(height2);
            if(scrollTop>height1){
                $(".fixed").fadeIn(300);
            }else{
                $(".fixed").fadeOut(300);
            }
        }else{
            if(scrollTop>140){
                $(".sub_title2").animate({opacity:1,left:"50%"},500);
                $(".paragraph1").animate({opacity:1,right:"50%"},500);
            }
            if(scrollTop>640){
                $(".farming_animation").animate({opacity:1,bottom:0},500);
                $(".farm1").children(".farming_animation1-2").delay(500).animate({opacity:1,bottom:0},500);
            }
            if(scrollTop>1120){
                $(".farming_animation2").animate({opacity:1,bottom:0},500);
                $(".farm2").children(".farming_animation2-2").delay(500).animate({opacity:1,bottom:0},500);
            }
            if(scrollTop>1640){
                $(".farming_animation3").animate({opacity:1,bottom:0},500);
                $(".farm3").children(".farming_animation3-2").delay(500).animate({opacity:1,bottom:0},500);
            }
        }    
        console.log(scrollTop);
        },150);
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

