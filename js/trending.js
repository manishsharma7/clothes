var info = [], bottom_blog = "", side_blog = "", val = "", i, j, temp, height;

val = "<nav class='navbar navbar-default navbar-inverse' role='navigation'>" +
		   "<div class='container-fluid' id='navfluid'>" +
			   "<div class='navbar-header'>" +
				   "<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#navigationbar'>" +
					   "<span class='sr-only'>Toggle navigation</span>" +
					   "<span class='icon-bar'></span>" +
					   "<span class='icon-bar'></span>" +
					   "<span class='icon-bar'></span>" +
					"</button>" +
					"<!--<a class='navbar-brand' href='/'>Home</a>-->" +
			   "</div>" +
			   "<div class='collapse navbar-collapse' id='navigationbar'>" +
				"<ul class='nav navbar-nav'>" +
					"<li><a href='/'>Home</a></li>" +
					"<li><a href='/fashion.html'>Fashion</a></li>" +
					"<li><a href='/fashion-show.html'>Fashion Show</a></li>" +
					"<li><a href='/beauty.html'>Beauty</a></li><li>" +
					"<li><a href='/health.html'>Health</a></li>" +
					"<li><a href='/lifestyle.html'>Lifestyle</a></li>" +
					"<li><a href='/photoshoot.html'>Photoshoot</a></li>" +
					"<li><a href='/jewellery.html'>Jewellery</a></li>" +
					"<li><a href='/contactus.html'>Contact Us</a></li>" +
				"</ul>" +
			  "</div><!-- /.navbar-collapse -->" +
		   "</div><!-- /.container-fluid -->" +
		"</nav>"


$("#menu-bar").html(val);
	
info = [
		[
			"How to keep your skin beautiful and glowing while travelling",
			"/images/beauty/travelling/travelling.jpg",
			"/how-to-keep-your-skin-beautiful-and-glowing-while-travelling.html",
			"Well, if you are someone who often go out on business trips or on vacations with friends and family, then these beauty hacks are surely going to be of great help to you."
		],
		[
			"Golden Tips for a healthy glowing skin",
			"/images/home/tips-for-skin-care.jpg",
			"/beauty/skin-care-tips-for-healthy-glowing-skin.html",
			"Best part of life to have a healthy and beautiful skin, but with all the daily routine problems, hormonal changes, busy life, stress, work, internal and external effects it is obvious to face many skin problems."
		],
		[
			"30+ Unique Photo Ideas To Make Your Wedding Day Memories More Beautiful",
			"/images/home/wedding-photoshoot.jpg",
			"/unique-and-awesome-photoshoot-ideas-for-wedding.html",
			"Photos are the biggest reservoirs of memories and wedding photos are the most important of them all. We have some intriguing ideas..."
		],
		[
			"30 Stunning Mehndi Design That’ll give the Gorgeous Look to you",
			"/images/home/mehndi-design.jpg",
			"/fashion/30-stunning-mehndi-design.html",
			"Mehendis are lovely! Despite the cooling effect and health benefits, mehendis give an elegant look to women. Lately with the..."
		],
		[
			"20+ Gorgeous Bridal Necklaces Designs",
			"/images/home/bridal-necklaces.jpg",
			"/gorgeous-bridal-necklaces-designs.html",
			"Necklaces that will woo you this wedding season. We want you to look stunning this wedding season..."
		],
		[
			"Fawad Khan’s New Photoshoot Will Make You More Crazy For Him",
			"/images/home/fawad-khan-photoshoot.jpg",
			"/fawad-khan-new-photoshoot.html",
			"Fawad Khan’s New Photoshoot Will Make You More Crazy For Him."
		],			
		[
			"Gucci Ready To Wear Summer/Spring 2017 Collection – Milan Fashion Week",
			"/images/home/gucci-1.jpg",
			"/gucci-ready-to-wear-summer-spring-2017-collection-milan-fashion-week.html",
			"Gucci Ready To Wear Summer/Spring 2017 Collection – Milan Fashion Week."
		],
		[
			"7 Reasons Why all men should grow a Mustache",
			"/images/home/mustache.jpg",
			"/why-all-men-should-grow-a-mustache.html",
			"The Mustache has always been a part of debate for more than a decade. While some guys love experimenting with their mustache, others like to keep it clean-cut. For some people, growing a mustache is about looking sexy."
		],
		[
			"Home Remedies For Perfect Hair Straightening",
			"/images/home/hair-straightening.jpg",
			"/home-remedies-for-perfect-hair-straightening.html",
			"When it comes to getting straight hair, the things that come to our minds are harmful heat based products and techniques. But what if you can get healthy straight hair naturally at home without any heat and mess?"
		],
		[
			"10 Time Saving Makeup Tips For Super Busy Working Girls",
			"/images/home/working-girls.jpg",
			"/10-time-saving-makeup-tips-for-super-busy-working-girls.html",
			"Modern women have a plethora of responsibilities on their tender shoulders. It is definitely not easy to handle both home and office and yet manage to look picture perfect throughout the day. Working girls hardly get any time in the morning to spend time"
		],
		[
			"Amazing Uses of Vodka",
			"/images/vodka/vodka.jpg",
			"/amazing-uses-of-vodka.html",
			"There is no denying that vodka is one of the most popular alcoholic beverages across the globe and it is not hard to fathom why. Vodka is actually neutral having no strong smell and you can easily mix it with a bunch of other alcoholic or non-alcoholic beverages..."
		],
		[
			"Why should we meditate?",
			"/images/home/meditation.jpg",
			"/why-should-we-meditate.html",
			"Meditation is an activity that can help us connect with our inner selves which usually gets lost in our busy everyday life. Each day we are exposed to so many types of emotions and stimulus in our lives that we are sometimes not able to handle them. Therefore meditation is the right..."
		],
		[
			"10 Ways Aloe Vera Can Fix Every Skin and Hair Issues You Have",
			"/images/beauty/aloe-vera/aloe-vera.jpg",
			"/10-ways-aloe-vera-can-fix-every-skin-and-hair-issues-you-have.html",
			"Being consistently evident through various studies and research that Aloe Vera is the most useful medicinal plant containing a wealth of nutrients - vitamins, minerals, amino acids and antioxidants. It offers a gamut of health..."
		],
		[
			"Simple Methods to treat Back Pain",
			"/images/health/back-pain/back-pain.jpg",
			"/simple-methods-to-treat-back-pain.html",
			"As we grow older, our body undergoes several changes like we put on weight, our bones become weak, but one of the most annoying problems that come with age is back pain issues. It is one such problem that terribly affects..."
		],
		[
			"Tea Remedies for Sore Throat",
			"/images/health/sore-throat/sore-throat.jpg",
			"/tea-remedies-for-sore-throat.html",
			"A sore throat is one of the most annoying situations that we face in our everyday life. It spoils our mood and it simply takes the fun out of everything that we are doing. A sore throat is a condition that arises due to the inflammation of the pharynx, the part of the throat that lies behind the mouth and the nasal cavity..."
		],
		[
			"Side effects of drinking too much Green Tea",
			"/images/home/green-tea.jpg",
			"/side-effects-of-drinking-too-much-green-tea.html",
			"Whenever we hear the term, 'Green Tea', the thing that first comes in our mind is the health benefits that it offers. In fact, many of us has also included this wonderful beverage to our daily life as it provides tremendous benefits to our body"
		],
		[
			"How to control hair fall and boost hair growth",
			"/images/beauty/hairs/hair-fall.jpg",
			"/how-to-control-hair-fall-and-boost-hair-growth.html",
			"Hair fall is one of the most common woes for both men and women nowadays. It is in fact the most annoying problem that most of us go through today. The reasons that cause baldness and thinning of hair can be many"
		],
		[
			"Get Rid of Dark Circles with these Easy to use Home Remedies",
			"/images/beauty/dark-circles/dark-circles.jpg",
			"/get-rid-of-dark-circles-with-easy-to-use-home-remedies.html",
			"Dark circles, also known as dark rings or shadows are truly one of the most challenging issues faced by individuals nowadays. They are easy to come, but very rigid to get rid of. "
		]
	]

height = Math.max($(document).height(), $(window).height())

info = shuffleList(info);                       
info = info.slice(0, height/210);

for (i=0;i<info.length;i++){
	
	if (i%4 == 0) {			
		bottom_blog = bottom_blog + "<div class='row'>" +						
					"<div class='col-md-12'>"		        
					
		j = i + 3
	}			
	bottom_blog = bottom_blog + "<div class='col-md-3'>" +
		  "<div class='bottom-box'>" +
		  "<a class='link bottom-extra' href='"+info[i][2]+"'>" +
		  "<img src='"+info[i][1]+"' />" +
		  "<div class='bottom-content-extra'><h3>"+info[i][0]+"</h3></div>" +
		  "</a>" +
		  "</div>" +
		  "</div>"
	if ((i > 0 && i==j) || i==info.length-1){
		bottom_blog = bottom_blog + "</div>" +
					"</div> <br />"				
	}
	
	side_blog = side_blog + "<div class='row'><div class='col-md-6'>" +
		  "<a class='link side-extra' href='"+info[i][2]+"'>" +
		  "<img src='"+info[i][1]+"' /></div><div class='col-md-6'> " +
		  "<div class='side-content-extra'>"+info[i][0]+"</div>" +
		  "</a></div></div>" +
		  "<span class='side-line'></span>"
}

function shuffleList(list) {
	for (i = list.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		temp = list[i];
		list[i] = list[j];
		list[j] = temp;
	}
return list;
}	

$("#bottom-bar").html(bottom_blog);
$("#side-bar").html("<br /> <p class='side-trending'>TRENDING</p>" + side_blog);
