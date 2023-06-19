import './Square.css';
import { useEffect, useState } from 'react';
function Square ({arrayofgame, setArrayofgame, turn, setTurn, index, findwinner, reset, savemovearray, setSavemovearray}){
    useEffect(()=>{
        setArrayofgame([])
    },[reset])

    setArrayofgame(arrayofgame);

    function setbox(){
      if(findwinner==false)
      {
        if(arrayofgame[index]==undefined || arrayofgame[index]==null){
            if(turn){
                setTurn(!turn);
                arrayofgame[index]="x"
                setSavemovearray([...savemovearray, ["x", index]])
               }else{
                setTurn(!turn); 
                arrayofgame[index]="o"
                setSavemovearray([...savemovearray, ["o", index]])
               }
        }
      }  
    }
  return(
    <div onClick={()=>setbox()} className="box1">{arrayofgame[index]}</div>
  )
}
export default Square;