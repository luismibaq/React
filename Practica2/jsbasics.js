class calc{
    suma(n1,n2,n3){
        if(n3){
            let n = (n1+n2)*n3;
            console.log(`La suma de ${n1} y ${n2}, y multiplicado por ${n3} es: ${n}`);
        }else{
            let n = (n1+n2);
            console.log(`La suma de ${n1} y ${n2} es: ${n}`);
        }
    }
    resta(n1,n2,n3){
        if(n3){
            let n = (n1-n2)*n3;
            console.log(`La resta de ${n1} y ${n2}, y multiplicado por ${n3} es: ${n}`);
        }else{
            let n = (n1-n2);
            console.log(`La resta de ${n1} y ${n2} es: ${n}`);
        }
    }
}

console.log("Prueba sin promise")

let calculadora = new calc();
calculadora.suma(1,2);
calculadora.suma(1,2,3);
calculadora.resta(1,2);
calculadora.resta(1,2,3);

console.log("Prueba con promise")

class calcPromise{
    calcp = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    });
    suma(n1,n2,n3){
        if(n3){
            let n = (n1+n2)*n3;
            this.calcp.then(
                function(){
                    console.log(`La suma de ${n1} y ${n2}, y multiplicado por 3 es: ${n}`);
                    console.log("Suma exitosa...");
                },
                function(){
                    console.log("Suma sin exito");
                }
            );
        }else{
            let n = (n1-n2);
            this.calcp.then(
                function(){
                    console.log(`La resta de ${n1} y ${n2} es: ${n}`);
                    console.log("Suma exitosa...");
                },
                function(){
                    console.log("Suma sin exito");
                }
            );
        }
    }
    resta(n1,n2,n3){
        if(n3){
            let n = (n1-n2)*n3;
            this.calcp.then(
                function(){
                    console.log(`La resta de ${n1} y ${n2}, y multiplicado por ${n3} es: ${n}`);
                    console.log("Resta exitosa...");
                },
                function(){
                    console.log("Resta sin exito");
                }
            );
        }else{
            let n = (n1-n2);
            this.calcp.then(
                function(){
                    console.log(`La resta de ${n1} y ${n2} es: ${n}`);
                    console.log("Resta exitosa...");
                },
                function(){
                    console.log("Resta sin exito");
                }
            );
        }
    }
}

let calculadoraPromise = new calcPromise();
calculadoraPromise.suma(1,2);
calculadoraPromise.suma(1,2,3);
calculadoraPromise.resta(1,2);
calculadoraPromise.resta(1,2,3);

console.log("Petición a comments");

const petition = async() => {
    try{
        let petition = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then(response => response.json())
        .then(data => console.log(` name: ${data[0].name}\n email: ${data[0].email}\n bpody: ${data[0].body}`));
        console.log(data);
    }catch(error){
        console.warn(error);
    }
}

petition();
