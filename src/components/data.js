export const dishes = [
  { id: 'pizza', name: 'Pizza Margherita', desc: 'Crispy stone-baked crust, tomato, mozzarella and fresh basil.', price: 40, img: '/img/pizza.jpg', cat: 'Pizza' },
  { id: 'sushi', name: 'Nigiri Sushi', desc: 'Fresh salmon nigiri with a touch of wasabi and soy glaze.', price: 38, img: '/img/sushi.jpg', cat: 'Sushi' },
  { id: 'burger', name: 'Gourmet Burger', desc: 'Juicy beef patty, melted cheddar, crisp lettuce, brioche bun.', price: 55, img: '/img/burger.jpg', cat: 'Burger' },
];
export const menu = [
  ...dishes,
  { id: 'ramen', name: 'Shrimp Ramen', desc: 'Rich broth, noodles, soft egg and grilled shrimp.', price: 32, img: '/img/ramen.jpg', cat: 'Asian' },
  { id: 'boat', name: 'Sushi Boat', desc: 'Chef selection of 24 maki and nigiri.', price: 70, img: '/img/sushiplate.jpg', cat: 'Sushi' },
  { id: 'wrap', name: 'Chicken Wrap', desc: 'Grilled chicken, slaw and lime yogurt.', price: 22, img: '/img/wrap.jpg', cat: 'Burger' },
  { id: 'salad', name: 'Healthy Bowl', desc: 'Avocado, chickpeas, greens and roasted veggies.', price: 26, img: '/img/salad.jpg', cat: 'Asian' },
  { id: 'donut', name: 'Sweet Donuts', desc: 'Stack of glazed donuts with sprinkles.', price: 15, img: '/img/dessert.jpg', cat: 'Pizza' },
];
export const gallery = ['/img/tempura.jpg', '/img/interior.jpg', '/img/hero.jpg', '/img/sushiplate.jpg', '/img/ramen.jpg', '/img/about.jpg'];
