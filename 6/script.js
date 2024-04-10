(() => {
  
const stylesheets = document.styleSheets;
const ss = stylesheets[0];
const rules = ss.cssRules;

for(let i = 0; i < rules.length; i++){
   const rule = rules[i];
   const hasMediaQuery = (rule.cssText).startsWith('@media');
   
   if(hasMediaQuery){
    const ruleList = rule.cssRules;
    const selector = ruleList[0].selectorText;
    const mediaQuery = ruleList[0].parentRule.media.mediaText;
    
    // if(ruleList.length > 1){
    //   console.log(ruleList);
    // }

    if(mediaQuery.includes('width: 991px')){
      const property = 'margin', value = '0px';
      const fullRuleSet = `@media ${mediaQuery} {
        ${selector} { ${property}: ${value}; } 
      }`;
      console.log(fullRuleSet);
      ss.deleteRule(i);
    }

  }
}

})();

