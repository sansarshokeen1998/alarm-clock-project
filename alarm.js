function setAlarm() {
    let time = document.getElementById('time').value;
    let alarmTime = new Date();
    alarmTime.setHours(time.split(':')[0]);
    alarmTime.setMinutes(time.split(':')[1]);
    alarmTime.setSeconds(0);
    alarmTime.setMilliseconds(0);
  
    let now = new Date();
    let timeToAlarm = alarmTime - now;
  
    if (timeToAlarm < 0) {
      timeToAlarm += 24 * 60 * 60 * 1000;
    }
  
    setTimeout(() => {
      playAlarm();
    }, timeToAlarm);
    
    document.getElementById('message').innerHTML = `Alarm set for ${time}`;
  }
  
  function playAlarm() {
    let audio = new Audio('alarm-sound.mp3');
    audio.play();
    document.getElementById('message').innerHTML = 'Time to wake up!';
  }
  