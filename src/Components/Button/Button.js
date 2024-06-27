import React, { useEffect, useState } from "react";

const Button = ({
					text = "Кнопка"
}) => {
	//const click = useState(0)
	const [click, setClick] = useState(0);

	useEffect(() => {
		document.title = `Вы нажали ${click}`
	})

	return (
		<button onClick={()=>setClick(click+1)}>{text}{click}</button>
	)
}


export default Button