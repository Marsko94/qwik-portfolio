import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {
  return (
    <div>
        <h1>Test page</h1>
     
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Test page',
  meta: [
    {
      name: 'Test page',
      content: 'Qwik site description',
    },
  ],
};
