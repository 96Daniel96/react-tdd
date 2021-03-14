import { cleanup, render, screen } from '@testing-library/react';
import TextComponent from './TextComponent';

describe('Test Suite for TextComponent', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<TextComponent text="React-TDD-Sample-Text" />);
  });
  afterAll(cleanup);

  it('render <TextComponent /> ', () => {
    expect(wrapper).toBeTruthy();
  });

  it('render <TextComponent /> with proper text ', () => {
    expect(wrapper.getByText('React-TDD-Sample-Text')).toBeTruthy();
  });
});
