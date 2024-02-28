import React from "react";
import "./CalenderPopUp.css";

const CalendarPopup = ({
  modalContent,
  selectedMonth,
  selectedYear,
  popupModal,
  closeModal,
}) => {
  // console.log("MODAL CONTENT",modalContent) //JIS MODEL P CLICK HOGA WO
  // console.log("SELECTED MONTH",selectedMonth)  // SELECTED MONTH
  // console.log("SELECTED YEAR",selectedYear)  //SELECTED YEAR

  // console.log("POP UP MODAL", closeModal);
  // console.log("POP UP MODAL", openModal);

  const handleOutsideClick = (event) => {
    // console.log("POP UP MODAL",popupModal)
    // console.log("EVENT",event)  //JB HAMARA POPUP KHULEGE AUR USER CLOSE KRNE K LIYR BAHAR CLICK KREGA TO Y EVENT FIRE HOGA
    if (
      event.target.className !== "para-1st" &&
      event.target.className !== "para-2nd"
    ) {
      //AAGAR SAARE CONDITION TRUE TB MERE POPUP KO CLOSE KRO
      closeModal();
      // openModal()
    }
  };

  // console.log("DOCUMENT",document)
  document.addEventListener("click", handleOutsideClick);

  const monthOfPopUp = (e) => {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return months[e];
  };

  const popupheight =
    modalContent && modalContent.events.length <= 7 ? "heightOfPopup" : "";

  //STOP.PROPAGATION SE PARENT M JAANE KO ROK RHA HAIN
  return (
    <>
      {popupModal  && (
        <>
          <div
            className={`model-container ${popupheight}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="popup-date">
              <h6 className="popup-date-list">{modalContent.day}</h6>
              <h6 className="popup-date-list">{monthOfPopUp(selectedMonth)}</h6>
              <h6 className="popup-date-list">{modalContent.date}</h6>
              <h6 className="popup-date-list">{selectedYear}</h6>
            </div>
            <table className="popup-types">
              <thead>
                <tr>
                  <th className="popup-type-assets">Assets</th>
                  <th className="popup-type-eventType">Event Type</th>
                  <th className="popup-type-eventName">Event Name</th>
                  <th className="popup-type-eventTime">Event Time</th>
                </tr>
              </thead>
              <tbody>
                {modalContent.events.map((event) => (
                  <tr key={event.id}>
                    <td className="pop-up-assets">{event.assets}</td>
                    <td className="pop-up-assets">{event.EventType}</td>
                    <td className="pop-up-assets">{event.event}</td>
                    <td className="pop-up-assets">{event.EventTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default CalendarPopup;
