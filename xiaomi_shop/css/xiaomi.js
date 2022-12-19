let a = document.querySelectorAll("a")

for (let i = 0; i < a.length; i++) {
    a.addEventListener("click", function () {
        a.classList.toggle('active')
        console.log("aaaa")
    })
}