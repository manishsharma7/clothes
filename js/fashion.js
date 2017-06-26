var list = [], info = [], val = "", color, color_length, c = 0, temp, i, j;
info = [
            [
                "12 things You Need To Know Before You Get Your First Tattoo",
                "images/home/tattoo.jpg",
                "12-things-you-need-to-know-before-you-get-your-first-tattoo.html",
                "tattoo",
                "Tattoos are the most ongoing accepted craze and fashion trend of the modern generation. It’s a medium of art, where a human body is used as a canvas..."
            ],
            [
                "30 Stunning Mehndi Design That’ll give the Gorgeous Look to you",
                "images/home/mehndi-design.jpg",
                "fashion/30-stunning-mehndi-design.html",
                "mehndi design",
                "Mehendis are lovely! Despite the cooling effect and health benefits, mehendis give an elegant look to women. Lately with the..."
            ],
            [
                "20+ Gorgeous Bridal Necklaces Designs",
                "images/home/bridal-necklaces.jpg",
                "gorgeous-bridal-necklaces-designs.html",
                "bridal necklaces design",
                "Necklaces that will woo you this wedding season. We want you to look stunning this wedding season..."
            ],
            [
                "How to Remove a Tattoo Quickly",
                "images/home/remove-tattoo.jpg",
                "how-to-remove-a-tattoo-quickly.html",
                "remove tatto",
                "Tattoos are said to be forever as they serve as a symbol of our beliefs as well as many great passions in life. It is one such art that has been embraced by people of all ages..."
            ],
            [
                "25 Stunning Naths Design That’ll give the Gorgeous Look to Every Bride",
                "images/home/nath-design.jpg",
                "fashion/25-stunning-naths-design.html",
                "naths design",
                "Naths are the most traditional and important piece of jewelry according to for Indian..."            
            ],
            [
                "30+ Haathphool Designs That Will Give You A Gorgeous Look",
                "images/home/haathphool-design.jpg",
                "haathphool-designs-bride-jewellery.html",
                "haathphool designs",
                "30+ Haathphool Designs That Will Give You A Gorgeous Look."
            ],
            [
                "Aishwarya Rai and Ranbir Kapoor Sets Filmfare November Cover 2016 On Fire",
                "images/photoshoot/filmfare/1.jpg",
                "aishwarya-rai-and-ranbir-kapoor-on-filmfare-november-cover-page-2016.html",
                "filmfare cover",
                "Gorgeous Aishwarya Rai and Handsome Hunk Ranbir Kapoor Sets Filmfare November Cover 2016 On Fire."
            ],
            [
                "Aishwarya Rai Is  On Harper’s Bazaar India's Cover Page Of November 2016",
                "images/photoshoot/aishwarya-rai/1.jpg",
                "aishwarya-rai-on-harpers-bazaar-india-cover.html",
                "harpers bazaar india cover",
                "Aishwarya Rai is  on Harper’s Bazaar India's cover page of November 2016. She is looking hot and gorgeous as always and wearing dress designed by..."
            ],
            [
                "Akshay Kumar Is  On Harper’s Bazaar India's Cover Page Of October 2016",
                "images/home/akshay-kumar.jpg",
                "akshay-kumar-on-harpers-bazaar-india-cover.html",
                "harpers bazaar india cover",
                "Akshay Kumar is  on Harper’s Bazaar India's cover page of october 2016. Harper’s Bazaar is the india's first ever men's only edition."
            ],
            [
                "How To Choose And Maintain Contact Lenses",
                "images/home/contact-lenses.jpg",
                "how-to-choose-and-maintain-contact-lenses.html",
                "contact lenses",
                "Choosing and maintaining contact lenses is an important part of using them. You need to follow a few pointers in order to do it well..."
            ],
            [
                "Handsome Hunk Siddhartha Malhotra On The Maxim Magazine Cover Of October 2016",
                "images/home/siddhartha-malhotra.jpg",
                "siddhartha-malhotra-on-maxim-magazine-cover.html",
                "maxim magazine cover",
                "Handsome Hunk Siddhartha Malhotra On The Maxim Magazine Cover Of October 2016 and His Hotness Will..."
            ],
            [
                "Alia Bhatt Covers Is On The Verve Magazine Cover Of October 2016",
                "images/home/alia-bhatt.jpg",
                "alia-bhatt-on-covers-verve-magazine-cover.html",
                "verve magazine cover",
                "Alia Bhatt Is On The Verve Magazine Cover Of October 2016. On the cover, she is wearing a beautiful dress designed by Dolly J..."
            ],
            [
                "Fawad Khan’s New Photoshoot Will Make You More Crazy For Him",
                "images/home/fawad-khan-photoshoot.jpg",
                "fawad-khan-new-photoshoot.html",
                "fawad khan photoshoot",
                "Fawad Khan’s New Photoshoot Will Make You More Crazy For Him."
            ],
            [
                "Ranveer Singh Is On November 2016 Filmfare Magazine Cover Page",
                "images/photoshoot/ranveer-singh/1.jpg",
                "ranveer-singh-covers-filmfare-magazine-november-2016.html",
                "filmfare magazine cover",
                "Bollywood Actor Ranveer Singh is the latest cover boy of Filmfare Magazine November 2016, where he has a macho avatar with long beard and mustache..."
            ],
            [
                "Priyanka Chopra's Gorgeous New Photoshoto For GQ Magazine",
                "images/home/gq-magazine.jpg",
                "fashion/priyanka-chopras-gorgeous-new-photoshoot-gq-magazine.html",
                "gq magazine photoshoot",
                "Priyanka Chopra's Gorgeous New Photoshoto For GQ Magazine."
            ],        
            [
                "Some Awesome Pictures Of Hot Sushant Singh Rajput That Will Make You Forget Your Other Crushes",
                "images/home/sushant-singh-rajput-photoshoot.jpg",
                "pictures-of-sushant-singh-rajput.html",
                "sushant singh rajput photoshoot",
                "Awesome Pictures Of Hot Sushant Singh Rajput That Will Make You..."
            ],
            [
                "Shweta Salve Just Did a Pregnancy Photoshoot",
                "images/home/shweta-salve.jpg",
                "shweta-salve-pregnancy-photoshoot.html",
                "shweta salve pregnancy photoshoot",
                "Shweta Salve Just Did a Pregnancy Photoshoot."
            ],
            [
                "Priyanka Chopra at the Emmys Red Carpet",
                "images/home/priyanka-chopra-at-emmys-red-carpet.jpg",
                "priyanka-chopra-at-the-emmys-red-carpet.html",
                "emmys red carpet",
                "The Emmy Awards, the biggest night in the history of West, just wrapped up, and our forever crush Priyanka Chopra just killed it with her hot and stunning look."
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
