import ErrorRepository from '../src/js/app';

test('test errorMesage', () => {
  const errors = new ErrorRepository([[1, 'Error 1'], [2, 'Error 2']]);
  expect(errors.message(2)).toBe('Error 2');
});

test('test unknown error', () => {
  const errors = new ErrorRepository([[1, 'Error 1'], [2, 'Error 2']]);
  expect(errors.message(3)).toBe('Unknown error');
});
