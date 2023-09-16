export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
        bl_lat: '56.0465',
        bl_lng: '12.6944',
        tr_lat: '62.3908',
        tr_lng: '17.3069',
        limit: '300'
    },
    headers: {
        'X-RapidAPI-Key': '529011e247msh7c7a8f92b4b961dp11b1b2jsn04e415593b02',
        'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
};

