function extractBookData($, element) {
  const title = $(element).find('div.pl2 a').text().trim()
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
  const directorsActors = $(element)
    .find('div.info div.bd p')
    .eq(0)
    .text()
    .trim()
  const yearCountryGenre = $(element)
    .find('div.info div.bd p')
    .eq(1)
    .text()
    .trim()
  const rating = $(element).find('div.star span.rating_num').text().trim()
  const ratingsCount = $(element).find('div.star span').last().text().trim()
  const quote = $(element)
    .find('div.info div.bd p.quote span.inq')
    .text()
    .trim()
  const wishLink = $(element)
    .find('div.info div.bd p span.gact a[name^="sbtn-"][name$="-wish"]')
    .attr('href')

  return {
    title,
    altTitle,
    coverImage,
    directorsActors,
    yearCountryGenre,
    rating,
    ratingsCount,
    quote,
    wishLink,
  }
}

function extractMusicData($, element) {
  const title = $(element).find('div.pl2 a').text().trim()
  const coverImage = $(element).find('td a.nbg img').attr('src')
  const artistInfo = $(element).find('p.pl').text().trim()
  const rating = $(element).find('div.star span.rating_nums').text().trim()
  const ratingsCount = $(element).find('div.star span.pl').text().trim()

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
