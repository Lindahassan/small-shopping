import { getMessaging } from "firebase/messaging";

const messaging = getMessaging();
// Add the public key generated from the console here.
messaging.getToken({vapidKey: "BKagOny0KF_2pCJQ3m....moL0ewzQ8rZu"});