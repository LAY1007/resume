
var loadingRender=(function(){
    var $loading=$("#loading");
    var $loadingIcon=$loading.find(".IconBox");
    var step=0;
    var total=10000;
    return {
        init:function(){
            $loading.css("display","block");
       var interval=setInterval(function(){
           if(step==100){
               interval=null;
               focusRender.init();
               $loading.css("display","none");


           }
            step=step+10;
              $loadingIcon.css("width",step/100*100+"%");

          },500);
        }
    }
})();
loadingRender.init();

var focusRender=(function(){
    var $focus=$("#focus");
    var $lists=$(".focusBox .text");

    return{
        init:function(){
            $focus.css("display","block");
          $lists.singleTap(function(){
              var index=$(this).index();
              console.log(index);

              $focus.css("display","none");
              swiperRender.init(index);

          })
        }
    }
})();
var swiperRender=(function(){
    var $swiper=$("#swiper");
    function change(example){
        var slideAry=example.slides;

        var activeIndex=example.activeIndex;
        $.each(slideAry,function(index,item){
            if(index===activeIndex){
                item.id="page"+(activeIndex+1);
                return ;
            };
            item.id=null;

        });
    }
    return{
        init:function(index){
            $swiper.css("display","block");
            var mySwiper = new Swiper ('.swiper-container', {
                effect:"cube",
                /*loop: true,*/
                pagination: '.swiper-pagination',
                onTransitionEnd: change,
                onInit:change,
            });



            mySwiper.slideTo(index,0);
        }
    }
})();





