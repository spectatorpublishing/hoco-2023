
const universityArticles = [
	{
	  article_link: "https://www.columbiaspectator.com/news/2023/10/04/shafik-inaugurated-as-20th-university-president-in-ceremony-that-draws-hundreds-of-protesters/",
	  article_title: "Shafik inaugurated as 20th University president in ceremony that draws hundreds of protesters",
	  article_authors: "ESHA KARAM, ISABELLA RAMIREZ, AND SARAH HUDDLESTON",
	  image_url: "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/6EQZQGDBWBBTRCD5T6V7ILRLKY.jpg"
	},
	{
	  article_link: "https://www.columbiaspectator.com/news/2023/10/11/teachers-college-parts-ways-with-Calkins-controversial-reading-curriculum-transitions-to-new-initiative/",
	  article_title: "Teachers College parts ways with Calkins’ controversial reading curriculum, transitions to new initiative",
	  article_authors: "SABRINA TICER-WURR",
	  image_url: "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/X6MWFWL67VEQPPQRKMCT45W5DA.jpg"
	},
	{
	  article_link: "https://www.columbiaspectator.com/news/2023/10/04/columbia-health-expands-with-more-staff-new-telehealth-partnership-after-student-demands-for-better-mental-healthcare/",
	  article_title: "Columbia Health expands with more staff, new telehealth partnership after student demands for better mental healthcare",
	  article_authors: "CAROLINE CAPOZZI AND MAYA STAHL",
	  image_url: "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/KMPGISMYWBDRPC7ECNRUITGWFA.jpg"
	}
  ];
  
  const artsAndCultureArticles = [
	{
	  article_link: "https://www.columbiaspectator.com/arts-and-culture/2023/10/09/football-life-music-columbia-football-players-share-their-pump-up-playlists/",
	  article_title: "‘Football, life, music:’ Columbia football players share their pump-up playlists",
	  article_authors: "MADISON ROSENFIELD",
	  image_url: "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/I2JJXOBHLZCNJN7KMIJS6AB4LY.jpg"
	}
  ];
  
  const sportsArticles = [
	{
	  article_link: "https://www.columbiaspectator.com/sports/2023/10/08/before-the-beats-jack-kerouacs-time-on-the Columbia-football-team/",
	  article_title: "Before the Beats: Jack Kerouac’s time on the Columbia football team",
	  article_authors: "JULIAN SILVA-FORBES",
	  image_url: "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/ED3ZDQOTVVFRNBWO7FPYSE44GE.jpg"
	},
	{
	  article_link: "https://www.columbiaspectator.com/sports/2023/10/12/football-braces-for-homecoming-game-against-penn/",
	  article_title: "Football braces for Homecoming game against Penn",
	  article_authors: "JORGE HERNANDEZ AND HEATHER CHEN",
	  image_url: "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/UE3OXVRENFBXZPHWCA2YHAYYC4.jpg"
	},
	{
	  article_link: "https://www.columbiaspectator.com/sports/2023/10/11/its-an-honor-mark-fabish-steps-into-role-of-interim-head-football-coach/",
	  article_title: "‘It’s an honor’: Mark Fabish steps into role of interim head football coach",
	  article_authors: "JORGE HERNANDEZ",
	  image_url: "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/CVOIHSP5MRFXDL5F3XS6T7VU3E.jpg"
	},
	{
	  article_link: "https://www.columbiaspectator.com/sports/2023/10/11/they-should-build-a-statue-for-him-al-bagnolis-head-coaching-legacy-at-columbia/",
	  article_title: "‘They should build a statue for him’: Al Bagnoli’s head coaching legacy at Columbia",
	  article_authors: "AIDAN HASSAN",
	  image_url: "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/Y7QGM6LQV5EYTABLIUYZDR7D5E.jpeg"
	}
  ];
  
  const audioArticles = [
	{
	  article_link: "https://www.columbiaspectator.com/podcasts/2023/10/11/in-the-spirit-of-trying-columbias-reckoning-with-school-spirit/",
	  article_title: "In the spirit of trying: Columbia’s reckoning with school spirit",
	  article_authors: "Reported by ALICIA THEOLOGIDES RODRIGUEZ",
	  image_url: "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/6UUWKBBGSRD25NQMQXF7SWCTQE.png"
	}
  ];
  
  const opinionArticles = [
	{
	  article_link: "https://www.columbiaspectator.com/opinion/2023/10/04/how-my-grandmothers-art-inspired-me-to-pursue-an-afrocentric-phd-in-theatre-and-performance-studies/",
	  article_title: "How my grandmother’s art inspired me to pursue an Afrocentric Ph.D. in theatre and performance studies",
	  article_authors: "LAUREN STOCKMON BROWN",
	  image_url: "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/APDP7D5VLFEUZCFSADU53XKSME.JPG"
	},
	{
	  article_link: "https://www.columbiaspectator.com/opinion/2023/10/10/barnard-ra-union-fighting-for-fair-compensation/",
	  article_title: "Barnard RA Union: Fighting for fair compensation",
	  article_authors: "BARNARD RESIDENT ASSISTANT UNION",
	  image_url: "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/5UY2PTLS4VEB5IKSBBAM7XDUZM.JPG"
	}
  ];
  
  const spectrumArticles = [
	{
	  article_link: "https://www.columbiaspectator.com/spectrum/2023/10/09/homecoming-2023-taylors-version/",
	  article_title: "Homecoming 2023 (Taylor’s Version)",
	  article_authors: "Ayelet Glaser and Madeline Suindah",
	  image_url: "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/UEA7SIHLIFEYDM7F44Q5MBY2AA.jpeg"
	},
	{
	  article_link: "https://www.columbiaspectator.com/spectrum/2023/10/09/every-term-you-need-to-know-before-homecoming/",
	  article_title: "Every term you need to know before Homecoming",
	  article_authors: "Anuthmi Waas and Manuela Moreyra",
	  image_url: "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/HYKNGHT6KJFWJJAISRARQ2VBWY.png"
	},
	{
	  article_link: "https://www.columbiaspectator.com/spectrum/2023/10/09/spectrums-guide-to-homecoming-2023/",
	  article_title: "Spectrum’s guide to Homecoming 2023",
	  article_authors: "Anuthmi Waas and Jasmine Li",
	  image_url: "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/2FYI6MZF6ZBA7DP3LTBVSAWKIQ.jpg"
	}
  ];
  
  export { universityArticles, artsAndCultureArticles, sportsArticles, audioArticles, opinionArticles, spectrumArticles };
  