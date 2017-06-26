var list = [], info = [], val = "", color, color_length, c = 0, temp, i, j;
info = [
			 [
                "Dolce And Gabbana Ready To Wear Summer/Spring 2017 Collection - Milan Fashion Week",
                "images/home/dolce-gabbana-1.jpg",
                "dolce-gabbana-ready-to-wear-summer-spring-2017-collection-milan-fashion-week.html",
                "dolce gabbana collection milan fashion week",
                "Dolce And Gabbana Ready To Wear Summer/Spring 2017 Collection-Milan Fashion Week."
            ],
            [
                "Fendi Ready To Wear Summer/Spring 2017 Collection - Milan Fashion Week",
                "images/home/fendi-1.jpg",
                "fendi-ready-to-wear-summer-spring-2017-collection-milan-fashion-week.html",
                "fendi collection milan fashion week",
                "Fendi Ready To Wear Summer/Spring 2017 Collection - Milan Fashion Week."
            ],        
            [
                "Gucci Ready To Wear Summer/Spring 2017 Collection - Milan Fashion Week",
                "images/home/gucci-1.jpg",
                "gucci-ready-to-wear-summer-spring-2017-collection-milan-fashion-week.html",
                "gucci collection milan fashion week",
                "Gucci Ready To Wear Summer/Spring 2017 Collection - Milan Fashion Week."
            ],
            [
                "Prada Ready To Wear Summer/Spring 2017 Collection - Milan Fashion Week",
                "images/home/prada-1.jpg",
                "prada-ready-to-wear-summer-spring-2017-collection-milan-fashion-week.html",
                "prada collection milan fashion week",
                "Prada Ready To Wear Summer/Spring 2017 Collection - Milan Fashion Week."                
            ],
            [
                "Lakme Fashion Week 2016 - Ridhi Mehra  Collection",
                "images/home/ridhi-mehra-lakme-fashion-week-2016-16-1.jpg",
                "fashion/lakme-fashion-week-2016/ridhi-mehra-collection.html",
                "lakme fashion week ridhi mehra collection",
                "Stunning designs of Ridhi Mehra at Lakme Fashion Week 2016. With our photos this week, we have brought to you the most gracious..."
            ],
            [
                "Lakme Fashion Week 2016 - Sivan Narresh Collection",
                "images/home/sivan-narresh-lakme-fashion-week-2016-1.jpg",
                "fashion/lakme-fashion-week-2016/sivan-narresh-collection.html",
                "lakme fashion week sivan narresh collection",
                "Sivan Narresh collection in lakme fashion week 2016."
            ],
            [
                "Lakme Fashion Week 2016 - Anushree Reddy Collection",
                "images/home/anushree-reddy-lakme-fashion-week-2016-1.jpg",
                "fashion/lakme-fashion-week-2016/anushree-reddy-collection.html",
                "lakme fashion week anushree reddy collection",
                "Anushree Reddy collection in lakme fashion week 2016."
            ],
            [
                "Lakme Fashion Week 2016 - Manish Malhotra Collection",
                "images/home/manish-malhotra-lakme-fashion-week-2016-1.jpg",
                "fashion/lakme-fashion-week-2016/manish-malhotra-collection.html",
                "lakme fashion week manish malhotra collection",
                "Manish Malhotra collection in lakme fashion week 2016."
            ],
            [
                "Lakme Fashion Week 2016 - Shantanu Nikhil Collection",
                "images/home/shantanu-nikhil-lakme-fashion-week-2016-1.jpg",
                "fashion/lakme-fashion-week-2016/shantanu-nikhil-collection.html",
                "lakme fashion week shantanu nikhil collection",
                "Shantanu Nikhil collection in lakme fashion week 2016.    "
            ],
            [
                "Lakme Fashion Week 2016 - Payal Singhal Collection",
                "images/home/payal-singhal-collection-2016-1.jpg",
                "fashion/lakme-fashion-week-2016/payal-singhal-collection.html",
                "lakme fashion week payal singhal collection",
                "Payal Singhal collection in lakme fashion week 2016."
            ],
            [
                "Lakme Fashion Week 2016 - Payal Khandwala Collection",
                "images/home/payal-khandwala-lakme-fashion-week-2016-1.jpg",
                "fashion/lakme-fashion-week-2016/payal-khandwala-collection.html",
                "lakme fashion week payal khandwala collection",
                "Payal Khandwala collection in lakme fashion week 2016."
            ],
            [
                "Ferragamo Ready To Wear Summer/Spring 2017 Collection - Milan Fashion Week",
                "images/home/ferragamo-1.jpg",
                "ferragamo-ready-to-wear-summer-spring-2017-collection-milan-fashion-week.html",
                "ferragamo collection milan fashion week",
                "Ferragamo Ready To Wear Summer/Spring 2017 Collection - Milan Fashion Week."
            ],
            [
                "Bottega Veneta Ready To Wear Summer/Spring 2017 Collection - Milan Fashion Week",
                "images/home/bottega-veneta-1.jpg",
                "bottega-veneta-ready-to-wear-summer-spring-2017-collection-milan-fashion-week.html",
                "bottega veneta collection milan fashion week",
                "Bottega Veneta Ready To Wear Summer/Spring 2017 Collection-Milan Fashion Week."
            ],
            [
                "Versace Ready To Wear Summer/Spring 2017 Collection - Milan Fashion Week",
                "images/home/versace-1.jpg",
                "versace-ready-to-wear-summer-spring-2017-collection-milan-fashion-week.html",
                "versace collection milan fashion week",
                "Versace Ready To Wear Summer/Spring 2017 Collection - Milan Fashion Week."
            ],
            [
                "Balmain Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week",
                "images/home/balmain-1.jpg",
                "fashion-show/paris-fashion-week-balmain-ready-to-wear-summer-spring-2017-collection.html",
                "paris fashion week balmain collection",
                "Balmain Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week."
            ],
            [
                "Chloe Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week",
                "images/home/chloe-1.jpg",
                "fashion-show/paris-fashion-week-chloe-ready-to-wear-summer-spring-2017-collection.html",
                "paris fashion week chloe collection",
                "Chloe Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week."
            ],
            [
                "Dior Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week",
                "images/home/dior-1.jpg",
                "fashion-show/paris-fashion-week-dior-ready-to-wear-summer-spring-2017-collection.html",
                "paris fashion week dior collection",
                "Dior Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week."
            ],
            [
                "Dries Van Noten Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week",
                "images/home/dries-van-noten-1.jpg",
                "fashion-show/paris-fashion-week-dries-van-noten-ready-to-wear-summer-spring-2017-collection.html",
                "paris fashion week dries van noten collection",
                "Dries Van Noten Ready To Wear Summer/Spring 2017 Collection - Paris Fashion"
            ],
            [
                "Elie Saab Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week",
                "images/home/elie-saab-1.jpg",
                "fashion-show/paris-fashion-week-elie-saab-ready-to-wear-summer-spring-2017-collection.html",
                "paris fashion week elie saab collection",
                "Elie Saab Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week."
            ],
            [
                "Isabel Marrant Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week",
                "images/home/isabel-marrant-1.jpg",
                "fashion-show/paris-fashion-week-isabel-marrant-ready-to-wear-summer-spring-2017-collection.html",
                "paris fashion week isabel marrant collection",
                "Isabel Marrant Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week."
            ],
            [
                "Mugler Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week",
                "images/home/mugler-1.jpg",
                "fashion-show/paris-fashion-week-mugler-ready-to-wear-summer-spring-2017-collection.html",
                "paris fashion week mugler collection",
                "Mugler Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week."
            ],
            [
                "Louis Vuitton By Nicolas Ghesquiere Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week",
                "images/fashion-show/paris-fashion-week/louis-vuitton-nicolas-ghesquiere-1.jpg",
                "fashion-show/paris-fashion-week-louis-vuitton-nicolas-ghesquiere-ready-to-wear-summer-spring-2017-collection.html",
                "paris fashion week louis vuitton nicolas ghesquiere collection",
                "Louis Vuitton By Nicolas Ghesquiere Ready To Wear Summer/Spring"
            ],
            [
                "Miu Miu Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week",
                "images/fashion-show/paris-fashion-week/miu-miu-1.jpg",
                "fashion-show/paris-fashion-week-miu-miu-ready-to-wear-summer-spring-2017-collection.html",
                "paris fashion week miu miu collection",
                "Miu Miu Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week."
            ],
            [
                "Sonia Rykiel Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week",
                "images/fashion-show/paris-fashion-week/sonia-rykiel-1.jpg",
                "fashion-show/paris-fashion-week-sonia-rykiel-ready-to-wear-summer-spring-2017-collection.html",
                "paris fashion week sonia rykiel collection",
                "Sonia Rykiel Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week."
            ],
            [
                "Chanel Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week",
                "images/fashion-show/paris-fashion-week/chanel-1.jpg",
                "fashion-show/paris-fashion-week-chanel-ready-to-wear-summer-spring-2017-collection.html",
                "paris fashion week chanel collection",
                "Chanel Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week."
            ],
            [
                "Kenzo Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week",
                "images/fashion-show/paris-fashion-week/kenzo-1.jpg",
                "fashion-show/paris-fashion-week-kenzo-ready-to-wear-summer-spring-2017-collection.html",
                "paris fashion week kenzo collection",
                "Kenzo Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week."
            ],
            [
                "Givenchy By Riccardo Tisci Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week",
                "images/fashion-show/paris-fashion-week/givenchy-by-riccardo-tisci-1.jpg",
                "fashion-show/paris-fashion-week-givenchy-by-riccardo-tisci-ready-to-wear-summer-spring-2017-collection.html",
                "paris fashion week givenchy by riccardo tisci collection",
                "Givenchy By Riccardo Tisci Ready To Wear Summer/Spring 2017 Collection - Paris Fashion"
            ],
            [
                "Hermes Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week",
                "images/fashion-show/paris-fashion-week/hermes-1.jpg",
                "fashion-show/paris-fashion-week-hermes-ready-to-wear-summer-spring-2017-collection.html",
                "paris fashion week hermes collection",
                "Hermes Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week."
            ],
            [
                "Alexander Mcqueen Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week",
                "images/fashion-show/paris-fashion-week/alexander-mcqueen-1.jpg",
                "fashion-show/paris-fashion-week-alexander-mcqueen-ready-to-wear-summer-spring-2017-collection.html",
                "paris fashion week alexander mcqueen collection",
                "Alexander Mcqueen Ready To Wear Summer/Spring 2017 Collection-Paris Fashion Week."
            ],
            [
                "Roland Mouret Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week",
                "images/fashion-show/paris-fashion-week/roland-mouret-1.jpg",
                "fashion-show/paris-fashion-week-roland-mouret-ready-to-wear-summer-spring-2017-collection.html",
                "paris fashion week roland mouret collection",
                "Roland Mouret Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week."
            ],
            [
                "Valentino Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week",
                "images/fashion-show/paris-fashion-week/valentino-1.jpg",
                "fashion-show/paris-fashion-week-valentino-ready-to-wear-summer-spring-2017-collection.html",
                "paris fashion week valentino collection",
                "Valentino Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week."
            ],
            [
                "Haider Ackermann Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week",
                "images/fashion-show/paris-fashion-week/haider-ackermann-1.jpg",
                "fashion-show/paris-fashion-week-haider-ackermann-ready-to-wear-summer-spring-2017-collection.html",
                "paris fashion week haider ackermann collection",
                "Haider Ackermann Ready To Wear Summer/Spring 2017 Collection-Paris Fashion Week."
            ],
            [
                "Celine Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week",
                "images/fashion-show/paris-fashion-week/celine-1.jpg",
                "fashion-show/paris-fashion-week-celine-ready-to-wear-summer-spring-2017-collection.html",
                "paris fashion week celine collection",
                "Celine Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week."
            ],                    
            [
                "Balenciaga Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week",
                "images/fashion-show/paris-fashion-week/balenciaga-1.jpg",
                "fashion-show/paris-fashion-week-balenciaga-ready-to-wear-summer-spring-2017-collection.html",
                "paris fashion week balenciaga collection",
                "Balenciaga Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week."
            ],
            [
                "Rahul Mishra Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week",
                "images/fashion-show/paris-fashion-week/rahul-mishra-1.jpg",
                "fashion-show/paris-fashion-week-rahul-mishra-ready-to-wear-summer-spring-2017-collection.html",
                "paris fashion week rahul mishra collection",
                "Rahul Mishra Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week."
            ],
            [
                "Bouchra Jarrar For Lanvin Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week",
                "images/fashion-show/paris-fashion-week/bouchra-jarrar-lanvin-1.jpg",
                "fashion-show/paris-fashion-week-bouchra-jarrar-lanvin-ready-to-wear-summer-spring-2017-collection.html",
                "paris fashion week bouchra jarrar lanvin collection",
                "Bouchra Jarrar For Lanvin Ready To Wear Summer/Spring 2017 Collection - Paris Fashion"
            ],
            [
                "YSL Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week",
                "images/fashion-show/paris-fashion-week/ysl-1.jpg",
                "fashion-show/paris-fashion-week-ysl-ready-to-wear-summer-spring-2017-collection.html",
                "paris fashion week ysl collection",
                "YSL Ready To Wear Summer/Spring 2017 Collection - Paris Fashion Week."
            ]
		]
				   
color = ["#D1F6D2","#6BD3F8","#BDEDAB","#E3D3B1","#DDD6D6","#E5C0C7","#A2EFE9","#F4E8E8","#C3C2BE","#E9EAE5"];
color = shuffleList(color);
color_length = color.length;
 
for (i=0;i<info.length;i++){   
    if (i%color_length == 0){
        c = 0;    
    }                
    c = c + 1;
    
    if (i != 0 && i%6 == 0) {
        val = val + "<div class='row text-center'>"                     
        val = val + '<script data-cfasync="false" type="text/javascript" src="http://www.liveadexchanger.com/a/display.php?r=1461141"></script>'
        val = val + "</div>"
    }
    
    if (i%3 == 0){            
        val = val + "<div class='row text-center'>" +                        
                    "<div class='col-md-12'>"
        j = i + 3
    }
               
	val = val + "<a class='link' href='"+info[i][2]+"'>" +                    
		  "<div class='col-md-4 box-top'>" +                        
		  "<img src='"+info[i][1]+"' alt='"+info[i][3]+"' />" +
		  "<div class='box effect1' style='background-color:"+color[c]+";'>" +
		  "<h3 class='headline'>"+info[i][0]+"</h3>" +    
		  info[i][4] +
		  //"<div class='read-more'><a href='"+info[t][2]+"'>Continue...</a></div>" +
		  "</div>" +                        
		  "</div>" +                
		  "</a>"
		
	if (j-1 == i || i==info.length-1){ 
		val = val + "</div>" +
                    "</div>"
	}
    
    $("#id_content").html(val);
}

console.log(val);
function shuffleList(list) {
    for (i = list.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = list[i];
        list[i] = list[j];
        list[j] = temp;
    }
return list;
}
