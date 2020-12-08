import React from 'react'
import BigCard from './components/BigCard'
import SmallCard from './components/SmallCard'

const EmployeeList = () => {
    return (
       <div>
        <div>
            <BigCard />
        </div>
        <div>
            <SmallCard />
        </div>
       </div>
    )
};

export default EmployeeList;