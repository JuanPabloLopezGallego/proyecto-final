function registrarUsuario() {
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;
    const genero = document.getElementById("genero").value;

    // Validar y guardar en el localStorage (puedes mejorar la seguridad)
    if (nombre && apellidos && correo && contrasena) {
        const usuario = {
            nombre,
            apellidos,
            correo,
            contrasena,
            genero
        };
        localStorage.setItem(contrasena, JSON.stringify(usuario));
        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        window.location.href = "paginaLogin.html"; // Redirigir a la página de inicio de sesión
    } else {
        alert("Por favor, complete todos los campos.");
    }
}