import type { MetaFunction } from '@remix-run/node';

import { Button } from '~/components/ui/button';

export const meta: MetaFunction = () => {
  return [
    { title: 'Stickerbook' },
    { name: 'description', content: 'View your assets and see the collection percentage.' },
  ];
};

export default function Index() {
  return (
    <section style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Home</h1>
      <ul>
        <li>
          <a target="_blank" href="https://remix.run/tutorials/blog" rel="noreferrer">
            15m Quickstart Blog Tutorial
          </a>
        </li>
      </ul>

      <Button>Let's go</Button>
    </section>
  );
}
