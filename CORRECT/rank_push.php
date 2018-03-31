<?php
$name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
if ($name == "") {
  $name = "名無し";
} elseif (strpos($name,'script&') !== false) {
  $name = "このサイトに攻撃を仕掛けた愚か者";
}

//セッションスタート
    session_start();



  //データの受け取り
  $score = $_SESSION[key_score ];
  $count      = $_SESSION[key_downcount];
  $miss        = $_SESSION[key_missCount];
  $mode      = $_SESSION[key_mode];
  $difficulty = $_SESSION[key_difficulty_check];

  //セッションデータ破棄
  session_destroy ();

  $dsn = 'mysql:dbname=lostcolor;host=localhost';
  $user = 'mline';
  $password = 'manaki079';

try{
    $dbh = new PDO($dsn, $user, $password);

    if ($dbh == null){
        //接続失敗
    }else{
        //接続成功
    }

    $dbh->query('SET NAMES utf8');

    $sql = 'insert into score (name, score, count,miss, mode, difficulty) values (?, ?, ?, ?, ?, ?)';
    $stmt = $dbh->prepare($sql);
    $flag = $stmt->execute(array($name, $score, $count, $miss, $mode, $difficulty));

    if ($flag){
        //追加成功
    }else{
        //失敗
    }

    }catch (PDOException $e){
      print('Error:'.$e->getMessage());
      die();
    }

$dbh = null;

echo "登録完了";

echo "<script type='text/javascript'>window.close();</script>";

 ?>
