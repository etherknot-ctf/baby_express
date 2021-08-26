# baby_express

# ref
https://expressjs.com/ja/starter/hello-world.html
https://www.i-ryo.com/entry/2020/04/16/215205


```
express書き方
テンプレート読み方

<script>alert(1)</script>
属性でjsが呼び出せること
<img src="w3html.gif" onload="loadImage()" width="100" height="132">

<script>
function loadImage() {
    alert("Image is loaded");
}
</script>
属性xss
<img src=x onerror=alert(1)>

スキーマ
<a href='javascript:alert(1)'>

dom base
document.write('<img src=x onerror=alert(1)></img>');
hashを使ってみる

location.hrefのdom xss