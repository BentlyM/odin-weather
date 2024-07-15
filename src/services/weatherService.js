

export const getWeather = async (location) => {
    try{
        if (location === '' || location === undefined) throw new Error('Location Must Be Injected...');

        const url = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=CQHGRNWW2SCL23XMNXSX5CKGN`, {
            mode: 'cors'
        });
        const response = await url.json();
        return response;
    }catch(e){
        console.log(e);
    }
}