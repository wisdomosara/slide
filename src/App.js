import React from 'react';
import NavBar from "./components/NavBar.jsx"
import Footer from "./components/Footer.jsx"
import Slides from "./components/Slides"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        images: ["url(images/pic1.jpg)","url(images/pic2.jpg)", "url(images/pic3.jpg)", "url(images/pic4.jpg)", "url(images/pic5.jpg)", "url(images/pic6.jpg)"],
        display : "url(images/pic1.jpg)"
    }
  }
  componentDidMount(){
    
    setInterval(() => {
      let i = 0;
      let removed = this.state.images[i]
      let imagee = this.state.images.filter(fil => !(this.state.images[0] === fil))
      imagee.push(removed)
      this.setState({images : imagee});
      this.setState({display : imagee[0]})
      i = i + 1
    },4000)
  }
  render() { 
    let styles = {
      backgroundImage:this.state.display,
      width:"100%",
      height:"100vh",
      backgroundSize: "cover",
      backgroundRepeat:"no-repeat",
      transition: "all 1s ease-out"
    }
    let slideComponents = this.state.images.map(imag => <Slides image={imag}/>)
    
    return (
        <div style={styles}>
          <NavBar />
            <div className="slidediv">{slideComponents}</div>
          <Footer />
        </div>
    );
  }
}
 
export default App;
