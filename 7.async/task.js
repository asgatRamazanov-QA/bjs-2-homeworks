class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timerId = null;
    }


    addclock(time, callback) {
        if (time == undefined || calback == undefined) {
            throw new Error("отсутствуют обязательные аргументы");
        }
        const res = this.alarmCollection.find(item=>item.time === time);
        if(res) {
            console.warn("Уже присутствует звонок на это же время");
        }
        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true
        });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(item =>{
            return item.time !== time;
        });
    }

    getCurrentFormattedTime() {
        const today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();

        if(hours<10) {
            hours = "0"+ hours;
        }
        if(minutes<10) {
            minutes = "0" + minutes;
        }
        let res = `${hours}:${minutes}`;
        return res;
    }

    start() {
         if(this.intervalId != undefined) {
            return;
          } else {
            this.IntervalId = setInterval(()=>{
                this.alarmCollection.forEach((item)=> {
                    if((this.getCurrentFormattedTime() == item.time) && item.canCall==true) {
                    item.canCall = false;
                    item.calback();
                }
                });

            },5000);
        }
    }

    stop() {
        clearInterval(this.intervalId);
        thisIntervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(item=> {
        item.canCall = true;
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    const phoneAlarm = new AlarmClock();
    phoneAlarm.addClock('08:00', () => console.log('Просыпайся'), 1);
    phoneAlarm.addClock('08:01', () => {console.log('Пора гулять с Балу'); phoneAlarm.removeClock(2)},2);
    phoneAlarm.addClock('08:02', () => console.log('Подъем'), 3);
    phoneAlarm.printAlarms();
    phoneAlarm.removeClock(3);
    phoneAlarm.removeClock(1);
    phoneAlarm.removeClock(2);
    phoneAlarm.printAlarms();
}

testCase();