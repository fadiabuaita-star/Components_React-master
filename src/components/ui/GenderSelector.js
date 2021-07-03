import React from 'react';

//import PropTypes from ''

export class GenderSelector extends React.Component{
    state = {IsMale:true};

    SwitchGender = ()=>{
        console.log('sg ,',this.state.IsMale);
        this.setState({IsMale:!this.state.IsMale});
    }

    render(){
        console.log(this.state.IsMale);

        return (
            <div><label>{this.state.IsMale?'🧔':'👩'}</label><button onClick={this.SwitchGender}>Change gender</button></div>
        );
    }
}

// GenderSelector.defaultProps = {IsMale:true};