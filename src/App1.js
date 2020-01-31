import React, {Component} from 'react';

class App extends Component {
    constructor(){
        super();
        this.state = {
            num: 100
        }
    }
    changeHandler(e){
        console.log(e.target.value)
        console.log("changing")
        // this.state.num = e.target.value;
        this.setState({
            num: e.target.value
        })
    }
    render(){
        return(
            <div>
                i am react
                <hr/>
                {this.state.num}

                <input type = "text" value={this.state.num} onChange={(e)=>{
                    this.changeHandler(e)
                }} />
            </div>
        )
    }
}
// import React from 'react';
// function App (){
//     return(
//         <div>i am react 1</div>
//     )
// }
export default App;