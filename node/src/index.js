const express = require("express");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
  host: "db",
  user: "root",
  password: "root",
  database: "node_db"
});
const queryAsync = async (query) => {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, result) => {
      if(err) {
        reject(err)
        return
      }

      resolve(result)
    })
  })
}

app.get("/", async (request, response) => {
  const names = ["Wesley Williams", "Luiz Carlos", "Cauã"];
  const sortedName = names[Math.floor(Math.random() * names.length)];

  await queryAsync(`INSERT INTO people (name) VALUES ('${sortedName}')`)
  const allRegisteredNames = await queryAsync("SELECT name FROM people")

  const htmlResponse = `
    <h1>Full Cycle Rocks!</h1>
    <ul>
      ${allRegisteredNames.map(({ name }) => `<li>${name}</li>`).join("")}
    </ul>
  `
  return response.send(htmlResponse);
});

(async () => {
  await queryAsync(`
    CREATE TABLE IF NOT EXISTS people (
      id INT NOT NULL auto_increment,
      name varchar(255) NOT NULL,
      PRIMARY KEY (id)
    );
  `);

  app.listen(3333, () => {
    console.log("Server is running on port 3333")
  });
})()
