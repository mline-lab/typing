//ひらがな変換表
var henkan = [
    ["あ", "a"],
    ["い", "i", "yi"],
    ["う", "u", "wu", "whu"],
    ["え", "e"],
    ["お", "o"],
    ["か", "ka", "ca"],
    ["き", "ki"],
    ["く", "ku", "cu", "qu"],
    ["け", "ke"],
    ["こ", "ko", "co"],
    ["さ", "sa"],
    ["し", "shi", "si", "ci"],
    ["す", "su"],
    ["せ", "se", "ce"],
    ["そ", "so"],
    ["た", "ta"],
    ["ち", "chi", "ti"],
    ["つ", "tsu", "tu"],
    ["て", "te"],
    ["と", "to"],
    ["な", "na"],
    ["に", "ni"],
    ["ぬ", "nu"],
    ["ね", "ne"],
    ["の", "no"],
    ["は", "ha"],
    ["ひ", "hi"],
    ["ふ", "fu", "hu"],
    ["へ", "he"],
    ["ほ", "ho"],
    ["ま", "ma"],
    ["み", "mi"],
    ["む", "mu"],
    ["め", "me"],
    ["も", "mo"],
    ["や", "ya"],
    ["ゆ", "yu"],
    ["よ", "yo"],
    ["ら", "ra"],
    ["り", "ri"],
    ["る", "ru"],
    ["れ", "re"],
    ["ろ", "ro"],
    ["わ", "wa"],
    ["を", "wo"],
    ["ん", "nn", "n'", "xn", "n"],
    ["が", "ga"],
    ["ぎ", "gi"],
    ["ぐ", "gu"],
    ["げ", "ge"],
    ["ご", "go"],
    ["ざ", "za"],
    ["じ", "ji", "zi"],
    ["ず", "zu"],
    ["ぜ", "ze"],
    ["ぞ", "zo"],
    ["だ", "da"],
    ["ぢ", "di"],
    ["づ", "du"],
    ["で", "de"],
    ["ど", "do"],
    ["ば", "ba"],
    ["び", "bi"],
    ["ぶ", "bu"],
    ["べ", "be"],
    ["ぼ", "bo"],
    ["ぱ", "pa"],
    ["ぴ", "pi"],
    ["ぷ", "pu"],
    ["ぺ", "pe"],
    ["ぽ", "po"],
    ["ー", "-"],
    ["いぇ", "ye", "ile", "ixe", "ilye", "ixye"],
    ["うぁ", "wha", "ula", "uxa"],
    ["うぃ", "wi", "whi", "uli", "uxi", "ulyi", "uxyi"],
    ["うぇ", "we", "whe", "ule", "uxe", "ulye", "uxye"],
    ["うぉ", "who", "ulo", "uxo"],
    ["ヴぁ", "va", "vula", "vuxa"],
    ["ヴぃ", "vi", "vyi", "vuli", "vuxi", "vulyi", "vuxyi"],
    ["ヴ", "vu"],
    ["ヴぇ", "ve", "vye", "vule", "vuxe", "vulye", "vuxye"],
    ["ヴぉ", "vo", "vulo", "vuxo"],
    ["ヴゃ", "vya", "vulya", "vuxya"],
    ["ヴゅ", "vyu", "vulyu", "vuxyu"],
    ["ヴょ", "vyo", "vulyo", "vuxyo"],
    ["きゃ", "kya", "kilya", "kixya"],
    ["きぃ", "kyi", "kili", "kixi", "kilyi", "kixyi"],
    ["きゅ", "kyu", "kilyu", "kixyu"],
    ["きぇ", "kye", "kile", "kixe", "kilye", "kixye"],
    ["きょ", "kyo", "kilyo", "kixyo"],
    ["ぎゃ", "gya", "gilya", "gixya"],
    ["ぎぃ", "gyi", "gili", "gixi", "gilyi", "gixyi"],
    ["ぎゅ", "gyu", "gilyu", "gixyu"],
    ["ぎぇ", "gye", "gile", "gixe", "gilye", "gixye"],
    ["ぎょ", "gyo", "gilyo", "gixyo"],
    ["くぁ", "qwa", "qa", "kwa", "kula", "kuxa", "cula", "cuxa", "qula", "quxa"],
    ["くぃ", "qwi", "qi", "qyi", "kuli", "kuxi", "kulyi", "kuxyi", "culi", "cuxi", "culyi", "cuxyi", "quli", "quxi", "qulyi", "quxyi"],
    ["くぅ", "qwu", "kulu", "kuxu", "culu", "cuxu", "qulu", "quxu"],
    ["くぇ", "qwe", "qe", "qye", "kule", "kuxe", "kulye", "kuxye", "cule", "cuxe", "culye", "cuxye", "qule", "quxe", "qulye", "quxye"],
    ["くぉ", "qwo", "qo", "kulo", "kuxo", "culo", "cuxo", "qulo", "quxo"],
    ["ぐぁ", "gwa", "gula", "guxa"],
    ["ぐぃ", "gwi", "guli", "guxi", "gulyi", "guxyi"],
    ["ぐぅ", "gwu", "gulu", "guxu"],
    ["ぐぇ", "gwe", "gule", "guxe", "gulye", "guxye"],
    ["ぐぉ", "gwo", "gulo", "guxo"],
    ["しゃ", "sha", "sya", "silya", "sixya", "shilya", "shixya", "cilya", "cixya"],
    ["しぃ", "syi", "sili", "silyi", "sixi", "sixyi", "shili", "shilyi", "shixi", "shixyi", "cili", "cilyi", "cixi", "cixyi"],
    ["しゅ", "shu", "syu", "silyu", "sixyu", "shilyu", "shixyu", "cilyu", "cixyu"],
    ["しぇ", "she", "sye", "sile", "silye", "sixe", "sixye", "shile", "shilye", "shixe", "shixye", "cile", "cilye", "cixe", "cixye"],
    ["しょ", "sho", "syo", "silyo", "sixyo", "shilyo", "shixyo", "cilyo", "cixyo"],
    ["じゃ", "ja", "jya", "jilya", "jixya", "zya", "zilya", "zixya"],
    ["じぃ", "jyi", "jili", "jixi", "jilyi", "jixyi", "zyi", "zili", "zixi", "zilyi", "zixyi"],
    ["じゅ", "ju", "jyu", "jilyu", "jixyu", "zyu", "zilyu", "zixyu"],
    ["じぇ", "je", "jye", "jile", "jixe", "jilye", "jixye", "zye", "zile", "zixe", "zilye", "zixye"],
    ["じょ", "jo", "jyo", "jilyo", "jixyo", "zyo", "zilyo", "zixyo"],
    ["すぁ", "swa", "sula", "suxa"],
    ["すぃ", "swi", "suli", "suxi", "sulyi", "suxyi"],
    ["すぃ", "swu", "sulu", "suxu"],
    ["すぇ", "swe", "sule", "suxe", "sulye", "suxye"],
    ["すぉ", "swo", "sulo", "suxo"],
    ["ちゃ", "cha", "cya", "tya", "tilya", "tixya", "chilya", "chixya"],
    ["ちぃ", "cyi", "tyi", "chili", "chixi", "chilyi", "chixyi", "tili", "tixi", "tilyi", "tixyi"],
    ["ちゅ", "chu", "cyu", "tyu", "tilyu", "tixyu", "chilyu", "chixyu"],
    ["ちぇ", "che", "cye", "tye", "tile", "tixe", "tilye", "tixye", "chile", "chixe", "chilye", "chilxye"],
    ["ちょ", "cho", "cyo", "tyo", "tilyo", "tixyo", "chilyo", "chixyo"],
    ["ぢゃ", "dya", "dilya", "dixya"],
    ["ぢぃ", "dyi", "dili", "dixi", "dilyi", "dixyi"],
    ["ぢゅ", "dyu", "dilyu", "dixyu"],
    ["ぢぇ", "dye", "dile", "dixe", "dilye", "dixye"],
    ["ぢょ", "dyo", "dilyo", "dixyo"],
    ["つぁ", "tsa", "tula", "tuxa", "tsula", "tsuxa"],
    ["つぃ", "tsi", "tuli", "tuxi", "tulyi", "tuxyi", "tsuli", "tsuxi", "tsulyi", "tsuxyi"],
    ["つぇ", "tse", "tule", "tuxe", "tulye", "tuxye", "tsule", "tsuxe", "tsulye", "tsuxye"],
    ["つぉ", "tso", "tulo", "tuxo", "tsulo", "tsuxo"],
    ["てゃ", "tha", "telya", "texya"],
    ["てぃ", "thi", "teli", "texi", "telyi", "texyi"],
    ["てゅ", "thu", "telyu", "texyu"],
    ["てぇ", "the", "tele", "texe", "telye", "texye"],
    ["てょ", "tho", "telo", "texo"],
    ["でゃ", "dha", "delya", "dexya"],
    ["でぃ", "dhi", "deli", "dexi", "delyi", "dexyi"],
    ["でゅ", "dhu", "delyu", "dexyu"],
    ["でぇ", "dhe", "dele", "dexe", "delye", "dexye"],
    ["でょ", "dho", "delyo", "dexyo"],
    ["とぁ", "twa", "tola", "toxa"],
    ["とぃ", "twi", "toli", "toxi", "tolyi", "toxyi"],
    ["とぅ", "twu", "tolu", "toxu"],
    ["とぇ", "twe", "tole", "toxe", "tolye", "toxye"],
    ["とぉ", "two", "tolo", "toxo"],
    ["どぁ", "dwa", "dola", "doxa"],
    ["どぃ", "dwi", "doli", "doxi", "dolyi", "doxyi"],
    ["どぅ", "dwu", "dolu", "doxu"],
    ["どぇ", "dwe", "dole", "doxe", "dolye", "doxye"],
    ["どぉ", "dwo", "dolo", "doxo"],
    ["にゃ", "nya", "nilya", "nixya"],
    ["にぃ", "nyi", "nili", "nixi", "nilyi", "nixyi"],
    ["にゅ", "nyu", "nilyu", "nixyu"],
    ["にぇ", "nye", "nile", "nixe", "nilye", "nixye"],
    ["にょ", "nyo", "nilyo", "nixyo"],
    ["ひゃ", "hya", "hilya", "hixya"],
    ["ひぃ", "hyi", "hili", "hixi", "hilyi", "hixyi"],
    ["ひゅ", "hyu", "hilyu", "hixyu"],
    ["ひぇ", "hye", "hile", "hixe", "hilye", "hixye"],
    ["ひょ", "hyo", "hilyo", "hixyo"],
    ["びゃ", "bya", "bilya", "bixya"],
    ["びぃ", "byi", "bili", "bixi", "bilyi", "bixyi"],
    ["びゅ", "byu", "bilyu", "bixyu"],
    ["びぇ", "bye", "bile", "bixe", "bilye", "bixye"],
    ["びょ", "byo", "bilyo", "bixyo"],
    ["ぴゃ", "pya", "pilya", "pixya"],
    ["ぴぃ", "pyi", "pili", "pixi", "pilyi", "pixyi"],
    ["ぴゅ", "pyu", "pilyu", "pixyu"],
    ["ぴぇ", "pye", "pile", "pixe", "pilye", "pixye"],
    ["ぴょ", "pyo", "pilyo", "pixyo"],
    ["ふぁ", "fa", "fula", "fuxa", "hula", "huxa", "fwa"],
    ["ふぃ", "fi", "fyi", "fuli", "fuxi", "fulyi", "fuxyi", "huli", "huxi", "hulyi", "huxyi", "fwi"],
    ["ふぅ", "fwu", "fulu", "fuxu", "hulu", "huxu"],
    ["ふぇ", "fe", "fye", "fule", "fuxe", "fulye", "fuxye", "hule", "huxe", "hulye", "huxye", "fwe"],
    ["ふぉ", "fo", "fulo", "fuxo", "hulo", "huxo", "fwo"],
    ["ふゃ", "fya", "fulya", "fuxya", "hulya", "huxya"],
    ["ふゅ", "fyu", "fulyu", "fuxyu", "hulyu", "huxyu"],
    ["ふょ", "fyo", "fulyo", "fulyo", "hulyo", "huxyo"],
    ["みゃ", "mya", "milya", "mixya"],
    ["みぃ", "myi", "mili", "mixi", "milyi", "mixyi"],
    ["みゅ", "myu", "milyu", "mixyu"],
    ["みぇ", "mye", "mile", "mixe", "milye", "mixye"],
    ["みょ", "myo", "milyo", "mixyo"],
    ["りゃ", "rya", "rilya", "rixya"],
    ["りぃ", "ryi", "rili", "rixi", "rilyi", "rixyi"],
    ["りゅ", "ryu", "rilyu", "rixyu"],
    ["りぇ", "rye", "rile", "rixe", "rilye", "rixye"],
    ["りょ", "ryo", "rilyo", "rixyo"],
    ["っ", "tt", "ltu", "xtu", "ltsu"],
    ["ぁ", "la", "xa"],
    ["ぃ", "li", "xi", "lyi", "xyi"],
    ["ぅ", "lu", "xu"],
    ["ぇ", "le", "xe", "lye", "xye"],
    ["ぉ", "lo", "xo"],
    ["ゃ", "lya", "xya"],
    ["ゅ", "lyu", "xyu"],
    ["ょ", "lyo", "xyo"],
    ["ゎ", "lwa", "xwa"]
];

var keydowntable1 = [
    [49, "1"],
    [50, "2"],
    [51, "3"],
    [52, "4"],
    [53, "5"],
    [54, "6"],
    [55, "7"],
    [56, "8"],
    [57, "9"],
    [48, "0"],
    [189, "-"],
    [173, "-"],
    [222, "^"],
    [160, "^"],
    [220, "\\"],
    [81, "q"],
    [87, "w"],
    [69, "e"],
    [82, "r"],
    [84, "t"],
    [89, "y"],
    [85, "u"],
    [73, "i"],
    [79, "o"],
    [80, "p"],
    [192, "@"],
    [64, "@"],
    [219, "["],
    [65, "a"],
    [83, "s"],
    [68, "d"],
    [70, "f"],
    [71, "g"],
    [72, "h"],
    [74, "j"],
    [75, "k"],
    [76, "l"],
    [187, ";"],
    [59, ";"],
    [186, ":"],
    [58, ":"],
    [221, "]"],
    [90, "z"],
    [88, "x"],
    [67, "c"],
    [86, "v"],
    [66, "b"],
    [78, "n"],
    [77, "m"],
    [188, ","],
    [190, "."],
    [191, "/"],
    [226, "\\"]
];

var keydowntable2 = [
    [49, "!"],
    [50, "\""],
    [51, "#"],
    [52, "$"],
    [53, "%"],
    [54, "\&"],
    [55, "\'"],
    [56, "("],
    [57, ")"],
    [189, "="],
    [173, "="],
    [222, "~"],
    [160, "~"],
    [220, "|"],
    [81, "Q"],
    [87, "W"],
    [69, "E"],
    [82, "R"],
    [84, "T"],
    [89, "Y"],
    [85, "U"],
    [73, "I"],
    [79, "O"],
    [80, "P"],
    [192, "`"],
    [64, "`"],
    [219, "{"],
    [65, "A"],
    [83, "S"],
    [68, "D"],
    [70, "F"],
    [71, "G"],
    [72, "H"],
    [74, "J"],
    [75, "K"],
    [76, "L"],
    [187, "+"],
    [59, "+"],
    [186, "*"],
    [58, "*"],
    [221, "}"],
    [90, "Z"],
    [88, "X"],
    [67, "C"],
    [86, "V"],
    [66, "B"],
    [78, "N"],
    [77, "M"],
    [188, "<"],
    [190, ">"],
    [191, "?"],
    [226, "_"]
];

//BGM
var audioBGM;
//タイプ音
var audioElem;
//タイプミス音
var audioBad;
//ボイス音
var audioAtk1;
var audioAtk2;
var audioAtk3;
var audioAtk4;
//勝ちボイス
var audioWin;
//負けボイス
var audioLose;
//タイムオーバー
var audioTimeOver;

//ボリューム
var mute = 0;
var bgm_volume = 5;

// 時間制限
var timeLimit = 60;
var game_flag = 0;

var startcount;
var timer1;
var wordChars;
var charIndex;
var messageArea;
var typeArea;
var typeArea2;
var score;
var downcount;
var timeLeft;
var space_flag;
var gauge;
var textColor1;
var textColor2;
var missCount;

//タイムゲージ
var time; //タイマーＩＤ用
var flg; //二重起動防止フラグ
var x; //ｘ座標

//ランキング
var username;

var wordList_jp = new Array();
var wordList_hiragana = new Array();


//3要素の配列。0番目に『文全体のローマ字』、 1番目に『ひらがなを単語毎に配列に入れたもの』、 2番目に『ローマ字を単語毎に配列に入れたもの』が入る
var worddata

//【MRP】アニメーション変数宣言
var right_img_lock;
var animation_random_state_number;

window.onload = function() {

    //画像プリロード
    $(function(){
    jQuery.preloadImages = function(){
        for(var i = 0; i<arguments.length; i++){
            jQuery("<img>").attr("src", arguments[i]);
        }
    };
    $.preloadImages("img/typing/budou_default.png","img/typing/budou_default_dmg.png","img/typing/kaede_atk.png","img/typing/kaede_atk2.png","img/typing/kaede_atk3.png","img/typing/kaede_default.png","img/typing/kaede_miss.png","img/typing/kaede-atk2-animation.png","img/typing/kaede-atk3-animation.png","img/typing/kaede-atk4-animation.png");
    });


    input_item = document.getElementById("input_item");
    game_messsage = document.getElementById("game_messsage");
    messageArea = document.getElementById("message");
    wordArea_jp = document.getElementById("word_jp");
    wordArea_hiragana = document.getElementById("word_hiragana");
    typeArea = document.getElementById("type_Before");
    typeArea2 = document.getElementById("type_After");
    startButton = document.getElementById("start_button");
    rankButton = document.getElementById("rank_button");
    name_text = document.getElementById("name-text");
    ranking_item = document.getElementById("ranking_item");
    score_area = document.getElementById("score_area");
    skil_gaze = document.getElementById("skil_gaze_id");
    condition = document.getElementById("condition");
    time_gaze_id = document.getElementById("time_gaze_id");
    gamemain = document.getElementById("gamebody");
    time_area = document.getElementById("time_area");
    teki_img = document.getElementById("teki_img");
    player_img = document.getElementById("player_img");
    img1 = document.getElementById("img1");
    img2 = document.getElementById("img2");
    img3 = document.getElementById("img3");
    img4 = document.getElementById("img4");
    img5 = document.getElementById("img5");
    mute_button = document.getElementById("mute_button");
    bgm_volume_button = document.getElementById("bgm_volume_button");

    shiftdown = 0;
    wordseikaisuu = 0;
    seikaisuu = 0;
    keysettei = 1;

    getCSV_jp_File();
    getCSV_hira_File();
    set_audio();

    skil_gaze.style.width = "0px";
    time_gaze_id.style.width = "0px";

    startButton.value = "スタート"
}

function getCSV_jp_File() {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "../csv/word.csv", true);
    xhr.send(null);
    xhr.onload = function() {
        wordList_jp = xhr.responseText.split(";");
    };
}

function getCSV_hira_File() {
    var xhr2 = new XMLHttpRequest();
    xhr2.open("get", "../csv/word_hiragana.csv", true);
    xhr2.send(null);
    xhr2.onload = function() {
        wordList_hiragana = xhr2.responseText.split(";");
    };
}

function on_mute() {
  if (mute == 0) {
    mute_button.src = "img/volume_off.png";
    audioBad.volume = 0;
    audioBGM.volume = 0;
    audioElem.volume = 0;
    audioAtk1.volume = 0;
    audioAtk2.volume = 0;
    audioAtk3.volume = 0;
    audioAtk4.volume = 0;
    audioWin.volume = 0;
    audioLose.volume = 0;
    audioTimeOver.volume = 0;
    mute = 1;
  } else {
    mute_button.src = "img/volume_on.png";
    audioBad.volume = 0.3;
    audioBGM.volume = 0.5;
    audioElem.volume = 0.3;
    audioAtk1.volume = 0.3;
    audioAtk2.volume = 0.3;
    audioAtk3.volume = 0.3;
    audioAtk4.volume = 0.3;
    audioWin.volume = 0.3;
    audioLose.volume = 0.3;
    audioTimeOver.volume = 0.3;
    mute = 0;
  }
}

function bgm_volume_up(){
  if (bgm_volume != 10) {
    bgm_volume++;
    audioBGM.volume = bgm_volume / 10;
    bgm_volume_button.src = "img/volume/v" + bgm_volume + ".png";
  }
}

function bgm_volume_down(){
  if (bgm_volume != 0) {
    bgm_volume--;
    audioBGM.volume = bgm_volume / 10;
    bgm_volume_button.src = "img/volume/v" + bgm_volume + ".png";
  }
}

function set_audio() {

  audioBGM = new Audio();
  audioBGM.src = "../audio/mangetunotikurin.mp3";
  audioBGM.volume = 0.5;

  audioBad = new Audio();
  audioBad.src = "../audio/bad_se.mp3";
  audioBad.volume = 0.3;

  audioElem = new Audio();
  audioElem.src = "../audio/se_ok.mp3";
  audioElem.volume = 0.3;

  audioAtk1 = new Audio();
  audioAtk1.src = "../audio/kaede_voice/atk1.mp3";
  audioAtk1.volume = 0.3;

  audioAtk2 = new Audio();
  audioAtk2.src = "../audio/kaede_voice/atk2.mp3";
  audioAtk2.volume = 0.3;

  audioAtk3 = new Audio();
  audioAtk3.src = "../audio/kaede_voice/atk3.mp3";
  audioAtk3.volume = 0.3;

  audioAtk4 = new Audio();
  audioAtk4.src = "../audio/kaede_voice/atk4.mp3"
  audioAtk4.volume = 0.3;

  audioWin  = new Audio();
  audioWin.src = "../audio/kaede_voice/victory.mp3";
  audioWin.volume = 0.3;

  audioLose  = new Audio();
  audioLose.src = "../audio/kaede_voice/lose.mp3";
  audioLose.volume = 0.3;

  audioTimeOver = new Audio();
  audioTimeOver.src = "../audio/kaede_voice/timeover.mp3";
  audioTimeOver.volume = 0.3;

}

function setvar() {
    startcount = 5;
    score = 0;
    downcount = 0;　 //倒した数
    gauge = 0; //必殺技ゲージ
    deadly = 0; //必殺技フラグ
    x = 0;
    flg = 0;
    missCount = 0;
    right_img_lock = 0;
    animation_random_state_number = 0;
    score_area.textContent = "0000";
    typeArea.textContent = "";
    typeArea2.textContent = "";
    wordArea_hiragana.textContent = "";
    wordArea_jp.textContent = "";

    img1.style.visibility = "hidden";
    img2.style.visibility = "hidden";
    img3.style.visibility = "hidden";
    img4.style.visibility = "hidden";
    img5.style.visibility = "hidden";

    startButton.style.visibility = "hidden";
    ranking_item.style.visibility = "hidden";
    skil_gaze.style.width = "0px";
}

function onStartButtonClick() {
    setvar();
    space_flag = 1;
    messageArea.textContent = "スペースキーでスタート";
}

function space_start() {
    condition.textContent = "";
    animation(0);
    space_flag = 0;
    startcount--;
    if (startcount == 4) {
        messageArea.textContent = "Ready...";
        setTimeout("space_start()", 1000);
    } else if (startcount == 0) {
        messageArea.textContent = "GO!";
        startTyping();
    } else {
        messageArea.textContent = startcount;
        setTimeout("space_start()", 1000);
    }

}

// 開始
function startTyping() {
    audioBGM.play();

    game_flag = 1;
    game_messsage.style.visibility = "hidden";

    timeLeft = timeLimit;

    nextWord();
    countDown();
    timer1 = setInterval("countDown()", 1000);

}

// 終了
function stopTyping() {
    clearInterval(timer1);
    gauge = 0;
    deadly = 0;
    game_flag = 0;
    wordChars = [];

    audioBGM.pause();
    audioBGM.currentTime = 0;
    player_img.className = "kaede_right_img";
    teki_img.className = "left_img";
    game_messsage.style.visibility = "visible";
    startButton.style.visibility = "visible";
    ranking_item.style.visibility = "visible";
    messageArea.textContent = "Score: " + score + "■倒した数" + downcount + "■ミスタイプ数" + missCount;
    condition.textContent = "";
    typeArea.textContent = "";
    typeArea2.textContent = "";
    wordArea_hiragana.textContent = "";
    wordArea_jp.textContent = "";
    time_gaze_id.style.width = 0 + "px";
    img1.style.visibility = "hidden";
    img2.style.visibility = "hidden";
    img3.style.visibility = "hidden";
    img4.style.visibility = "hidden";
    img5.style.visibility = "hidden";

    input_item.style.visibility = "visible";
    $('.game_div').css({
        "border": "3px solid #ffcf00"
    });
    clearInterval(time);

}

function rank_push() {

    username = document.ranking.username.value;

    if (username.match(/"/) || username.match(/'/)) {

    } else {
      mode = "1";
      $.ajax({
          type: 'POST',
          url: 'rank_push.php',
          data: {
              'name': username,
              'score': score,
              'count': downcount,
              'miss': missCount,
              'mode': mode
          },
          success: function(data) {
              document.getElementById("debug").innerHTML = "FOOOOOOOOOOOOOOOOO";
              alert("ランキング登録しました。");
          }
      });
    }
}


// 次の単語を表示
function nextWord() {

    //テスト変数
    tableichi = 0;
    ichi = 0;
    inputtype = "";
    nyuuryoku = "";
    nowtype = "";

    charIndex = 0;
    var random = Math.floor(Math.random() * (wordList_hiragana.length - 1));

    wordArea_hiragana.textContent = wordList_hiragana[random];
    wordArea_jp.textContent = wordList_jp[random];

    //ひらがなを変換
    worddata = townro_machange(wordList_hiragana[random], henkan);
    ro_ma = worddata[0];
    jword = worddata[1];
    word = worddata[2];

    typeArea.textContent = "";
    wordChars = ro_ma.toUpperCase().split('');
    textColor2 = ro_ma;
    typeArea2.textContent = textColor2;
    x = 0;
    moveImg();
}

function moveImg() {
    //画像移動

    if (flg == 1) {
        //flgが1ならば、処理を中断
        return;
    } else {
        //flgがゼロならば、flgに１を代入して処理を継続
        flg = 1;
    }

    time = setInterval(function() {

        //x座標に+1
        if (x < 500) {
            x += 0.8;
        } else if (x >= 500) {
            audioTimeOver.currentTime = 0;
            audioTimeOver.play();
            if(right_img_lock == 0){
              animation(5);
              setTimeout("animation(0)", 300);
            }
            $('.game_div').css({
                "border": "3px solid #e24408"
            });
            gauge = 0;
            skil_gaze.style.width = gauge + "px";
            nextWord();
        }

        //変数ｘの値をCSSに適用
        time_gaze_id.style.width = x + "px";

    }, 10);
}

function moziHenkan(e) {

    data = new Array(16);

    data[0] = jword;
    data[1] = word;
    data[2] = tableichi;
    data[3] = ichi;
    data[4] = inputtype;
    data[5] = nyuuryoku;
    data[6] = "";
    data[7] = seikaisuu;
    data[8] = missCount;
    data[9] = wordseikaisuu;
    data[10] = henkan;
    data[11] = ro_ma;
    data[12] = keysettei;
    data[13] = shiftdown;
    data[14] = keydowntable1;
    data[15] = keydowntable2;

    var tempseikai = seikaisuu; //正解判定する為にタイプ判定前の正解数を保持

    townmojiretuhenkan(e, data); //入力方法自動判別関数呼び出し、引数にはeと先ほど作ったdata配列を渡す。

    //配列データを個々のデータに入れ直す

    jword = data[0];
    word = data[1];
    tableichi = data[2];
    ichi = data[3];
    inputtype = data[4];
    nyuuryoku = data[5];
    nowtype = data[6];
    seikaisuu = data[7];
    missCount = data[8];
    wordseikaisuu = data[9];
    henkan = data[10];
    townro_machange
    ro_ma = data[11];
    shiftdown = data[13];
    if (game_flag == 1) {
        if (seikaisuu != tempseikai) {
            hantei();
        } else {
            gauge = 0;
            skil_gaze.style.width = gauge + "px";
            audioBad.currentTime = 0;
            audioBad.play();
            missCount++;
            animation_random_state_number = 0;
            if(right_img_lock == 0){
              animation(5);
              setTimeout("animation(0)", 300);
            }
            $('.game_div').css({
                "border": "3px solid #e24408"
            });
        }
    }

}



// 残り時間を計測
function countDown() {
    time_area.textContent = timeLeft + " sec.";
    if (timeLeft <= 0) {
        stopTyping();
        return;
    }
    timeLeft--;
}


document.onkeyup = function(e) {
    var temp;
    if ((temp = towncheckshift(e)) === 0) {
        shiftdown = 0;
    }
}

// キー押下時の処理
document.onkeydown = function(e) {
    var keyStr;

    if (e.keyCode == 32) {
        if (space_flag == 1) {
            space_start();
        }
    } else if (e.keyCode == 27) {
        if (game_flag == 1) {
            stopTyping();
            onStartButtonClick();
        }
    } else {
        moziHenkan(e);
    }
};

function hantei() {
    if (game_flag == 1) {
        //正解文字を入力した時
        audioElem.currentTime = 0;
        audioElem.play();

        score = score + 2;
        score_area.textContent = ('000' + score).slice(-4);

        charIndex++;

        typeArea.textContent = typeArea.textContent + inputtype;
        textColor1 = ro_ma.substring(0, charIndex);

        textColor2 = ro_ma.substring(charIndex, ro_ma.length);

        //入力前の文字を表示
        typeArea.textContent = textColor1;
        //入力後の文字を表示
        typeArea2.textContent = textColor2;

        $('.game_div').css({
            "border": "3px solid #ffcf00"
        });

        gauge = gauge + 0.5;
        skil_gaze.style.width = gauge + "px";
        if (gauge == 25) {
            animation_random_state_number++;
            if(right_img_lock == 0){
              animation(animation_random_state(animation_random_state_number));
              setTimeout("animation(0)",1000);
            }
            timeLeft++;
        } else if (gauge == 50) {
            animation_random_state_number++;
            if(right_img_lock == 0){
              animation(animation_random_state(animation_random_state_number));
              setTimeout("animation(0)",1000);
            }
            timeLeft++;
        } else if (gauge >= 100) {
            timeLeft = timeLeft + 3;
            score = score + 500;
            gauge = 0;
            skil_gaze.style.width = gauge + "px";
            animation_random_state_number++;
            if(right_img_lock == 0){
              animation(animation_random_state(animation_random_state_number));
              setTimeout("animation(0)",1000);
            }
        }

        if (tableichi >= word.length) {
            score = score + (word.length * 7);
            score_area.textContent = ('000' + score).slice(-4);
            downcount++;
            //0.2秒間空白文字を表示してから次の文字を表示する。
            textColor1 = "　";
            textColor2 = "　";
            wordArea_hiragana.textContent = "";
            wordArea_jp.textContent = "　"
            typeArea.textContent = textColor1;
            typeArea2.textContent = textColor2;
            if(right_img_lock == 0){
              animation(animation_random_state(animation_random_state_number));
              setTimeout("animation(0)",1000);
            }
            setTimeout("nextWord();", 200);

        }
    }
}

//アニメーション管理用
//■0:立ち絵
//■1:攻撃1
//■2攻撃2
//■3:攻撃3
//■4:攻撃4
//■5:ミス
//■6:ボーナス1
//■7:ボーナス2
//■8:ボーナス3
function animation(motion_number){
  switch (motion_number) {
      case 0:
        right_img_lock = 0;
        player_img.className = "kaede_right_img_defalt";
        teki_img.className = "left_img_default";
      break;
      case 1:
        audioAtk1.currentTime = 0;
        audioAtk1.play();
        player_img.className = "kaede_right_img_atk";
        teki_img.className = "left_img_dmg";
        right_img_lock = 1;
      break;
      case 2:
        audioAtk2.currentTime = 0;
        audioAtk2.play();
        player_img.className = "kaede_right_img_atk2";
        teki_img.className = "left_img_dmg";
        right_img_lock = 1;
      break;
      case 3:
        audioAtk3.currentTime = 0;
        audioAtk3.play();
        player_img.className = "kaede_right_img_atk3";
        teki_img.className = "left_img_dmg";
        right_img_lock = 1;
      break;
      case 4:
        audioAtk4.currentTime = 0;
        audioAtk4.play();
        player_img.className = "kaede_right_img_atk4";
        teki_img.className = "left_img_dmg";
        right_img_lock = 1;
      break;
      case 5:
        player_img.className = "kaede_right_img_miss";
        right_img_lock = 1;
      break;
      case 6:
      break;
      case 7:
      break;
      case 8:
      break;
    default:
    break;
  }
}

function animation_random_state(state){
  if(state == 0){
    var animation_random = Math.floor(Math.random() *2) +1;
  }else if(state == 1){
    var animation_random = Math.floor(Math.random() *3) +1;
  }else if(state == 2){
    var animation_random = Math.floor(Math.random() *4) +1;
  }else if(state >= 3){
    var animation_random = Math.floor(Math.random() *3) +2;
  }
  return animation_random;
}
