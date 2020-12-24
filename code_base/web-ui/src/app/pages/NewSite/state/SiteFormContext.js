import React, { createContext, useState } from 'react';

export const SiteFormContext = createContext();

export const SiteFormProvider = (props) => {
    const [siteName, setSiteName] = useState('');
    const [location, setLocation] = useState('');
    const [floor, setFloor] = useState([]);
    const [desk, setDesk] = useState('');

    return (
        <SiteFormContext.Provider value={{
            siteNameInput: [siteName, setSiteName],
            locationInput: [location, setLocation],
            floorInput: [floor, setFloor],
            deskInput: [desk, setDesk]
        }}>
            {props.children}
        </SiteFormContext.Provider>
    )
}