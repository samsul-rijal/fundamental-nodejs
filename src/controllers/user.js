// Import db connection and QueryTypes from sequelize
const db = require("../database/connection");
const { QueryTypes } = require("sequelize");

// Function addUsers for insert user data to database
exports.addUsers = async (req, res) => {
  try {
    const { email, password, name, status } = req.body;

    const query = `INSERT INTO users (email,password,name,status) VALUES ('${email}','${password}','${name}','${status}')`;

    await db.sequelize.query(query);

    res.send({
      status: "success",
      message: "Add user finished",
      query,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

// Create controller get Users here ...
exports.getUsers = async (req, res) => {
    try {
      const query = "SELECT * FROM users";
      const data = await db.sequelize.query(query, { type: QueryTypes.SELECT });
  
      res.send({
        status: "success",
        data,
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: "failed",
        message: "Server Error",
      });
    }
  };

// Create controller get User by received id here ...
exports.getUser = async (req, res) => {
    try {
      const { id } = req.params;
  
      const data = await db.sequelize.query(
        `SELECT * FROM users WHERE id = ${id}`,
        { type: QueryTypes.SELECT }
      );
  
      res.send({
        status: "success",
        data,
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: "failed",
        message: "Server Error",
      });
    }
  };