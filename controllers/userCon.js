const sha256 = require('js-sha256');

module.exports = (db) => {
  let SALT = "mrbombastic";
/**
 * ===========================================
 * Controller logic
 * ===========================================
 */

  let indexCC = (request, response) => {
    db.nail.getAllUser((error, allUsers) => {
      let data = {
        user : allUsers,
      }
      response.render('nail/index', data);
    });
  };
//==================================================

let menuCC = (request, response) => {
  db.nail.getAllMenu((error, allMenu) => {
    let data = {
      service : allMenu,
    }
    response.render('nail/menu', data);
  });
};
//==================================================

  let registrationCC = (request, response) => {
      response.render('nail/registration');
  };

//==================================================
  let registeredCC = (request, response) => {
    const newUser = request.body;
    console.log(request.body);
    db.nail.postNewUser(newUser, (error, user) => {
      if (error) {
        console.error("query error: ", error.stack);
        let data = {
          message: "Invalid Username"
        }
        response.send("invalid");
      } else {
        response.redirect ('/login');
        // response.send("user registered");
      }
    });
  };

//==================================================
let loginCC = (request, response) => {
  response.render('nail/login');
};
//==================================================
let loggedCC = (request, response) => {
  let currentUser = request.body;
  // console.log("current user is: ", currentUser);
  db.nail.checkUser(currentUser, (error, user) => {
    if (error) {
      console.error("query error:", error.stack);
      response.send("query error");
    } else {
      if (user === "correct") {
        response.send("WRONG PASSWORD");
      } else if (user) {
        let hashCookie = sha256(user.name + SALT);
        response.cookie("logged_in", hashCookie);
        response.cookie("user_id", user.id);
        response.cookie("user_name", user.name)
        // console.log("USER ISSSS: ", user.id);
        let id = user.id;  
        response.redirect('/user/' + id);
      } else {
        console.log("NO INPUT");
        // response.render('nail/login')
        response.send("I didnt feel your input. Reload and try again.")
      }
    } 
  });
};
//==================================================
let profileCC = (request, response) => {
  let id = request.params.id;
  db.nail.profileUser(id, (error, userInfo) => {
    let data = {
      user : userInfo,
    }
    response.render('nail/userProfile', data);
  });
};
// //==================================================

//==================================================
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index : indexCC,
    registration : registrationCC,
    registered : registeredCC,
    login : loginCC,
    logged : loggedCC,
    menu : menuCC,
    profile : profileCC
  };

}
