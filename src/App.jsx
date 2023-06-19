
import './App.css'
import Square from './Square'
import { useState } from 'react'
import { useEffect } from 'react';

function App() {
 
  
  const [arrayofgame, setArrayofgame]=useState([]);
  const [turn, setTurn]=useState(true);
  const [findwinner, setFindwinner]=useState(false)
  const [winner,setWinner]=useState()
  const [savemovearray, setSavemovearray]=useState([])


  useEffect(()=>{
    let winbool=false;
    if(findwinner==false){
      winbool=checkwin();
      if(winbool===true){
        setFindwinner(true);
      }
    }else{
      console.log("winner was found already");
    }
    
  },[turn])

  function checkwin(){
    if (
      (arrayofgame[0] === arrayofgame[1] && arrayofgame[1] === arrayofgame[2] &&arrayofgame[0]!=undefined)||
      (arrayofgame[0] === arrayofgame[4] && arrayofgame[4] === arrayofgame[8] &&arrayofgame[0]!=undefined)||
      (arrayofgame[0] === arrayofgame[3] && arrayofgame[3] === arrayofgame[6] &&arrayofgame[0]!=undefined)
      ){
      setWinner(arrayofgame[0]);
      return(true);
      }
    if (
      (arrayofgame[6] === arrayofgame[4] && arrayofgame[4] === arrayofgame[2] &&arrayofgame[6]!=undefined)||
      (arrayofgame[6] === arrayofgame[7] && arrayofgame[7] === arrayofgame[8] &&arrayofgame[6]!=undefined)
    ){
      setWinner(arrayofgame[6]);
      return(true);
    }
    if (arrayofgame[1] === arrayofgame[4] && arrayofgame[4] === arrayofgame[7] &&arrayofgame[1]!=undefined){
      setWinner(arrayofgame[1]);
      return(true);
    }
    if (arrayofgame[2] === arrayofgame[5] && arrayofgame[5] === arrayofgame[8] &&arrayofgame[2]!=undefined){
      setWinner(arrayofgame[2]);
      return(true);
    }
    if (arrayofgame[3] === arrayofgame[4] && arrayofgame[5] === arrayofgame[4] &&arrayofgame[3]!=undefined){
      setWinner(arrayofgame[3]);
      return(true);
    }
  }
  const [reset, setReset]=useState(false);
  function resetgame(){
    setReset(!reset)
    setArrayofgame([]);
    setTurn(true);
    setFindwinner(false);
    setWinner(undefined);
  }

  function gobackfunc(){
    if (savemovearray!=undefined && savemovearray!=null){
      let lastmark = savemovearray[savemovearray.length-1][0];
      let lastindex = savemovearray[savemovearray.length-1][1];
      console.log(arrayofgame, "arrayofgame")
      arrayofgame[lastindex]=undefined;
      const updatearrayofgame = [...arrayofgame];
      console.log(updatearrayofgame, "updatearrayofgame")
      setArrayofgame(updatearrayofgame);

      const updatesavemovearray = savemovearray.slice(0,-1)
      console.log("savemoveafterupdate", updatesavemovearray);
      setSavemovearray(updatesavemovearray);

      setTurn(!turn);
      setFindwinner(false);
      setWinner(undefined);
    }
  }

  return (
  <div>
    <div className='row-div'>
      <Square arrayofgame={arrayofgame} setArrayofgame={setArrayofgame} turn={turn} setTurn={setTurn} index={0} findwinner={findwinner} reset={reset} savemovearray={savemovearray} setSavemovearray={setSavemovearray}></Square>
      <Square arrayofgame={arrayofgame} setArrayofgame={setArrayofgame} turn={turn} setTurn={setTurn} index={1} findwinner={findwinner} reset={reset} savemovearray={savemovearray} setSavemovearray={setSavemovearray}></Square>
      <Square arrayofgame={arrayofgame} setArrayofgame={setArrayofgame} turn={turn} setTurn={setTurn} index={2} findwinner={findwinner} reset={reset} savemovearray={savemovearray} setSavemovearray={setSavemovearray}></Square>
    </div>
    <div className='row-div'>
      <Square arrayofgame={arrayofgame} setArrayofgame={setArrayofgame} turn={turn} setTurn={setTurn} index={3} findwinner={findwinner} reset={reset} savemovearray={savemovearray} setSavemovearray={setSavemovearray}></Square>
      <Square arrayofgame={arrayofgame} setArrayofgame={setArrayofgame} turn={turn} setTurn={setTurn} index={4} findwinner={findwinner} reset={reset} savemovearray={savemovearray} setSavemovearray={setSavemovearray}></Square>
      <Square arrayofgame={arrayofgame} setArrayofgame={setArrayofgame} turn={turn} setTurn={setTurn} index={5} findwinner={findwinner} reset={reset} savemovearray={savemovearray} setSavemovearray={setSavemovearray}></Square>
    </div>
    <div className='row-div'>
      <Square arrayofgame={arrayofgame} setArrayofgame={setArrayofgame} turn={turn} setTurn={setTurn} index={6} findwinner={findwinner} reset={reset} savemovearray={savemovearray} setSavemovearray={setSavemovearray}></Square>
      <Square arrayofgame={arrayofgame} setArrayofgame={setArrayofgame} turn={turn} setTurn={setTurn} index={7} findwinner={findwinner} reset={reset} savemovearray={savemovearray} setSavemovearray={setSavemovearray}></Square>
      <Square arrayofgame={arrayofgame} setArrayofgame={setArrayofgame} turn={turn} setTurn={setTurn} index={8} findwinner={findwinner} reset={reset} savemovearray={savemovearray} setSavemovearray={setSavemovearray}></Square>
    </div>
    <br></br>
    <button onClick={()=>resetgame()}>Reset game</button>
    <button onClick={()=>gobackfunc()}>go back 1 move</button>
    {findwinner && <div>the winner is {winner}.</div>}
  </div>
  )
}

export default App
