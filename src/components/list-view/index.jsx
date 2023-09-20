import { useSelector } from "react-redux"
import PlaneDetails from "../plane-details";
import { useState } from "react";

export default function ListView () {
    const flightstate = useSelector((state)=> state.reducer)
    const [showDetails, setShowDetails] = useState(false)
    const [flightId, setFlightId] = useState(null);

    const handleDetails = (id) =>{
        setFlightId(id);
        setShowDetails(true)
    }

    return (
        <div>
            <h2 className="text-center text-info">{flightstate.flights.length} flights found</h2>

           <div className="container">
            <table className="table table-primary table-striped table-hover table-bordered table-sm">
                <thead className="text-center table-danger fw-bold">
                    <tr>
                        <th>Id</th>
                        <th>Code</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody className="text-center table-group-divider">
                    {flightstate.flights.map((flight)=> (
                        <tr>
                            <td>{flight.id}</td>
                            <td>{flight.code}</td>
                            <td><button
                            className="btn btn-outline-dark"
                            onClick={()=>handleDetails(flight.id)}
                            >Details</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
           </div>
            {
                showDetails && <PlaneDetails  flightId = {flightId} setShowDetails= {setShowDetails}/>
            }
        </div>

    )
}