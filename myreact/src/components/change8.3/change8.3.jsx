import React from 'react'
import './change8.3.css'
class Change extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: ""
        }
    }
    componentDidMount() {
        console.log("[componentDidMount]")
        setTimeout(() => {
            this.setState({color: this.state.color })
        }, 5000)
        console.log(this.state.color)
    }

    // componentDidUpdate() {
    //     console.log("[componentDidUpdate]")
    //     setTimeout(() => {
    //         this.setState({show: this.state.color })
    //     }, 3000)
    // }


    render() {
        return (
            <div className="App">
                <div>
                    {
                        <div className="box"></div>
                    }
                </div>

            </div>
        );
    }
}
export default Change;