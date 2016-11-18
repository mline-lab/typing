<?php

  $name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
  if ($name == "") {
    $name = "名無し";
  } elseif (strpos($name,'script&') !== false) {
    $name = "このサイトに攻撃を仕掛けた愚か者";
  } elseif (strpos($name,'document.cookie') !== false) {
    $name = "このサイトに攻撃を仕掛けた愚か者";
  }

  $score = $_POST['score'];

  $count = $_POST['count'];

  $miss = $_POST['miss'];

  $mode = $_POST['mode'];

  $dsn = 'mysql:dbname=typing;host=localhost';
  $user = 'root';
  $password = 'manaki079';

try{
    $dbh = new PDO($dsn, $user, $password);

    if ($dbh == null){
        //接続失敗
    }else{
        //接続成功
    }

    $dbh->query('SET NAMES utf8');

    $sql = 'insert into score (name, score, count,miss, mode) values (?, ?, ?, ?, ?)';
    $stmt = $dbh->prepare($sql);
    $flag = $stmt->execute(array($name, $score, $count, $miss, $mode));

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

 ?>
