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
                var content = '';
                
                if (!friend.hasClass('loaded')) {
                    switch (type) {
                        case 'humble':
                            content = '<div class="hidden"><p class="centered"><iframe src="https://www.humblebundle.com/store/product/dontmove/Dkwodk4" width="550" height="264"></iframe></p><p class="centered">Or, view it in the <a href="https://www.humblebundle.com/store/p/dontmove_storefront" target="_blank">Humble Store</a>.</p></div>';
                            break;
                        case 'itchio':
                            content = '<div class="hidden"><p class="centered hidden"><iframe width="552" height="167" src="http://itch.io/embed/496?linkback=true"></iframe></p><p class="centered">Or, view it on <a href="http://stvr.itch.io/dont-move" target="_blank">itch.io</a>.</p></div>';
                            break;
                        case 'desura':
                            content = '<div class="hidden"><p class="centered"><iframe width="550" height="250" src="https://secure.desura.com/widget/dont-move?stat=1"></iframe></p><p class="centered">Or, view it on <a href="http://www.desura.com/games/dont-move" target="_blank">Desura</a>.</p></div>';
                            break;
                        case 'bandcamp':
                            content = '<p class="centered"><iframe width="460" height="142" src="http://bandcamp.com/EmbeddedPlayer/album=691504519/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"><a href="http://stvr.bandcamp.com/album/dont-move-extended-original-soundtrack">Don&#39;t Move: Extended Original Soundtrack by STVR</a></iframe></p><p class="centered">Or, view the soundtrack on <a href="http://stvr.bandcamp.com/" target="_blank">Bandcamp</a>.</p>';
                            break;
                        default:
                            break;
                    }
                    
                    friend.append(content);
                    
                    setTimeout(function() {
                        friend.addClass('loaded');
                        $('.loader', friend).remove();
                        $('.hidden', friend).removeClass('hidden');
                        smoothScroll.animateScroll(null, '#below', {speed: 250, updateURL: false});
                    }, 1000);
                }
                
                // hide everything else
                $('.hideable').removeClass('shown');

                friend.addClass('shown');
                
                setTimeout(function() {
                    smoothScroll.animateScroll(null, '#below', {speed: 250, updateURL: false});
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
                case 'sellbox ext':
                    window.open('http://sbx.sk/AlBD');
                    break;
            }
        }
        
        return;
    }
    
    function onClickHeader(event) {
        $('.poster-video').append('<iframe class="scaleframe" src="//www.youtube.com/embed/cRTvjJKQOdg?rel=0&amp;controls=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" allowfullscreen></iframe>');
        $('.poster').css('display', 'none');
        $('.poster-video').css('display', 'block');
    }
    
    $('.buttons li').on('click', onClickButton);
    smoothScroll.init();
    
    $('.poster').one('click', onClickHeader);
    
    return DontMoveMain;
}());
