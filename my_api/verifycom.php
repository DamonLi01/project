<?php
session_start();
$token = isset($_REQUEST["token"]) ? $_REQUEST["token"] : null;
$servtoken = isset($_SESSION["token"]) ? $_SESSION["token"] : null;
if ($token != $servtoken || $servtoken == null) { //如果令牌不匹配，或者$_SESSION["token"]为null
    die(json_encode(array("msg" => "没有登录，为你跳转到登录页面", "uid" => 0)));//终止程序，打印信息
}
//令牌是通过