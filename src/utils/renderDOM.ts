import { Block } from '../abstract/block';

export function render(query: string, block: Block<any>) {
  const root = document.querySelector(query);

  if (root) {
    const content = block.getContent();
    if (content) {
      root.appendChild(content);
    }

    block.dispatchComponentDidMount();
  }

  return root;
}
