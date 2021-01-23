import React from 'react'

class PropsConcept extends React.Component {
    state = {
        value1: 'abc'
    }
/* <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/signin" component={Signin} />
          </Switch>
      </Router>*/
    handleClick = () => {
        //set state value when using class
        this.setState({
            value1: 'xyz'
        })
    }

    render() {
        console.log('state value', this.state.value1) // get state value when using class
        return(
            <>
                <h1>{this.props.value}</h1>
                <button onClick={()=>this.props.fun(this.state.value1)}>submit</button>
                <button onClick={()=>this.handleClick}>submit</button>
                <h1>{this.state.value1}</h1>
            </>
        )
    }
}

export default PropsConcept;