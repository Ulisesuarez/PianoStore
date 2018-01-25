window.onload = function() {
localStorage.clear();
var celdaNombre;
var celdaPrecio;
var tablaCompra=document.getElementById("tabla")
var objetoProducto={tipo:"",precio:0};
console.log(localStorage.getItem("indiceArticulo"));
if(localStorage.getItem("indiceArticulo")==null){
console.log("porqueeeeee");

localStorage.setItem("indiceArticulo",document.getElementById("hiddenIndex").innerHTML);
}
console.log(localStorage.getItem("indiceArticulo"));
console.log(tablaCompra);
console.log(document.getElementById("result"));
console.log("are yo alive");
console.log(sessionStorage.getItem("balu·")==null);



usar();
// Check browser support


   


  };

function botonComprar(idclick){
    objetoProducto={tipo:"",precio:0};
    console.log(document.getElementById(idclick).parentNode.parentNode.childNodes);
    var divArticulo=document.getElementById(idclick).parentNode.parentNode.childNodes;
    for (var indice = 0; indice < divArticulo.length; indice++){
    
        var currentChild = divArticulo[indice];
        
        if (currentChild.firstElementChild){
            console.log("HOLAA");
            
            if (RegExp(/item.*/g).test(currentChild.firstElementChild.className)){   
                console.log("sioque");
                objetoProducto.tipo=currentChild.firstElementChild.id;
                
                console.log(objetoProducto);
            };
            if (currentChild.firstElementChild.firstElementChild){
                
                if (currentChild.firstElementChild.firstElementChild.className=='precioNum'){  
                    console.log("sEEE");
                    objetoProducto.precio=1+parseFloat(currentChild.firstElementChild.firstElementChild.innerHTML.replace('.',''))
                
                    console.log(objetoProducto);
                };
            };
        };
    
     };
     
     var articulo="articulo";
     var ObjetoString=objetoProducto.tipo+"|"+String(objetoProducto.precio);
     console.log(localStorage.getItem("indiceArticulo"));
     if (sessionStorage.getItem(articulo+localStorage.getItem("indiceArticulo"))==null){
        console.log("if");
        console.log(localStorage.getItem("indiceArticulo"));
        sessionStorage.setItem(articulo+localStorage.getItem("indiceArticulo"),ObjetoString);
        
     }
     else{
         console.log("else");
         
         document.getElementById("hiddenIndex").innerHTML=parseInt(document.getElementById("hiddenIndex").innerHTML)+1;
         sessionStorage.setItem(articulo+String(document.getElementById("hiddenIndex").innerHTML),ObjetoString)
         /*console.log(String(parseInt(localStorage.getItem("indiceArticulo"))+1));
         localStorage.setItem("indiceArticulo",String(parseInt(localStorage.getItem("indiceArticulo"))+1));
         
         console.log(localStorage.getItem("indiceArticulo"));
         sessionStorage.setItem(articulo+localStorage.getItem("indiceArticulo"),ObjetoString);*/

     };
     
     location.reload();   
   
};



function usar(){
    var costeTotal=0;
    document.getElementById("hiddenIndex").innerHTML=sessionStorage.length;
    var articulo="articulo";
    var tablaCompra=document.getElementById("tabla")
    console.log(tablaCompra.childNodes);
    
    console.log(sessionStorage);
    var indice=1;
    for (var art in sessionStorage){
        if(art!="length" && art!="clear" && art!="setItem" && art!="getItem" && art!="removeItem" && art!="key"){
   //for (var indice = 0; indice < sessionStorage.length; indice++){
    //console.log(articulo+String(indice));
    console.log()
    console.log(art);
    if (tablaCompra.childNodes[1].childNodes[indice]==null){

        var rowArticulo = tablaCompra.insertRow(indice-1);
    }else{

        var rowArticulo = tablaCompra.childNodes[1].childNodes[indice];
    }
    

    if (sessionStorage.getItem(art)!=null){
    var ObjetoString = sessionStorage.getItem(art);
    console.log(ObjetoString);
    var NombreItem=RegExp(/.*\|/g).exec(ObjetoString)[0].slice(0,-1);
    var precioItem=ObjetoString.slice(NombreItem.length+1);
     
    console.log(NombreItem);
     console.log(precioItem);
     console.log(sessionStorage);
    
   var celdaNombre = rowArticulo.insertCell(0);
   var celdaPrecio = rowArticulo.insertCell(1);
   var celdaCantidad = rowArticulo.insertCell(2);
   var celdaEliminar = rowArticulo.insertCell(3);
   costeTotal=costeTotal+parseFloat(precioItem);
   celdaNombre.innerHTML = NombreItem;              
   
   celdaPrecio.innerHTML =precioItem+" €";  
   celdaEliminar.appendChild(createButtonImage());
   
    };
    indice++;
    };
};
    
    var rowTotal = tablaCompra.insertRow(sessionStorage.length);
    var celdaTot=rowTotal.insertCell(0);
    var  celdaTotal = rowTotal.insertCell(1);
    celdaTot.innerHTML="TOTAL:"
    celdaTotal.innerHTML=costeTotal+" €";

    /* var ObjetoString = sessionStorage.getItem(articulo+localStorage.getItem("indiceArticulo"));
    console.log(ObjetoString);
    var NombreItem=RegExp(/.*\|/g).exec(ObjetoString)[0].slice(0,-1);
    var precioItem=ObjetoString.slice(NombreItem.length+1);
     console.log(NombreItem);
     console.log(precioItem);
     console.log(sessionStorage);
   var rowArticulo = tablaCompra.insertRow(parseInt(articulo+localStorage.getItem("indiceArticulo"))); 
   var celdaNombre = rowArticulo.insertCell(0);
   var celdaPrecio = rowArticulo.insertCell(1);
   
   celdaNombre.innerHTML = NombreItem;              // Create a <li> node
   
   celdaPrecio.innerHTML =precioItem+" €";*/
}

function createButtonImage() {
    var x = document.createElement("BUTTON");
    //x.setAttribute("src", "imagenes/png/eliminar.png");
    x.setAttribute("id","botElim")
    x.setAttribute("alt", "eliminar");
    x.setAttribute("title", "eliminar");
    x.setAttribute("onclick","eliminarItem(this)")
    var imagen=document.createElement("IMG")
    imagen.setAttribute("src","imagenes/png/eliminar.png");
    imagen.setAttribute("id","imgElim")
    x.appendChild(imagen);
    //x.setAttribute("width", "5");
    //x.setAttribute("height", "228");
    
    return x;
}

function eliminarItem(fila){
    location.reload(); 
    console.log(fila.parentNode.previousSibling.previousSibling.innerHTML);
    console.log(sessionStorage);

    for (var art in sessionStorage){
        if(art!="length" && art!="clear" && art!="setItem" && art!="getItem" && art!="removeItem" && art!="key"){

            if(sessionStorage.getItem(art).includes(fila.parentNode.previousSibling.previousSibling.previousSibling.innerHTML)){
                sessionStorage.removeItem(art);
            };
        };
    };
    //sessionStorage.removeItem("articulo"+String(fila.parentNode.parentNode.rowIndex));
    console.log(sessionStorage);
    console.log(fila.parentNode.parentNode.parentNode);
    console.log("ERES NULL O QUE TE PASA?")
    console.log(fila.parentNode.parentNode.parentNode.parentNode);
    
    for (var ind = 0; ind < fila.parentNode.parentNode.parentNode.rows.length; ind++){
        console.log("eres tabla ?");
        console.log(fila.parentNode.parentNode.parentNode.parentNode);
        console.log(fila.parentNode.parentNode.parentNode.rows);

        fila.parentNode.parentNode.parentNode.parentNode.deleteRow(ind);
        //console.log(fila.parentNode.parentNode.parentNode.rows);
        };
    location.reload();   
    usar();
    console.log(fila.parentNode.parentNode);
    console.log(fila.parentNode.parentNode.rowIndex);
    console.log(sessionStorage);
    location.reload();

}
   // var car = {type:"Fiat", model:"500", color:"white"};(currentChild.firstElementChild.className .test(RegExp('item/.*')))

/** 
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}*/
   