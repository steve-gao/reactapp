import React, {Component} from 'react';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    componentDidMount() {
        let {age,name} = this.props;
        this.setState({age:age, name:name})
    }
    render(){
        return(
            <div>
                i m son
                <hr></hr>
                {this.state.age}
                {this.state.name}
                <button onClick={()=>{
                    this.setState({age:100})
                    console.log(this);
                    }}>
                    改变值</button>
                    <hr></hr>
                    {/* 头部 */}
                    {this.props.header}
                    {/* 中部 */}
                    {this.props.children}
                    {/* 底部 */}
                    {this.props.footer}
                   
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