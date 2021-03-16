import React from 'react'
import './animation8.2.css'
class Box extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    componentDidMount() {
        console.log("[componentDidMount]")
        setTimeout(() => {
            this.setState({show: !this.state.show })
        }, 2000)
        console.log(this.state.show)
    }

    componentDidUpdate() {
        console.log("[componentDidUpdate]")
        setTimeout(() => {
            this.setState({show: !this.state.show })
        }, 3000)
    }


    render() {
        return (
            <div className="App">
                <div>
                    {
                        this.state.show ? <div style={{height: this.props.height,width: this.props.width }}className="box"></div> : null
                    }
                </div>

            </div>
        );
    }
}
export default Box;