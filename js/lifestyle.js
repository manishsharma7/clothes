var list = [], info = [], val = "", color, color_length, c = 0, temp, i, j;
info = [
            [
                "Surprising Uses Of Beer In Life",
                "images/home/beer.jpg",
                "surprising-uses-of-beer-in-life.html",
                "beer uses",
                "Regret consuming a glass of beer last night? Not anymore! With a plethora of reasons to fascinate you, this popular alcoholic beverage will never be stereotyped as just..."
            ],
            [
                "Amazing Uses of Vodka",
                "images/vodka/vodka.jpg",
                "amazing-uses-of-vodka.html",
                "vodka uses",
                "There is no denying that vodka is one of the most popular alcoholic beverages across the globe and it is not hard to fathom why. Vodka is actually neutral having no strong smell and you can easily mix it..."
            ],            
            [
                "7 Reasons Why all men should grow a Mustache",
                "images/home/mustache.jpg",
                "why-all-men-should-grow-a-mustache.html",
                "mustache",
                "The Mustache has always been a part of debate for more than a decade. While some guys love experimenting with their mustache, others like to keep it clean-cut. For some people..."
            ], 
            [
                "Why should we meditate?",
                "images/home/meditation.jpg",
                "why-should-we-meditate.html",
                "meditation",
                "Meditation is an activity that can help us connect with our inner selves which usually gets lost in our busy everyday life. Each day we are exposed to so many types of emotions..."
            ],
            [
                "12 things You Need To Know Before You Get Your First Tattoo",
                "images/home/tattoo.jpg",
                "12-things-you-need-to-know-before-you-get-your-first-tattoo.html",
                "tattoo",
                "Tattoos are the most ongoing accepted craze and fashion trend of the modern generation. It’s a medium of art, where a human body is..."
            ],                       
            [
                "How to Remove a Tattoo Quickly",
                "images/home/remove-tattoo.jpg",
                "how-to-remove-a-tattoo-quickly.html",
                "remove tatto",
                "Tattoos are said to be forever as they serve as a symbol of our beliefs as well as many great passions in life. It is one such art that has been embraced by people of all..."
            ],
            [
                "How To Choose And Maintain Contact Lenses",
                "images/home/contact-lenses.jpg",
                "how-to-choose-and-maintain-contact-lenses.html",
                "contact lenses",
                "Choosing and maintaining contact lenses is an important part of using them. You need to follow a few pointers in order to do it well..."
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
