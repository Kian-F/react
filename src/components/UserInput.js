import React from 'react'


const userInput = (props) =>{
    console.log(props);
    

return(
    <div>
    <input type="text" onChange={props.changed} value={props.currentName}/>
    <p change={props.change}>UserName: {props.userName}</p>
    </div>
)


};

export default userInput;
