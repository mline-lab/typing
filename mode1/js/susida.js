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

var imgList = ["img/kabi.png", "img/alc.png"];

//BGM
var audioBGM;
//タイプ音
var audioElem;
//タイプミス音
var audioBad;
//ボイス音
var audioNextVoice;
//必殺音
var audioSPcharge;
var audioSP;
//ハイスコアボイス
var audioNozomi;

// 時間制限
var timeLimit = 60;
var game_flag = 0;

var startcount;
var timer1;
var wordStr;
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
var deadly;
var random2;
var textColor1;
var textColor2;
var missCount;
var nextWeight;
var weightOut
    //画像移動
var time; //タイマーＩＤ用
var flg; //二重起動防止フラグ
var x; //ｘ座標

//ランキング
var username;

//
var mode;

var wordList_jp = new Array();
var wordList_hiragana = new Array();
//
var csv;



var worddata　 //3要素の配列。0番目に『文全体のローマ字』、 1番目に『ひらがなを単語毎に配列に入れたもの』、 2番目に『ローマ字を単語毎に配列に入れたもの』が入る

window.onload = function() {
    messageArea = document.getElementById("message");
    wordArea_jp = document.getElementById("word_jp");
    wordArea_hiragana = document.getElementById("word_hiragana");
    typeArea = document.getElementById("type_Before");
    typeArea2 = document.getElementById("type_After");
    startButton = document.getElementById("start-button");
    charge = document.getElementById("charge");
    deadlygauge = document.getElementById("deadly");
    image = document.getElementById("image");
    safe_img = document.getElementById("safe_img");
    rankButton = document.getElementById("rank-button");
    name_text = document.getElementById("name-text");
    form_ranking = document.getElementById("form_ranking");
    score_area = document.getElementById("score_area");

    side1 = document.getElementById("side1");
    side2 = document.getElementById("side2");

    nontan = document.getElementById("nontan");

    shiftdown = 0;
    wordseikaisuu = 0;
    seikaisuu = 0;
    keysettei = 1;


    image.style.visibility = "hidden";
    safe_img.style.visibility = "hidden";
    nontan.style.visibility = "hidden";
    form_ranking.style.visibility = "hidden";
    rankButton.style.visibility = "hidden";
    name_text.style.visibility = "hidden";
    safe_img.src = "img/apple.png";
    nontan.src = "img/nozomi_touka.png";

    getCSV_jp_File();
    getCSV_hira_File();
}

function getCSV_jp_File() {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "csv/word.csv", true);
    xhr.send(null);
    xhr.onload = function() {
        wordList_jp = xhr.responseText.split(";");
    };
}

function getCSV_hira_File() {
    var xhr2 = new XMLHttpRequest();
    xhr2.open("get", "csv/word_hiragana.csv", true);
    xhr2.send(null);
    xhr2.onload = function() {
        wordList_hiragana = xhr2.responseText.split(";");
    };
}




function set_audio() {

    audioBad = new Audio();
    audioBad.src = "audio/bad_se.ogg";

    audioNozomi = new Audio();
    audioNozomi.src = "audio/nozomi/nozomi_voice1.mp3";

    var rand = Math.floor(Math.random() * 3 + 1);

    if (rand == 1) {
        audioBGM = new Audio();
        audioBGM.src = "audio/zyunai.mp3";

        audioElem = new Audio();
        audioElem.src = "audio/syan.ogg";

        audioNextVoice = new Audio();
        audioNextVoice.src = "audio/voice2.ogg";

        audioSPcharge = new Audio();
        audioSPcharge.src = "audio/voice1.ogg";

        audioSP = new Audio();
        audioSP.src = "audio/voice3.ogg";

        document.getElementById("debug").textContent = "♪~純愛レンズ/東條 希(CV.楠田 亜衣奈)~";

    } else if (rand == 2) {
        audioBGM = new Audio();
        audioBGM.src = "audio/m.mp3";

        audioElem = new Audio();
        audioElem.src = "audio/se_ok.ogg";

        audioNextVoice = new Audio();
        audioNextVoice.src = "audio/voice_next.mp3";

        audioSPcharge = new Audio();
        audioSPcharge.src = "audio/voice_sp_charge.mp3";

        audioSP = new Audio();
        audioSP.src = "audio/voice_sp.mp3";

        document.getElementById("debug").textContent = "♪~M♭/加藤 恵(安野 希世乃)~";

    } else if (rand == 3) {

      audioBGM = new Audio();
      audioBGM.src = "audio/kouya.mp3";

      audioElem = new Audio();
      audioElem.src = "audio/syan.ogg";

      audioNextVoice = new Audio();
      audioNextVoice.src = "audio/voice2.ogg";

      audioSPcharge = new Audio();
      audioSPcharge.src = "audio/voice1.ogg";

      audioSP = new Audio();
      audioSP.src = "audio/voice3.ogg";

      document.getElementById("debug").textContent = "♪~輝夜の城で踊りたい(NOZOMI.MIX)東條 希(CV.楠田 亜衣奈)~";

    }

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
    score_area.textContent = "";
    typeArea.textContent = "";
    typeArea2.textContent = "";
    wordArea_hiragana.textContent = "";
    wordArea_jp.textContent = "";
    deadlygauge.textContent = "";
    image.style.visibility = "hidden";
    safe_img.style.visibility = "hidden";
    form_ranking.style.visibility = "hidden";
    rankButton.style.visibility = "hidden";
    name_text.style.visibility = "hidden";
    nontan.style.visibility = "hidden";
    side1.src = "img/side1.jpg";
    side2.src = "img/lside/mode1_side2_1.png";

}

// 3秒後に開始
function onStartButtonClick() {
    setvar();
    set_audio();
    startButton.style.visibility = "hidden";
    space_flag = 1;
    messageArea.textContent = "スペースキーでスタート";
}

function space_start() {
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
    audioBGM.volume = 0.3;

    game_flag = 1;

    image.style.visibility = "visible";
    safe_img.style.visibility = "visible";

    timeLeft = timeLimit;
    nextWord();
    countDown();
    timer1 = setInterval("countDown()", 1000);
    startButton.disabled = true;

}

function rank_push() {

    username = document.ranking.username.value;
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

// 終了
function stopTyping() {
    clearInterval(timer1);
    gauge = 0;
    deadly = 0;
    game_flag = 0;
    wordChars = [];
    if (score >= 3000) {
      side1.src = "img/good/good1.png";
      side2.src = "img/good/good2.png";
      audioNozomi.play();
    } else if (score <= 1999) {
      side1.src = "img/bad/bad1.png";
      side2.src = "img/bad/bad2.png";
    }
    audioBGM.pause();
    audioBGM.currentTime = 0;
    messageArea.textContent = "Score: " + score + "■倒した数" + downcount + "■ミスタイプ数" + missCount;
    typeArea.textContent = "";
    typeArea2.textContent = "";
    wordArea_hiragana.textContent = "";
    wordArea_jp.textContent = "";
    deadlygauge.textContent = "";
    charge.textContent = "";
    startButton.disabled = false;
    nontan.style.visibility = "hidden";
    image.style.visibility = "hidden";
    safe_img.style.visibility = "hidden";
    startButton.style.visibility = "visible";
    form_ranking.style.visibility = "visible";
    rankButton.style.visibility = "visible";
    name_text.style.visibility = "visible";
    $('.game_div').css({
        "border": "3px solid #ffcf00"
    });
    clearInterval(time);

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

    random2 = random;
    image.src = imgList[Math.floor(Math.random() * 2)];

    typeArea.textContent = "";
    wordChars = ro_ma.toUpperCase().split('');
    //extColor2 = wordList[random2];
    textColor2 = ro_ma;
    typeArea2.textContent = textColor2;
    x = 0;
    image.style.left = 0 + "px";

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
        if (x < 400) {
            x += 0.8;
        } else if (x >= 400) {
            nextWord();
        }

        //変数ｘの値をCSSに適用
        image.style.left = x + "px";

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
            if (deadly == 1) {
                //連打ゲージMAXの状態でミスした時（ゲージは初期化されない）
                charge.textContent = "●●●●●●●●●●";
            } else {
                //連打ゲージが0～9でミスした時（ゲージは初期化される）
                gauge = 0;
                charge.textContent = "○○○○○○○○○○";
            }
            audioBad.currentTime = 0;
            audioBad.play();
            side2.src = "img/lside/mode1_side2_1.png";
            missCount++;
            $('.game_div').css({
                "border": "3px solid #e24408"
            });
        }
    }

}



// 残り時間を計測
function countDown() {
    if (timeLeft <= 0) {
        stopTyping();
        return;
    }
    messageArea.textContent = timeLeft + " sec.";
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
    } else if (e.keyCode == 13) {
        if (deadly == 1 && game_flag == 1) {
            audioSP.currentTime = 0;
            audioSP.play();
            deadlygauge.textContent = "";
            deadly = 0;
            gauge = 0;
            charge.textContent = "○○○○○○○○○○";
            score++;
            downcount++;
            missCount--;
            score_area.textContent = score;
            textColor1 = "　";
            textColor2 = "　";
            wordArea_hiragana.textContent = "";
            wordArea_jp.textContent = "　"
            typeArea.textContent = textColor1;
            typeArea2.textContent = textColor2;

            setTimeout("nextWord();", 200);
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

        side2.src = "img/lside/mode1_side2_1.png";

        score = score + 2;
        score_area.textContent = score;
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

        if (gauge <= 10) {
            gauge = gauge + 1;
            switch (gauge) {
                case 1:
                    charge.textContent = "●○○○○○○○○○";
                    break;
                case 2:
                    charge.textContent = "●●○○○○○○○○";
                    break;
                case 3:
                    charge.textContent = "●●●○○○○○○○";
                    break;
                case 4:
                    charge.textContent = "●●●●○○○○○○";
                    break;
                case 5:
                    charge.textContent = "●●●●●○○○○○";
                    break;
                case 6:
                    charge.textContent = "●●●●●●○○○○";
                    break;
                case 7:
                    charge.textContent = "●●●●●●●○○○";
                    break;
                case 8:
                    charge.textContent = "●●●●●●●●○○";
                    break;
                case 9:
                    charge.textContent = "●●●●●●●●●○";
                    break;
                case 10:
                    charge.textContent = "●●●●●●●●●●";
                    break;
            }

            if (deadly == 0 && gauge == 10) {
                audioSPcharge.currentTime = 0;
                audioSPcharge.play();
                deadly = 1;
                timeLeft++;
                charge.textContent = "●●●●●●●●●●";
                deadlygauge.textContent = "必殺技が打てるぞ！";
            }
        }
        if (charIndex == wordChars.length) {
            audioNextVoice.currentTime = 0;
            audioNextVoice.play();
        }

        if (tableichi >= word.length) {
          side2.src = "img/lside/mode1_side2_3.png";
          score = score + (word.length * 7);
          score_area.textContent = score;
          downcount++;
          //0.2秒間空白文字を表示してから次の文字を表示する。
          textColor1 = "　";
          textColor2 = "　";
          wordArea_hiragana.textContent = "";
          wordArea_jp.textContent = "　"
          typeArea.textContent = textColor1;
          typeArea2.textContent = textColor2;

          setTimeout("nextWord();", 200);

        }
    }
}
