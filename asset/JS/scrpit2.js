$(document).ready(function(){
    // contentsBox 내부 높이
    var farmheight = $(".farm3").height();
    var height2 = $(".contentTitle").outerHeight(true)+$(".contentSubTitle").outerHeight(true)
    +$(".contentText").outerHeight(true)- 60;
    var height3 = height2 + 580+"px";
    var height4 = $(".sub_object1").outerHeight(true)+$(".mapBox1").outerHeight(true)+$(".farminfo1").outerHeight(true)+130;
    var height5 = $(".textWarp").height();
    var width = $(window).outerWidth(true);
    
    if(width>1750){
        $(".pc_img").css({
            "width":"100%"
        })

    }
    $(".contentBox").css("height", height4);
    $(".sub2").css("height",height3);
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

            $(this).css("color","#92d081");
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
    $(".location_warp").children("img").click(function(){
        var locationCopy = $(this).next("input").val();
        navigator.clipboard.writeText(locationCopy)
            .then(function(){
                alert("주소가 복사되었습니다.")
            });
    });
    $(".menu1").click(function(){
        if(width<=768){
            $(".menu1").children('ul').stop().slideUp(300);
            $(this).children('.size1').css("transform","rotate(90deg)");
            $(".menu1").children('.size1').attr("src","../asset/images/mobile_button3.png");
            
            
            

            if($(this).children('ul').css('display')=="none"){
                $(this).children('ul').slideDown(300);
                $(this).children('.size1').attr("src","../asset/images/mobile_button4.png");
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

    
    var Vh = screen.height;

    $(window).resize(function()
        {setTimeout(function(){
            width = $(window).outerWidth(true);
            Vh = screen.height;
            height5 = $(".textWarp").height();
            console.log(width);
            $(".filter2").css("height") ===scrollheight;
            height4 = $(".sub_object1").outerHeight(true)+$(".mapBox1").outerHeight(true)+$(".farminfo1").outerHeight(true)+130;
            if(width>768){
                contenthoney = $(".imgwarp").height() +160;
            }
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
            if(width>1750){
                $(".pc_img").css({
                    "width":"100%"
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
                    "width":"350px",
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
                    "width":"660px",
                    "transform":"translate(-50%,-50%)"
                });
                $(".footerlogo").css({
                    "top":"50%",
                    "left":"8.3%",
                    "margin-left":"-25px"
                });
                $(".social_bottom").css({
                    "top":"50%",
                    "right":"8.3%",
                    "margin-right":"-75px"
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
                
                $(".contentBox").css("height", height4);
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
                    "height":"60px",
                    "background-color":"#eee",
                    "line-height": "60px",
                    "border-top":"1px solid #8e978e70",
                    "border-bottom":"1px solid #8e978e70",
                    "text-indent":"20px",
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
                    "width":"100%",
                    "right":"0",
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
                $(".farmSocial").css("height",farmheight+190);
                $(".intro_animation1,.intro_animation2,.intro_animation3").css({
                    "opacity" : "1",
                    "margin-top":"0"
                })
                $(".honey_animation1,.honey_animation2").css({
                    "opacity" : "1",
                    "margin-top":"0"
                })
                $(".map_animation1").css({
                    "opacity" : "1",
                    "margin-top":"0"
                })
                               
                $(".contenthoney").css("height", "auto");
                $(".imgwarp").css("height","auto");
            }else{
                $(".contenthoney").css("height", contenthoney);
                $(".contentBox").css("height", height4);
                $(".box1").css("right","4rem");
                $(".box2").css("left","4rem");
                $(".menu").css("z-index","1");
                $(".accordianWarp").css("display","block");
                $(".farmSocial").css("height","auto");
                $(".menuBox").css({
                    "padding":"6px 10px",
                    "height":"32px",
                    "line-hight":"32px",
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
                $(".imgwarp").css("height",height5);

            };


           
        },100);

    });

    if(768<width){
        $(".main_text").css({
                            "opacity":"0%",
                            "top":"48%"
                        })
        .animate({opacity:1,top:"50%"},500);
        $(".imgwarp").css("height",height5);
        $(".farmSocial").css("height",farmheight+190);

    }else{
        $(".farmSocial").css("height","auto");
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
            "width":"350px",
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

    $('html').click(function(event) {
        const clickedElement = event.target;
        console.log(clickedElement);
        
    });
    
    var contenthoney = $(".imgwarp").height() +160;
    
    if(width>768){
        $(".contenthoney").css("height", contenthoney);
        console.log(contenthoney)
    }



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
    


    var width = $(window).outerWidth(true);
    // $(window).scroll(function()
        
    // {setTimeout(function(){
         
    //     if(width<769){
    //         var height1 = $(".main").outerHeight(true);
    //         var scrollTop = $(window).scrollTop();
    //         if(scrollTop>height1){
    //             $(".fixed").fadeIn(300);
    //         }else{
    //             $(".fixed").fadeOut(300);
    //             scrollTop = $(window).scrollTop();
    //             console.log(scrollTop);
    //         }
    //     }    
        
    //     },300);
    // });
    $(window).scroll(function()
        
        {setTimeout(function(){
            width = $(window).outerWidth(true);   
            if(width<=768){
                var height1 = $(".main").outerHeight(true);
                var scrollTop = $(window).scrollTop();
                console.log(scrollTop);
                if(scrollTop>height1){
                    $(".fixed").fadeIn(300);
                }else{
                    
                    

                    $(".fixed").fadeOut(300);
                }
            }else{
                var scrollTop = $(window).scrollTop();
                    console.log(scrollTop);
                    if(scrollTop>=100){
                    $(".intro_animation1,.honey_animation1,.map_animation1").animate({
                            opacity:1,top:"20"
                        },500);
                    $(".intro_animation2,.honey_animation2").delay(500).animate({
                            opacity:1,top:"20"
                    },500);
                    $(".imgwarp").css("height",height5);
                    }
                    if(scrollTop>=800){
                        $(".intro_animation3").animate({
                            opacity:1,top:"20"
                        },500);
                    }
            }
        },100);
        
    });
    $('.sub_object1').click(function(){
        if(width<=768){
            
            $('.mapBox1').css("z-index","1");
            $('.mapBox2').css("z-index","0");
            $('.sub_object1').css("color","#141514");
            $('.sub_object2').css("color","#5d555180");
            $('.sub_object_underbar').css("left","0%");
            $('.sub_object1').css("background-color","#fff");
            $('.sub_object2').css("background-color","#efefef");
            $('.farminfo1').css("z-index","1");
            $('.farminfo2').css("z-index","0");
        }else{
            $('.mapBox1').css("z-index","1");
            $('.mapBox2').css("z-index","0");
            $('.sub_object1').css("color","#141514");
            $('.sub_object2').css("color","#5d555180");
            $('.sub_object_underbar').css({
                "right":"50%",
                "transform":"translate(0%,0%)"
            });
            $('.farminfo1').css("z-index","2");
            $('.farminfo2').css("z-index","1");
        }
    })

    var count = 0
    $('.sub_object1,.sub_object2').click(function(){
        count ++
        console.log(count);
    });
    console.log(count);

    $('.sub_object1').mouseover(function(){
        
        $('.sub_object1').css("color","#141514")
    });
    $('.sub_object1').mouseleave(function(){
        if(count%2 == 1){
            $('.sub_object1').css("color","#5d555180")
        }
    });

    $('.sub_object2').click(function(){
        if(width<=768){
            $('.mapBox2').css("z-index","1");
            $('.mapBox1').css("z-index","0");
            $('.sub_object1').css("color","#5d555180");
            $('.sub_object2').css("color","#141514");
            $('.sub_object_underbar').css("left","50%");
            $('.sub_object2').css("background-color","#fff");
            $('.sub_object1').css("background-color","#efefef");
            $('.farminfo1').css("z-index","0");
            $('.farminfo2').css("z-index","1");
            
        }else{
            $('.mapBox2').css("z-index","1");
            $('.mapBox1').css("z-index","0");
            $('.sub_object1').css("color","#5d555180");
            $('.sub_object2').css("color","#141514");
            $('.sub_object_underbar').css({
                "right":"0%",
                "transform":"translate(-50%,0%)"
            });
            $('.farminfo1').css("z-index","1");
            $('.farminfo2').css("z-index","2");
        }
    })

    $('.sub_object2').mouseover(function(){
        $('.sub_object2').css("color","#141514")
    });
    $('.sub_object2').mouseleave(function(){
        if(count%2 == 0){
            $('.sub_object2').css("color","#5d555180")
        }
    });

});
