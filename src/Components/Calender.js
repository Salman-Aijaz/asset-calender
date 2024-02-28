/* */
import React, { useState } from "react";
import "./Calender.css";
import events from "./Modal";
import CalendarPopup from "./CalenderPopUp";
// console.log("EVENTS",events)

const daysOfWeek = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];

const Calender = () => {

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  // console.log("Selected MOnth",selectedMonth)

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  // console.log("Selected Year",selectedYear)

  const [editMonth, setEditMonth] = useState(false);
  // console.log("EDIT MONTH",editMonth)

  const [editYear, setEditYear] = useState(false);
  // console.log("EDIT YEAR",editYear)

  const [popupModal, setPopUpModal] = useState(false);
  // console.log("POP-UP-MODAL",popupModal)

  const [modalContent, setModalContent] = useState(null);
  // console.log("MODAL CONTENT",modalContent)

  const monthBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[d];
  };

  const getEventColor = (events) => {
    if (events > 20) {
      return "dark-blue";
    } else if (events > 10) {
      return "light-blue";
    } else if (events > 5) {
      return "most-light-blue";
    } else if (events > 1) {
      return "more-light-blue";
    } else {
      return "";
    }
  };

  const generateDates = (month, year) => {
    // console.log("MOnths parameter",month)  //MONTHS COMING 0 TO 11
    // console.log("Year parameter",year)  //Year  COMING 2024 TO 2027

    const daysInMonth = new Date(year, month + 1, 0).getDate(); //MONTH HAMARE 0 INDEX SE START HOTE HAIN AGAR M +1 NA LIKHO PICHLE  MONTH KI DATE DIKHAEGA
    // console.log("DAYS IN MONTH",daysInMonth)

    const datesArray = [];

    const firstDayOfMonth = new Date(year, month, 0).getDay();
    // console.log("Mera pehla din ",firstDayOfMonth)

    for (let i = 0; i < firstDayOfMonth; i++) {
      datesArray.push({
        date: null,
        events: null,
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      //LET I=1 KYUKI DATE TO PEHLE SE START HOGA

      datesArray.push({
        date: i,
        events: Math.floor(Math.random() * 30) + 1,
      });
    }

    const lastDaysOfMonth = new Date(year, month + 1, 0).getDay();
    // const lastDaysOfMonth1 = new Date(year, month + 1, 0);
    // console.log("Last day of MOnth", lastDaysOfMonth1); //MERA IS MONTH KA AKHRI DIN THURS KO KHATAM HO RHA HAIN TBHI HMNE MONTH+1 KIYA HAIN K BCZ MONTH 0 SE START HOTA

    let remainingDays = 7 - lastDaysOfMonth; //   Mere bakaya din

    // console.log("Remaining days", remainingDays);

    //AGAR AKHRI DIN  SUNDAY HAIN  TO APP EMPTY BOXES 0 RAKHO   REMAING DAY START FROM 1  DAYS AAGAY NA BARHAO
    if (remainingDays === 7) {
      remainingDays = 0;
    }

    //  ADD EMPTY BOXES JO K REMAINING DAYS HAIN
    for (let i = 0; i < remainingDays; i++) {
      datesArray.push({
        date: null,
        events: null,
      });
    }
    return datesArray;
  };

  const handleMonthChange = (e) => {
    // console.log("Handle MOnth change",e.target.value)

    setSelectedMonth(Number(e.target.value)); //REACT BY DEFAULT ISKO STRING CONSIDER AUR MERI STATE KO UPDATE NH KREGA
  };

  const handleYearChange = (e) => {
    // console.log("Handle Year change",e.target.value)  //YEAR COMING AS A NUMBER

    setSelectedYear(Number(e.target.value));
  };

  const changeMonthTag = () => {
    setEditMonth(!editMonth);
  };

  const changeYearTag = () => {
    setEditYear(!editYear);  //STATE IS TRUE 
  };

  const monthOptions = [];
  for (let i = 0; i < 12; i++) {
    // console.log("ALL MONTHS",i)
    monthOptions.push(
      <option key={i} value={i}>
        {monthBuilder(i)}
      </option>
    );
  }

  const yearOptions = [];
  for (let i = 2024; i <= 2027; i++) {
    // console.log("All years",i)
    yearOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const openModal = () => {
    setPopUpModal(true);
  };

  const closeModal = () => {
    setPopUpModal(false);
  };

  const showModals = (ModalEvent, selectedDate) => {
    // console.log("SELECTED DATE ",selectedDate) //USER JIS DATE P CLICK KREGA 
    // console.log("MODAL",ModalEvent) //MERE EVENT AGAR 1 KA EVENT 25 HAIN TO WO DIKHAEGA
    // console.log("EVENTS",events)  //EVENTS ARRAY

    const clickedDateEvent = events.filter(
      (event) => ModalEvent >= event.id
      // console.log(event.id),
      // console.log(ModalEvent),
    );

    const clickedDate = new Date(selectedYear, selectedMonth, selectedDate);
    // console.log("Selected Day",selectedDate)  //JO DATE SELECT HO RHI HAIN

    const clickedDayIndex = clickedDate.getDay();
    // console.log("INDEX CLICK DAY",clickedDayIndex)

    let myDays = daysOfWeek[clickedDayIndex];
    // console.log("MY DAYS",myDays)
    // console.log(clickedDateEvent)

    if (clickedDayIndex === 0) {
      myDays = daysOfWeek[6];
      // console.log("AFTER IF CONDITION",myDays)
    } else {
      myDays = daysOfWeek[clickedDayIndex - 1];
    }

    if (clickedDateEvent.length > 0) {
      //  console.log("popupmodal",popupModal)  //FALSE
      // setModalContent("EVENT",clickedDateEvent);

      setModalContent({
        events: clickedDateEvent,
        date: selectedDate,
        day: myDays,
        month: selectedMonth,
        year: selectedYear,
      });
      openModal();

    } else {
      closeModal();
    }
  };

  const dates = generateDates(selectedMonth, selectedYear);

  return (
    <div className="container">
      <div className="calender">
        <div className="date ">
          {editMonth ? (
            <>
              <select
                className="select-month"
                value={selectedMonth}
                onChange={handleMonthChange}
              >
                {monthOptions}
              </select>
              <hr
                style={{ height: "0.8px", background: " grey", marginTop: "5px" }}
              />
            </>
          ) : (
            <div onClick={changeMonthTag}>{monthBuilder(selectedMonth)}</div>
          )}
        </div>
        <div className="year">
          {editYear ? (
            <>
              <select
                className="select-year"
                value={selectedYear}
                onChange={handleYearChange}
              >
                {yearOptions}
              </select>
              <hr
                style={{ height: "0.8px", background: " grey", marginTop: "5px" }}
              />
            </>
          ) : (
            <div onClick={changeYearTag}>{selectedYear}</div>
          )}
        </div>
      </div>

      <div className="dates-lists">
        <div className="days">
          {daysOfWeek.map((day) => (
            <div className="day" key={day}>
              <p className="day-names">{day}</p>
            </div>
          ))}
        </div>

        <CalendarPopup
          popupModal={popupModal}
          modalContent={modalContent}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          closeModal={closeModal}
        />

        <div className="dates">
          {dates.map((elem, index) => (
            <div
              key={index}
              className={`all-dates ${getEventColor(elem.events)}   `}
              onClick={() => showModals(elem.events, elem.date)}
            >
              {/* {console.log("ELEM",elem)} */}
              <p className="para-1st"> {elem.date}</p>
              <p className="para-2nd">
                {elem.events !== null ? `(${elem.events})` : ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calender;
