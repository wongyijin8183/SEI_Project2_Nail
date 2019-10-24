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
          <h3>Hello</h3>
        </body>
      </html>
    );
  }
}

module.exports = Index;
