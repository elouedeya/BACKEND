const express = require("express");
const app = express();
app.use(express.json());
const mysql = require("mysql2");

const query = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "session3_node",
});

app.get("/", (req, res) => {
  // query.execute(
  //   "insert into users (name, email, password) values('nour','nour@gmail.com','123')"
  // );
  // query.execute("update users  set name= 'amine' where id=2 ");
  // res.send({ message: "hello" });
  // query.execute("select * from users", (err, data) => {
  //   res.json(data);
  // });
});
app.post("/adduser", (req, res) => {
  const { name, email, password } = req.body;
  query.execute(
    `insert into users (name, email, password) values ('${name}', '${email}', '${password}' )`
  );
  res.json({ message: "success" });
});

app.put("/updateuser", (req, res) => {
  const { name, email, id } = req.body;
  query.execute(
    `update users set name ='${name}', email = '${email}' where id=${id}`
  );
  res.json({ message: "User updated successfully!" });
});
app.delete("/deleteuser", (req, res) => {
  const { id } = req.body;
  query.execute(`delete from users where id=${id}`);
  res.json({ messgae: "success !" });
});
app.listen(3000, () => {
  console.log("server running...");
});
