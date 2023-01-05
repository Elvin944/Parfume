let money=0;
localStorage.setItem("mode",i.classList);

function GiveMoney(x) {
    return money+=x;
}

if (localStorage.getItem("mode")!=" ") {
    body.classList.add(localStorage.getItem("mode"))
};