function iniciarSesion() {

    // Verificar si el usuario existe en el localStorage
    const usuario = localStorage.getItem(correo);
    if (usuario) {
        const usuario = JSON.parse(usuarioGuardado);

        // Verificar la contraseña
        if (contraseña === usuario.contrasena) {
            // Usuario autenticado
            // Redirigir a la página de inicio y mostrar el nombre del usuario
            localStorage.setItem('usuario_actual', JSON.stringify(usuario));
            window.location.href = "index.html";
        } else {
            alert("Contraseña incorrecta");
        }
    } else {
        alert("Usuario no encontrado. Regístrate si eres nuevo.");
    }
}