"use strict"; 
var nombre="",
 forma = document.getElementById("num"),
salidaBizcochos = document.getElementById("salidaNum");
nombre=prompt("Inserta tu nombre");
function cambiaColor(){ 
    var i1,i2,i3,i4,i5 
    for (i1=0;i1<document.num.k1.length;i1++){ 
       if (document.num.k1[i1].checked) 
          break; 
    } 
 for (i2=0;i2<document.num.k2.length;i2++){ 
       if (document.num.k2[i2].checked) 
          break; 
    } 
    for (i3=0;i3<document.num.k3.length;i3++){ 
       if (document.num.k3[i3].checked) 
          break; 
    } 
 for (i4=0;i4<document.num.k4.length;i4++){ 
       if (document.num.k4[i4].checked) 
          break; 
    } 
    for (i5=0;i5<document.num.k5.length;i5++){ 
       if (document.num.k5[i5].checked) 
          break; 
    } 
var uno, dos, tres, cuatro,cinco;
var count=0;
uno=parseInt(document.num.k1[i1].value);
dos=parseInt(document.num.k2[i2].value);
tres=parseInt(document.num.k3[i3].value);
cuatro=parseInt(document.num.k4[i4].value);
cinco=parseInt(document.num.k5[i5].value);
if(uno==1){
 count=count+1;
}
if(dos==1){
 count=count+2
}
if(tres==1){
 count=count+4
}
if(cuatro==1){
 count=count+8
}
if(cinco==1){
 count=count+16
}
salidaNum.textContent = nombre + " tu numero es : "+count;
} 