<?php
$tmpname=$_FILES["myfile"]["tmp_name"];
$filedir="./public/attachment/".time().".jpg";
$res=move_uploaded_file($tmpname,$filedir);//接收文件
if($res){
    echo json_encode(array("code"=>"ok","msg"=>$filedir));
}else{
    echo json_encode(array("code"=>"error","msg"=>"文件上传失败！"));
}
?>