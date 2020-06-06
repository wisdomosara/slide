import React from 'react';

class Slides extends React.Component {
    constructor(props) {
        super(props)
    }
    render() { 
        return ( 
            <div>
                <div className="slide" style={{backgroundImage:this.props.image}}>
                    
                </div>
            </div>
        );
    }
}
 
export default Slides;