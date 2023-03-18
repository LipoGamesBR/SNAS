const singup = document.getElementById("sign-btn")

singup.addEventListener("click", function(e) {
    e.preventDefault()
    window.location.href = "/register"
})