const sha256 = require('js-sha256');

module.exports = (db) => {
  let SALT = "mrbombastic";
/**
 * ===========================================
 * Controller logic
 * ===========================================
 */

  let indexCC = (request, response) => {
      response.render('nail/index');

  };
//==================================================
let aboutCC = (request, response) => {
  response.render('nail/about');

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
        if (user === "wrongpassword") {
          response.send("WRONG PASSWORD");
        } else if (user) {
          let hashCookie = sha256(user.name + SALT);
          response.cookie("logged_in", hashCookie);
          response.cookie("user_id", user.id);
          response.cookie("user_name", user.name)
          let id = user.id;  
          response.redirect('/user/' + id);
        } else {
          console.log("NO INPUT");
          // let message = "I didnt feel your input. Reload and try again."
          // response.render('/login' , message)
          response.send("I didnt feel your input. Reload and try again.")
        }
      } 
    });
  };
//==================================================

let profileCC = (request, response) => {
    let id = request.params.id;
    db.nail.profileUser(id, (error, userInfo) => {
      if (error) {
        console.error("query error:", error.stack);
        response.send("query error");
      } else {
        db.booking.userBooks(id,(error, userBook) => {
          if (error) {
            console.error("query error:", error.stack);
            response.send("query error");
          } else {
            db.booking.adminBooks(id, (error, adminInfo) => {
              if (error) {
                console.error("query error:", error.stack);
                response.send("query error");
              } else {
                let data = {
                user : userInfo,
                userbook : userBook,
                admin : adminInfo
                }
              response.render('nail/userProfile', data);
              }
            });
          }
        });
      }
    });
  };

//==================================================



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
    about : aboutCC,
    profile : profileCC
  };

}
