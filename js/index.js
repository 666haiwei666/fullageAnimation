$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        scrollingSpeed:1000,
        afterLoad:function (anchorLink,index) {
            $('.section').eq(index-1).addClass('now');

        },
        onLeave:function (index,nextIndex,direction) {
            if(index == 2 && nextIndex == 3){
                /*当前是从第二页到第三页*/
                $('.section').eq(index-1).addClass('leaved');
            }else if(index == 3 && nextIndex == 4){
                /*当前是从第三页到第四页*/
                $('.section').eq(index-1).addClass('leaved');
            }else if(index == 5 && nextIndex == 6){
                /*当前是从第三页到第四页*/
                $('.section').eq(index-1).addClass('leaved').removeClass('now');
                $('.screen06 #box').addClass('show');
            }else if(index == 6 && nextIndex == 7){
                /*当前是从第6页到第7页*/
                $('.screen07 .star').addClass('show');
                $('.screen07 .text').addClass('show');
                $('.screen07 .star img').each(function (i, item) {
                    /*$(item) == $(this);*/
                    /*img display:none*/
                    /*$(this).delay(i*0.5*1000).fadeIn();*/
                    /*img opacity*/
                    $(this).css('transition-delay',i*0.5+'s');
                });

            }
        },
        afterRender:function () {
            $('#move').on('click', function () {
                $.fn.fullpage.moveSectionDown();
            }),
             $('.screen03  #sofa03').on('animationend',function () {
                    $(this).hide();
            });
            $('.screen04 #cart04').on('transitionend',function () {
                /* :last :first :visible :hidden :checked :selected jquery扩展选择器*/
                $('.screen04 .address').show().find('img:last').fadeIn(1000);
                $('.screen04 .text').addClass('show');
            });

        }
    });

});