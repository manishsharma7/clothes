var list = [], info = [], val = "", color, color_length, c = 0, temp, i, j;
info = [
            [
                "Home Remedies For Perfect Hair Straightening",
                "images/home/hair-straightening.jpg",
                "home-remedies-for-perfect-hair-straightening.html",
                "home remedies for hair straightening",
                "When it comes to getting straight hair, the things that come to our minds are harmful heat based products and techniques. But what if you can get healthy straight hair naturally at home..."
            ],
            [
                "Golden Tips for a healthy glowing skin",
                "images/home/tips-for-skin-care.jpg",
                "beauty/skin-care-tips-for-healthy-glowing-skin.html",
                "skin care tips for healthy glowing skin",
                "Best part of life to have a healthy and beautiful skin, but with all the daily routine problems, hormonal changes, busy life, stress, work, internal and external effects it is obvious..."
            ],
            [
                "Get Rid of Dark Circles with these Easy to use Home Remedies",
                "images/beauty/dark-circles/dark-circles.jpg",
                "get-rid-of-dark-circles-with-easy-to-use-home-remedies.html",
                "dark circles",
                "Dark circles, also known as dark rings or shadows are truly one of the most challenging issues faced by individuals nowadays. They are easy to come..."
            ],
            [
                "How to control hair fall and boost hair growth",
                "images/beauty/hairs/hair-fall.jpg",
                "how-to-control-hair-fall-and-boost-hair-growth.html",
                "control hair fall",
                "Hair fall is one of the most common woes for both men and women nowadays. It is in fact the most annoying problem that most of us go through today. The reasons that cause..."
            ],
            [
                "How To Choose And Maintain Contact Lenses",
                "images/home/contact-lenses.jpg",
                "how-to-choose-and-maintain-contact-lenses.html",
                "contact lenses",
                "Choosing and maintaining contact lenses is an important part of using them. You need to follow a few pointers in order to do it well..."
            ],
            [
                "10 Ways Aloe Vera Can Fix Every Skin and Hair Issues You Have",
                "images/beauty/aloe-vera/aloe-vera.jpg",
                "10-ways-aloe-vera-can-fix-every-skin-and-hair-issues-you-have.html",
                "aloe vera for skin and hairs",
                "Being consistently evident through various studies and research that Aloe Vera is the most useful medicinal plant containing a wealth of nutrients..."
            ],
            [
                "10 Time Saving Makeup Tips For Super Busy Working Girls",
                "images/home/working-girls.jpg",
                "10-time-saving-makeup-tips-for-super-busy-working-girls.html",
                "time saving makeup tips",
                "Modern women have a plethora of responsibilities on their tender shoulders. It is definitely not easy to handle both home and office and yet manage to look picture perfect..."
            ],
            [
                "7 Reasons Why all men should grow a Mustache",
                "images/home/mustache.jpg",
                "why-all-men-should-grow-a-mustache.html",
                "mustache",
                "The Mustache has always been a part of debate for more than a decade. While some guys love experimenting with their mustache, others like to keep it clean-cut. For some people, growing a..."
            ],            
            [
                "How to keep your skin beautiful and glowing while travelling",
                "images/beauty/travelling/travelling.jpg",
                "how-to-keep-your-skin-beautiful-and-glowing-while-travelling.html",
                "beautiful skin",
                "Well, if you are someone who often go out on business trips or on vacations with friends and family, then these beauty hacks are surely going to be..."
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
