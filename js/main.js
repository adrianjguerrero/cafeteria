import '../scss/style.scss';

document.addEventListener('DOMContentLoaded', function() {



  
    var acercaDe = document.getElementById('acercade').offsetTop;
    var galeria = document.getElementById('galeria').offsetTop;
    var menu = document.getElementById('menu').offsetTop;
    var ubicacion = document.getElementById('ubicacion').offsetTop;
  
  
    document.getElementById('btn-acercade').addEventListener('click',(e) => {
  
      e.preventDefault();
      window.scroll({
            behavior: 'smooth',
            left: 0,
            top: acercaDe
          });
  
    });
  
    document.getElementById('btn-galeria').addEventListener('click',(e) => {
  
      e.preventDefault();
      window.scroll({
            behavior: 'smooth',
            left: 0,
            top: galeria
          });
  
    })
  
    document.getElementById('btn-menu').addEventListener('click',(e) => {
  
      e.preventDefault();
      window.scroll({
            behavior: 'smooth',
            left: 0,
            top: menu + 550 /* el offset lo agarra mal, idk why, +500 para arreglarlo */
          });
  
    })
  
    document.getElementById('btn-ubicacion').addEventListener('click',(e) => {
  
      e.preventDefault();
      window.scroll({
            behavior: 'smooth',
            left: 0,
            top: ubicacion
          });
  
    })
  
    
  });

  document.addEventListener('DOMContentLoaded', function() {
    
    var anchoVentana = document.documentElement.clientWidth;

    window.addEventListener('scroll',function(){

        var aboutArticle = document.querySelector('.acercade article');

        if(anchoVentana>800){
            
            // var scroll = $(window).scrollTop();

            var scroll = window.pageYOffset;

            aboutArticle.style.transform = `translate(0px, -${scroll/5}%)`
            
        }
    });



        
        window.addEventListener('resize',function(){


            if(anchoVentana<800){
                aboutArticle.style.transform = 'translate(0px,0px)'


                
            }

        });

}); 