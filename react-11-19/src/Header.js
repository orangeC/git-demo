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
			},
			main:{
				margin:"0 auto",
				border:"3px bolid "
			}
		}
		console.log(this.styles())
		return (
				<div style={styles.main}>
					<h1 style={this.styles()}>get Bootstrap</h1>
					<ul style={styles.ul} className="menu">
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