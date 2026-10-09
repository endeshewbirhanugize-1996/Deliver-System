import { Link } from "react-router-dom";

const companyLinks = [
    { label: "About Us", to: "/about" },
    { label: "Pricing", to: "/pricing" },
    { label: "Contact", to: "/contact" },
    { label: "Order Now", to: "/order" },
];

const serviceLinks = [
    { label: "Fast Delivery", to: "/order" },
    { label: "Business Support", to: "/about" },
    { label: "Customer Care", to: "/contact" },
    { label: "Track Orders", to: "/order" },
];

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div className="lg:col-span-1">
                        <Link to="/" className="inline-block text-2xl font-extrabold">
                            Ethio<span className="text-red-500">Delivery</span>
                        </Link>
                        <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
                            Fast, reliable, and customer-focused delivery service connecting
                            people and businesses across Ethiopia.
                        </p>
                        <div className="mt-6 flex gap-3">
                            {[
                                { label: "Facebook", href: "https://facebook.com" },
                                { label: "X", href: "https://x.com" },
                                { label: "Instagram", href: "https://instagram.com" },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-800 text-sm font-semibold text-white transition hover:border-red-500 hover:text-red-500"
                                    aria-label={social.label}
                                >
                                    {social.label[0]}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">Company</h3>
                        <ul className="space-y-3 text-sm">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        className="transition hover:text-red-400"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">Services</h3>
                        <ul className="space-y-3 text-sm">
                            {serviceLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        className="transition hover:text-red-400">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">Contact</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>+251 924 582 943</li>
                            <li>endeshewbirhanugize@gmail.com</li>
                            <li>Addis Ababa, Ethiopia</li>
                            <li>Mon - Sat: 8:00 AM - 8:00 PM</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
                    © 2026 EthioDelivery. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
export default Footer;
