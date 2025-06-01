function Hair(color) {
    const allHair = document.querySelectorAll(".hair");
    for(let x of allHair){
        x.style.display = "none";
    }
    const selectedHair = document.getElementById(`hair-${color}`);
    selectedHair.style.display = 'block';
}


function Shirt(color){
    const allShirt = document.querySelectorAll(".shirt");
    for(let x of allShirt){
        x.style.display = "none";
    }
    const selectedShirt = document.getElementById(`shirt-${color}`);
    selectedShirt.style.display = 'block';
}

function Pant(color){
    const allPant = document.querySelectorAll(".pant");
    for(let x of allPant){
        x.style.display = "none";
    }
    const selectedPant = document.getElementById(`pant-${color}`);
    selectedPant.style.display = 'block';
}

function Shoe(color){
    const allShoe = document.querySelectorAll(".shoe");
    for(let x of allShoe){
        x.style.display = "none";
    }
    const selectedShoe = document.getElementById(`shoe-${color}`);
    selectedShoe.style.display = 'block';
}

