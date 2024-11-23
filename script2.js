document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formulario-contacto");

    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value;
        const reason = document.getElementById("reason").value;
        const email = document.getElementById("email").value;
        
        if (name === "" || reason === "" || email === "") {
            alert("Todos los campos deben ser diligenciados. (:");
            event.preventDefault();
        } else if (!validateEmail(email)) {
            alert("Tu E-mail no es váido. ):");
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
});
