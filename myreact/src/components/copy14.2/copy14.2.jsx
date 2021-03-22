import react from 'react';

export default class Copy extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""

        }
        this.textInput = react.createRef();
        this.selectTextInput = this.selectTextInput.bind(this);
    }
    selectTextInput() {
       this.setState({value:this.textInput.current.value})
        
      
    }

    async componentDidMount() {

    }



    render() {
        return (
            <div>
                
                <textarea
                    type="text"
                    ref={this.textInput} />
                <input
                    type="button"
                    value="select the text input"
                    onClick={this.selectTextInput}
                />
                  <h4>Value: {this.state.value}</h4>
            </div>
        );
    }
}
