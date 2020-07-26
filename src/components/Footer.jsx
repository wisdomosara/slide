import React from 'react'

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num : 1,
            val: 16.6
        }
    }
    componentDidMount(){
        setInterval(() => this.setState(state => {
            if (this.state.num == 6) {
                this.setState({num:1,val:16.6})
            }
            return {num : state.num + 1,
            val: state.val + 16.6}}),4000)
        
    }

    render() { 
        
        return (  
            <footer >
                <div className="circle">
                    <i class="fas fa-angle-left"></i>
                </div>
                <div className="circle">
                    <i class="fas fa-angle-right"></i>
                </div>
                <progress max="100" value={this.state.val}></progress>
                <div className="number">
                    <h2>{this.state.num}</h2>
                </div>
            </footer>
        );
    }
}
 
export default Footer;