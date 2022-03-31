//Javascript to select Star Rating


document.getElementById('starone').onclick = function () {
    document.getElementById('starone').style.color = "rgb(252, 177, 38)"
    document.getElementById('startwo').style.color = "black"
    document.getElementById('starthree').style.color = "black"
    document.getElementById('starfour').style.color = "black"
    document.getElementById('starfive').style.color = "black"
    document.getElementById('emoji').innerHTML = "&#128545";
    document.getElementById('response').innerHTML = 1;
    console.log(1)
    localStorage.setItem("rank", 1)

}
document.getElementById('startwo').onclick = function () {
    document.getElementById('starone').style.color = "rgb(252, 177, 38)"
    document.getElementById('startwo').style.color = "rgb(252, 177, 38)"
    document.getElementById('starthree').style.color = "black"
    document.getElementById('starfour').style.color = "black"
    document.getElementById('starfive').style.color = "black"
    document.getElementById('response').innerHTML = 2;
    document.getElementById('emoji').innerHTML = "&#128543";
    console.log(2)
    localStorage.setItem("rank", 2)


}
document.getElementById('starthree').onclick = function () {
    document.getElementById('starone').style.color = "rgb(252, 177, 38)"
    document.getElementById('startwo').style.color = "rgb(252, 177, 38)"
    document.getElementById('starthree').style.color = "rgb(252, 177, 38)"
    document.getElementById('starfour').style.color = "black"
    document.getElementById('starfive').style.color = "black"
    document.getElementById('response').innerHTML = 3;
    document.getElementById('emoji').innerHTML = "&#128528";
    console.log(3)
    localStorage.setItem("rank", 3)


}
document.getElementById('starfour').onclick = function () {
    document.getElementById('starone').style.color = "rgb(252, 177, 38)"
    document.getElementById('startwo').style.color = "rgb(252, 177, 38)"
    document.getElementById('starthree').style.color = "rgb(252, 177, 38)"
    document.getElementById('starfour').style.color = "rgb(252, 177, 38)"
    document.getElementById('starfive').style.color = "black"
    document.getElementById('response').innerHTML = 4;
    document.getElementById('emoji').innerHTML = "&#128578";
    console.log(4)
    localStorage.setItem("rank", 4)
}
document.getElementById('starfive').onclick = function () {
    document.getElementById('starone').style.color = "rgb(252, 177, 38)"
    document.getElementById('startwo').style.color = "rgb(252, 177, 38)"
    document.getElementById('starthree').style.color = "rgb(252, 177, 38)"
    document.getElementById('starfour').style.color = "rgb(252, 177, 38)"
    document.getElementById('starfive').style.color = "rgb(252, 177, 38)"
    document.getElementById('response').innerHTML = 5;
    document.getElementById('emoji').innerHTML = "&#128522";
    console.log(5)
    localStorage.setItem("rank", 5)

}

