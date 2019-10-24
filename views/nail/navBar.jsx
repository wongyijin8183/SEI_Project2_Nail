var React = require("react");

class navbar extends React.Component {
    render() {

        return (
            <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor: "#e3f2fd"}}>
                <a class="navbar-brand mb-0 h1" href="/">Manicurious</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item ">
                            <a class="nav-link" href="/menu" className="display-3">Services <span class="sr-only">(current)</span></a>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link" href="/register">Register</a>
                        </li> */}
                        {/* <li class="nav-item">
                            <a class="nav-link" href="/login">Log In</a>
                        </li> */}
                    </ul>
            <form method="GET" action="/book" class="form-inline my-2 my-lg-0">      
                <button class="btn btn-outline-secondary my-2 my-sm-0 text-right" type="submit">Book an Appointment</button>
            </form>
            <form method="GET" action="/login" class="form-inline my-2 my-lg-0">      
                <button class="btn btn-outline-secondary my-2 my-sm-0 text-right" type="submit">Log In</button>
            </form>
            {/* <form method="POST" action="/logout" class="form-inline my-2 my-lg-0">      
                <button class="btn btn-outline-secondary my-2 my-sm-0 text-right" type="submit">Log Out</button>
            </form> */}
  
  </div>
</nav>
        );
    }
}

module.exports = navbar;