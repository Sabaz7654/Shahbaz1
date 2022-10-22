const currentTime = document.querySelector('h1')
const selectMenu = document.querySelectorAll('select')
const setAlarmBtn = document.querySelector('button')

let alarmTime, isAlarmset=false,
ringtone= new Audio("ring.mp3")


for (let i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i
    let option = `<option value="${i}"> ${i}</option>`
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option)
}

for (let i = 59; i > 0; i--) {
    i = i < 10 ? "0" + i : i
    let option = `<option value="${i}"> ${i}</option>`
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option)
}

for (let i = 2; i > 0; i--) {
    k = i == 1 ? "AM" : "PM"
    let option = `<option value="${k}"> ${k}</option>`
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option)
}
setInterval(() => {
    let date = new Date();
    h = date.getHours();// 0 - 23
    m = date.getMinutes(); // 0 - 59
    s = date.getSeconds(); // 0 - 59
    ampm = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`

    if (alarmTime == `${h}:${m} ${ampm}`) {
        console.log("alarm ringing")
        ringtone.play()
        ringtone.loop=true
    }

}, 1000)
function setAlarm() {
    if(isAlarmset){
        alarmTime="";
        ringtone.pause()
        setAlarmBtn.innerText = "Set Alarm"
        return isAlarmset= false
    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`
    if (time.includes('Hour') || time.includes('Minute') || time.includes('AM/PM')) {
        return alert("please select a valid time to set alarm")

    }
    isAlarmset= true
    alarmTime=time
    setAlarmBtn.innerText = "Clear Alarm"
}


setAlarmBtn.addEventListener('click', setAlarm)