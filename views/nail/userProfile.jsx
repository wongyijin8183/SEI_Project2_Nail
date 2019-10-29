var React = require('react');
const Navbar = require("./navBar.jsx");

class userProfile extends React.Component {

  render() {

    console.log("ADMIN PANEL:", this.props.admin)

    function upperFirst(params) {
      if(typeof params === 'string') {
        return params.charAt(0).toUpperCase() + params.slice(1);
      }
      return null;
    }
    let name = upperFirst(this.props.user[0].name);

    let bookingdate = '';
    let bookingtime = '';
    let bookingservice = '';
    let bookingconfirmation = '';
    let bookingshow = '';

    if (this.props.userbook) {
      bookingdate = this.props.userbook.map(book => {
        var date = book.date.getDate();
        var month = book.date.getMonth(); //January is 0
        var year = book.date.getFullYear();
        var dateString = date + "-" + (month+1) + "-" + year;
        return <li>{dateString}</li>
      });
      bookingtime = this.props.userbook.map(book => {
        return <li>{book.time}</li>
      });
      bookingservice = this.props.userbook.map(book => {
        return <li>{book.service}</li>
      });
      bookingconfirmation = this.props.userbook.map(book => {
        return <li>{book.confirmed}</li>
      });
      bookingshow = this.props.userbook.map(book => {
        return <li>{book.show}</li>
      });
    }
    let bookingsdate = '';
    let bookingstime = '';
    let bookingsservice = '';
    let bookingsuser = '';
    let bookingsconfirmation = '';
    let bookingsshow = '';

    if (this.props.admin) {
      bookingsdate = this.props.admin.map(book => {
        var date = book.date.getDate();
        var month = book.date.getMonth(); //January is 0
        var year = book.date.getFullYear();
        var dateString = date + "-" + (month+1) + "-" + year;
        return <li>{dateString}</li>
      });
      bookingstime = this.props.admin.map(book => {
        return <li>{book.time}</li>
      });
      bookingsuser = this.props.admin.map(book => {
        return <li>{book.user_id}</li>
      });
      bookingsservice = this.props.admin.map(book => {
        return <li>{book.service}</li>
      });
      bookingsconfirmation = this.props.admin.map(book => {
        return <li><button></button>  {book.confirmed}</li>
      });
      bookingsshow = this.props.admin.map(book => {
        return <li> <button ></button>{book.show}</li>
        
      });
    }
    

    console.log(this.props.userbook)

    let adminPanel = <div class="container">
        <div class="row">
            <div class="col-2">
              <h4>Date</h4>
              <ul>{bookingsdate}</ul>
            </div>
            <div class="col-2">
              <h4>Time</h4>
              <ul>{bookingstime}</ul>
            </div>
            <div class="col-1">
              <h4>ID</h4>
              <ul>{bookingsuser}</ul>
            </div>
            <div class="col-3">
              <h4>Service</h4>
              <ul>{bookingsservice}</ul>
            </div>
            <div class="col-2">
              <h4>Confirmation</h4>
              <ul>{bookingsconfirmation}</ul>
            </div>
            <div class="col-2">
              <h4>Status</h4>
              <ul>{bookingsshow}</ul>
            </div>
        </div>
      </div>
    

    let userPanel = <div class="container">
        <div class="row">
            <div class="col-2">
              <h4>Date</h4>
              <ul>{bookingdate}</ul>
            </div>
            <div class="col-2">
              <h4>Time</h4>
              <ul>{bookingtime}</ul>
            </div>
            <div class="col-3">
              <h4>Service</h4>
              <ul>{bookingservice}</ul>
            </div>
            <div class="col-2">
              <h4>Confirmation</h4>
              <ul>{bookingconfirmation}</ul>
            </div>
            <div class="col-3">
              <h4>Status</h4>
              <ul>{bookingshow}</ul>
            </div>
        </div>
      </div>
    let loadProfile = this.props.user[0].name === "admin"? adminPanel:userPanel;


    return (
      <html>
        <head>
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          ></link>
        </head>        
        <body>
            <Navbar/>
          
            <h1>Hello {name}</h1> 
            {loadProfile}

        </body>
      </html>
    );
  }
}

module.exports = userProfile;