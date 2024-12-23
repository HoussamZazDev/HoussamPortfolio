import CountryInformation from '../CountriesApiComponents/CountryInformation';
import NavBar from '../AppComponents/NavBar';


function CountriesApi() {
  return (<>
  <NavBar applogoname={"Countries Api"} />
    <div className='CountryInformationBody'  style={{marginTop : '70px'}}>
    <div className="AppCountryInformation">
      <CountryInformation />
    </div>
    </div>
    </>
  );
}

export default CountriesApi;