var React = require("react");
const Navbar = require("./navBar.jsx");

class Login extends React.Component {
  render() {
    console.log(this.props);
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
            <h3 style={{color:"#33b5a4"}}>Login Page</h3>
            <form action="/login" method="POST">
                  Enter Your Login Details Here:
                  <br></br>
                  <input type="text" name="name" placeholder="name"/>
                  <br></br>
                  <input type="password" name="password" placeholder="password"/>
                  <br></br>
                  <input type="submit" value="Submit"/>
              </form> 
              <p>Don't have an account? Register <a href="/register">here</a></p>
          </div>         
        </body>
      </html>
    );
  }
}

module.exports = Login;
