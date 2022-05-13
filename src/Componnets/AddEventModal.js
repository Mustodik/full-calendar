import React, {useState} from "react";
import Modal from "react-modal";



export default function ({isOpen, onClose, onEventAdded,}) {
    const [title, setTitle] = useState("");
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());

    const onSubmit = (event) => {
        event.preventDefault();

        onEventAdded({
            title,
            start,
            end
        })
        onClose();
    }
    return (
        <Modal isOpen={isOpen} onRequestclose={onClose}>
        <form onSubmit={onSubmit}>
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}/>
        

        <div>
        <label>Start Date</label>
        <input type="datetime-local"/>
        </div>

        <div>
        <label>End Date</label>
        <input type="datetime-local"/>
        </div>
         
    
        <button>Add event</button>
         <form onSubmit={onSubmit}></form>
        </form>
        
        </Modal>
    )
}
