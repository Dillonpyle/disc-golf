import React from 'react'
import HourlyForcast from './HourlyForcast';
import CurrentForcast from './CurrentForcast';
import DailyForcast from './DailyForcast';
import './Weather.css'



const LocalList = ({ hourlyForcast, dailyForcast }) => (
    < div className="localList">
        {hourlyForcast && <CurrentForcast CurrentForcast={hourlyForcast} />}
        {hourlyForcast && <HourlyForcast HourlyForcast={hourlyForcast} />}
        {dailyForcast && <DailyForcast DailyForcast={dailyForcast} />}
    </div >
);

export default LocalList;