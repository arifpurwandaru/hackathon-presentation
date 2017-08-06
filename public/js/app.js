
const defaultScreen = 1;
let activeScreen = 1;

const showNav = (param) => {
  if(!param){
    $('.nav-cont').addClass('hidden');
  }
  else{
    $('.nav-cont').removeClass('hidden');
  }
}

$(document).ready(() => {
  if(activeScreen === 1){
    showNav(false);
  };

  $('.section-content').addClass('hidden');
  $(`[data-slide=${activeScreen}]`).removeClass('hidden');

  $('.nav-left').click(() => {
    if(activeScreen > defaultScreen){
      activeScreen -= 1;
    };

    if(activeScreen === defaultScreen){
      showNav(false);
    };

    $('.section-content').addClass('hidden');
    $(`[data-slide=${activeScreen}]`).removeClass('hidden');

  });
  
  $('.nav-right, .thumb-container').click(() => {
    window.confettiful = null;
    
    const lastScreen = $('.section-content').last().attr('data-slide');
    if(activeScreen < lastScreen){
      activeScreen += 1;
    };

    if(activeScreen !== defaultScreen){
      showNav(true);
    };

    $('.section-content').addClass('hidden');
    $(`[data-slide=${activeScreen}]`).removeClass('hidden');

  });
});
