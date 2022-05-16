import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import AddEventModal from "./AddEventModal";

let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, "");

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "All-day event",
    start: todayStr
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: todayStr + "T12:00:00"
  }
];

export function createEventId() {
  return String(eventGuid++);
}

export default function Calendar() {
  const [modalOpen, setModalOpen] = useState(false);
  const calendarRef = useRef(null);

  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();

    calendarApi.addEvent({
      id: createEventId(),
      start: new Date(event.start).toISOString(),
      end: new Date(event.end).toISOString(),
      title: event.title
    });
  };

  const deleteEvent = (clickInfo) => {
    // eslint-disable-next-line no-restricted-globals
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  return (
    <section>
      <button onClick={() => setModalOpen(true)}>Add Event </button>
      {modalOpen && (
        <AddEventModal
          onEventAdded={onEventAdded}
          isOpen={modalOpen}
          onClose={() => setModalOpen(!modalOpen)}
        />
      )}
      <div style={{ position: "relative", zIndex: 0 }}>
        <FullCalendar
          ref={calendarRef}
          editable={true}
          selectable={true}
          initialEvents={INITIAL_EVENTS}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          eventClick={deleteEvent}
        />
      </div>
    </section>
  );
}
