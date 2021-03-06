var React = require("react");
const Navbar = require("./navBar.jsx");

class Registration extends React.Component {
  render() {
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
          <div style={{textAlign:'center'}}> 
            <h3  style={{color:"#33b5a4"}}>Registration Page</h3>
            <form action="/register" method="POST">
                  Enter Your Details Here:
                  <br></br>
                  <input type="text" name="name" placeholder="name"/>
                  <br></br>
                  <input type="password" name="password" placeholder="password"/>
                  <br></br>
                  <input type="submit" value="Submit"/>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Registration;
