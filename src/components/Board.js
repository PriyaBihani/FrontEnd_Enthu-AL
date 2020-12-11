import React, { useState, useEffect } from 'react'
import Controls from './Controls'
import Moves from './Moves'
import Grid from './Grid'

const Board = ({ size }) => {
    const center = Math.ceil(size / 2 - 1) * size + Math.ceil(size / 2);

    const [curPos, setCurPos] = useState(center)
    const [addresses, setAddresses] = useState()
    const [moves, setMoves] = useState(0);

    const createAddresses = () => {
        let i = 0;
        let array = [];

        while (i < size) {
            let num = Math.floor((Math.random() * (size * size)) +1);

            if (array.indexOf(num) === -1 && num !== center) {
                array.push(num);
                i++;
            }
        }
        setAddresses(array)
    }
    
    useEffect(() => {
        createAddresses();
    }, [])

    const checkAndSetPos = (pos) => {
        if(pos >= 1 && pos <= (size*size)){
            setCurPos(pos)
        }else{
            window.alert("Not a right move")
        }
    }

    const removeTurtles = (pos) => {
        const index = addresses.indexOf(pos)
        if( index !== -1 ){
            addresses.splice(index, 1);
        }
        if(addresses && addresses.length === 0){
            window.alert(`Game Over. You did it in ${moves} moves` )
        }
    }

    const handleKeyPress = (key) =>{
        setMoves(moves+1)

        switch (key) {
            case 'right':
                removeTurtles(curPos+1)
                checkAndSetPos(curPos+1);
                break;
            case 'left':
                removeTurtles(curPos-1)
                checkAndSetPos(curPos-1);
                break;    
            case 'down':
                removeTurtles(curPos+size)
                checkAndSetPos(curPos+size);
                break;
            case 'up':
                removeTurtles(curPos-size)
                checkAndSetPos(curPos-size)
                break;
            default:
                break;
        }

    }

    return(
    <div className="board">
        <div>
            <Moves moves={moves}/>
            <br/>
            <Grid  curPos={curPos} size={size} addresses={addresses} />
            <br/>
            <Controls handleKeyPress={handleKeyPress}/>
        </div>
    </div>
    )

}

export default Board
