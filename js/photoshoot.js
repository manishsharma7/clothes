var list = [], info = [], val = "", color, color_length, c = 0, temp, i, j;
info = [
            [
                "Katrina Kaif is On Bazaar Brides Latest Edition Cover Page",
                "images/photoshoot/katrina-kaif/katrina-kaif-1.jpg",
                "katrina-kaif-is-on-bazaar-brides-latest-edition.html",
                "Katrina Kaif is On Bazaar Brides Latest Edition Cover Page",
                "Bollywood's hot and sizzling dream girl Katrina Kaif is on the latest edition of Bazaar Bride where she can be seen wearing a beige lehenga designed by Manish Malhotra..."
            ],
            [
                "Shraddha Kapoor And Aditya Roy Kapoor On Filmfare Magazine",
                "images/photoshoot/shraddha-aditya/shraddha-aditya-1.jpg",
                "shraddha-kapoor-and-aditya-roy-on-filmfare-magazine.html",
                "shraddha kapoor and aditya roy",
                "Shraddha Kapoor And Aditya Roy Kapoor the hotest couple of bollwood are the latest cover girl and boy of the January 2017 Filmfare Magazine..."
            ],
            [
                "Aishwarya Rai and Ranbir Kapoor Sets Filmfare November Cover 2016 On Fire",
                "images/photoshoot/filmfare/1.jpg",
                "aishwarya-rai-and-ranbir-kapoor-on-filmfare-november-cover-page-2016.html",
                "filmfare cover",
                "Gorgeous Aishwarya Rai and Handsome Hunk Ranbir Kapoor Sets Filmfare November Cover 2016 On Fire."
            ],
            [
                "Akshay Kumar Is  On Harper’s Bazaar India's Cover Page Of October 2016",
                "images/home/akshay-kumar.jpg",
                "akshay-kumar-on-harpers-bazaar-india-cover.html",
                "harpers bazaar india cover",
                "Akshay Kumar is  on Harper’s Bazaar India's cover page of october 2016. Harper’s Bazaar is the india's first ever..."
            ],
            [
                "The Royal Couple Kareena and Saif Coverss Harper's Bazaar Bride Magazine.",
                "images/photoshoot/kareena-saif/kareena-saif-1.jpg",
                "royal-couple-kareena-and-saif-covers-harper-bazaar-bride-november-2016.html",
                "kareena and saif",
                "The Royal Couple Kareena Kapoor Khan and Saif Ali Khan the hotest couple of bollywood will be seen on the November 2016 issue of Harper's Bazaar Bride Magazine..."
            ],
            [
                "Fawad Khan’s New Photoshoot Will Make You More Crazy For Him",
                "images/home/fawad-khan-photoshoot.jpg",
                "fawad-khan-new-photoshoot.html",
                "fawad khan photoshoot",
                "Fawad Khan’s New Photoshoot Will Make You More Crazy For Him."
            ],
            [
                "Alia Bhatt Covers Is On The Verve Magazine Cover Of October 2016",
                "images/home/alia-bhatt.jpg",
                "alia-bhatt-on-covers-verve-magazine-cover.html",
                "verve magazine cover",
                "Alia Bhatt Is On The Verve Magazine Cover Of October 2016. On the cover, she is wearing a beautiful dress designed by Dolly J..."
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
                "Handsome Hunk Siddhartha Malhotra On The Maxim Magazine Cover Of October 2016",
                "images/home/siddhartha-malhotra.jpg",
                "siddhartha-malhotra-on-maxim-magazine-cover.html",
                "maxim magazine cover",
                "Handsome Hunk Siddhartha Malhotra On The Maxim Magazine Cover Of October 2016 and His Hotness Will..."
            ],
            [
                "Aishwarya Rai Is  On Harper’s Bazaar India's Cover Page Of November 2016",
                "images/photoshoot/aishwarya-rai/1.jpg",
                "aishwarya-rai-on-harpers-bazaar-india-cover.html",
                "harpers bazaar india cover",
                "Aishwarya Rai is  on Harper’s Bazaar India's cover page of November 2016. She is looking hot and gorgeous as always..."
            ],
            [
                "26 Stunning Brides from across the World Who Will Change The Way You Feel about Traditional Weddings",
                "images/photoshoot/traditional-brides/traditional-brides-1.jpg",
                "stunning-traditional-brides-from-across-the-world.html",
                "brides",
                "Getting ready as a bride is not just to wear very heavy jewelry and bridal dress and apply..."
            ],
            [
                "30+ Unique Photo Ideas To Make Your Wedding Day Memories More Beautiful",
                "images/home/wedding-photoshoot.jpg",
                "unique-and-awesome-photoshoot-ideas-for-wedding.html",
                "wedding photoshoot",
                "Photos are the biggest reservoirs of memories and wedding photos are the most important of them all..."
            ],
            [
                "Bridal Photography From Tanishq Metro Bride",
                "images/photoshoot/bridal-photography/bridal-photography-1.jpg",
                "bridal-photography-from-tanishq-metro-bride-ad-gallery.html",
                "bridal photography",
                "Today we are presenting bridal photography shots from Tanishq Metro Bride ad Gallery. The man behind all these awesome photography..."
            ],
            [
                "Ranveer Singh Is On November 2016 Filmfare Magazine Cover Page",
                "images/photoshoot/ranveer-singh/1.jpg",
                "ranveer-singh-covers-filmfare-magazine-november-2016.html",
                "filmfare magazine cover",
                "Bollywood Actor Ranveer Singh is the latest cover boy of Filmfare Magazine November 2016, where he has a macho..."
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
