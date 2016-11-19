import React from "react"


class Header extends React.Component{
	styles(){
		return {
			color:"blue"
		}
	}
	render(){
		let styles = {
			ul:{
				listStyle:"none",
				padding:"0"
			},
			li:{
				display:"inline-block",
				padding:"10px 20px"
			}
		}
		console.log(this.styles())
		return (
				<div>
					<h1 style={this.styles()}>get Bootstrap</h1>
					<ul style={styles.ul}>
						<li style={styles.li}>Bootstrap</li>
						<li style={styles.li}>get start</li>
						<li style={styles.li}>CSS</li>
						<li style={styles.li}>Components</li>
						<li style={styles.li}>Javascript</li>
					</ul>
				</div>
			)
	}
}

export default Header