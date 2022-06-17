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
    });

    $(window).load(function(){

    });

    $(window).scroll(function(){

    });

})($);

