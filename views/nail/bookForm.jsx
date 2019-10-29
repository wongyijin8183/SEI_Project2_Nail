var React = require("react");
const Navbar = require("./navBar.jsx");

class bookForm extends React.Component {
  render() {
    // console.log("JSX IMPORTED: ",this.props.service);
    let list = this.props.service.map(id => {
        return <option value={id.id}>{id.service}</option>
    });
    
    let timeSlots = [{id: '11:00'}, {id: '11:30'}, {id: '12:00'}, {id: '12:30'}, {id: '13:00'}, {id: '13:30'}, {id: '14:00'}, {id: '14:30'}, {id: '15:00'}, {id: '15:30'}, {id: '16:00'}, {id: '16:30'}, {id: '17:00'}, {id: '17:30'}, {id: '18:00'}, {id: '18:30'}, {id: '19:00'}, {id: '19:30'}, {id: '20:00'}];
    let timing = timeSlots.map(time => {
        return <option>{time.id}</option>
    });

    let currentDate = new Date();
    var date = currentDate.getDate();
    var month = currentDate.getMonth(); //January is 0
    var year = currentDate.getFullYear();
    var dateString = year + "-" +(month + 1) + "-" + date;
    // console.log(dateString);

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
            <h3 style={{color:"#33b5a4"}}>Booking Page</h3>
            <form action="/book" method="POST">
                  Enter Booking Details Here: 
                  <br></br>
                  <select name="menu_id">
                      <option value="">Choose a service</option>
                      {list}
                  </select>
                  <br></br>
                  <input type="date" name="date" placeholder="yyyy-mm-dd" min={dateString}/>
                  <br></br>
                  <select name="time">
                      <option value="">Choose a timing</option>
                      {timing}
                  </select>
                  <br></br>
                  <input type="submit" value="Submit"/>
              </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = bookForm;
