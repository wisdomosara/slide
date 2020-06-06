import React from 'react'

class NavBar extends React.Component {
    
    render() { 
        // let clicked = {
        //     borderBottom: "2px solid orange"
        // }

        return ( 
            
                <nav>
                    <div className="logo">
                        <i class="fas fa-globe" style={{fontSize:30,color:"white"}}></i>
                        <p style={{marginLeft:"20px"}}>GLOBAL ADVENTURES</p>
                    </div>
                    <div className="navi">{window.innerWidth < 576 ? null :<ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">HOLIDAYS</a></li>
                            <li><a href="#">TEAMS</a></li>
                            <li><a href="#">LOCATION</a></li>
                            <li><a href="#">CONTACTS</a></li>
                            <li><i class="fas fa-search"></i></li>
                            <li><i class="fas fa-portrait"></i></li>
                        </ul>}
                        
                    </div>
                </nav>
            
        );
    }
}
 
export default NavBar;