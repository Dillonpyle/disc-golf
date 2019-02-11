import React from 'react'

const DailyForcast = ({ DailyForcast }) => {

    let dailyForcast = DailyForcast.map((day, i) => {

        //converts UNIX time into military time
        let aHigh = new Date(day.apparentTemperatureHighTime * 1000);
        let monthsHigh = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let monthHigh = monthsHigh[aHigh.getMonth()];
        let dateHigh = aHigh.getDate();
        let highHour = aHigh.getHours();

        if (highHour === 12) {
            var convertedHighHour = '12PM'
        } else if (highHour === 13) {
            var convertedHighHour = '1PM'
        } else if (highHour === 14) {
            var convertedHighHour = '2PM'
        } else if (highHour === 15) {
            var convertedHighHour = '3PM'
        } else if (highHour === 16) {
            var convertedHighHour = '4PM'
        } else if (highHour === 17) {
            var convertedHighHour = '5PM'
        } else if (highHour === 18) {
            var convertedHighHour = '6PM'
        } else if (highHour === 19) {
            var convertedHighHour = '7PM'
        } else if (highHour === 20) {
            var convertedHighHour = '8PM'
        } else if (highHour === 21) {
            var convertedHighHour = '9PM'
        } else if (highHour === 22) {
            var convertedHighHour = '10PM'
        } else if (highHour === 23) {
            var convertedHighHour = '11PM'
        } else if (highHour === 0) {
            var convertedHighHour = '12AM'
        } else {
            var convertedHighHour = highHour + 'AM'
        }

        let formattedHighTime = monthHigh + ' ' + dateHigh + ' ' + convertedHighHour;


        //converts UNIX time into military time
        let aLow = new Date(day.apparentTemperatureLowTime * 1000);
        let monthsLow = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let monthLow = monthsLow[aLow.getMonth()];
        let dateLow = aLow.getDate();
        let LowHour = aLow.getHours();

        if (LowHour === 12) {
            var convertedLowHour = '12PM'
        } else if (LowHour === 13) {
            var convertedLowHour = '1PM'
        } else if (LowHour === 14) {
            var convertedLowHour = '2PM'
        } else if (LowHour === 15) {
            var convertedLowHour = '3PM'
        } else if (LowHour === 16) {
            var convertedLowHour = '4PM'
        } else if (LowHour === 17) {
            var convertedLowHour = '5PM'
        } else if (LowHour === 18) {
            var convertedLowHour = '6PM'
        } else if (LowHour === 19) {
            var convertedLowHour = '7PM'
        } else if (LowHour === 20) {
            var convertedLowHour = '8PM'
        } else if (LowHour === 21) {
            var convertedLowHour = '9PM'
        } else if (LowHour === 22) {
            var convertedLowHour = '10PM'
        } else if (LowHour === 23) {
            var convertedLowHour = '11PM'
        } else if (LowHour === 0) {
            var convertedLowHour = '12AM'
        } else {
            var convertedLowHour = LowHour + 'AM'
        }

        let formattedLowTime = monthLow + ' ' + dateLow + ' ' + convertedLowHour;

        console.log(day)
        return (
            <div key={i} className="day">
                <h4>High at {formattedHighTime} | Low at {formattedLowTime}</h4>
                <h1>{day.apparentTemperatureHigh}° | {day.apparentTemperatureLow}°</h1>
                <h3>Rain Chance{day.precipProbability}</h3>
                <h3>Wind Speed {day.windSpeed} | Gust {day.windGust}</h3>
            </div>
        )
    })
    return (
        <div className="dailyForcast">
            {dailyForcast}
        </div>
    )

}
export default DailyForcast
