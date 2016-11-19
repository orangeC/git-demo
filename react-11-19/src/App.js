import React from "react"
import Header from "./Header"
import bg from "./img/bg1.jpg"




class App extends React.Component{
	render(){
		let styles={
			main:{
				minWidth:"1020px",
				backgroundImage:`url(${bg})`
			}
		}
		
		return (
				<div style={styles.main}>
					<Header />
				</div>
			)
	}
}

export default App