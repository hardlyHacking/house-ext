/*
 * Generic utility functions for screen scraping Zillow
 */

function isZillow(url) {
  const zillowRegex = /(?:https?:\/\/)?(?:www)?zillow.com\/?(?:.*)?/;
  return zillowRegex.test(url);
}

function findDivByTitle(title) {
  return $(`div:contains(${title})`)
    .filter(() => { return $(this).text.trim() === title });
}

function findValueTextByTitle(title) {
  return findDivByTitle(title)
    .parent()
    .children(`div.zest-value`)
    .text();
}

function extractNumber(regex, text) {
  const matches = text.trim().match(regex);
  if (matches !== 2) {
    return -1;
  } else {
    return Number(matches[1].replace(',', ''));
  }
}

function getForecastedSalePrice() {
  const title = 'Zestimate';
  const regex = /\$([0-9,]+)/;
  const text = findValueTextByTitle(title);
  return extractNumber(regex, text);
}

function getRentEstimate() {
  const title = 'Rent Zestimate';
  const regex = /\$([0-9,]+)\/mo/;
  const text = findValueTextByTitle(title);
  return extractNumber(regex, text);
}
