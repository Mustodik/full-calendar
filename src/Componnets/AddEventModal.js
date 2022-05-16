import React, { useState } from "react";
import Modal from "react-modal";

export default function AddEventModal({ isOpen, onClose, onEventAdded }) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const validate = (e) => {
    Object.values(e).forEach((value) => {
      if (!value) {
        return false;
      }
    });

    return true;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    let result = validate({ title, start, end });

    if (result) {
      onEventAdded({
        title,
        start,
        end
      });

      onClose();
    } else {
      alert("ALL FIELDS ARE REQUIRED");
    }
  };
  return (
    <Modal isOpen={isOpen} onRequestclose={onClose}>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div>
          <label>Start Date</label>
          <input
            type="datetime-local"
            onChange={(e) => setStart(e.target.value)}
          />
        </div>

        <div>
          <label>End Date</label>
          <input
            type="datetime-local"
            onChange={(e) => setEnd(e.target.value)}
          />
        </div>

        <button>Add event</button>
        <form onSubmit={onSubmit}></form>
      </form>
    </Modal>
  );
}
