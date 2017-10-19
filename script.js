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
        // workspage.style.display='block';
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
        navcontact.style.backgroundColor = 'transparent';

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
        navworks.style.backgroundColor = 'transparent';
        contactpage.className = 'fadein';
        navcontact.style.backgroundColor = '#FFE98F';


    });

    navaboutme.addEventListener('click', function() {
        workspage.className = 'fadeout';
        workspage.style.zIndex = '-1';
        contactpage.className = 'fadeout';
        mainnav.style.visibility = 'hidden';
        bodyscroll.style.overflow = 'hidden';
        navworks.style.backgroundColor = 'transparent';
        navcontact.style.backgroundColor = 'transparent';

        workslink.style.visibility = 'visible';
        contactlink.style.visibility = 'visible';
        aboutmepage.className = 'fadein';

        titlename.className = 'titleanimation-reverse';

    });







});
