

const FormatDate = (props) => {
    let date = props.date;

    let formattedDate = new Date(date * 1000);
    let day = formattedDate.getDate();
    if (day < 10) day = '0' + day;
    let month = formattedDate.getMonth() + 1;
    if (month < 10) month = '0' + month;
    let year = formattedDate.getFullYear();
    let hours = formattedDate.getHours();
    if (hours < 10) hours = '0' + hours;
    let minutes = formattedDate.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    let displayMonth = formattedDate.toLocaleString('en', { month: 'short' });

    formattedDate = `${displayMonth} ${day} ${year} at ${hours}:${minutes}`;
    let isToday = `${day}.${month}.${year}`;

    let now = new Date();

    let thisDay = now.getDate();
    if (thisDay < 10) thisDay = '0' + thisDay;
    let thisMonth = now.getMonth() + 1;
    if (thisMonth < 10) thisMonth = '0' + thisMonth;
    let thisYear = now.getFullYear();
    let thisHours = now.getHours();
    if (thisHours < 10) thisHours = '0' + thisHours;
    let thisMinutes = now.getMinutes();
    if (thisMinutes < 10) thisMinutes = '0' + thisMinutes;
    // let weekday = formattedDate.toLocaleString('en', { weekday: 'long' });

    now = `${thisDay}.${thisMonth}.${thisYear}`;

    if(isToday === now) {
        let nowTime = thisMinutes + thisHours * 60;
        let dateOfQuestion = minutes + hours * 60;
        let toDisplay = nowTime - dateOfQuestion;
        if(toDisplay < 60) {
            if(toDisplay < 1) {
                return `just now`;
            } else return `${toDisplay} min ago`
        }
        else if (toDisplay / 60 < 24){
            if((toDisplay / 60).toFixed(0) === 1) {
                return `${(toDisplay / 60).toFixed(0)} hour ago`;
            }
            else return `${(toDisplay / 60).toFixed(0)} hours ago`;
        } 
    }
    
    if(month === thisMonth) {
        if(thisDay - day === 2) {
            return `2 days ago`
        } else if(thisDay - day === 1) {
            return `yesterday`;
        }
    }
    
    return formattedDate;
}

export default FormatDate;