import React, {PropTypes} from 'react';


export class TouchPad extends React.Component{

    componentDidMount(){
        document.addEventListener('mousedown',()=>{

        });
        document.addEventListener('mouseup',()=>{

        });
    }

    render(){

    }
}

TouchPad.propTypes = {
    onTouchDown:PropTypes.func.required,
    onTouchUp:PropTypes.func.required
};

export default TouchPad;
