/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAllUser = (callback) => {
    let query = 'SELECT * FROM users';
    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
          // console.log(queryResult.rows);
        }else{
          callback(null, null);
        }
      }
    });
  };
//===================================================================================

  let profileUser = (id, callback) => {
    let userId = id;
    let input = [userId]; 
    let query = `SELECT * FROM users WHERE id = $1`;
    dbPoolInstance.query(query, input, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
          // console.log(queryResult.rows);
        }else{
          callback(null, null);
        }
      }
    });
  };

//===================================================================================
  
  let getAllMenu = (callback) => {
    let query = 'SELECT * FROM menu';
    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        }else{
          callback(null, null);
        }
      }
    });
  };
//===================================================================================

  var sha256 = require('js-sha256');
  var SALT = "mrbombastic";

  let postNewUser = (newUser, callback) => {
    let userName = newUser.name;
    let userPassword = sha256(newUser.password + SALT);
    let input = [userName,userPassword];
    let query = 'INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *';
    dbPoolInstance.query(query, input, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        }else{
          callback(null, null);
        }
      }
    });
  };

//===================================================================================

  let checkUser = (user, callback) => {
    let input = [user.name];
    let queryString = "SELECT * FROM users WHERE users.name=$1";

    dbPoolInstance.query(queryString, input, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        if (result.rows.length > 0) {
          // console.log("RESULT IS:" , result.rows)
          if (sha256(user.password + SALT) === result.rows[0].password && user.name === result.rows[0].name) {
            callback(null, result.rows[0]);
          } else {
            callback(null, "correct");
          }
        } else {
          callback(null, null);
        }
      }
    });
  };


  return {
    getAllUser,
    postNewUser,
    checkUser,
    getAllMenu,
    profileUser
  };
};
