import { CONTACT } from '../data.js';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        © Voltify EV Charger Specialists · <a href={'tel:' + CONTACT.tel}>{CONTACT.phone}</a> · <a href={'mailto:' + CONTACT.email}>{CONTACT.email}</a>
      </div>
    </footer>
  );
}
