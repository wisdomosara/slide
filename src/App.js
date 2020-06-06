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
  componentWillMount(){
    let i = 1;
        setInterval(() => {
          let slidee = document.querySelectorAll(".slide");
          slidee[i - 1].style.display = "none"
          if(i === 6){
            i = 0;
            slidee[i].style.display ="none"
            for(let q = 0; q < slidee.length; q++) {
              slidee[q].style.display = "block"
            }

          }
          this.setState(state => {
            return {display : state.images[i]}
          })
            
          i++
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
    this.state.slider = slideComponents
    
    return (
        <div style={styles}>
          <NavBar />
            <div className="slidediv">{this.state.slider}</div>
          <Footer />
        </div>
    );
  }
}
 
export default App;