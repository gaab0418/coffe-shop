


window.onload = function(){
    var btnClick = 1    
    var comentsLenght = $('.coment-wrapper .coment-gp').length
    var curIndex = 0
    var delay = 4500




    $('#btn-side-menu-profile.fa-user').click(function(){
        if(btnClick == 0){
            $('.side-menu').hide()
            btnClick = 1
        }else if(btnClick == 1){
            $('.side-menu').show()
            btnClick = 0
        }
    })
    

    /*
    const bebidas = [
        'Café expresso',
        'Cappuccino',
        'Latte',
        'Mocha',
        'Frappuccino',
        'Chá',
        'Chocolate quente',
      ]
      const comidas = [
        'Bolo de chocolate',
        'Croissant',
        'Donuts',
        'Muffins (diversos sabores)',
        'Cookies (diversos sabores)',
        'Sanduíches (diversos tipos, como de frango, queijo, presunto etc.)',
        'Saladas',
        'Quiches (diversos sabores)',
        'Tortas (diversos sabores, como de maçã, limão, morango etc.)',
        'Paninis (diversos tipos, como de presunto e queijo, vegetais etc.)',
        'Pão de queijo',
        'Bagels (diversos sabores)',
        'Salgados assados (como empadas, pastéis etc.)'
      ]
    */

    initSlider()
    function initSlider(){
        $('.coment-wrapper').css('width',100*comentsLenght+'%')
        $('.coment-gp').css('width',100/comentsLenght+'%')
        for(let i = 0; i < comentsLenght; i++){
            if(i == 0)
                $('.bullets-slide').append('<span class="clicked"></span>')
            else
                $('.bullets-slide').append('<span></span>')
        }
    }

    autoPlay()
    navgateToSlide()

    
    function navgateToSlide(){
        $('.bullets-slide span').click(function(){
            let index = $(this).index()
            goToSlider(curIndex = index)
            $('.comentarios-wrapper').stop()
        })

    }

    function autoPlay(){
        setInterval(function() {
            curIndex++
            if(curIndex == comentsLenght)
                curIndex = 0
            goToSlider(curIndex)
        }, delay);

    }

    function goToSlider(ind){
        var offSetX = $('.coment-gp').eq(ind).offset().left - $('.coment-wrapper').offset().left
        // console.log(ind, '', offSetX, '',a,b)
        $('.bullets-slide span').removeClass('clicked')
        $('.bullets-slide span').eq(ind).addClass('clicked')
        $('.comentarios-wrapper').animate({'scrollLeft':offSetX}, 600)
    }


}