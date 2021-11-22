import { useState, useEffect } from 'react'

const useTourData = () => {
    const [tours, setTours] = useState([])

    useEffect(() => {
        const uri = 'http://localhost:5000/allpackage'
        fetch(uri)
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])

    return tours
}

export default useTourData;