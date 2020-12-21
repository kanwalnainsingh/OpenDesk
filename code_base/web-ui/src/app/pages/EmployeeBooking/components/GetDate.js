import { Typography } from '@material-ui/core';
import React from 'react';
import { Calendar } from './Calendar';

export const GetDate = () => {
    return (
        <div style={{ padding: '0 0 24px 5px' }}>
            <Typography style={{ fontSize: 16 }}>Tap to select a Date</Typography>
            <Calendar />
        </div>
    )
}