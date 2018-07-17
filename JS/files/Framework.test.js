const Framework = require('../files/Framework');

test(("replaceTitleVariables"), () => {
  const html = '<header><h1>{{title}}</h1><form><label for="title">Add your title here</label><input type="text" id="title" data-event="keyup:titleChanged" value="{{title}}" /></form><a href="#" data-event="click:clearTitle">clear the title</a</header>';
  const newTitle = 'New Title'
  const newHTML = Framework.replaceTitleVariables(html, newTitle);
  expect(newHTML).toEqual('<header><h1>New Title</h1><form><label for="title">Add your title here</label><input type="text" id="title" data-event="keyup:titleChanged" value="New Title" /></form><a href="#" data-event="click:clearTitle">clear the title</a</header>')
});

test(("parseEvent"), () => {
  document.body.innerHTML =
    '<a href="#" data-event="click:clearTitle">clear the title</a>';
  let functionName = 'clearTitle';
  let element = document.querySelector(`[data-event*='${functionName}']`);
  expect(Framework.parseEvent(element)).toEqual('click');
});

test(("addEventListeners"), () => {
  const mockCallback = jest.fn();
  document.body.innerHTML =
    '<a href="#" id="click-me" data-event="click:someFunction">clear the title</a>';
  Framework.addEventListeners(document, ['someFunction'], { someFunction: mockCallback });

  document.getElementById("click-me").click();
  expect(mockCallback.mock.calls.length).toBe(1);
});
