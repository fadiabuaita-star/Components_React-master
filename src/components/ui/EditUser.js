import React from 'react';
import { LabeledInput } from './LabeledInput';
import * as Val from '../../helpers/Validators';
import { GenderSelector } from './GenderSelector';
import { NumberSelector } from './NumberSelector';
//
export class EditUser extends React.Component{

    AllowOnlyNumericKeys(e){
        if(!Val.IsNumbericCode(e.keyCode) && ! Val.IsBackspaceCode(e.keyCode) && !Val.IsDeleteCode(e.keyCode)){
            e.preventDefault();
            console.log('invalid key');
            console.log({t:e.target,ct:e.currentTarget,k: e.key,kc:e.keyCode,tp:e.type});
        }
    }
    //
    render(){
        return (
            <section >
                <h2>Edit user</h2>
                <div>
                    <LabeledInput labelText="Email:" placeholder="enter your Email" />
                </div>

                <div>
                    <LabeledInput labelText="Password:" placeholder="enter password" type="password" />
                </div>
                
                <div>
                    <NumberSelector LabelText="Age:" InitialNumber={19} MinNumber={18} MaxNumber={120}/>
                </div>

                <label>phone number:</label><input type="text" onKeyDown={this.AllowOnlyNumericKeys} />

                <div>
                    <button>Save!</button>                
                </div>
            </section>
        );
    }
}

