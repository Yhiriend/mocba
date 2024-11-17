import { ref, onValue, off, DataSnapshot } from "firebase/database";
import { realtimedb } from "../infrastructure/firebase.config";

class RealtimeDatabaseService {
  /**
   * @param path
   * @param callback
   * @returns
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
