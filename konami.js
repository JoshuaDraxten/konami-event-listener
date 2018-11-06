var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
    konami_i = 0;

document.addEventListener('keydown', function( e ){
  if (konami[konami_i] === e.keyCode){
    if (konami_i < konami.length-1){
      konami_i++;
    } else {
      document.onKonami ? document.onKonami() : null;
    }
  } else if (konami[0] === e.keyCode) {
    konami=1;
  } else {
    konami_i=0;
  }
});
