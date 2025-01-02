from datetime import datetime
import pytz
from pytz import country_timezones
import pycountry

def get_timezone_by_country(country_name: str) -> str:
    
    try:
        country = pycountry.countries.get(name=country_name)
        if not country:
            raise ValueError(f"Country '{country_name}' not found.")
        
        timezones = country_timezones.get(country.alpha_2)
        if not timezones:
            raise ValueError(f"No timezones found for country '{country_name}'.")
        
        return timezones[0]
    except Exception as e:
        raise ValueError(str(e))


def get_time_at_location(location: str) -> str:
    try:
        
        if location in pytz.all_timezones:
            tz = pytz.timezone(location)
        else:
            timezone = get_timezone_by_country(location)
            tz = pytz.timezone(timezone)
        
        current_time = datetime.now(tz)
        return current_time.strftime('%H:%M:%S')
    
    except pytz.UnknownTimeZoneError:
        raise ValueError(f"Invalid timezone: {location}")
    except ValueError as e:
        raise ValueError(str(e))
