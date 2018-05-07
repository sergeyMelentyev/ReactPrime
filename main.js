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

    // default props
    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                propName: props.text
            };
        }
    };
    App.defaultProps = {
        propName: "anyDefaultValue"
    }
    }

function lifeCycle() {
    componentDidMount() {...}       // after component output has been rendered to the DOM
    componentWillUnmount() {...}
    shouldComponentUpdate(nextProps, nextState) {...}
    }

function setState() {
    // passing object as an arg to setState
    this.setState({ count: ++this.state.count });

    // passing function as an arg to setState, some logic could be added
    this.setState(state => {
        if (state.count >= 5) return void 0;
        return { count: ++state.count };
    });

    // passing callback as a second arg to setState, will be called after state has changed
    this.setState( {count: ++this.state.count}, () => console.log(this.state));

    // receive previous state as 1st arg, and props at the time the update is applied
    this.setState((prevState, props) => ({
        counter: prevState.counter + props.increment
    }))
    }
function classComponent() {
    // CLASS COMPONENT WITH STATE
    class ClassComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                date: new Date()
            }
        }
        render() {
            return <p>It is {this.state.date.toLocaleTimeString()}</p>
        }
    }

    // UPDATE STATE DYNAMICALLY
    class ClassComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {      // the only place where this.state can be assigned directly
                date: new Date(),
                comments: []
            }
        }
        componentDidMount() {
            this.timerID = setInterval(() => this.tick(), 1000)
        }
        tick() {
            this.setState({date: new Date()})
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
    // stateless with only props down
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

    // stateless with props down and events up
    function CurrentTab(props) {
        const navigationItems = new Array("ГЛАВНАЯ", "КАТАЛОГ", "АКЦИИ");
        return (
            <ul>
                {navigationItems.map((item, index) => {
                    return (
                        <li onClick={props.onSelect.bind(null, item)}
                            key={index}
                            style={item === props.currentTab ? { fontWeight: "bold"} : null}>
                            {item}
                        </li>
                    );
                })}
            </ul>
        );
    }
    class Header extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                currentTab: "ГЛАВНАЯ"
            }
            this.updateCurrentTab = this.updateCurrentTab.bind(this)
        }
        updateCurrentTab(newTab) {
            this.setState({currentTab: newTab})
        }
        render() {
            return <CurrentTab currentTab={this.state.currentTab} onSelect={this.updateCurrentTab} />
        }
    }
    }
function slots() {
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
          <h1 className="Dialog-title">Welcome</h1>
          <p className="Dialog-message">Welcome</p>
        </FancyBorder>
      )
    }
    }
function higherOrderComponent() {
    // the same as vue mixin
    let HOCompGenerator = (Component, state) => class extends React.Component {
        constructor(props) {
            super(props)
            this.state = state
        }
        componentDidMount() {
            setInterval(() => {
                this.setState({count: this.state.count + 1 })
            }, 1000)
        }
        render() {
            return <Component {...this.props} {...this.state} />
        }
    }
    let Comp1 = (props)=> <div>{this.props.count}</div>
    let Comp2 = (props)=> <div>{this.props.count}</div>

    let WrappedComp1 = HOCompGenerator(Comp1, {count: 0})
    let WrappedComp2 = HOCompGenerator(Comp2, {count: 10})

    class App extends React.Component {
        constructor(props) {
            super(props)
        }
        render() {
            return (
                <div>
                    <WrappedComp1 />
                    <WrappedComp2 />
                </div>
            )
        }
    }
    }

function event() {
    // handle click with or without .bind()
    class ClassComponent extends React.Component {
        constructor(props) {
            this.state = {
                isToggleOn: true
            }
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
                    <button onClick={this.handleClickWithBind}></button>
                    <button onClick={this.handleClickWIthArrowFunc}>
                        {this.state.isToggleOn ? "ON" : "OFF"}
                    </button>
                    <button onClick={(e) => this.deleteRow(id, e)}></button>
                    <button onClick={this.deleteRow.bind(this, id)}></button>
                </div>
            )
        }
    }

    // pass props via event onClick
    class Header extends React.Component {
        constructor(props) {
            this.state = {
                currentTab: "ГЛАВНАЯ"
            }
            this.updateCurrentTab = this.updateCurrentTab.bind(this)
        }
        updateCurrentTab(newTab) {
            this.setState({currentTab: newTab})
        }
        render() {
            const navigationItems = new Array("ГЛАВНАЯ", "КАТАЛОГ", "АКЦИИ")
            return (
                <ul>
                    {navigationItems.map((item, index) => {
                        return (
                            <li key={index}
                                onClick={this.updateCurrentTab.bind(null, item)}>
                                {item}
                            </li>
                        )
                    })}
                </ul>
            )
        }
    }

    // pass event handler two or more levels deep
    let defaultState = [
        {value: "Pants", id: Math.random().toString(36).substr(2, 9), packed: false},
        {value: "Sandwich", id: Math.random().toString(36).substr(2, 9), packed: true}
    ]
    export default class Header extends React.Component {
        constructor(props) {
            this.state = {
                items: defaultState
            }
            this.handleRemoveItem = this.handleRemoveItem.bind(this)
            this.handleToggleItem = this.handleToggleItem.bind(this)
        }
        handleRemoveItem(item) {
            this.setState({items: this.state.items.filter(stateItem => stateItem.id !== item.id)})
        }
        handleToggleItem(itemToToggle) {
            const items = this.state.items.map(item => {
                if (item.id !== itemToToggle.id) return item
                item.packed = !itemToToggle.packed
                return item
            })
            this.setState({ items })
        }
        render() {
            const unpackedItems = this.state.items.filter(item => !item.packed)
            const packedItems = this.state.items.filter(item => item.packed)
            return (
                <div className="header__wrapper">
                    <TestItems title="Unpacked Items" items={unpackedItems} onRemove={this.handleRemoveItem} onToggle={this.handleToggleItem} />
                    <TestItems title="Packed Items" items={packedItems} onRemove={this.handleRemoveItem} onToggle={this.handleToggleItem} />
                    <button onClick={this.markAllAsUnpacked}>Mark All As Unpacked</button>
                </div>
            )
        }
    }
    export default class TestItems extends React.Component {
        render() {
            const {title, items, onRemove, onToggle} = this.props
            return (
                <div>
                    <h1>{title} {items.length}</h1>
                    <input type="text" />
                    <ul className="testPackedItems">
                        {
                            items.map((item, index) =>
                                <TestItem key={index} item={item}
                                          onRemove={() => onRemove(item)}
                                          onToggle={() => onToggle(item)} />
                            )
                        }
                    </ul>
                </div>
            )
        }
    }
    export default class TestItem extends React.Component {
        render() {
            const {item, onRemove, onToggle} = this.props
            return (
                <li className="testItem">
                    <input type="checkbox" checked={item.packed} onChange={onToggle} />
                    <span>{this.props.item.value}</span>
                    <button onClick={onRemove}>Remove</button>
                </li>
            )
        }
    }
    }
function formValidation() {
    // input text field with submit btn
    export default class Header extends React.Component {
        constructor(props) {
            super(props)
            super(props)
            this.state = { items: new Array() }
            this.handleSubmit = this.handleSubmit.bind(this)
        }
        handleSubmit(value) {
            if (!value) return void 0
            const result = new Object()
            Object.defineProperties(result, {
                "value": {value: value, writable: true, enumerable: true, configurable: true},
                "id": {value: Math.random().toString(36).substr(2, 9), writable: true, enumerable: true, configurable: true},
                "packed": {value: false, writable: true, enumerable: true, configurable: true}
            })
            this.setState({items: [result, ...this.state.items]})
        }
        render() {
            return <TestSubmitComp onSubmit={this.handleSubmit} />
        }
    }
    export default class TestSubmitComp extends React.Component {
        constructor(props) {
            super(props)
            this.state = { value: "" }
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
        }
        handleChange(event) {
            this.setState({value: event.target.value})
        }
        handleSubmit() {
            this.props.onSubmit(this.state.value)
            this.setState({value: ""})
        }
        render() {
            return (
                <div className="testSubmitComp">
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            )
        }
    }
    // 
    }

function style() {
    // via global import
    import "./style/app.css";

    // inline jsx style
    <li style={tab === this.state.currentTab ? { fontWeight: "bold"} : null} />
    }

function conditionRendering() {
    function Greeting(props) {
        if (props.isLoggedIn) return <h1>Hello, User</h1>
        return <h1>Hello, Guest</h1>
    }
    function LoginButton(props) {
        return <button onClick={props.onClick}>LogIn</button>
    }
    function LogoutButton(props) {
        return <button onClick={props.onClick}>LogOut</button>
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
                button = <LoginButton onClick={this.handleLoginClick} />
            return (
                <div>
                    <Greeting isLoggedIn={this.state.isLoggedIn} />
                    {button}
                </div>
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
            </div>
        )
    }
    }
function listRendering() {
    // without component
    const numbers = [1,2,3,4,5]
    const listItemsFirst = numbers.map((item,key) => React.createElement("li", {key: key}, item))
    const listItemsSecond = numbers.map((item,key) => <li key={key}>{item}</li>)
    ReactDOM.render(React.createElement("ul", null, listItemsFirst), document.getElementById("root"))
    ReactDOM.render(<ul>{listItemsSecond}</ul>, document.getElementById("root"))

    // stateless functional component
    function CreateNumbers(props) {
        const listNumbers = props.numbers.map((number, index) => <li key={index}>{number}</li>)
        return (<ul>{listNumbers}</ul>)
    }
    const numbers = [1,2,3,4,5]
    ReactDOM.render(<CreateNumbers numbers={numbers} />, document.getElementById("root"))
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
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        <textarea value={this.state.value} onChange={this.handleChange} />
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                        <select multiple={true} value={['B', 'C']} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
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
                            onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Number of guests:
                        <input
                            name="numberOfGuests"
                            type="number"
                            value={this.state.numberOfGuests}
                            onChange={this.handleInputChange} />
                    </label>
                </form>
            );
        }
    }
    }
function ref() {
    // ref callback receives the underlying DOM element as its argument
    // invoked before componentDidMount() or componentDidUpdate() lifecycle hooks
    submitMethod() {
        this.setState({
            input: ""
        }, () => ReactDOM.findDOMNode(this.refs.inputBox)).focus()
    }
    <input ref="inputBox" value={this.state.input} onChange={this.handler} />
    <button onClick={this.submitMethod}>Submit</button>

    // via instance field
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
            <input type="text" ref={input => this.textInput = input} />
            <input type="button" value="focus" onClick={this.focusTextInput} />
          </div>
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
          <input type="text" ref={input => textInput = input} />
          <input type="button" value="focus" onClick={handleClick} />
        </div>
      ) 
    }

    // exposing ref to parent component
    function CustomTextInput(props) {
      return (
        <div>
          <input ref={props.inputRef} />
        </div>
      )
    }
    class Parent extends React.Component {
      render() {
        return <CustomTextInput inputRef={el => this.inputElement = el} />
      }
    }

    // exposing ref to grand parent component
    function CustomTextInput(props) {
      return <input ref={props.inputRef} />
    }
    function Parent(props) {
      return (
        <div>
          My input: <CustomTextInput inputRef={props.inputRef} />
        </div>
      )
    }
    class Grandparent extends React.Component {
      render() {
        return <Parent inputRef={el => this.inputElement = el} />
      }
    }
    }

function router() {
    // index.js file
    import {BrowserRouter, Route} from "react-router-dom"
    const App = () => (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Landing} />
                <Route path="/search" component={Search} />
            </div>
        </BrowserRouter>
    )

    // second.js
    import {Link, NavLink} from "react-router-dom"
    const Landing = () => (
        <div>
            <Link to="/search">show all</Link>
            <NavLink activeClassName="activeNavTab" exact to="/">Home</NavLink>
        </div>
    )

    // switch component will render exactly one component
    import { BrowserRouter, Route, Switch } from "react-router-dom"
    const App = () => (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/search" component={Search} />
                    <Route component={FallBack404Component} />
                </Switch>
            </div>
        </BrowserRouter>
    )

    // pass props
    const Child = ({match}) => (
        <div>
            <p>{match.params.id}</p>
        </div>
    );
    <div>
        <h1>Accounts</h1>
        <ul>
            <li><Link to="/components">Components</Link></li>
            <li><Link to="/state">State</Link></li>
        </ul>
        <Route path="/:id" component={Child} />
    </div>
    }

function flux() {
    //
    }
function redux() {
    //
    Object.keys(state)
        .filter(userId => action.userId !== userId)
        .reduce((prev, current) => {
            prev[current] = state[current]
            return prev
        }, {})
    }

function xrhRequest() {
    // api.js
    function getUserData(user) {
        return axios.all([
            getProfile(user),
            getRepos(user)
        ]).then(response => {
            var profile = response[0];
            var repos = response[1];
            return {
                profile: profile,
                score: calculateScore(profile, repos)
            };
        });
    }
    export default {
        fetchCompareUsers: function(users) {
            return axios.all(users.map(getUserData)).catch(handleError);
        },
        fetchPopularRepos: function(language) {
            var encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);
            return axios.get(encodedURI).then(response => response.data.items);
        }
    };

    // index.js
    import Api from "../../utils/Api";
    updateCurrentTab(newTab) {
        Api.fetchPopularRepos(newTab)
            .then(result => this.setState({currentTab: newTab, repositories: result}));
    }
    componentDidMount() {
        this.updateCurrentTab(this.state.currentTab);
    }
    }

function modules() {
    // index.js
    var React = require("react")
    var ReactDOM = require("react-dom")
    var App = require("./components/App.js")
    require("./index.css")
    ReactDOM.render(<App />, document.getElementById("root"))

    // app.js
    var React = require("react")
    var Header = require("./Header.js")
    class App extends React.Component {
        render() {
            return (
                <div className="appContainer">
                    <Header />
                </div>
            )
        }
    }
    module.exports = App
    }
