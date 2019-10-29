module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const userCC = require('./controllers/userCon')(allModels);
  const bookCC = require('./controllers/bookingCon')(allModels);

  app.get('/', userCC.index);
  app.get('/about', userCC.about);
  app.get('/menu', userCC.menu);
  app.get('/register', userCC.registration);
  app.post('/register', userCC.registered);
  app.get('/login', userCC.login);
  app.post('/login', userCC.logged);
  app.get('/user/:id', userCC.profile);
  app.get('/book', bookCC.bookForm); 
  app.post('/book', bookCC.booked);

  
};
