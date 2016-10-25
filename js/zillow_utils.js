/*
 * Generic utility functions for screen scraping Zillow
 */

function isZillow(url) {
  const zillowRegex = /(?:https?:\/\/)?(?:www)?zillow.com\/?(?:.*)?/;
  return zillowRegex.test(url);
}

function findDivByTitle(title, html) {
  return $(`div:contains(${title})`)
    .filter(() => { return $(this).text.trim() === title });
}

function findValueTextByTitle(title, html) {
  return findDivByTitle(title, html)
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

function getForecastedSalePrice(html) {
  const title = 'Zestimate';
  const regex = /\$([0-9,]+)/;
  const text = findValueTextByTitle(title, html);
  return extractNumber(regex, text);
}

function getRentEstimate(html) {
  const title = 'Rent Zestimate';
  const regex = /\$([0-9,]+)\/mo/;
  const text = findValueTextByTitle(title, html);
  return extractNumber(regex, text);
}

function mainZillow(domElements) {
  const domHtml = $.parseHTML(domElements);
  console.log(domHtml);
}