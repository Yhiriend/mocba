import { UserModel } from "../models/user.model";
import { KEYS } from "../models/constants/keys";
import { useDemoStore } from "../stores/demoStore";

export class AuthService {
  // Simula una petición para obtener un dispositivo por su ID
  async validateKey(key: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const exist = KEYS.includes(key);
        if (exist) resolve(exist);
        else reject();
      }, 5000); // Simula un retraso de 1 segundo
    });
  }

  async login(username: string, password: string): Promise<UserModel> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = useDemoStore().getUserListState;
        const userLogged = users.find(
          (user) => user.username === username && user.password === password
        );
        if (userLogged) resolve(userLogged);
        else reject();
      }, 5000);
    });
  }

  async register(user: UserModel): Promise<UserModel> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = useDemoStore().getUserListState;
        console.log("users", users);
        useDemoStore().setUserList([...users, user]);
        resolve(user);
      }, 5000);
    });
  }
}

// Instancia del servicio
const authService = new AuthService();
export default authService;
