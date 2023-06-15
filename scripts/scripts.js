


window.onload = function(){
    var btnClick = 1    
    $('#btn-side-menu-profile.fa-user').click(function(){
        if(btnClick == 0){
            $('.side-menu').hide()
            btnClick = 1
        }else if(btnClick == 1){
            $('.side-menu').show()
            btnClick = 0
        }
    })
    

    
    // const bebidas = [
    //     'Café expresso',
    //     'Cappuccino',
    //     'Latte',
    //     'Mocha',
    //     'Frappuccino',
    //     'Chá',
    //     'Chocolate quente',
    //   ]
    //   const comidas = [
    //     'Bolo de chocolate',
    //     'Croissant',
    //     'Donuts',
    //     'Muffins (diversos sabores)',
    //     'Cookies (diversos sabores)',
    //     'Sanduíches (diversos tipos, como de frango, queijo, presunto etc.)',
    //     'Saladas',
    //     'Quiches (diversos sabores)',
    //     'Tortas (diversos sabores, como de maçã, limão, morango etc.)',
    //     'Paninis (diversos tipos, como de presunto e queijo, vegetais etc.)',
    //     'Pão de queijo',
    //     'Bagels (diversos sabores)',
    //     'Salgados assados (como empadas, pastéis etc.)'
    //   ]
      
      


    

}