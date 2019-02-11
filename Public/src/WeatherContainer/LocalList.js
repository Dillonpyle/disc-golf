import React from 'react'
import HourlyForcast from './HourlyForcast';
import CurrentForcast from './CurrentForcast';
import DailyForcast from './DailyForcast';
import './Weather.css'


const LocalList = ({ hourlyForcast, dailyForcast }) => (
    < div >
        {hourlyForcast && <CurrentForcast className='currentForcast' CurrentForcast={hourlyForcast} />}
        {hourlyForcast && <div>Hourly Conditions <HourlyForcast HourlyForcast={hourlyForcast} /></div>}
        {dailyForcast && <div>Daily Conditions <DailyForcast DailyForcast={dailyForcast} /></div>}
    </div >
);

export default LocalList;