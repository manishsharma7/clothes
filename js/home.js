var list = [], info = [], val = "", color, color_length, c = 0, temp, i, j;
info = [
            [
                "12 things You Need To Know Before You Get Your First Tattoo",
                "images/home/tattoo.jpg",
                "12-things-you-need-to-know-before-you-get-your-first-tattoo.html",
                "tattoo",
                "Tattoos are the most ongoing accepted craze and fashion trend of the modern generation. It’s a medium of art, where a human body is..."
            ],
            [
                "Why Squatting Is Better Than Running",
                "images/home/squatting.jpg",
                "why-squatting-is-better-than-running.html",
                "squatting",
                "Squatting and Running are common physical activities which keep you live and active, all day round. And as a part of your daily fitness regime, you probably prefer running to..."
            ],
            [
                "10 Time Saving Makeup Tips For Super Busy Working Girls",
                "images/home/working-girls.jpg",
                "10-time-saving-makeup-tips-for-super-busy-working-girls.html",
                "time saving makeup tips",
                "Modern women have a plethora of responsibilities on their tender shoulders. It is definitely not easy to handle both home and office..."
            ],
            [
                "Side effects of drinking too much Green Tea",
                "images/home/green-tea.jpg",
                "side-effects-of-drinking-too-much-green-tea.html",
                "side effects of green tea",
                "Whenever we hear the term, 'Green Tea', the thing that first comes in our mind is the health benefits that it offers. In fact, many of us has also included this wonderful..."
            ],
            [
                "Amazing Uses of Vodka",
                "images/vodka/vodka.jpg",
                "amazing-uses-of-vodka.html",
                "vodka uses",
                "There is no denying that vodka is one of the most popular alcoholic beverages across the globe and it is not hard to fathom why. Vodka is actually neutral having no strong smell and you can easily mix it..."
            ],
            [
                "Surprising Uses Of Beer In Life",
                "images/home/beer.jpg",
                "surprising-uses-of-beer-in-life.html",
                "beer uses",
                "Regret consuming a glass of beer last night? Not anymore! With a plethora of reasons to fascinate you, this popular alcoholic beverage will never be stereotyped as just..."
            ],
            [
                "Shraddha Kapoor And Aditya Roy Kapoor On Filmfare Magazine",
                "images/photoshoot/shraddha-aditya/shraddha-aditya-1.jpg",
                "shraddha-kapoor-and-aditya-roy-on-filmfare-magazine.html",
                "shraddha kapoor and aditya roy",
                "Shraddha Kapoor And Aditya Roy Kapoor the hotest couple of bollwood are the latest cover girl and boy of the January 2017 Filmfare Magazine..."
            ],
            [
                "Katrina Kaif is On Bazaar Brides Latest Edition Cover Page",
                "images/photoshoot/katrina-kaif/katrina-kaif-1.jpg",
                "katrina-kaif-is-on-bazaar-brides-latest-edition.html",
                "Katrina Kaif is On Bazaar Brides Latest Edition Cover Page",
                "Bollywood's hot and sizzling dream girl Katrina Kaif is on the latest edition of Bazaar Bride where she can be seen wearing a beige lehenga designed by Manish Malhotra..."
            ],
            [
                "How To Choose And Maintain Contact Lenses",
                "images/home/contact-lenses.jpg",
                "how-to-choose-and-maintain-contact-lenses.html",
                "contact lenses",
                "Choosing and maintaining contact lenses is an important part of using them. You need to follow a few pointers in order to do it well..."
            ],
            [
                "Simple Methods to treat Back Pain",
                "images/health/back-pain/back-pain.jpg",
                "simple-methods-to-treat-back-pain.html",
                "treat back pain",
                "As we grow older, our body undergoes several changes like we put on weight, our bones become weak, but one of the most annoying problems that come with age is back..."
            ],
            [
                "Home Remedies For Perfect Hair Straightening",
                "images/home/hair-straightening.jpg",
                "home-remedies-for-perfect-hair-straightening.html",
                "home remedies for hair straightening",
                "When it comes to getting straight hair, the things that come to our minds are harmful heat based products and techniques. But what if..."
            ],
            [
                "When You Drink Water On An Empty Stomach After Waking Up, These 8 Amazing Things Will Happen",
                "images/home/drink-water.jpg",
                "when-you-drink-water-on-an-empty-stomach-after-waking-up-these-8-amazing-things-will-happen.html",
                "drink water",
                "Water represents 70% of the composition of our body and is indispensable to keep it..."
            ],
            [
                "Why should we meditate?",
                "images/home/meditation.jpg",
                "why-should-we-meditate.html",
                "meditation",
                "Meditation is an activity that can help us connect with our inner selves which usually gets lost in our busy everyday life. Each day we are exposed to so many types of emotions..."
            ],
            [
                "Tea Remedies for Sore Throat",
                "images/health/sore-throat/sore-throat.jpg",
                "tea-remedies-for-sore-throat.html",
                "tea remedies for sore throat",
                "A sore throat is one of the most annoying situations that we face in our everyday life. It spoils our mood and it simply takes the fun out of everything that we are doing. A sore..."
            ],
            [
                "10 Things you need to know if you are trying to have a baby",
                "images/health/pregnancy/pregnant.jpg",
                "10-Things-you-need-to-know-if-you-are-trying-to-have-a-baby.html",
                "pregnancy",
                "Are you planning to have your offspring? The idea of ​​conceiving looks daunting? Are you confused about what to do and what not? If you are..."
            ],
            [
                "10 Ways Aloe Vera Can Fix Every Skin and Hair Issues You Have",
                "images/beauty/aloe-vera/aloe-vera.jpg",
                "10-ways-aloe-vera-can-fix-every-skin-and-hair-issues-you-have.html",
                "aloe vera for skin and hairs",
                "Being consistently evident through various studies and research that Aloe Vera is the most useful medicinal plant containing a wealth..."
            ],
            [
                "How to Remove a Tattoo Quickly",
                "images/home/remove-tattoo.jpg",
                "how-to-remove-a-tattoo-quickly.html",
                "remove tatto",
                "Tattoos are said to be forever as they serve as a symbol of our beliefs as well as many great passions in life. It is one such art that has been embraced by people of all..."
            ],
            [
                "Golden Tips for a healthy glowing skin",
                "images/home/tips-for-skin-care.jpg",
                "beauty/skin-care-tips-for-healthy-glowing-skin.html",
                "skin care tips for healthy glowing skin",
                "Best part of life to have a healthy and beautiful skin, but with all the daily routine problems, hormonal changes, busy life, stress, work, internal and external effects it is..."
            ],
            [
                "How to keep your skin beautiful and glowing while travelling",
                "images/beauty/travelling/travelling.jpg",
                "how-to-keep-your-skin-beautiful-and-glowing-while-travelling.html",
                "beautiful skin",
                "Well, if you are someone who often go out on business trips or on vacations with friends and family, then these beauty hacks are surely going to be..."
            ],
            [
                "How to control hair fall and boost hair growth",
                "images/beauty/hairs/hair-fall.jpg",
                "how-to-control-hair-fall-and-boost-hair-growth.html",
                "control hair fall",
                "Hair fall is one of the most common woes for both men and women nowadays. It is in fact the most annoying problem that most of us go through today. The reasons..."
            ],
            [
                "Get Rid of Dark Circles with these Easy to use Home Remedies",
                "images/beauty/dark-circles/dark-circles.jpg",
                "get-rid-of-dark-circles-with-easy-to-use-home-remedies.html",
                "dark circles",
                "Dark circles, also known as dark rings or shadows are truly one of the most challenging issues faced by individuals nowadays. They are easy to..."
            ],
            [
                "7 Reasons Why all men should grow a Mustache",
                "images/home/mustache.jpg",
                "why-all-men-should-grow-a-mustache.html",
                "mustache",
                "The Mustache has always been a part of debate for more than a decade. While some guys love experimenting with their mustache, others like to keep it clean-cut. For some people..."
            ],
            [
                "The Royal Couple Kareena and Saif Coverss Harper's Bazaar Bride Magazine",
                "images/photoshoot/kareena-saif/kareena-saif-1.jpg",
                "royal-couple-kareena-and-saif-covers-harper-bazaar-bride-november-2016.html",
                "kareena and saif",
                "The Royal Couple Kareena Kapoor Khan and Saif Ali Khan the hotest couple of bollywood will be seen on the November 2016 issue of Harper's Bazaar Bride Magazine..."
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
                "Aishwarya Rai is  on Harper’s Bazaar India's cover page of November 2016. She is looking hot and gorgeous as always..."
            ],
            [
                "Akshay Kumar Is  On Harper’s Bazaar India's Cover Page Of October 2016",
                "images/home/akshay-kumar.jpg",
                "akshay-kumar-on-harpers-bazaar-india-cover.html",
                "harpers bazaar india cover",
                "Akshay Kumar is  on Harper’s Bazaar India's cover page of october 2016. Harper’s Bazaar is the india's first ever..."
            ],
            [
                "30 Beautiful Bridal Jewellery Designs",
                "images/fashion/jewellery/bridal-jewellery/bridal-jewellery-1.jpg",
                "30-beautiful-bridal-jewellery-designs.html",
                "bridal jewellery designs",
                "Bridal jewelry has a great importance especially in Asian countries like India and Pakistan. The jewelry must be chosen in accordance with your bridal dress..."
            ],
            [
                "Handsome Hunk Siddhartha Malhotra On The Maxim Magazine Cover Of October 2016",
                "images/home/siddhartha-malhotra.jpg",
                "siddhartha-malhotra-on-maxim-magazine-cover.html",
                "maxim magazine cover",
                "Handsome Hunk Siddhartha Malhotra On The Maxim Magazine Cover Of October 2016 and His Hotness Will..."
            ],
            [
                'Hot "Deep Neck Back Knot" Blouse Designs',
                "images/fashion/blouse-designs/blouse-designs-1.jpg",
                "hot-deep-neck-back-knot-blouse-designs.html",
                "deep neck back knot blouse designs",
                'The design of blouse has a great impact on your overall look when you wear "Sari" so it must be chosen consciously. If you are going to wear it for a special occasion or event...'
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
                "Gorgeous Indian Bridal Looks",
                "images/fashion/indian-bride/indian-bride-1.jpg",
                "gorgeous-indian-bridal-looks.html",
                "indian bridal looks",
                "On the day of your wedding, it is the time to make everything perfect; especially your makeup and your bridal looks. However, there are lots of girls even who are quite..."
            ],
            [
                "Bridal Photography From Tanishq Metro Bride",
                "images/photoshoot/bridal-photography/bridal-photography-1.jpg",
                "bridal-photography-from-tanishq-metro-bride-ad-gallery.html",
                "bridal photography",
                "Today we are presenting bridal photography shots from Tanishq Metro Bride ad Gallery. The man behind all these awesome photography..."
            ],
            [
                "40 Gorgeous Headpieces Designs for Indian Brides",
                "images/home/headpieces.jpg",
                "40-gorgeous-headpieces-designs-for-indian-brides.html",
                "headpieces designs",
                "Headpieces are the prettiest jewelry pieces that really give a bride an actual look on her wedding day. Without headpiece, the jewelry of the..."
            ],
            [
                "Ranveer Singh Is On November 2016 Filmfare Magazine Cover Page",
                "images/photoshoot/ranveer-singh/1.jpg",
                "ranveer-singh-covers-filmfare-magazine-november-2016.html",
                "filmfare magazine cover",
                "Bollywood Actor Ranveer Singh is the latest cover boy of Filmfare Magazine November 2016, where he has a macho..."
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
                "Priyanka Chopra's Gorgeous New Photoshoto For GQ Magazine",
                "images/home/gq-magazine.jpg",
                "fashion/priyanka-chopras-gorgeous-new-photoshoot-gq-magazine.html",
                "gq magazine photoshoot",
                "Priyanka Chopra's Gorgeous New Photoshoto For GQ Magazine."
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
