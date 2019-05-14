document.addEventListener('DOMContentLoaded', function() {
    
    var anchoVentana = document.documentElement.clientWidth;

    $(window).scroll(function(){

        if(anchoVentana>800){
            
            var scroll = $(window).scrollTop();

            //parallax hacia abajo para el cafe licidad
            // $('header .textos').css({
                // 'transform':'translate(0px,' + scroll/2 + '%)'
                /*acedemos a header, le modificamos su css la propiedad transform,
                *en translate el primer valor representa movimiento horizontal, el segundo vertical
                * La function de CSS translate() recoloca un elemento en el eje horizontal y/o vertical.
                * entonces para el segundo tomamos la distancia del scroll hasta el top?¿?
                * lo dividimos para decidir la velocidad, y que sea en procentaje
                * damn que complejo, y esta concatenado, esa vaina son strings lmao
                * 
                */
            // });

            $('.acercade article').css({
                'transform':'translate(0px,-' + scroll/5 + '%)'
                /* y este esta en negativo para que vaya hacia arriba
                *porque pues scrollea hacia abajo lmao
                */
              
            });
            
        }
    });
    //cada que haya un cambio del tamaño en la ventana(como voltear tabla)
        $(window).resize(function(){


            if(anchoVentana<800){
                $('article .acercade').css({
                    'transform':'translate(0px,0px)'
                    //reiniciaremos sus valores, para asi no se vea feo al hacer resisa
                });
            }

        });

});