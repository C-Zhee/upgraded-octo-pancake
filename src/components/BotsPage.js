import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { useState, useEffect } from "react"

const BotsPage = () => {
  //start here with your code for step one
  const [botCollection, setBotCollection] = useState([])
  const [party, setParty] = useState([])

  useEffect(()=>{
    const request = async() => {
      let req = await fetch ("http://localhost:8002/bots")
      let res = await req.json()
      console.log(res)
      setBotCollection(res)
    }   
    request()
  },[])

  const addBot=(bot)=>{
    if (party.includes(bot))return;
    setParty([...party,bot])
  }

  
  // Attempt at removing the bot
  // const removeBot=(bye)=>{
  //   setParty(party.filter(bye => bye !== bye))
  // }
   
  // Attempt at the delete function
  // const killBot = async(bot) => {
  //   let req = await fetch (`http://localhost:8002/bots/${bot.id}`), {
  //     method: "DELETE"
  //   }
  //   setParty(party.filter(bye => bye.id !== bot.id))
  // }


  return (
    <div>
      <YourBotArmy party={party} />
      <BotCollection botCollection={botCollection} addbot={addBot} />
    </div>
  )
}

export default BotsPage;
