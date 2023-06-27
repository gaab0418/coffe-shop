


window.onload = function(){
    var btnClick = 1  
    var btnClick2 = 1  
    var comentsLenght = $('.coment-wrapper .coment-gp').length
    var curIndex = 0
    var delay = 4500
    const dropdownProds = $('.produtos-list')
    const dropdownProdsIcon = $('.dropdown-pd-list label i')
    
    $('.menu-mobile,.side-menu').hide()

    window.onresize = function(){
        if($(window).width() <= 800 && $(window).width() >= 700){
            $('.menu-mobile,.side-menu').hide()
        }
    }
    

    
        $('li a').click(function(){
            var href = $(this).attr('href')
            var oftp = $(href).offset().top

            $('html,body').animate({'scrollTop':oftp})
        })
            





    $('a,input[type=submit]').click(() => {
        return false
    })

    $('#btn-side-menu-profile.fa-user').click(() => {
        if(btnClick == 0){
            $('.side-menu').hide()
            btnClick = 1
        }else if(btnClick == 1){
            $('.side-menu').show()
            btnClick = 0
        }
    })
    $('.mobile-nav-bar').click(() => {
        if(btnClick2 == 0){
            $('.menu-mobile').hide()
            btnClick2 = 1
        }else if(btnClick2 == 1){
            $('.menu-mobile').show()
            btnClick2 = 0
        }
    })

    $('.lb-dp').click(() => {
        var el = $('.lb-dp').is(':checked')
        // console.log(el)
        if(el == true){
            dropdownProds.css('display','flex')
            dpChangeClass(1)
        }else{
            dropdownProds.css('display','none')
            dpChangeClass(2)
        }
    })
    function dpChangeClass(f){
        if(f == 1){
            dropdownProdsIcon.removeClass('fa-caret-down')
            dropdownProdsIcon.addClass('fa-caret-up')
        }else if(f == 2){
            dropdownProdsIcon.removeClass('fa-caret-up')
            dropdownProdsIcon.addClass('fa-caret-down')
        }
    }

    

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
    autoPlay()
    navgateToSlide()

    addItemsCardapio()

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
    function navgateToSlide(){
        $('.bullets-slide span').click(function(){
            let index = $(this).index()
            goToSlider(curIndex = index)
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

        


    function addItemsCardapio(){
        var n = 'Item Name'
        var d = 'Simple Description Simple Description Simple Description'

        for(let i = 0;i < 8;i++){
            var p = Math.floor(Math.random() * 999) + 1
            const newItem =  `
            <div class="cardapio-item"> 
                <div class="card-header"></div> 
                <div class="card-body"> 
                    <h2 class="card-name">${n}</h2> 
                    <p class="card-description">${d}</p> 
                    <h2 class="card-price">R$<span>${p}</span></h2> 
                    <div class="card-buttons"> 
                        <h2 class="btn">Comprar</h2> 
                        <i class="btn fa-solid fa-basket-shopping"></i> 
                        <i class="btn fa-solid fa-heart"></i> 
                    </div> 
                </div> 
            </div>`
        
            $('.cardapio-wrapper').append(newItem)
        }
    }
    
    
}