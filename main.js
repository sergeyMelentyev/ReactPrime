function jsx() {
    // JSX type can't be an expression
    // logical if statement and for loop are not expressions, can’t be used in JSX type
    // if no value is passed for a prop, it defaults to true
    // JSX will be compiled to React.createElement() method
    // content between opening and closing JSX tags is passed as props.children
    <MyButton color="blue" shadowSize={2}>Click Me</MyButton>
    React.createElement(MyButton, {color: 'blue', shadowSize: 2}, "Click Me")

    const list = numbers.map(item => React.createElement("li", {key: item.id}, item))
    const list = numbers.map(item => <li key={item.id}>{item}</li>)

    // quotes for string vals or curly braces for expressions
    const element = <div tabIndex='0' />          // the same as <div tabIndex={'0'}>
    const element = <div autocomplete />        // the same as <div autocomplete={true} />
    const element = <img src={user.avatarUrl} />
    
    // embeded JS expressions
    <h1>Hello!
      {
        this.unreadMessages.length > 0 && 
        <h2> You have {this.unreadMessages.length} unread messages.</h2>
      }
    </h1>

    // condition render, booleans, null, undefined are ignored (no render)
    <div>
      { this.showHeader &&
        <Header />
      }
      <Content />
    </div>

    // inline ternary operator
    <div>The user is {this.isLoggedIn ? "currently" : "not"} logged in.</div>
    <div>
      {
        this.isLoggedIn ? ( 
            <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
            <LoginButton onClick={this.handleLoginClick} />
        )
      }
    </div>

    // embeded map
    const arr = new Array("One", "Two", "Three")
    class ListItem extends React.Component {
        render() {
            return <li>{this.props.value}</li>
        }
    }
    class App extends React.Component {
        render() {
            return (
                <ul>
                    {this.props.data.map((item, index) => <ListItem key={index} value={item} />)}
                </ul>
            )
        }
    }
    ReactDOM.render(<App data={arr} />, document.getElementById("root"))

    // dot notation
    const MyComponents = {
      DatePicker: function DatePicker(props) { return <div> {props.color} </div> }
    }
    function BlueDatePicker() {
      return <MyComponents.DatePicker color="blue" />
    }

    // spread attributes
    function App() {
      const props = {firstName: "Ben", lastName: "Hector"}
      return <Greeting {...props} />            // the same as <Greeting firstName="Ben" lastName="Hector" />
    }

    const Button = props => {
      const { kind, ...other } = props
      const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton"
      return <button className={className} {...other} />
    }
    const App = () => {
      return (
        <div>
          <Button kind="primary" onClick={() => console.log("clicked!")}>
            Hello World!
          </Button>
        </div>
      )
    }
    }

function element() {
    const elem = React.createElement("div", {"className": "name"},
        React.createElement("p", null, "Hello, World"))
    const elem = <p className="name">"pass children to render"</p>   // the same as above

    ReactDOM.render(elem, document.getElementById("root"))
    }
function props() {
    // one level deep
    class App extends React.Component {
        render() {
            return (
                <div>
                    <header>{this.props.header}</header>
                    <main>{this.props.main}</main>
                </div>
            )
        }
    }
    const app = <App header="Header" main="Main Text" />
    ReactDOM.render(app, document.getElementById("root"))
    
    // two or more level deep
    class Header extends React.Component {
        render() {
            return (
                <header>{this.props.header}</header>
            )
        }
    }
    class App extends React.Component {
        render() {
            return (
                <div>
                    <Header header={this.props.header} />
                    <main>{this.props.main}</main>
                </div>
            )
        }
    }
    const app = <App header="React header" main="React main text" />
    }

function lifeCycle() {
    componentDidMount() {...}       // after component output has been rendered to the DOM
    componentWillUnmount() {...}    //
    }

function classComponent() {
    // CLASS COMPONENT WITH STATE
    class ClassComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {date: new Date()}
        }
        render() {
            return <p>It is {this.state.date.toLocaleTimeString()}</p>
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
            return <p>It is {this.state.date.toLocaleTimeString()}</p>
        }
    }

    // PASS STATE DATA DOWN TO CHILD COMPONENT
    function FormattedDate(props) {
        return <h2>It is {props.date.toLocaleTimeString()}</h2>
    }
    class ClassComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {date: new Date()}
        }
        render() {
            return <FormattedDate date={this.state.date} />
        }
    }
    }
function functionalComponent() {
    function FunctionalComponent(props) {
        return <li>Hello, {props.name}</li>
    }
    function App() {
        return (
            <ul>
                <FunctionalComponent name="Sergey" />
                <FunctionalComponent name="Olga" />
            </ul>
        )
    }
    ReactDOM.render(<App />, document.getElementById("root"))
    }

function composition() {
    // the same as slots in vue.js, can contain multiple injection points
    function FancyBorder(props) {
      return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
          {props.children}
        </div>
      )
    }
    function WelcomeDialog() {
      return (
        <FancyBorder color="blue">
          <h1 className="Dialog-title">Welcome</h1>    // will be passed to <FancyBorder> as props.children
          <p className="Dialog-message">Welcome</p>    // will be passed to <FancyBorder> as props.children
        </FancyBorder>
      )
    }
    }

function event() {
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
                    <button onClick={this.handleClickWithBind} />
                    <button onClick={this.handleClickWIthArrowFunc}>
                        {this.state.isToggleOn ? "ON" : "OFF"}
                    </button
                    <button onClick={(e) => this.deleteRow(id, e)} />
                    <button onClick={this.deleteRow.bind(this, id)} />
                </div>
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
function form() {
    // submit, textarea and select handler
    class NameForm extends React.Component {
        constructor(props) {
            super(props)
            this.state = {"value": "coconut"}
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
        }

        handleChange(event) {
            this.setState({"value": event.target.value})
        }

        handleSubmit(event) {
            event.preventDefault()
            this.setState({"value": ""})
        }

        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange}>
                        <textarea value={this.state.value} onChange={this.handleChange} >
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="coconut">Coconut<option>
                            <option value="mango">Mango<option>
                        <select>
                        <select multiple={true} value={['B', 'C']}>
                    <label>
                    <input type="submit" value="Submit">
                <form>
            )
        }
    }

    // checkbox and input handler
    class Reservation extends React.Component {
        constructor(props) {
            super(props)
            this.state = { isGoing: true, numberOfGuests: 2 }
            this.handleInputChange = this.handleInputChange.bind(this)
        }
        handleInputChange(event) {
            const target = event.target
            const value = target.type === "checkbox" ? target.checked : target.value
            const name = target.name
            this.setState({
                [name]: value
            })
        }
        render() {
            return (
                <form>
                    <label>
                        Is going:
                        <input
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange} >
                    <label>
                    <label>
                        Number of guests:
                        <input
                            name="numberOfGuests"
                            type="number"
                            value={this.state.numberOfGuests}
                            onChange={this.handleInputChange} >
                    <label>
                <form>
            );
        }
    }
    }

function router() {
    // index.js file
    import React from "react"
    import { render } from "react-dom"
    import { BrowserRouter, Route } from "react-router-dom"
    import Landing from "./second"
    import Search from "./third"
    const App = () => (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Landing}>
                <Route path="/search" component={Search}>
    )
    render(<App />, document.getElementById("root"))

    // second.js
    import React from "react"
    import { Link } from "react-router-dom"
    const Landing = () => (
        <div>
            <h1>Search for video
            <input type="text" placeholder="search" />
            <Link to="/search">show all<Link>
    )
    export default Landing

    // third.js
    import React from "react"
    const Search = () => (
        <div>
            Search component
    )
    export default Search

    // switch component will render exactly one component
    import { BrowserRouter, Route, Switch } from "react-router-dom"
    const App = () => (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={Landing}>
                    <Route path="/search" component={Search}>
                    <Route component={FallBack404Component}>
    )
    }

function state() {
    // LIFT STATE UP
    const scaleNames = { c: "Celsius", f: "Fahrenheit" }
    function toCelsius(fahrenheit) { return (fahrenheit - 32) * 5 / 9 }
    function toFahrenheit(celsius) { return (celsius * 9 / 5) + 32 }
    function tryConvert(temperature, convert) {
        const input = parseFloat(temperature)
        if (Number.isNaN(input)) return ''
        const output = convert(input)
        const rounded = Math.round(output * 1000) / 1000
        return rounded.toString()
    }
    function BoilingVerdict(props) {
        if (props.celsius >= 100) return <p>Water would boil.<p>
        else return <p>Water would not boil.<p>
    }
    class TemperatureInput extends React.Component {
        constructor(props) {
            super(props)
            this.handleChange = this.handleChange.bind(this)
        }
        handleChange(e) {
            this.props.onTemperatureChange(e.target.value)
        }
        render() {
            const scale = this.props.scale
            const temperature = this.props.temperature;
            return (
                <fieldset>
                    <legend>Enter temperature in {scaleNames[scale]}:<legend>
                    <input value={temperature} onChange={this.handleChange}>
                <fieldset>
            )
        }
    }
    class Calculator extends React.Component {
        constructor(props) {
            super(props)
            this.state = {temperature: "", scale: ""}
            this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
            this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
        }
        handleCelsiusChange(temperature) {
            this.setState({scale: 'c', temperature})
        }
        handleFahrenheitChange(temperature) {
            this.setState({scale: 'f', temperature})
        }
        render() {
            const scale = this.state.scale
            const temperature = this.state.temperature
            const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature
            const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature
            return (
                <div>
                    <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}>
                    <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}>
                    <BoilingVerdict celsius={celsius}>
                <div>
            )
        }
    }
    render(<Calculator />, document.getElementById("root"))
    }

function ref() {
    // ref callback receives the underlying DOM element as its argument
    // invoked before componentDidMount() or componentDidUpdate() lifecycle hooks
    class CustomTextInput extends React.Component {
      constructor(props) {
        super(props)
        this.focusTextInput = this.focusTextInput.bind(this)
      }
      focusTextInput() {
        this.textInput.focus()
      }
      render() {
        // store reference to input DOM elem in an instance field (this.textInput)
        return (
          <div>
            <input type="text" ref={input => this.textInput = input} >  // will get called twice during updates
            <input type="button" value="focus" onClick={this.focusTextInput} >
          <div>
        )
      }
    }

    // functional component
    function CustomTextInput(props) {
      let textInput = null                      // must be declared
      function handleClick() {
        textInput.focus()
      }
      return (
        <div>
          <input type="text" ref={input => textInput = input} >
          <input type="button" value="focus" onClick={handleClick} >
        <div>
      ) 
    }

    // exposing ref to parent component
    function CustomTextInput(props) {
      return (
        <div>
          <input ref={props.inputRef} >
        <div>
      )
    }
    class Parent extends React.Component {
      render() {
        return (
          <CustomTextInput inputRef={el => this.inputElement = el} >
        )
      }
    }

    // exposing ref to grand parent component
    function CustomTextInput(props) {
      return (
        <div>
          <input ref={props.inputRef} >
        <div>
      )
    }
    function Parent(props) {
      return (
        <div>
          My input: <CustomTextInput inputRef={props.inputRef} >
        <div>
      )
    }
    class Grandparent extends React.Component {
      render() {
        return (
          <Parent inputRef={el => this.inputElement = el} >
        )
      }
    }
    }

function flow() {
    // static type checker

}
