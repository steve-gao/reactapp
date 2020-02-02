import React, {Component} from 'react';
import Son from './son';
class App extends Component {
    constructor(){
        super();
        this.state = {
            age:12,
            name: "jack",
            // person: {
            //     age: 13
            // }
        }
    }
    render(){
        let { age,name }  = this.state;
        let header =  <div>头部</div>;
        let footer =  <div>底部</div>;
        return(
            <div>
                i am react parent/
                {/* {person} */}
                <hr/>
                <Son age={age} name={name} header={header} footer={footer}>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul> 
                </Son>
            </div>
        )
    }
}
export default App;