import { ref, onValue, off, DataSnapshot } from "firebase/database";
import { realtimedb } from "../infrastructure/firebase.config";

class RealtimeDatabaseService {
  /**
   * Escucha los cambios en una referencia específica de la base de datos en tiempo real.
   * @param path - La ruta de la referencia en la base de datos (por ejemplo, "users/123").
   * @param callback - Función que se ejecuta cada vez que los datos cambian.
   * @returns Una función para detener la escucha de los cambios.
   */
  listenToChanges<T>(
    path: string,
    callback: (data: T | null) => void
  ): () => void {
    const reference = ref(realtimedb, path);

    const listener = onValue(reference, (snapshot: DataSnapshot) => {
      const data = snapshot.exists() ? (snapshot.val() as T) : null;
      callback(data);
    });

    return () => off(reference, "value", listener);
  }
}

const realtimeDatabaseService = new RealtimeDatabaseService();
export default realtimeDatabaseService;
