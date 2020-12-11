import React from 'react'

const Controls = ({handleKeyPress}) => {
    return (
         <div className="controls ">
            <div className="keys">
                <div onClick={() => {
                        handleKeyPress("up");
                    }} className="key up">
                        <i className="fa fa-arrow-up"></i>
                </div>
                <br/>
                <div onClick={() => {
                        handleKeyPress("left");
                    }} className="key left">
                    <i className="fa fa-arrow-left"></i>
                </div>
                <div onClick={() => {
                        handleKeyPress("down");
                    }} className="key down">
                    <i className="fa fa-arrow-down"></i>
                </div>
                <div onClick={() => {
                        handleKeyPress("right");
                    }} className="key right">
                    <i className="fa fa-arrow-right"></i>
                </div>
            </div>
        </div>
    )
}

export default Controls
