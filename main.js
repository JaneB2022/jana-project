//Scroll to top button:

var mybutton = document.getElementById("myBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// List Modal - add varieties:

document.querySelector(".show").addEventListener("click", function() {
    document.querySelector(".mask").classList.add("active");
    document.querySelector(".modal_wsl").classList.remove("active");
})

function closeModal() {
    document.querySelector(".mask").classList.remove("active");
}

document.querySelector(".close").addEventListener("click", function() {
    closeModal();
});

document.querySelector(".mask").addEventListener("click", function() {
    closeModal();
});

document.addEventListener("keyup", function(e) {
    if (e.keyCode == 27) {
        closeModal();
    }
});

// Wishist Modal - add varieties:

const button = document.querySelector("#showBtn");

button.addEventListener("click", showForm);

function showForm() {
    document.querySelector(".modal_wsl").classList.add("active");
    document.querySelector(".mask").classList.remove("active");
}

const close = document.querySelector("#closeBtnTwo");

close.addEventListener("click", function() {
    document.querySelector(".modal_wsl").classList.remove("active");
})


// List sorting in alphabetical order:

const list = document.getElementById("list");

let elements = ["Millefleur", "Broad Ripple Yellow Currant", "Sunviva", "Roma", "Minibel", "Rio Grande", "Indigo (Rose?)", "Montserrat", "Pineapple", "Golden Princess", "White Queen", "St. Pierre", "Yellow Pear", "Coração de Boi", "Muchamiel", "Yellow Stuffer", "Noire de Crimee", "Zebra", "Honey", "Amateur", "Principe Borghese", "Red Cherry", "Blondköpfchen", "Gold Rush Currant", "Peacevine Cherry", "Hawaiian Currant", "Black Cherry", "Gold Nugget Cherry", "Brandywine OTV", "Granny Cantrell\'s German Pink", "Elmer\'s Old German", "Elbe", "Black Krim", "Black Plum", "Amana Orange", "Amish Red", "Anna Russian", "Aunt Ginny\'s Purple", "Aker\'s Plum", "Zapotec Pleated", "Big White Pink Stripe", "Chocolate Stripes", "Dixie Golden Giant", "Green Grape", "Azoychka", "Japanese Black Trifele", "Purple Calabash", "Aunt Lucy\'s Italian Paste", "Cream Sausage", "Elfin", "Sudduth Strain Brandywine", "Vintage Wine", "Chinese", "Britain\'s Breakfast", "Berwick German", "Banana Legs", "Cream", "Cerise Orange", "Crazy", "Chadwick Cherry", "Dwarf Hannah\'s Prize", "Dwarf Pink Passion", "Ella\'s Pink Plum", "Fruit Punch Cherry", "Gill\'s All Purpose", "Grushovka", "Glory of Moldova", "Gogoshari Striped", "Grandma Mary's", "Hezhou", "Indische Fleisch", "Kalman\'s Hungarian Pink", "Long Keeper", "Lime Green Salad", "La Carotina", "Myona", "Milano Plum", "Marz Round Green", "Nebraska Wedding", "New Big Dwarf", "Nikolayev Yellow Cherry", "Pakenham Pear", "Quedlinburger Frühe Liebe", "Red Robin", "Doochova Yellow Pepper", "Pink Grapefruit", "Surender\'s Indian Curry", "Silvery Fir Tree", "Sweet Ornage Cherry", "Siberian Red", "Sprite", "Taxi", "Thai Pink Egg", "Tondino di Manduria", "Ten Fingers of Naples", "White Rabbit", "St. Ivy", "Grosse Lisse", "Amy\'s Sugar Gem", "Aunt Ruby\'s Yellow Cherry", "Alaskan Fancy", "Amber Colored", "Pride of Flanders", "San Marzano", "Red Currant", "Sweet Pea", "Chiapas Wild", "Red Fig"];

elements.sort();

console.log(elements);

elements.forEach(function(element) {

    const listItem = document.createElement("li");
    listItem.setAttribute("class", "my-tomatoes")
    listItem.innerText = element;

    list.appendChild(listItem);
})


// Wishlist sorting in alphabetical order:

const wishlist = document.getElementById("wishlist");

let wsl_elements = ["Djena Lee\'s Golden Girl", "Dr. Carolyn", "Double Rich", "Ed\'s Fat Plum", "Esmeralda Golosina", "Faribo Goldheart", "Fence Row Cherry", "Grandfather Martino", "Nyagous", "La Carotina", "Gramma Climen Hagen", "Jaune Coeur de Pigeon", "Koralik", "Marlowe Charleston", "Tobolsk", "Pakenham Pear", "Angora Super Sweet", "Black Ethiopian", "Nicholaevna Pink", "Rosalita", "Violet Jasper", "Israel", "Orlov Yellow Giant", "Tiger Paw"];

wsl_elements.sort();

console.log(wsl_elements);

wsl_elements.forEach(function(wsl_element) {

    const listItem = document.createElement("li");

    listItem.innerText = wsl_element;

    wishlist.appendChild(listItem);
})


// List Counter:

document.getElementById("variantCount").innerText = elements.length