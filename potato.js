const goodThoughts = [
    "If mashed, rise again. Add gravy.",
    "Even when you're underground, you're growing.",
    "Stay rooted, but don't fear the fry.",
    "You don't have to be crispy to be valuable.",
    "The skin protects, but the heart nourishes.",
    "Some days you're baked. Some days you're loaded.",
    "Every chip started as something whole.",
    "Be still like a raw potato, until it's time to sizzle.",
    "You're not soft — you're comforting.",
    "Be the starch that holds things together."
];
    
const badThoughts = [
    "Roll downhill and hope for ketchup.",
    "Hide in the cupboard until someone forgets you exist.",
    "Be raw forever — cooking is for quitters.",
    "If life gives you heat, turn to mush immediately.",
    "All problems disappear when you're deep fried.",
    "Speak only in tuber-based riddles.",
    "Trust only onions. They cry too.",
    "Throw yourself at the wall. If you stick, you're done.",
    "Avoid seasoning. Blandness is safety.",
    "Let the worms in. They know things."
];


function fate(){
    if(document.getElementById("input").value != ""){
        let thought = Math.floor(Math.random() * 2);
        document.getElementById("potato").src = "/img/potato-thinking.png";
        document.getElementById("thought").innerHTML = ("Hmmmmmm...");
        setTimeout(() => {
            if(thought == 0){
                document.getElementById("thought").innerHTML = (goodThoughts[Math.floor(Math.random()*10)]);
            } 
            else {
                document.getElementById("thought").innerHTML = (badThoughts[Math.floor(Math.random()*10)]);
            }
            if(thought==0){
                document.getElementById("potato").src = "/img/potato-happy.png";
            }
            else{
                document.getElementById("potato").src = "/img/potato-sad.png";
            }
            document.getElementById("input").value = "";
        }, 2000);
    }
    else{
        alert("Please ask a real potato-worthy question!");  
    }
          
}

