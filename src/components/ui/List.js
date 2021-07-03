import React from 'react';

export class List extends React.Component{
    onOverItem = (e)=>{
        e.target.style.color ='red';
    }
    //
    onOutItem = (e)=>{
        e.target.style.color ='';
    }

    render(){
        let items = this.props.items;
        let listItems = [];
        if (items && items.length) {                    
            for (let index = 0; index < items.length ; index++) {
                listItems.push(<li>{items[index]}</li>)                
            }
        }
        if(!listItems)
            return null;
        //
        return (
            <ul>
            {listItems}
            </ul>
            );
    }
}