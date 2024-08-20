let frutas = [];
let lacteos =[];
let congelados = [];
let dulces = [];
let contador = 0;

function lista(){
   let registrar = 1;
   if (contador == 0){
    while (registrar == 1){
        registrar = prompt("¿Desea registrar prductos? (1)Si (2)No");
        if (registrar == 1){
            let producto = prompt("¿Que producto deseas registrar?");
            let categoria = prompt("¿A que categoria deberia asignarse? (1)Frutas (2)Lacteos (3)Congelados (4)Dulces");
            if (categoria == 1 ){
                frutas.push(producto);
                contador = 1;
                break
            }
            else if (categoria == 2){
                lacteos.push(producto);
                contador = 1;
                break
            }
            else if (categoria == 3){
                congelados.push(producto);
                contador = 1;
                break
            }
            else if (categoria == 4){
                dulces.push(producto);
                contador = 1;
                break
            }
            else{
                alert("categoria desconosida");
            }
        }
        else{
            break
        }
        
   }
 
   if (contador==1){
    while (registrar == 1){
        registrar = prompt("¿Desea registrar o elimiar prductos? (1)Si (2)No (3)Eliminar Prodicto");
        if (registrar == 1){
            let producto = prompt("¿Que producto deseas registrar?");
            let categoria = prompt("¿A que categoria deberia asignarse? (1)Frutas (2)Lacteos (3)Congelados (4)Dulces");
            if (categoria == 1 ){
                frutas.push(producto);
            }
            else if (categoria == 2){
                lacteos.push(producto);
            }
            else if (categoria == 3){
                congelados.push(producto);
            }
            else if (categoria == 4){
                dulces.push(producto);
            }
            else{
                alert("categoria desconosida");
            }
        }
        else if(registrar == 3){
            let eliminar = prompt("¿Ingresa el nombre del producto desea eliminar Frutas: "+frutas+" Lacteos: "+lacteos+" Dulces: "+dulces+" Congelados: "+congelados);
            existenciaFrutas = frutas.includes(eliminar);
            existenciaLacteos = lacteos.includes(eliminar);
            existenciaDulces =  dulces.includes(eliminar);
            existenciaCongelados = congelados.includes(eliminar);

            if(existenciaFrutas){
                index=frutas.indexOf(eliminar);
                frutas.splice(index);
                alert("Producto Eliminado");
                registrar = 1;
            }

            else if(existenciaLacteos){
                index=lacteos.indexOf(eliminar);
                lacteos.splice(index);
                alert("Producto Eliminado");
                registrar = 1;
            }

            else if(existenciaDulces){
                index=dulces.indexOf(eliminar);
                dulces.splice(index);
                alert("Producto Eliminado");
                registrar = 1;
            }
            else if(existenciaCongelados){
                index=congelados.indexOf(eliminar);
                congelados.splice(index);
                alert("Producto Eliminado");
                registrar = 1;
            }
            else{
                alert("Producto inexistente")
                registrar = 1;
            }
        }
        else{
            break
        }
        
   }
   }
   }
   let section = document.getElementById("sec");
   section.innerHTML = ""
   let p = document.createElement("p")
   p.id=("lista")
   p.innerHTML="Frutas: <br>"+frutas.join("<br>")+"<br> Lacteos: <br>"+lacteos.join("<br>")+"<br> Congelados: <br>"+congelados.join("<br>")+" <br> Dulces: <br>"+dulces.join("<br>");
   section.appendChild(p)
   section.style.alignItems("start")
}