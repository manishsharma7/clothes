var list = [], info = [], val = "", color, color_length, c = 0, temp, i, j;
info = [
            [
                "30 Beautiful Bridal Jewellery Designs",
                "images/fashion/jewellery/bridal-jewellery/bridal-jewellery-1.jpg",
                "30-beautiful-bridal-jewellery-designs.html",
                "bridal jewellery designs",
                "Bridal jewelry has a great importance especially in Asian countries like India and Pakistan. The jewelry must be chosen in accordance with your bridal dress..."
            ],
            [
                "40 Gorgeous Headpieces Designs for Indian Brides",
                "images/home/headpieces.jpg",
                "40-gorgeous-headpieces-designs-for-indian-brides.html",
                "headpieces designs",
                "Headpieces are the prettiest jewelry pieces that really give a bride an actual look on her wedding day. Without headpiece, the jewelry of the..."
            ],
            [
                "Gorgeous Indian Bridal Looks",
                "images/fashion/indian-bride/indian-bride-1.jpg",
                "gorgeous-indian-bridal-looks.html",
                "indian bridal looks",
                "On the day of your wedding, it is the time to make everything perfect; especially your makeup and your bridal looks. However, there are lots of girls even who are quite..."
            ],
            [
                "20+ Gorgeous Bridal Necklaces Designs",
                "images/home/bridal-necklaces.jpg",
                "gorgeous-bridal-necklaces-designs.html",
                "bridal necklaces design",
                "Necklaces that will woo you this wedding season. We want you to look stunning this wedding season..."
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
                "20 Gorgeous Earrings Designs For Indian Brides",
                "images/fashion/jewellery/earrings/earrings-1.jpg",
                "20-gorgeous-earrings-designs-for-indian-brides.html",
                "earrings designs",
                "Most of the Indian brides like to wear some heavy earrings on the day of their wedding along with the other jewelry like a necklace and everything..."
            ],
            [
                "20 Stunning Bracelet Designs",
                "images/fashion/jewellery/bracelet/bracelet-1.jpg",
                "20-stunning-bracelet-designs.html",
                "bracelet designs",
                "Bracelets are liked by lots of girls to be worn on different days and special occasions. Brides also sometimes like to wear some heavy bracelets on their wedding day along with..."
            ],
            [
                "Stunning Rings - Lust Collections",
                "images/fashion/jewellery/rings/rings-1.jpg",
                "stunning-rings-lust-collections.html",
                "rings lust collections",
                "Buying ring is considered to be one of the most favorite parts of the bride. One of the most special rings is the wedding ring that the groom buys for her bride. It must be special..."
            ],
            [
                "Bridal Photography From Tanishq Metro Bride",
                "images/photoshoot/bridal-photography/bridal-photography-1.jpg",
                "bridal-photography-from-tanishq-metro-bride-ad-gallery.html",
                "bridal photography",
                "Today we are presenting bridal photography shots from Tanishq Metro Bride ad Gallery. The man behind all these awesome photography..."
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
