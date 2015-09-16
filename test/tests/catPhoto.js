import test from 'tape';
import catPhoto from '../../lib/content/catPhoto';

export default function(){
  test('Generate a cat image url', (assert) => {
    const expected = 'https://placekitten.com/50/50?image=5';
    const actual = catPhoto(5,50,50);
    assert.equal(actual, expected,
      'Given image id, width, and height – catPhoto should return a placekitten url'
    );
    assert.end();
  });
};
