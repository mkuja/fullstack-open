import './CountryInfo.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const CountryInfo = ({ country }) => {

    let languages = []
    for (let lang in country.languages) {
        languages.push(<li key={lang}>{country.languages[lang]}</li>)
    }

    const latlng = country.capitalInfo.latlng
    const [temperature, setTemperature] = useState("Loading...")
    const [wind, setWind] = useState("Loading...")

    useEffect(() => {
        let url =`https://api.open-meteo.com/v1/forecast?latitude=${latlng[0]}&longitude=${latlng[1]}&current=temperature_2m,wind_speed_10m`
        axios.get(url).then(response => {
            setTemperature(`${response.data.current.temperature_2m}
                            ${response.data.current_units.temperature_2m}`)
            setWind(`${response.data.current.wind_speed_10m} 
                     ${response.data.current_units.wind_speed_10m}`)    
        }).catch(error => {
            console.log(error)
            setTemperature("Error")
            setWind("Error")
        })
    }, [])

    return (
        <div>
            <h2>Basic information</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <p>Area: {country.area} km<sup>2</sup></p>
            <h2>Languages</h2>
            <ul className='languages-list'>
                {languages}
            </ul>
            <div className="flag">
                <img src={country.flags.png} alt="Flag" />
            </div>
            <h2>Weather in {country.capital}</h2>
            <p>Temperature: {temperature}</p>
            <p>Wind: {wind}</p>

        </div>
    )
}


export default CountryInfo
