

let viewport = window.matchMedia('(max-width:999px)');
$(window).resize(function(){
  location.reload();
});


if(viewport.matches){
  let nav = $('.navigation');
  let btn = $('.btn-menubar');
  let menuItems = $('.menu-item');
  let menuLists = $('.menu-list');
  let subMenus = $('.sub-menu');
// btn click event 
//nav - is-act class 
btn.click(function(){
  nav.toggleClass('is-act');
  if(nav.hasClass('is-act')){
    btn.attr('aria-label','메뉴 닫기');
    btn.attr('title','메뉴 닫기');
  }
  else{
    btn.attr('aria-label','메뉴 열기');
    btn.attr('title','메뉴 열기');
  }

});
//.menu-item class - icon-plus add
  menuItems.addClass('icon-plus');
  menuItems.attr('aria-haspopup', 'true');
  menuItems.attr('aria-expanded', 'false');
  menuItems.attr('role', 'button');
  menuItems.attr('tabindex', '0');

  menuItems.on('click keyup', function(e){
    if(e.type === 'click' || e.keyCode === 13){
      menuItems.attr('aria-expanded','false');
      menuLists.removeClass('menu-act');
      $(this).parent().addClass('menu-act');
      menuItems.removeClass('icon-minus').addClass('icon-plus');
      $(this).removeClass('icon-plus').addClass('icon-minus');
      menuItems.attr('aria-expanded','true');
    }
    
  });
}