import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: '',
            keyval:0,
            pressedstring:'',
            curTime:''
        }

        this.setNewNumber = this.setNewNumber.bind(this);
        this.settingState = this.settingState.bind(this)
    };

    componentWillMount(){
        console.log("will")
        let timems = (new Date).getTime();
        this.setState({
            curTime:timems,
            keyval:0,

        })

    }

    settingState(){
         console.log("here")
        this.forceUpdate();

    }

    setNewNumber() {
        let key1=['a', 'b', 'c','1'];
        let timemsupdated = (new Date).getTime();

        console.log(timemsupdated-this.state.curTime);

        if (timemsupdated-this.state.curTime>1500){

            this.setState({
                data: 'a',
                keyval:0,
                pressedstring:this.state.pressedstring+key1[this.state.keyval],
                curTime:timemsupdated
            })
        }
        else {
            let value = ((this.state.keyval + 1)% 4);
            this.setState({
                data: key1[value],
                keyval:value,
                pressedstring:this.state.pressedstring,
                curTime:timemsupdated
            })
        }
    this.settingState()
    }


    render() {
        return (
            <div   style={back}>
                <Content myNumber = {this.state.data}></Content>
                <StringTyped stringtyped={this.state.pressedstring}></StringTyped>
               <button style = {divStyle} onClick = {this.setNewNumber} >abc1</button>
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
class StringTyped extends React.Component {


    render() {
        return (
            <div>
                <h3>Typed String: {this.props.stringtyped}</h3>
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
