var React = require('react');
const Navbar = require("./navBar.jsx");

class userProfile extends React.Component {

  render() {
    // console.log("EACH USER LOGGGGGGGG:", this.props.user[0].name);
    // console.log("EACH USER LOGGGGGGGG:", this.props.user);
    let profile = this.props.user[0].name;

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
          
            <h1>Hello</h1> 
            <br/>
            {profile}
          
        </body>
      </html>
    );
  }
}

module.exports = userProfile;