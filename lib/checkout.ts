import type { CartItem } from './cart';

const SPONSOR_ID = '102473040';
const CHECKOUT_BASE = 'https://ygy1.com/customer-checkout/v1.3/';
const REDIRECT_URL = 'https://thefleshrobot.com/thank-you';

export function buildCheckoutUrl(items: CartItem[]): string {
  const params = new URLSearchParams();
  params.set('sponsorid', SPONSOR_ID);
  items.forEach((item, i) => {
    params.set(`item-${i + 1}`, `${item.sku}|${item.qty}`);
  });
  params.set('destroy', '1');
  params.set('redirect', REDIRECT_URL);
  return `${CHECKOUT_BASE}?${params.toString()}`;
}
