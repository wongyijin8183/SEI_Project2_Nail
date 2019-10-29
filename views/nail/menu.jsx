var React = require("react");
const Navbar = require("./navBar.jsx");

class Menu extends React.Component {
  render() {
    console.log("THIS PROPS: ", this.props.service);
    let service = this.props.service.map(service => {
        return <li> {service.service}</li>
    });
    let price = this.props.service.map(service => {
      return <li> ${service.price}</li>
    });
    let time = this.props.service.map(service => {
      return <li> {service.time} mins </li>
    });

    return (
      <html>
        <head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous">
          </link>
        </head>        
        <body>
          <Navbar/>
          <h3 style={{color:"#34ebd8"}}>Our Services</h3>
          <p>
          Honestly, what else should you be doing? Let our manicurists take over and pamper you with love and attention. Are you willing to try something exotic, funky and altogether different? So are we, and that’s why we’re on a perpetual lookout for the latest and greatest in nail art and culture.
          </p>
          <br/>
          <p>
          <b style={{color:"#34ebd8"}}>PARTY ON.</b> Be it hen’s parties, baby showers or corporate get-togethers, Manicurious has hosted them all. With 12 plush, vintage-inspired seats, we’re one of the few places to have the capacity for your needs. Click here or scroll down to see what our party perks are and start planning for your next party.
          </p>
          <div class="container">
            <div class="row">
                <div class="col-6">
                  <h4 style={{color:"#34ebd8"}}>Services</h4>
                  <ul>{service}</ul>
                </div>
                <div class="col-2">
                  <h4 style={{color:"#34ebd8"}}>Price</h4>
                  <ul>{price}</ul>
                </div>
                <div class="col-2">
                  <h4 style={{color:"#34ebd8"}}>Time</h4>
                  <ul>{time}</ul>
                </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Menu;