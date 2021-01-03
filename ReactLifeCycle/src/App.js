import React from 'react';

class Pure extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      update: props.toggle,
    };
  }

  render() {
    return (
      <strong>
        <span style={{ color: 'mediumseagreen' }}>Pure: </span>
        {new Date().getSeconds().toString()}
      </strong>
    );
  }
}

const Stateless = props => (
  <strong>
    <span style={{ color: 'orange' }}>Stateless: </span>
    {new Date().getSeconds().toString()}
  </strong>
);

class Normal1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      update: props.toggle,
    };
  }

  render() {
    return (
      <strong>
        <span style={{ color: 'dodgerblue' }}>Normal1: </span>
        {new Date().getSeconds().toString()}
      </strong>
    );
  }
}

class Normal2 extends React.Component {
  state = {
    update: this.props.toggle,
  };

  render() {
    return (
      <strong>
        <span style={{ color: 'green' }}>Normal2: </span>
        {new Date().getSeconds().toString()}
      </strong>
    );
  }
}

class Normal3 extends React.Component {
  shouldComponentUpdate (nextProps, nextState) {
    if(this.props.toggle===nextProps.toggle){
      return false;
    } else {
      return true;
    }
   
  }
  render() {
    return (
      <strong>
        <span style={{ color: 'red' }}>Normal3: </span>
        {new Date().getSeconds().toString()}
      </strong>
    );
  }
}

class App extends React.Component {
  state = { toggle: true };

  componentDidMount() {
    this.myTime = setInterval(() => {
      this.setState({ toggle: true });
      //this.setState({ toggle: !this.state.toggle })
    }, 1000);
  }

  componentWillUnmount () {
    clearInterval(this.myTime);
  
  }
 

  render() {
    const { toggle } = this.state;
    return (
      <div>
        <Pure toggle={toggle} />
        <br />
        <Stateless toggle={toggle} />
        <br />
        <Normal1 toggle={toggle} />
        <br />
        <Normal2 toggle={toggle} />
        <br />
        <Normal3 toggle={toggle} />
        <br />
      </div>
    );
  }
}

export default App;
