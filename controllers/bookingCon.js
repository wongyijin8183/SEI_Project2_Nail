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
  let bookedCC = (request, response) => {
    const newBook = request.body;
    const userCookies = request.cookies;
    db.booking.postNewBook (newBook, userCookies, (error, booking) => {
      if (error) {
        console.error ("query error: ", error.stack);
        response.send("something wrong with your booking");
      } else {
        let data = {
          booking : booking
        }
        // response.render ('/nail/bookConfirm', data);
        // response.send(newBook);
        response.redirect(`/user/${request.cookies.user_id}`);
      }
    })
  }

//==================================================
// let adminCC = (request, response) => {
//   db.nail.adminBooks(id, (error, adminInfo) => {
//     if (error) {
//       console.error("query error:", error.stack);
//       response.send("query error");
//     } else {
//       let data = {
//       admin : adminInfo
//       }
//       response.render('nail/userProfile', data);
//     }
//   });
// };

//==================================================

//==================================================


//==================================================

//==================================================
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    bookForm : bookFormCC,
    booked : bookedCC
    // admin : adminCC
    // userbookings : userBookingsCC
    

  };

}
