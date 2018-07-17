const Framework = {
  create: (props) => {
    const {template, data, ...args} = props;

    const header = document.querySelector(template);
    const newHeader = replaceTitleVariables(header.innerHTML, data.title)

    document.querySelector('.content').innerHTML = newHeader; // .content should be send in as arg.

    const functionNames = Object.keys(args);
    addEventListeners(document, functionNames, args); // make args more explicit or don't send it in at all.
  }
}

const parseEvent = (element) => {
  return element.dataset.event.split(":")[0];
}

const replaceTitleVariables = (html, title) => { // rewrite later to pure function.
  return html.replace(/{{title}}/g, title);
}

const addEventListeners = (document, functionNames, args) => { // rewrite later to pure function.
  functionNames.forEach((functionName) =>  {
    let element = document.querySelector(`[data-event*='${functionName}']`);
    element.addEventListener(parseEvent(element), args[functionName]);
  });
}

module.exports = {
  parseEvent,
  replaceTitleVariables,
  addEventListeners
};