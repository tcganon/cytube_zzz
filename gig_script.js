/*
The MIT License (MIT)

Copyright (c) 2013-2014 Zimny Lech

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies off
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// DESCRIPTION:			CyTube Plus - JavaScript and CSS library for CyTube channels enhancements
// CURRENT VERSION:		4.5
// DATE OF MODIFICATION:	2014-08-29
// PROJECT URL:			https://github.com/zimny-lech/CyTube-Plus

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// INSTALLATION NOTES:

// 0. Choose simple or custom installation (simple one has ready-to-use library with limited functionality).
// SIMPLE INSTALLATION: use 'https://dl.dropboxusercontent.com/s/2uks4pif8mx2qab/main-ready.js' as default URL
//   go to -> 3.
// CUSTOM INSTALLATION: go to -> 1.

// 1. Configure this library according to your wishes (see configuration sections below).
// 2. Save customized library to your file hosting (e.g. Dropbox) or to your own server.
// WARNING! You must be able to access .js file directly (browser's URL must contain .js extension, not .php etc.).
// WARNING FOR DROPBOX USERS! Always use 'dl.dropboxusercontent.com' URL instead of 'www.dropbox.com' URL.

// 3. Enter your JS file location into 'External Javascript' field in 'Channel Settings' modal window.
// 4. Enter library CSS file location into 'External CSS' field in 'Channel Settings' modal window.
// NOTE: use default 'https://dl.dropboxusercontent.com/s/180y5d6mvlu8kd8/main.css' URL,
//   or copy it to your own location.
// 5. Congratulations,  your have just installed CyTube Plus!

// Need detailed options explanations? Go to https://github.com/zimny-lech/CyTube-Plus/wiki/FAQ
// Problems? Something doesn't work? Go to https://github.com/zimny-lech/CyTube-Plus/wiki/Troubleshooting

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CONFIGURE BELOW BEFORE INSTALLING IF YOU WANT TO CUSTOMIZE THIS LIBRARY

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- STARTING CONFIGURATION - USER INTERFACE (UI) ----- */

// CONFIGURATION NOTES:

// In this section you can immediately enable and disable each option (set '1' to enable, '0' to disable)
// Every option marked as [&] requires additional configuration (see other sections below)
// WARNING! apostrophe sign (') in all text/html values must be prepend with "\" sign (e.g. "don\'t")

// FILTERS INSTALLATION: open 'Channel Settings' modal window, go to 'Edit' -> 'Chat Filters',
//   click 'Prepare fonts filters' button, and import

// If you need more explanations, go to https://github.com/zimny-lech/CyTube-Plus/wiki/FAQ



UI_DefaultSynchtube = 1;	// default old Synchtube layout (player and playlist on the left)
UI_Favicon = 1;			// [&] channel favicon
UI_MiniLogo = 1;		// [&] small channel logo/avatar in the top navbar
UI_ChannelName = 1;		// [&] channel custom brand name
UI_HeaderDropMenu = 1;		// [&] additional header dropdown menu
UI_RemoveLayoutMenu = 1;	// removing 'Layout' menu from the header
UI_MOTDAutoLogo = 0;		// [&] big channel logo inserted into MOTD
UI_MOTDTabs = 1;		// [&] switchable MOTD tabs application for homepage-like channel header
UI_MOTDDelete = 0;		// deleting previous MOTD after accepting/loading script
UI_RulesBtn = 1;		// [&] button displaying channel rules
UI_AttentionBar = 0;		// [&] imageboard-style attention bar (requires external application)
UI_ChannelAnnouncement = 0;	// [&] additional custom channel announcement
UI_FullTitleBar = 0;		// full-width video title bar
UI_ProgressBar = 1;		// YouTube/Dailymotion progress bar
// [ REQUIRE: UI_FullTitleBar enabled ]
UI_TitleIcon = 0;		// [&] full-width title bar icon
// [ REQUIRE: UI_FullTitleBar enabled ]
UI_TitleBarDescription = 1;	// [&] custom title bar description (default "Currently Playing:")
UI_JoinText = 1;		// [&] chat message after user joining
UI_LeaveText = 1;		// [&] chat message after user leaving
UI_UserCommands = 1;		// [&] additional commands in the chat window
UI_UserMarks = 0;		// [&] special signs/avatars before every message for defined users
UI_Squavatars = 0;		// automatic squavatars (2-colored square avatars) before every message
// [ REQUIRE: UI_UserMarks enabled ]
UI_UsernameMark = 1;		// [&] custom mark after username (default ":")
UI_MessagesSuffix = 0;		// [&] text added to random chat messages
UI_CustomPingSound = 1;		// [&] custom sound for chat notifications
UI_SoundFilters = 0;		// [&] chat sounds played after sending certain words
UI_ChatSpeak = 1;		// text speaking after '!say' and '!mow' commands (english and polish)
UI_IndependentEmotes = 0;	// [&] additional settings-independent emotes
UI_IndependentFilters = 1;	// [&] additional settings-independent filters
UI_FontsBtn = 0;		// button displaying box with clickable chat fonts
// [ REQUIRE: INSTALLATION (see above) ]
UI_UnicodeChars = 1;		// [&] additional buttons in the fonts panel with unicode characters
// [ REQUIRE: UI_FontsBtn enabled ]
UI_EmotesBtn = 1;		// button displaying box with clickable chat emotes
UI_GroupEmotes = 1;		// [&] emotes panel pagination, display limited number of emotes at one time
// [ REQUIRE: UI_EmotesBtn enabled ]
UI_CommandsBtn = 0;		// button displaying modal window with chat commands help
UI_ModPanel = 0;		// [&] panel with messages and help for moderators
UI_CustomCaptions = 0;		// [&] custom captions for add, refresh, voteskip buttons, and welcome text
UI_PlayerOptions = 1;		// [&] additional player options
UI_TransformationBtns = 1;	// player transformation buttons
UI_ChannelDatabase = 0;		// [&] box with embed additional media database
UI_ChannelGalleries = 0;	// [&] box with embed galleries
UI_DisplayModeSel = 1;		// selector with player display modes
UI_ChannelTheme = 0;		// [&] additional default channel theme
UI_EmbeddingMedia = 0;		// [&] possibility to embedding (displaying) images and .webm videos on the chat
UI_MediaControls = 1;		// embedded video preloaded controls
// [ REQUIRE: UI_EmbeddingMedia enabled ]
UI_QuickCommandsBtns = 1;	// buttons with '/clear' and '/afk' functions
UI_VolumeBtns = 1;		// additional volume buttons for YouTube player
UI_EmptyCornerBackground = 0;	// [&] random background image for empty playlist row corner
UI_ExtendedGetURLs = 1;		// extended 'Get URLs' function
UI_DefaultNonTemp = 1;		// default unchecking "Add as temporary" checkbox after loading for registered users
UI_CustomFooter = 0;		// [&] custom channel footer
UI_CustomRightFooter = 1;	// [&] right-sided footer box
UI_UserStatistics = 1;		// displaying in the footer user visits number and current online time
UI_ExternalScript = 0;		// [&] additional external script file
UI_ChannelCache = 1;		// caching script emotes, additional media database and default gallery

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- DETAILED BASIC CONFIGURATION ----- */

// NOTES:
// a) values for 'MOTDAutoLogo_Mode': 1 = first logo; 2 = random logo; 3 = logo rotation; 7 = weekdays logos
// b) in 'SoundFilters_Array' use .ogg or .wav files, some browsers has problems with embedded .mp3
// c) in 'ModPanel_Array' item leave empty first (username) field to make a message to all moderators
// d) in 'EmbeddingMedia_Images' and 'EmbeddingMedia_Videos' you can define acceptable file extensions
//    use CSS syntax: e.g. 'a[href$=""]' defines acceptable end of an URL (file extension)
//    you can also define URL fragments: 'a[href*=""]', or add excluding clause: '.not(\'a[href*=""]\'), etc.

/* -- single variables -- */

Favicon_URL = 'https://files.catbox.moe/7f4v2n.png';

MiniLogo_URL = 'https://files.catbox.moe/0cd1on.png';

ChannelName_Caption = 'Narzissenkreuz Ordo';

HeaderDropMenu_Title = 'Genshin';

MOTDAutoLogo_Mode = 1;

MOTDAutoLogo_Interval = 20;

RulesBtn_Caption = 'Features';

AttentionBar_URL = '';

ChannelAnnouncement_Title = 'IMPORTANT:';

TitleIcon_URL = '';

TitleBarDescription_Caption = 'Current KINO:';

JoinText_Message = 'joined';

LeaveText_Message = 'left';

UsernameMark_Char = '';

MessagesSuffix_Text = '~xD';

MessagesSuffix_Percentage = 10;

CustomPingSound_URL = 'https://dl.dropboxusercontent.com/s/0qtsttblgmkewnv/beep.wav';

PlayerHiding_URL = 'https://dl.dropboxusercontent.com/s/xz2o99scw5i7aai/stop.png';

GroupEmotes_Number = 130;

ExternalScript_URL = '';

/* -- arrays -- */

HeaderDropMenu_Array = [
	['Resources', ''],
	['Wallpapers', 'https://catbox.moe/c/gshtvu'],
	['OC Archive', 'https://catbox.moe/c/n3mdgw'],
	['Source', 'https://github.com/doomkek/cytube_gig'],
	['Past Events', ''],
	['King of TCG I', 'https://cytu.be/r/gig'],
	['King of TCG II', 'https://cytu.be/r/gig'],
];

MOTDAutoLogo_Array = [
	'https://dl.dropboxusercontent.com/s/7mrz85gl29eiiks/logo.png',
];

MOTDTabs_Array = [
	['Home', 'Welcome to our channel!'],
	['Playlist', 'Playlist tab.<br /><br />We watched this, that and this.'],
	['Schedule', 'Schedule:<br /><br /><ul><li>Monday: ...</li><li>Tuesday: ...</li><li>Wendesday: ...</li><li>Thursday: ...</li><li>Friday: ...</li><li>Saturday: ...</li><li>Sunday: ...</li></ul>'],
	['Contact', 'Contact:<br /><br />Email - ...<br />Skype - ...'],
];

RandomQuotes_Array = [
	'aroundtheworld', 'cheldallmebtw', 'cheldsombrero', 'cheldeheheh', 'chongli', 'cheldreal', 'cheldcry', 'cheldeh', 'unmatchedcheld ', 'cheldfurina', 'cheldnahida', 'cheldIVDEX', 'cheldlow'
];

AskAnswers_Array = [
	'ladyningguang Roll for who you like.', 'ladyningguang Roll for who is meta.', 'ladyningguang Fuck rolling for who you like!', 'ladyningguang Roll for Hu you like.', 'ladyningguang Roll for who isn\'t meta.', 'ladyningguang Roll for Eula.', 'ladyningguang Roll for Dehya.', 'ladyningguang Roll for standard characters.', 'ladyningguang Roll for Furina.',
	'ladyningguang Roll for everyone.', 'ladyningguang Don\'t roll for anyone.', 'ladyningguang Roll for who you dislike.', 'ladyningguang Roll for who /gig/ likes.', 'ladyningguang Roll for males.', 'ladyningguang Roll for lolis.', 'ladyningguang Roll for futureproof C2R1 Raiden.', 'ladyningguang Roll for coom.', 'ladyningguang Roll for the donut.', 'ladyningguang Roll for literally (You).', 'ladyningguang Roll for C0R0 Hu Tao.', 'ladyningguang Roll for Kaedehara Kazuha.', 'ladyningguang Roll for my account.',
	'ladyningguang Roll for account power', 'ladyningguang Roll for hags.', 'ladyningguang Roll for hebes.', 'ladyningguang This is a Chinese children\'s gacha you faggots.', 'ladyningguang Roll for the Anemo Archon.', 'ladyningguang Roll for abyss.', 'ladyningguang Roll for Archon collection.', 'ladyningguang Roll for Fatui.', 'ladyningguang Roll for tomboys.', 'ladyningguang Roll for flat chests.', 'ladyningguang Roll for fat tits.', 'ladyningguang Roll for Kafka.', 'ladyningguang Roll for who I like.'
];

Memes_Array = [
	'>', 'fb', 'omfg', 'u mad',
];

UserMarks_Array = {
	'ZimnyLech': '<img src="https://dl.dropboxusercontent.com/s/89gv8fvyr49vnev/kobato-icon-small.jpg" height="25">',
	'calzoneman': '♠',
}

SoundFilters_Array = {
	'habemus': 'https://dl.dropboxusercontent.com/s/3w1jahgffowjltz/hp.ogg',
	'lol': 'https://dl.dropboxusercontent.com/s/9aqa1buu3phvpss/laugh.ogg',
}

ModPanel_Array = [
	['', 'Welcome to the moderators panel. You can find here messages, news and help for all channel moderators, edited by script admin.'],
	['', 'To temporary insert to the playlist any website instead of media files, click "Embed a custom frame" button in the playlist controls section. Then paste example code to the textarea: <i>&lt;iframe src="URL_of_your_page"&gt;&lt;/iframe&gt;</i>, and add.'],
];

CustomCaptions_Array = {
	'add': 'Add here',
	'refresh': 'Refresh player',
	'voteskip': 'Voteskip',
	'welcome': 'Hi',
}

UnicodeChars_Array = [
	'★', '☆', '▲', '▼', '♥', '♪', '♿', '⚒', '♕', '✉', '☏', '♠', '→',
	'☑', '☒', '✡', '☪', '✝', '☭', '☯', 'Ⓐ', '☕', '♨', '¥', '©', '∞',
];

ChannelGalleries_Array = [
	['Anime pictures', 'http://imgur.com/a/SjwJb/embed'],
	['Historical photos', 'http://imgur.com/a/vnwC2/embed'],
];

/* -- HTML/CSS -- */

MOTDTabs_CSS = {
	'padding': '20px',
	'color': 'white',
	'background-color': 'black',
}

RulesBtn_HTML = '<ol><li>You want to write on the chat? Enter temporary nickname into <b>Guest Login</b> input and click enter.</li><li>You want to register a nick? Click <b>Account -> Profile</b> on the top of the channel, and fill the registration form. You don\'t need an email to register.</li><li>Do not spam.</li><li>You want to have this application on your own channel? Go to <a href="https://github.com/zimny-lech/CyTube-Plus">https://github.com/zimny-lech/CyTube-Plus</a>.</li></ol>';

ChannelAnnouncement_HTML = 'IF PLAYBACK WINDOWS ARE WRONG SIZE: LAYOUT → TURN "FLUID" OFF THEN ON. I SPENT TOO LONG TRYING TO FIX IT AND DISPLAYING THIS IS EASIER.';

EmbeddingMedia_Images = 'a[href$=".jpg"], a[href$=".jpg:large"], a[href$=".jpeg"], a[href$=".JPG"], a[href$=".png"], a[href$=".tiff"], a[href$=".gif"]';

EmbeddingMedia_Videos = 'a[href$=".webm"]';

CustomFooter_HTML = 'Website powered by Jewish loli expertise. ';

CustomRightFooter_HTML = 'Many thanks to doomkek for debugging this fossilized codebase.';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- THEMES CONFIGURATION ----- */

// NOTES:
// a) TopUserLogo item has 3 attributes: name, URL, maximum height.
//    Those images can be selected by user in Layout Configuration panel, and will be displayed on the channel top.

ChannelThemeURL = 'https://dl.dropboxusercontent.com/s/l1qoep4su4xn5qz/chinska.css';

ThemesCSS = [
	['Plus Red', 'https://dl.dropboxusercontent.com/s/th8i1sj332wi0x9/plusred.css'],
	['Kobato', 'https://dl.dropboxusercontent.com/s/1r3twlb0loipybw/kobato.css'],
	['Celadon', 'https://dl.dropboxusercontent.com/s/iwarwhhph1ti2ek/celadon.css'],
];

TopUserLogo = [
	['cytube plus', 'https://dl.dropboxusercontent.com/s/7mrz85gl29eiiks/logo.png', 90],
	['anime girl', 'https://dl.dropboxusercontent.com/s/knxd7dpup1u8lm3/azuki.png', 200],
	['cosmos', 'https://dl.dropboxusercontent.com/s/v6dx49yqk5e3i2d/cosmos.jpg', 200],
	['disco ball', 'https://dl.dropboxusercontent.com/s/ahpfm25pglc8j01/disco.jpg', 162],
	['japanese landscape', 'https://dl.dropboxusercontent.com/s/llylt832evxrp6e/japan.jpg', 200],
	['korean collage', 'https://dl.dropboxusercontent.com/s/qud9adhs183dq30/korea.jpg', 160],
	['my little pony', 'https://dl.dropboxusercontent.com/s/r4ozo8oj8lmerec/mlp.jpg', 190],
];

EmptyCornerBackground = [
	//'https://files.catbox.moe/boqq0r.jpg',
	//'https://files.catbox.moe/tsp1ue.png',
	//'https://files.catbox.moe/93g73x.png',
	//'https://files.catbox.moe/8n71pb.png',
	//'https://files.catbox.moe/xd4ih2.png',
	//'https://files.catbox.moe/6g2bao.png',
	//'https://files.catbox.moe/7yu46t.png',
];

WebsiteBackground = [
	//'https://files.catbox.moe/1il8do.jpg',
	//'https://files.catbox.moe/8j2gz1.jpg',
	//'https://files.catbox.moe/cpuys9.jpg',
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- INDEPENDENT EMOTES AND FILTERS CONFIGURATION ----- */

// NOTES ABOUT INDEPENDENT EMOTES:
// Every item has 4 attributes, respectively: chat code, image URL, image width, image height.
// Warning: due to conflict with RegExp, do not use square brackets or use proper "\\[" and "\\]" codes.

IndependentEmotes = [
	[':awesome:', 'https://dl.dropboxusercontent.com/s/gz1k8oto90n16v6/awesome.png', 35, 35],
	[':love:', 'https://dl.dropboxusercontent.com/s/fr9131zgnai0kix/heart.png', 35, 35],
];

// NOTES AND DEFAULT FILTERS EXAMPLES:
// If you use regular expression, you must put it between // signs with /g flag to change all occurences
// a) [mq]text[/mq] - fast scrolling text
// b) [mq0]text[/mq0] - slow scrolling text
// c) [imgur]suok1xr.jpg[/imgur] - imgur picture
// d) [drop]7mrz85gl29eiiks/logo.png[/drop] - dropbox picture
// e) [minus/i5]ig0qs6fvWvgBu.jpg[/minus] - minus.com picture
// f) [vi/b]1r8ih4t1.vichan.png[/vi] - vichan /b/ imageboard picture (you can use other boards too)

IndependentFilters = [
	{
		before: /\[mq\](.*?)\[\/mq\]/g,
		after: '<marquee scrollamount="10" behavior="alternate">$1</marquee>'
	},
	{
		before: /\[mq0\](.*?)\[\/(mq0|mq)\]/g,
		after: '<marquee scrollamount="5" behavior="alternate">$1</marquee>'
	},
	{
		before: /\[imgur\](.*?)\[\/(i|imgur)\]/g,
		after: '<a href="http://i.imgur.com/$1" target="_blank"><img src="http://i.imgur.com/$1" style="max-width:160px"></a>'
	},
	{
		before: /\[drop\](.*?)\[\/(d|drop)\]/g,
		after: '<a href="https://dl.dropboxusercontent.com/s/$1" target="_blank">'
			+ '<img src="https://dl.dropboxusercontent.com/s/$1" style="max-width:160px"></a>'
	},
	{
		before: /\[minus\/(.*?)\](.*?)\[\/(m|minus)\]/g,
		after: '<a href="http://$1.minus.com/$2" target="_blank">'
			+ '<img src="http://$1.minus.com/$2" style="max-width:160px"></a>'
	},
	{
		before: /\[vi\/(.*?)\](.*?)\[\/(v|vi)\]/g,
		after: '<a href="https://pl.vichan.net/$1/src/$2" target="_blank">'
			+ '<img src="https://pl.vichan.net/$1/src/$2" style="max-width:160px"></a>'
	},
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- MEDIA DATABASE CONFIGURATION ----- */

// NOTES:
// Leave empty URL field to create category button.
// WARNING! Use ChannelDatabase_URL only if you want to use external database file, it overwrites database below.
// If so, copy and configure 'https://raw.github.com/zimny-lech/CyTube-Plus/master/external-db.js' file.

ChannelDatabase = [
	['', 'Japanese'],
	['http://www.youtube.com/watch?v=Q3y-80HBM6Q', 'An Cafe - Smile Ichiban Ii Onna'],
	['http://www.youtube.com/watch?v=nDqaTXqCN-Q', 'Babymetal - Ijime, Dame, Zettai'],
	['http://www.youtube.com/watch?v=aNlkiymcT1Q', 'Hinoi Team - Ike Ike'],
	['http://www.youtube.com/watch?v=JbQYK0mwLss', 'Morning Musume - Onna Ni Sachi Are'],
	['http://www.youtube.com/watch?v=VZKMaFR2mtU', 'Perfume - Fake It'],
	['http://www.youtube.com/watch?v=OYEHfWb1b4M', 'Shoko Nakagawa - Yuzurenai Negai'],
	['http://www.youtube.com/watch?v=jvhI576M6so', 'Yuu Kikkawa - Bokarisuto?'],
	['', 'Korean'],
	['http://www.youtube.com/watch?v=M-XXJJFZcXg', '4Minute - Heart To Heart (jap.)'],
	['http://www.youtube.com/watch?v=HchHZkkBOoE', 'As One - Catch Me Up'],
	['http://www.youtube.com/watch?v=UVeTI4v24M0', 'C-REAL - No No No No No'],
	['http://www.youtube.com/watch?v=04FdisNU3vw', 'Girl\'s Day - Oh! My God'],
	['http://www.youtube.com/watch?v=ysnUHXksic8', 'NS Yoon-G - Reason To Become A Witch'],
	['http://www.youtube.com/watch?v=mZUZdGCyLmw', 'Orange Caramel - Bangkok City'],
	['http://www.youtube.com/watch?v=r-MXLmNnarQ', 'TINY-G - Minimanimo'],
	['', 'Chinese'],
	['http://www.youtube.com/watch?v=Bi0tjyVfHOg', 'Amber Ann - Lian Ai Yingyuan Tuan'],
	['http://www.youtube.com/watch?v=dsU0Vu6aJhw', 'By2 - Love You Love You'],
	['http://www.youtube.com/watch?v=ovPhJim1EUc', 'Momo - One Hundred Girlfriends '],
	['http://www.youtube.com/watch?v=lxa2KqERBZE', 'S.H.E. - Shero'],
	['http://www.youtube.com/watch?v=jd2-Nf86jvA', 'Weather Girls - Koi No Tenki Yohou'],
	['', 'Anime songs'],
	['http://www.youtube.com/watch?v=fJ_DH7jzoxQ', 'Ai No Tenshi (Perfect Blue)'],
	['http://www.youtube.com/watch?v=ZNu_NV5PEM8', 'Chu☆ - Miko Miko Naasu - Ai No Teema'],
	['http://www.youtube.com/watch?v=l65_QPNZ_k8', 'Hommarju feat. MAKI - Yamato Nadeshiko Education (Seitokai Yakuindomo OP)'],
	['http://www.youtube.com/watch?v=dQbaJquz_jo', 'Kayo Sakata - Shoujo Q (Pani Poni Dash! OP)'],
	['http://www.youtube.com/watch?v=nLSFxQijz6U', 'Kotoko - Princess Bride'],
	['http://www.youtube.com/watch?v=QK-37CnYTpg', 'Princess Party Camelia OP'],
	['http://www.youtube.com/watch?v=jehMXrY1q5I', 'Yui Makino - Yume No Tsubasa'],
];

ChannelDatabase_URL = '';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- END OF CONFIGURATION, DO NOT CHANGE ANYTHING BELOW ----- */

/* ----- Initial channel options ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// reload script after unexpected re-connection or script URL change

var LOADED = (typeof LOADED === "undefined") ? false : true;
LOADED ? location.reload() : '';

/* ----- getting and setting channel options ----- */

if (UI_DefaultSynchtube == "1") {
	defplayer = "left"; defuserlist = "right"; defqueue = "left";
} else {
	defplayer = "right"; defuserlist = "left"; defqueue = "right";
}

var DEFTHEME = (UI_ChannelTheme == "1" && ChannelThemeURL != "") ? ChannelThemeURL : "/css/themes/slate.css";

var USERCONFIG = {
	"player": getOrDefault(CHANNEL.name + "_player", defplayer),
	"userlist": getOrDefault(CHANNEL.name + "_userlist", defuserlist),
	"queue": getOrDefault(CHANNEL.name + "_queue", defqueue),
	"qsize": getOrDefault(CHANNEL.name + "_qsize", "wide"),
	"main": getOrDefault(CHANNEL.name + "_main", "top"),
	"motd": getOrDefault(CHANNEL.name + "_motd", "top"),
	"logo": getOrDefault(CHANNEL.name + "_logo", "no"),
	"logourl": getOrDefault(CHANNEL.name + "_logourl", ""),
	"logoht": getOrDefault(CHANNEL.name + "_logoht", 250),
	"header": getOrDefault(CHANNEL.name + "_header", "detached"),
	"css": getOrDefault(CHANNEL.name + "_css", "no"),
	"csscode": getOrDefault(CHANNEL.name + "_csscode", ""),
	"modhash": getOrDefault(CHANNEL.name + "_modhash", ""),
}
var USERTHEME = getOrDefault(CHANNEL.name + "_theme", DEFTHEME);
var FLUID = getOrDefault(CHANNEL.name + "_fluid", false);
var LAYOUTBOX = getOrDefault(CHANNEL.name + "_layoutbox", true);
var SOUNDSLVL = getOrDefault(CHANNEL.name + "_soundslvl", 3);
var EMBEDIMG = getOrDefault(CHANNEL.name + "_embedimg", true);
var EMBEDVID = getOrDefault(CHANNEL.name + "_embedvid", true);
var AUTOVID = getOrDefault(CHANNEL.name + "_autovid", true);
var USERVISITS = getOrDefault(CHANNEL.name + "_visits", 0);

var DEFDESCR = true;		// standard item description in the player header
var NOPLAYER = false;		// removed player in silent mode
var CHATFUNC = false;		// admin chat functions panel visibility
var COMMAND = false;		// aditional command occuring in the chat message
var VOICES = false;		// chat sounds not disabled by user
var EMOTES = false;		// emotes have been loaded into emotes panel
var CLEARING = false;		// auto clearing messages window
var ANTIAFK = false;		// enabled anti-AFK function
var SOUNDSPANEL = false;	// chat sounds panel visibility
var PINNED = false;		// playlist pinned to player
var FULLPL = false;		// expanded playlist view
var MINIMIZED = false;		// minimized layout
var CHANDB = false;		// channel database has been loaded
var GALLERY = false;		// channel galleries have been loaded
var GALLVIS = false;		// channel galleries have been viewed by user
var ALTERCHATFORMAT = false;	// using altered 'formatChatMessage' built-in function

var PREVTIME = 0;		// previous read of a current item time for the progress bar
var LASTADD = 0;		// timestamp of the last adding random item from the channel database
var USERONLINE = 0;		// user minutes online

var MUTEDVOICES = new Array();		// list of users with muted chat sounds by user
var CHATSTAT = { "n": 0, "l": 0, "m": [] };	// array with user messages statistics
var ADDEDLINKS = new Array();		// array of links added from channel database by user

var HASH = '';			// simple hash for comparing if the new messages have appeared in the mod panel

WEBKIT = "webkitRequestAnimationFrame" in window;
SOUNDSVALUES = new Array(0, 0.1, 0.2, 0.4, 0.7, 1);
SPEAKLINK = 'http://webanywhere.cs.washington.edu/cgi-bin/espeak/getsound.pl';
CHATSOUND.volume = 0.6;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- Global functions ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// toggle elements visibility

function toggleDiv(div) {
	$(div).css('display') == "none" ? $(div).show() : $(div).hide();
}

// refresh player

function refreshPlayer() {
	PLAYER.type = "";
	PLAYER.id = "";
	socket.emit("playerReady");
}

// add link to playlist

function addToPlaylist(link, stand) {
	parsed = parseMediaLink(link);
	parsed["id"] != null ? socket.emit("queue", { id: parsed["id"], pos: stand, type: parsed["type"] }) : '';
}

// get text content from inner HTML

function getText(html) {
	div = document.createElement("div");
	div.innerHTML = html;
	return div.textContent || div.innerText;
}

// create modal window

function createModal(title) {
	hidePlayer();
	outer = $('<div class="modal fade" />').appendTo($("body"));
	modal = $('<div class="modal-dialog" />').appendTo(outer);
	modal = $('<div class="modal-content" />').appendTo(modal);
	head = $('<div class="modal-header" />').appendTo(modal);
	$('<button class="close" data-dismiss="modal" aria-hidden="true" />').html('&times;').appendTo(head);
	$('<h3 />').text(title).appendTo(head);
	body = $('<div class="modal-body" />').appendTo(modal);
	footer = $('<div class="modal-footer" />').appendTo(modal);
	outer.on("hidden", function () {
		outer.remove();
		unhidePlayer();
	});
	outer.modal();
}

// layout elements settings

function playerLocation(a) {
	$("#pinup-btn").show();
	if (a == "left") {
		$("#videowrap").after($("#chatwrap").detach());
		normalPlayer();
		normalChat();
	} else if (a == "right") {
		$("#videowrap").before($("#chatwrap").detach());
		normalPlayer();
		normalChat();
	} else if (a == "center") {
		$("#videowrap").after($("#chatwrap").detach());
		$("#videowrap, #chatwrap").removeClass().addClass("col-lg-8 col-lg-offset-2 col-md-12");
		fitPlayer();
		fitChat(200);
		$("#pinup-btn").hide();
	}
}

function userlistLocation(a) {
	a == "left" ? $("#userlist").css('float', 'left') : $("#userlist").css('float', 'right');
}

function queueLocation(a) {
	$("#pinup-btn").show();
	if (a == "right") {
		$("#rightpane").before($("#leftpane").detach());
	} else if (a == "left") {
		$("#rightpane").after($("#leftpane").detach());
	} else if (a == "center") {
		$("#rightpane").after($("#leftpane").detach())
			.removeClass().addClass('col-md-8 col-md-offset-2 col-md-12');
		$("#leftpane").removeClass().addClass('col-md-8 col-md-offset-2 col-md-12');
		$("#pinup-btn").hide();
	}
	b = (a == "right") ? "left" : "right";
	$("#playlistrow").css('background-position', b + ' bottom');
}

function queueSize(a) {
	if (USERCONFIG.queue != "center") {
		if (a == "wide") {
			$("#leftpane").removeClass().addClass('col-lg-5 col-md-5');
			$("#rightpane").removeClass().addClass('col-lg-7 col-md-7');
		} else if (a == "narrow") {
			$("#leftpane").removeClass().addClass('col-lg-7 col-md-7');
			$("#rightpane").removeClass().addClass('col-lg-5 col-md-5');
		}
	}
}

function mainLocation(a) {
	if (a == "top") {
		$("#main").before($("#titlerow").detach()).after($("#playlistrow").detach());
	} else if (a == "bottom") {
		$("#main").before($("#playlistrow").detach()).before($("#titlerow").detach());
	}
	$("#main").after($("#chatpanel").detach());
}

function motdLocation(a) {
	if (a == "top") {
		$("#zerorow").after($("#announcements").detach()).after($("#motdrow").detach());
	} else if (a == "bottom") {
		$("#resizewrap").before($("#motdrow").detach()).before($("#announcements").detach());
	}
}

function logoInsert(a) {
	if (a != "no") {
		link = (a != "user") ? TopUserLogo[a][1] : USERCONFIG.logourl;
		ht = (a != "user") ? TopUserLogo[a][2] : USERCONFIG.logoht;
		azukirow.css({ 'min-height': ht + 'px', 'background-image': 'url("' + link + '")' });
	} else if (a == "no") {
		azukirow.css({ 'min-height': '5px', 'background-image': '' });
	}
}

function headerMode(a) {
	$(".navbar-fixed-top").unbind();
	if (a == "fixed") {
		$(".navbar-fixed-top").css({ 'position': 'fixed', 'top': '0px' });
		$("#mainpage").css('margin-top', '0px');
	} else if (a == "detached") {
		$(".navbar-fixed-top").css('position', 'inherit');
		$("#mainpage").css('margin-top', '-72px');
	} else if (a == "mouseover") {
		$(".navbar-fixed-top").css({ 'position': 'fixed', 'top': '-40px' })
			.on("mouseover", function () {
				$(".navbar-fixed-top").css('top', '0px');
			})
			.on("mouseout", function () {
				$(".navbar-fixed-top").css('top', '-40px');
			});
		$("#mainpage").css('margin-top', '-40px');
	}
}

function customCSS(a) {
	$("#usercss").remove();
	a == "yes" ? $("head").append('<style id="usercss" type="text/css">' + USERCONFIG.csscode + '</style>') : '';
}

// set global layout according to user preferences

function setLayout() {
	playerLocation(USERCONFIG.player);
	userlistLocation(USERCONFIG.userlist);
	queueLocation(USERCONFIG.queue);
	queueSize(USERCONFIG.qsize);
	mainLocation(USERCONFIG.main);
	motdLocation(USERCONFIG.motd);
	logoInsert(USERCONFIG.logo);
	headerMode(USERCONFIG.header);
	customCSS(USERCONFIG.css);
}

// fit player height

function fitPlayer() {
	VW = $("#videowrap").width() + '';
	VH = Math.floor(parseInt(VW) * 9 / 16 + 1) + '';
	//$("#ytapiplayer").width(VW).height(VH);
}


// fit chat height

function fitChat(a) {
	if (a == "auto") {
		VW = $("#messagebuffer").width();
		VH = Math.floor(parseInt(VW) * 9 / 16 + 1);
	} else {
		VH = a;
	}
	$("#messagebuffer").height(VH);
	$("#userlist").height(VH);
}

// display mode helper functions

function bigPlayer() {
	$("#videowrap").removeClass().addClass("col-lg-12 col-md-12");
	fitPlayer();
}

function bigChat() {
	$("#chatwrap").removeClass().addClass('col-lg-12 col-md-12');
	fitChat("auto");
}

function normalPlayer() {
	$("#videowrap").removeClass().addClass("col-lg-7 col-md-7");
	fitPlayer();
}

function normalChat() {
	c = (PINNED && USERCONFIG.qsize == "wide") ? 'col-lg-7 col-md-7' : 'col-lg-5 col-md-5';
	$("#chatwrap").removeClass().addClass(c);
	fitChat(573);
}

// set display mode

function setMode(a) {
	if (NOPLAYER) {
		$("#videowrap").show();
		ytapiplayer = $('<div id="ytapiplayer" />')
			.insertBefore("#playercontrols");
		refreshPlayer();
		NOPLAYER = false;
	}

	$("#main").show();
	pinupbtn.hide();
	modesel.find("option[value='chMode'], option[value='rMode']").show();
	PINNED ? modesel.find("option[value='chMode']").hide() : '';

	if (a == "syMode") {

		$("#videowrap, #videowrap p, #videowrap div, #chatwrap, #rightpane, #pinup-btn").show();
		$("#config-btn, #configbtnwrap br, #pinup-btn").show();
		$("#min-layout").parent().show();

		normalPlayer();

		c = (PINNED && USERCONFIG.qsize == "wide") ? 'col-lg-7 col-md-7' : 'col-lg-5 col-md-5';
		$("#chatwrap").removeClass().addClass(c);
		H = parseInt(VH) - $("#chatline").outerHeight() - 1;
		$("#messagebuffer").height(H);
		$("#userlist").height(H);

		USERCONFIG.player == "center" ? playerLocation("center") : '';
		PINNED ? pinUp() : '';

	} else if (a == "kMode") {

		$("#videowrap").show();
		PINNED ? $("#rightpane").hide() : $("#chatwrap").hide();
		$("#fontspanel, #emotespanel").hide();

		bigPlayer();

	} else if (a == "chMode") {

		$("#chatwrap").show();

		if (WEBKIT) {
			$("#videowrap").hide();
		} else {
			$("#videowrap div, #videowrap p").hide();
			$("#ytapiplayer").width(1).height(1);
		}

		bigChat();

	} else if (a == "sMode") {

		$("#chatwrap").show();
		$("#videowrap").hide();
		$("#ytapiplayer").remove();
		$("#fontspanel, #emotespanel").hide();
		modesel.find("option[value='chMode'], option[value='rMode']").hide();
		NOPLAYER = true;

		bigChat();

	} else if (a == "rMode") {

		if (WEBKIT) {
			$("#main").hide();
		} else {
			PINNED ? $("#rightpane").hide() : $("#chatwrap").hide();
			$("#videowrap div, #videowrap p").hide();
			$("#ytapiplayer").width(1).height(1);
		}

		!PINNED ? $("#min-layout").parent().show() : '';

	}
}

// fix layout after changing media

function setModeAfterVideoChange() {
	m = modesel.val();
	(m == "syMode" || m == "chMode" || m == "rMode") ? setMode(m) : '';
}

// change welcome text

function changeWelcomeText() {
	if (CLIENT.rank > 0) {
		$("#welcome").html($("#welcome").html().replace(/Welcome/, CustomCaptions_Array['welcome']));
	}
}

// set MOTD

function changeMOTD() {
	if (UI_MOTDTabs == "1" && MOTDTabs_Array.length > 0) {
		// adding tabs application

		motdtabswrap = $('<div id="motdtabswrap" />')
			.appendTo("#motd");
		for (i in MOTDTabs_Array) {
			btn = $('<button class="btn btn-default motdtabs-btn" tab="' + i + '">')
				.text(MOTDTabs_Array[i][0])
				.appendTo(motdtabswrap)
				.on("click", function () {
					$(".motdtabs-btn").removeClass('btn-success');
					$(this).addClass('btn-success');
					nr = $(this).attr('tab');
					motdtabscontent.html(MOTDTabs_Array[nr][1]);
				});
		}
		motdtabscontent = $('<div id="motdtabscontent">' + MOTDTabs_Array[0][1] + '</div>')
			.css(MOTDTabs_CSS)
			.appendTo("#motd");
		$(".motdtabs-btn:nth-child(1)").addClass('btn-success');
	}
	if (UI_MOTDAutoLogo == "1") {
		// adding logo

		var logo = 0;
		var len = MOTDAutoLogo_Array.length;
		if (len < 1) {
			MOTDAutoLogo_Array = ['https://dl.dropboxusercontent.com/s/7mrz85gl29eiiks/logo.png'];
			len = 1;
		}
		if (MOTDAutoLogo_Mode == "2" || MOTDAutoLogo_Mode == "3") {
			logo = Math.floor(Math.random() * len);
		} else if (MOTDAutoLogo_Mode == "7") {
			logo = new Date().getDay();
			typeof MOTDAutoLogo_Array[logo] === "undefined" ? logo = 0 : '';
		}
		$('<center><img id="motdlogo" src="' + MOTDAutoLogo_Array[logo] + '" /></center>').prependTo("#motd");
	}
	if (UI_RulesBtn == "1") {
		// adding rules button

		RulesBtn_Caption == "" ? RulesBtn_Caption = 'Test Rules' : '';
		RulesBtn_HTML == "" ? RulesBtn_HTML = 'Test Rules2.' : '';
		rulesbtnwrap = $('<div id="rulesbtnwrap" />').appendTo("#motd");
		rulesbtn = $('<button id="rules-btn" class="btn btn-default btn-sm" />')
			.text(RulesBtn_Caption + ' ▸')
			.appendTo(rulesbtnwrap)
			.on("click", function () {
				toggleDiv(rulespanel);
			});
		rulespanelouter = $('<div id="rulespanel-outer" />').appendTo("#motd");
		rulespanel = $('<div id="rulespanel" style="display:none" />')
			.html(RulesBtn_HTML)
			.appendTo(rulespanelouter);
	}
}

// change title bar description

function changeTitle() {
	title = $("#currenttitle").text();
	$("#currenttitle").text(title.replace(/Currently Playing:/, TitleBarDescription_Caption));
}

// YouTube/Dailymotion progress bar

function progressBar() {
	var a = 0;
	if (PLAYER.type == "yt") {
		b = PLAYER.player.getCurrentTime();
		b != PREVTIME ? a = b / PLAYER.player.getDuration() * 100 : '';
		PREVTIME = b;
	} else if (PLAYER.type == "dm") {
		b = PLAYER.player.currentTime;
		b != PREVTIME ? a = b / PLAYER.player.duration * 100 : '';
		PREVTIME = b;
	}
	titlerow.css('background-size', a + '% 100%');
}

// toggle additional chat functions

function toggleChatFunctions() {
	CLIENT.rank > 2 ? chatflair.show() : chatflair.hide();
}

// set chat side panel properties

function setPanelProperties(div) {
	bgcolor = $("body").css('background-color');
	color = $("body").css('color');
	height = $("#userlist").height();
	width = $("#userlist").width();
	$(div).css({ 'background-color': bgcolor, 'color': color, 'height': height + 'px', 'width': width + 'px' });
}

// refresh user chat statistics

function userChatStats(str) {
	CHATSTAT['n']++;
	CHATSTAT['l'] = CHATSTAT['l'] + str.length;
	CHATSTAT['m'].push(str);
}

// create squavatar

function createSquavatar(str) {
	for (i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash));
	for (i = 0, col = ''; i < 3; col += ('00' + ((hash >> i++ * 8) & 0xFF).toString(16)).slice(-2));
	r = parseInt(col.substring(0, 2), 16);
	g = parseInt(col.substring(2, 4), 16);
	b = parseInt(col.substring(4, 6), 16);
	r2 = 255 - r;
	g2 = 255 - g;
	b2 = 255 - b;
	html = '<span class="squavatar" style="background-color:rgb(' + r + ',' + g + ',' + b + '); '
		+ 'border-color:rgb(' + r2 + ',' + g2 + ',' + b2 + ')"></span>';
	return html;
}

// format chat messages before sending and execute commands

function prepareMessage(msg) {
	if (UI_MessagesSuffix == "1") {
		if ((typeof MessagesSuffix_Percentage !== "number") || MessagesSuffix_Percentage < 0) {
			MessagesSuffix_Percentage = '10';
		}
		Math.random() < (MessagesSuffix_Percentage / 100) ? msg += ' ' + MessagesSuffix_Text : '';
	}

	if (UI_UserCommands == "1" && msg.indexOf("!") == 0) {
		COMMAND = true;
		if (msg.indexOf("!stat") == 0) {

			num = CHATSTAT['n'];
			len = CHATSTAT['l'];
			if (num > 0) {
				rnd = Math.round(Math.random() * (CHATSTAT['m'].length - 1));
				avg = Math.round(len / num * 10) / 10;
			} else {
				rnd = 0;
				avg = 0;
			}
			a = (num != 1) ? 's' : '';
			b = (avg != 1) ? 's' : '';
			msg = 'you have sent ' + num + ' message' + a + ', '
				+ 'total length is ' + len + ' character' + b + ' (' + avg + ' per message), '
				+ 'random message: ' + CHATSTAT['m'][rnd];

		} else if (msg.indexOf("!memestats") == 0) {

			num = CHATSTAT['n'];
			len = Memes_Array.length;
			mem = 0;
			for (i = 0; i < num; i++) {
				for (j = 0; j < len; j++) {
					CHATSTAT['m'][i].indexOf(Memes_Array[j]) > -1 ? mem++ : '';
				}
			}
			a = (num != 1) ? 's' : '';
			b = (mem != 1) ? 's' : '';
			if (len > 0) {
				msg = 'in ' + num + ' message' + a + ' you have used ' + mem + ' meme' + b;
			} else {
				msg = 'error: no defined memes';
			}

		} else if (msg.indexOf("!pick ") == 0) {

			arr = msg.split("!pick ")[1].split(",");
			rnd = Math.round(Math.random() * (arr.length - 1));
			msg = arr[rnd];

		} else if (msg.indexOf("!ladyning ") == 0) {

			AskAnswers_Array.length < 1 ? AskAnswers_Array = ['yes', 'no'] : '';
			rnd = a = Math.round(Math.random() * (AskAnswers_Array.length - 1));
			msg = AskAnswers_Array[rnd];

		} else if (msg.indexOf("!time") == 0) {

			var h = new Date().getHours();
			h < 10 ? h = '0' + h : '';
			var m = new Date().getMinutes();
			m < 10 ? m = '0' + m : '';
			msg = 'current time: ' + h + ':' + m;

		} else if (msg.indexOf("!dice") == 0) {

			rnd = Math.round(Math.random() * 5) + 1;
			msg = '' + rnd;

		} else if (msg.indexOf("!roll") == 0) {

			var rnd = Math.round(Math.random() * 999);
			rnd < 100 ? rnd = "0" + rnd : '';
			rnd < 10 ? rnd = "0" + rnd : '';
			msg = '' + rnd;

		} else if (msg.indexOf("!cheld") == 0) {

			RandomQuotes_Array.length < 1 ? RandomQuotes_Array = ['error: no quotes available'] : '';
			rnd = Math.round(Math.random() * (RandomQuotes_Array.length - 1));
			msg = RandomQuotes_Array[rnd];

		} else if (msg.indexOf("!random") == 0 && hasPermission("playlistadd")) {

			if (UI_ChannelDatabase == "1") {
				var link = "";
				while (link == "") {
					rnd = Math.round(Math.random() * (ChannelDatabase.length - 1));
					link = ChannelDatabase[rnd][0];
					title = ChannelDatabase[rnd][1];
				}
				addToPlaylist(link, "end");
				msg = 'random media adding attempt: ' + title;
			}

		} else if (msg.indexOf("!calc ") == 0) {

			func = msg.split("!calc ");
			msg = '' + eval(func[1]);

		} else if (msg.indexOf("!skip") == 0 && hasPermission("voteskip")) {

			socket.emit("voteskip");
			msg = 'current item has been voteskipped';

		} else if (msg.indexOf("!next") == 0 && hasPermission("playlistjump")) {

			socket.emit("playNext");
			msg = 'start playing next item';

		} else if (msg.indexOf("!bump") == 0 && hasPermission("playlistmove")) {

			last = $("#queue").children().length;
			uid = $("#queue .queue_entry:nth-child(" + last + ")").data("uid");
			title = $("#queue .queue_entry:nth-child(" + last + ") .qe_title").html();
			socket.emit("moveMedia", { from: uid, after: PL_CURRENT });
			msg = 'last item bumped as next: ' + title;

		} else if (msg.indexOf("!add ") == 0 && hasPermission("playlistadd")) {

			parsed = parseMediaLink(msg.split("!add ")[1]);
			if (parsed["id"] === null) {
				msg = 'error: wrong link, item has not been added';
			} else {
				socket.emit("queue", { id: parsed["id"], pos: "end", type: parsed["type"] });
				msg = 'video has been added';
			}

		} else if (msg.indexOf("!now") == 0) {

			msg = 'Now playing: ' + $(".queue_active a").html();

		} else {
			COMMAND = false;
		}
	}
	return msg;
}

// insert code into chatline
;
function insertText(str) {
	;
	$("#chatline").val($("#chatline").val() + str).focus();
}

// toggle YT mute button

function toggleMuteBtn() {
	(PLAYER && PLAYER.type == "yt") ? muteplayerbtn.show() : muteplayerbtn.hide();
}

// toggle mod panel button
function toggleModPanel() {
	if (CLIENT.rank < 2) {
		modbtn.hide();
	} else {
		modbtn.show();
		HASH = '';
		for (i in ModPanel_Array) {
			name = ModPanel_Array[i][0];
			(name == "" || name == CLIENT.name) ? HASH += '' + ModPanel_Array[i][1].length : '';
		}
		if (HASH != USERCONFIG.modhash) {
			modbtn.addClass('btn-danger').html(modbtn.html() + ' (New Mess.)');
		}
	}
}

// create media database

function createDatabase() {
	html = '<button id="la1" class="btn btn-default btn-sm db-break" onclick="toggleCat(1)">'
		+ ChannelDatabase[0][1]
		+ '</button>'
		+ '<ul id="l1" class="videolist db-cat">';

	len = ChannelDatabase.length;
	for (i = 1; i < ChannelDatabase.length; i++) {
		if (ChannelDatabase[i][0] == "") {
			item_count[layer_nr - 1] = count_nr;
			opening[layer_nr - 1] = 0;
			layer_nr++;
			count_nr = 0;

			html += '</ul>'
				+ '<button id="la' + layer_nr + '" class="btn btn-default btn-sm db-break" '
				+ 'onclick="toggleCat(' + layer_nr + ')">'
				+ ChannelDatabase[i][1]
				+ '</button>'
				+ '<ul id="l' + layer_nr + '" class="videolist db-cat">';
		} else {
			item_nr++;
			count_nr++;
			link = ChannelDatabase[i][0];

			html += '<li class="queue_entry">'
				+ '<button class="btn btn-default btn-xs pull-right" onclick="addVideo(\'' + link + '\')">'
				+ 'End'
				+ '</button>';

			parsed = parseMediaLink(link);
			if (parsed["type"] == "yt") {
				a = parsed["id"];
				html += '<button class="btn btn-default btn-xs pull-right" '
					+ 'onclick="prevVideo(\'' + a + '\')">'
					+ '<i class="glyphicon glyphicon-film"></i>'
					+ '</button>';
			}
			html += '<span class="badge db-badge">'
				+ item_nr
				+ '</span><span class="db-title">'
				+ ChannelDatabase[i][1]
				+ '</span><br /><span class="db-link">'
				+ link
				+ '</span>';
		}
	}

	html += '</ul><br /><br /><div id="cleardbwrap">'
		+ '<button id="cleardb-btn" class="btn btn-default btn-sm">'
		+ 'Reload Data (if channel seems working slow)</button>'
		+ '</div>';

	item_count[layer_nr - 1] = count_nr;
	opening[layer_nr - 1] = 0;
	dbwell.html(html);
	html = '';

	len = item_count.length;
	for (i = 1; i <= len; i++) {
		$("#la" + i).append(' [' + item_count[i - 1] + ']');
	}

	cleardbbtn = $("#cleardb-btn")
		.on("click", function () {
			toggleDiv(dbwrap);
			dbwell.html('');
			CHANDB = false;
		});

	for (i in opening) {
		opening[i] = 0;
	}
	dbcat = $(".db-cat").hide();
	CHANDB = true;
}

// toggle database sections

function toggleCat(a) {
	b = a - 1;
	if (opening[b] == 0) {
		dbcat.hide();
		for (i in opening) {
			opening[i] = 0;
		}
		$("#l" + a).show();
		opening[b] = 1;
	} else {
		$("#l" + a).hide();
		opening[b] = 0;
	}
}

// patch layout for guest logins

function patchWrap() {
	setTimeout(function () {
		$("#playlistmanagerwrap").show();
	}, 1500);
}

// create channel gallery

function createGallery() {
	galleryframe = $('<iframe id="galleryFrame" src=' + ChannelGalleries_Array[0][1] + ' width="100%" />')
		.attr({ 'frameborder': '0', 'scrolling': 'no', 'height': '415px' })
		.appendTo(gallerywell);
	galtitle = $('<span id="galtitle" class="conf-opt">Select Gallery</span>').appendTo(gallerywell);
	galsel = $('<select id="gal-sel" class="form-control" />')
		.appendTo(gallerywell)
		.on("change", function () {
			galleryframe.attr('src', galsel.val());
		});

	for (i in ChannelGalleries_Array) {
		$('<option value="' + ChannelGalleries_Array[i][1] + '" />')
			.html(ChannelGalleries_Array[i][0])
			.appendTo(galsel);
	}

	text = 'Reload Galleries (if problems or slow channel)';
	cleargallerybtn = $('<button id="cleargallery-btn" class="btn btn-default btn-sm">' + text + '</button>')
		.appendTo(gallerywell)
		.on("click", function () {
			toggleDiv(gallerywrap);
			gallerywell.html('');
			GALLERY = false;
		});
	GALLERY = true;
}

// toggle "/clear" button depends on rank

function toggleClearBtn() {
	hasPermission("chatclear") ? clearbtn.show() : 'clearbtn.hide()';
}

// toggle YT volume buttons depends on player type

function toggleVolBtn() {
	if (PLAYER && PLAYER.type == "yt") {
		voldownbtn.show();
		volupbtn.show();
	} else {
		voldownbtn.hide();
		volupbtn.hide();
	}
}

// toggle advanced playlist options buttons

function toggleAdvancedPl() {
	CLIENT.rank < 2 ? advplaylist.hide() : advplaylist.show();
	hasPermission("playlistjump") ? playnextbtn.show() : playnextbtn.hide();
	(hasPermission("playlistadd") && UI_ChannelDatabase == "1") ? addrandombtn.show() : addrandombtn.hide();
	hasPermission("playlistmove") ? bumplastbtn.show() : bumplastbtn.hide();
	hasPermission("playlistdelete") ? deletelastbtn.show() : deletelastbtn.hide();
}

// get playlist helper functions

function formatRawList() {
	len = $("#queue .queue_entry").length + 1;
	list = new Array();
	for (i = 1; i < len; i++) {
		item = $("#queue .queue_entry:nth-child(" + i + ")").data("media");
		list.push(formatURL(item));
	}
	return list.join(",");
}

function formatPlainTextList() {
	len = $("#queue .queue_entry").length + 1;
	var list = new Array();
	for (i = 1; i < len; i++) {
		item = $("#queue .queue_entry:nth-child(" + i + ")").data("media");
		list.push(i + '. ' + formatURL(item) + ' \/\/ ' + item.title + ' [' + item.duration + ']');
	}
	return list.join('\n');
}

function formatHTMLList() {
	len = $("#queue .queue_entry").length + 1;
	var list = new Array();
	for (i = 1; i < len; i++) {
		item = $("#queue .queue_entry:nth-child(" + i + ")").data("media");
		title = item.title;
		duration = item.duration;
		link = formatURL(item);
		list.push('<li>' + title + ' [' + duration + '] - <a href="' + link + '" target="_blank">' + link + '</a></li>');
	}
	return list.join('\n');
}

function formatOrderedList() {
	len = $("#queue .queue_entry").length + 1;
	var list = new Array();
	for (i = 1; i < len; i++) {
		item = $("#queue .queue_entry:nth-child(" + i + ")").data("media");
		link = formatURL(item);
		list.push(item.title + ' ■■ ' + link + ' ■■ [' + item.duration + ']');
		list.sort();
	}
	return list.join('\n');
}

function formatDBList() {
	len = $("#queue .queue_entry").length + 1;
	var list = new Array();
	for (i = 1; i < len; i++) {
		item = $("#queue .queue_entry:nth-child(" + i + ")").data("media");
		re1 = new RegExp('\\\\', 'g');
		re2 = new RegExp('\'', 'g');
		title = item.title.replace(re1, '\\\\').replace(re2, '\\\'');
		list.push('[\'' + formatURL(item) + '\', \'' + title + '\'],');
	}
	return list.join('\n');
}

// change voteskip caption

function changeSkipText() {
	$("#voteskip").text(CustomCaptions_Array['voteskip'] + ' ' + $("#voteskip").text());
}

// add database link to playlist

function addVideo(link) {
	parsed = parseMediaLink(link);
	idp = parsed["id"];
	if (idp != null) {
		time = (new Date()).getTime();
		if (!hasPermission("playlistadd")) {
			alert('You have no permission to add a link.');
		} else if (ADDEDLINKS[idp] != undefined && time - ADDEDLINKS[idp] < 120000) {
			alert('You have just added this link.');
		} else {
			socket.emit("queue", { id: idp, pos: "end", type: parsed["type"] });
			ADDEDLINKS[idp] = time;
		}
	}
}

// set user online time

function onlineTime() {
	USERONLINE++;
	var h = Math.floor(USERONLINE / 60);
	var m = USERONLINE - h * 60;
	m < 10 ? m = "0" + m : '';
	onlinetime.html(h + ":" + m);
}

// set user CSS

function setUserCSS() {
	$("#chanexternalcss").detach().appendTo("head");
	$("#chanexternalcss-fix").remove();

	cssfix = '#mainpage {padding-top:52px}\n'
		+ '#motdrow, #announcements, #main, #playlistrow {border:solid 2px transparent; margin-bottom:5px}\n'
		+ '#main > div, #playlistrow > div {\n'
		+ '  padding-left:5px; padding-right:5px; margin-top:5px; margin-bottom:5px;\n'
		+ '}\n'
		+ '#motdwrap {margin:5px -10px}\n'
		+ '#announcements .alert {margin:0px -10px 5px}\n'
		+ '#drinkcount {margin:0px}\n';

	$("head").append('<style id="chanexternalcss-fix" type="text/css">' + cssfix + '</style>');
	$("#usertheme").attr('href', '/css/themes/slate.css');
	$("#usertheme-fix").remove();
	if (USERTHEME.indexOf("/css/themes/") > -1) {
		$("#usertheme").attr('href', USERTHEME);
	} else {
		$('<link id="usertheme-fix" rel="stylesheet" type="text/css" href="' + USERTHEME + '"></link>')
			.appendTo("head");
	}
	$("#usercss").remove();
	if (USERCONFIG.css != "no") {
		$("head").append('<style id="usercss" type="text/css">' + USERCONFIG.csscode + '</style>');
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- UI events functions ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function prepareFilters() {
	str = '{"name":"white color","source":"\\\\[white\\\\]","flags":"g",'
		+ '"replace":"<span style=\\"color:white\\">","active":true,"filterlinks":false},'
		+ '{"name":"yellow color","source":"\\\\[yellow\\\\]","flags":"g",'
		+ '"replace":"<span style=\\"color:gold\\">","active":true,"filterlinks":false},'
		+ '{"name":"orange color","source":"\\\\[orange\\\\]","flags":"g",'
		+ '"replace":"<span style=\\"color:orange\\">","active":true,"filterlinks":false},'
		+ '{"name":"pink color","source":"\\\\[pink\\\\]","flags":"g",'
		+ '"replace":"<span style=\\"color:#FFBBFF\\">","active":true,"filterlinks":false},'
		+ '{"name":"red color","source":"\\\\[red\\\\]","flags":"g",'
		+ '"replace":"<span style=\\"color:red\\">","active":true,"filterlinks":false},'
		+ '{"name":"limegreen color","source":"\\\\[lime\\\\]","flags":"g",'
		+ '"replace":"<span style=\\"color:limegreen\\">","active":true,"filterlinks":false},'
		+ '{"name":"green color","source":"\\\\[green\\\\]","flags":"g",'
		+ '"replace":"<span style=\\"color:green\\">","active":true,"filterlinks":false},'
		+ '{"name":"aqua color","source":"\\\\[aqua\\\\]","flags":"g",'
		+ '"replace":"<span style=\\"color:aqua\\">","active":true,"filterlinks":false},'
		+ '{"name":"blue color","source":"\\\\[blue\\\\]","flags":"g",'
		+ '"replace":"<span style=\\"color:blue\\">","active":true,"filterlinks":false},'
		+ '{"name":"violet color","source":"\\\\[violet\\\\]","flags":"g",'
		+ '"replace":"<span style=\\"color:#660099\\">","active":true,"filterlinks":false},'
		+ '{"name":"brown color","source":"\\\\[brown\\\\]","flags":"g",'
		+ '"replace":"<span style=\\"color:#660000\\">","active":true,"filterlinks":false},'
		+ '{"name":"silver color","source":"\\\\[silver\\\\]","flags":"g",'
		+ '"replace":"<span style=\\"color:silver\\">","active":true,"filterlinks":false},'
		+ '{"name":"black color","source":"\\\\[black\\\\]","flags":"g",'
		+ '"replace":"<span style=\\"color:black\\">","active":true,"filterlinks":false},'
		+ '{"name":"white color on black","source":"\\\\[bw\\\\]","flags":"g",'
		+ '"replace":"<span style=\\"color:white; background-color:black\\">","active":true,"filterlinks":false},'
		+ '{"name":"bold text","source":"\\\\[b\\\\]","flags":"g",'
		+ '"replace":"<span style=\\"font-weight:bold\\">","active":true,"filterlinks":false},'
		+ '{"name":"italic text","source":"\\\\[i\\\\]","flags":"g",'
		+ '"replace":"<span style=\\"font-style:italic\\">","active":true,"filterlinks":false},'
		+ '{"name":"underlined text","source":"\\\\[u\\\\]","flags":"g",'
		+ '"replace":"<span style=\\"text-decoration:underline\\">","active":true,"filterlinks":false},'
		+ '{"name":"striked text","source":"\\\\[s\\\\]","flags":"g",'
		+ '"replace":"<span style=\\"text-decoration:line-through\\">","active":true,"filterlinks":false},'
		+ '{"name":"distinguished text","source":"\\\\[d\\\\]","flags":"g",'
		+ '"replace":"<span class=\\"dist\\">","active":true,"filterlinks":false},'
		+ '{"name":"fire text","source":"\\\\[f\\\\]","flags":"g",'
		+ '"replace":"<span style=\\"color:#FFFFFF; font-family:impact, sans-serif; padding-top:20px; '
		+ 'text-shadow:0px 0px 4px #000000, 0px -5px 4px #FFFF33, 2px -8px 6px #FFDD33, -2px -15px 10px #FF8800, '
		+ '2px -20px 18px #FF2200; letter-spacing:2px\\">","active":true,"filterlinks":false},'
		+ '{"name":"short spoiler","source":"\\\\[sp\\\\]","flags":"g",'
		+ '"replace":"<span class=\\"spoiler\\">","active":true,"filterlinks":false},'
		+ '{"name":"closing font style","source":"\\\\[\\\\/\\\\]","flags":"g",'
		+ '"replace":"</span>","active":true,"filterlinks":false}]';

	callback = function (data) {
		socket.listeners("chatFilters").splice(
			socket.listeners("chatFilters").indexOf(callback)
		);
		json = JSON.stringify(data);
		comma = (json.length != "2") ? ',' : '';
		$("#cs-chatfilters-exporttext").val(json.substring(0, json.length - 1) + comma + str);
	};

	socket.on("chatFilters", callback);
	socket.emit("requestChatFilters");

	txt = 'This option does NOT affect your current filters, all of them will be saved.\n'
		+ 'Click "Import filter list" button if you\'ll decide to install.';
	alert(txt);
}

// show chat additional functions

function showChatFunctions() {
	$("#userlist").append('<div id="chatfunc-dropdown" />');
	setPanelProperties("#chatfunc-dropdown");

	$("#chatfunc-dropdown").append('<div>Prevent room freezing if spam:</div>');

	spamclearbtn = $('<button id="spamclear-btn" class="btn btn-xs btn-default">Auto Clear</button>')
		.appendTo("#chatfunc-dropdown")
		.on("click", function () {
			if (!CLEARING) {
				$(this).text('Stop Clearing').addClass('btn-danger');
				CLEARING = setInterval(function () {
					socket.emit("chatMsg", { msg: '/clear' });
				}, 500);
			} else {
				$(this).text('Auto Clear').removeClass('btn-danger');
				clearInterval(CLEARING);
				CLEARING = false;
			}
		});
	CLEARING ? $("#spamclear-btn").text('Stop Clearing').addClass('btn-danger') : '';

	$("#chatfunc-dropdown").append('<div>Prevent me from AFK:</div>');

	antiafkbtn = $('<button id="antiafk-btn" class="btn btn-xs btn-default">Anti AFK</button>')
		.appendTo("#chatfunc-dropdown")
		.on("click", function () {
			if (!ANTIAFK) {
				$(this).addClass('btn-danger');
				ANTIAFK = setInterval(function () {
					$("#userlist").find('span[class^=userlist]').each(function () {
						if ($(this).html() == CLIENT.name && $(this).css('font-style') == "italic") {
							socket.emit("chatMsg", { msg: '/afk' });
							return;
						}
					});
				}, 4000);
			} else {
				$(this).removeClass('btn-danger');
				clearInterval(ANTIAFK);
				ANTIAFK = false;
			}
		});
	ANTIAFK ? $("#antiafk-btn").addClass('btn-danger') : '';
}

// display list of emotes

function showEmotes() {
	if (typeof GroupEmotes_Number !== "number" || GroupEmotes_Number < 1) {
		GroupEmotes_Number = 100;
	}
	len = CHANNEL.emotes.length;
	if (len < 1) {
		emotespanel.addClass('row');
		makeAlert("No emotes available", "Ask channel administrator.").appendTo(emotespanel);
	} else if (UI_GroupEmotes != "1" || len <= GroupEmotes_Number) {
		for (i in CHANNEL.emotes) {
			$('<img loading="lazy" onclick="insertText(\'' + CHANNEL.emotes[i].name + ' \') />')
				.attr({ 'src': CHANNEL.emotes[i].image, 'title': CHANNEL.emotes[i].name })
				.appendTo(emotespanel);
		}
	} else {
		var arr = new Array();
		stop = GroupEmotes_Number - 1;
		gr = Math.ceil(CHANNEL.emotes.length / GroupEmotes_Number);
		html = '';

		for (i = 0; i < len; i++) {
			html += `<img loading="lazy" src="${CHANNEL.emotes[i].image}" onclick="insertText('${CHANNEL.emotes[i].name} ')" title="${CHANNEL.emotes[i].name}" />`;
			if (i % GroupEmotes_Number == stop) {
				arr.push(html);
				html = '';
			}
		}
		len % GroupEmotes_Number != 0 ? arr.push(html) : '';

		for (i = 0; i < gr; i++) {
			div = $('<div id="emotes-' + i + '" class="groupemotes" style="display:none" />')
				.html(arr[i])
				.appendTo(emotespanel);
		}
		arr = '';

		emotesbtnwrap = $('<div id="emotesbtnwrap" />').appendTo(emotespanel);
		emotesbtngroup = $('<div id="emotescontrols" class="btn-group">').appendTo(emotesbtnwrap);

		for (i = 0; i < gr; i++) {
			btn = $('<button class="btn btn-sm btn-default emotesbtn" group="' + i + '">' + (i + 1) + '</button>')
				.appendTo(emotesbtngroup)
				.on("click", function () {
					$(".emotesbtn").removeClass('active');
					$(this).addClass('active');
					$(".groupemotes").hide();
					nr = $(this).attr('group');
					$("#emotes-" + nr).show();
				});
		}
		$("#emotes-0").show();
		$("#emotescontrols button:nth-child(1)").addClass('active');
	}
	EMOTES = true;
}

// show chat commands modal window

function showChatHelp() {
	createModal('Chat Commands');
	if (UI_FontsBtn == "1") {
		body.append('<strong>Fonts commands</strong><br /><br />');
		html = '<li><code>[white]</code>, <code>[yellow]</code>, <code>[orange]</code>, <code>[pink]</code>, '
			+ '<code>[red]</code>, <code>[lime]</code>, <code>[green]</code>, <code>[aqua]</code>, '
			+ '<code>[blue]</code>, <code>[violet]</code>, <code>[brown]</code>, <code>[silver]</code>, '
			+ '<code>[black]</code> - begin of colored text</li>'
			+ '<li><code>[bw]</code> - begin of white text on the black background</li>'
			+ '<li><code>[b]</code>, <code>[i]</code>, <code>[u]</code>, <code>[s]</code> - '
			+ 'begin of bold, italic, underlined, striked or underlined text</li>'
			+ '<li><code>[d]</code> - begin of a distinguished text (red on yelllow background)</li>'
			+ '<li><code>[f]</code> - begin of a text with a fire effect</li>'
			+ '<li><code>[sp]</code> - begin of an inline spoiler</li>'
			+ '<li><code>[/]</code> - <b>end of any color, style or spoiler</b></li><br />'
			+ 'If fonts commands don\'t work, ask script administrator about proper filters installation.';
		$('<ul />').html(html).appendTo(body);
	}
	if (UI_UserCommands == "1") {
		arr = {
			'pick': 'choosing a random option from a list separated by commas '
				+ '(e.g. <i>!pick japan,korea,china</i>)',
			'ask': 'asking a question with yes/no type answer '
				+ '(e.g. <i>!ask Will this channel be popular?</i>)',
			'q': 'displaying random quote (<i>!q</i>)',
			'dice': 'rolling dice (<i>!dice</i>)',
			'roll': 'rolling 3-digit number (<i>!roll</i>)',
			'time': 'displaying current time (<i>!time</i>)',
			'now': 'displaying current playing title (<i>!now</i>)',
			'calc': 'calculating a math operation '
				+ '(all JavaScript Math methods and constants allowed, e.g. <i>!calc Math.PI*10</i>)',
			'skip': 'skip current item (<i>!skip</i>)',
			'add': 'adding a link to the end of playlist '
				+ '(e.g. <i>!add https://www.youtube.com/watch?v=29FFHC2D12Q</i>)',
			'stat': 'displaying user chat statistics in current session (<i>!stat</i>)',
			'memestats': 'displaying number memes used by user in all messages (<i>!memestats</i>)'
		}
		if (UI_ChannelDatabase == "1") {
			arr['random'] = 'adding random link from database (<i>!random</i>)';
		}
		body.append('<strong>New chat commands</strong><br /><br />');
		ul = $('<ul />').appendTo(body);
		for (cmd in arr) {
			ul.append('<li><code>!' + cmd + '</code> - ' + arr[cmd] + '</li>');
		}
	}
	if (UI_ChatSpeak == "1") {
		body.append('<strong>Voice commands</strong><br /><br />');
		html = '<li><code>!say</code> - text speaking in english (<i>!say Hello!</i>)</li>'
			+ '<li><code>!mow</code> - text speaking in polish (<i>!mow Chrząszcz brzmi w trzcinie.</i>)';
		$('<ul />').html(html).appendTo(body);
	}
	arr = {
		'me': 'showing an action-style message (username does something, e.g. <i>/me is dancing</i>)',
		'sp': 'hiding a message in a hover-to-show spoiler box (e.g. <i>/sp This message is hidden</i>)',
		'afk': 'toggling your AFK (away from keyboard) status (<i>/afk</i>)',
	}
	body.append('<br /><strong>Default CyTube commands</strong><br /><br />');
	ul = $('<ul />').appendTo(body);
	for (cmd in arr) {
		ul.append('<li><code>/' + cmd + '</code> - ' + arr[cmd] + '</li>');
	}
}

// show chat sounds panel

function showSoundsPanel() {
	$("#userlist").append('<div id="sounds-dropdown" />');
	setPanelProperties("#sounds-dropdown");

	muteallbtn = $('<button id="muteall-btn" class="btn btn-xs btn-default">Mute All</button>')
		.appendTo("#sounds-dropdown")
		.on("click", function () {
			if (VOICES) {
				$(this).text('Unmute All').addClass('btn-danger');
				voicesbtn.addClass('btn-danger').attr('title', 'Unmute chat voices');
				VOICES = false;
				SOUNDSPANEL = false;
				$("#sounds-dropdown").remove();
			} else {
				$(this).text('Mute All').removeClass('btn-danger');
				voicesbtn.removeClass('btn-danger').attr('title', 'Mute chat voices');
				VOICES = true;
			}
		});
	!VOICES ? muteallbtn.text('Unmute All').addClass('btn-danger') : '';

	$("#sounds-dropdown").append('<div>Sounds level:</div>');

	lvlgroup = $('<div id="lvlgroup" class="btn-group"></div>')
		.appendTo("#sounds-dropdown");

	for (i = 1; i <= 5; i++) {
		btn = $('<button class="btn btn-xs btn-default" id="lvlvol' + i + '" level="' + i + '" />')
			.html(i)
			.appendTo(lvlgroup)
			.on("click", function () {
				$("#lvlvol" + SOUNDSLVL).removeClass('btn-success');
				SOUNDSLVL = $(this).attr('level');
				setOpt(CHANNEL.name + "_soundslvl", SOUNDSLVL);
				$(this).addClass('btn-success');
			});
	}
	$("#lvlvol" + SOUNDSLVL).addClass('btn-success');

	$("#sounds-dropdown").append('<div>Select users to mute sounds:</div>');

	mutegroup = $('<div id="mutegroup" class="btn-group-vertical"></div>').appendTo("#sounds-dropdown");

	$(".userlist_item").each(function () {
		user = $(this).find("span:nth-child(2)").html();
		btn = $('<button class="btn btn-xs btn-default" name="' + user + '" />')
			.html(user)
			.appendTo(mutegroup)
			.on("click", function () {
				name = $(this).attr('name');
				if (name in MUTEDVOICES && MUTEDVOICES[name] == "1") {
					$(this).removeClass('btn-danger');
					MUTEDVOICES[name] = 0;
				} else {
					$(this).addClass('btn-danger');
					MUTEDVOICES[name] = 1;
				}
			});
		(user in MUTEDVOICES && MUTEDVOICES[user] == "1") ? btn.addClass('btn-danger') : '';
	});
}

// show moderators panel

function showModPanel() {
	createModal("Moderators panel");

	html = '';
	for (i in ModPanel_Array) {
		name = ModPanel_Array[i][0];
		mess = ModPanel_Array[i][1];
		if (name == "") {
			html += '<i class="glyphicon glyphicon-comment"></i> '
				+ mess
				+ '<br /><br />';
		} else if (name == CLIENT.name) {
			html += '<i class="glyphicon glyphicon-comment"></i> '
				+ '<i class="glyphicon glyphicon-user"></i> '
				+ '(to: ' + CLIENT.name + ') → ' + mess
				+ '<br /><br />';
		}
	}
	body.append(html);
	$("#mod-btn").removeClass('btn-danger').html('<i class="glyphicon glyphicon-tasks"></i>');
	setOpt(CHANNEL.name + "_modhash", HASH);
}

// show info about current or next media

function showInfo() {
	if (DEFDESCR) {
		contr = $(".queue_active").attr("title");
		if (typeof contr === "undefined") {
			text = 'Nothing Playing';
		} else {
			duration = $(".queue_active .qe_time").html();
			text = contr + ' [' + duration + ']';
		}
		mediainfo.html(text);
	} else {
		var arr = new Array();
		text = 'Playing Next:';
		li1 = $(".queue_active").next();
		li2 = li1.next();
		li3 = li2.next();
		li1.length > 0 ? arr.push(' 1▸ ' + li1.children("a").html()) : '';
		li2.length > 0 ? arr.push(' // 2▸ ' + li2.children("a").html()) : '';
		li3.length > 0 ? arr.push(' // 3▸ ' + li3.children("a").html()) : '';
		text += arr.join("");
		arr.length < 3 ? text += ' // END OF PLAYLIST //' : '';
		mediainfo.html('<marquee scrollamount="5">' + text + '</marquee>');
	}
}

// hide and show player with covering image

function coverPlayer() {
	PlayerHiding_URL == "" ? PlayerHiding_URL = 'https://dl.dropboxusercontent.com/s/xz2o99scw5i7aai/stop.png' : '';
	$("#videowrap").addClass('relative');
	w = $("#ytapiplayer").css('width');
	h = $("#videowrap").css('height').replace('px', '') - 31;
	coverpl = $('<div id="coverpl" />')
		.css({ 'width': w, 'height': h + 'px', 'background-image': 'url(' + PlayerHiding_URL + ')' })
		.appendTo($("#videowrap"));
	hideplayerbtn.addClass('btn-danger').attr('title', 'Show player');
}

function showPlayer() {
	coverpl.remove();
	hideplayerbtn.removeClass('btn-danger').attr('title', 'Hide player');
	$("#videowrap").removeClass('relative');
}

// mute YT player

function mutePlayer() {
	(PLAYER && PLAYER.type == "yt") ? PLAYER.player.mute() : '';
}

// unmute YT player

function unmutePlayer() {
	(PLAYER && PLAYER.type == "yt") ? PLAYER.player.unMute() : '';
}

// download current item

function downloadCurrentItem() {
	uid = $(".pluid-" + PL_CURRENT).data("media");
	arr = {
		'yt': 'http://youtube.com/watch?v=',
		'vi': 'http://vimeo.com/',
		'dm': 'http://dailymotion.com/video/',
		'sc': ''
	}
	link = (uid.type in arr ? arr[uid.type] + '' + uid.id : '');
	if (link == "") {
		alert('This link is not supported. Try YouTube, Vimeo, Dailymotion or SoundCloud.');
	}
	else {
		createModal("Download current item");

		$('<a href="http://keepvid.com/?url=' + link + '" target="_blank">Click here to download</a>')
			.appendTo(body)
			.on("click", function () {
				outer.modal('hide');
			});
	}
}

// preview YT video in modal window

function prevVideo(a) {
	createModal('Preview Video');

	player = $('<iframe id="previewFrame" width="558" height="314" frameborder="0" />')
		.attr('src', 'http://www.youtube.com/embed/' + a + '?wmode=transparent&enablejsapi')
		.appendTo(body);
}

// toggle configuration panel

function toggleConfigPanel() {
	if (MINIMIZED) {
		$("#rightpane-inner").show();
		$("#azukirow, #leftpane-inner").show();
		!$("#hide-motd").prop('checked') ? $("#motdrow").show() : '';
		!$("#hide-ann").prop('checked') ? $("#announcements").show() : '';
		!$("#hide-hf").prop('checked') ? $("footer").show() : '';
		pinupbtn.show();
		layoutbtn.removeClass('btn-danger').addClass('btn-success')
			.html('<span class="glyphicon glyphicon-cog"></span> Layout');
		$("#min-layout").prop('checked', false);
		$("#plcontrol button, #db-btn, #gallery-btn, #newpollbtn").removeAttr('disabled');
		MINIMIZED = false;
		// patch: giving back 15px additional space on the top
		$("#mainpage").css('margin-top', $("#mainpage").css('margin-top').replace('px', '') * 1 - 15 + 'px');
	} else {
		toggleDiv(configwrap);
		if (configwrap.css('display') == "none") {
			layoutbtn.removeClass('btn-success');
		} else {
			layoutbtn.addClass('btn-success');
		}
		LAYOUTBOX = !LAYOUTBOX;
		setOpt(CHANNEL.name + "_layoutbox", LAYOUTBOX);
	}
}

// show layout configuration modal window

function showConfig() {
	createModal("Layout Configuration");

	form = $('<form class="form-horizontal" />').appendTo(body);

	function addOption(txt, elem) {
		g = $('<div class="form-group" />').appendTo(form);
		$('<label class="control-label col-sm-4" />').text(txt).appendTo(g);
		c = $('<div class="col-sm-8" />').appendTo(g);
		elem.appendTo(c);
	}

	playerlocation = $('<select />').addClass('form-control');
	$('<option />').attr('value', 'left').text('left').appendTo(playerlocation);
	$('<option />').attr('value', 'right').text('right').appendTo(playerlocation);
	$('<option />').attr('value', 'center').text('center').appendTo(playerlocation);
	playerlocation.val(USERCONFIG.player);
	addOption('Player location', playerlocation);

	userlistlocation = $('<select />').addClass('form-control');
	$('<option />').attr('value', 'left').text('left').appendTo(userlistlocation);
	$('<option />').attr('value', 'right').text('right').appendTo(userlistlocation);
	userlistlocation.val(USERCONFIG.userlist);
	addOption('Userlist location', userlistlocation);

	queuelocation = $('<select />').addClass('form-control');
	$('<option />').attr('value', 'left').text('left').appendTo(queuelocation);
	$('<option />').attr('value', 'right').text('right').appendTo(queuelocation);
	$('<option />').attr('value', 'center').text('center').appendTo(queuelocation);
	queuelocation.val(USERCONFIG.queue);
	addOption('Queue location', queuelocation);

	queuesize = $('<select />').addClass('form-control');
	$('<option />').attr('value', 'wide').text('wide').appendTo(queuesize);
	$('<option />').attr('value', 'narrow').text('narrow').appendTo(queuesize);
	queuesize.val(USERCONFIG.qsize);
	addOption('Queue column size', queuesize);

	mainlocation = $('<select />').addClass('form-control');
	$('<option />').attr('value', 'top').text('above playlist').appendTo(mainlocation);
	$('<option />').attr('value', 'bottom').text('below playlist').appendTo(mainlocation);
	mainlocation.val(USERCONFIG.main);
	addOption('Player & chat', mainlocation);

	motdlocation = $('<select />').addClass('form-control');
	$('<option />').attr('value', 'top').text('channel top').appendTo(motdlocation);
	$('<option />').attr('value', 'bottom').text('channel bottom').appendTo(motdlocation);
	motdlocation.val(USERCONFIG.motd);
	addOption('MOTD & announcements', motdlocation);

	logoinsert = $('<select />').addClass('form-control');
	$('<option />').attr('value', 'no').text('no image').appendTo(logoinsert);
	$('<option />').attr('value', 'user').text('user image').appendTo(logoinsert);
	for (i in TopUserLogo) {
		$("<option />").attr('value', i).text(TopUserLogo[i][0]).appendTo(logoinsert);
	}
	logoinsert.val(USERCONFIG.logo);
	addOption('Top logo', logoinsert);

	userlogo = $('<input />').addClass('form-control').attr('type', 'text')
		.attr('placeholder', 'Image URL');
	userlogo.val('');
	addOption('User logo URL', userlogo);

	userlogoht = $('<input />').addClass('form-control').attr('type', 'text')
		.attr('placeholder', 'Image Height (in px)');
	userlogoht.val('');
	addOption('User logo height', userlogoht);

	if (USERCONFIG.logo != "user") {
		userlogo.parent().parent().hide();
		userlogoht.parent().parent().hide();
	} else {
		userlogo.val(USERCONFIG.logourl);
		userlogoht.val(USERCONFIG.logoht);
	}

	headermode = $('<select />').addClass('form-control')
	$('<option />').attr('value', 'fixed').text('fixed').appendTo(headermode);
	$('<option />').attr('value', 'detached').text('detached').appendTo(headermode);
	$('<option />').attr('value', 'mouseover').text('mouseover').appendTo(headermode);
	headermode.val(USERCONFIG.header);
	addOption('Header menu', headermode);

	customcss = $('<select />').addClass('form-control');
	$('<option />').attr('value', 'no').text('no').appendTo(customcss);
	$('<option />').attr('value', 'yes').text('yes').appendTo(customcss);
	customcss.val(USERCONFIG.css);
	addOption('Custom CSS', customcss);

	usercss = $('<textarea rows="8" />').addClass('form-control')
		.attr('placeholder', 'Insert CSS code');
	usercss.val(USERCONFIG.csscode);
	addOption('CSS code', usercss);

	if (USERCONFIG.css == "no") {
		usercss.parent().parent().hide();
	}

	submit = $('<button class="btn btn-default btn-success" />').text("Save changes").appendTo(footer);
	reset = $('<button class="btn btn-default pull-left" />').text('Default').appendTo(footer);
	column = $('<button class="btn btn-default pull-left" />').text('One column').appendTo(footer);

	logoinsert.on("change", function () {
		if (logoinsert.val() == "user") {
			userlogo.parent().parent().show();
			userlogoht.parent().parent().show();
			userlogo.val(USERCONFIG.logourl);
			userlogoht.val(USERCONFIG.logoht);
		} else {
			userlogo.parent().parent().hide();
			userlogoht.parent().parent().hide();
		}
	});

	customcss.on("change", function () {
		if (customcss.val() == "yes") {
			usercss.parent().parent().show();
		} else {
			usercss.parent().parent().hide();
		}
	});

	submit.on("click", function () {
		outer.modal('hide');

		USERCONFIG.player = playerlocation.val();
		setOpt(CHANNEL.name + "_player", playerlocation.val());

		USERCONFIG.userlist = userlistlocation.val();
		setOpt(CHANNEL.name + "_userlist", userlistlocation.val());

		USERCONFIG.queue = queuelocation.val();
		setOpt(CHANNEL.name + "_queue", queuelocation.val());

		USERCONFIG.qsize = queuesize.val();
		setOpt(CHANNEL.name + "_qsize", queuesize.val());

		USERCONFIG.main = mainlocation.val();
		setOpt(CHANNEL.name + "_main", mainlocation.val());

		USERCONFIG.motd = motdlocation.val();
		setOpt(CHANNEL.name + "_motd", motdlocation.val());

		if (logoinsert.val() == "user") {
			if (userlogo.val() == "") {
				logoinsert.val("no");
			} else if (userlogoht.val() == "") {
				userlogoht.val('200');
			} else {
				a = userlogoht.val() * 1;
				if (isNaN(a) || a < 1) {
					userlogoht.val('200');
				}
			}
			USERCONFIG.logourl = userlogo.val();
			USERCONFIG.logoht = userlogoht.val();
			setOpt(CHANNEL.name + "_logourl", userlogo.val());
			setOpt(CHANNEL.name + "_logoht", userlogoht.val());
		}

		USERCONFIG.logo = logoinsert.val();
		setOpt(CHANNEL.name + "_logo", logoinsert.val());

		USERCONFIG.header = headermode.val();
		setOpt(CHANNEL.name + "_header", headermode.val());

		if (customcss.val() == "yes") {
			USERCONFIG.csscode = usercss.val();
			setOpt(CHANNEL.name + "_csscode", usercss.val());
		}

		USERCONFIG.css = customcss.val();
		setOpt(CHANNEL.name + "_css", customcss.val());

		setLayout();
		scrollChat();
		scrollQueue();
	});

	reset.on("click", function () {
		outer.modal("hide");

		USERCONFIG.player = defplayer;
		setOpt(CHANNEL.name + "_player", defplayer);

		USERCONFIG.userlist = defuserlist;
		setOpt(CHANNEL.name + "_userlist", defuserlist);

		USERCONFIG.queue = defqueue;
		setOpt(CHANNEL.name + "_queue", defqueue);

		USERCONFIG.qsize = "wide";
		setOpt(CHANNEL.name + "_qsize", "wide");

		USERCONFIG.main = "top";
		setOpt(CHANNEL.name + "_main", "top");

		USERCONFIG.motd = "top";
		setOpt(CHANNEL.name + "_motd", "top");

		USERCONFIG.logo = "no";
		setOpt(CHANNEL.name + "_logo", "no");

		USERCONFIG.header = "detached";
		setOpt(CHANNEL.name + "_header", "detached");

		USERCONFIG.css = "no";
		setOpt(CHANNEL.name + "_css", "no");

		setLayout();
		scrollChat();
		scrollQueue();
	});

	column.on("click", function () {
		outer.modal("hide");

		USERCONFIG.player = "center";
		setOpt(CHANNEL.name + "_player", "center");

		USERCONFIG.userlist = "left";
		setOpt(CHANNEL.name + "_userlist", "left");

		USERCONFIG.queue = "center";
		setOpt(CHANNEL.name + "_queue", "center");

		USERCONFIG.main = "top";
		setOpt(CHANNEL.name + "_main", "top");

		USERCONFIG.motd = "bottom";
		setOpt(CHANNEL.name + "_motd", "bottom");

		USERCONFIG.logo = "no";
		setOpt(CHANNEL.name + "_logo", "no");

		USERCONFIG.header = "detached";
		setOpt(CHANNEL.name + "_header", "detached");

		setLayout();
		scrollChat();
		scrollQueue();
	});
}

// toggle fluid layout

function toggleFluidLayout() {
	if (FLUID) {
		$("body").removeClass('fullscreen');
		$(".container-fluid").removeClass('container-fluid').addClass('container');
		$("#fontspanel, #emotespanel").removeClass('fluidpanel');
	} else {
		$("body").addClass('fullscreen');
		$(".container").removeClass('container').addClass('container-fluid');
		$("footer .container-fluid").removeClass('container-fluid').addClass('container');
		$("#fontspanel, #emotespanel").addClass('fluidpanel');
	}
	UI_DisplayModeSel == "1" ? setMode(modesel.val()) : '';
	FLUID = !FLUID;
	setOpt(CHANNEL.name + "_fluid", FLUID);
	scrollChat();
	resizeStuff();
}

// toggle minimized layout

function toggleMinLayout() {
	if (!MINIMIZED) {
		$("#rightpane-inner").hide();
		$("#azukirow, #motdrow, #announcements, #leftpane-inner, footer").hide();
		pinupbtn.hide();
		layoutbtn.removeClass('btn-success').addClass('btn-danger').html('Maximize');
		$("#plcontrol button, #db-btn, #gallery-btn, #newpollbtn").attr('disabled', 'disabled');
		MINIMIZED = true;
		// patch for 15px more space on the top
		$("#mainpage").css('margin-top', $("#mainpage").css('margin-top').replace('px', '') * 1 + 15 + 'px');
	}
}

// pin-up playlist to player

function pinUp() {
	if (USERCONFIG.player == "left") {
		$("#videowrap").after($("#rightpane").detach());
	} else if (USERCONFIG.player == "right") {
		$("#videowrap").before($("#rightpane").detach());
	}
	if (USERCONFIG.queue == "left") {
		$("#leftpane").before($("#chatwrap").detach());
	} else if (USERCONFIG.queue == "right") {
		$("#leftpane").after($("#chatwrap").detach());
	}
	$("#rightpane").removeClass().addClass('col-lg-5 col-md-5');
	if (USERCONFIG.qsize == "wide") {
		$("#chatwrap").removeClass().addClass('col-lg-7 col-md-7');
	} else {
		$("#chatwrap").removeClass().addClass('col-lg-5 col-md-5');
	}
	$("#pinup-btn").attr('title', 'Unpin playlist');
	$("#config-btn, #configbtnwrap br").hide();
	$("#min-layout").parent().hide();
	$("#mode-sel").find("option[value='chMode'], option[value='sMode']").hide();
	PINNED = true;
}

// un-pin playlist from player

function unPin() {
	if (USERCONFIG.queue == "left") {
		$("#leftpane").before($("#rightpane").detach());
	} else if (USERCONFIG.queue == "right") {
		$("#leftpane").after($("#rightpane").detach());
	}
	if (USERCONFIG.player == "left") {
		$("#videowrap").after($("#chatwrap").detach());
	} else if (USERCONFIG.player == "right") {
		$("#videowrap").before($("#chatwrap").detach());
	}
	$("#chatwrap").removeClass().addClass('col-lg-5 col-md-5');
	if (USERCONFIG.qsize == "wide") {
		$("#rightpane").removeClass().addClass('col-lg-7 col-md-7');
	} else {
		$("#rightpane").removeClass().addClass('col-lg-5 col-md-5');
	}
	$("#pinup-btn").attr('title', 'Pinup playlist to player');
	$("#config-btn, #configbtnwrap br").show();
	$("#min-layout").parent().show();
	$("#mode-sel").find("option[value='chMode'], option[value='sMode']").show();
	PINNED = false;
}

// show contributors list

function showContributors() {
	createModal("Contributors List");

	len = $("#queue li").length + 1;
	var list = [];
	for (i = 1; i < len; i++) {
		item = $("#queue li:nth-child(" + i + ")").attr('title');
		user = item.split("by: ")[1];
		user in list ? list[user]++ : list[user] = 1;
	}
	var list2 = [];
	for (key in list) {
		list2.push([key, list[key]]);
	}
	list2.sort(function (a, b) { return a[1] - b[1] });
	list2.reverse();
	var list3 = [];
	for (i in list2) {
		list3.push((i * 1 + 1) + ". " + list2[i].join(": "));
	}
	html = '<strong>Number of added playlist items:</strong>'
		+ '<br /><br />' + list3.join("<br />");
	body.append(html);
}

// expand/collapse queue

function expandQueue() {
	if (!FULLPL) {
		$("#queue").css('max-height', '100000px');
		expandbtn.attr('title', 'Collapse playlist');
		FULLPL = true;
	} else {
		$("#queue").css('max-height', '500px');
		expandbtn.attr('title', 'Expand playlist');
		FULLPL = false;
		scrollQueue();
	}
}

// get playlist URLS

function getPlaylistURLs() {
	createModal('Playlist URLs');

	data = $('<textarea rows="10" class="form-control" />').val(formatRawList()).appendTo(body);
	rlist = $('<button class="btn btn-default pull-left">Raw Links</button>').appendTo(footer);
	tlist = $('<button class="btn btn-default pull-left">Plain Text</button>').appendTo(footer);
	hlist = $('<button class="btn btn-default pull-left">HTML Code</button>').appendTo(footer);
	olist = $('<button class="btn btn-default pull-left">Ordered List</button>').appendTo(footer);
	dlist = $('<button class="btn btn-default pull-left">Database Format</button>').appendTo(footer);

	rlist.on("click", function () {
		data.val(formatRawList());
	});
	tlist.on("click", function () {
		data.val(formatPlainTextList());
	});
	hlist.on("click", function () {
		data.val('<ol>\n' + formatHTMLList() + '\n</ol>');
	});
	olist.on("click", function () {
		data.val(formatOrderedList());
	});
	dlist.on("click", function () {
		data.val(formatDBList());
	});
}

// add random item from channel database

function addRandomItem() {
	time = (new Date()).getTime();
	if ((time - LASTADD) < 120000) {
		alert('You can add random video every 2 minutes.');
	} else {
		var link = "";
		while (link == "") {
			rnd = Math.round(Math.random() * (ChannelDatabase.length - 1));
			link = ChannelDatabase[rnd][0];
		}
		addToPlaylist(link, "end");
		LASTADD = time;
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- User Interface ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// adding important hidden reference row

zerorow = $('<div id="zerorow" class="row" />').insertBefore("#motdrow");

// adding top logo row

azukirow = $('<div id="azukirow" class="row" />').insertBefore(zerorow);

// adding video wrap if user has enabled "Hide Player" option

if (USEROPTS.hidevid) {
	$("#chatwrap, #chatline").removeClass('col-lg-12 col-md-12').addClass('col-lg-5 col-md-5');
	videowrap = $('<div id="videowrap" class="col-lg-7 col-md-7" />')
		.insertBefore("#chatwrap");
	currenttitle = $('<p id="currenttitle" />')
		.html('Currently Playing: ' + $(".queue_active a").html())
		.appendTo(videowrap);
	ytapiplayer = $('<div id="ytapiplayer" />')
		.appendTo(videowrap);

	html = 'According to your User Preferences, video player is hidden. '
		+ 'Click a button below to continue hiding player. '
		+ 'Click default "Reload" icon to show player in this session. '
		+ 'If you\'ll stay in "Chat Only" mode, functionality of this channel will be limited.<br /><br />';
	makeAlert("No Player", html).appendTo(ytapiplayer);

	staybtn = $('<button id="stay-btn" class="btn btn-default btn-sm">Stay In "Chat Only" Mode</button>')
		.appendTo("#ytapiplayer .alert")
		.on("click", function () {
			videowrap.remove();
			$("#chatwrap").removeClass().addClass('col-lg-12 col-md-12');
			$("#configform, #modeform, #pinup-btn").hide();
			fitChat("auto");
		});
}

// changing initial layout to compact for new users

$("body").addClass('fluid');
compactLayout();
setLayout();
scrollChat();
scrollQueue();

// adding "id" attributes

$(".navbar-collapse .navbar-nav").children().first().attr('id', 'home-link');
$("#home-link").next().attr('id', 'account-link');
$("#account-link").next().attr('id', 'options-link');
$("#options-link").next().attr('id', 'channelset-link');
$("#channelset-link").next().attr('id', 'layout-link');

// changing location of some layout elements

$("#main").prepend($("#drinkbar").detach());
$("#videowrap").append('<div id="playercontrols" class="btn-group" />');
$("#playercontrols").append($("#mediarefresh").detach());
$("#rightpane").prepend($("#videocontrols").detach());
$("#rightpane").prepend($("#plcontrol").detach());
$("#leftpane").prepend($("#newpollbtn").detach());
$("#plcontrol").prepend($("#showmediaurl").detach());

// header and footer links open in a new tab

$("#home-link a, #account-link ul a, .credit a").attr('target', '_blank');

// adding default CyTube Plus CSS if not set

if ($("#chanexternalcss").length < 1) {
	url = 'https://dl.dropboxusercontent.com/s/hbhlrmys5piztgo/main.css';
	$("head").append('<link id="chanexternalcss" href="' + url + '" rel="stylesheet" type="text/css">');
}

setUserCSS();

// adding favicon

if (UI_Favicon == "1" && Favicon_URL != "") {
	$(document).ready(function () {
		$('<link id="chanfavicon" href="' + Favicon_URL + '" type="image/x-icon" rel="shortcut icon" />')
			.appendTo("head");
	});
}

// changing carets to unicode characters

$("nav .caret, #cs-edit-dd-toggle .caret").removeClass('caret').html(' ▾');

// adding important messages to "Options"

text1 = 'Please use "Personal theme" selector in the room configuration box to select a theme for this channel. ';
text2 = 'Please use "Click to configure" button in the room configuration box to configure this channel. ';
text3 = 'If you want to make global changes, please go to another channel, or make changes before accepting '
	+ 'special features.';
$("#us-theme").hide();
$("#us-theme").parent().append('<p class="text-danger">' + text1 + '' + text3 + '</p>');
$("#us-layout").hide();
$("#us-layout").parent().append('<p class="text-danger">' + text2 + '' + text3 + '</p>');

// creating channel settings filters preparation button

csfontsimport = $('<button id="cs-fonts-import" class="btn btn-default pull-right">Prepare fonts filters</button>')
	.insertAfter("#cs-chatfilters-import")
	.on("click", function () {
		prepareFilters();
	});

// fixing layout after saving global user options

$("#useroptions .modal-footer button:nth-child(1)").on("click", function () {
	USEROPTS.hidevid ? location.reload() : ''
	html = 'All changes are applying globally, but this channel uses its own layout. '
		+ 'Please use "Click to configure" button to configure this channel layout.<br />'
		+ 'Reload player if the wrong title is displaying. '
		+ 'In HD layout or if player is removed, you may not see some elements due to CyTube API. '
		+ 'If so, reload channel.';
	makeAlert("You have changed global User Preferences", html, "alert-info").appendTo("#announcements");
	compactLayout();
	setLayout();
	FLUID ? fluidLayout() : '';
	setUserCSS();
	scrollChat();
	scrollQueue();
});

// changing channel name

if (UI_ChannelName == "1" && ChannelName_Caption != "") {
	$(".navbar-brand").html(ChannelName_Caption);
}

// adding channel small logo

if (UI_MiniLogo == "1" && MiniLogo_URL != "") {
	$('<img id="chanavatar" src="' + MiniLogo_URL + '" />').prependTo(".navbar-brand");
}

// adding header dropdown menu

if (UI_HeaderDropMenu == "1") {
	HeaderDropMenu_Title == "" ? HeaderDropMenu_Title = 'Menu' : '';
	headerdrop = $('<li id="headerdrop" class="dropdown" />')
		.insertAfter("#home-link");
	$('<a class="dropdown-toggle" data-toggle="dropdown" href="#" />')
		.html(HeaderDropMenu_Title + ' ▾')
		.appendTo(headerdrop);
	headermenu = $('<ul id="headermenu" class="dropdown-menu" />')
		.appendTo(headerdrop);

	HeaderDropMenu_Array.length < 1 ? HeaderDropMenu_Array = [['no menu available', '']] : '';
	for (i in HeaderDropMenu_Array) {
		title = HeaderDropMenu_Array[i][0];
		link = HeaderDropMenu_Array[i][1];
		if (link == "") {
			headermenu.append('<li class="dropdown-header">' + title + '</li>');
		} else {
			$('<li class="header-drop-link" />')
				.append('<a href="' + link + '" target="_blank">' + title + '</a>')
				.appendTo(headermenu);
		}
	}
}

// optional removing of "Layout" menu from header

if (UI_RemoveLayoutMenu == "1") {
	$("#layout-link").remove();
} else {
	$("#layout-link li:nth-child(2) a").on("click", function () {
		$("#configform, #modeform, #pinup-btn").hide();
		fitChat("auto");
	});
}

// changing some button captions or welcome message

if (UI_CustomCaptions == "1") {
	if (CustomCaptions_Array['add'] != "") {
		$("#showmediaurl").html(CustomCaptions_Array['add']);
	}
	if (CustomCaptions_Array['refresh'] != "") {
		$("#mediarefresh").html(CustomCaptions_Array['refresh']);
	}
	if (CustomCaptions_Array['voteskip'] != "") {
		socket.on("voteskip", changeSkipText);
		changeSkipText();
	}
	if (CustomCaptions_Array['welcome'] != "") {
		socket.on("login", changeWelcomeText);
		changeWelcomeText();
	}
}

// deleting previous MOTD

UI_MOTDDelete == "1" ? $("#motd").html('') : '';

// setting MOTD

if (UI_MOTDAutoLogo == "1" || UI_RulesBtn == "1" || (UI_MOTDTabs == "1" && MOTDTabs_Array.length > 0)) {
	socket.on("setMotd", changeMOTD);
	changeMOTD();
}

// setting MOTD logo

if (UI_MOTDAutoLogo == "1") {
	if (MOTDAutoLogo_Mode != "1" && MOTDAutoLogo_Mode != "2" && MOTDAutoLogo_Mode != "3" && MOTDAutoLogo_Mode != "7") {
		MOTDAutoLogo_Mode = '1';
	}
	if (MOTDAutoLogo_Mode == "3") {
		if (typeof MOTDAutoLogo_Interval !== "number" || MOTDAutoLogo_Interval < 1) {
			MOTDAutoLogo_Interval = 20;
		}
		setInterval(function () {
			nr = Math.floor(Math.random() * MOTDAutoLogo_Array.length);
			$("#motdlogo").attr('src', MOTDAutoLogo_Array[nr]);
		}, MOTDAutoLogo_Interval * 1000);
	}
}

// adding attention bar

if (UI_AttentionBar == "1" && AttentionBar_URL != "") {
	attbarwrap = $('<div id="attbarrow-outer" class="col-md-12" />').prependTo("#announcements");
	attbar = $('<iframe id="attbar" width="100%" frameborder="0" scrolling="no" />')
		.attr('src', AttentionBar_URL)
		.appendTo(attbarwrap);
}

// adding custom channel announcement

if (UI_ChannelAnnouncement == "1") {
	ChannelAnnouncement_Title == "" ? ChannelAnnouncement_Title = 'Administration Message' : '';
	ChannelAnnouncement_HTML == "" ? ChannelAnnouncement_HTML = '<i>no messages</i>' : '';
	makeAlert(ChannelAnnouncement_Title, ChannelAnnouncement_HTML).appendTo("#announcements");
}

// adding full-width title bar and progress bar

if (UI_FullTitleBar == "1") {
	titlerow = $('<div id="titlerow" class="row" />').insertBefore("#main");
	titlerowouter = $('<div id="titlerow-outer" class="col-md-12" />')
		.html($("#currenttitle").detach())
		.appendTo(titlerow);
	mediainfo = $('<p id="mediainfo" />').html('Nothing playing').prependTo("#videowrap");

	UI_ProgressBar == "1" ? setInterval(function () { progressBar() }, 2000) : '';

	socket.on("changeMedia", showInfo);
	showInfo();

	if (UI_TitleIcon == "1" && TitleIcon_URL != "") {
		$("#titlerow #currenttitle").css({
			'background-image': 'url("' + TitleIcon_URL + '")',
			'background-repeat': 'no-repeat',
			'background-position': 'left center'
		});
	}
}

// changing title bar description

if (UI_TitleBarDescription == "1") {
	socket.on("changeMedia", changeTitle);
	changeTitle();
}

// customizing chat notifications sound

if (UI_CustomPingSound == "1" && CustomPingSound_URL != "") {
	CHATSOUND = new Audio(CustomPingSound_URL);
	CHATSOUND.volume = 0.6;
}

// additional chat functions

chatflair = $('<span id="chatflair" class="label label-success pull-right pointer">Func</span>')
	.insertAfter("#adminflair")
	.on("click", function () {
		if (!CHATFUNC) {
			$("#sounds-dropdown").remove();
			SOUNDSPANEL = false;
			showChatFunctions();
			CHATFUNC = true;
		} else {
			$("#chatfunc-dropdown").remove();
			CHATFUNC = false;
		}
	});
socket.on("rank", toggleChatFunctions);
toggleChatFunctions();

// optional chat joining message

if (UI_JoinText == "1") {
	JoinText_Message == "" ? JoinText_Message = "joined" : '';
	socket.emit("chatMsg", { msg: '/me ' + JoinText_Message });
}

// optional chat leaving message

if (UI_LeaveText == "1") {
	LeaveText_Message == "" ? LeaveText_Message = "left" : '';
	$(window).unload(function () {
		socket.emit("chatMsg", { msg: '/me ' + LeaveText_Message });
	});
}

// adding chat buttons wrapping

if (UI_FontsBtn == "1" || UI_EmotesBtn == "1" || UI_CommandsBtn == "1" || UI_SoundFilters == "1" || UI_ModPanel == "1" || UI_ChatSpeak == "1") {
	chatcontrols = $('<div id="chatcontrols" class="btn-group" />').appendTo("#chatwrap");
}

// adding chat fonts button

if (UI_FontsBtn == "1") {
	fontsbtn = $('<button id="fonts-btn" class="btn btn-sm btn-default" title="Display fonts panel" />')
		.html('<i class="glyphicon glyphicon-font"></i>')
		.appendTo(chatcontrols)
		.on("click", function () {
			toggleDiv(fontspanel);
		});
}

// adding chat emotes button

if (UI_EmotesBtn == "1") {
	emotesbtn = $('<button id="emotes-btn" class="btn btn-sm btn-default" title="Display emotes panel" />')
		.html('<i class="glyphicon glyphicon-picture"></i>')
		.appendTo(chatcontrols)
		.on("click", function () {
			toggleDiv(emotespanel);
			(UI_ChannelCache != "1" && !EMOTES) ? showEmotes() : '';
		});
}

// adding chat commands button

if (UI_CommandsBtn == "1" && (UI_UserCommands == "1" || UI_FontsBtn == "1" || UI_ChatSpeak == "1")) {
	chathelpbtn = $('<button id="chathelp-btn" class="btn btn-sm btn-default" />')
		.text('Chat Commands')
		.appendTo(chatcontrols)
		.on("click", function () {
			showChatHelp();
		});
}

// adding chat sounds toggle button and control panel

if (UI_SoundFilters == "1" || UI_ChatSpeak == "1") {
	voicesbtn = $('<button id="voices-btn" class="btn btn-sm btn-default" title="Mute chat voices" />')
		.html('<i class="glyphicon glyphicon-volume-down"></i>')
		.appendTo(chatcontrols)
		.on("click", function () {
			if (!SOUNDSPANEL) {
				$("#chatfunc-dropdown").remove();
				CHATFUNC = false;
				showSoundsPanel();
				SOUNDSPANEL = true;
			} else {
				$("#sounds-dropdown").remove();
				SOUNDSPANEL = false;
			}
		});
	VOICES = true;
}

// adding moderators panel button

if (UI_ModPanel == "1") {
	modbtn = $('<button id="mod-btn" class="btn btn-sm btn-default" title="Show moderators panel" />')
		.html('<i class="glyphicon glyphicon-tasks"></i>')
		.appendTo(chatcontrols)
		.on("click", function () {
			showModPanel();
		});

	socket.on("rank", toggleModPanel);
	toggleModPanel();
}

// adding player control buttons

if (UI_PlayerOptions == "1") {
	if (UI_FullTitleBar == "1") {
		switchdescrbtn = $('<button id="switchdescr-btn" class="btn btn-sm btn-default" />')
			.attr('title', 'Switch description')
			.html('<span class="glyphicon glyphicon-info-sign"></span>')
			.appendTo("#playercontrols")
			.on("click", function () {
				DEFDESCR = !DEFDESCR;
				showInfo();
			});
	}

	hideplayerbtn = $('<button id="hideplayer-btn" class="btn btn-sm btn-default" title="Hide player" />')
		.html('<span class="glyphicon glyphicon-ban-circle"></span>')
		.appendTo("#playercontrols")
		.on("click", function () {
			$(this).hasClass('btn-danger') ? showPlayer() : coverPlayer();
		});

	muteplayerbtn = $('<button id="muteplayer-btn" class="btn btn-sm btn-default" title="Mute player" />')
		.append('<span class="glyphicon glyphicon-volume-off" />')
		.appendTo("#playercontrols")
		.on("click", function () {
			if ($(this).hasClass('btn-danger')) {
				$(this).removeClass('btn-danger').attr('title', 'Mute player');
				unmutePlayer();
			} else {
				$(this).addClass('btn-danger').attr('title', 'Unmute player');
				mutePlayer();
			}
		});

	socket.on("changeMedia", toggleMuteBtn);
	toggleMuteBtn();

	savemediabtn = $('<button id="savemedia-btn" class="btn btn-sm btn-default" title="Download" />')
		.html('<span class="glyphicon glyphicon-floppy-save"></span>')
		.appendTo("#playercontrols")
		.on("click", function () {
			downloadCurrentItem();
		});
}

// adding player transformation buttons

if (UI_TransformationBtns == "1") {
	transcontrols = $('<div id="transcontrols" class="btn-group pull-right" />').appendTo("#videowrap");

	mirrorxbtn = $('<button id="mirrorx-btn" class="btn btn-sm btn-default" title="Mirror X player" />')
		.html('<span class="glyphicon glyphicon-resize-horizontal"></span>')
		.appendTo(transcontrols)
		.on("click", function () {
			if ($("#ytapiplayer").hasClass('mX')) {
				$("#ytapiplayer").removeClass('mX');
			} else {
				$("#ytapiplayer").addClass('mX');
			}
		});

	mirrorybtn = $('<button id="mirrory-btn" class="btn btn-sm btn-default" title="Mirror Y player" />')
		.html('<span class="glyphicon glyphicon-resize-vertical"></span>')
		.appendTo(transcontrols)
		.on("click", function () {
			if ($("#ytapiplayer").hasClass('mY')) {
				$("#ytapiplayer").removeClass('mY');
			} else {
				$("#ytapiplayer").addClass('mY');
			}
		});

	rotatebtn = $('<button id="rotate-btn" class="btn btn-sm btn-default" title="Rotate player" />')
		.html('<span class="glyphicon glyphicon-repeat"></span>')
		.appendTo(transcontrols)
		.on("click", function () {
			if ($("#ytapiplayer").hasClass('rotate')) {
				$("#ytapiplayer").removeClass('rotate');
			} else {
				$("#ytapiplayer").addClass('rotate');
			}
		});

	verticalbtn = $('<button id="vertical-btn" class="btn btn-sm btn-default" title="Vertical player" />')
		.html('<span class="glyphicon glyphicon-arrow-up"></span>')
		.appendTo(transcontrols)
		.on("click", function () {
			if ($("#ytapiplayer").hasClass('vertical')) {
				$("#ytapiplayer").removeClass('vertical');
				this.attr('title', 'Vertical player');
			} else {
				$("#ytapiplayer").addClass('vertical');
				this.attr('title', 'Horizontal player');
			}
		});
}

// creating fonts and emotes main row

if (UI_FontsBtn == "1" || UI_EmotesBtn == "1") {
	chatpanel = $('<div id="chatpanel" class="row" />').insertBefore("#playlistrow");
}

// adding fonts panel

if (UI_FontsBtn == "1") {
	fontspanel = $('<div id="fontspanel" style="display:none" />').appendTo(chatpanel);
	fontsbtnwrap = $('<div id="fontsbtnwrap" />').appendTo(fontspanel);

	FontsArray = [
		['background:white', 'white', '■'],
		['background:gold', 'yellow', '■'],
		['background:orange', 'orange', '■'],
		['background:#FFBBFF', 'pink', '■'],
		['background:red', 'red', '■'],
		['background:limegreen', 'lime', '■'],
		['background:green', 'green', '■'],
		['background:aqua', 'aqua', '■'],
		['background:blue', 'blue', '■'],
		['background:#660099', 'violet', '■'],
		['background:#660000', 'brown', '■'],
		['background:silver', 'silver', '■'],
		['background:black', 'black', '■'],
		['background:black; color:white', 'bw', 'a'],
		['background:white; font-weight:bold; color:black', 'b', 'B'],
		['background:white; font-style:italic; color:black', 'i', 'I'],
		['background:white; text-decoration:underline; color:black', 'u', 'U'],
		['background:white; text-decoration:line-through; color:black', 's', 's'],
		['background:gold; color:red', 'd', 'D'],
		['background:black; color:gold; font-family:impact, sans-serif', 'f', 'F'],
		['background:black; color:white', 'sp', 'sp'],
		['background:white; color:black; border:solid 2px red', '\\/', '\[\/\]'],
	];

	for (i in FontsArray) {
		$('<button id="cbtn' + i + '" onclick="insertText(\'[' + FontsArray[i][1] + ']\')" />')
			.addClass('btn btn-default').attr('style', FontsArray[i][0]).text(FontsArray[i][2])
			.appendTo(fontsbtnwrap);
		i % 13 == 12 ? fontsbtnwrap.append('<br />') : false;
	}

	if (UI_UnicodeChars == "1" && UnicodeChars_Array.length > 0) {
		unibtnwrap = $('<div id="unibtnwrap" />').appendTo(fontspanel);
		for (i in UnicodeChars_Array) {
			btn = $('<button onclick="insertText(\'' + UnicodeChars_Array[i] + '\')" />')
				.addClass('btn btn-default').text(UnicodeChars_Array[i])
				.appendTo(unibtnwrap);
		}
	}
}

// adding emotes panel

if (UI_EmotesBtn == "1") {
	emotespanel = $('<div id="emotespanel" style="display:none" />').appendTo(chatpanel);
	UI_ChannelCache == "1" ? showEmotes() : '';
}

// adding background image to empty playlistrow corner

if (UI_EmptyCornerBackground == "1" && EmptyCornerBackground.length > 0) {
	rnd = Math.round(Math.random() * (EmptyCornerBackground.length - 1));
	$("#playlistrow").css({
		'background-image': 'url("' + EmptyCornerBackground[rnd] + '")', 'background-repeat': 'no-repeat'
	});
}


// adding layout configuration panel button

layoutbtn = $('<button id="layout-btn" class="btn btn-sm btn-default btn-success pull-right" />')
	.html('<span class="glyphicon glyphicon-cog"></span> Layout')
	.prependTo("#leftpane")
	.on("click", function () {
		toggleConfigPanel();
	});
$("#playlistmanagerwrap").show();

// adding media database and gallery wrap

if (UI_ChannelDatabase == "1" || UI_ChannelGalleries == "1") {
	leftpanecontrols = $('<div id="leftpanecontrols" class="btn-group pull-left" />').insertAfter(layoutbtn);
}

// adding media database button

if (UI_ChannelDatabase == "1") {
	dbbtn = $('<button id="db-btn" class="btn btn-sm btn-default">Channel Database</button>')
		.appendTo(leftpanecontrols)
		.on("click", function () {
			toggleDiv(dbwrap);
			!CHANDB ? createDatabase() : '';
		});
}

// adding galleries button

if (UI_ChannelGalleries == "1") {
	gallerybtn = $('<button id="gallery-btn" class="btn btn-sm btn-default">Channel Galleries</button>')
		.appendTo(leftpanecontrols)
		.on("click", function () {
			toggleDiv(gallerywrap);
			!GALLERY ? createGallery() : '';

			// patch: strange imgur behaviour (not loading first cached gallery)
			if (!GALLVIS && UI_ChannelCache == "1" && gallerywrap.css('display') != "none") {
				iframe = document.getElementById("galleryFrame");
				if (iframe.src.indexOf('imgur.com') > -1) {
					iframe.src = iframe.src;
				}
			}
			GALLVIS = true;
		});
}

// adding layout configuration well

configwrap = $('<div id="configwrap" class="col-lg-12 col-md-12" />').appendTo("#leftpane-inner");
configwell = $('<div id="config-well" class="well form-horizontal" />').appendTo(configwrap);

if (!LAYOUTBOX) {
	toggleDiv(configwrap);
	layoutbtn.removeClass('btn-success');
}

// adding layout configuration form

configform = $('<div id="configform" class="form-group" />').appendTo(configwell);
$('<div class="col-lg-5 col-md-5">Global layout</div>').appendTo(configform);
configbtnwrap = $('<div id="configbtnwrap" class="col-lg-7 col-md-7" />').appendTo(configform);

configbtn = $('<button id="config-btn" class="btn btn-default">Click to configure</button>')
	.appendTo(configbtnwrap)
	.on("click", function () {
		showConfig();
	});

configbtnwrap.append('<br />');

fluidlayout = $('<label class="checkbox-inline" />').appendTo(configbtnwrap);
cbox = $('<input type="checkbox" id="fluid-layout" value="no" />')
	.appendTo(fluidlayout)
	.on("click", function () {
		toggleFluidLayout();
	});
cbox.after(' Fluid');

minlayout = $('<label class="checkbox-inline" />').appendTo(configbtnwrap);
cbox = $('<input type="checkbox" id="min-layout" value="no" />')
	.appendTo(minlayout)
	.on("click", function () {
		toggleMinLayout();
	});
cbox.after(' Minimized');

// adding selector with player display modes

if (UI_DisplayModeSel == "1") {
	modeform = $('<div id="modeform" class="form-group" />').appendTo(configwell);
	$('<div class="col-lg-5 col-md-5">Display mode</div>').appendTo(modeform);
	modewrap = $('<div id="modewrap" class="col-lg-7 col-md-7" />').appendTo(modeform);

	modesel = $('<select id="mode-sel" class="form-control" />')
		.append('<option value="syMode">synchtube mode</option>')
		.append('<option value="kMode">cinema mode</option>')
		.append('<option value="chMode">chatroom mode</option>')
		.append('<option value="sMode">silent mode</option>')
		.append('<option value="rMode">radio mode</option>')
		.appendTo(modewrap)
		.on("change", function () {
			$("#config-btn, #configbtnwrap br").hide();
			$("#min-layout").parent().hide();
			$("#sounds-dropdown, #chatfunc-dropdown").remove();
			SOUNDSPANEL = false;
			CHATFUNC = false;
			PLAYER.type == "jw" ? refreshPlayer() : '';
			setMode($(this).val());
			scrollQueue();
			scrollChat();
			showPlayer();
		});

	socket.on("changeMedia", setModeAfterVideoChange);
}

// adding selector with channel themes

themeform = $('<div id="themeform" class="form-group" />').appendTo(configwell);
$('<div class="col-lg-5 col-md-5">Personal theme</div>').appendTo(themeform);
themewrap = $('<div id="themewrap" class="col-lg-7 col-md-7" />').appendTo(themeform);

themesel = $('<select id="theme-sel" class="form-control" />')
	.append('<option value="" class="theme-header" disabled>default themes</option>')
	.append('<option value="/css/themes/light.css"># Light</option>')
	.append('<option value="/css/themes/bootstrap-theme.min.css"># Bootstrap</option>')
	.append('<option value="/css/themes/slate.css"># Slate</option>')
	.append('<option value="/css/themes/cyborg.css"># Cyborg</option>')
	.appendTo(themewrap)
	.on("change", function () {
		$("#sounds-dropdown, #chatfunc-dropdown").remove();
		$("#playlistmanagerwrap").show();
		SOUNDSPANEL = false;
		CHATFUNC = false;
		USERTHEME = $(this).val();
		setUserCSS();
		setOpt(CHANNEL.name + "_theme", USERTHEME);
	});

if (ThemesCSS.length > 0) {
	themesel.append('<option value="" class="theme-header" disabled>additional themes</option>');
	for (i in ThemesCSS) {
		themesel.append('<option value="' + ThemesCSS[i][1] + '">' + ThemesCSS[i][0] + '</option>');
	}
}

if (UI_ChannelTheme == "1" && ChannelThemeURL != "") {
	themesel.prepend('<option value="' + ChannelThemeURL + '"># Channel Theme</option>')
		.prepend('<option value="" class="theme-header" disabled>main theme</option>');
}

themesel.val(USERTHEME);

// adding temporary hiding options

hideform = $('<div id="hideform" class="form-group" />').appendTo(configwell);
$('<div class="col-lg-5 col-md-5 conf-cap">Temporary hide</div>').appendTo(hideform);
hidewrap = $('<div id="hidewrap" class="col-lg-7 col-md-7" />').appendTo(hideform);

hidemotd = $('<label class="checkbox-inline" />').appendTo(hidewrap);
cbox = $('<input type="checkbox" id="hide-motd" value="no" >')
	.appendTo(hidemotd)
	.on("click", function () {
		toggleDiv("#motdrow");
	});
cbox.after(' MOTD');

hideann = $('<label class="checkbox-inline" />').appendTo(hidewrap);
cbox = $('<input type="checkbox" id="hide-ann" value="no" />')
	.appendTo(hideann)
	.on("click", function () {
		toggleDiv("#announcements");
	});
cbox.after(' Announcements');

hidetitle = $('<label class="checkbox-inline" />').appendTo(hidewrap);
cbox = $('<input type="checkbox" id="hide-title" value="no" />')
	.appendTo(hidetitle)
	.on("click", function () {
		toggleDiv("#titlerow");
		toggleDiv("#currenttitle");
	});
cbox.after(' Title');

hidepl = $('<label class="checkbox-inline" />').appendTo(hidewrap);
cbox = $('<input type="checkbox" id="hide-pl" value="no" />')
	.appendTo(hidepl)
	.on("click", function () {
		toggleDiv("#queue");
		toggleDiv("#plmeta");
	});
cbox.after(' Playlist');

hidehf = $('<label class="checkbox-inline" />').appendTo(hidewrap);
cbox = $('<input type="checkbox" id="hide-hf" value="no" />')
	.appendTo(hidehf)
	.on("click", function () {
		$("nav").css('display') != "none" ? headerMode("fixed") : headerMode(USERCONFIG.header);
		toggleDiv("nav");
		toggleDiv("footer");
	});
cbox.after(' H&F');

// adding embedding options

if (UI_EmbeddingMedia == "1" && (EmbeddingMedia_Images != "" || EmbeddingMedia_Videos != "")) {
	embedform = $('<div id="embedform" class="form-group" />').appendTo(configwell);
	$('<div class="col-lg-5 col-md-5 conf-cap">Embeds <span id="embed-help">[?]</span></div>')
		.appendTo(embedform);
	embedwrap = $('<div id="embedwrap" class="col-lg-7 col-md-7" />').appendTo(embedform);

	$("#embed-help").on("click", function () {
		txt = 'This option lets you see images or videos directly on the chat, instead of links.\n'
			+ 'Click on image or double click on video to open in the new tab.\n'
			+ 'All videos are muted by default, if autoplay - click to unmute, else click to play.\n\n'
			+ 'This channel supports following types of links (specified as CSS codes):\n'
			+ '■ Images - ';
		(EmbeddingMedia_Images != "") ? txt += EmbeddingMedia_Images : 'none';
		txt += '\n■ Videos - ';
		(EmbeddingMedia_Videos != "") ? txt += EmbeddingMedia_Videos : 'none';
		alert(txt);
	});

	if (EmbeddingMedia_Images != "") {
		embedimg = $('<label class="checkbox-inline" />').appendTo(embedwrap);
		cbox = $('<input type="checkbox" id="embed-img" checked>')
			.appendTo(embedimg)
			.on("click", function () {
				EMBEDIMG = !EMBEDIMG;
				setOpt(CHANNEL.name + "_embedimg", EMBEDIMG);
			});
		cbox.after(' img');
		!EMBEDIMG ? cbox.removeAttr('checked') : '';
	}

	if (EmbeddingMedia_Videos != "") {
		embedvid = $('<label class="checkbox-inline" />').appendTo(embedwrap);
		cbox = $('<input type="checkbox" id="embed-webm" checked>')
			.appendTo(embedvid)
			.on("click", function () {
				EMBEDVID = !EMBEDVID;
				setOpt(CHANNEL.name + "_embedvid", EMBEDVID);
				EMBEDVID ? autovid.show() : autovid.hide();
			});
		cbox.after(' video');
		!EMBEDVID ? cbox.removeAttr('checked') : '';

		autovid = $('<label class="checkbox-inline" />').appendTo(embedwrap);
		cbox = $('<input type="checkbox" id="auto-webm" checked>')
			.appendTo(autovid)
			.on("click", function () {
				AUTOVID = !AUTOVID;
				setOpt(CHANNEL.name + "_autovid", AUTOVID);
			});
		cbox.after(' autoplay');
		!AUTOVID ? cbox.removeAttr('checked') : '';
		!EMBEDVID ? autovid.hide() : '';
	}
}

// adding quick commands and volume buttons

if (UI_QuickCommandsBtns == "1" || UI_VolumeBtns == "1") {
	funcbtnform = $('<div id="funcbtnform" class="form-group" />').appendTo(configwell);
	$('<div class="col-lg-5 col-md-5">Command buttons</div>').appendTo(funcbtnform);
	funcbtnwrap = $('<div id="funcbtnwrap" class="col-lg-7 col-md-7" />').appendTo(funcbtnform);
	btnsgroup = $('<div id="funcbtngroup" class="btn-group" />').appendTo(funcbtnwrap);

	if (UI_QuickCommandsBtns == "1") {
		clearbtn = $('<button id="clear-btn" class="btn btn-default btn-sm">/clear</button>')
			.appendTo(btnsgroup)
			.on("click", function () {
				if (confirm('Are you sure to clear the chat window?')) {
					socket.emit("chatMsg", { msg: '/clear' });
				}
			});
		afkbtn = $('<button id="afk-btn" class="btn btn-default btn-sm">/afk</button>')
			.appendTo(btnsgroup)
			.on("click", function () {
				socket.emit("chatMsg", { msg: '/afk' });
			});

		socket.on("rank", toggleClearBtn);
		toggleClearBtn();
	}

	if (UI_VolumeBtns == "1") {
		voldownbtn = $('<button id="voldown-btn" class="btn btn-default btn-sm">vol -</button>')
			.appendTo(btnsgroup)
			.on("click", function () {
				a = PLAYER.player.getVolume();
				PLAYER.player.setVolume(a - 1);
			});
		volupbtn = $('<button id="volup-btn" class="btn btn-default btn-sm">vol +</button>')
			.appendTo(btnsgroup)
			.on("click", function () {
				a = PLAYER.player.getVolume();
				PLAYER.player.setVolume(a + 1);
			});

		socket.on("changeMedia", toggleVolBtn);
		toggleVolBtn();
	}
}

// adding media database layout

if (UI_ChannelDatabase == "1" && ChannelDatabase_URL == "") {
	dbwrap = $('<div id="dbwrap" class="col-lg-12 col-md-12" style="display:none" />').insertBefore(configwrap);
	dbwell = $('<div id="db-well" class="well" />').appendTo(dbwrap);

	var item_nr = 0;
	var layer_nr = 1;
	var opening = new Array();
	var item_count = new Array(0);
	var count_nr = 0;

	if (ChannelDatabase.length < 1 || ChannelDatabase[0][0] != "") {
		ChannelDatabase.unshift(['', '(various media)']);
	}
	UI_ChannelCache == "1" ? createDatabase() : '';
} else if (UI_ChannelDatabase == "1" && ChannelDatabase_URL != "") {
	$.getScript(ChannelDatabase_URL);
}

// adding galleries layout

if (UI_ChannelGalleries == "1") {
	gallerywrap = $('<div id="gallerywrap" class="col-lg-12 col-md-12" style="display:none" />')
		.appendTo("#leftpane-inner");
	gallerywell = $('<div id="gallery-well" class="well" />').appendTo(gallerywrap);

	if (ChannelGalleries_Array.length < 1) {
		ChannelGalleries_Array = [['Anime pictures', 'http://imgur.com/a/SjwJb/embed']];
	}
	UI_ChannelCache == "1" ? createGallery() : '';
}

// unchecking temporary media checkbox for registered users

if (UI_DefaultNonTemp == "1") {
	CLIENT.rank > 0 ? $(".add-temp").prop('checked', false) : '';
}

// adding playlist options for moderators button

advplaylist = $('<button id="advplaylist" class="btn btn-sm btn-default" title="Advanced options" />')
	.append('<span class="glyphicon glyphicon-wrench" />')
	.insertBefore("#qlockbtn")
	.on("click", function () {
		toggleDiv(advplcontrols);
	});

// adding advanced playlist options form

advplcontrol = $('<div id="advplcontrol" class="col-lg-12 col-md-12" />').insertAfter("#playlistmanager");
advplcontrols = $('<div id="advplcontrols" class="btn-group" style="display:none" />').appendTo(advplcontrol);

// adding advanced playlist options buttons

playnextbtn = $('<button id="playnext-btn" class="btn btn-default">Play next</button>')
	.appendTo(advplcontrols)
	.on("click", function () {
		socket.emit("playNext");
	});

addrandombtn = $('<button id="addrandom-btn" class="btn btn-default">Add random</button>')
	.appendTo(advplcontrols)
	.on("click", function () {
		addRandomItem();
	});

bumplastbtn = $('<button id="bumplast-btn" class="btn btn-default">Bump last</button>')
	.appendTo(advplcontrols)
	.on("click", function () {
		len = $("#queue").children().length;
		uid = $("#queue .queue_entry:nth-child(" + len + ")").data("uid");
		socket.emit("moveMedia", { from: uid, after: PL_CURRENT });
	});

deletelastbtn = $('<button id="deletelast-btn" class="btn btn-default">Delete last</button>')
	.appendTo(advplcontrols)
	.on("click", function () {
		if (confirm('Are you sure to delete last item?')) {
			len = $("#queue").children().length;
			uid = $("#queue .queue_entry:nth-child(" + len + ")").data("uid");
			socket.emit("delete", uid);
		}
	});

toggleAdvancedPl();

// adding playlist expanding button

expandbtn = $('<button id="expand-btn" class="btn btn-sm btn-default" title="Expand playlist" />')
	.append('<span class="glyphicon glyphicon-resize-full" />')
	.prependTo("#videocontrols")
	.on("click", function () {
		expandQueue();
	});

// adding playlist scrolling button

scrollbtn = $('<button id="scroll-btn" class="btn btn-sm btn-default" title="Scroll playlist to current item" />')
	.append('<span class="glyphicon glyphicon-hand-right" />')
	.prependTo("#videocontrols")
	.on("click", function () {
		scrollQueue();
	});

// adding contributors button

contribbtn = $('<button id="contrib-btn" class="btn btn-sm btn-default" title="Contributors list" />')
	.append('<span class="glyphicon glyphicon-user" />')
	.prependTo("#videocontrols")
	.on("click", function () {
		showContributors();
	});

// adding pin-up button

pinupbtn = $('<button id="pinup-btn" class="btn btn-sm btn-default" title="Pin playlist to player" />')
	.append('<span class="glyphicon glyphicon-pushpin" />')
	.prependTo("#videocontrols")
	.on("click", function () {
		!PINNED ? pinUp() : unPin();
		scrollQueue();
		scrollChat();
	});

// extending 'Get URLs' function

if (UI_ExtendedGetURLs == "1") {
	$("#getplaylist").unbind()
		.on("click", function () {
			getPlaylistURLs();
		});
}

// altering message for the first-timers

if ($("#plonotification").length > 0) {
	repl = '"the old style" of playlist buttons (<b>recommended</b>) - more compact playlist with nice icons '
		+ '(see image <a href="https://dl.dropboxusercontent.com/s/4ya7i5vlyb3likk/oldpl.jpg" target="_blank">'
		+ 'here</a>).';
	html = $("#plonotification .alert").html().replace(/the old style of playlist buttons./, repl);
	html = html.replace('right click). ', 'right click).<br />');
	$("#plonotification .alert").html(html);
}

// rearranging footer

html = '<br />CyTube Plus 4.5 · Copyright &copy; 2013-2014 Zimny Lech · '
	+ 'Free source on <a href="http://github.com/zimny-lech/CyTube-Plus" target="_blank">GitHub</a> · '
	+ '<a href="http://github.com/zimny-lech/CyTube-Plus/wiki" target="_blank">Wiki</a>';
$(".credit").append(html);

if (UI_CustomRightFooter == "1") {
	rightfooter = $('<span id="rightfooter">' + CustomRightFooter_HTML + '</span>')
		.appendTo("footer .container");
}

if (UI_CustomFooter == "1" || UI_UserStatistics == "1") {
	leftfooter = (UI_CustomRightFooter == "1") ? $('<span id="leftfooter" />') : $('<div id="leftfooter" />');
	(UI_CustomRightFooter == "1" && CustomFooter_HTML != "") ? leftfooter.html(CustomFooter_HTML) : '';
	leftfooter.appendTo("footer .container");
}

// updating user visits

USERVISITS++;
setOpt(CHANNEL.name + "_visits", USERVISITS);

if (UI_UserStatistics == "1") {
	(UI_CustomFooter == "1" && CustomFooter_HTML != "") ? $('<br /><br />').appendTo(leftfooter) : '';

	$('<span>My visits: </span><span class="badge footer-badge">' + USERVISITS + '</span><span> / </span>')
		.appendTo(leftfooter);
	$('<span>Current online time: </span>').appendTo(leftfooter);
	onlinetime = $('<span id="onlinetime" class="badge footer-badge">0:00</span>').appendTo(leftfooter);

	setInterval(function () { onlineTime() }, 60000);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- Chat and window extensions and events ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(UI_EmbeddingMedia == "1" && (EmbeddingMedia_Images != "" || EmbeddingMedia_Videos != "")) ? ALTERCHATFORMAT = true : '';
(UI_UserMarks == "1" || UI_IndependentEmotes == "1" || UI_IndependentFilters == "1") ? ALTERCHATFORMAT = true : '';

// alter chat messages formatting
// DEV NOTE: this is extended function from CyTube "util.js" file

if (ALTERCHATFORMAT) {
	function formatChatMessage(data, last) {
		if (!data.meta || data.msgclass) {
			data.meta = { addClass: data.msgclass, addClassToNameAndTimestamp: data.msgclass };
		}

		skip = data.username === last.name;
		data.meta.addClass === "server-whisper" ? skip = true : '';
		data.msg.match(/^\s*<strong>\w+\s*:\s*<\/strong>\s*/) ? skip = false : '';
		data.meta.forceShowName ? skip = false : '';
		data.msg = execEmotes(data.msg);

		last.name = data.username;
		div = $('<div />');
		if (data.meta.addClass === "drink") {
			div.addClass('drink');
			data.meta.addClass = '';
		}

		if (USEROPTS.show_timestamps) {
			time = $('<span class="timestamp" />').appendTo(div);
			timestamp = new Date(data.time).toTimeString().split(' ')[0];
			time.text('[' + timestamp + '] ');
			if (data.meta.addClass && data.meta.addClassToNameAndTimestamp) {
				time.addClass(data.meta.addClass);
			}
		}

		if (UI_UserMarks == "1" && UI_Squavatars == "1") {
			html = createSquavatar(data.username);
			div.html(div.html() + html);
		}
		if (UI_UserMarks == "1" && UI_Squavatars != "1") {
			if (UserMarks_Array[data.username] != undefined) {
				html = '<span class="avatar">' + UserMarks_Array[data.username] + '</span>';
				div.html(div.html() + html);
			}
		}

		uname = $('<span />');
		!skip ? uname.appendTo(div) : '';
		mark = (UI_UsernameMark == "1" && UsernameMark_Char != "") ? UsernameMark_Char : ':';
		$('<strong class="username" />').text(data.username + mark + ' ').appendTo(uname);

		data.meta.modflair ? uname.addClass(getNameColor(data.meta.modflair)) : '';
		if (data.meta.addClass && data.meta.addClassToNameAndTimestamp) {
			uname.addClass(data.meta.addClass);
		}
		if (data.meta.superadminflair) {
			uname.addClass('globalmod label').addClass(data.meta.superadminflair.labelclass);
			$('<span class="glyphicon" />').addClass(data.meta.superadminflair.icon)
				.prependTo(uname);
		}

		message = $('<span />').appendTo(div);
		message[0].innerHTML = data.msg;

		(data.meta.addClass == "greentext") ? message.addClass('greentext') : '';
		(data.meta.addClass == "spoiler") ? message.addClass('spoiler') : '';
		(data.meta.addClass == "action") ? message.addClass('action') : '';
		(data.meta.addClass == "server-whisper") ? message.addClass('server-whisper') : '';

		if (data.meta.action) {
			uname.remove();
			message[0].innerHTML = data.username + ' ' + data.msg;
		}

		if (UI_IndependentEmotes == "1") {
			_div = div.html();
			for (i in IndependentEmotes) {
				filter = IndependentEmotes[i][0];
				html = '<img src="' + IndependentEmotes[i][1] + '" title="' + filter + '" '
					+ 'style="width:' + IndependentEmotes[i][2] + 'px; '
					+ 'height:' + IndependentEmotes[i][3] + 'px; '
					+ 'cursor:pointer" onclick="insertText(\'' + filter + '\')" />';
				re = new RegExp(filter, 'g');
				_div = _div.replace(re, html);
			}
			div.html(_div);
		}
		if (UI_IndependentFilters == "1") {
			_div = div.html();
			for (i in IndependentFilters) {
				_div = _div.replace(IndependentFilters[i].before, IndependentFilters[i].after);
			}
			div.html(_div);
		}

		data.meta.addClass ? message.addClass(data.meta.addClass) : '';
		data.meta.shadow ? div.addClass("chat-shadow") : '';
		div.find("img").load(function () {
			SCROLLCHAT ? scrollChat() : '';
		});

		if (EMBEDIMG && UI_EmbeddingMedia == "1") {
			div.find(EmbeddingMedia_Images).each(function () {
				img = $('<img class="embedimg" />').attr('src', this.href)
					.load(function () {
						SCROLLCHAT ? scrollChat() : '';
					});
				$(this).html(img);
			});
		}
		if (EMBEDVID && UI_EmbeddingMedia == "1") {
			div.find(EmbeddingMedia_Videos).each(function () {
				vid = $('<video class="embedvid" />').attr('src', this.href).prop('loop', 'true')
					.load(function () {
						SCROLLCHAT ? scrollChat() : '';
					}).on("click", function () {
						if (!AUTOVID) {
							if ($(this).get(0).paused) {
								$(this).get(0).play();
							} else {
								$(this).get(0).pause();
							}
						} else {
							$(this).prop('muted', !$(this).prop('muted'));
						};
						return false;
					}).on("dblclick", function () {
						window.open(this.src, '_blank');
						return false;
					});
				AUTOVID ? vid.prop('autoplay', 'true').prop('muted', 'true') : '';
				UI_MediaControls == "1" ? vid.attr('controls', '') : '';
				$(this).html(vid);
			});
		}

		return div;
	}
}

// client-side chat buffer for playing sounds

_chatBuffer = addChatMessage;
addChatMessage = function (data) {
	if (UI_SoundFilters == "1" && VOICES && (!(data.username in MUTEDVOICES) || MUTEDVOICES[data.username] == "0")) {
		for (i in SoundFilters_Array) {
			if (data.msg.indexOf(i) > -1) {
				aud = new Audio(SoundFilters_Array[i]);
				aud.volume = SOUNDSVALUES[SOUNDSLVL];
				aud.play();
			}
		}
	}
	if (UI_ChatSpeak == "1" && VOICES && (!(data.username in MUTEDVOICES) || MUTEDVOICES[data.username] == "0")) {
		msg = getText(data.msg)
		if (msg.indexOf("!mow ") >= 0) {
			str = msg.split("!mow ");
			aud = new Audio(SPEAKLINK + '?lang=polish&text=' + encodeURI(str[1]));
			aud.volume = SOUNDSVALUES[SOUNDSLVL];
			aud.play();
		} else if (msg.indexOf("!say ") >= 0) {
			str = msg.split("!say ");
			aud = new Audio(SPEAKLINK + '?lang=english&text=' + encodeURI(str[1]));
			aud.volume = SOUNDSVALUES[SOUNDSLVL];
			aud.play();
		}
	}
	_chatBuffer(data);
}

// fix formatting and sending chat messages
// DEV NOTE: this are extended events from CyTube "util.js" file

$("#chatline, #chatbtn").unbind();

// add emote select option, when user types in chat ':' and first 3 letters of the emote this slect
// list will pop-up with found emotes
(function () {
	let chat = $('#chatline');
	let parent = chat.parent();
	let selList = $('#emoteListSelect');
	let selectedEmote = {};
	let emoteName = '';

	let state = {
		focusOnChat: false,
		focusOnEmoteList: false,
		mouseOverEmoteList: false,
		ctrlPressed: false
	};

	$(document).on('keyup keydown', function (e) {
		state.ctrlPressed = e.ctrlKey;
	});

	$('#chatline').on('keydown', function (e) {
		if (e.keyCode == 38 || e.keyCode == 40) { //up | down
			if (state.focusOnChat || (state.ctrlPressed && state.focusOnEmoteList)) {
				e.stopPropagation();
				e.preventDefault();

				let selected = selList.find('.selected');
				let target = e.keyCode == 38 ? selected.prev('div') : selected.next('div');

				if (target.length) {
					selected.toggleClass('selected');
					target.toggleClass('selected');
					selList.trigger('change');
					ensureScroll(selList, target);
				}
			}
		}
		else if (e.keyCode == 13 || e.keyCode == 9) { //enter or tab
			if (state.focusOnEmoteList || (state.ctrlPressed && state.focusOnEmoteList)) {
				e.stopPropagation();
				e.preventDefault();

				insertEmote();
			}
		}
		else if (e.keyCode == 27) { //escape
			closeList();
		}
	});

	$('#chatline').on('input', function (e) {
		let val = e.target.value;
		if (val.includes(':')) {
			emoteQuery = val.substring(val.lastIndexOf(':') + 1).toLocaleLowerCase();

			if (emoteQuery.length >= 1) {
				let foundEmotes = [];

				CHANNEL.emotes.forEach(emote => {
					let emot = emote.name.toLocaleLowerCase();

					if (emot.startsWith(emoteQuery) || emot.includes(emoteQuery)) {
						foundEmotes.push(emote);
					}                        
				});

				foundEmotes.sort((a, b) => a.name.toLowerCase().indexOf(emoteQuery) > b.name.toLowerCase().indexOf(emoteQuery) ? 1 : -1);

				if (foundEmotes.length > 0) {
					if (selList.length > 0) {
						selList.remove();
					}

					parent.append(`<div id="emoteListSelect"></div>`);
					selList = $('#emoteListSelect');
					selList.css("position", "absolute");
					selList.css("left", chat.position().left);
					selList.css("top", chat.position().top + parseInt(chat.css("height")));
					selList.css("background-color", "#161a20");
					selList.css("border", "1px solid black");
					selList.css("z-index", "999");

					foundEmotes.forEach(emote => {
						let opt = $(`<div class="list-option"><img src=${emote.image} heigt="35px" width="35px">${emote.name}</div>`);

						opt.on('click', function (e) {
							selectedEmote = CHANNEL.emotes.find(emote => emote.name == $(e.target).text());

							insertEmote();

							chat.focus();
						});

						selList.append(opt);
					});

					$('.list-option').first().toggleClass('selected');

					selList.on('change', function () {
						selectedEmote = CHANNEL.emotes.find(emote => emote.name == $('.list-option.selected').text());
					});

					selList.on('mouseover', function () { state.mouseOverEmoteList = true; })
					selList.on('mouseleave', function () { state.mouseOverEmoteList = false; });

					selList.trigger('change');

					state.focusOnEmoteList = state.focusOnChat = true;
				}
				else {
					closeList();
				}
			}
		}
		else {
			closeList();
		}
	});

	$('#chatline').on('mouseleave', function () { state.focusOnChat = false; });
	$('#chatline').on('blur', function (e) {
		state.focusOnChat = false;

		if (!state.mouseOverEmoteList)
			closeList();
	});

	$('#chatline').on('focus', function () {
		$('#chatline').trigger('input');
	});

	function closeList() {
		if (!state.ctrlPressed) {
			selList.remove();
			state.focusOnEmoteList = state.mouseOverEmoteList = false;
		}
	}

	function insertEmote() {
		let msg = chat.val();
		let index = msg.lastIndexOf(`:${emoteName}`);

		if (index >= 0)
			msg = msg.substring(0, msg.lastIndexOf(`:${emoteName}`));

		if (msg.length > 0 && index > 0 && msg[msg.length - 1] != " ")
			msg += " ";

		chat.val(msg + selectedEmote.name + " ");

		closeList();
	}

	function ensureScroll(parent, target) {
		let tH = target.outerHeight(true);

		let pt = parent.offset().top;
		let pb = pt + parent.height();

		let tt = target.offset().top;
		let tb = tt + tH;

		if (tb > pb) { // scrolling bottom 
			parent.scrollTop(parent.scrollTop() + tH);
		}

		if (tt < pt) { // scrolling top
			parent.scrollTop(parent.scrollTop() - pt + tt - tH);
		}
	}
})();


$("#chatline").on("keydown", function (ev) {
	if (ev.isPropagationStopped()) {
		return;
	}
	if (ev.keyCode == 13) {
		if (CHATTHROTTLE) {
			return;
		}
		_msg = $("#chatline").val();
		msg = $("#chatline").val();
		if (msg.trim()) {
			msg = prepareMessage(msg.trim());
			meta = {};
			if (COMMAND) {
				socket.emit("chatMsg", { msg: _msg });
				msg = '➥ ' + msg;
				COMMAND = false;
			}
			if (USEROPTS.adminhat && CLIENT.rank >= 255) {
				msg = '/a ' + msg;
			} else if (USEROPTS.modhat && CLIENT.rank >= Rank.Moderator) {
				meta.modflair = CLIENT.rank;
			}
			if (CLIENT.rank >= 2 && msg.indexOf("/m ") === 0) {
				meta.modflair = CLIENT.rank;
				msg = msg.substring(3);
			}
			socket.emit("chatMsg", { msg: msg, meta: meta });
			userChatStats(_msg);
			CHATHIST.push($("#chatline").val());
			CHATHISTIDX = CHATHIST.length;
			$("#chatline").val('');
		}
		return;
	} else if (ev.keyCode == 9) {
		chatTabComplete();
		ev.preventDefault();
		return false;
	} else if (ev.keyCode == 38) {
		if (CHATHISTIDX == CHATHIST.length) {
			CHATHIST.push($("#chatline").val());
		}
		if (CHATHISTIDX > 0) {
			CHATHISTIDX--;
			$("#chatline").val(CHATHIST[CHATHISTIDX]);
		}
		ev.preventDefault();
		return false;
	} else if (ev.keyCode == 40) {
		if (CHATHISTIDX < CHATHIST.length - 1) {
			CHATHISTIDX++;
			$("#chatline").val(CHATHIST[CHATHISTIDX]);
		}
		ev.preventDefault();
		return false;
	}
});

$("#chatbtn").on("click", function () {
	_msg = $("#chatline").val();
	msg = $("#chatline").val();
	if (msg.trim()) {
		msg = prepareMessage(msg.trim());
		if (COMMAND) {
			socket.emit("chatMsg", { msg: _msg });
			msg = '➥ ' + msg;
			COMMAND = false;
		}
		socket.emit("chatMsg", { msg: msg });
		userChatStats(_msg);
		$("#chatline").val('');
	}
});


chatConfig = {
	EMOTE_SIZE: 50
}

// danmaku 
danmakuConfig = {
	MSG_SPEED_MS: 3000,
	MSG_CAP: 100,
	FONT_COLOR: "white",
	FONT_OUTLINE_COLOR: "black",
	FONT_BOLD: true,
	FONT: "Verdana",
	COLORS: ['white', 'white', 'white', 'blue', 'green', 'red'],
	SIZE: {
		W: 800,
		H: 600
	}
};

(function () {
	let dc = danmakuConfig
	let vw = $('#videowrap');
	vw.prepend($(`<canvas id="kinooo" style="position: absolute; pointer-events: none; z-index: 999"></canvas>`));

	let canvas = document.getElementById('kinooo');
	let ctx = canvas.getContext('2d');
	let bufferCanvas = document.createElement('canvas');
	let bufferCtx = bufferCanvas.getContext('2d');

	let msgQueue = [];
	let prevTS = 0;

	let FPS = 60;
	let oneFrameMS = 1000 / FPS;
	calcFPS({ count: 60, callback: fps => oneFrameMS = 1000 / (FPS = findClosestRefreshRate(fps)) });

	function loop(ts) {
		if (!prevTS)
			prevTS = ts;

		let vwOffsetLeft = vw[0].offsetLeft + parseInt(vw.css('padding-left'));
		let vwOffsetTop = vw[0].offsetTop + parseInt(vw.css('padding-top'));
		let elapsed = ts - prevTS;

		if (elapsed > oneFrameMS) {
			bufferCanvas.height = canvas.height = dc.SIZE.H;
			bufferCanvas.width = canvas.width = dc.SIZE.W;

			bufferCtx.clearRect(0, 0, bufferCanvas.width, bufferCanvas.height); // clear canvas on each frame before drawing new stuff

			for (let msg of msgQueue) {
				let fontSize = Math.floor(scaleValue(canvas.height, 100, 900, 14, 50));

				if (msg.y <= fontSize) //prevent clipping on top
					msg.y += fontSize;

				if (msg.y > canvas.height - fontSize) //prevent clipping on bottom
					msg.y -= fontSize;

				bufferCtx.fillStyle = '#000000';
				bufferCtx.strokeStyle = dc.FONT_OUTLINE_COLOR;
				bufferCtx.lineWidth = scaleValue(fontSize, 20, 50, 1, 2);
				bufferCtx.font = `${dc.FONT_BOLD ? 'bold' : ''} ${fontSize}px ${dc.FONT}`;

				// accumulative width of the whole message, since message is sliced into text and emotes we need 
				// to keep track of it current width to insert new text and emotes at correct offfset
				let rowW = 0, imgModifier = 0, mult = 0.5;

				for (let i = 0; i < msg.content.length; i++) {
					let data = msg.content[i];
					bufferCtx.fillStyle = ctx.fillStyle == '#000000' ? data.c : ctx.fillStyle;

					if (data.t == 1) { // 1 = text                            
						bufferCtx.fillText(data.v, msg.x + rowW, msg.y); // text, X + cummulative offset, Y
						bufferCtx.strokeText(data.v, msg.x + rowW, msg.y); // same but for text outline 

						let mW = bufferCtx.measureText(data.v).width; // get width of the string with current font settings
						rowW += mW; // add text width to cummulative offset
					}
					else {
						let imgScaleFactor = scaleValue(canvas.height, 200, 800, 0.5, 1);
						let imgW = data.v.width * imgScaleFactor;
						let imgH = data.v.height * imgScaleFactor;

						imgModifier -= mult /= 1.5;

						if (msg.y <= imgH / 2) //prevent clipping on top
							msg.y += imgH / 2;

						if (msg.y > canvas.height - imgH / 2) //prevent clipping on bottom
							msg.y -= imgH / 2;

						if (data.t == 2) { // 2 = image
							bufferCtx.drawImage(
								data.v, // image
								msg.x + rowW + 10, //X + cummulative offset + 10 (just in case)
								msg.y - (imgH / 2) - (fontSize / 2), //Y - width of the image and - (font height (size) / 2) to make sure emote is rendered in the middle of the meesage on Y axis
								imgW,  // img W
								imgH); // img H

							rowW += imgW; // add image width to cummulative offset
						}
						else if (data.t == 3) { // 3 = gif (gf ;_;)
							let div, gif;

							if (!data.gifContainer) {
								data.gifContainer = $(`<div class="gifEmote"><img src="${data.v.src}"></div>`);

								div = $(data.gifContainer);
								div.css('width', `${imgW}px`);
								div.css('overflow', 'hidden');
								div.css("position", "absolute");
								div.css("z-index", 999);
								div.css("display", canvas.style.display);

								div.css({
									left: `${vwOffsetLeft + canvas.width - imgW}px`,
									top: Math.floor(msg.y - (imgH / 4) - (fontSize / 2)) + vwOffsetTop + 'px'
								});

								gif = $(data.gifContainer).find('img');
								gif.css('transform', `translateX(${msg.x + vwOffsetLeft + rowW + 10}px)`);

								$('body').append(div);
							}
							else {
								div = $(data.gifContainer);
								gif = $(data.gifContainer).find('img');
							}

							let l = msg.x + vwOffsetLeft + rowW + 10 - imgW;
							div.css('width', `${imgW}px`);
							gif.css('width', `${imgW}px`);

							if (l > vwOffsetLeft + canvas.width - imgW * 2) {
								gif.css('transform', `translateX(${Math.floor(l - (vwOffsetLeft + canvas.width - imgW)) + imgW}px)`);
							}
							else if (div.offset().left >= vwOffsetLeft) {
								div.css({
									left: `${l + imgW}px`,
									top: Math.floor(msg.y - (imgH / 4) - (fontSize / 2)) + vwOffsetTop + 'px'
								});
							}
							else {
								gif.css('transform', `translateX(${Math.floor(msg.x + rowW + 10)}px)`);
							}

							rowW += imgW;
						}
					}
				}

				let delay = oneFrameMS + (elapsed - oneFrameMS);
				let rowWscaled = rowW >= 500 ? 0 : 500;
				let speed = (canvas.width / dc.MSG_SPEED_MS * delay) + (rowWscaled / dc.MSG_SPEED_MS * delay);
				
				msg.x -= speed + imgModifier;

				if (msg.x < -(rowW + 100)) {
					msgQueue.splice(msgQueue.indexOf(msg), 1);

					let gifsToDispose = msg.content.filter(elem => elem.gifContainer);
					if (gifsToDispose) {
						gifsToDispose.forEach(gif => gif.gifContainer.remove());
					}
				}
			}

			prevTS = ts;
		}

		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(bufferCanvas, 0, 0);

		requestAnimationFrame(loop);
	}

	loop();

	let rng = initRandom(CHANNEL.usercount);

	$("#messagebuffer").bind("DOMNodeInserted", function (e) {
		$(e.target).find('.channel-emote').css({
            'max-width': chatConfig.EMOTE_SIZE + 'px',
            'max-height': chatConfig.EMOTE_SIZE + 'px'
        });

		let chatEntry = $(e.target).clone();

		if (chatEntry.find('.server-whisper').length || chatEntry.find('span.action').length) { // filter system messages 
			return;
		}

		if (chatEntry.find('strong.username').length) { // chat entry that starts with username
			chatEntry.find('strong.username').remove();
		}

		if (chatEntry.find('span.timestamp').length) {
			chatEntry.find('span.timestamp').remove();
		}

		if (CHANNEL.usercount != rng.seed)
			rng = initRandom(CHANNEL.usercount);

		let comment = {
			content: [],
			x: canvas.width,
			y: rng.next() * canvas.height,
		};

		let childNodes = chatEntry.contents().last().contents();

		let msgIndex = 0;
		let imgAwaitCount = 0;

		try {
			let color = '';

			childNodes.each((index, node) => {
				if ((node.nodeName == 'span' || node.nodeName == '#text') && node.textContent.length > 0) {
					let text = node.textContent;

					if (msgIndex == 0 && (text.startsWith('!') || text.startsWith('➥')))
						throw "stop";

					color = text.startsWith('>') || color == '#789922' ? '#789922' : color == '' ? dc.COLORS[Math.floor(rng.next() * dc.COLORS.length)] : color;
					comment.content.push({ i: msgIndex++, t: 1, v: node.textContent, c: color });
				}

				if (node.nodeName == 'IMG') {
					let img = new Image();
					img.src = node.src;
					let j = comment.content.push({ i: msgIndex++, t: node.src.toString().toLowerCase().endsWith('.gif') ? 3 : 2, v: null });
					imgAwaitCount++;
					img.onload = function () {
						comment.content[j - 1].v = img;
						imgAwaitCount--

						if (imgAwaitCount == 0 && msgQueue.length < dc.MSG_CAP) {
							msgQueue.push(comment);
						}
					};
				}
			});
		} catch (error) {
			return;
		}

		if (imgAwaitCount == 0 && msgQueue.length < dc.MSG_CAP) {
			msgQueue.push(comment);
		}
	});

	function scaleValue(value, lowerBoundary, upperBoundary, scaleFrom, scaleTo) {
		if (value <= lowerBoundary)
			return scaleFrom;
		if (value >= upperBoundary)
			return scaleTo;

		return scaleFrom + ((value - lowerBoundary) / (upperBoundary - lowerBoundary)) * (scaleTo - scaleFrom);
	}

	function initRandom(seed) {
		let state = seed % 2147483647;

		if (state <= 0) {
			state += 2147483646;
		}

		for (let i = 0; i < 10; i++) {
			state = (state * 16807) % 2147483647;
		}

		return {
			seed: seed,
			next: function () {
				state = (state * 16807) % 2147483647;
				return state / 2147483647;
			}
		};
	}

	function calcFPS(a) { function b() { if (f--) c(b); else { var e = 3 * Math.round(1E3 * d / 3 / (performance.now() - g)); "function" === typeof a.callback && a.callback(e); } } var c = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame; if (!c) return !0; a || (a = {}); var d = a.count || 60, f = d, g = performance.now(); b() }
	function findClosestRefreshRate(n) { let e = [240, 165, 144, 120, 90, 75, 60]; let t = e[0], r = Math.abs(n - t); for (const a of e) { const e = Math.abs(n - a); e < r && (t = a, r = e) } return t };
})();

// fix layout behaviour after resizing
// DEV NOTE: this is extended function from CyTube "util.js" file

function resizeStuff() {
	VWIDTH = $("#videowrap").width() + "";
	VHEIGHT = Math.floor(parseInt(VWIDTH) * 9 / 16 + 1) + "";
	$("#ytapiplayer").width(VWIDTH).height(VHEIGHT);

	var h = parseInt(VHEIGHT) - $("#chatline").outerHeight() - 1;
	$("#messagebuffer").height(h);
	$("#userlist").height(h);

	danmakuConfig.SIZE.W = VWIDTH;
	danmakuConfig.SIZE.H = VHEIGHT;

	if (!$("body").hasClass("fluid")) {
		return;
	}

	if (UI_DisplayModeSel == "1") {
		m = modesel.val();

		// patches for various display modes
		if (m == "chMode" || m == "rMode") {
			if (WEBKIT) {
				$("#videowrap").hide();
			} else {
				$("#videowrap div, #videowrap p").hide();
				$("#ytapiplayer").width(1).height(1);
			}
			fitChat("auto");
		} else if (m == "syMode" && USERCONFIG.player == "center") {
			fitChat(200);
		} else if (m == "sMode") {
			// DEV NOTE: current function is called in "changeMedia" callback (condition race)

			VW = $("#messagebuffer").width();
			VH = Math.floor(parseInt(VW) * 9 / 16 + 1);
			$("#messagebuffer, #userlist").height(VH);
		}
	}
}

// bind new resizing function

$(window).unbind("resize");
$(window).resize(resizeStuff);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// setting global sockets

socket.on("channelOpts", setUserCSS);
socket.on("channelCSSJS", setUserCSS);

socket.on("login", patchWrap);
socket.on("rank", toggleAdvancedPl);

// setting final layout after loading

setLayout();
scrollChat();
scrollQueue();

if (FLUID) {
	$(".container").removeClass('container').addClass('container-fluid');
	$("footer .container-fluid").removeClass('container-fluid').addClass('container');
	$("#fluid-layout").prop('checked', 'true');
	$("#fontspanel, #emotespanel").addClass('fluidpanel');
}

resizeStuff();

// finishing variable

LOADED = true;


// adding external script file

if (UI_ExternalScript == "1" && ExternalScript_URL != "") {
	$.getScript(ExternalScript_URL);
}

//setTimeout(() => {
//  var rngWallpaperBtn = $('<button class="btn btn-sm btn-default">Change Wallpaper</button>');
//  rngWallpaperBtn .on('click', function() { console.log("walls"); });
//  rngWallpaperBtn.insertAfter($("#playlistrow #layout-btn"));
//}, 500);
//$("#emotelistbtn").insertAfter$("#playlistrow #layout-btn"));
//const button = document.getElementById("emotelistbtn").innerText = "Search Emotes";
/* ----- END OF LIBRARY ----- */

