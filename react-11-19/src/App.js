import React from "react"
import Header from "./Header"


class App extends React.Component{
	render(){
		let styles={
			main:{
				minWidth:"1020px"
				
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