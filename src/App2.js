import React, {Component} from 'react';

class App extends Component {
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentWillMount() {
        console.log('componentWillMount');
    }
    constructor(){
        console.log('constructor');
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
        console.log('render');
        return(
            <div>
                {this.state.num}
                <input type = "text" value="" onChange={(e)=>{
                    this.changeHandler(e)
                }} />
                {/* <button onClick={}>点我加1</button> */}
                
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