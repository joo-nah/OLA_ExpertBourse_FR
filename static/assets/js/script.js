$(document).ready(function () {

  $('.home-banner-title').html(function(i, html) {
    return html.replace(/\/(.*?)\//g, '<span class="highlight">$1</span>');
  });
  
  $('.right-sidebar p').html(function(i, html) {
    return html.replace(/\/(.*?)\//g, '<strong>$1</strong>');
  });

  $('.blog-ranking span').html(function(i, html) {
    return html.replace(/\/(.*?)\//g, '<b>$1</b>');
  });

  $('.blog-advantage-table p').html(function(i, html) {
    return html.replace(/\{(.*?)\}/g, '<b>$1</b>');
  });

  setTimeout(() => {
    if( window.location.pathname == '/politique/' || window.location.pathname == '/terms/'){
      $('.nav-link').removeClass('active');
    } 

    if( window.location.pathname == '/'){
      $('.navbar-nav li:first-child .nav-link').addClass('active');
    } else if( window.location.pathname == '/blog/'){
      $('.navbar-nav li:last-child .nav-link').addClass('active');
    } 
  }, 100);


  $('blockquote a').attr('target', '_blank');

  $('blockquote').html(function(i, html) {
    return html.replace(/\{(.*?)\}/g, '<a href="$1" class="mobile_first_link" style="display: none"></a>');
  });

  $('blockquote').html(function(i, html) {
    return html.replace(/\|(.*?)\|/g, '<a href="$1" class="mobile_second_link" style="display: none"></a>');
  });

  let _desktop_first_link = $('blockquote a:first-child').attr('href');
  let _desktop_second_link  = $('blockquote a:nth-child(3)').attr('href');

  let searchParams = new URLSearchParams(window.location.search)
  if( searchParams.has('gclid') ) {
    let _gclid = searchParams.get('gclid');

    let _mobile_first_link = $('blockquote .mobile_first_link').prop('href');
    let _mobile_second_link = $('blockquote .mobile_second_link').prop('href');
    
    var url1 = new URL(_mobile_first_link);
    url1.searchParams.set("aff_sub", _gclid); 
    $('.mobile_first_link').attr('href', url1.href);

    var url2 = new URL(_mobile_second_link);
    url2.searchParams.set("aff_sub", _gclid); 
    $('.mobile_second_link').attr('href', url2.href);
  }

  function blog_mobile_links() {
    let _mobile_first_link = $('blockquote .mobile_first_link').prop('href');
    $('blockquote a:first-child').attr('href', _mobile_first_link);
  
    let _mobile_second_link = $('blockquote .mobile_second_link').prop('href');
    $('blockquote a:nth-child(3)').attr('href', _mobile_second_link);
  }

  if (window.innerWidth < 767 ) {
    blog_mobile_links();
  }

  window.addEventListener("resize", function(){
    if (window.innerWidth < 767 ) {
      blog_mobile_links();
    }
    else {
      $('blockquote a:first-child').attr('href', _desktop_first_link);
      $('blockquote a:nth-child(3)').attr('href', _desktop_second_link);
    }
  });
  

  var cardBody = document.querySelector('.right-card-banner.sidebar'); 

  function _scroll(){
    window.addEventListener('scroll', function() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 100) {
        cardBody.classList.add('stickycard');
      } else {
        cardBody.classList.remove('stickycard');
      }
    });
  }

  if (window.innerWidth > 767 ) {
    _scroll();
  }

  window.addEventListener("resize", function(){
    if (window.innerWidth > 767 ) {
      _scroll();
    }
    else {
      window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        cardBody.classList.remove('stickycard');
      });
    }
  });


  $("#clock-b")
    .countdown("2020/12/20 23:59:00")
    .on("update.countdown", function (event) {
      var $this = $(this).html(
        event.strftime(
          "" +
            '<div class="holder m-2"><span >%D</span> jours</div>' +
            '<div class="holder m-2"><span >%H</span> heures</div>' +
            '<div class="holder m-2"><span >%M</span> min</div>' +
            '<div class="holder m-2"><span >%S</span> sec</div>'
        )
      );
    });
    
  if (getCookie("Expert-Banques") != "true") {
    setTimeout(function () {
      $("#cookieConsent").fadeIn(200);
    }, 1000);
  }

  $("#footer_privacy_container_button, .footer_privacy_button").click(
    function () {
      setCookie("Expert-Banques", "true", 365);
      $("#cookieConsent").fadeOut(200);
    }
  );

  $(function () {
    $(".card-btn-container").each(function () {
      var $anchor = $(this).find("a").clone(); //clone existing anchor
      $anchor.text(""); //remove text
      $anchor.attr("target", "_blank");
      $anchor.attr("class", "");
      $(this).parent().wrap($anchor);
    });

    $(".hr-part5").each(function () {
      var $anchor = $(this).find("a").clone(); //clone existing anchor
      $anchor.text(""); //remove text
      $anchor.attr("target", "_blank");
      $anchor.attr("class", "");
      $(this).parent().wrap($anchor);
    });
  });


  rightbar = document.querySelector(".right-sidebar");
  currStickyPos = rightbar.getBoundingClientRect().top + window.pageYOffset;
   var curwidth = $(".right-sidebar").width() + 22;
  //console.log(curwidth);
  window.onscroll = function () {

    if (window.pageYOffset > currStickyPos) {
        if(rightbar.classList.contains('nosticky')) {
          rightbar.classList.remove("stickybar");
          rightbar.style.width = "auto";
        }else{
          rightbar.classList.add("stickybar");
          rightbar.style.width = curwidth + "px";
        }
    } else {      
      rightbar.classList.remove("stickybar");
      rightbar.style.width = "auto";
    }

   // handleSideBanner();


  };

  $(".footerpopclose").on("click", function(){
    $("#footerpop").fadeOut();
 });
 
 $(".exitpopclose").on("click", function(){
  console.log("close");
    $(".exit-intent-popup").fadeOut();
 });
  
  window.onresize = function(event) {
  // handleSideBanner();
  };

 // handleSideBanner();
    
});

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }

  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}





// dropdown
/*
function initSidebar() {
  stickyBanner = document.querySelector(".right-sidebar");

  var pagetop = window.pageYOffset;
  var tp_val = $(".maincontainer").position().top;
  var lt_val = $(".maincontainer").position().left + $(".maincontainer").width();
  var tp = tp_val - pagetop + "px";
  var lt = lt_val + "px";

  $(".right-sidebar").css("top", tp);
  $(".right-sidebar").css("left", lt);
}

function handleSidebar() {
  stickyBanner = document.querySelector(".right-sidebar");
  currStickyBannerPos = stickyBanner.getBoundingClientRect().top + window.pageYOffset;

  var pagetop = window.pageYOffset;
  var tp_val = $(".maincontainer").position().top;
  var lt_val = $(".maincontainer").position().left + $(".maincontainer").width();
  var tp = tp_val - pagetop + "px";
  var lt = lt_val + "px";

  //console.log(pagetop, tp_val, currStickyBannerPos);
  if(pagetop == 0){
    $(".right-sidebar").css("top", tp);
  }else if(pagetop > 0 && (tp_val < pagetop)){
     $(".right-sidebar").css("top", '10px');        
  }else{
    $(".right-sidebar").css("top", tp);
  }
  $(".right-sidebar").css("left", lt);
}
*/


function handleSideBanner(){

  rightBanner = document.querySelector(".right-banner");
  currRightBannerPos = rightBanner.getBoundingClientRect().top + window.pageYOffset;

  //console.log(currRightBannerPos);

  leftBanner = document.querySelector(".left-banner");
  currLeftBannerPos = leftBanner.getBoundingClientRect().top + window.pageYOffset;

  var pagetop  = window.pageYOffset;
  var tp_val = $(".maincontainer").position().top;
  //console.log(tp_val);
  var tp_px = (tp_val  +10) + 'px';
  var lt_val = $(".maincontainer").position().left + $(".maincontainer").width() ;
  var lt_lt_val = $(".maincontainer").position().left  -  140;
  var tp = (tp_val) - (pagetop) + "px";
  var lt = (lt_val) + "px";
  var lt_lt = (lt_lt_val) + "px";


  var footer_el = document.querySelector(".footer-logo");

 //console.log(pagetop, tp_val, tp,  currRightBannerPos);

 if(pagetop == 0){
    $(".right-banner").css("top", tp_px);
    $(".left-banner").css("top", tp_px);
}else if(pagetop < tp_val){
  var tt_val = tp_val - pagetop;
  //console.log(pagetop, tt_val, tp_val, tp, btp, currRightBannerPos);
  var tt_px = tt_val + 'px';
  $(".right-banner").css("top", tt_px);
  $(".left-banner").css("top", tt_px);
}else{
    $(".right-banner").css("top", '0px');
    $(".left-banner").css("top", '0px');
}
  $(".right-banner").css("left", lt);
  $(".left-banner").css("left", lt_lt);
}
