import React, { Component } from 'react';
import {Link} from "@reach/router"

class Navbar extends Component {
    state={
        articles=[]
    }
    render() {
        return (
            <nav>
            <Link to="/"><button>Home</button></Link>

            <Link to="/topics"><button>Topics</button> </Link>
          </nav>
        );
    }
}

export default Navbar;