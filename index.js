import './style.css';
import { Cursor } from './src/js/cursor';
import { Item } from './src/js/item';

// initialize custom cursor
const cursor = new Cursor(document.querySelector('.cursor'));

// items/images elems
[...document.querySelectorAll('.item')].forEach((item) => new Item(item));

// mouse effects on all links
[...document.querySelectorAll('a, .distort__img')].forEach((link) => {
  link.addEventListener('mouseenter', () => cursor.enter());
  link.addEventListener('mouseleave', () => cursor.leave());
});
