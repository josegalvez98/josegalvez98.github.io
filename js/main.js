$(document).ready(function(){

    $(window).on('scroll', function(){
        let posicion = $('#pr').offset();
        if ($(window).scrollTop() >= posicion.top){
            $('header').removeClass('transparent');
        } else {
            $('header').addClass('transparent');
        }
    })

    $('a').on('click',function(){
        if (this.hash !== ''){
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            })
        }

    })


    $('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});
})