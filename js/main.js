
//~~~~~~~~~~~~~~~~~~~~~~~~~~SMOOTH SCROLL~~~~~~~~~~~~~~~~~~~~~~~~~~


$(document).ready(function () {
    
    $('.navdot').click(function (e) {
        
        var linkHref = $(this).children().attr('href');
            
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        }, 800);

        e.preventDefault();
        
    });
    
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~INTRO~~~~~~~~~~~~~~~~~~~~~~~~~~

$(document).ready(function () {
    
    //Opening animation    
    $('#botred').delay(800).animate({left: '3%', opacity: 1}, {duration: 1100, queue: false});
    $('#botred').delay(800).animate({opacity: 1}, {duration: 1600, queue: false});
    $('.darrow-red').delay(1200).animate({left: 0}, { duration: 1200, queue: false });
    $('.darrow-red').animate({opacity: 1}, { duration: 1900, queue: false });
    $('#botgold').delay(800).animate({right: '3%', opacity: 1}, {duration: 1100, queue: false});
    $('#botgold').delay(800).animate({opacity: 1}, {duration: 1600, queue: false});
    $('.darrow-gold').delay(1200).animate({right: 0}, { duration: 1200, queue: false });
    $('.darrow-gold').animate({opacity: 1}, { duration: 1900, queue: false });
    
    // Hide the blurbs, then show the first one
    $('[id^=blurb]').hide();
    $('#blurb1').slideDown();
    
    //Cycle through blurbs
    var blurb = 'blurb';
    var bIndex = 2;
    
    $('#down-arrow').click(function () {
        
        var shownBlurb = $('.art-blurb').children(':visible');
            
        //If the last blurb is shown, scroll to hierarchy, else show next
        if ($(shownBlurb).attr('id') === "blurb6") {
            $('html, body').animate({
                scrollTop: $('#hierarchy').offset().top
            }, 800);
        } else {
            $(shownBlurb).slideUp();
            var shownBlurb = "#blurb" + bIndex;
            bIndex++;
            $(shownBlurb).delay(300).slideDown();
        }
    });
});


//~~~~~~~~~~~~~~~~~~~~~~~~~~COLOURS~~~~~~~~~~~~~~~~~~~~~~~~~~

$(document).ready(function () {
    
    //Execute animation if the viewer scrolls to Colours    
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 900 && height < 1500) {
            $('.art-colour-info').animate({left: '18%', opacity: 1}, 1000);
            $('#placeholder').animate({opacity: 1}, 1000);
        }
    });
        
    // Hide the colour information but show placeholder text
    $('.colour-info').hide();
    $('#placeholder').show();
    
    //Show and hide info based on which colour is clicked on pyramid
    //Note that the classes hidden and shown have no css properties but were created for debugging purposes
    $('.c-img').click(function () {
            
        if ($('#pyramid').children().hasClass('shown')) {
            var shownColour = $('#pyramid').find('.shown');
            $(shownColour).removeClass('shown').addClass('hidden');
            $(shownColour).animate({opacity: 0}, 100);
        }
        
        if ($('.art-colour-info').children(':visible').length > 0) {
            var shownInfo = $('.art-colour-info').children();
            $(shownInfo).hide();
        }
                
        $(this).removeClass('hidden').addClass('shown');
        $(this).animate({opacity: 1}, 100);                       //change opacity of clicked component
        var clickedColourId = $(this).attr('id');                 //get id of clicked compenent
        var colourInfoId = ("#a" + clickedColourId);              //add #a to get id of corresponding info
        $(colourInfoId).show();
        
    });
});


//~~~~~~~~~~~~~~~~~~~~~~~~~~PLANETS~~~~~~~~~~~~~~~~~~~~~~~~~~


$(document).ready(function() {
    
    $(window).scroll(function () {
        
        var pIndex = 1;
        if ($(window).scrollTop() > 1700 && $(window).scrollTop() < 2200) {
            for (pIndex = 1; pIndex < 10; pIndex++) {
                var pId = "#p-" + pIndex;
                $(pId).delay(500).animate({opacity: 1}, 10).delay(500);
            }
        }
    });
    
    //Hide planet info
    $('.planet').hide();
        
    //Show and hide info based on which planet is clicked
    $('.p-img').click(function () {
        
        //Show the right info
        if ($('.planets-info').children(':visible').length > 0) {
            var shownInfo = $('.planets-info').children();
            $(shownInfo).fadeOut();
        }
        
        if ($('.planets-info').position().left === 1504) {
            $('.planets-info').animate({left: "2207px"}).animate({left: "1504px", right: "-3px"});
        }
        
        $('.planets-info').animate({right: "3px"});
        var clickedPlanet = $(this).attr('id');
        var planetInfo = ("#a" + clickedPlanet);
        $(planetInfo).delay(500).slideDown();
    
    });
});


//~~~~~~~~~~~~~~~~~~~~~~~~~~BUY~~~~~~~~~~~~~~~~~~~~~~~~~~

$(document).ready(function () {
    
    //Execute animation if the viewer scrolls to Colours    
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 2800) {
            $('.onsale').delay(1200).animate({left: 0}, { duration: 1200, queue: false });
            $('.onsale').animate({opacity: 1}, { duration: 1900, queue: false });
            $('.art-book').delay(1200).animate({right: 0}, { duration: 1200, queue: false });
            $('.art-book').animate({opacity: 1}, { duration: 1900, queue: false });
        }
    });

});