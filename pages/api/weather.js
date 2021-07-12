export async function handler(req, res) {

    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Samara&appid=ac075ea5cfa4018b69bccf57516490d5`).status(200).json()
}

