import CountryInfo from "./CountryInfo/CountryInfo"
import './CountryList.css'


const CountryList = ({ filteredCountryList, setterForSelectedCountry }) => {

    const countryList = filteredCountryList
            .map(country => 
            <li key={country.name.common}>
                    {country.name.common}
                    {filteredCountryList.length > 1
                    ?   <button onClick={() => 
                                setterForSelectedCountry(country.name.common)}>
                            Show
                        </button>
                    :   null }
            </li>)
    

    return (
        <ul className="country-list">
            {countryList}
            {countryList.length === 1 
            &&  <CountryInfo country={filteredCountryList[0]} />}
        </ul>
    )
}

export default CountryList
