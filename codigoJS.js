
var cont = 1;    
var jugAct = 1;
var x;
var jugador;
var elementos = new Array();
var borrado = new Array();
var pista1 = 0, pista2 = 0, pista3 = 0, pista4 = 0, pista5 = 0, pista6 = 0; //Número actual de jugadores en la pista n   
var arrayPista1 = new Array(4), arrayPista2 = new Array(4), arrayPista3 = new Array(4), arrayPista4 = new Array(4), 
    arrayPista5 = new Array(4), arrayPista6 = new Array(4); //Un array para cada pista donde se introducen los respectivos jugadores
var botonAcep;
var ima;
     
function inicializar(){
       
    var ind = 0;
    var pista = 1;
    var miTabla = document.getElementById("tablaJug");     
        
    for (var fil = 0; fil < 3; fil++) {
        var fila = document.createElement("tr");
        miTabla.appendChild(fila);
        for (var col = 0; col < 2; col++) {
            var columna = document.createElement("td");
            fila.appendChild(columna);    
            var tablaInt = document.createElement("table");
            tablaInt.setAttribute("class", "pista")
            var cabecera = document.createElement("h4");
            cabecera.setAttribute("id", "cabecera_" + pista);
            var titulo = document.createTextNode("Pista " + pista);
            pista++;
            cabecera.appendChild(titulo);
            columna.appendChild(cabecera)
            columna.appendChild(tablaInt);       
            for (var xt = 0; xt < 2; xt++) {
                var filat = document.createElement("tr");
                tablaInt.appendChild(filat);
                for (yt = 0; yt < 2; yt++) {
                    ind++;
                    var columnat = document.createElement("td");
                    ima = document.createElement("img");
                    ima.setAttribute("src", "imagenes/player.png");
                    ima.setAttribute("alt", "unJugador");
                    ima.setAttribute("id", ind);
                    ima.setAttribute("class", "ImgJug");
                    columnat.appendChild(ima);
                    filat.appendChild(columnat);
                } //for de las columnas de la tabla de cada pista                        
            } //for de las filas de la tabla de cada pista          
        } //for columnas de la tabla de pistas
        miTabla.appendChild(fila);                
    } //for filas de la tabla de pistas
    inicializarLeyenda();
    inicializarPistas();
    inicializarSelect();        
} //end función

    
function inicializarLeyenda(){
        
    var tablaLeyenda = document.getElementById("tablaLeyenda");  
    var jugadores = new Array("0 jugadores", "1 jugador", "2 jugadores", "3 jugadores", "4 jugadores");
    var colores = new Array("verde", "azul", "amarillo", "naranja", "rojo");
        
    for (var l0 = 0; l0 < 1; l0++) {
        var filaL = document.createElement("tr");
        var columnaL = document.createElement("td");
        columnaL.setAttribute("colSpan",2);
        var cabecera = document.createElement("h1");
        cabecera.innerHTML = "OCUPACIÓN";
        columnaL.appendChild(cabecera);
        filaL.appendChild(columnaL);
        tablaLeyenda.appendChild(filaL);
    }//primer for
        
    for (var l = 0; l < 5; l++) {
        var filaL = document.createElement("tr");
        var columnaL = document.createElement("td");
        var imagen = document.createElement("img");
        imagen.setAttribute("src", "imagenes/color_" + colores[l] + ".png");
        imagen.setAttribute("alt", colores[l]);
        imagen.setAttribute("title", colores[l] + " - " + jugadores[l]);
        columnaL.appendChild(imagen);                
        filaL.appendChild(columnaL);
        for (var l2 = 0; l2 < 1; l2++) {
            var columnaL = document.createElement("td");
            var titJugador = document.createElement("p");
            titJugador.innerHTML = jugadores[l];
            titJugador.setAttribute("class", "optionJug");                    
            columnaL.appendChild(titJugador);
            filaL.appendChild(columnaL);
        }
        tablaLeyenda.appendChild(filaL);
    }//segundo for
        
}//end funcion
    

function inicializarSelect(){
    
    var tablaSel = document.getElementById("tablaPistas"); 
    var filaS = document.createElement("tr");
        
    tablaSel.appendChild(filaS);
    
    var columnaS = document.createElement("td");
    columnaS.setAttribute("colspan",2);
    
    var titulo = document.createElement("h2");
    titulo.innerHTML = "SELECCIONE UNA PISTA";
    
    columnaS.appendChild(titulo);
    filaS.appendChild(columnaS);           
    tablaSel.appendChild(filaS); 
        
    var filaS = document.createElement("tr");
    tablaSel.appendChild(filaS);
    
    var columnaS = document.createElement("td");
    columnaS.setAttribute("colspan", 2);
        
    var select = document.createElement("select");
    select.setAttribute("id", "selectPistas");
        
    for (var s = 1; s < 7; s++) {
        var option = document.createElement("option");
        option.setAttribute("value", s);
        option.setAttribute("text", "Pista " + s);
        option.innerHTML = "Pista " + s ;
        select.appendChild(option);
    }
        
    columnaS.appendChild(select);
    filaS.appendChild(columnaS); 
    tablaSel.appendChild(filaS);
        
    var filaL = document.createElement("tr");
    var columnaL = document.createElement("td");
        
    botonAcep = document.createElement("button");
    botonAcep.innerHTML = "aceptar";
    botonAcep.setAttribute("class", "botonesSel");
    botonAcep.setAttribute("type", "button");
    botonAcep.setAttribute("text", "aceptar");
    
    columnaL.appendChild(botonAcep);
    filaL.appendChild(columnaL);
        
    var columnaL = document.createElement("td");
    var botonCancel =  document.createElement("button");
    botonCancel.innerHTML = "cancelar";
    botonCancel.setAttribute("class", "botonesSel");
    botonCancel.setAttribute("type", "button");
    botonCancel.setAttribute("text", "cancelar");
    botonCancel.setAttribute("onclick", "cancelarSel()");
    columnaL.appendChild(botonCancel);
        
    filaL.appendChild(columnaL);
    tablaSel.appendChild(filaL);
        
    tablaSel.style.borderStyle="outset";
        
} //end función
    

function inicializarPistas(){ //Todas las pistas con título "libre"
        
    var vacio = "libre";
     
    //PISTA1
    for (var a = 0; a < arrayPista1.length; a++) {
        arrayPista1[a] = vacio;
    }
    document.getElementById("cabecera_1").title = arrayPista1.join(",");
        
    //PISTA2
    for (var b = 0; b < arrayPista2.length; b++) {            
        arrayPista2[b] = vacio;
    }
    document.getElementById("cabecera_2").title = arrayPista2.join(",");
        
    //PISTA3
    for (var c = 0; c < arrayPista3.length; c++) {            
        arrayPista3[c] = vacio;
    }
    document.getElementById("cabecera_3").title = arrayPista3.join(",");
         
    //PISTA4
    for (var d = 0; d < arrayPista4.length; d++) {            
        arrayPista4[d] = vacio;
    }
    document.getElementById("cabecera_4").title = arrayPista4.join(",");
         
    //PISTA5
    for (var e = 0; e < arrayPista5.length; e++) {            
        arrayPista5[e] = vacio;
    }
    document.getElementById("cabecera_5").title = arrayPista5.join(",");
         
    //PISTA6
    for (var f = 0; f < arrayPista6.length; f++) {            
        arrayPista6[f] = vacio;
    }
    document.getElementById("cabecera_6").title = arrayPista6.join(",");
    
}//end function    
    
function aniadir(jugadores){

    var tbody, fila, col1, jugadorNuevo, col2, borrarJugador, exprReg;
    
    tbody = document.getElementById(jugadores).getElementsByTagName("TBody")[0];
    fila = document.createElement("tr");
    jugador = prompt("Introduce nombre y apellidos del/de la nuevo/a jugador/a. Mínimo un nombre y un apellido.");
        
    exprReg = /^[A-ZÑa-zñáéíóúñäëïöü]{2,}([\s][A-ZÑa-zñáéíóúñäëïöü]{2,})+$/; 
        
    if (exprReg.test(jugador)) {   
        col1 = document.createElement("td");
        col1.setAttribute("class", "filaJug");
        elementos[cont] = jugador;
        borrado[cont] = elementos[cont];       
        jugadorNuevo = "<td><a href=\"javascript:select(" + cont + ")\" id='ancla" + cont + "'>"+ elementos[cont] +"</a></td>";
        col1.innerHTML = jugadorNuevo.replace(/!cont!/g, cont);
        col2 = document.createElement("td");
        col2.setAttribute("class", "filaJug");

        borrarJugador = "<input type='image' title='borrar jugador' src='imagenes/delete.png' onClick='borrarJugador(this," + cont + ")'>";
        col2.innerHTML = borrarJugador.replace(/!cont!/g, cont);
        fila.appendChild(col1);   
        fila.appendChild(col2);
        cont += 1;
        tbody.appendChild(fila);            
    }
    else if (jugador == null)
        return false;
    else
        alert("¡ERROR! -> El nombre y/o apellidos del/de la jugador/a ha sido introducido de manera incorrecta.");
    
} //end function

    
function borrarJugador(src,cont){
    
        var y;
        var oFila = src.parentElement.parentElement;    
       
        document.all("jugadores").deleteRow(oFila.rowIndex);  
            
        y = borrado[cont];
    
        if (document.getElementById(y) == null) {
            return false;
        }
    
        else if (document.getElementById(y).style.visibility == "visible" && document.getElementById(y).title == elementos[cont]) {

            document.getElementById(y).style.visibility = "hidden";  
            
            switch (y) {
                case 1: case 2: case 3: case 4:
                    if (pista1 > 0) {
                        pista1--;
                        switch (pista1) {
                            case 0: document.getElementById("cabecera_1").style.color = "green"; break;
                            case 1: document.getElementById("cabecera_1").style.color = "dodgerblue"; break;
                            case 2: document.getElementById("cabecera_1").style.color = "yellow"; break;
                            case 3: document.getElementById("cabecera_1").style.color = "darkorange"; break;
                            case 4: document.getElementById("cabecera_1").style.color = "red"; break;
                            default:
                        }
                        arrayPista1[y-1] = "libre";
                        document.getElementById("cabecera_1").title = arrayPista1.join(",");
                    }
                break;
                
                case 5: case 6: case 7: case 8:
                    if (pista2 > 0) {
                        pista2--;
                        switch (pista2) {
                            case 0: document.getElementById("cabecera_2").style.color = "green"; break;
                            case 1: document.getElementById("cabecera_2").style.color = "dodgerblue"; break;
                            case 2: document.getElementById("cabecera_2").style.color = "yellow"; break;
                            case 3: document.getElementById("cabecera_2").style.color = "darkorange"; break;
                            case 4: document.getElementById("cabecera_2").style.color = "red"; break;
                            default: 
                        }                
                        arrayPista2[y-5] = "libre";
                        document.getElementById("cabecera_2").title = arrayPista2.join(",");
                    }
                break;
                    
                case 9: case 10: case 11: case 12:
                    if(pista3 > 0){
                        pista3--;
                        switch(pista3){
                            case 0: document.getElementById("cabecera_3").style.color="green"; break;
                            case 1: document.getElementById("cabecera_3").style.color="dodgerblue"; break;
                            case 2: document.getElementById("cabecera_3").style.color="yellow"; break;
                            case 3: document.getElementById("cabecera_3").style.color="darkorange"; break;
                            case 4: document.getElementById("cabecera_3").style.color="red"; break;
                            default: 
                        }               
                        arrayPista3[y-9]="libre";
                        document.getElementById("cabecera_3").title = arrayPista3.join(",");
                    }
                break;
                    
                case 13: case 14: case 15: case 16:
                    if (pista4 > 0) {
                        pista4--;
                        switch (pista4) {
                            case 0: document.getElementById("cabecera_4").style.color = "green"; break;
                            case 1: document.getElementById("cabecera_4").style.color = "dodgerblue"; break;
                            case 2: document.getElementById("cabecera_4").style.color = "yellow"; break;
                            case 3: document.getElementById("cabecera_4").style.color = "darkorange"; break;
                            case 4: document.getElementById("cabecera_4").style.color = "red"; break;
                            default: 
                        }                
                        arrayPista4[y-13] = "libre";
                        document.getElementById("cabecera_4").title = arrayPista4.join(",");
                    }
                break;
                    
                case 17: case 18: case 19: case 20:
                    if (pista5 > 0){
                        pista5--;
                        switch (pista5) {
                            case 0: document.getElementById("cabecera_5").style.color = "green"; break;
                            case 1: document.getElementById("cabecera_5").style.color = "dodgerblue"; break;
                            case 2: document.getElementById("cabecera_5").style.color = "yellow"; break;
                            case 3: document.getElementById("cabecera_5").style.color = "darkorange"; break;
                            case 4: document.getElementById("cabecera_5").style.color = "red"; break;
                            default: 
                        }               
                        arrayPista5[y-17] = "libre";
                        document.getElementById("cabecera_5").title = arrayPista5.join(",");
                    }
                break;
                    
                case 21: case 22: case 23: case 24:  
                    if (pista6 > 0) {
                        pista6--;
                        switch (pista6) {
                            case 0: document.getElementById("cabecera_6").style.color = "green"; break;
                            case 1: document.getElementById("cabecera_6").style.color = "dodgerblue"; break;
                            case 2: document.getElementById("cabecera_6").style.color = "yellow"; break;
                            case 3: document.getElementById("cabecera_6").style.color = "darkorange"; break;
                            case 4: document.getElementById("cabecera_6").style.color = "red"; break;
                            default: 
                        }
                        arrayPista6[y-21] = "libre";
                        document.getElementById("cabecera_6").title = arrayPista6.join(",");
                    }
                break;
                
                default: 
            }//switch pistas
            jugAct--;
        } //if        
    }//function
    
    
function select(cont){
    document.getElementById("divPista").style.visibility = "visible";
    botonAcep.setAttribute("onclick","pintar(" + cont + ")"); 
}
    
      
function cancelarSel(){
    document.getElementById("divPista").style.visibility = "hidden";
}
    

function pintar(cont){
       
    var maxJug = 24;
    var maxJugPista = 4;
    var imagen;
    var direccion;
    var opcion;  
       
    opcion = document.getElementById("selectPistas").selectedIndex;
    document.getElementById("divPista").style.visibility = "hidden";            

    if (jugAct <= maxJug) { 
           
        switch(opcion) {
            case 0: 
               if(pista1 < maxJugPista) {
                    x = generaNumAleatorio(1,4);
                    while(document.getElementById(x).style.visibility == "visible") {
                        x = generaNumAleatorio(1,4);
                    }  
                }
                else {
                    alert("La pista seleccionada está al 100% de capacidad, seleccione otra"); 
                    return false;
                }
                break;
                   
            case 1: 
               if (pista2 < maxJugPista) {
                    x = generaNumAleatorio(5,8);
                    while(document.getElementById(x).style.visibility == "visible") {
                       x = generaNumAleatorio(5,8);
                    }  
                }
                else {
                    alert("La pista seleccionada está al 100% de capacidad, seleccione otra"); 
                    return false;
                }
            break;
                   
            case 2: 
               if (pista3 < maxJugPista) {
                    x = generaNumAleatorio(9,12);
                    while(document.getElementById(x).style.visibility == "visible") {
                       x = generaNumAleatorio(9,12);
                    }  
                }
                else {
                    alert("La pista seleccionada está al 100% de capacidad, seleccione otra"); 
                    return false;
                }
            break;
                   
            case 3: 
                if (pista4 < maxJugPista) {
                    x = generaNumAleatorio(13,16);
                    while(document.getElementById(x).style.visibility == "visible") {
                       x = generaNumAleatorio(13,16);
                    }  
                }
                else {
                    alert("La pista seleccionada está al 100% de capacidad, seleccione otra"); 
                    return false;
                }
            break;
                   
            case 4: 
                if (pista5 < maxJugPista) {
                    x = generaNumAleatorio(17,20);
                    while(document.getElementById(x).style.visibility == "visible") {
                       x = generaNumAleatorio(17,20);
                    }  
                }
                else {
                    alert("La pista seleccionada está al 100% de capacidad, seleccione otra"); 
                    return false;
                }
            break;
                   
            case 5: 
                if (pista6 < maxJugPista) {
                   x = generaNumAleatorio(21,24);
                   while(document.getElementById(x).style.visibility == "visible"){
                       x = generaNumAleatorio(21,24);
                   }  
                }
                else {
                    alert("La pista seleccionada está al 100% de capacidad, seleccione otra"); 
                    return false;
                }
            break;
                   
            default:

        } //switch          
            
        switch(x){
            case 1: case 2: case 3: case 4:
                pista1++;
                switch(pista1) {    
                    case 1: document.getElementById("cabecera_1").style.color = "dodgerblue"; break;
                    case 2: document.getElementById("cabecera_1").style.color = "yellow"; break;
                    case 3: document.getElementById("cabecera_1").style.color = "darkorange"; break;
                    case 4: document.getElementById("cabecera_1").style.color = "red"; break;
                    default:
                }   
                arrayPista1[x-1] = elementos[cont];
                document.getElementById("cabecera_1").title = arrayPista1.join(","); 
            break;
                    
            case 5: case 6: case 7: case 8:
                pista2++;
                switch(pista2) {
                    case 1: document.getElementById("cabecera_2").style.color = "dodgerblue"; break;
                    case 2: document.getElementById("cabecera_2").style.color = "yellow"; break;
                    case 3: document.getElementById("cabecera_2").style.color = "darkorange"; break;
                    case 4: document.getElementById("cabecera_2").style.color = "red"; break;
                    default:
                }
                arrayPista2[x-5] = elementos[cont];
                document.getElementById("cabecera_2").title = arrayPista2.join(",");
            break;
                    
            case 9: case 10: case 11: case 12:
                pista3++;
                switch(pista3) {
                    case 1: document.getElementById("cabecera_3").style.color = "dodgerblue"; break;
                    case 2: document.getElementById("cabecera_3").style.color = "yellow"; break;
                    case 3: document.getElementById("cabecera_3").style.color = "darkorange"; break;
                    case 4: document.getElementById("cabecera_3").style.color = "red"; break;
                    default:
                }                 
                arrayPista3[x-9] = elementos[cont];
                document.getElementById("cabecera_3").title = arrayPista3.join(","); 
            break;
                    
            case 13: case 14: case 15: case 16:
                pista4++;
                switch(pista4) {
                    case 1: document.getElementById("cabecera_4").style.color = "dodgerblue"; break;
                    case 2: document.getElementById("cabecera_4").style.color = "yellow"; break;
                    case 3: document.getElementById("cabecera_4").style.color = "darkorange"; break;
                    case 4: document.getElementById("cabecera_4").style.color = "red"; break;
                    default: 
                }
                arrayPista4[x-13] = elementos[cont];
                document.getElementById("cabecera_4").title = arrayPista4.join(",");
            break;
                    
            case 17: case 18: case 19: case 20:
                pista5++;
                switch(pista5) {
                    case 1: document.getElementById("cabecera_5").style.color = "dodgerblue"; break;
                    case 2: document.getElementById("cabecera_5").style.color = "yellow"; break;
                    case 3: document.getElementById("cabecera_5").style.color = "darkorange"; break;
                    case 4: document.getElementById("cabecera_5").style.color = "red"; break;
                    default:
                }               
                arrayPista5[x-17] = elementos[cont];
                document.getElementById("cabecera_5").title = arrayPista5.join(",");
            break;
                    
            case 21: case 22: case 23: case 24:
                pista6++;
                switch(pista6) {
                    case 1: document.getElementById("cabecera_6").style.color = "dodgerblue"; break;
                    case 2: document.getElementById("cabecera_6").style.color = "yellow"; break;
                    case 3: document.getElementById("cabecera_6").style.color = "darkorange"; break;
                    case 4: document.getElementById("cabecera_6").style.color = "red"; break;
                    default:
                }                
                arrayPista6[x-21] = elementos[cont];
                document.getElementById("cabecera_6").title = arrayPista6.join(",");
            break;
                    
            default:
                    
        }//switch incorporacion jugadores
                                     
        document.getElementById(x).style.visibility = "visible";
        document.getElementById(x).title = "" + elementos[cont] + "";           
        borrado[cont] = x;
        direccion = "<a href=\"javascript:borrar(" + cont + ")\"><font color=\"red\"><b>" + elementos[cont] + "</b></font></a>";
        document.getElementById("ancla" + cont).innerHTML = direccion;
        document.getElementById(x).setAttribute("onclick", "borrar(" + cont + ")");
        jugAct++; 
    } //if (jugAct <= maxJug)
    
    else 
        alert("Pistas al 100% de ocupación, espere a que algún jugador abandone alguna pista...");
    
} //end function 
    

function borrar(cont){
        
    var z;
          
    document.getElementById("ancla" + cont).innerHTML = "<a href=\"javascript:select(" + cont + ")\"><font color=\"dodgerblue\">" +  elementos[cont] + "</font></a>";
    
    z = borrado[cont]; 
        
    switch(z) {
        case 1: case 2: case 3: case 4:
            pista1--;
            switch(pista1) {
                case 0: document.getElementById("cabecera_1").style.color = "green"; break;
                case 1: document.getElementById("cabecera_1").style.color = "dodgerblue"; break;
                case 2: document.getElementById("cabecera_1").style.color = "yellow"; break;
                case 3: document.getElementById("cabecera_1").style.color = "darkorange"; break;
                case 4: document.getElementById("cabecera_1").style.color = "red"; break;
                default:
            }
            arrayPista1[z-1] = "libre";
            document.getElementById("cabecera_1").title = arrayPista1.join(",");
        break;
            
        case 5: case 6: case 7: case 8:
            pista2--;
            switch(pista2) {
                case 0: document.getElementById("cabecera_2").style.color = "green"; break;
                case 1: document.getElementById("cabecera_2").style.color = "dodgerblue"; break;
                case 2: document.getElementById("cabecera_2").style.color = "yellow"; break;
                case 3: document.getElementById("cabecera_2").style.color = "darkorange"; break;
                case 4: document.getElementById("cabecera_2").style.color = "red"; break;
                default:
            }
                arrayPista2[z-5] = "libre";
                document.getElementById("cabecera_2").title = arrayPista2.join(",");
        break;
            
        case 9: case 10: case 11: case 12:
            pista3--;
            switch(pista3) {
                case 0: document.getElementById("cabecera_3").style.color = "green"; break;
                case 1: document.getElementById("cabecera_3").style.color = "dodgerblue"; break;
                case 2: document.getElementById("cabecera_3").style.color = "yellow"; break;
                case 3: document.getElementById("cabecera_3").style.color = "darkorange"; break;
                case 4: document.getElementById("cabecera_3").style.color = "red"; break;
                default:
            }   
            arrayPista3[z-9] = "libre";
            document.getElementById("cabecera_3").title = arrayPista3.join(",");   
        break;
            
        case 13: case 14: case 15: case 16:
            pista4--;
            switch(pista4) {
                case 0: document.getElementById("cabecera_4").style.color="green"; break;
                case 1: document.getElementById("cabecera_4").style.color="dodgerblue"; break;
                case 2: document.getElementById("cabecera_4").style.color="yellow"; break;
                case 3: document.getElementById("cabecera_4").style.color="darkorange"; break;
                case 4: document.getElementById("cabecera_4").style.color="red"; break;
                default:
            }
            arrayPista4[z-13] = "libre";
            document.getElementById("cabecera_4").title = arrayPista4.join(",");
        break;
                
        case 17: case 18: case 19: case 20:
             pista5--;
            switch(pista5) {
                case 0: document.getElementById("cabecera_5").style.color = "green"; break;
                case 1: document.getElementById("cabecera_5").style.color = "dodgerblue"; break;
                case 2: document.getElementById("cabecera_5").style.color = "yellow"; break;
                case 3: document.getElementById("cabecera_5").style.color = "darkorange"; break;
                case 4: document.getElementById("cabecera_5").style.color = "red"; break;
                default:
            }   
            arrayPista5[z-17] = "libre";
            document.getElementById("cabecera_5").title = arrayPista5.join(",");    
        break;
            
        case 21: case 22: case 23: case 24:
            pista6--;
            switch(pista6) {
                case 0: document.getElementById("cabecera_6").style.color = "green"; break;
                case 1: document.getElementById("cabecera_6").style.color = "dodgerblue"; break;
                case 2: document.getElementById("cabecera_6").style.color = "yellow"; break;
                case 3: document.getElementById("cabecera_6").style.color = "darkorange"; break;
                case 4: document.getElementById("cabecera_6").style.color = "red"; break;
                default:
            }
            arrayPista6[z-21] = "libre";
            document.getElementById("cabecera_6").title = arrayPista6.join(",");       
        break;
                
        default:

    }//switch retorno a banco de jugadores
        
    document.getElementById(z).style.visibility = "hidden";
    jugAct--;
    
} //end function
    

function generaNumAleatorio(limiteinf,limitesup) { 
        
    var numAleatorio = Math.floor((Math.random() * (limitesup - limiteinf + 1)) + limiteinf);
        
    return numAleatorio;

}
    
function PulsarTecla(event){

    var tecla = event.keyCode;
 
    if (tecla == 27) {
        if (document.getElementById("divPista").style.visibility = "visible") {
            document.getElementById("divPista").style.visibility = "hidden";
        }
    }
        
}
    
document.onkeydown = PulsarTecla;