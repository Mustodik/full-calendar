import React, {useContext, useState} from 'react'
import {AuthContext} from "../context/auth.Context"
import Header from "../components/Header";
import { MenuContext } from '../context/menu.context';
import { useNavigate } from 'react-router-dom';



function Home() { 
  const { user, success } = useContext(AuthContext);
  const { isPending, menus, error, getAllEvents } = useContext(EventContext)
  const [show, setShow]=useState(false)
  const navigate = useNavigate()
  React.useEffect(() => {
    getAllEvents();
  }, []);


  React.useEffect(() => {
    if (!success) {
      navigate("/");
    }
  }, [success, navigate]);

  const toggleshow =()=>{
    setShow(!show)
  };


  return (
      <>
      <Header />
      <button className="btn btn-info" onClick={toggleshow}></button>
      {isPending && <h2>loading...</h2>}
      {error && <h2>error.toString()</h2>}
      <div className='container'>
        {menus.map((event) =>(
          <div key={event._id} className="card border-primary m-3 p-2">
            <div className='card-header'>
              <h4 className='text-primary'>{event.app}</h4>
            </div>
            <h4>{events.type}</h4>
            <h4>{events.time}</h4>
            <div className='events-container'>
              {event.date.map((ing) => (
                <span className='badge bg-primary m-2'>{ing}</span>
 ))}
            </div>
            <div className='recipe-container'>
              {events.date.map((rec) => (
                <span className='badge bg-primary m-2'>{rec}</span>
              ))}
            </div>
            </div>
        ))}
          </div>
      </>
  )
}

export default Home     