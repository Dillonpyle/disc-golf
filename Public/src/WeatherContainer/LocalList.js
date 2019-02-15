import React from 'react'
import HourlyForcast from './HourlyForcast';
import CurrentForcast from './CurrentForcast';
import DailyForcast from './DailyForcast';
import './Weather.css'



const LocalList = ({ hourlyForcast, dailyForcast, name }) => {



    return (
        < div className="localList">
            {hourlyForcast && <CurrentForcast CurrentForcast={hourlyForcast} name={name} />}
            {hourlyForcast && <HourlyForcast HourlyForcast={hourlyForcast} />}
            {dailyForcast && <DailyForcast DailyForcast={dailyForcast} />}
        </div >
    )

}




export default LocalList;