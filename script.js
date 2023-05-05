function init(){
    gsap.registerPlugin(ScrollTrigger);
  
  
  const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  
  ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  ScrollTrigger.refresh();
  
  
  }
  
    
    init();
    
  
  
  
    
  
    
  
    
  
    
    function beforeafter(){
      var flag = 0;
    
      document.querySelector("#before2")
      .addEventListener("click",function(){
        if(flag === 0){
          document.querySelector("#round").style.left = "65%"
          document.querySelector("#before h1 ").textContent = "AFTER "
          document.querySelector("#linkedin2").style.marginTop = "0%"
          document.querySelector("#linkedin1").style.marginTop = "20%"
          document.querySelector("#linkedin1").style.display = "none"
          document.querySelector("#linkedin2").style.display = "flex"
          flag = 1
        }
        else{
          document.querySelector("#round").style.left = "8px"
          document.querySelector("#before h1 ").textContent = "BEFORE"
          document.querySelector("#linkedin2").style.marginTop = "20%"
          document.querySelector("#linkedin1").style.marginTop = "0%"
          document.querySelector("#linkedin2").style.display = "none"
          document.querySelector("#linkedin1").style.display = "flex"
          flag = 0
        }
      })
    
  
  }
    
   
  
  function calander(){
    let calendar = document.querySelector('.calendar')
  
  const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  
  isLeapYear = (year) => {
      return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
  }
  
  getFebDays = (year) => {
      return isLeapYear(year) ? 29 : 28
  }
  
  generateCalendar = (month, year) => {
  
      let calendar_days = calendar.querySelector('.calendar-days')
      let calendar_header_year = calendar.querySelector('#year')
  
      let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  
      calendar_days.innerHTML = ''
  
      let currDate = new Date()
      if (!month) month = currDate.getMonth()
      if (!year) year = currDate.getFullYear()
  
      let curr_month = `${month_names[month]}`
      month_picker.innerHTML = curr_month
      calendar_header_year.innerHTML = year
  
      // get first day of month
  
      let first_day = new Date(year, month, 1)
  
      for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
          let day = document.createElement('div')
          if (i >= first_day.getDay()) {
              day.classList.add('calendar-day-hover')
              day.innerHTML = i - first_day.getDay() + 1
              day.innerHTML += `<span></span>
                              <span></span>
                              <span></span>
                              <span></span>`
              if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                  day.classList.add('curr-date')
              }
          }
          calendar_days.appendChild(day)
      }
  }
  
  let month_list = calendar.querySelector('.month-list')
  
  month_names.forEach((e, index) => {
      let month = document.createElement('div')
      month.innerHTML = `<div data-month="${index}">${e}</div>`
      month.querySelector('div').onclick = () => {
          month_list.classList.remove('show')
          curr_month.value = index
          generateCalendar(index, curr_year.value)
      }
      month_list.appendChild(month)
  })
  
  let month_picker = calendar.querySelector('#month-picker')
  
  month_picker.onclick = () => {
      month_list.classList.add('show')
  }
  
  let currDate = new Date()
  
  let curr_month = {value: currDate.getMonth()}
  let curr_year = {value: currDate.getFullYear()}
  
  generateCalendar(curr_month.value, curr_year.value)
  
  document.querySelector('#prev-year').onclick = () => {
      --curr_year.value
      generateCalendar(curr_month.value, curr_year.value)
  }
  
  document.querySelector('#next-year').onclick = () => {
      ++curr_year.value
      generateCalendar(curr_month.value, curr_year.value)
  }
  
  let dark_mode_toggle = document.querySelector('.dark-mode-switch')
  
  dark_mode_toggle.onclick = () => {
      document.querySelector('body').classList.toggle('light')
      document.querySelector('body').classList.toggle('dark')
  }
  
    var flag = 0; 
  document.querySelector("#check h1 span")
  .addEventListener("click",function(){
     if(flag === 0 ){
       document.querySelector(".calendar").style.display = "initial"
       flag = 1
      }
      else{
        document.querySelector(".calendar").style.display = "none"
        flag = 0
     }
  })
  
  
  }
  
    function checkbox(){
      var flag = 0;
      document.querySelector("#checkdiv #check")
      .addEventListener("click",function(){
        if(flag === 0){
          document.querySelector("#checkcolor").style.scale = 2
          flag = 1
        }
        else{
          document.querySelector("#checkcolor").style.scale = 0
          flag = 0
        }
      })
  }
    function locationbutton(){
      var dout = document.querySelector("#dout")
      document.querySelector("#button")
      .addEventListener("mouseenter",function(){
            gsap.to(dout,{
              scale:30,
              // height:"200%",
              // width:"200%",
              duration:.3,
              ease:Expo.easeInOut
            })
           })
      
      document.querySelector("#button")
      .addEventListener("mouseleave",function(){
            gsap.to(dout,{
            scale:1,
            duration:.3,
            ease:Expo.easeInOut
          })
          })
          document.querySelector("#destin #check")
          .addEventListener("click",function(){
            document.querySelector("#destin input").style.display = "initial"
          })
    }
  
  
  
    
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 10,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      grabCursor:true,
  
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  
  
    
  
    circal();
    beforeafter();
    checkbox();
    
    
    