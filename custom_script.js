function insertText(str) {
    $("#chatline").val($("#chatline").val() + str).focus();
}

EVALd = (typeof EVALd === "undefined") ? false : true;
CSSd = (typeof CSSd === "undefined") ? false : true;

fetch('https://raw.githubusercontent.com/doomkek/cytube_gig/main/gig_style.css')
    .then(function (resp) { return resp.text(); })
    .then(function (css) {
        if (!CSSd) {
            document.head.insertAdjacentHTML('beforeend', '<style>' + css + '</style>');
        }
    });

fetch('https://raw.githubusercontent.com/doomkek/cytube_gig/main/gig_script.js')
    .then(function (resp) { return resp.text(); })
    .then(function (js) {

        if (!EVALd) {
            eval(js);

            danmakuConfig.MSG_SPEED_MS = 4000;
            danmakuConfig.FONT_COLOR = "white";
            danmakuConfig.FONT_OUTLINE_COLOR = "black";
            danmakuConfig.FONT_BOLD = false;
            danmakuConfig.FONT = "Genshin";
            danmakuConfig.COLORS = ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'blue', 'red', 'aqua', 'darkviolet', 'salmon', 'yellow'];
        }

        WebsiteBackground = [
            'https://files.catbox.moe/cpuys9.jpg',
            'https://files.catbox.moe/u7u8bb.jpg',
            'https://files.catbox.moe/3ne874.jpg',
            'https://files.catbox.moe/14f7oc.png',
            'https://files.catbox.moe/63smv7.png',
            'https://files.catbox.moe/z9cm2b.jpg',
            'https://files.catbox.moe/f0avfp.png',
            'https://files.catbox.moe/3asup0.jpg',
            'https://files.catbox.moe/bajfm1.jpg',
            'https://files.catbox.moe/arxibh.png',
            'https://files.catbox.moe/pgy5dl.jpg',
            'https://files.catbox.moe/lxtruw.jpg',
            'https://files.catbox.moe/9lfjw5.png',
            'https://files.catbox.moe/32upbb.jpg',
            'https://files.catbox.moe/07j7ms.jpg',
            'https://files.catbox.moe/ynunpb.png',
            'https://files.catbox.moe/ynhb5p.jpg',
            'https://files.catbox.moe/vekdup.jpg',
            'https://files.catbox.moe/dfcjh0.png',
            'https://files.catbox.moe/8hly3c.jpg',
            'https://files.catbox.moe/zn4gl3.jpg',
            'https://files.catbox.moe/l5pxw6.jpg',
            'https://files.catbox.moe/l5pxw6.jpg',
            'https://files.catbox.moe/786fut.jpg',
            'https://files.catbox.moe/k9ypz8.jpg',
            'https://files.catbox.moe/1t5432.jpg',
            'https://files.catbox.moe/7eacmm.jpg',
            'https://files.catbox.moe/b2h6yh.png',
            'https://files.catbox.moe/cxq10c.jpg',
            'https://files.catbox.moe/oe93hm.png',
            'https://files.catbox.moe/54ov4p.jpg',
            'https://files.catbox.moe/od7aq4.png',
            'https://files.catbox.moe/ij3kwd.jpg',
            'https://files.catbox.moe/93vpon.jpg',
            'https://files.catbox.moe/1lk40l.jpg',
            'https://files.catbox.moe/87lkqs.jpg',
            'https://files.catbox.moe/im666w.jpg',
            'https://files.catbox.moe/poadhx.png',

        ];

        if (WebsiteBackground.length > 0) {
            rnd = Math.round(Math.random() * (WebsiteBackground.length - 1));
            $("body").css("background-image", "url(" + WebsiteBackground[rnd] + ")");
            $("body").css("background-repeat", "no-repeat");
        }

        //Text cursor
        $('input, textarea').css("cursor", "url('https://files.catbox.moe/07aa32.cur'), default");
        //Link cursor
        $('a, span, button').css("cursor", "url('https://files.catbox.moe/f17mhb.cur'), default");
        $('#emotes-0 > img').css("cursor", "url('https://files.catbox.moe/f17mhb.cur'), default");

        EmptyCornerBackground = [
            'https://files.catbox.moe/boqq0r.jpg',
            'https://files.catbox.moe/tsp1ue.png',
            'https://files.catbox.moe/93g73x.png',
            'https://files.catbox.moe/8n71pb.png',
            'https://files.catbox.moe/xd4ih2.png',
            'https://files.catbox.moe/6g2bao.png',
            'https://files.catbox.moe/7yu46t.png',
        ];

        // this atrocity fixes video+chat size after initial load when user still not accepted 3rd party script
        (function () {
            var counter = 0;
            var ci = setInterval(function () {
                if (typeof LOADED != "undefined" && LOADED) {
                    if (counter++ > 4 * 60)
                        clearInterval(ci);
                    resizeStuff();
                }
            }, 250);
        })();
    });




var featuresList = $('<div class="well form-horizontal" id="features"><ul style="list-style-type:none; color: #ffedb6;"><li><b>Wallpapers: </b>Use the <b>"Change Wallpaper"</b> button to swap between random wallpapers without reloading.</li><br/><br/><li><b>Emote Search: </b>In chat, use the <b>":"</b> shortcode to search emotes by name, then select a preview emote to add it to your message with left click or the enter key <b>ex. :klee</b></li><br/><br/><li><b>Commands: </b>Let fate select your next emote with <b>!cheld</b>, or consult <b>!ladyning</b> for advice on your next pulls.</li><br/><br/><li><b>Danmaku: </b>Use the "Danmaku" button to toggle niconico/bilibili style comment overlay on or off.</li></ul></div>');


const wallpaperButtonInterval = setInterval(() => {
    const layoutBtn = $("#playlistrow #layout-btn");
    if (layoutBtn.length === 0) {
        return;
    }
    var rngWallpaperBtn = $('<button class="btn btn-sm btn-default">Change Wallpaper</button>');
    rngWallpaperBtn.on('click', function () { rnd = Math.round(Math.random() * (WebsiteBackground.length - 1)); });
    rngWallpaperBtn.on('click', function () { $("body").css("background-image", "url(" + WebsiteBackground[rnd] + ")"); });

    var featuresBtn = $('<button class="btn btn-sm btn-default">Features</button>');
    var danmakuBtn = $('<button class="btn btn-sm btn-default"><span class="glyphicon glyphicon-eye-open"></span> Danmaku</button>');
    var emoteSizeBtn = $('<button class="btn btn-sm btn-default">Emote Size: 100%</button>');

    featuresBtn.on('click', function () { $("#features").toggle(); });
    danmakuBtn.on('click', function () { $("#kinooo").toggle(); danmakuBtn.children().first().toggleClass('glyphicon-eye-open').toggleClass('glyphicon-eye-close'); });

    emoteSizeBtn.on('click', function (e) {
        var currentSize = chatConfig.EMOTE_SIZE;
        currentSize = chatConfig.EMOTE_SIZE = currentSize <= 25 ? 100 : currentSize - 25;

        $('.channel-emote').css({
            'max-width': currentSize + 'px',
            'max-height': currentSize + 'px'
        });

        $(e.target).text("Emote Size: " + currentSize + "%");
    });

    rngWallpaperBtn.insertAfter($("#playlistrow #layout-btn"));
    featuresBtn.insertAfter($("#playlistrow #layout-btn"));
    emoteSizeBtn.insertAfter($("#playlistrow #layout-btn"));
    danmakuBtn.insertAfter($("#playlistrow #layout-btn"));
    clearInterval(wallpaperButtonInterval);
}, 500);

featuresList.insertAfter($("#playlistrow #leftpane-inner"));
$("#features").toggle();

//const wallpaperButtonInterval = setInterval(() => {
//    const layoutBtn = $("#playlistrow #layout-btn");
//    if (layoutBtn.length === 0) {
//        return;
//    }
//
//clearInterval(wallpaperButtonInterval);
//    }, 1000);
//}); 


