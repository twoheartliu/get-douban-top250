# Get Douban Top 250

## Overview

This Node.js project is designed to fetch data from Douban's top 250 lists for books, movies, and music. It uses Axios for making HTTP requests and Cheerio for web scraping.

## Installation

To install the project dependencies, run:

```
npm install
```

## Usage

To run the script and fetch data, execute:

```
npm start
```

This will gather information from Douban's top 250 lists for books, movies, and music.

## Project Structure

- **src/index.js:** The main script responsible for fetching and processing data.
- **src/fetchData.js:** Contains the logic for making HTTP requests and handling delays.
- **src/extractors.js:** Provides functions for extracting specific data from HTML elements.

## Configuration

The project uses the following dependencies:

- **axios:** Version 1.6.2
- **cheerio:** Version 1.0.0-rc.12

## License

This project is licensed under the MIT License.
