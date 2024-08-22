const d = document;

export default function clock(clock){
    let time;
    time = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerText = clockHour;
    }, 1000);
}