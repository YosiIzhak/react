import React from 'react'
import './spinner9.1.css'
class Spinner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }
    componentDidMount() {
        console.log("[componentDidMount]")
        setTimeout(() => {
            this.setState({show: !this.state.show })
        }, 5000)
      
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
                <div className="body">
                    {
                      this.state.show ? <div className="loader"></div> : null
                     
                    }
                </div>

            </div>
        );
    }
}
export default Spinner;