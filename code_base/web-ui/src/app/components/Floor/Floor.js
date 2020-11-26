import React, { useState } from 'react';

import AddIcon from '@material-ui/icons/Add';

import Aux from '../../HOC/Auxiliary'
import FloorDetails from './FloorDetails/FloorDetails'
import './Floor.css'

const Floor = (props) => {
    let [floors, setFloors] = useState({ count: [1] })
    let [floorDetails, setFloorDetails] = useState([<FloorDetails key={0} onBlurFloor={props.onBlurFloor} onBlurOpd={props.onBlurOpd} onBlurRsD={props.onBlurRsD} id={0}/>])

    const handleAddFloor = () => {
        let floorArray = [...floors.count]
        let id = floors.count[floors.count.length - 1] + 1
        floorArray.push(id)
        setFloors({ count: floorArray })

        for (let i = 0; i < floors.count.length; i++) {
            let displayFloor = [...floorDetails]
            displayFloor.push(<FloorDetails key={floors.count[i]} onBlurFloor={props.onBlurFloor} onBlurOpd={props.onBlurOpd} onBlurRsD={props.onBlurRsD} id={floors.count[i]}/>)

            setFloorDetails(displayFloor)
        }
    }

    return (
        <Aux>
            <h3 className="floorHeading">FLOORS</h3>
            <div className="floorSection">
                {floorDetails}
                <div className="addFloor" onClick={handleAddFloor}>
                    <span className="addFloorText">Add another Floor</span>
                    <AddIcon className="addButton"/>
                </div>
            </div>
        </Aux>
    )
}

export default Floor;