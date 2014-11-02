var Zepto = require('zepto-node');
var $ = Zepto(window);
var smoothScroll = require('smooth-scroll');

var DontMoveMain = (function(values) {
    'use strict';
    
    function onClickButton(event) {
        var type = '';
        
        if (event.target) {
            if (event.target.className) {
                type = event.target.className;
            } else {
                type = event.target.parentElement.className;
            }
        }
        
        if (type === '') {
            return;
        }
        
        var friend = $('.content.' + type);
        
        if (!friend) {
            return;
        }
        
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
                    smoothScroll.animateScroll(null, '#footer', {speed: 250, updateURL: false});
                }, 250);
            }
        } else {
            switch (type) {
                case 'greenlight ext':
                    window.open('http://steamcommunity.com/sharedfiles/filedetails/?id=237086399');
                    break;
                case 'play ext':
                    window.open('https://play.google.com/store/apps/details?id=com.steverichey.dontmove');
                    break;
                case 'appstore ext':
                    window.open('https://itunes.apple.com/us/app/dont-move-for-ios/id845610884');
                    break;
                case 'amazon ext':
                    window.open('http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=stvr%20don%27t%20move');
                    break;
                case 'indiegs ext':
                    window.open('https://indiegamestand.com/store/816/dont-move/');
                    break;
                case 'indiedb ext':
                    window.open('http://www.indiedb.com/games/dont-move');
                    break;
                case 'gumroad ext':
                    window.open('https://gum.co/GaJE');
                    break;
            }
        }
        
        return;
    }
    
    $('.buttons li').on('click', onClickButton);
    smoothScroll.init();
    
    return DontMoveMain;
}());