// src/fetchData.js
const axios = require('axios')
const cheerio = require('cheerio')

async function fetchData(
  { url, delayMin, delayMax },
  itemSelector,
  dataExtractor
) {
  try {
    // 发起HTTP请求获取HTML
    console.log('url', url)
    const response = await axios.get(url)

    // 引入随机延迟
    const delay =
      Math.floor(Math.random() * (delayMax - delayMin + 1)) + delayMin
    await new Promise((resolve) => setTimeout(resolve, delay))

    const $ = cheerio.load(response.data)

    // 提取数据
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
