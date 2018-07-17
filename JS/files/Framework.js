const Framework = {
  create: (props) => {
    const {template, data, ...args} = props;

    const header = document.querySelector(template);
    document.querySelector('.content').innerHTML = header.innerHTML;
    document.querySelector('h1').innerHTML = data.title;

    const clearButton = document.querySelector("[data-event='click:clearTitle']");
    const input = document.querySelector('#title');

    input.value = data.title;
    input.addEventListener(parseEvent(input), args.titleChanged);
    clearButton.addEventListener(parseEvent(clearButton), args.clearTitle);
  }
}

const parseEvent = (element) => {
  return element.dataset.event.split(":")[0];
}
