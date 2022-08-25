import * as admin from "firebase-admin";

const app = admin.initializeApp();

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
