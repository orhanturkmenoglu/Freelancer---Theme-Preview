function gonder(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var number=document.getElementById("number").value;
    var mesaj=document.getElementById("mesaj").value;

    
    document.getElementById("sonuc").innerHTML="Mesajınız alınmıştır en kısa sürede size dönüş yapılacaktır! ";
    document.getElementById("sonuc").style.display="block";
    document.getElementById("sonuc").style.border="1px solid green";
}