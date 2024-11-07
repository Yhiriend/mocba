import { UserModel } from "../models/user.model";
import { KEYS } from "../models/constants/keys";
import { useDemoStore } from "../stores/demoStore";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../infrastructure/firebase.config";
import { jwtVerify, SignJWT } from "jose";

const SECRET_KEY = "tu_clave_secreta";
export class AuthService {
  async validateKey(key: string): Promise<boolean> {
    const keyDocRef = doc(db, "userKeys", key); // Asume que el ID del documento es la clave

    try {
      const keyDoc = await getDoc(keyDocRef);

      if (keyDoc.exists()) {
        const data = keyDoc.data();
        if (data.active === false) {
          return true; // Resuelve la promesa si active es false
        } else {
          throw new Error("Key is already active");
        }
      } else {
        throw new Error("Key does not exist");
      }
    } catch (error) {
      console.error("Error validating key:", error);
      return Promise.reject(error);
    }
  }

  async login(username: string, password: string): Promise<UserModel> {
    try {
      // Creamos una referencia a la colección de usuarios
      const usersCollection = collection(db, "users");

      // Hacemos la consulta para encontrar el usuario por username y password
      const q = query(
        usersCollection,
        where("username", "==", username),
        where("password", "==", password)
      );

      // Obtenemos los documentos de la consulta
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        // Si no se encuentra el usuario, lanzamos un error
        throw new Error("Usuario no encontrado");
      }

      // Si encontramos al usuario, lo retornamos
      const userDoc = querySnapshot.docs[0]; // Suponemos que solo hay un usuario con el mismo username
      const user = userDoc.data() as UserModel;

      // Podemos devolver el usuario
      console.log(user);
      return user;
    } catch (error) {
      console.error("Error al iniciar sesión: ", error);
      throw error; // Rechazamos la promesa si ocurre un error
    }
  }

  async register(user: UserModel, key: string): Promise<UserModel> {
    try {
      const userRef = doc(db, "users", user.id);
      await setDoc(userRef, user);
      const keyRef = doc(db, "userKeys", key);
      await updateDoc(keyRef, { active: true });
      console.log(`El key ${key} ha sido activado.`);
      console.log("Usuario registrado con ID:", user.id);
      return user;
    } catch (error) {
      console.error("Error registrando el usuario:", error);
      return Promise.reject(error);
    }
  }

  async getUserById(id: string): Promise<UserModel> {
    try {
      // Crea una referencia al documento del usuario en la colección 'users'
      const userRef = doc(db, "users", id);
      const userSnapshot = await getDoc(userRef);

      // Verifica si el documento existe
      if (userSnapshot.exists()) {
        // Devuelve los datos del usuario como un objeto UserModel
        const userData = userSnapshot.data() as UserModel;
        return userData;
      } else {
        // Rechaza la promesa si el usuario no existe
        throw new Error("Usuario no encontrado");
      }
    } catch (error) {
      console.error("Error obteniendo el usuario:", error);
      return Promise.reject(error);
    }
  }

  async generateToken(payload: Record<string, any>): Promise<string> {
    try {
      // Crear un nuevo token con la clave privada
      const encoder = new TextEncoder();
      const secretKey = encoder.encode(SECRET_KEY); // Usa tu clave secreta

      // Crea el JWT
      const jwt = await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256", typ: "JWT" }) // Aquí se establece el encabezado protegido
        .setIssuedAt() // Fecha de emisión
        .setExpirationTime("2h") // Tiempo de expiración, por ejemplo 2 horas
        .sign(secretKey); // Firma el JWT con la clave secreta

      return jwt;
    } catch (error) {
      console.error("Error al generar el token: ", error);
      throw error;
    }
  }

  async verifyToken(
    token: string
  ): Promise<{ id: string; username: string } | null> {
    try {
      const { payload } = await jwtVerify(
        token,
        new TextEncoder().encode(SECRET_KEY)
      );
      return payload as { id: string; username: string };
    } catch (error) {
      console.error("Token inválido o expirado:", error);
      return null;
    }
  }
}

const authService = new AuthService();
export default authService;
