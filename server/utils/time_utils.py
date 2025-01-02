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
    """
    Returns the current time at a specific country or timezone.
    
    Args:
        location (str): Country name (e.g., 'Israel') or Timezone (e.g., 'Asia/Jerusalem')
        
    Returns:
        str: Current time in the given timezone formatted as 'HH:MM:SS'
    """
    try:
        # Check if the location is a valid timezone
        if location in pytz.all_timezones:
            tz = pytz.timezone(location)
        else:
            # Try to get timezone by country name
            timezone = get_timezone_by_country(location)
            tz = pytz.timezone(timezone)
        
        current_time = datetime.now(tz)
        return current_time.strftime('%H:%M:%S')
    
    except pytz.UnknownTimeZoneError:
        raise ValueError(f"Invalid timezone: {location}")
    except ValueError as e:
        raise ValueError(str(e))
