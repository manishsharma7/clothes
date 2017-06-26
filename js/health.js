var list = [], info = [], val = "", color, color_length, c = 0, temp, i, j;
info = [
            [
                "Simple Methods to treat Back Pain",
                "images/health/back-pain/back-pain.jpg",
                "simple-methods-to-treat-back-pain.html",
                "treat back pain",
                "As we grow older, our body undergoes several changes like we put on weight, our bones become weak, but one of the most annoying problems that come with age is back pain issues..."
            ],
            [
                "Tea Remedies for Sore Throat",
                "images/health/sore-throat/sore-throat.jpg",
                "tea-remedies-for-sore-throat.html",
                "tea remedies for sore throat",
                "A sore throat is one of the most annoying situations that we face in our everyday life. It spoils our mood and it simply takes the fun out of everything that we are doing. A sore throat is a condition that arises due to the..."
            ],
            [
                "Side effects of drinking too much Green Tea",
                "images/home/green-tea.jpg",
                "side-effects-of-drinking-too-much-green-tea.html",
                "side effects of green tea",
                "Whenever we hear the term, 'Green Tea', the thing that first comes in our mind is the health benefits that it offers. In fact, many of us has also included this wonderful beverage to our daily life..."
            ],
            [
                "When You Drink Water On An Empty Stomach After Waking Up, These 8 Amazing Things Will Happen",
                "images/home/drink-water.jpg",
                "when-you-drink-water-on-an-empty-stomach-after-waking-up-these-8-amazing-things-will-happen.html",
                "drink water",
                "Water represents 70% of the composition of our body and is indispensable to keep it healthy..."
            ],
            [
                "How To Choose And Maintain Contact Lenses",
                "images/home/contact-lenses.jpg",
                "how-to-choose-and-maintain-contact-lenses.html",
                "contact lenses",
                "Choosing and maintaining contact lenses is an important part of using them. You need to follow a few pointers in order to do it well..."
            ],
            [
                "Surprising Uses Of Beer In Life",
                "images/home/beer.jpg",
                "surprising-uses-of-beer-in-life.html",
                "beer uses",
                "Regret consuming a glass of beer last night? Not anymore! With a plethora of reasons to fascinate you, this popular alcoholic beverage will never be stereotyped as just another drink..."
            ],
            [
                "Why Squatting Is Better Than Running",
                "images/home/squatting.jpg",
                "why-squatting-is-better-than-running.html",
                "squatting",
                "Squatting and Running are common physical activities which keep you live and active, all day round. And as a part of your daily fitness regime, you probably prefer running to squatting..."
            ],
            [
                "Amazing Uses of Vodka",
                "images/vodka/vodka.jpg",
                "amazing-uses-of-vodka.html",
                "vodka uses",
                "There is no denying that vodka is one of the most popular alcoholic beverages across the globe and it is not hard to fathom why. Vodka is actually neutral having no strong smell and you can easily mix it with a bunch of other..."
            ],
            [
                "Why should we meditate?",
                "images/home/meditation.jpg",
                "why-should-we-meditate.html",
                "meditation",
                "Meditation is an activity that can help us connect with our inner selves which usually gets lost in our busy everyday life. Each day we are exposed to so many types of emotions and stimulus in our lives that we are sometimes..."
            ],
            [
                "7 Reasons Why all men should grow a Mustache",
                "images/home/mustache.jpg",
                "why-all-men-should-grow-a-mustache.html",
                "mustache",
                "The Mustache has always been a part of debate for more than a decade. While some guys love experimenting with their mustache, others like to keep it clean-cut. For some people, growing a..."
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
