import React from 'react'
import Header from "./Components/Header";
class App extends React.Component {
    helpText = "Label"
    render(){
        return (
            <div>
                <Header title="Шапка!" />
                <span>{this.helpText}</span>
                <input type="text" onClick={this.inputClick} onMouseEnter={this.mouseEnter}/>
            </div>
        )
    }
    inputClick() {console.log("Clicked")}
    mouseEnter() {console.log("Enter")}
}
export default App