$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>2811){
            $('.navimenu03').css("color","#f2d88f");
            $('.navimenu02').css("color","#fff");
            $('.navimenu01').css("color","#fff");
        } else if($(this).scrollTop()>1874){
            $('.navimenu01').css("color","#fff");
            $('.navimenu02').css("color","#f2d88f");
            $('.navimenu03').css("color","#fff");
            $('.navimenu04').css("color","#fff");
        }else if($(this).scrollTop()>937){
            $('.navimenu01').css("color","#f2d88f");
            $('.navimenu02').css("color","#fff");
            $('.navimenu03').css("color","#fff");
        }else{
            $('.navimenu01').css("color","#fff");
            $('.navimenu02').css("color","#fff");
            $('.navimenu03').css("color","#fff");
        }
    });

    $(".navimenu01").mouseover(function(){
        $(".navimenu01").css("color","#f2d88f");
        return false;
    });
    $(".navimenu01").mouseout(function(){
        $(".navimenu01").css("color","#fff");
        return false;
    });

    $(".navimenu02").mouseover(function(){
        $(".navimenu02").css("color","#f2d88f");
        return false;
    });
    $(".navimenu02").mouseout(function(){
        $(".navimenu02").css("color","#fff");
        return false;
    });

    $(".navimenu03").mouseover(function(){
        $(".navimenu03").css("color","#f2d88f");
        return false;
    });
    $(".navimenu03").mouseout(function(){
        $(".navimenu03").css("color","#fff");
        return false;
    });

    $(".navimenu04").mouseover(function(){
        $(".navimenu04").css("color","#f2d88f");
        return false;
    });
    $(".navimenu04").mouseout(function(){
        $(".navimenu04").css("color","#fff");
        return false;
    });

    $(".navimenu05").mouseover(function(){
        $(".navimenu05").css("color","#f2d88f");
        return false;
    });
    $(".navimenu05").mouseout(function(){
        $(".navimenu05").css("color","#fff");
        return false;
    });
});
