import { HighlightDirective } from './highlight.directive';

describe('HighligtDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightDirective(Element.arguments);
    expect(directive).toBeTruthy();
  });
});