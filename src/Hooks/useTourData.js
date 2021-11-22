import { useState, useEffect } from 'react'

const useTourData = () => {
    const [tours, setTours] = useState([])

    useEffect(() => {
        const uri = 'https://limitless-mesa-73949.herokuapp.com/allpackage'
        fetch(uri)
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])

    return tours
}

export default useTourData;