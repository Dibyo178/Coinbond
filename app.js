$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});


// nav menu

(function($) { 
    $(function() { 
  
      //  open and close nav 
      $('#navbar-toggle').click(function() {
        $('nav ul').slideToggle();
      });
  
  
      // Hamburger toggle
      $('#navbar-toggle').on('click', function() {
        this.classList.toggle('active');
      });
  
  
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.navbar-dropdown').slideToggle("slow");
  
        // Close dropdown when select another dropdown
        $('.navbar-dropdown').not($(this).siblings()).hide("slow");
        e.stopPropagation();
      });
  
  
      // Click outside the dropdown will remove the dropdown class
      $('html').click(function() {
        $('.navbar-dropdown').hide();
      });
    }); 
  })(jQuery); 


  // Counter live update

   const counterNum= document.querySelectorAll('.counter-sora');

   const speed =200;

   counterNum.forEach((counterElm) => {
     
    const updateNum = ()=>{
    
        const targetNum = parseInt(counterElm.dataset.number);
        const initialNum = parseInt(counterElm.innerText);
       
         const incrementNum = Math.trunc(targetNum / speed);
                    

         if(initialNum < targetNum){
                   
          counterElm.innerText = initialNum + incrementNum;

          setTimeout(updateNum,5);
        }
    }

     updateNum();
     
  })
///Paragraph
const $PANE = $("#triple-pane");
const $CONTENT = $("#triple-pane .pane-content");
const $TITLE = $("#triple-pane .pane-title");
const $TEXT = $("#triple-pane .pane-text");
const $BTN = $("#triple-pane .pane-btn");

// Pick the sizes that look best at max width of the element
const maxTitleSize = 36;
const maxTextSize = 20;
const maxBtnSize = 24;
const maxPadding = 20;

const resize = _ => {
	const W = $PANE.width() / 1600;

	$TITLE.css("font-size", maxTitleSize * W);
	$TEXT.css("font-size", maxTextSize * W);
	$BTN.css("font-size", maxBtnSize * W);
	$CONTENT.css("padding", maxPadding * W);
};

$(window).resize(resize);
$(document).ready(resize);
