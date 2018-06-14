
var planetas = [
    {
        nombre:"mercurio",
        x:400,
        y:245,
        orbita: 45,             // Radio de la orbita
        tamanio: 6,             // Radio del planeta
        color: "#610B0B",
        mostrar: true,
        velocidad: 0.0172,
        pos_rad:0
    },{
        nombre:"venus",
        x:461,
        y:200,
        orbita: 60,
        tamanio: 12,
        color: "#FF8000",
        mostrar: true,
        velocidad: 0.0126,
        pos_rad:0
    },{
        nombre:"tierra",
        x:362,
        y: 268,
        orbita: 80,
        tamanio: 12,
        color: "#01DF3A",
        mostrar: true,
        velocidad: 0.0107,
        pos_rad:0
    },{
        nombre:"roadster",          // Corresponde al boton 9 pero por cuestiones de dibujo tiene que estar en esta posicion al definirlo
        x:389,
        y: 105,
        orbita: 93,
        tamanio: 12,
        color: "#f00",
        mostrar: true,
        velocidad: 0.008,    // No respeta la velocidad a escala como los demas para que pueda alinearse con la tierra y marte
        pos_rad:0
    },
        {
        nombre:"marte",
        x:313,
        y: 136,
        orbita: 110,
        tamanio: 8,
        color: "#FAAC58",
        mostrar: true,
        velocidad: 0.0086,
        pos_rad:0
    },{
        nombre:"jupiter",
        x:282,
        y: 240,
        orbita: 125,
        tamanio: 12,
        color: "#8A0808",
        mostrar: true,
        velocidad: 0.0047,
        pos_rad:0
    },{
        nombre:"saturno",
        x:487,
        y:90,
        orbita: 140,
        tamanio: 10,
        color: "#DBA901",
        mostrar: true,
        velocidad: 0.0034,
        pos_rad:0
    },{
        nombre:"urano",
        x:400,
        y: 359,
        orbita: 160,
        tamanio: 16,
        color: "#2EFEF7",
        mostrar: true,
        velocidad: 0.0024,
        pos_rad:0
    },{
        nombre:"neptuno",
        x:518,
        y: 339,
        orbita: 180,
        tamanio: 15,
        color: "#0080FF",
        mostrar: true,
        velocidad: 0.0019,
        pos_rad:0
    }
    ];

/**
 * Dibuja los planetas
 * @method dibujar_planetas
 * @param Parámetro A
 * @return Valor que retorna
 */
function dibujar_planetas(){
    var canvas = document.getElementById('Canvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var cenX= canvas.width/2;
    var cenY= canvas.height/2;

    ctx.beginPath();
    ctx.arc(cenX, cenY, 28, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#FFFF00";
    ctx.strokeStyle = "#FFFF00";            // Para sacar el contorno (no me deja usar un noStroke)
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // for(var i=0; i< radios.length; i++)
    for(var i of planetas){             // Planetas y orbitas comparten caracteristicas (arriba se especifica lo particular)
        //orbitas

        ctx.beginPath();
        ctx.moveTo(cenX+i.orbita,200);
        ctx.arc(cenX, cenY, i.orbita, 0, 2 * Math.PI, false);
        ctx.strokeStyle = "black";          // Aclarar para que no tome el style amarillo del sol
        ctx.stroke();
        ctx.closePath();

        if(i.mostrar) {
            //planetas
            ctx.beginPath();
            ctx.fillStyle = i.color;
            ctx.moveTo(i.x, i.y);
            ctx.arc(i.x, i.y, i.tamanio, 0, 2 * Math.PI, false);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
        }
    }
    }




function validar() {            // Validar el año ingresado - alert
    var x = document.forms["formulario"]["fechayear"].value; 

    if (x == "" || x<0 || x.length<4 ) {
        alert("Debe ingresar año valido");
        for(var i of planetas){
            i.mostrar=false;
        }
    } else{
    for(var i of planetas){
        i.mostrar=true;
    }
    }
        return false;
    
   

}

var interval;

var a=0;

function moverplanetas() {              //Despues de dibujarlos vuelven a cero
    clearInterval(interval);
    var x = document.forms["formulario"]["fechayear"].value/2000;


    for(var i of planetas){
        i.pos_rad = x;
        i.x= 400 + i.orbita* Math.cos(i.pos_rad);
        i.y= 200 + i.orbita* Math.sin(i.pos_rad);
    }

    interval=setInterval(animacion, 10);

}

function animacion(){           // Movimiento de traslacion

    for(var i of planetas){
        i.pos_rad += i.velocidad;
        i.x= 400 + i.orbita* Math.cos(i.pos_rad);
        i.y= 200 + i.orbita* Math.sin(i.pos_rad);
    }

    dibujar_planetas();
}



function desaparecerplanetas(numero) {

    planetas[numero-1].mostrar = !planetas[numero-1].mostrar;

        moverplanetas();

}

    

