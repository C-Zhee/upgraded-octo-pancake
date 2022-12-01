import React from "react";
import BotCard from "./BotCard"

function BotCollection({botCollection, addBot}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {
          botCollection.map((bot)=>{
            return(
              <div>
                <BotCard bot={bot}/>
              {/* <button onClick={()=>{addBot(bot)}}>Buy Me!</button> */}
              </div>
            )
    
          })
        }
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
