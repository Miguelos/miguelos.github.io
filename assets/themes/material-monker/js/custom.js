$( document ).ready(function() {
  var colors = ['b58900','cb4b16','dc322f','d33682','6c71c4','268bd2','2aa198','859900'];
  var color = colors[Math.floor(Math.random() * colors.length)];
  $('a').css('color', '#'+color);
  $('nav.navbar-default .navbar-nav>li>a:hover',
    'nav.navbar-default .navbar-nav>.active>a',
    'nav.navbar-default .navbar-nav>.active>a:hover',
    'nav.navbar-default .navbar-nav>.active>a:focus',
    'nav .navbar-brand:hover' ).css('background-color', '#'+color);
});
