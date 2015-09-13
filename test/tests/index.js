var test = require('tape');

test('A test should be run', function(assert){
  assert.pass('A test was run');
  assert.end();
});

test('A test written in ES2015 be run', (assert) => {
  assert.pass('A test written in ES2015 was run');
  assert.end();
});
