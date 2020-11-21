import React, { useState } from 'react';

import Chip from '@material-ui/core/Chip';
import AddIcon from '@material-ui/icons/Add';

import Aux from '../../HOC/Auxiliary'
import FloorDetails from './FloorDetails/FloorDetails'
import './Floor.css'

const Floor = (props) => {
    let [floors, setFloors] = useState({ count: [1] })
    let [floorDetails, setFloorDetails] = useState([<FloorDetails key={1}/>])

    const handleAddFloor = () => {
        let floorArray = [...floors.count]
        let id = floors.count[floors.count.length - 1] + 1
        floorArray.push(id)
        setFloors({ count: floorArray })

        for(let i=0; i<floors.count.length; i++){
            let displayFloor = [...floorDetails]
            displayFloor.push(<FloorDetails key={floors.count[i]}/>)

            setFloorDetails(displayFloor)
        }
    }

    return (
        <Aux>
            <h3 className="floorHeading">FLOORS</h3>
            <div style={{display: 'flex', position:'absolute', top:'320px', maxWidth: '100vw', flexWrap: 'wrap'}}>
            {floorDetails}
            </div>
            <Chip
                label="Add another Floor"
                clickable
                color="primary"
                onDelete={handleAddFloor}
                deleteIcon={<AddIcon />}
                variant="outlined"
                className="addFloor"
            />
        </Aux>
    )
}

export default Floor;