var React = require("react");
const Navbar = require("./navBar.jsx");


class Index extends React.Component {
  render() {
    // console.log("THIS PROPS: ", this.props.user);
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
          <div style={{margin:'30px'}}> 
            <div >
              <h1 style={{color:"#33b5a4"}}>Welcome</h1>
              <p>
              We were a nail bar, a cafe, and we used to have a retail space, but we’ve refreshed our concept and consolidated our expertise to focus on what we do best – helping you feel and look even more amazing than you already are with our nail and lash services. If you’re looking to be pampered, you’re in the right place. 
              </p>
              <img src="http://www.manicurious.sg/wordpress2016/wp-content/uploads/2016/01/manicurious-nail-bar-1-1280x540.jpg" alt="chairs"/>
            </div>
          </div>   
        </body>
      </html>
    );
  }
}

module.exports = Index;
