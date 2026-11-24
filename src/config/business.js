// ─── Business Configuration ──────────────────────────────────────────────────
// Central config for all business-specific values.
// Update WHATSAPP_NUMBER before going live.

export const businessConfig = {
  name: 'Pitha Post',
  tagline: 'Good things, wrapped up for home.',
  description: 'Monthly Bengali winter pitha-making kits, delivered in Dhaka.',

  // ⚠️  Replace with the actual WhatsApp business number before deployment.
  // Format: country code + number, no spaces, no plus sign.
  // Bangladesh example: 8801XXXXXXXXX
  whatsappNumber: '8801XXXXXXXXX',

  orderCutoffDay: 25,          // Customers must order/skip before the 25th
  deliveryArea: 'Dhaka',
  deliveryNote: 'Boxes ship in small weekly batches within Dhaka.',
  cancelNote: 'Skip or cancel any time before the 25th of the month.',

  currency: '৳',
  currencyCode: 'BDT',

  social: {
    instagram: '#',
    facebook:  '#',
  },
  contact: {
    email: 'hello@pithapost.com',
  },
};

// ─── WhatsApp URL Generator ───────────────────────────────────────────────────
/**
 * Builds a wa.me deep-link pre-filled with the customer's order details.
 * @param {{ items: Array, customer: Object, total: number }} orderDetails
 * @returns {string} WhatsApp URL
 */
export function generateWhatsAppUrl({ items, customer, total }) {
  const { currency, whatsappNumber, name } = businessConfig;

  const itemLines = items
    .map(
      (i) =>
        `  • ${i.name} × ${i.quantity} — ${currency}${(
          i.price * i.quantity
        ).toLocaleString()}`
    )
    .join('\n');

  const message = [
    `Hello ${name}! 🫓`,
    ``,
    `I'd like to place an order:`,
    ``,
    itemLines,
    ``,
    `Monthly Total: ${currency}${total.toLocaleString()}`,
    ``,
    `Delivery Details:`,
    `  Name:    ${customer.name}`,
    `  Phone:   ${customer.phone}`,
    `  Area:    ${customer.area}`,
    `  Address: ${customer.address}`,
    ``,
    `Please confirm my order, delivery fee, and payment details. Thank you!`,
  ].join('\n');

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
