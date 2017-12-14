function ReactDOM() {
    //
}
function jsxAttr() {
    // use quotes for string vals or curly braces for expressions
    const element = <div tabIndex="0">
    const element = <img src={user.avatarUrl}>
}
function element() {
    const elem = React.createElement('p', {"className": "name"}, "pass children to render")
    ReactDOM.render(elem, document.getElementById("root"));
}
function ClassComponent() {
    class ClassComponent extends React.Component {
        render() {
            return <h1>Hello, {this.props.name}
        }
    }
    const elem = <ClassComponent name="Sergey" />
    ReactDOM.render(elem, document.getElementById("root"))
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
