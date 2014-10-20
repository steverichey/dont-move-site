var Zepto = require('zepto-node');

module.exports = function(values) {
    'use strict';
    
    var type = event.currentTarget.id;
    var friendid = '#content-' + type;
    var friend = $(friendid);
    
    // If a div with the appropriate content tag exists, show it
    // Otherwise, navigate to the link
    
    if (friend && friend.length > 0) {
        if (friend.hasClass('shown')) {
            friend.removeClass('shown');
        } else {
            // hide everything else
            $('.hideable').removeClass('shown');

            friend.addClass('shown');

            setTimeout(function() {
                smoothScroll.animateScroll(null, friendid);
            }, 500);
        }
    } else {
        switch (type) {
            case 'greenlight':
                window.open('http://steamcommunity.com/sharedfiles/filedetails/?id=237086399');
                break;
            case 'googleplay':
                window.open('https://play.google.com/store/apps/details?id=com.steverichey.dontmove');
                break;
            case 'appstore':
                window.open('https://itunes.apple.com/us/app/dont-move-for-ios/id845610884');
                break;
            case 'amazon':
                window.open('http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=stvr%20don%27t%20move');
                break;
            case 'indiegamestand':
                window.open('https://indiegamestand.com/store/816/dont-move/');
                break;
            case 'indiedb':
                window.open('http://www.indiedb.com/games/dont-move');
                break;
            case 'gumroad':
                window.open('https://gum.co/GaJE');
                break;
            default:
                console.log('tried to navigate to ' + type);
                break;
        }
    }
};