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
            <h3 style={{color:"#33b5a4"}}>About Us</h3>
            <p>It’s fresh, it’s new, it’s time for beauty and fashion to come together. We specialize in manicures and nail art, so you can wear your nails to match your style, and to let your style influence your nails. Sink into plush vintage-inspired couches. Luxuriate. All while having your nails done, your tired muscles massaged, and your skin pampered.</p>
            <p>No expense was spared to bring to you what excites us, and we hope that translates into the whole manicurious experience for you. We’d like to think we’re humming your tune, humoring your senses, and are your object of desire.</p>
            <p>Come, be curious. Be manicurious.</p>
            <div >
              <img src="http://www.manicurious.sg/wordpress2016/wp-content/uploads/2016/01/manicurious-nail-bar-2-1280x540.jpg" alt="about"/>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Index;
