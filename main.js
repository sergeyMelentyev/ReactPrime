function jsx() {
    // use quotes for string vals or curly braces for expressions
    const element = <div tabIndex="0">
    const element = <img src={user.avatarUrl}>
    
    // embeded expressions
    <h1>Hello!
      {
        unreadMessages.length > 0 &&
        <h2> You have {unreadMessages.length} unread messages.
      }
    <h1>

    // inline ternary operator
    <div>
      The user is {isLoggedIn ? "currently" : "not"} logged in.
    <div>
    <div>
      {
        isLoggedIn ? ( 
            <LogoutButton onClick={this.handleLogoutClick} >
        ) : (
            <LoginButton onClick={this.handleLoginClick} >
        )
      }
    <div>

    // embeded map
    function NumberList(props) {
      const numbers = props.numbers
      return (
        <ul>
          {numbers.map((number) => <ListItem key={number.toString()} value={number} > )}
        <ul>
      )
    }
    }
function element() {
    const elem = React.createElement("div", {"className": "name"},
        React.createElement("p", null, "Hello, World"))
    const elem = <p className="name">"pass children to render"<p>   // the same as above

    ReactDOM.render(elem, document.getElementById("root"))
    }
function lifeCycle() {
    componentDidMount() {...}       // after component output has been rendered to the DOM
    componentWillUnmount() {...}    //
    }
function classComponent() {
    // CLASS COMPONENT WITH PROPS
    class ClassComponent extends React.Component {
        render() {
            return <h1>Hello, {this.props.name}
        }
    }
    const elem = <ClassComponent name="Sergey" />
    ReactDOM.render(elem, document.getElementById("root"))

    // CLASS COMPONENT WITH STATE
    class ClassComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {date: new Date()}
        }
        render() {
            return (
                <div>
                    <p>It is {this.state.date.toLocaleTimeString()}
            )
        }
    }
    const element = <ClassComponent />
    ReactDOM.render(element, document.getElementById("root"))

    // UPDATE STATE DYNAMICALLY
    class ClassComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {              // the only place where this.state can be assigned directly
                date:  new Date(),
                comments: []
            }
        }
        componentDidMount() {
            this.timerID = setInterval(() => this.tick(), 1000)
        }
        tick() {
            this.setState({date: new Date()})               // render.method will be called again and again
            this.setState({comments: response.comments})    // update states independently
            
            // receive previous state as 1st arg, and props at the time the update is applied
            this.setState((prevState, props) => ({
                counter: prevState.counter + props.increment
            }))
        }
        render() {
            return (
                <div>
                    <p>It is {this.state.date.toLocaleTimeString()}
            )
        }
    }

    // PASS STATE DATA DOWN TO CHILD COMPONENT
    function FormattedDate(props) {
        return <h2>It is {props.date.toLocaleTimeString()}
    }
    class ClassComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {date: new Date()}
        }
        render() {
            return (
                <div>
                    <FormattedDate date={this.state.date}/>
                </div>
            )
        }
    }
    }
function functionalComponent() {
    function FunctionalComponent(props) {
        return <li>Hello, {props.name}
    }
    function App() {
        return (
            <ul>
                <FunctionalComponent name="Sergey"/>
                <FunctionalComponent name="Olga"/>
        )
    }
    ReactDOM.render(<App />, document.getElementById("root"))
    }
function events() {
    class ClassComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {isToggleOn: true}
            this.handleClickWithBind = this.handleClickWithBind.bind(this)
        }

        handleClickWithBind(e) {
            e.preventDefault()
        }

        handleClickWIthArrowFunc = (e) => {
            this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }))
        }

        render() {
            return (
                <div>
                    <button onClick={this.handleClickWithBind}>
                    <button onClick={this.handleClickWIthArrowFunc}>
                        {this.state.isToggleOn ? "ON" : "OFF"}
                    <button onClick={(e) => this.deleteRow(id, e)}>
                    <button onClick={this.deleteRow.bind(this, id)}>
            )
        }
    }
    }
function conditionRendering() {
    function Greeting(props) {
        if (props.isLoggedIn) return <h1>Hello, User
        return <h1>Hello, Guest
    }
    function LoginButton(props) {
        return <button onClick={props.onClick}>LogIn
    }
    function LogoutButton(props) {
        return <button onClick={props.onClick}>LogOut
    }
    class LoginControl extends React.Component {
        constructor(props) {
            super(props)
            this.handleLoginClick = this.handleLoginClick.bind(this)
            this.handleLogoutClick = this.handleLogoutClick.bind(this)
            this.state = {"isLoggedIn": false}
        }
        handleLoginClick() { this.setState({"isLoggedIn": true}) }
        handleLogoutClick() { this.setState({"isLoggedIn": false}) }

        render() {
            let button = undefined
            if (this.state.isLoggedIn)
                button = React.createElement(LogoutButton, {onClick: this.handleLogoutClick}, null)
            else
                button = <LoginButton onClick={this.handleLoginClick}>
            return (
                <div>
                    <Greeting isLoggedIn={this.state.isLoggedIn}>
                    {button}
            )
        }
    }
    ReactDOM.render(<LoginControl />, document.getElementById("root"))

    // prevent component from rendering by returning null, but componentWillUpdate() and componentDidUpdate() will fire!
    function WarningBanner(props) {
        if (!props.warn) return null
        return (
            <div className="warning">
              Warning!
            <div>
            )
    }
    }
function listRendering() {
    // without component
    const numbers = [1,2,3,4,5]
    const listItemsFirst = numbers.map((item,key) => React.createElement("li", {key: key}, item))
    const listItemsSecond = numbers.map((item,key) => <li key={key}>{item}<li>)     // the same as above
    ReactDOM.render(React.createElement("ul", null, listItemsFirst), document.getElementById("root"))
    ReactDOM.render(<ul>{listItemsSecond}<ul>, document.getElementById("root"))     // the same as above

    // stateless functional component
    function CreateNumbers(props) {
        const listNumbers = props.numbers.map((number, index) => <li key={index}>{number}<li>)
        return (<ul>{listNumbers}<ul>)
    }
    const numbers = [1,2,3,4,5]
    ReactDOM.render(<CreateNumbers numbers={numbers}>, document.getElementById("root"))
    }
