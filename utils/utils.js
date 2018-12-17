export const firstUpperCase = (str) =>
  str.split(' ').map(v => v.charAt(0).toUpperCase() + v.slice(1)).join(' ');

export const catchErrors = p =>
  p.catch(err=> {
    console.log('Error via fetching');
    console.log(err);
    return ({ error: err.error, status: err.status })
  });

export const disableDevTools = process.env.NODE_ENV === 'production' ? 
  `window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function(){}
  window.__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx = function(){}
  window.__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobxReact = function(){}
  window.__MOBX_DEVTOOLS_GLOBAL_HOOK__.inject = function(){}` : null