import { render } from '@testing-library/react';
import App from './App';

it('render <App />', () => {
  const component = render(<App />);
  expect(component).toBeTruthy();
});
