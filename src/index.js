const path = require('path')
const fs = require('fs')
const fetchData = require('./fetchData')
const {
  extractBookData,
  extractMovieData,
  extractMusicData,
} = require('./extractors')

async function fetchAndWriteData(type, itemSelector, dataExtractor, filePath) {
  const pageSize = 25
  const totalPages = 10
  const delayMin = 1000
  const delayMax = 5000

  let allData = []

  for (let i = 0; i < totalPages; i++) {
    const startPage = i * pageSize

    const pageData = await fetchData(
      {
        url: `https://${type}.douban.com/top250?start=${startPage}`,
        delayMin,
        delayMax,
      },
      itemSelector,
      dataExtractor
    )

    allData = allData.concat(pageData)
  }

  const parentDir = path.resolve(__dirname, '..')
  const fullFilePath = path.join(parentDir, 'data', filePath)

  const jsonContent = JSON.stringify(allData, null, 2)
  fs.writeFileSync(fullFilePath, jsonContent)

  console.log(`Data has been written to ${fullFilePath}`)
}

async function getAllData() {
  // await fetchAndWriteData('book', 'tr.item', extractBookData, 'books.json')
  await fetchAndWriteData(
    'movie',
    'li div.item',
    extractMovieData,
    'movies.json'
  )
  // await fetchAndWriteData('music', 'tr.item', extractMusicData, 'musics.json')
}

getAllData()
