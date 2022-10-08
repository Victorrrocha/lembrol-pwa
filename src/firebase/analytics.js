import firebase from "./firebase";
import { getAnalytics, logEvent } from "firebase/analytics";

const analytics = getAnalytics(firebase);

export const sendLogEvent = (description) => {
    logEvent(analytics, description);
};

export default analytics;
