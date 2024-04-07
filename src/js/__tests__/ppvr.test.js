import Popover from '../popover';

document.body.innerHTML = `
<div class="container">
  <button class="btn" data-popover-title="Заголовок" data-popover-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
</div>
`;

describe('Popover class', () => {
  const container = document.querySelector('.container');
  const popover = new Popover(container.children[0]);

  afterEach(() => {
    popover.removePopover();
  });

  test('should create popover', () => {
    expect(popover.html.children.length).toBe(2);
  });

  test('should show popover', () => {
    popover.showPopover();
    const result = document.querySelector('.popover');
    expect(result).toBeTruthy();
  });

  test('should remove popover', () => {
    popover.showPopover();
    popover.removePopover();
    const result = document.querySelector('.popover');
    expect(result).toBeFalsy();
  });
});
