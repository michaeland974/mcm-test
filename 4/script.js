/**
 * Scroll to bottom of page
 * Check for "More Results" button element
 *  If button is rendered
 *    Click
 *  Else
 *    Keep Scrolling
 */

function loadMoreResults(count, limit, element){
  if(count >= limit) return true;
  
  window.scrollTo(0, document.body.scrollHeight);  
  setTimeout(() => {
    if(isElementVisible(element)){
      element.click();
    }
    count++
    return loadMoreResults(count, limit, element);
  }, 1000);
};

function isElementVisible(element){  
  if(element===undefined) return false;

  const { innerHeight, innerWidth } = window;
  const { top, left, bottom, right } = element.getBoundingClientRect();
  const visibleX = ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth));
  const visibleY = ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight));

  return (visibleX && visibleY);
};

const selectors = { 
  parent: '#botstuff',
  child: `[aria-label='More results'] div`
}
const {child, parent} = selectors;
const button = document.querySelector(`${parent} ${child}`);

loadMoreResults(0, 1, button);
