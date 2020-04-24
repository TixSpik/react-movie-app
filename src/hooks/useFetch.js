import { useState, useEffect } from "react";

export default function useFetch(url, options) {
    const [Loading, setLoading] = useState(true)
    const [Result, setResult] = useState(null)
    const [Error, setError] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url, options)
                const jsonResult = await res.json()
                setResult(jsonResult)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        })()

    }, [options, url])

    return { Loading, Result, Error }
}