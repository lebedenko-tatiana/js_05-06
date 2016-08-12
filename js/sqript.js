var readout='', show = true, init = 0; 

function clearСlock() { 
	clearTimeout(clocktimer); 
	init = 0;
        show = true; 
	readout = '00:00:00 000'; 
	document.stopwatch.stopwatch__panel.value = readout; 
} 

function startTime() { 

  var currDate = new Date(); 
  var t = currDate.getTime() - startDate.getTime();
  var ms = t%1000; 
  t -= ms; 
  ms = Math.floor(ms);
  t = Math.floor(t/1000);
  var s = t%60; 
  t -= s;
  t = Math.floor(t/60);
  var m = t%60; 
  t -= m;
  t = Math.floor(t/60);
  var h = t%60;
  if (h < 10) { h = '0' + h;}
  if (m < 10) { m = '0' + m;}
  if (s < 10) { s = '0' + s;}
  if (ms < 10) { ms = '00' + ms; }
  if (ms >= 10 && ms < 100) { ms = '0' + ms; } 
  readout = h + ':' + m + ':' + s + ' ' + ms; 
  if (show == true) { document.stopwatch.stopwatch__panel.value = readout; } 
  clocktimer = setTimeout('startTime()', 1); 

} 

function start_pause() { 
  if (init == 0) {
    startDate = new Date(); 
    startTime(); 
    init = 1; 
    document.stopwatch.stopwatch__start.value = "Pause";
  } 
  else { 
    if (show == true) { 
      show = false; 
      document.stopwatch.stopwatch__start.value = "Start";
    }
    else { 
     show = true; 
     document.stopwatch.stopwatch__start.value = "Pause";
    } 
  } 
} 
