import React from 'react';

export class EventsClass extends Component {
    clickHandler(){
        console.log("Clicked the class button")
    }
}

function EventsFunctional() {
    function clickHandler(){
        console.log("Clicked the functional button")
    }
  return (
    <div>
        <button onClick={this.clickHandler}>click me - functional component</button>
    </div>
  )
}

export default EventsFunctional