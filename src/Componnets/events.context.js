import { createContext, useState } from "react";
import { AuthContext } from "../contexts/auth.context";


const EventsContext = createContext();


const EventsProvider = EventsContext.Provider;

const EventsContextProvider = ({ children }) => {
    const [menus, setEvents] = useState([])
const [isPending, setisPending] =useState(false)
    const [error, setError] = useState(null)
    
    const { user } = useState(AuthContext)
    
    async function getALLEvents() {
        setisPending(true);
        await fetch("/api/events", {
            method: "GET" ,
            headers: {
                "content-Type": "application/json",
                authorization:`Bearer ${user.token}`
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setEvents(data);
            })
            .catch((err) => {
                setError(err);
            })
        setisPending(false);
    }


    return <EventsProvider value={{ isPending, events, error, getALLEvents }}>{children}</EventsProvider>
}

export{EventsContext, EventsContextProvider}