function jsxAttr() {
    // use quotes for string vals or curly braces for expressions
    const element = <div tabIndex="0">
    const element = <img src={user.avatarUrl}>
    }
function element() {
    const elem = React.createElement('p', {"className": "name"}, "pass children to render")
    // the same as
    const elem = <p className="name">"pass children to render"<p>
    ReactDOM.render(elem, document.getElementById("root"));
    }
function lifeCycle() {
    componentDidMount() {...}       // after component output has been rendered to the DOM
    componentWillUnmount() {...}    //
    }
function ClassComponent() {
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
function FunctionalComponent() {
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
