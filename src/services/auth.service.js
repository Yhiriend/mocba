import { collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where, } from "firebase/firestore";
import { dbFirestore } from "../infrastructure/firebase.config";
import { jwtVerify, SignJWT } from "jose";
import { useAuhtStore } from "../stores/auth.store";
const SECRET_KEY = "tu_clave_secreta";
export class AuthService {
    async validateKey(key) {
        const keyDocRef = doc(dbFirestore, "userKeys", key);
        try {
            const keyDoc = await getDoc(keyDocRef);
            if (keyDoc.exists()) {
                const data = keyDoc.data();
                if (data.active === false) {
                    return data.type;
                }
                else {
                    throw new Error("Key is already active");
                }
            }
            else {
                throw new Error("Key does not exist");
            }
        }
        catch (error) {
            console.error("Error validating key:", error);
            return Promise.reject(error);
        }
    }
    async login(username, password) {
        try {
            const usersCollection = collection(dbFirestore, "users");
            const q = query(usersCollection, where("username", "==", username), where("password", "==", password));
            const querySnapshot = await getDocs(q);
            if (querySnapshot.empty) {
                throw new Error("Usuario no encontrado");
            }
            const userDoc = querySnapshot.docs[0];
            const user = userDoc.data();
            console.log(user);
            return user;
        }
        catch (error) {
            console.error("Error al iniciar sesión: ", error);
            throw error;
        }
    }
    async register(user, key) {
        try {
            const userRef = doc(dbFirestore, "users", user.id);
            await setDoc(userRef, user);
            const keyRef = doc(dbFirestore, "userKeys", key);
            await updateDoc(keyRef, { active: true });
            console.log(`El key ${key} ha sido activado.`);
            console.log("Usuario registrado con ID:", user.id);
            return user;
        }
        catch (error) {
            console.error("Error registrando el usuario:", error);
            return Promise.reject(error);
        }
    }
    async getUserById(id) {
        try {
            const userRef = doc(dbFirestore, "users", id);
            const userSnapshot = await getDoc(userRef);
            if (userSnapshot.exists()) {
                const userData = userSnapshot.data();
                return userData;
            }
            else {
                throw new Error("Usuario no encontrado");
            }
        }
        catch (error) {
            console.error("Error obteniendo el usuario:", error);
            return Promise.reject(error);
        }
    }
    async updateUser(userId, updatedUserData) {
        try {
            const userRef = doc(dbFirestore, "users", userId);
            await updateDoc(userRef, updatedUserData);
            const userState = useAuhtStore().getUserState;
            const userUpdate = { ...userState, updatedUserData };
            useAuhtStore().setUser(userUpdate);
            console.log(`Usuario con ID ${userId} ha sido actualizado.`);
            return true;
        }
        catch (error) {
            console.error("Error actualizando el usuario:", error);
            throw error;
        }
    }
    async generateToken(payload) {
        try {
            const encoder = new TextEncoder();
            const secretKey = encoder.encode(SECRET_KEY);
            const jwt = await new SignJWT(payload)
                .setProtectedHeader({ alg: "HS256", typ: "JWT" })
                .setIssuedAt()
                .setExpirationTime("2h")
                .sign(secretKey);
            return jwt;
        }
        catch (error) {
            console.error("Error al generar el token: ", error);
            throw error;
        }
    }
    async verifyToken(token) {
        try {
            const { payload } = await jwtVerify(token, new TextEncoder().encode(SECRET_KEY));
            return payload;
        }
        catch (error) {
            console.error("Token inválido o expirado:", error);
            return null;
        }
    }
}
const authService = new AuthService();
export default authService;
