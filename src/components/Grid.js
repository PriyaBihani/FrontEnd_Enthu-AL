import React from 'react'
import mario from '../assets/mario.jpg'
import turtle from '../assets/turtle.svg'


const Grid = ({ size, addresses, curPos }) => {
    
    return (
        <div>
            {
                [...Array(size)].map((re, r) =>
                    <div className="row" key={r}>
                        {
                            [...Array(size)].map((ce, c) =>
                                <div className="box" key={c + r}>
                                    {
                                        addresses && addresses.indexOf((r*size+c)+1) !== -1 &&
                                            <img className="char-image" src={turtle} />
                                        
                                    }
                                    {
                                        (((r*size)+c)+1) === curPos &&
                                            <img className="char-image" src={mario} />
                                    }
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Grid
