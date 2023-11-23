const getRemainTime = deadline => {
    let now = new Date(), 
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ( '0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ( '0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ( '0' + Math.floor(remainTime / 3600 % 60)).slice(-2),
        remainDays = Math.floor(remainTime /(3600 * 24));
    
    return {
        remainDays,
        remainHours,
        remainMinutes,
        remainSeconds,
        remainTime
    }
}

const countdown = (deadline, elem, finalMessage, remainItem) => {
    const el = document.getElementById(elem);

    const timeUpdate = setInterval(() => {
        let t = getRemainTime(deadline);

        
        if(remainItem === 'days') el.innerHTML = `${t.remainDays}`;
        if(remainItem === 'hours') el.innerHTML = `${t.remainHours}`;
        if(remainItem === 'minutes') el.innerHTML = `${t.remainMinutes}`;
        if(remainItem === 'seconds') el.innerHTML = `${t.remainSeconds}`;


        if(t.remainTime <= 1 ){
            clearInterval(timeUpdate);
            el.innerHTML = finalMessage;
        }
    }, 1000);
}

countdown('Nov 24 2023 18:00:00 GMT-0500', 'days_div', '0', 'days')
countdown('Nov 24 2023 18:00:00 GMT-0500', 'hrs_div', '0', 'hours')
countdown('Nov 24 2023 18:00:00 GMT-0500', 'min_div', '0', 'minutes')
countdown('Nov 24 2023 18:00:00 GMT-0500', 'seg_div', '0', 'seconds')