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


  /*$(window).load(function(){

  });*/

  console.log(localStorage.getItem("light-mode"));
  
  function isLight() {
    return localStorage.getItem("light-mode");
  }
    
  function toggleRootClass() {
    document.querySelector(":root").classList.toggle("light");
  }
    
  function toggleLocalStorageItem() {
    if (isLight()) {
      localStorage.removeItem("light-mode");
    } else {
      localStorage.setItem("light-mode", "set");
    }
  }
    
  if (isLight()) {
    toggleRootClass();
  }
    
  $('.theme-icon').click(function() {
    toggleLocalStorageItem();
    toggleRootClass();
  });

  //console.log(localStorage.getItem("light-mode"));

  $(window).scroll(function(){
    //console.log(localStorage.getItem("light-mode"));
  });

})($);