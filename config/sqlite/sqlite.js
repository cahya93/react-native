import SQLite from "react-native-sqlite-storage";

class SQLite3 {
  constructor() {
    SQLite.DEBUG(true);
    SQLite.enablePromise(true);

    this.conn = null;
    SQLite.openDatabase("myApp.dat", "1.0", "Test Database", 200000)
      .then((tx) => {
        this.conn = tx;
        console.log("tx:", tx);
        tx.executeSql(
          "create table if not exists user(username text primary key, password text)"
        ).finally(() => {
          console.log("finally");
          tx.executeSql("insert into user values(?, ?)", ["admin", "admin"])
            .then(() => console.info("Successfuly insert default user!"))
            .catch((err) => console.warn("Failed create default user!!", err));
        });
      })
      .catch((err) => console.error("SQLite Error:", err));
  }
  getAllUsers = () => this.conn.executeSql("select * from user");
  runQuery = (query, params = []) => this.conn.executeSql(query, params);
}

export default SQLite3;
