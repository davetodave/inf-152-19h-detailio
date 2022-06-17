(function($){

    $(document).ready(function() {
   		 
   		$("a[href$='scroll-to-anchor']").click(function() {
        scrollToContent();

        return false;
        });

       function scrollToContent() {

        var objDeferred = $.Deferred();
        var scrollOffset = window.innerHeight;

        $('html, body').animate({ scrollTop: scrollOffset }, 1000);

        scroll = false;

        setTimeout(function() {
            objDeferred.resolve();
        }, 1030);

        return objDeferred;
        } 




        $("#slider").on("input change", (e)=>{
            const sliderPos = e.target.value;
            // Update the width of the foreground image
            $('.foreground-img').css('width', `${sliderPos}%`)
            // Update the position of the slider button
            $('.slider-button').css('left', `calc(${sliderPos}% - 18px)`)
        });


        
    });

    $(window).load(function(){

    });

    $(window).scroll(function(){

    });

})($);

