import { paul, paulShoppingCart } from "../tests_data/paul.data";
import { spy } from "sinon";
import * as functions from "firebase-functions-test";
import { assert } from "chai";
import { logger } from "firebase-functions/v1";

process.env.FIRESTORE_EMULATOR_HOST = "localhost:8080";

const testEnv = functions();
const testData = testEnv.firestore.makeDocumentSnapshot(
  paulShoppingCart,
  `/carts/${paulShoppingCart._id}`,
);

import { onCartCreate } from "../../src/payment";
import { store } from "src/repository";
import { fakeCompany1 } from "__TESTS__/tests_data/testCompany.data";

describe("payment module tests", () => {
  after(
    /* async */ () => {
      // await store.collection("settings").doc(fakeCompany1._id).delete();
      // await store.collection("contacts").doc(paul._id).delete();
      testEnv.cleanup();
    },
  );

  before(async () => {
    await store
      .collection("settings")
      .doc(fakeCompany1._id)
      .create(fakeCompany1);
    await store.collection("contacts").doc(paul._id).create(paul);
  });

  it("it logs that a cart has been submitted", async () => {
    const wrapped = testEnv.wrap(onCartCreate);
    await store.collection("settings").doc(fakeCompany1._id).set(fakeCompany1);
    const logSpy = spy(logger, "log");
    await wrapped(testData, {
      params: {
        cartId: paulShoppingCart._id,
      },
    });
    assert(logSpy.called);
  }).timeout(0);
});
