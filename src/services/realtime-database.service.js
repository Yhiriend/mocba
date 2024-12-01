import { ref, onValue, off } from "firebase/database";
import { realtimedb } from "../infrastructure/firebase.config";
class RealtimeDatabaseService {
    /**
     * @param path
     * @param callback
     * @returns
     */
    listenToChanges(path, callback) {
        const reference = ref(realtimedb, path);
        const listener = onValue(reference, (snapshot) => {
            const data = snapshot.exists() ? snapshot.val() : null;
            callback(data);
        });
        return () => off(reference, "value", listener);
    }
}
const realtimeDatabaseService = new RealtimeDatabaseService();
export default realtimeDatabaseService;
