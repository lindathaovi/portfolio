// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");



    //loading screen before guest can enter site
    window.onload = function() {
        var loader = document.getElementById('loader');

        loader.className = 'fadeout';
        tipTimer = setTimeout(nodisplay, 1000);
        var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        console.log('Page load time is ' + loadTime);
    };

    //gives opcaity animation enough time to play out before display clears
    function nodisplay() {
        loader.style.display = 'none';
    };

    //NAVIGATION LINKS

    //capture links by ID into variable
    var workslink = document.getElementById('workslink');
    var contactlink = document.getElementById('contactlink');
    var aboutmepage = document.getElementById('aboutmepage');
    var workspage = document.getElementById('workspage');
    var titlename = document.getElementById('titlename'); //Page title
    var mainnav = document.querySelector('nav'); //Main navigation
    var navaboutme = document.getElementById('navaboutme');
    var navworks = document.getElementById('navworks');
    var navcontact = document.getElementById('navcontact');
    var bodyscroll = document.querySelector('body'); //select entire body


    //mouse click event listener to fade out about me page
    workslink.addEventListener('click', function() {
        //fade out about me page
        aboutmepage.className = 'fadeout';
        workslink.style.visibility = 'hidden';
        contactlink.style.visibility = 'hidden';
        navcontact.style.backgroundColor = 'transparent';
        titlename.className = 'titleanimation';
        mainnav.style.visibility = 'visible';
        bodyscroll.style.overflow = 'scroll';

        //fade in works page
        workspage.className = 'fadein';
        workspage.style.zIndex = '3';
        navworks.style.backgroundColor = '#FFE98F';

    });

    //mouse click event listener for contact on about me page
    contactlink.addEventListener('click', function() {
        aboutmepage.className = 'fadeout';
        workslink.style.visibility = 'hidden';
        workspage.style.zIndex = '-1';
        contactlink.style.visibility = 'hidden';
        navworks.style.backgroundColor = 'transparent';
        titlename.className = 'titleanimation';
        mainnav.style.visibility = 'visible';

        //fade in contacts page
        contactpage.className = 'fadein';
        navcontact.style.backgroundColor = '#FFE98F';
    });

    //MAIN NAVIGATION BAR

    navworks.addEventListener('click', function() {
        contactpage.className = 'fadeout';
        aboutmepage.className = 'fadeout';
        workslink.style.visibility = 'hidden';
        contactlink.style.visibility = 'hidden';
        navcontact.style.backgroundColor = 'transparent'; //no highlight in nav

        bodyscroll.style.overflow = 'scroll';
        workspage.className = 'fadein';
        workspage.style.zIndex = '3';
        navworks.style.backgroundColor = '#FFE98F';

    });

    navcontact.addEventListener('click', function() {
        workspage.className = 'fadeout';
        workspage.style.zIndex = '-1';
        aboutmepage.className = 'fadeout';
        workslink.style.visibility = 'hidden';
        contactlink.style.visibility = 'hidden';
        bodyscroll.style.overflow = 'hidden';
        navworks.style.backgroundColor = 'transparent'; //no highlight in nav
        contactpage.className = 'fadein';
        navcontact.style.backgroundColor = '#FFE98F';

    });

    navaboutme.addEventListener('click', function() {
        workspage.className = 'fadeout';
        workspage.style.zIndex = '-1';
        contactpage.className = 'fadeout';
        mainnav.style.visibility = 'hidden';
        bodyscroll.style.overflow = 'hidden';
        navworks.style.backgroundColor = 'transparent'; //no highlight in nav
        navcontact.style.backgroundColor = 'transparent';

        workslink.style.visibility = 'visible';
        contactlink.style.visibility = 'visible';
        aboutmepage.className = 'fadein';

        titlename.className = 'titleanimation-reverse';

    });

    //MODAL displays more information about different works

    var workmodal = document.getElementById('workmodal'); //calls entire modal
    var modalbtn = document.getElementById('modal-close'); //modal close button
    var modalimg = document.getElementById('modalimg');
    var modaltitle = document.getElementById('modal-title'); //page title
    var modalcontent = document.getElementById('modal-content');
    //call each page link on works page
    var wrkitsaight = document.getElementById('wrk-itsaight');
    var wrkpaulrand = document.getElementById('wrk-paulrand');
    var wrkwordsatwar = document.getElementById('wrk-wordsatwar');
    var wrksocialcue = document.getElementById('wrk-socialcue');
    var wrksavethewaves = document.getElementById('wrk-savethewaves');
    var wrkcompoze = document.getElementById('wrk-compose');
    var wrkdap = document.getElementById('wrk-dap');
    var wrk2016charity = document.getElementById('wrk-2016charity');
    var wrk2015charity = document.getElementById('wrk-2015charity');
    var wrk2014charity = document.getElementById('wrk-2014charity');
    var wrkpathfinder = document.getElementById('wrk-pathfinder');
    // var wrkradition = document.getElementById('wrk-radiation');

    var pageitsaight = document.getElementById('page-itsaight');
    var pagepaulrand = document.getElementById('page-paulrand');
    var pagewordsatwar = document.getElementById('page-wordsatwar');
    var pagesocialcue = document.getElementById('page-socialcue');
    var pagesavethewaves = document.getElementById('page-savethewaves');
    var pagecompoze = document.getElementById('page-compoze');
    var pagedap = document.getElementById('page-dap');
    var page2016charity = document.getElementById('page-2016charity');
    var page2015charity = document.getElementById('page-2015charity');
    var page2014charity = document.getElementById('page-2014charity');
    var pagepathfinder = document.getElementById('page-pathfinder');


    var bgfade = document.getElementById('bgfade');




    modalbtn.addEventListener('click', function() {
        modaltitle.scrollIntoView(true);
        bodyscroll.style.overflow = 'scroll';
        workmodal.style.display = 'none';
        bgfade.style.display = 'none';

        pageitsaight.style.display = 'none';
        pagepaulrand.style.display = 'none';
        pagewordsatwar.style.display = 'none';
        pagesocialcue.style.display = 'none';
        pagesavethewaves.style.display = 'none';
        pagecompoze.style.display = 'none';
        pagedap.style.display = 'none';
        page2016charity.style.display = 'none';
        page2015charity.style.display = 'none';
        page2014charity.style.display = 'none';
        pagepathfinder.style.display = 'none';

    });


    wrkitsaight.addEventListener('click', function() {
        workmodal.style.display = 'block';
        bgfade.style.display = 'block';
        bodyscroll.style.overflow = 'hidden';

        modaltitle.innerHTML = '#itsaight Campaign';
        pageitsaight.style.display = 'block';

    });

    wrkpaulrand.addEventListener('click', function() {
        workmodal.style.display = 'block';
        bgfade.style.display = 'block';
        bodyscroll.style.overflow = 'hidden';


        modaltitle.innerHTML = 'Paul Rand Redesign';
        pagepaulrand.style.display = 'block';
    });

    wrkwordsatwar.addEventListener('click', function() {
        workmodal.style.display = 'block';
        bgfade.style.display = 'block';
        bodyscroll.style.overflow = 'hidden';


        modaltitle.innerHTML = 'Video: Words at War';
        pagewordsatwar.style.display = 'block';

    });

    wrksocialcue.addEventListener('click', function() {
        workmodal.style.display = 'block';
        bgfade.style.display = 'block';
        bodyscroll.style.overflow = 'hidden';


        modaltitle.innerHTML = 'SocialCue';
        pagesocialcue.style.display = 'block';

    });

    wrksavethewaves.addEventListener('click', function() {
        workmodal.style.display = 'block';
        bgfade.style.display = 'block';
        bodyscroll.style.overflow = 'hidden';


        modaltitle.innerHTML = 'Save the Waves';
        pagesavethewaves.style.display = 'block';

    });

    wrkcompoze.addEventListener('click', function() {
        workmodal.style.display = 'block';
        bgfade.style.display = 'block';
        bodyscroll.style.overflow = 'hidden';


        modaltitle.innerHTML = 'Responsive Site Compoze';
        pagecompoze.style.display = 'block';


    });

    wrkdap.addEventListener('click', function() {
        workmodal.style.display = 'block';
        bgfade.style.display = 'block';
        bodyscroll.style.overflow = 'hidden';


        modaltitle.innerHTML = 'M+M: Dakota Access Pipeline';
        pagedap.style.display = 'block';

    });

    wrk2016charity.addEventListener('click', function() {
        workmodal.style.display = 'block';
        bgfade.style.display = 'block';
        bodyscroll.style.overflow = 'hidden';


        modaltitle.innerHTML = 'Lost in Wonderland';
        page2016charity.style.display = 'block';

    });

    wrk2015charity.addEventListener('click', function() {
        workmodal.style.display = 'block';
        bgfade.style.display = 'block';
        bodyscroll.style.overflow = 'hidden';


        modaltitle.innerHTML = 'Let your Dreams Set Sail';
        page2015charity.style.display = 'block';

    });

    wrk2014charity.addEventListener('click', function() {
        workmodal.style.display = 'block';
        bgfade.style.display = 'block';
        bodyscroll.style.overflow = 'hidden';


        modaltitle.innerHTML = 'Fly Away With Me';
        page2014charity.style.display = 'block';

    });

    wrkpathfinder.addEventListener('click', function() {
        workmodal.style.display = 'block';
        bgfade.style.display = 'block';
        bodyscroll.style.overflow = 'hidden';


        modaltitle.innerHTML = 'Davis Pathfinder';
        pagepathfinder.style.display = 'block';

    });









});
