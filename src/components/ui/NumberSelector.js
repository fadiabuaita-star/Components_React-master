import React from 'react';
import PropTypes from 'prop-types'; 

export class NumberSelector extends React.Component{

    state = {
        CurrentNumber :0        
    }

    constructor(props){
        super(props);
        console.log(this.props);   
        if (!this.IsValidNumber(this.props.InitialNumber)) 
            throw Error('invalid initial number ,',this.props.InitialNumber);
        //
        this.state.CurrentNumber=this.props.InitialNumber?this.props.InitialNumber:0;       
    }
    //
    IsValidNumber(number){
        let isValidMin = this.props.MinNumber===undefined || this.props.MinNumber <= number;
        let isValidMax = !this.props.MaxNumber===undefined || this.props.MaxNumber >= number;
        return isValidMin && isValidMax;            
    }
    //
    GetCurrentNumber(){
        return this.state.CurrentNumber;
    }
    //
    SetCurrentNumber(number){
        if (this.IsValidNumber(number))
            this.setState({CurrentNumber:number});
    }
    //
    Plus = ()=>{
         console.log('p');
         this.SetCurrentNumber(this.GetCurrentNumber()+1);
        //  this.state = 
    }
    //
    Minus = ()=>{ 
        console.log('m');
        this.SetCurrentNumber(this.GetCurrentNumber()-1);
    }
    //
    render(){
        console.log(['render',this]);
        return (
            <div>
                {this.props.LabelText && <label>{this.props.LabelText}</label>}
                <button onClick={this.Plus}>+</button>
                <label>{this.state.CurrentNumber}</label>
                <button onClick={this.Minus}>-</button>
            </div>
        );
    }
}

NumberSelector.defaultProps = {InitialNumber:12,MaxNumber:120,MinNumber:undefined};
NumberSelector.propTypes = {InitialNumber:PropTypes.number,MaxNumber:PropTypes.number,MinNumber:PropTypes.number};
