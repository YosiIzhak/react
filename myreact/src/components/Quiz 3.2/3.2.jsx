const Quiz = () => {
    return (
        <div class="quiz">
            <div class="quizTitle"><b> {`how do you like Front end?`} </b> <hr/>
                <div class="Q1"> {`how much you love front end?`}<br/>
                <input class="input1" type="range"/>
                </div><hr/>
                <div class="Q2">{`what is your favorite front end feature topic?`}<br/>
                <input class="input2" type="input"/> 
                </div>
            </div>
        </div>
    )
}
export default Quiz