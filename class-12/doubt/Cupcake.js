function ShowVanilla() {
    document.getElementById("Cupcake").src = "Vanilla.png";
}
function ShowChocolate() {
    document.getElementById("Cupcake").src = "Chocolate.png";
}

function ShowOrange() {
    document.getElementById("Cupcake").src = "Orange.png";
}

function check() {
    var x = document.getElementById("NumCakes").value;
    //These variables contain the amount of ingredients for 6 cakes
    var Butter = 120;
    var Sugar = 120;
    var Flour = 120;
    var Eggs = 1;
    var Extract = 0.5;
    switch (Number(x)) {
        case 6:
            document.getElementById("Butter").innerHTML = Butter * 1;
            document.getElementById("Sugar").innerHTML = Sugar * 1;
            document.getElementById("Flour").innerHTML = Flour * 1;
            document.getElementById("Eggs").innerHTML = Eggs * 1;
            document.getElementById("Extract").innerHTML = Extract * 1;
            break;

        case 12:
            document.getElementById("Butter").innerHTML = Butter * 2;
            document.getElementById("Sugar").innerHTML = Sugar * 2;
            document.getElementById("Flour").innerHTML = Flour * 2;
            document.getElementById("Eggs").innerHTML = Eggs * 2;
            document.getElementById("Extract").innerHTML = Extract * 2;
            break;

        case 18:
            document.getElementById("Butter").innerHTML = Butter * 3;
            document.getElementById("Sugar").innerHTML = Sugar * 3;
            document.getElementById("Flour").innerHTML = Flour * 3;
            document.getElementById("Eggs").innerHTML = Eggs * 3;
            document.getElementById("Extract").innerHTML = Extract * 3;
            break;

        case 24:
            document.getElementById("Butter").innerHTML = Butter * 4;
            document.getElementById("Sugar").innerHTML = Sugar * 4;
            document.getElementById("Flour").innerHTML = Flour * 4;
            document.getElementById("Eggs").innerHTML = Eggs * 4;
            document.getElementById("Extract").innerHTML = Extract * 4;
            break;
        default:
            alert("Cupcakes can be baked only in batches of 6,12,18,24");
    }
}
