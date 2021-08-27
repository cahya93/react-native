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
          tx.executeSql(
            "insert into user values(?, ?)",
            ["admin", "admin"],
            ["user", "user"]
          )
            .then(() => console.info("Successfuly insert default user!"))
            .catch((err) => console.warn("Failed create default user!!", err));
        });
      })
      .catch((err) => console.error("SQLite Error:", err));
  }
  getAllUsers = (query) => {
    return new Promise((resolve) => {
      const userList = [];
      this.conn
        .transaction((tx) => {
          tx.executeSql(query)
            .then((results) => {
              console.log("Query completed");
              const len = results[1].rows.length;
              for (let i = 0; i < len; i++) {
                const row = results[1].rows.item(i);
                userList.push(row);
              }
              resolve(userList);
            })
            .catch((err) => {
              console.log("error executesql", err);
            });
        })
        .catch((err) => {
          console.log("error transaction", err);
        });
    });
    // const userList = []
    // this.conn.executeSql("select * from users")
    // .then(result => {
    //     const rows = result[0].rows
    //     for (let index = 0; index < rows.length; index++) {
    //             const row = rows.item(index);
    //             userList.push(row)
    //             // console.log(`row ${index + 1}:`, row);
    //     }
    // })
    // return userList
  };
  runQuery = (query, params = []) => this.conn.executeSql(query, params);
}

export default SQLite3;
