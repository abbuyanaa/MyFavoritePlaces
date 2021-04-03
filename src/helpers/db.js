import * as sqlite from "expo-sqlite";

const db = sqlite.openDatabase("places.db");

export const initDB = () => {
  return createPromise(
    "CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);",
    []
  );
};

export const insertPlace = (title, imageUri, address, lat, lng) => {
  return createPromise(
    "INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?);",
    [title, imageUri, address, lat, lng]
  );
};

export const getPlaces = () => {
  return createPromise("SELECT * FROM places", []);
};

export const clearPlaces = () => {
  return createPromise("DELETE FROM places", []);
};

const createPromise = (sql, parameters) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        sql,
        parameters,
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};
