import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = (props) => {
    const [site, setSite] = useState('');
    const [floor, setFloor] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <FormContext.Provider value={{
            siteInput: [site, setSite],
            floorInput: [floor, setFloor],
            dateInput: [selectedDate, setSelectedDate]
        }}>
            {props.children}
        </FormContext.Provider>
    )
}