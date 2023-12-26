const axios = require('axios')
const cheerio = require('cheerio')

async function fetchData(
  { url, delayMin, delayMax },
  itemSelector,
  dataExtractor
) {
  try {
    console.log('url', url)
    const response = await axios.get(url)

    // random delay
    const delay =
      Math.floor(Math.random() * (delayMax - delayMin + 1)) + delayMin
    await new Promise((resolve) => setTimeout(resolve, delay))

    const $ = cheerio.load(response.data)

    const itemData = []

    $(itemSelector).each((index, element) => {
      const data = dataExtractor($, element)
      itemData.push(data)
    })

    return itemData
  } catch (error) {
    console.error('Error fetching data:', error)
    return []
  }
}

module.exports = fetchData
