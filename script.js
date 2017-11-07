// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

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
        workspage.style.zIndex = '2';
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
        workspage.style.zIndex = '2';
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
    var wrkworldswar = document.getElementById('wrk-worldswar');
    var wrksocialcue = document.getElementById('wrk-socialcue');
    var wrksavethewaves = document.getElementById('wrk-savethewaves');
    var wrkcompose = document.getElementById('wrk-compose');
    var wrkdap = document.getElementById('wrk-dap');
    var wrk2016charity = document.getElementById('wrk-2016charity');
    var wrk2015charity = document.getElementById('wrk-2015charity');
    var wrk2014charity = document.getElementById('wrk-2014charity');
    var wrkpathfinder = document.getElementById('wrk-pathfinder');
    var wrkradition = document.getElementById('wrk-radiation');

    var pageitsaight = document.getElementById('page-itsaight');
    var pagepaulrand = document.getElementById('page-paulrand');
    

    var bgfade = document.getElementById('bgfade');




    modalbtn.addEventListener('click', function() {
        modaltitle.scrollIntoView(true);
        workmodal.style.display = 'none';
        bgfade.style.display = 'none';

        pageitsaight.style.display = 'none';
        pagepaulrand.style.display = 'none';

    });


    wrkitsaight.addEventListener('click', function() {
        workmodal.style.display = 'block';
        bgfade.style.display = 'block';

        modaltitle.innerHTML = '#itsaight Campaign';
        pageitsaight.style.display = 'block';

    });

    wrkpaulrand.addEventListener('click', function() {
        workmodal.style.display = 'block';
        bgfade.style.display = 'block';

        modaltitle.innerHTML = 'Paul Rand Redesign';
        pagepaulrand.style.display = 'block';
    });

    wrkworldswar.addEventListener('click', function() {
        workmodal.style.display = 'block';
        bgfade.style.display = 'block';

        modaltitle.innerHTML = 'Video: Worlds at War';

    });









});
