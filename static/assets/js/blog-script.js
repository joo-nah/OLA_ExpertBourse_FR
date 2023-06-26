$(document).ready(function() {


  cardBanner = document.querySelector(".right-card-banner");
  currStickyPos = cardBanner.getBoundingClientRect().top + window.pageYOffset;
  var curwidth = $(".right-card-banner").width() ;
  window.onscroll = function () {

    if (window.pageYOffset > currStickyPos) {
        if(cardBanner.classList.contains('nosticky')) {
          cardBanner.classList.remove("stickycard");
          cardBanner.style.width = "auto";
        }else{
          cardBanner.classList.add("stickycard");
          cardBanner.style.width = curwidth + "px";
        }
    } else {      
      cardBanner.classList.remove("stickycard");
      cardBanner.style.width = "auto";
    }
  };

  
    $('.blogcard').each(function() {
        var $anchor = $(this).find('a').clone(); //clone existing anchor
        $anchor.text(''); //remove text
        //$anchor.attr('target', '_blank');
        $anchor.attr('class', 'blogcarda');
       $(this).wrap($anchor);
    });

});
  
