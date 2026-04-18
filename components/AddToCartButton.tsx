'use client';

import { useState } from 'react';
import { useCart } from '@/lib/cart';
import { ShoppingCart, Check } from 'lucide-react';

type Props = {
  id: string;
  name: string;
  sku: string;
  price: number;
  size?: 'sm' | 'md';
};

export default function AddToCartButton({ id, name, sku, price, size = 'md' }: Props) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem({ id, name, sku, price });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  const isSmall = size === 'sm';

  return (
    <button
      onClick={handleClick}
      className="btn-primary"
      style={{
        padding: isSmall ? '0.5rem 1rem' : '0.875rem 2rem',
        fontSize: isSmall ? '0.82rem' : '1rem',
        gap: isSmall ? '0.4rem' : '0.5rem',
        background: added ? 'var(--color-green-dark)' : undefined,
        transition: 'background 200ms ease, transform 300ms ease, box-shadow 300ms ease',
      }}
    >
      {added
        ? <Check size={isSmall ? 13 : 16} />
        : <ShoppingCart size={isSmall ? 13 : 16} />}
      {added ? 'Added!' : 'Add to Cart'}
    </button>
  );
}
