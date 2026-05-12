
function btn(){
        const imgs = [
        "./img/uribe.png",
        "./img/uribe2.png",
        "./img/uribe3.png"
    ];
    
    let img = document.getElementById("img");

        let aleatoria = Math.floor(Math.random()*3);
        img.src = imgs[aleatoria];


}

