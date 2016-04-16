/* global document, setTimeout, smoothScrollTo */

function onClickButton(event) {
    'use strict';
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

    var friend = document.querySelector('.content.' + type);

    if (!friend) {
        return;
    }

    // If the 'shown' class exists, remove it
    if (friend.classList.contains('shown')) {
        friend.classList.remove('shown');
    } else {
        var content = '';

        if (!friend.classList.contains('loaded')) {
            switch (type) {
                case 'steam':
                    //content='<div class="hidden"><p class="centered hidden"><iframe src="http://store.steampowered.com/widget/334350/" frameborder="0" width="646" height="190"></iframe></p></div>';
                    content='<div class="hidden"><p class="centered hidden">Coming soon!</p></div>';
                    break;
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

            // We don't want to replace the contents of the press hideable
            // It's already got its content in the dom
            if (type != 'press') {
                friend.innerHTML = content;
            }

            setTimeout(function() {
                friend.classList.add('loaded');
                
                var hiddens = friend.querySelectorAll('.hidden');
                
                if (hiddens !== null) {
                    for (var i = 0; i < hiddens.length; i++) {
                        hiddens[i].classList.remove('hidden');
                    }
                }

                //smoothScrollTo('#below', 400, 1000);
            }, 1000);
        }

        // hide everything else
        var hideable = document.querySelectorAll('.hideable');
        
        for (var i = 0; i < hideable.length; i++) {
            hideable[i].classList.remove('shown');
        }

        friend.classList.add('shown');

        setTimeout(function() {
            //smoothScrollTo('#below', 400, 1000);
        }, 250);
    }
}

function onClickHeader() {
    'use strict';
    var posterVideo = document.querySelector('.poster-video');
    var poster = document.querySelector('.poster');
    posterVideo.innerHTML = '<iframe class="scaleframe" src="//www.youtube.com/embed/cRTvjJKQOdg?rel=0&amp;controls=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" allowfullscreen></iframe>';
    poster.style.display = 'none';
    posterVideo.style.display = 'block';
}

function setup() {
    'use strict';
    var buttons = document.querySelectorAll('.buttons li');
    
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = onClickButton;
    }
    
    var poster = document.querySelector('.poster');
    poster.onclick = onClickHeader;
}

setup();
