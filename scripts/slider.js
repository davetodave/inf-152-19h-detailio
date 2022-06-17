(function($){

    $(document).ready(function() {
   		 
        $("#slider1").on("input change", (e)=>{
            const sliderPos1 = e.target.value;
            // Update the width of the foreground image
            $('.foreground-img1').css('width', `${sliderPos1}%`)
            // Update the position of the slider button
            $('.slider-button1').css('left', `calc(${sliderPos1}% - 18px)`)
        });

        $("#slider2").on("input change", (e)=>{
            const sliderPos2 = e.target.value;
            // Update the width of the foreground image
            $('.foreground-img2').css('width', `${sliderPos2}%`)
            // Update the position of the slider button
            $('.slider-button2').css('left', `calc(${sliderPos2}% - 18px)`)
        });

        $("#slider3").on("input change", (e)=>{
            const sliderPos3 = e.target.value;
            // Update the width of the foreground image
            $('.foreground-img3').css('width', `${sliderPos3}%`)
            // Update the position of the slider button
            $('.slider-button3').css('left', `calc(${sliderPos3}% - 18px)`)
        });

        $("#slider4").on("input change", (e)=>{
            const sliderPos4 = e.target.value;
            // Update the width of the foreground image
            $('.foreground-img4').css('width', `${sliderPos4}%`)
            // Update the position of the slider button
            $('.slider-button4').css('left', `calc(${sliderPos4}% - 18px)`)
        });

        $("#slider5").on("input change", (e)=>{
            const sliderPos5 = e.target.value;
            // Update the width of the foreground image
            $('.foreground-img5').css('width', `${sliderPos5}%`)
            // Update the position of the slider button
            $('.slider-button5').css('left', `calc(${sliderPos5}% - 18px)`)
        });

        $("#slider6").on("input change", (e)=>{
            const sliderPos6 = e.target.value;
            // Update the width of the foreground image
            $('.foreground-img6').css('width', `${sliderPos6}%`)
            // Update the position of the slider button
            $('.slider-button6').css('left', `calc(${sliderPos6}% - 18px)`)
        });

        $("#slider7").on("input change", (e)=>{
            const sliderPos7 = e.target.value;
            // Update the width of the foreground image
            $('.foreground-img7').css('width', `${sliderPos7}%`)
            // Update the position of the slider button
            $('.slider-button7').css('left', `calc(${sliderPos7}% - 18px)`)
        });

        $("#slider8").on("input change", (e)=>{
            const sliderPos8 = e.target.value;
            // Update the width of the foreground image
            $('.foreground-img8').css('width', `${sliderPos8}%`)
            // Update the position of the slider button
            $('.slider-button8').css('left', `calc(${sliderPos8}% - 18px)`)
        });

        $("#slider9").on("input change", (e)=>{
            const sliderPos9 = e.target.value;
            // Update the width of the foreground image
            $('.foreground-img9').css('width', `${sliderPos9}%`)
            // Update the position of the slider button
            $('.slider-button9').css('left', `calc(${sliderPos9}% - 18px)`)
        });



        
    });

    $(window).load(function(){

    });

    $(window).scroll(function(){

    });

})($);

