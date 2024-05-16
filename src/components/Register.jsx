import React from 'react'

const Register = () => {
    return (
        <div className="columna">
            <h2>Registro</h2>
            <form>
                <div className="campo">
                    <label htmlFor="nombre_registro">Nombre:</label>
                    <input
                        type="text"
                        id="nombre_registro"
                        name="nombre_registro"
                        required
                    />
                </div>
                <div className="campo">
                    <label htmlFor="email_registro">Correo electrónico:</label>
                    <input
                        type="email"
                        id="email_registro"
                        name="email_registro"
                        required
                    />
                </div>
                <div className="campo">
                    <label htmlFor="password_registro">Contraseña:</label>
                    <input
                        type="password"
                        id="password_registro"
                        name="password_registro"
                        required
                    />
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    )
}

export default Register