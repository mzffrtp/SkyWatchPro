import { useEffect, useState } from "react"
import closebtn from "../../assets/close.png"
import axios from "axios";
export default function PlaneDetails ({flightId, setShowDetails}) {
    const [details, setDetails] = useState()
    useEffect(()=> {
        const options = {
            method: 'GET',
            url: 'https://flight-radar1.p.rapidapi.com/flights/detail',
            params: {flight: flightId},
            headers: {
              'X-RapidAPI-Key': '529011e247msh7c7a8f92b4b961dp11b1b2jsn04e415593b02',
              'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
            }
          };
        axios.request(options)
        .then((res)=>{setDetails(res.data)})
    },[flightId])

    console.log(details);
    return (
        <div className="plane-detail-wrapper">
            <div className="plane-detail-inner">
                <p className="close-btn">
                    <img 
                    src={closebtn}
                    onClick={()=>setShowDetails(false)} />
                </p>
            {
                !details ? (<p className="loading">Loading</p>) :(
                    <>
                    <p className="dtl-header" >Flight Details</p>
                    <img 
                    className="pln-img"
                    src={details?.aircraft?.images?.large[0]?.src}/>
                    <h3>Airline</h3>
                    <p><span>Name:</span>{details?.airline?.name}</p>
                    <p><span>Website:</span><a href={details?.airport?.destination?.timezone?.website}></a></p>
                    <h3>Airport</h3>
                    <p><span>Origin:</span>{details?.airport?.origin?.name}</p>
                    <p><span>Destination:</span>{details?.airport?.destination?.name}</p>
                    <h3>Position Now</h3>
                    <p><span>City:</span>{details?.position?.region?.city}</p>

                    
                   
                    </>
                )
            }
            </div>

        </div>
    )
}