window.onload = function() {
//localStorage.clear();
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



//if (document.title.innerHTML=="Compras"){
    usar();
//};



  };

function botonComprar(idclick){
    console.log("funcion botonComprar");
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
         console.log(sessionStorage);
         /*console.log(String(parseInt(localStorage.getItem("indiceArticulo"))+1));
         localStorage.setItem("indiceArticulo",String(parseInt(localStorage.getItem("indiceArticulo"))+1));
         
         console.log(localStorage.getItem("indiceArticulo"));
         sessionStorage.setItem(articulo+localStorage.getItem("indiceArticulo"),ObjetoString);*/

     };
     
    location.reload();   
    console.log("______FIN funcion botonComprar______");
};



function usar(){
    console.log("______INICIO funcion usar______");
    var costeTotal=0;
    document.getElementById("hiddenIndex").innerHTML=sessionStorage.length;
    var articulo="articulo";
    var tablaCompra=document.getElementById("tabla");
    console.log(document.getElementById("title").innerText);
    console.log(document.getElementById.innerText=='Compras');
        if (tablaCompra!=null){
        console.log(tablaCompra.childNodes);
        };
    console.log(sessionStorage);
    var indiceCarro=0;
/*   for (var art in sessionStorage){
        if(art!="length" && art!="clear" && art!="setItem" && art!="getItem" && art!="removeItem" && art!="key"){
   //for (var indice = 0; indice < sessionStorage.length; indice++){
    //console.log(articulo+String(indice));
    console.log(art)
    console.log(art);*/
    var registroCarro=[];
for (var articuloActual in sessionStorage){
        if(articuloActual!="length" && articuloActual!="clear" && articuloActual!="setItem" && articuloActual!="getItem" && articuloActual!="removeItem" && articuloActual!="key"){
	
            var cantidadArticulos =0;
             

	        for (var articulo in sessionStorage){
                console.log(articulo);
        		if(articulo!="length" && articulo!="clear" && articulo!="setItem" && articulo!="getItem" && articulo !="removeItem" && articulo!="key"){
                    console.log(articuloActual==articulo)
                    console.log(sessionStorage.getItem(articuloActual)==sessionStorage.getItem(articulo));
	                if (sessionStorage.getItem(articuloActual)==sessionStorage.getItem(articulo)){
                        console.log(cantidadArticulos);
                        cantidadArticulos++;
                        console.log(cantidadArticulos);
                    };
                };
            };        
            console.log(registroCarro.indexOf(articuloActual));
             var obit={nombre:sessionStorage.getItem(articuloActual),cantidad:cantidadArticulos}
            if (registroCarro.indexOf(sessionStorage.getItem(articuloActual))==-1){
                console.log(obit.nombre);
                registroCarro.push(obit.nombre);
                registroCarro.push(obit.cantidad)
                console.log("micarro");
                console.log(registroCarro);
            };
        };
};

for (var i=1;i<(registroCarro.length/2)+1;i++){
    console.log(i);
    console.log(registroCarro.length/2);

   if (tablaCompra!=null && tablaCompra.childNodes[1].childNodes[i]==null ){
       console.log("FLAG La fila no existe");
       console.log(tablaCompra.childNodes[1].childNodes[i]);
       console.log(i);
       console.log(tablaCompra.childNodes[1].childNodes);
       var rowArticulo = tablaCompra.insertRow(i-1);
       console.log(tablaCompra.childNodes[1].childNodes);
       console.log(tablaCompra.childNodes[1].childNodes[i-1]);
       console.log
   }else{

    if(tablaCompra!=null){
       var rowArticulo = tablaCompra.childNodes[1].childNodes[i];};
   };
   
     
    console.log(indiceCarro);
    console.log(registroCarro[indiceCarro]);

    

    if (typeof(registroCarro[indiceCarro])== 'string'){
    var ObjetoString = registroCarro[indiceCarro]
    console.log(registroCarro[indiceCarro]);
    
    var NombreItem=RegExp(/.*\|/g).exec(ObjetoString)[0].slice(0,-1);
    var precioItem=ObjetoString.slice(NombreItem.length+1);
     
    console.log(NombreItem);
    console.log(precioItem);
    console.log(sessionStorage);
    if(tablaCompra!=null){
   var celdaEliminar = rowArticulo.insertCell(0);
   var celdaNombre = rowArticulo.insertCell(1);
   var celdaPrecio = rowArticulo.insertCell(2);
   var celdaCantidad = rowArticulo.insertCell(3);
   var celdaSuma = rowArticulo.insertCell(4);
   
   costeTotal=costeTotal+parseFloat(precioItem)*registroCarro[indiceCarro+1];
   celdaNombre.innerHTML = NombreItem;              
   
   celdaPrecio.innerHTML =precioItem+" €";  

   celdaCantidad.appendChild(createSelct());
   console.log("Flag cantidad");
   console.log("indiceCarro",indiceCarro);
   console.log("registroCarro[indiceCarro+1]",registroCarro[indiceCarro+1]);
   console.log("valoractualselect",document.getElementById("selectCantidad").value)
   celdaCantidad.firstElementChild.value=registroCarro[indiceCarro+1];
   console.log("valordespuesselect",document.getElementById("selectCantidad").value)
   console.log(celdaCantidad.firstElementChild.value);
   celdaEliminar.appendChild(createButtonImage());
   celdaSuma.innerHTML=String(celdaCantidad.firstElementChild.value*parseFloat(precioItem)+" €");
   indiceCarro=indiceCarro+2
    };};
    
    };

    if(tablaCompra!=null){
    var rowTotal = tablaCompra.insertRow((registroCarro.length/2));
    console.log(tablaCompra.childNodes[1].childNodes.length);
    console.log(tablaCompra.childNodes[1].childNodes);
    var celdaTot=rowTotal.insertCell(0);
    var  celdaTotal = rowTotal.insertCell(1);
    celdaTot.innerHTML="TOTAL:"
    celdaTotal.innerHTML=costeTotal+" €";

    };
    console.log("______FIN funcion usar______");};
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


function createSelct(){
    var sel =document.createElement("SELECT");
    sel.setAttribute("id","selectCantidad")
    sel.setAttribute("onchange","cambiarCantidadItem(this)")
    for (var index = 1; index < 11; index++){
        var children= document.createElement("OPTION");
        children.setAttribute("value",String(index));
        children.innerHTML=index;
        sel.appendChild(children);
    };
        
    return sel;

};
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
};

function eliminarItem(fila){
    location.reload(); 
    console.log(fila.parentNode.nextSibling.innerHTML);
    console.log(sessionStorage);

    for (var art in sessionStorage){
        if(art!="length" && art!="clear" && art!="setItem" && art!="getItem" && art!="removeItem" && art!="key"){

            if(sessionStorage.getItem(art).includes(fila.parentNode.nextSibling.innerHTML)){
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

};

function cambiarCantidadItem(selectItem){
    var contadorCantidad=0;
    var valor=selectItem.value;
    var itemCambiar=String(selectItem.parentNode.previousSibling.previousSibling.innerHTML)+'|'+String(selectItem.parentNode.previousSibling.innerHTML).slice(0,-2);
    console.log(selectItem);
    console.log(String(selectItem.parentNode.previousSibling.previousSibling.innerHTML)+'|'+String(selectItem.parentNode.previousSibling.innerHTML));
    for (var articulo in sessionStorage){
        
        if(articulo!="length" && articulo!="clear" && articulo!="setItem" && articulo!="getItem" && articulo !="removeItem" && articulo!="key"){
            
            console.log(itemCambiar==sessionStorage.getItem(articulo));
            if (itemCambiar==sessionStorage.getItem(articulo)){
                contadorCantidad++;

            };

        };
    };
    for (var articulo in sessionStorage){
        if (itemCambiar==sessionStorage.getItem(articulo)){
            sessionStorage.removeItem(articulo);
        
        };
        console.log(sessionStorage);
    };
    for (var i=0; i<valor;i++){
        
        sessionStorage.setItem(itemCambiar+String(i),itemCambiar);
    }
    console.log(sessionStorage);
    location.reload();
};
/*Tengo que recorrer el array en busca de valores repetidos*/

 



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
