if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Hi there',
    url: 'no url:('
  });

  Posts.insert({
    title: 'bye there',
    url: 'pew pew pew'
  });

  Posts.insert({
    title: 'hello porshe',
    url: 'nya nya nya'
  });
}