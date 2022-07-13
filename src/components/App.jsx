import React from "react";
import Emoji from "../components/emoji"
import emojipedia from "../emojipedia"

function creatEmoji(sathish){
  return (<Emoji 
  key={sathish.id}
  emoji={sathish.emoji}
  name={sathish.name}
  meaning={sathish.meaning}
  />)
}

function App(props) {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(creatEmoji)}
        
        {/*<Emoji
        key={emojipedia[0].id} 
        emoji={emojipedia[0].emoji} 
        name={emojipedia[0].name}
        meaning={emojipedia[0].meaning}
        />*/}
      </dl>
    </div>
  );
}

export default App;
