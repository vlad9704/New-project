document.addEventListener("DOMContentLoaded", function() {

	$(function($){
		$('[name="mfbPhone"]').mask("+7-(999)-999-99-99");
	});

	//инициализируем галерею ДО запуска слайдера
	var gallery = $('.slide');
	//при клике на ссылку в слайде запускаем галерею
	$('.slide').on('click', function(e) {
		e.preventDefault();
		//узнаём индекс слайда без учёта клонов
		var totalSlides = +$(this).parents('.slider').slick("getSlick").slideCount,
			dataIndex = +$(this).parents('.slide').data('slick-index'),
			trueIndex;
		switch(true){
			case (dataIndex<0):
				trueIndex = totalSlides+dataIndex; break;
			case (dataIndex>=totalSlides):
				trueIndex = dataIndex%totalSlides; break;
			default:
				trueIndex = dataIndex;
		}
		//вызывается элемент галереи, соответствующий индексу слайда
		$.fancybox.open(gallery,{}, trueIndex);
		return false;
	});
	
	$('#gallery_slider').slick({
		slidesToShow: 3,
		responsive: [
			{
			breakpoint: 1000,
	    		settings: {
					slidesToShow: 2,
	    		}
	    	},
	    	{
			breakpoint: 700,
	    		settings: {
					slidesToShow: 1,
	    		}
	    	}
		],   
		prevArrow: '<button style="transform: rotate(180deg)" type="button" class="slick-prev"><img src="images/dest/arrow-left.svg"></button>',
  		nextArrow: '<button type="button" class="slick-next"><img src="images/dest/arrow-left.svg"></button>'
	});

	//SCROLL
	$(window).scroll(function() {
	  	if ($(this).scrollTop() > 500) {
	    	$('.scroll').show(500);
	    	$('header .top_bar').addClass('header_active');
	    	// $('.mobile-menu').addClass('mobile-menu-fixed');
	  	} else {
	    	// $('.header-active').hide(100);
	    	// $('ul li a').parent().removeClass('active');
	    	$('.scroll').slideUp(500);
	    	$('header .top_bar').removeClass('header_active');
	    	// $('.mobile-menu').removeClass('mobile-menu-fixed');
	    }
	});

	// MOBILE-MENU SHOW RIGHT
	$(function openMenu() {
		$('#burger-box').click(function() {
			$(this).toggleClass('center');
			$(this).parent().toggleClass('show');
			$('.burger').toggleClass('closed');
			// $('.burger').toggleClass('burger');
		})
	})

	$('.mobilemenu-block a:not(.dropdown-toggle)').click(function() {
		$(this).parents('.mobilemenu-block').removeClass('show');
		$('#burger-box').removeClass('center');
		$('.burger').toggleClass('closed');
	});


	// SCROLL-TOP
	$('.scroll').click(function() {
		$('body,html').animate({scrollTop: 0}, 1200);
	});

	$("ul li a").on("click", function (event) {
		// var top = null;
	    event.preventDefault();
	    var id = $(this).attr('href'),
	    top = $(id).offset().top;
	    // var px = 'px';
	    $('body,html').animate({scrollTop: top}, 1000);
	    // $('li').siblings().removeClass('active');
		// $(this).parent().addClass('active');
		// $('.mobile-menu ul').hide(500);
		// $('.burger').children().attr('src', 'img/burger.png');
		// $('.mobile').slideUp(500);
	});

	$('body').on('click', '.j_type_window', function () {

		let th = $(this)

		//th.parent().siblings().children().removeClass('active')
		th.toggleClass('active')

	})

});
