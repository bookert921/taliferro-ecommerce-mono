import * as admin from "firebase-admin";

const __PROD__ = process.env.NODE_ENV === "production";
let app: admin.app.App;
if (!__PROD__) {
  app = admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
} else {
  app = admin.initializeApp();
}

/**
 * @param {string} app
 *
 * @return {FirebaseFirestore.Firestore}
 */
export const store = (function (
  app: admin.app.App,
): FirebaseFirestore.Firestore {
  return app.firestore();
})(app);

/**
 * @param {string} app
 *
 * @return {FirebaseFirestore.Firestore}
 */
export const blob = (function (app: admin.app.App): admin.storage.Storage {
  return app.storage();
})(app);
