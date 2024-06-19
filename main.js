let today = new Date(Date.now());
setInterval(() => {
  today = new Date(Date.now());
}, 1000);
window.wallpaperPropertyListener = {
  applyUserProperties: function (properties) {
    let correctDate1 = false;
    let correctDate2 = false;
    // let diff2;
    if (properties.enableWindowbool) {
      let x = properties.enableWindowbool.value;
      dragbarbutton.addEventListener("click", () => {
        item.style.display = "none";
      });
      // debuggerText.textContent = x;
      if (x) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
      //   debuggerText.textContent = "Damn boy!";
    }
    if (properties.zoomscaleslider) {
      let value = properties.zoomscaleslider.value;
      zoom = value;
      item.style.zoom = zoom;
    }
    if (properties.box2title) {
      timer2_title.textContent = properties.box2title.value;
    }
    if (properties.timer2date) {
      let date = properties.timer2date.value;
      const date_regex =
        /(?:[\d]{4}[\/][\d]{2}[\/][\d]{2})(?:[\s](?:[\d]{2}[:]){2}[\d]{2})?$/;
      if (date.match(date_regex)) {
        correctDate2 = true;
        timer2_date.textContent = date;
      } else {
        correctDate2 = false;
      }
    }
    //(?:[\d]{4}[\/][\d]{2}[\/][\d]{2})(?:[\s](?:[\d]{2}[:]){2}[\d]{2})?$ date format checking regex
    if (properties.box2todaysdate) {
      if (properties.box2todaysdate.value) {
        timetodaycontent2.style.display = "flex";
        progressbar2.style.display = "none";
        timeleftcontent2.style.display = "none";
      } else {
        timetodaycontent2.style.display = "none";
        progressbar2.style.display = "unset";
        timeleftcontent2.style.display = "flex";
      }
    }
    if (properties.timer2startingdate) {
      timerdoc2.textContent = properties.timer2startingdate.value;
    }
    if (properties.timer1date) {
      let date = properties.timer1date.value;
      const date_regex =
        /(?:[\d]{4}[\/][\d]{2}[\/][\d]{2})(?:[\s](?:[\d]{2}[:]){2}[\d]{2})?$/;
      if (date.match(date_regex)) {
        correctDate1 = true;
        timer1_date.textContent = date;
      } else {
        correctDate1 = false;
      }
    }
    if (properties.box1todaysdate) {
      if (properties.box1todaysdate.value) {
        timetodaycontent1.style.display = "flex";
        progressbar1.style.display = "none";
        timeleftcontent1.style.display = "none";
      } else {
        timetodaycontent1.style.display = "none";
        progressbar1.style.display = "unset";
        timeleftcontent1.style.display = "flex";
      }
    }
    if (properties.timer1startingdate) {
      timerdoc1.textContent = properties.timer1startingdate.value;
    }
    if (properties.box1title) {
      timer1_title.textContent = properties.box1title.value;
    }
    if (properties.address) {
      address.textContent = properties.address.value;
    }
    /* The following is huge piece of junk :) */
    if(properties.timer1day){

      let value =properties.timer1day.value
      let v1 = document.querySelector('.timer1 .showleft .day');
      let v2 = document.querySelector(".timer1 .showtoday .day");
      if(value){
        v1.style.display = 'unset'
        v2.style.display = 'unset'
      }else{
        v1.style.display = 'none'
        v2.style.display = 'none'
      }
    }
    if(properties.timer1hour){
      let value =properties.timer1hour.value
      let v1 = document.querySelector('.timer1 .showleft .hour');
      let v2 = document.querySelector(".timer1 .showtoday .hour");
      if(value){
        v1.style.display = 'unset'
        v2.style.display = 'unset'
      }else{
        v1.style.display = 'none'
        v2.style.display = 'none'
      }
    }
    if(properties.timer1min){
      let value =properties.timer1min.value
      let v1 = document.querySelector('.timer1 .showleft .min');
      let v2 = document.querySelector(".timer1 .showtoday .min");
      if(value){
        v1.style.display = 'unset'
        v2.style.display = 'unset'
      }else{
        v1.style.display = 'none'
        v2.style.display = 'none'
      }
    }
    if(properties.timer1sec){
      let value =properties.timer1sec.value
      let v1 = document.querySelector('.timer1 .showleft .sec');
      let v2 = document.querySelector(".timer1 .showtoday .sec");
      if(value){
        v1.style.display = 'unset'
        v2.style.display = 'unset'
      }else{
        v1.style.display = 'none'
        v2.style.display = 'none'
      }
    }
    if(properties.timer2day){

      let value =properties.timer2day.value
      let v1 = document.querySelector('.timer2 .showleft .day');
      let v2 = document.querySelector(".timer2 .showtoday .day");
      if(value){
        v1.style.display = 'unset'
        v2.style.display = 'unset'
      }else{
        v1.style.display = 'none'
        v2.style.display = 'none'
      }
    }
    if(properties.timer2hour){
      let value =properties.timer2hour.value
      let v1 = document.querySelector('.timer2 .showleft .hour');
      let v2 = document.querySelector(".timer2 .showtoday .hour");
      if(value){
        v1.style.display = 'unset'
        v2.style.display = 'unset'
      }else{
        v1.style.display = 'none'
        v2.style.display = 'none'
      }
    }
    if(properties.timer2min){
      let value =properties.timer2min.value
      let v1 = document.querySelector('.timer2 .showleft .min');
      let v2 = document.querySelector(".timer2 .showtoday .min");
      if(value){
        v1.style.display = 'unset'
        v2.style.display = 'unset'
      }else{
        v1.style.display = 'none'
        v2.style.display = 'none'
      }
    }
    if(properties.timer2sec){
      let value =properties.timer2sec.value
      let v1 = document.querySelector('.timer2 .showleft .sec');
      let v2 = document.querySelector(".timer2 .showtoday .sec");
      if(value){
        v1.style.display = 'unset'
        v2.style.display = 'unset'
      }else{
        v1.style.display = 'none'
        v2.style.display = 'none'
      }
    }
    updateTodaysDate1();
    updateTodaysDate2();
    if (correctDate1) {
      updateDiff1();
    }
    if (correctDate2) {
      updateDiff2();
    }
  },
};

const el = document.querySelector(".item");
el.addEventListener("mousedown", mousedown);
let zoom = 1;

let is_resizeing = false;
let is_dragbar = false;

function mousedown(e) {
  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", mouseup);
  if (!e.target.classList.contains("dragbar")) {
    is_dragbar = false;
  } else {
    is_dragbar = true;
  }
  let prevX = e.clientX;
  let prevY = e.clientY;
  function mousemove(e) {
    if (!is_resizeing && is_dragbar) {
      let newX = prevX - e.clientX;
      let newY = prevY - e.clientY;
      const rect = el.getBoundingClientRect();
      el.style.left = rect.left - newX / zoom + "px";
      el.style.top = rect.top - newY / zoom + "px";

      prevX = e.clientX;
      prevY = e.clientY;
    }
  }
  function mouseup() {
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
  }
}

const resizers = document.querySelectorAll(".resizer");
let curResizer;
let maxwidth = 150;
let maxheight = 150;
for (let resizer of resizers) {
  resizer.addEventListener("mousedown", mousedown);
  function mousedown(e) {
    curResizer = e.target;
    let prevX = e.clientX;
    let prevY = e.clientY;
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);
    function mousemove(e) {
      is_resizeing = true;
      const rect = el.getBoundingClientRect();
      console.log(el.offsetHeight);
      if (el.offsetWidth > maxwidth && el.offsetHeight > maxheight) {
        if (curResizer.classList.contains("se")) {
          el.style.width = rect.width - (prevX - e.clientX) / zoom + "px";
          el.style.height = rect.height - (prevY - e.clientY) / zoom + "px";
        } else if (curResizer.classList.contains("sw")) {
          el.style.width = rect.width + (prevX - e.clientX) / zoom + "px";
          el.style.height = rect.height - (prevY - e.clientY) / zoom + "px";
          if (el.offsetWidth > maxwidth)
            el.style.left = rect.left - (prevX - e.clientX) / zoom + "px";
        } else if (curResizer.classList.contains("ne")) {
          el.style.width = rect.width - (prevX - e.clientX) / zoom + "px";
          el.style.height = rect.height + (prevY - e.clientY) / zoom + "px";
          if (el.offsetHeight > maxheight)
            el.style.top = rect.top - (prevY - e.clientY) / zoom + "px";
        } else if (curResizer.classList.contains("nw")) {
          el.style.width = rect.width + (prevX - e.clientX) / zoom + "px";
          el.style.height = rect.height + (prevY - e.clientY) / zoom + "px";
          if (el.offsetWidth > maxwidth)
            el.style.left = rect.left - (prevX - e.clientX) / zoom + "px";
          if (el.offsetHeight > maxheight)
            el.style.top = rect.top - (prevY - e.clientY) / zoom + "px";
        }
      } else {
        outZone = true;
        if (el.offsetHeight <= maxheight) {
          el.style.height = maxheight + 1 + "px";
        }
        if (el.offsetWidth <= maxwidth) {
          el.style.width = maxwidth + 1 + "px";
        }
      }
      prevX = e.clientX;
      prevY = e.clientY;
    }

    function mouseup() {
      is_resizeing = false;
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseup", mouseup);
    }
  }
}
let item = document.querySelector(".item");
// let debuggerText = document.querySelector(".debuggerText");
let dragbarbutton = document.querySelector(".dragbar button");
let timer1_title = document.querySelector(".timer1 .title");
let timer2_title = document.querySelector(".timer2 .title");
let timer1_date = document.querySelector(".timer1 .date");
let timer2_date = document.querySelector(".timer2 .date");
let address = document.querySelector(".link");
let timecurdate1 = document.querySelector(".timer1 .todayDate");
let timecurdate2 = document.querySelector(".timer2 .todayDate");
let timecurtime1 = document.querySelector(".timer1 .currenttime");
let timecurtime2 = document.querySelector(".timer2 .currenttime");
let timetodaycontent1 = document.querySelector(".timer1 .timertodaycontent");
let timetodaycontent2 = document.querySelector(".timer2 .timertodaycontent");
let timeleftcontent1 = document.querySelector(".timer1 .timerleftcontent");
let timeleftcontent2 = document.querySelector(".timer2 .timerleftcontent");
let timeleftlabel1 = document.querySelector(".timer1 .timeleftlabel");
let timeleftlabel2 = document.querySelector(".timer2 .timeleftlabel");
let timerdoc1 = document.querySelector(".timer1 .dateofchange");
let timerdoc2 = document.querySelector(".timer2 .dateofchange");
let progressbar1 = document.querySelector(".timer1 .progressbar");
let progressbar2 = document.querySelector(".timer2 .progressbar");
function rawToFormat(raw_date) {
  raw_date = raw_date.replace("/", "-");
  raw_date = raw_date.replace("/", "-");
  raw_date = raw_date.replace(/\s/g, "T");
  raw_date += "Z";
  return raw_date;
}
function formatToRaw(for_date) {
  for_date = for_date.replace("-", "/");
  for_date = for_date.replace("-", "/");
  for_date = for_date.replace("Z", "");
  for_date = for_date.replace("T", " ");
  return for_date;
}
function dateFormatter(date) {
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  return `${year}/${prop(month)}/${prop(day)} ${prop(hour)}:${prop(min)}:${prop(
    sec
  )}`;
}
function cal_distance(original_date, newDate) {
  //format should be modified
  // let original_date = new Date(Date.now());
  let distance = (newDate - original_date) / 1000;

  let timezoneOffset = original_date.getTimezoneOffset() * 60;
  distance += timezoneOffset; // Adding the timezone offset to the distance
  const Min = 60;
  const Hour = 60 * 60;
  const Day = 60 * 60 * 24;
  let day = distance / Day;
  let hour = (distance % Day) / Hour;
  let min = (distance % Hour) / Min;
  let sec = distance % Min;
  if (distance < 0) {
    // return "00:00:00:00"; // customizable text???
    day = 0;
    hour = 0;
    min = 0;
    sec = 0;
  }
  return [prop(day), prop(hour), prop(min), prop(sec)]
}
//upper Text is date + weekday, lower text is year day, hour, min, sec
function updateBar1(s_date, end_date, cur_date) {
  // setInterval(() => {
    s_date = new Date(rawToFormat(s_date));
    end_date = new Date(rawToFormat(end_date));
    let originaldis = end_date - s_date ;
    let newdis = end_date - cur_date + cur_date.getTimezoneOffset()*60*1000;
    let percentage = newdis / originaldis;
    let coverbox = document.querySelector(".timer1 .cover");
    let progressbar = document.querySelector(".timer1 .progressbar");
    if (percentage < 0 || percentage>1) {
      percentage = 0;
    }
    coverbox.style.height = progressbar.offsetHeight * (1 - percentage) + "px";
  // }, 1000);
}
function updateBar2(s_date, end_date, cur_date) {
  // setInterval(() => {
    s_date = new Date(rawToFormat(s_date));
    end_date = new Date(rawToFormat(end_date));
    let originaldis = end_date - s_date ;
    let newdis = end_date - cur_date + cur_date.getTimezoneOffset()*60*1000;
    let percentage = newdis / originaldis;
    let coverbox = document.querySelector(".timer2 .cover");
    let progressbar = document.querySelector(".timer2 .progressbar");
    if (percentage < 0 || percentage>1) {
      percentage = 0;
    }
    coverbox.style.height = progressbar.offsetHeight * (1 - percentage) + "px";
    // timeleftlabel1.textContent = newdis
    // timeleftlabel2.textContent = percentage

  // }, 1000);
}
function LowerDate(date) {
  //format should be modified
  let yearDay = calYearDay();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  return [prop(yearDay), prop(hour), prop(min), prop(sec)]

}
function UpperDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let Day = date.getDate();
  let weekday = date.getDay();
  let word_weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return `${year}/${prop(month)}/${prop(Day)} ${word_weekday[weekday]}`;
}

function prop(v) {
  v = Math.floor(v);
  if (v < 10) {
    return "0" + v;
  } else {
    return v;
  }
}

//s_date calculated before timer interval
function updateTodaysDate1() {
  setInterval(() => {
    let lwrDate = LowerDate(today);
    let uprDate = UpperDate(today);
    timecurdate1.textContent = uprDate;
    let d = document.querySelector('.timer1 .showtoday .day')
    let h = document.querySelector('.timer1 .showtoday .hour')
    let m = document.querySelector('.timer1 .showtoday .min')
    let s = document.querySelector('.timer1 .showtoday .sec')
    let hd = getComputedStyle(h).getPropertyValue("display")
    let md = getComputedStyle(m).getPropertyValue("display")
    let sd = getComputedStyle(s).getPropertyValue("display")
    d.textContent = lwrDate[0]
    h.textContent= lwrDate[1]
    m.textContent= lwrDate[2]
    s.textContent= lwrDate[3]
    if(hd!="none" || md!="none" || sd !="none"){
      d.textContent+=":"
    }
    if(md!="none" || sd!="none"){
      h.textContent+=":"
    }
    if(sd!="none"){
      m.textContent+=":"
    }
  }, 1000);
}

function updateTodaysDate2() {
  setInterval(() => {
    let lwrDate = LowerDate(today);
    let uprDate = UpperDate(today);
    timecurdate2.textContent = uprDate;
    let d = document.querySelector('.timer2 .showtoday .day')
    let h = document.querySelector('.timer2 .showtoday .hour')
    let m = document.querySelector('.timer2 .showtoday .min')
    let s = document.querySelector('.timer2 .showtoday .sec')
    let hd = getComputedStyle(h).getPropertyValue("display")
    let md = getComputedStyle(m).getPropertyValue("display")
    let sd = getComputedStyle(s).getPropertyValue("display")
    d.textContent = lwrDate[0]
    h.textContent= lwrDate[1]
    m.textContent= lwrDate[2]
    s.textContent= lwrDate[3]
    if(hd!="none" || md!="none" || sd !="none"){
      d.textContent+=":"
    }
    if(md!="none" || sd!="none"){
      h.textContent+=":"
    }
    if(sd!="none"){
      m.textContent+=":"
    }
  }, 1000);
}

function updateDiff1() {
  setInterval(() => {
    let date = timer1_date.textContent;
    let format_date = new Date(rawToFormat(date));
    let remain = cal_distance(today, format_date);
    let d = document.querySelector('.timer1 .showleft .day')
    let h = document.querySelector('.timer1 .showleft .hour')
    let m = document.querySelector('.timer1 .showleft .min')
    let s = document.querySelector('.timer1 .showleft .sec')
    let hd = getComputedStyle(h).getPropertyValue("display")
    let md = getComputedStyle(m).getPropertyValue("display")
    let sd = getComputedStyle(s).getPropertyValue("display")
    // timeleft1.textContent = remain;
    d.textContent = remain[0]
    h.textContent = remain[1]
    m.textContent = remain[2]
    s.textContent = remain[3]
    if(hd!="none" || md!="none" || sd !="none"){
      d.textContent+=":"
    }
    if(md!="none" || sd!="none"){
      h.textContent+=":"
    }
    if(sd!="none"){
      m.textContent+=":"
    }
    updateBar1(timerdoc1.textContent, timer1_date.textContent, today);
  }, 1000);
}

function updateDiff2() {
  setInterval(() => {
    let date = timer2_date.textContent;
    let format_date = new Date(rawToFormat(date));
    let remain = cal_distance(today, format_date);
    let d = document.querySelector('.timer2 .showleft .day')
    let h = document.querySelector('.timer2 .showleft .hour')
    let m = document.querySelector('.timer2 .showleft .min')
    let s = document.querySelector('.timer2 .showleft .sec')
    let hd = getComputedStyle(h).getPropertyValue("display")
    let md = getComputedStyle(m).getPropertyValue("display")
    let sd = getComputedStyle(s).getPropertyValue("display")
    // timeleft1.textContent = remain;
    d.textContent = remain[0]
    h.textContent = remain[1]
    m.textContent = remain[2]
    s.textContent = remain[3]
    if(hd!="none" || md!="none" || sd !="none"){
      d.textContent+=":"
    }
    if(md!="none" || sd!="none"){
      h.textContent+=":"
    }
    if(sd!="none"){
      m.textContent+=":"
    }
    updateBar2(timerdoc2.textContent, timer2_date.textContent, today);
  }, 1000);
}

function calYearDay() {
  let janfirst = new Date(today.getFullYear(), 0, 1);
  let diff = today - janfirst;
  return diff / 1000 / 60 / 60 / 24;
}
//haven't developed
//1. Target date trigger (default current date as distance) (abandoned)
//Future feature
//1. progressbar movement (done)
//2. display year date in today's date (done)
//3. individual toggle of hour minute second
/*
      function that needs modification
      Lower Date
      cal_distance
    */
//4. alarm when times up
//bugs
//1. where does the extra 8 hours come from (fixed, time zone offset)
//2. coverbox overflow (fixed)
//3. progressbar not updating (fixed accidental negative)
//4. starting date cannot be 10:00??????? (fixed, offsetproblems)
