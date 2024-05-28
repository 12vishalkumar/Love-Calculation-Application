// //************************************ Love Function **************************************************
function love() {
    var name1 = document.getElementById("NameOne").value;
    var name2 = document.getElementById("NameTwo").value;
    var printElement = document.getElementById("print");
    var statementElement = document.getElementById("statement");

    if (name1.length <= 2 || name2.length <= 2) {
        alert("Enter at least 3 characters for both names.");
        return;
    }
    var random = Math.floor(Math.random() * 100);
    printElement.innerHTML = `${name1} Loves ${name2} 😘💖 ➡➡ ${random}%`;
    printElement.style.display = "block";

    if (random <= 60) {
        statementElement.innerHTML = "Moderate Relationship😪😪😗";
    } else {
        statementElement.innerHTML = "Lovely Relationship😍😍😘😘";
    }
    statementElement.style.display = "block";
}