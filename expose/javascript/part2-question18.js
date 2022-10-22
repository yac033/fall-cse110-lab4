function PrintTimePerSecond(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(PrintTimePerSecond, 1000);