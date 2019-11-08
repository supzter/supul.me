function stickyHeader() {
    $(window).on('scroll', function(event) {
        var scrollValue = $(window).scrollTop();
        var windowHeight = $( window ).height();
        var heightMark = $('.height-mark').position().top;
        if ( scrollValue > heightMark) {
             $('.navbar').removeClass('navbar-dark');
             $('.navbar').addClass('navbar-light');
             $('.navbar').addClass('bg-light');
     
        } 
        else{
            $('.navbar').removeClass('navbar-light');
            $('.navbar').removeClass('bg-light');
             $('.navbar').addClass('navbar-dark');
    
             
        }
    });
}

function setEmailAndPhone() {
    var email = atob("c3VwdWwuYW1hcmFrb29uQGdtYWlsLmNvbQ==")
    var phone = atob("KDY0NykgNTY4IDIyNTE=")
    var $emailElement = $('span#email-text')
    var $phoneElement = $('span#phone-text')
    setTimeout(function() {
        $emailElement.text(email);
        $phoneElement.text(phone);
    }, 1000)
}



$(function() {
    stickyHeader();
    setEmailAndPhone();
    AOS.init();
});
