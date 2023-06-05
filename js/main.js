jQuery(document).ready(function() {

    const links = jQuery("a[rel='m_PageScroll2id']");
    const videoElem = jQuery("#video-wrap");
    const navMob = jQuery("#nav-mobile");
    const navMobBtn = jQuery("#nav-mobile-btn");

    const infoPeople = [{
            photo: "/img/photos/juless.jpg",
            name: "Jules Brenner",
            link: "https://www.linkedin.com/in/jules-brenner/",
            position: "Founder",
            short: "Jules founded MSP with the goal of leveraging years of experience in sales, manufacturing, and engineering " +
                "in order to acquire and grow established manufacturing operations. He blends a passion for creative engineering " +
                "solutions with a love for well branded and marketed products.",
            long: [
                "In his latest projects, he was the first sales hire at ampUp, where he built a sales team to sell software for " +
                "electric vehicle charging equipment. Prior, he was the first sales hire at XOS Trucks, an electric truck manufacturer, " +
                "where he sold over 7 figures of electric trucks. Before XOS, Jules worked at Vengo Labs, a compact vending machine " +
                "manufacturer, and was the founder of a high-end tutoring business in New York City. Prior to those projects, Jules " +
                "was Project Manager at Duro UAS, an underwater vehicle manufacturer, where he managed a team of 30 engineers.",

                "Prior to Duro, he Co-Founded New York University’s first Baja Car Racing team, where he was the manufacturing lead " +
                "for the 30-person team. Some of his additional projects include the design and manufacture of 3D printed tooling, " +
                "Pro Bono consulting at NYOrtho (an established manufacturer of medical equipment) and manufacturing a mini jet engine.",

                "Jules received a Bachelor of Science Degree in Mechanical Engineering with Minors in Aerospace and Business from " +
                "New York University."
            ]
        },
        {
            photo: "../../img/photos/photo-4.jpeg",
            name: "Sam Rosati",
            link: "http://linkedin.com/in/sam-rosati-68787a8",
            position: "Chairman",
            short: "Sam Rosati holds a JD degree in Law from the University of Virginia School of Law. You can learn more about Sam and his support for MSP's investments at Pursuantcapital.com",
            long: [
                "Sam Rosati has been the Founder of the Pursuant Capital since 2016." +
                "Pursuant Capital is a Micro Private Equity firm that buys and grows Florida-based businesses with a “forever” holding period. " +
                "Senior Advisor to Silver River Capital Advisors, an emerging markets hedge fund. Since 2008, he has been Managing" +
                "After acquiring 6 companies, Sam supports other Micro PE groups and MSP through co-investments and post-close experience."

                
            ]
        },
        {
            photo: "../../img/photos/photo-2.png",
            name: "Ron DaVella",
            link: "https://www.linkedin.com/in/ron-davella-a9893a3/",
            position: "CFO Advisor",
            short: "Ron DaVella has been a member of the Joint Corporation’s Board of Directors since it went public in November " +
                "2014. He serves as the Audit Committee chair and has assisted the company with its quarterly and annual financial " +
                "statements, SEC reporting, hiring needs (CFO, controller, assistant controller), etc. He is also a member of its " +
                "finance committee which evaluates and approves all acquisitions of clinics from existing franchisees and all new " +
                "greenfield locations and is a member of the Nominating and Governance Committee. The Joint Corp is an operator and " +
                "franchisor of over 500 chiropractic clinics throughout the US. He has also served on several, not for profit boards " +
                "including Lura Turner Homes, The American Red Cross and the Girl Scouts of AZ.",
            long: [
                "Ron DaVella was the Executive VP of Finance for the Alkaline Water Company from April 1, 2019, through January 2020. " +
                "The Alkaline Water Company Inc. (NASDAQ and TSXV: WTER) is a leading producer of premium bottled alkaline drinking " +
                "water sold under the brand name Alkaline88®. He was also the Chief Financial Officer for Amazing Lash Franchise LLC " +
                "from March 2016 to May 2017, a franchisor of eyelash extension studios and was the Chief Financial Officer at NanoFlex " +
                "Power Corporation from May 2017 to March 2019, a disruptive solar technology company.",

                "Ron DaVella holds a Bachelor of Arts degree in accounting from Queens College and an MBA in Finance from Pace University. " +
                "Ron DaVella is a CPA and was an audit partner with Deloitte from 1989 to 2014. Ron DaVella has an extensive background " +
                "in accounting, finance, SEC reporting, and internal controls and has worked on several mergers and acquisitions, public " +
                "offerings and financings. As a partner at Deloitte, he focused on the retail, technology and manufacturing industries."
            ]
        },
        {
            photo: "../../img/photos/photo-3.png",
            name: "Luis Artime",
            link: "https://www.linkedin.com/in/luis-artime-5963b55/",
            position: "Legal",
            short: "Luis Artime has over 40 years of experience in the active practice of law. He is currently VP and General Counsel of " +
                "Drillmec, Inc. and Drillmec SpA, two multinational companies engaged in the development of drilling technologies throughout the globe.",
            long: [
                "Prior to his current role at Drillmec Inc., he was Senior Counsel with the transactional law firm of Alvarez, " +
                "Arrieta & Diaz-Silveira LP in Miami, Florida. At the firm, he represented clients engaged in domestic and cross-border " +
                "transactions. Previously, Luis Artime was the Global General Counsel and Chief Compliance Officer for Brightstar Corp., " +
                "a global wireless telecommunication distribution and solutions company with approximately $6 Billion in revenues based in Miami, FL.",

                "Prior to Brightstar, Luis Artime was a Senior Associate General Counsel supporting Wal-Mart’s International operations " +
               "where he was promoted to lead the legal team responsible for supporting all of Wal-Mart’s U.S. operations. Prior to " +
               "Wal-Mart, Luis Artime was the VP and General Counsel of BellSouth Intl. where he was in charge of a legal department " +
                "consisting of 8 legal professionals based in Atlanta, GA, and 15 foreign General Counsels. From 1995 to 1998, Artime " +
                "helped AHI Healthcare Systems in its IPO and served as its SVP and General Counsel. Finally, in 1982, he was the founding " +
                "partner of the Miami, FL office of the national law firm of Akerman LLP, where he represented domestic and international " +
               "clients with their corporate, commercial and international law matters and transactions.",

                "Luis ​Artime obtained his undergraduate degree from Fordham University in New York City, and his law degree from " +
                "the University of Pennsylvania Law School in Philadelphia, PA."
            ]
        },
		
    ];

    // for animation elements
    if (jQuery(window).width() > 1200) {
        const manufacturing = jQuery("#manufacturing");
        const attributes = jQuery("#attributes-row");

        jQuery(window).scroll(animBoxes);

        function animBoxes() {
            if (jQuery(window).scrollTop() >= manufacturing.offset().top - 500) {
                manufacturing.find(".row").addClass("active");
            }
            if (jQuery(window).scrollTop() >= attributes.offset().top - 700) {
                attributes.find(".card").addClass("active");
            }
        }
    }

    // for scrolling to video box and starting playback
    jQuery("[data-video]").on("click", function() {
        jQuery('html, body').animate({
            scrollTop: videoElem.offset().top - 15
        }, 1000);
        setTimeout(function() {
            startVideo();
        }, 1000);
    });

    videoElem.on("click", function() {
        startVideo();
    });

    // for scrolling to concrete section and highlights active link
    links.mPageScroll2id({
        offset: 15,
        //forceSingleHighlight: true,
        highlightClass: "active"
    });

    // modal window about people information
    jQuery("[data-modal]").on("click", function() {
        const index = jQuery(this).attr("data-info");
        const modalWindow = jQuery("#info");
        modalWindow.find("[data-photo]").attr("src", infoPeople[index].photo);
        modalWindow.find("[data-name]").text(infoPeople[index].name);
        modalWindow.find("[data-position]").text(infoPeople[index].position);
        modalWindow.find("[data-link]").attr("href", infoPeople[index].link);
        modalWindow.find("[data-short]").text(infoPeople[index].short);
        let content = "";
        jQuery.each(infoPeople[index].long, function(index, item) {
            content += "<p>" + item + "</p>";
        });
        modalWindow.find("[data-long]").html(content);
        content = "";

        jQuery(jQuery(this).data('modal')).modal({
            fadeDuration: 100,
            closeClass: 'icon-remove',
            closeText: ''
        });
        return false;
    });

    // mobile navigation
    navMobBtn.on("click", function() {
        jQuery(this).toggleClass("open");
        navMob.toggleClass("active");
    });

    jQuery("[data-mob]").on("click", function() {
        navMobBtn.removeClass("open");
        navMob.removeClass("active");
    });

    jQuery(window).on("scroll", function() {
        if (navMob.hasClass("active")) {
            navMobBtn.removeClass("open");
            navMob.removeClass("active");
        }
    });

    // top part stands fixed
    /*jQuery(window).scroll(function(){
      var header = jQuery('#header');
      if ( jQuery(window).scrollTop() >= 50 ){
        header.addClass("fixed-top");
      } else {
        header.removeClass("fixed-top")
      }
    });*/

    function startVideo() {
        jQuery("#play-icon").addClass("hidden");
        jQuery("#video").addClass("active");
        videoElem.find("iframe").attr("src", "https://www.youtube.com/embed/7PDRnKgFfYk?autoplay=1");
    }

    

});


