function extractBookData($, element) {
  const t = $(element).find('div.pl2 a').text().trim()
  const title = t.replace(/\n+/g, '\n').replace(/\s+/g, ' ')
  const coverImage = $(element).find('td a.nbg img').attr('src')
  const authorInfo = $(element).find('p.pl').text().trim()
  const rating = $(element).find('div.star span.rating_nums').text().trim()
  const quote = $(element).find('p.quote span.inq').text().trim()

  return {
    title,
    coverImage,
    authorInfo,
    rating,
    quote,
  }
}

function extractMovieData($, element) {
  const title = $(element).find('div.info div.hd a span.title').text().trim()
  const altTitle = $(element).find('div.info div.hd a span.other').text().trim()
  const coverImage = $(element).find('div.pic a img').attr('src')
  const movieInfoElement = $(element).find('div.info div.bd p:first-child')
  const movieInfoText = movieInfoElement.text().trim()
  var parts = movieInfoText.split('...')

  var directorsActors = parts[0].trim()
  var tags = parts[1]?.trim()

  const rating = $(element).find('div.star span.rating_num').text().trim()
  const ratingsCount = $(element).find('div.star span').last().text().trim()
  const quote = $(element)
    .find('div.info div.bd p.quote span.inq')
    .text()
    .trim()

  return {
    title,
    altTitle,
    coverImage,
    directorsActors,
    tags,
    rating,
    ratingsCount,
    quote,
  }
}

function extractMusicData($, element) {
  const t = $(element).find('div.pl2 a').text().trim()
  const title = t.replace(/\n+/g, '\n').replace(/\s+/g, ' ')

  const coverImage = $(element).find('td a.nbg img').attr('src')
  const artistInfo = $(element).find('p.pl').text().trim()
  const rating = $(element).find('div.star span.rating_nums').text().trim()
  const r = $(element).find('div.star span.pl').text().trim()
  const ratingsCount = r.replace(/\n+/g, '\n').replace(/\s+/g, ' ')

  return {
    title,
    coverImage,
    artistInfo,
    rating,
    ratingsCount,
  }
}

module.exports = {
  extractBookData,
  extractMovieData,
  extractMusicData,
}
