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


  return {
    getAllUser,
    
  };
};
