<!DOCTYPE html>
<html>

<head>
  <title>プライマル×バクテリア*ステップ</title>
  <meta charset="utf-8">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <link rel="stylesheet" type="text/css" href="css/main.css" media="all">

</head>

<body>
  <div class="head_menu">
    <a id="menubutton" href="../">HOME</a>
    <a id="menubutton" href="../ranking_view.php" target="_blank">ランキング</a>
    <a id="menubutton" href="list.html">ワード一覧</a>
  </div>

  <div class="main">
    <div class="content">

<?php

  $jp   = htmlspecialchars($_POST['jp'], ENT_QUOTES, 'UTF-8');

  $word_list = array(";"," ","　","script&"); // 単語リスト

  foreach ($word_list as $word){
      if (strpos($jp, $word) !== false){
          // NGワードに該当
          echo "<p>死んで来い</p>";
      } else {
        $flag1 = 1;
      }
  }
  $jp = $jp . ";";

  $kana = htmlspecialchars($_POST['kana'], ENT_QUOTES, 'UTF-8');

  $kana = mb_convert_kana($kana, "aHc", "UTF-8");

  foreach ($word_list as $word){
      if (strpos($kana, $word) !== false){
          // NGワードに該当
          echo "<p>死んで来い</p>";
      } else {
        $flag2 = 1;
      }
  }
  $kana = $kana . ";";


  if ($flag1 == 1 && $flag2 == 1) {
    $tuiki_jp = fopen("../csv/word.csv", "a");
    fwrite($tuiki_jp, $jp);
    fclose($tuiki_jp);


    $tuiki_kana = fopen("../csv/word_hiragana.csv", "a");
    fwrite($tuiki_kana, $kana);
    fclose($tuiki_kana);


    echo "登録しました。";

    echo "<a href=\"./\">追加画面へ</a>";
  } else {
    echo "<a href=\"./\">追加画面へ</a>";
  }


 ?>
 </div>
 </div>

</body>

</html>
