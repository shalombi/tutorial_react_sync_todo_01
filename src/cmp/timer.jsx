import { useState, useEffect, useRef } from "react"

export const Timer = ({ time }) => {
    const [currTime, setCurrTime] = useState(time)
    const intervalIdRef = useRef()
    const [isDarkMode, setIsDarkMode] = useState(false)

    // const [first, setfirst] = useState(second)
    // 13
    useEffect(() => {
        if (!currTime) console.log('timeout...')
        console.log('currTime:', currTime)
        if (!currTime) clearInterval(intervalIdRef.current)
    }, [currTime])

    useEffect(() => {

        if (!intervalIdRef.current) {
            // todo: start interval
            // startInterval()


            // intervalIdRef.current = setInterval(() => {
            //     setCurrTime(currTime => currTime - 1)
            // }, 1000)
        }
    }, [])

    function convertToTime(seconds) {
        const minutes = Math.floor(seconds / 60) // חילוק השניות לדקות
        const remainingSeconds = seconds % 60 // השניות היתרות

        const formattedMinutes = minutes.toString().padStart(2, '0') // המרת הדקות לפורמט של שני ספרות
        const formattedSeconds = remainingSeconds.toString().padStart(2, '0') // המרת השניות לפורמט של שני ספרות
        return `${formattedMinutes}:${formattedSeconds}`
    }

    const onStop = () => {
        clearInterval(intervalIdRef.current)
        intervalIdRef.current = ''
    }

    const startInterval = () => {

        intervalIdRef.current = setInterval(() => {
            setCurrTime(currTime => currTime - 1)
        }, 1000)
    }


    return (
        <section className={isDarkMode ? 'dark-mode' : ''}>
            <h3>Timer</h3>
            <h3 >time:  <span className={currTime <= 5 ? "brown" : ''}> {currTime}</span></h3>
            <button onClick={onStop}>stop</button>
            <button onClick={startInterval}>continue</button>

            <button onClick={() => setIsDarkMode(isDarkMode => !isDarkMode)}>
                {isDarkMode ? <span>light mode</span> : <span>dark mode</span>}
            </button>
        </section>
    )
}


