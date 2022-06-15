
/**
 * In this file you can initialize js plugins
 *
 * @author Comvation AG
 */
(function($){

    $(document).ready(function() {

    	$('.d6o-menu').click(function() {
    		//alert("passiert");
    		//$('.d6o-menu').addClass("d6o-active");
    		//$('nav').removeClass("d6o-hidden");

    		if ($('.d6o-menu').hasClass('d6o-active') == true) {
    			console.log("1");
    			$('.d6o-menu').removeClass('d6o-active');
    			$('nav').addClass("d6o-hidden");
    		}

    		if ($('.d6o-menu').hasClass('d6o-active') != true) {
    			console.log("2");
    			$('nav').removeClass("d6o-hidden");
    			$('.d6o-menu').addClass('d6o-active');
    		}
    		/*
    		if ($(this).hasClass("d6o-active") == true) {
    			$('.d6o-nav').addClass('d6o-hidden');

    			
    		} else {
    			$('.d6o-nav').removeClass('d6o-hidden');
    			$(this).removeClass("d6o-active");
    		}
    		*/
    		

    	})

    	var nav = $('nav');
		var line = $('<div />').addClass('line');

		line.appendTo(nav);

		var active = nav.find('.active');
		var pos = 0;
		var wid = 0;

		if(active.length) {
		  pos = active.position().left;
		  wid = active.width();
		  line.css({
		    left: pos,
		    width: wid
		  });
		}

		nav.find('ul li a').click(function(e) {
		  e.preventDefault();
		  if(!$(this).parent().hasClass('active') && !nav.hasClass('animate')) {
		    
		    nav.addClass('animate');

		    var _this = $(this);

		    nav.find('ul li').removeClass('active');

		    var position = _this.parent().position();
		    var width = _this.parent().width();

		    if(position.left >= pos) {
		      line.animate({
		        width: ((position.left - pos) + width)
		      }, 300, function() {
		        line.animate({
		          width: width,
		          left: position.left
		        }, 150, function() {
		          nav.removeClass('animate');
		        });
		        _this.parent().addClass('active');
		      });
		    } else {
		      line.animate({
		        left: position.left,
		        width: ((pos - position.left) + wid)
		      }, 300, function() {
		        line.animate({
		          width: width
		        }, 150, function() {
		          nav.removeClass('animate');
		        });
		        _this.parent().addClass('active');
		      });
		    }

		    pos = position.left;
		    wid = width;
		  }
		});
        
    });

    $(window).load(function(){

    });

    $(window).scroll(function(){

    });

})($);

