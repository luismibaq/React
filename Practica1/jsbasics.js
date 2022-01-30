let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Ejecucion finalizada...");
        if(false){
            resolve();
        }else{
            reject();
        }
    }, 3000)
});

console.log("Contiunua la ejecucion normal de mi programa...");

promesa.then(
    function(){
        console.log("Promesa terminó con exito...");
    },
    function(){
        console.log("Promesa terminó con error")
    }
).catch((error) =>{
    console.warn(error);
}).finally(() => {
    console.log("Finally ejecutado");
})

console.log("Continua la ejecucion normal de mi programa 1...")

const peticion = fetch("https://jsonplaceholder.typicode.com/tools/1");

peticion.then((respuesta) => {
    console.log(respuesta);
    respuesta.json().then((datos =>{
        console.log(datos);
    }))
}). catch((error) =>{
    console.warn(error);
})