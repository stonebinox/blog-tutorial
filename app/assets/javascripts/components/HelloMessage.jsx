class HelloMessage extends React.Component{
  render() {
    return (
        <div>
            <h1>Hello, {this.props.name}!</h1>
            <hr/>
        </div>
    )
  }
}
class Home extends React.Component{
    render(){
        return (
            <a href="/">Go home</a>
        )
    }
}