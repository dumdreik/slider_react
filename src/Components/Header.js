import React from "react";
import Button from "./Button/Button";
class Header extends React.Component {
	render(){
		return (
			<header>{this.props.title}
			<Button/>
			<Button text="Button"/>
			</header>
		)
	}
}
export default Header