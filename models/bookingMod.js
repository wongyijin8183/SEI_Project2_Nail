/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

//===================================================================
  let userBooks = (id, callback) => {
    let query = `SELECT bookings.date, bookings.time, menu.service, bookings.confirmed, bookings.user_id, bookings.show FROM bookings INNER JOIN menu ON menu.id = bookings.menu_id WHERE bookings.user_id = ${id} ORDER BY bookings.date`;
    dbPoolInstance.query(query, (error, queryResult) => {
      
      if (error) {
        // invoke callback function with results after query has executed
        callback(error);
      } else {
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        }else{
          callback(null, null);
        }
      }
    });
  };
  
//===================================================================
let adminBooks = (id, callback) => {
  let query = `SELECT bookings.date, bookings.time, menu.service, bookings.user_id, bookings.confirmed, bookings.user_id, bookings.show FROM bookings INNER JOIN menu ON menu.id = bookings.menu_id ORDER BY bookings.date`;
  dbPoolInstance.query(query, (error, queryResult) => {
    
    if (error) {
      // invoke callback function with results after query has executed
      callback(error);
    } else {
      // invoke callback function with results after query has executed
      if( queryResult.rows.length > 0 ){
        callback(null, queryResult.rows);
      }else{
        callback(null, null);
      }
    }
  });
};
//===================================================================
  let postNewBook = (newBook, userCookies, callback) => {
    let bookDate = newBook.date;
    let bookTime = newBook.time + ":00";
    let bookService = newBook.menu_id;
    let bookUser = userCookies.user_id;
    let booking = [ bookDate, bookTime, bookService, bookUser ];
    let query = 'INSERT INTO bookings (date, time, menu_id, user_id) VALUES ($1, $2, $3, $4) RETURNING *';
    dbPoolInstance.query(query, booking, (error, queryResult) => {
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


  return {
    postNewBook,
    userBooks,
    adminBooks
  };
};
