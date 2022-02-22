var current_link = "this stream link";
var id = "this video id :3";


function download(){
 var appWindow = window.open("th://xdown/?link="+current_link,"blank");
 setTimeout( function () {
 if (appWindow) {
 appWindow.location ="https://play.google.com/store/apps/details?id=com.thite.apyarsone"; } },1000);
 }




function copy(){
        var url = window.location.href
        document.getElementById('copy').innerHTML = "<div class='div col-5 mt-2'>"+ url+"</div>";
}


var pn = "dd" ;

//prompt("အောကားကြည့်မယ်ဆိုရင် \n ၁၁၂၂ ကို အင်းဂလိပ် လို ရိုက်ပေးပါ", "ဒီမှာရိုက်ပါ");



if (pn != "leepae"){
var d = new URL(location).searchParams.get("path");

} else{alert("ပတ်၀က်မှားရိုက်ခဲ့သည်  \n ထွက်ပြီးပြန်လာပါ ")}


 id = d;
var encode_url = encodeURI("https://www.xvideos.com/embedframe/"+d);
/*    34.123. is  my api from gcloud server
     if you need one  contact :thitethite080@gmail.com

*/




var url = "https://api.allorigins.win/get?url="+encode_url;

fetch(url)
.then((res) => {

    return res.json();

  })

  .then((gen1) => {

var data = gen1.contents;
current_link = data.split("html5player.setVideoUrlLow('")[1].split("'")[0];;
alert(current_link);



//alert(JSON.stringify(data));
var format = `<link href="https://vjs.zencdn.net/7.15.4/video-js.css" rel="stylesheet" /><link rel="stylesheet" href="style.css">`
+`<video src="`
+current_link+`"`
+` id="my-video"`
+` class="video-js box col float-right"`
+` controls`
+` preload="auto"`
+` width="640"`
+` height="264"`
+` poster="MY_VIDEO_POSTER.jpg"`
+` type="mp4"`
+` data-setup="{}" ></video>`
+`<div class="w-100"></div>
<div class="child-1 col">
<button
class="button btn0" id="download"  role="button">Download</button>
</div>
<div class="child-2 col">
<button class="button btn1 " id='oia' role="button">Open In App</button>
</div><br>
  <script src="https://vjs.zencdn.net/7.15.4/video.min.js"></script>
`;



                                                                      
    document.getElementById("vdb").innerHTML = format;
    document.getElementById("download").addEventListener("click",download);
    document.getElementById("oia").addEventListener("click", _ => {

              var appWindow = window.open("th://xmovie/?url="+id,"blank");
 setTimeout( function () {
 if (appWindow) {
 appWindow.location ="https://play.google.com/store/apps/details?id=com.thite.apyarsone"; } },1000);



      });

//document.getElementById("vdb").innerHTML =format;

  });
