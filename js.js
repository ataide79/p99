var api=window.webkitSpeechRecognition;
var reconhecimento=new api();
var conteudo;
var img;

function iniciar(){
    reconhecimento.start();

}
reconhecimento.onresult=function(evento){
    conteudo=evento.results[0][0].transcript.toLowerCase;
if(conteudo=="selfie"){
    fala();
}
}
function fala(){
    var api2=window.speechSynthesis;
    Webcam.attach(camera);
    var dfal="tirando sua selfi";
    var falaconvertida=new SpeechSynthesisUtterance(dfal);
    api2.speak(falaconvertida);

    setTimeout(function()  {
        img="selfi 1";
        var dfal="tirando sua selfi em 5 segundos";
    var falaconvertida=new SpeechSynthesisUtterance(dfal);
    api2.speak(falaconvertida);
    tira();

    }, 5000);
    setTimeout(function()  {
        img="selfi 2";
        var dfal="tirando sua selfi em 10 segundos";
    var falaconvertida=new SpeechSynthesisUtterance(dfal);
    api2.speak(falaconvertida);
    tira();

    }, 10000);
    setTimeout(function()  {
        img="selfi 3";
        var dfal="tirando sua selfi em 15 segundos";
    var falaconvertida=new SpeechSynthesisUtterance(dfal);
    api2.speak(falaconvertida);
tira();
    }, 15000);
}
var camera=document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_formmat:"jpg",
    jpg_quality:90
});
function tira(){
    Webcam.snap(function(
        foto
    ){
        if(img=="selfi 1"){
            document.getElementById("um").src=foto;
        }
        if(img=="selfi 2"){
            document.getElementById("dois").src=foto;
        }
        if(img=="selfi 3"){
            document.getElementById("tres").src=foto;
        }
    })
}