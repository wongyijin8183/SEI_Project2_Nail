// const sha256 = require('js-sha256');

module.exports = (db) => {
//   let SALT = "mrbombastic";
/**
 * ===========================================
 * Controller logic
 * ===========================================
 */

  let bookFormCC = (request, response) => {
    db.nail.getAllMenu((error, allMenu) => {
      let data = {
        service : allMenu,
      }
    response.render('nail/bookForm', data);
    });
  };
//==================================================


//==================================================



//==================================================
  // let registeredCC = (request, response) => {
  //   const newUser = request.body;
  //   console.log(request.body);
  //   db.nail.postNewUser(newUser, (error, user) => {
  //     if (error) {
  //       console.error("query error: ", error.stack);
  //       let data = {
  //         message: "Invalid Username"
  //       }
  //       response.send("invalid");
  //     } else {
  //       response.redirect ('/login');
  //       // response.send("user registered");
  //     }
  //   });
  // };

//==================================================

//==================================================
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    bookForm : bookFormCC,
    // registration : registrationCC,

  };

}
