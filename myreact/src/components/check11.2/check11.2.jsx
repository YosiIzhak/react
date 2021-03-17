import React from 'react'
import './check11.2.css'
class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isChecked: props.checked }
    }
    toggleChange = (e) => {
        this.setState({
            isChecked: !this.state.isChecked
        });
    }
    render() {
        return (
            <div>
                <label>{this.props.value}
                    <input key={this.props.id} type="checkbox" defaultChecked={this.state.isChecked} onChange={this.onChange} />
                </label>
            </div>
        )
    }
}

export default CheckBox