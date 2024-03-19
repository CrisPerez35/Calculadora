
function sumar(){
    var Rendimiento= parseFloat(document.getElementById("Rendimiento").value);
    var superficie= parseFloat(document.getElementById("superficie").value);
    var riego= document.getElementById("sriego").value;
    var Unidad=document.getElementById("Unidad").value;
    var peso=document.getElementById("peso-saco").value;
    var especie=document.getElementById("Especie").value;
    var region=document.getElementById("Region").value;
    var rectangulo=document.getElementById("Rectangulo");
    var cultivo=document.getElementById("cultivo")
    var rango=document.getElementById("rango")

//Acá receteamos el rectangulo para que deje de estar rojo y se vea blanco
    rectangulo.className="alert alert-secondary" 
//Acá van las imagenes
    if(especie==="Trigo Harinero"){
        cultivo.src="Trigo harinero.jpg"
        
    
    }else if(especie==="Cebada Cervecera"){
        cultivo.src="Cebada cervecera.jpg"
    
            
    }else if(especie==="Trigo Candeal"){
        cultivo.src="Trigo candeal.jpg"
    
            
    }else if(especie==="Cebada Forrajera"){
        cultivo.src="Cebada forrajera.jpg"
    
            
    }else if(especie==="Avena"){
        cultivo.src="Avena.jpg"
    
            
    }else if(especie==="Maíz para consumo"){
        cultivo.src="Maiz grano.jpg"
    
            
    }else if(especie==="Maíz para semilla"){
        cultivo.src="Maiz semillero.jpg"
    
            
    }else if(especie==="Arroz"){
        cultivo.src="Arroz.jpg"
    
    
            
    }else if(especie==="Triticale"){
        cultivo.src="Triticale.jpg"
    
    
            
    }else if(especie==="Poroto"){
        cultivo.src="Poroto.jpg"
    
    
            
    }else if(especie==="Lenteja"){
        cultivo.src="Lenteja.jpg"
    
    
            
    }else if(especie==="Garbanzo"){
        cultivo.src="Garbanzo.jpg"
    
    
            
    }else if(especie==="Papa"){
        cultivo.src="Papa.jpg"
    
    
            
    }else if(especie==="Raps (comercial)"){
        cultivo.src="Raps.jpg"
    
    
            
    }else if(especie==="Raps (semillero)"){
        cultivo.src="Raps_semilla.jpg"
    
    
            
    }else if(especie==="Maravilla (comercial)"){
        cultivo.src="Maravilla.jpg"
    
    
            
    }else if(especie==="Maravilla (semillero)"){
        cultivo.src="Maravilla_semillero.jpg"
    
    
            
    }else if(especie==="Maravilla (semillero)"){
        cultivo.src="Maravilla_semillero.jpg"
    
    
            
    }else if(especie==="Lupino amargo"){
        cultivo.src="Lupino_amargo.jpg"
    
    
            
    }else if(especie==="Otros Lupinos"){
        cultivo.src="Otro_lupino.jpg"
    
    
            
    }else if(especie==="Remolacha azucarera"){
        cultivo.src="Remolacha.jpg"
    
    
            
    }else if(especie==="Remolacha azucarera"){
        cultivo.src="Remolacha.jpg"
    
    
            
    }else if(especie==="Tabaco"){
        cultivo.src="Tabaco.jpg"
    
    
            
    }else if(especie==="Tomate industrial"){
        cultivo.src="Tomate.jpg"
    
    
            
    }else if(especie==="Achicoria industrial"){
        cultivo.src="Achicoria.jpg"
    
    
            
    }
    //Generar alertas
    if(region==="opc1_r"){
        alert("No indicó a qué región corresponde la conversión realizada")
        rectangulo.className="alert alert-danger"
        
    }else if(especie==="opc1_e"){
        alert("No indicó a qué especie corresponde la conversión realizada")
        rectangulo.className="alert alert-danger"
    }else if(superficie/superficie!=1){
        alert("No indicó la Superficie(Ha) para hacer la conversión de unidad")
        rectangulo.className="alert alert-danger"
    }else if(Rendimiento/Rendimiento!=1){
        alert("No indicó el Rendimiento/Ha para hacer la conversión de unidad")
        rectangulo.className="alert alert-danger"
    }else if(Unidad==="4.sacos" & peso/peso!=1 ){
        alert("Seleccionó Unidad (4.sacos) pero no indicó el peso del saco en celda Peso sacos(Kg)")
        rectangulo.className="alert alert-danger"
    }else if(Unidad==="op1_u"){
        alert("No seleccionó una opción en la celda Unidad")
        rectangulo.className="alert alert-danger"
    }else if(Unidad!="4.sacos" & peso>0){
        alert("No debe indicar el peso del saco si no ha seleccionado la opción 4.sacos en la celdad Unidad")
        rectangulo.className="alert alert-danger"
    }else if(especie==="Papa" & riego==="opc1_r"){
        alert("Si selecciona papa debe indicar si corresponde a riego o secano")
        rectangulo.className="alert alert-danger"
    }
    
    //En el caso del riego solo deben saltar para papa y otros donde sea relevante el riego. 
   
    if (Unidad==="2.kg"){
        var rendimiento=Rendimiento * superficie/100/superficie
        document.getElementById("Produccion_qqm").innerHTML=Rendimiento * superficie/100+" qqm";
        

    } else if (Unidad==="1.ton"){
        var rendimiento=Rendimiento * superficie*10/superficie
        document.getElementById("Produccion_qqm").innerHTML=Rendimiento * superficie*10+" qqm";

    } else if (Unidad==="3.qqm"){
        var rendimiento=Rendimiento * superficie/superficie
        document.getElementById("Produccion_qqm").innerHTML=Rendimiento * superficie + " qqm";
    } else if (Unidad==="4.sacos"){
        var rendimiento=Rendimiento * superficie*peso/100/superficie
        document.getElementById("Produccion_qqm").innerHTML=Rendimiento * superficie*peso/100 + " qqm";
    }
        
    //ACÁ ESTOY EVALUANDO SI EL RENDIMIENTO SE ENCUENTRA DENTRO DEL RANGO
    if(especie==="Trigo Harinero" && (region==="La Araucanía"||region==="Los Ríos"||region==="Los Lagos")){
       if (rendimiento<20 || rendimiento>90){
            document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están fuera de rango (20-90 qqm)"
            rectangulo.className="alert alert-danger"}
         
          else{ document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están dentro del rango (20-90 qqm)"}
    }else if(especie==="Trigo Harinero" ){
        if (rendimiento<40 || rendimiento>80){
            document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están fuera de rango (40-80 qqm)"
            rectangulo.className="alert alert-danger"}
           else{ document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están dentro del rango (40-80 qqm)"}
    
    }else if(especie==="Trigo Candeal" ){
        if (rendimiento<40 || rendimiento>80){
            document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están fuera de rango (40-80 qqm)"
            rectangulo.className="alert alert-danger"}
           else{ document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están dentro del rango (40-80 qqm)"}
    
    
    }else if(especie==="Cebada Cervecera"){
        if (rendimiento<50 || rendimiento>100){
            document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están fuera de rango (50-100 qqm)"
            rectangulo.className="alert alert-danger"}
           else{ document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están dentro del rango (50-100 qqm)"}
    
    }else if(especie==="Avena"&& (region==="La Araucanía"||region==="Los Ríos"||region==="Los Lagos")){
        if (rendimiento<20 || rendimiento>100){
            document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están fuera de rango (20-100 qqm)"
            rectangulo.className="alert alert-danger"}
           else{ document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están dentro del rango (20-100 qqm)"}

    }else if(especie==="Avena"){
        if (rendimiento<20 || rendimiento>80){
            document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están fuera de rango (20-80 qqm)"
            rectangulo.className="alert alert-danger"}
            else{ document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están dentro del rango (20-80 qqm)"}       
    
    
    
    }else if(especie==="Triticale"){
        if (rendimiento<20 || rendimiento>80){
            document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están fuera de rango (20-80 qqm)"
            rectangulo.className="alert alert-danger"}
           else{ document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están dentro del rango (20-80 qqm)"}
    
    
    }else if(especie==="Raps (comercial)"&& (region==="La Araucanía"||region==="Los Ríos"||region==="Los Lagos")){
        if (rendimiento<20 || rendimiento>60){
            document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están fuera de rango (20-60 qqm)"
            rectangulo.className="alert alert-danger"}
           else{ document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están dentro del rango (20-60 qqm)"}
    
    }else if(especie==="Raps (comercial)"){
        if (rendimiento<10 || rendimiento>40){
            document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están fuera de rango (10-40 qqm)"
            rectangulo.className="alert alert-danger"}
           else{ document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están dentro del rango (10-40 qqm)"}
    
    
    }else if((especie==="Lupino amargo")){
        if (rendimiento<10 || rendimiento>30){
            document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están fuera de rango (10-30 qqm)"
            rectangulo.className="alert alert-danger"}
           else{ document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están dentro del rango (10-30 qqm)"}
    
    }else if((especie==="Otros Lupinos")){
        if (rendimiento<10 || rendimiento>40){
            document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están fuera de rango (10-40 qqm)"
            rectangulo.className="alert alert-danger"}
            else{ document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están dentro del rango (10-40 qqm)"}
              

    }else if((especie==="Achicoria industrial")){
        if (rendimiento<400 || rendimiento>700){
            document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están fuera de rango (400-700 qqm)"
            rectangulo.className="alert alert-danger"}
           else{ document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están dentro del rango (400-700 qqm)"}
    
    
    
    }else if((especie==="Maíz para consumo")){
        if (rendimiento<50 || rendimiento>200){
            document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están fuera de rango (50-200 qqm)"
            rectangulo.className="alert alert-danger"}
           else{ document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están dentro del rango (50-200 qqm)"}
    
    
    }else if((especie==="Arroz")){
        if (rendimiento<30 || rendimiento>90){
            document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están fuera de rango (30-90 qqm)"
            rectangulo.className="alert alert-danger"}
           else{ document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están dentro del rango (30-90 qqm)"}
    
    }else if((especie==="Papa")){
        if (rendimiento<200 || rendimiento>700){
            document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están fuera de rango (200-700 qqm)"
            rectangulo.className="alert alert-danger"}
           else{ document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" están dentro del rango (200-700 qqm)"}
    
        //ACÁ VOY COLOCANDO A LOS RENEGADOS.
    
    }else if((especie==="Trigo Harinero"||especie==="Trigo Candeal"||especie==="Cebada Cervecera"||especie==="Cebada Forrajera"||especie==="Avena"||especie==="Maíz para consumo"||especie==="Maíz para semilla"||especie==="Arroz"||especie==="Triticale"||especie==="Poroto"||especie==="Lenteja"||especie==="Garbanzo"||especie==="Papa"||especie==="Raps (comercial)"||especie==="Raps (semillero)"||especie==="Maravilla (comercial)"||especie==="Maravilla (semillero)"||especie==="Lupino amargo"||especie==="Otros Lupinos"||especie==="Remolacha azucarera"||especie==="Tabaco"||especie==="Tomate industrial"||especie==="Achicoria industrial")){
        document.getElementById("rango").innerHTML=" "+rendimiento+" qqm"+" (no se definió un rango para esta especie y región)"}
        

    
    
        var fecha = new Date();
        var hora = fecha.getHours();
        var minutos = fecha.getMinutes();
        var segundos = fecha.getSeconds();
        var horaCompleta = hora + ":" + minutos + ":" + segundos;
        document.getElementById("hora").innerHTML = horaCompleta;
    
    }

    
        




    
    



      

    




