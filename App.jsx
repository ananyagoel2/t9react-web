import React from 'react';

import TimerMixin from 'react-timer-mixin';
var timer;
class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
           touched:false,
            data:'',
            counter:0
        }

        this.clickstart = this.clickstart.bind(this)
        this.clickend = this.clickend.bind(this)
        this.longPress = this.longPress.bind(this)
        this.clearTimeout = this.clearTimeout.bind(this)


    };

    clickstart(){
        if(!this.state.touched){
            this.setState({
                touched:true,
                counter:(this.state.counter+1)%4,
            });
            TimerMixin.clearTimeout(this.timer);
            this.timer =TimerMixin.setTimeout(this.longPress,2000)
        }


    }
    longPress(){
        console.log("this is a long press")
        this.setState({
            touched:false,
            data:'1',
            counter:0
        })
    }
    clickend(){
        var array=['a','b','c'];
        TimerMixin.clearTimeout(this.timer);
        this.setState({
            touched:false,
            data:array[this.state.counter-1]
        })


    }
    clearTimeout () {
        window.clearTimeout(timer);
    }


    render() {
        return (
            <div   style={back}>
                <Content myNumber = {this.state.data} ></Content>
               <button style = {divStyle}
                        onMouseDown={this.clickstart}
                        onMouseUp={this.clickend}

               >abc1</button>
            </div>
        );
    }
}

class Content extends React.Component {

    render() {
        return (
            <div >
               <h3>Typed Number: {this.props.myNumber}</h3>
            </div>
        );
    }
}

const divStyle = {
    background: 'coral',
    height:75,
    width:150,
    color: 'black',
    fontSize:18,
};

const back={
    color:'black',
    fontSize:18,
    flexDirection:'row',
    justifyContent:'center',
alignContent:'center'
}

export default App;
