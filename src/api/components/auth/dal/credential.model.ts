/**
 * Credenciales que permiten iniciar sesión a un usuario
 */
export interface UserCredential {
    /**
     * Username del usuario
     */
    username: string;
    /**
     * Contraseña del usuario
     */
    password: string;
}