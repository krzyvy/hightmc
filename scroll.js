jQuery(function($)
		{
            $.scrollTo(0);
			
			$('#link1').click(function() { $.scrollTo($('.admini'), 500); });
			$('#link2').click(function() { $.scrollTo($('.shop'), 500); });
			$('#link3').click(function() { $.scrollTo($('.rankings'), 500); });
	
			$('.scrollup').click(function() { $.scrollTo($('body'), 500); });
		}
		);
		
		$(window).scroll(function()
		{
			if($(this).scrollTop()>300) $('.scrollup').fadeIn();
			else $('.scrollup').fadeOut();		
		}
		);
	