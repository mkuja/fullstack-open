import { useEffect, useState } from 'react'
import CountryList from './CountryList/CountryList'
import axios from 'axios'


const FindCountries = () => {
    const [filterString, setFilterString] = useState('')
    const [countryList, setCountryList] = useState([])
    const [filteredCountryList, setFilteredCountryList] = useState([])


    // Load country list once when the app loads.
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                setCountryList(response.data)
            })
    }, [])

    // Update filtered country list.
    useEffect(() => {
        if (filterString.length === 0) {
            setFilteredCountryList([])
            return
        }
        const filtered = countryList.filter(
            country => country
                    .name
                    .common
                    .toLowerCase()
                    .includes(filterString.toLowerCase()))
        setFilteredCountryList(filtered)
    }, [filterString])

    return (
        <div>
            <h1>Find Countries</h1>

            <form>
                <label htmlFor="name">Name of a country: </label>
                <input type="text"
                    id="name"
                    name="name"
                    value={filterString}
                    onChange={(ev) => setFilterString(ev.target.value)} />
            </form>
            <br />
            
            {filteredCountryList.length > 10
             && filterString.length > 0
             ? <p>Too many matches, specify another filter</p>
             : <CountryList
                filteredCountryList={filteredCountryList} 
                setterForSelectedCountry={setFilterString} />}
            
        </div>
    )
}

export default FindCountries
