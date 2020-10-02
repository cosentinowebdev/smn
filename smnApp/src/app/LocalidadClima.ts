export interface ILocalidadClima{
    
    id: string,
    dist: number,
    lid: number,
    fid: number,
    int_number: number,
    name: string,
    province: string,
    lat: string,
    lon: string,
    zoom: string,
    updated: number,
    weather: {
        humidity: number,
        pressure: number,
        st: number,
        visibility: number,
        wind_speed: number,
        id: number,
        description: string,
        temp: number,
        wing_deg: string,
        tempDesc: string
    },
    forecast: {
        _id: string,
        timestamp: string,
        date_time: string,
        location_id: number,
        forecast: {
            0: {
                date: string,
                temp_min: number,
                temp_max: number,
                temp_min_sub: string,
                temp_noc: string,
                radiation: string,
                morning: {
                    weather_id: number,
                    description: string
                },
                afternoon: {
                    weather_id: number,
                    description: string
                }
            }
        }
    }
    
}