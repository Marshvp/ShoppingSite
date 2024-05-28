import { useEffect, useState } from 'react'


export default function FetchAllItems() {
    const [items, setItems] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => {
                if (!res.ok) {
                    throw Error('could not fetch the data for that resource')
                } 
                return res.json();
            })
            .then(data => setItems(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
            

            
    }, [])
    
    return { items, error, loading }
}