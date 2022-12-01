import React from "react";

const YourBotArmy =({party}) => {
  //your bot army code here...
  
  {
    party.map((bot)=> {
      return(
        <div>
          <img src ={bot.avatar_url}/>
        </div>
      )
    })
  }
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/

          }
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
