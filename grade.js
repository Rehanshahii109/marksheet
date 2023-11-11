function calculate(){
    var a= parseInt (document.getElementById('bookone').value);
    var b=parseInt (document.getElementById('booktwo').value);
    var c=parseInt(document.getElementById('bookthree').value);
    var d= parseInt (document.getElementById('bookfour').value);
    var e= parseInt (document.getElementById('bookfive').value);
if (a>100 || b>100 || c>100 || d>100 || e>100){
    alert("please enter correct value");
}
 else{
    var obtain=a+b+c+d+e;
    document.getElementById("obtain").innerHTML=obtain;
    var per=obtain/500*100;
    document.getElementById("per").innerHTML=per;
    if (a>40 && b>40 && c>40 && d>40 && e>40) {
        document.getElementById("remark").innerHTML="<span style='color:#292'>pass</span>";
    }
    else{
        document.getElementById("remark").innerHTML="<span style='color:red'>fail</span>";
    }
 }
 

 if (per>=80) {
    document.getElementById("grade").textContent="A";
 }
 else if (per>=70) {
    document.getElementById("grade").textContent="B";
 }
 else if (per>=60) {
    document.getElementById("grade").textContent="C";
 }
 else if (per>=50) {
    document.getElementById("grade").textContent="d";
 }
 else if (per>=40) {
    document.getElementById("grade").textContent="E";
 }
 else   {
    document.getElementById("grade").textContent="f";
 }

}