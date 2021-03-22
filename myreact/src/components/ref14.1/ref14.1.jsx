import react from 'react';

export default class Ref extends react.Component {
    constructor(props) {
        super(props);
        this.textInput = react.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }
    focusTextInput() {
         this.textInput.current.focus();
      }
    
    async componentDidMount() {
    this.focusTextInput()
    }
    
    

    render() {
        return (
            <div>
              <input
                type="text"
                ref={this.textInput} />
              <input
                type="button"
                value="Focus the text input"
                onClick={this.focusTextInput}
              />
            </div>
          );
    }
}
