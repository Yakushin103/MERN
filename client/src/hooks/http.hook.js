import {useState, useCallback} from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, method = 'GET', body = null, headers = { 'Content-Type': 'application/json' }) => {
        setLoading(true)
        try {
            let bbb = {
                email: 'vvv@nnn.com',
                password: '123456'
            }
            const response = await fetch(url, {method, headers, body1: bbb})
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так')
            }
            setLoading(false)

            return data
        } catch (e) {
            setLoading(false)
            setError(e.massage)
            throw e
        }
    }, [])

    const clearError = () => setError(null)

    return { loading, request, error, clearError }
}