import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export const Navigation = component$(() => {
  return (
    <div  class="flex items-center bg-white justify-between shadow-xl py-5">
    <div class="ml-5">
        Logo
    </div>
    <div class="mr-5">
        <ul class="flex space-x-1o">
            <li><Link href="/"> Home </Link></li>
            <li><Link href="/tester"> Tester </Link></li>
           
        </ul>
    </div>
    
    </div>
  );
});