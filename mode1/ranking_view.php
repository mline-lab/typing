<!DOCTYPE html>
<html>
<head>
<title>プライマル×バクテリア*ステップ_ランキング</title>
<meta charset="utf-8">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<link rel="stylesheet" href="css/ranking.css" type="text/css">
<script src="js/jquery.pagination.js"></script>
<script>
var flag_mrp = 0;
var flag_moti = 0;
var flag_scriptkide = 0;
function mrp(){

  if (flag_mrp == 0) {
    $( "th:contains('MRP')" ).css( "background-color", "rgb(196, 255, 99)" );
    flag_mrp = 1;
  } else {
    $( "th:contains('MRP')" ).css( "background-color", "rgb(255, 255, 255)" );
    flag_mrp = 0;
  }

}
function moti(){

  if (flag_moti == 0) {
    $( "th:contains('もち')" ).css( "background-color", "rgb(196, 255, 99)" );
    flag_moti = 1;
  } else {
    $( "th:contains('もち')" ).css( "background-color", "rgb(255, 255, 255)" );
    flag_moti = 0;
  }
}

function scriptkide(){

  if (flag_scriptkide == 0) {
    $( "th:contains('このサイトに攻撃を仕掛けた愚か者')" ).css( "background-color", "rgb(196, 255, 99)" );
    flag_scriptkide = 1;
  } else {
    $( "th:contains('このサイトに攻撃を仕掛けた愚か者')" ).css( "background-color", "rgb(255, 255, 255)" );
    flag_scriptkide = 0;
  }
}

$(function(){
  $('tr#list').pagination({
      pager        : $('.pager'),
      prevText     : '＜',
      nextText     : '＞',
      firstText    : '≪',
      lastText     : '≫',
      viewNum      : 30,
      pagerNum     : 10,
      ellipsis     : true,
      linkInvalid  : true,
      goTop        : true,
      firstLastNav : true,
      prevNextNav  : false
  });
});

</script>
</head>
<body>

  <div class="main">
    <div>
      <div class="head">
        <a href="#" onclick="mrp();return false;">MRP強調</a>
        <a href="#" onclick="moti();return false;">もち強調</a>
        <a href="#" onclick="scriptkide();return false;">スクリプトキディ強調</a>
      </div>

      <div class="content">
        <table border="1" cellspacing="0" cellpadding="5" bordercolor="#333333">
          <tr>
            <th bgcolor="#81fcf1">順位</th>
            <th bgcolor="#81fcf1">名前</th>
            <th bgcolor="#81fcf1">スコア</th>
            <th bgcolor="#81fcf1">討伐数</th>
            <th bgcolor="#81fcf1">ミス数</th>
          </tr>
  <?php

  $dsn = 'mysql:dbname=typing;host=localhost';
  $user = 'root';
  $password = 'manaki079';

  $rank = 0;

  try{
      $dbh = new PDO($dsn, $user, $password);

      if ($dbh == null){
          //接続失敗
      }else{
          //接続成功
      }

      $dbh->query('SET NAMES utf8');

      $sql = 'SELECT * FROM score WHERE mode = 1 ORDER BY score DESC';
      $stmt = $dbh->query($sql);

      while($result = $stmt->fetch(PDO::FETCH_ASSOC)){
          $rank++;
          echo "<tr id=\"list\">";
          echo "<th>";
          echo ($rank);
          echo "<th class=\"name\">";
          echo($result['name']);
          echo "</th>";
          echo "<th>";
          echo($result['score']);
          echo "</th>";
          echo "<th>";
          echo($result['count']);
          echo "</th>";
          echo "<th>";
          echo($result['miss']);
          echo "</th>";
          echo "</tr>";
      }

      }catch (PDOException $e){
        print('Error:'.$e->getMessage());
        die();
      }

  $dbh = null;

   ?>
   </table>
   </div>

  <div class="pager"></div>
  <div class="pageNum">
    <span class="nownum"></span>/<span class="totalnum"></span>pages
  </div>

   </div>
  </div>
</body>
</html>
