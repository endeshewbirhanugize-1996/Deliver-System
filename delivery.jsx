import React from "react";

const features = [
    {
        icon: "🚚",
        title: "Fast delivery",
        text: "From urgent parcels to everyday shipments, we move your orders quickly and reliably.",
    },
    {
        icon: "📦",
        title: "Secure handling",
        text: "Every item is handled with care so your packages arrive in safe condition.",
    },
    {
        icon: "📍",
        title: "Real-time tracking",
        text: "Track your shipment from dispatch to drop-off with complete delivery visibility.",
    },
    {
        icon: "💬",
        title: "Support team",
        text: "Our customer care team is available whenever you need help or updates.",
    },
];

const serviceSteps = [
    "Submit your delivery request and package details",
    "Choose the delivery type that fits your schedule",
    "Our team picks up and dispatches your parcel quickly",
    "Track and receive your items with confidence",
];

const DeliveryPage = () => {
    return (
        <section className="min-h-screen bg-gradient-to-b from-red-50 via-white to-gray-50 px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
                        Delivery services
                    </p>
                    <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-6xl">
                        Reliable delivery for <span className="text-red-600">everyday life</span>
                    </h1>
                    <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
                        We provide fast, secure, and convenient delivery services for homes, shops, and businesses.
                    </p>
                </div>

                <div className="mb-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {features.map(({ title, text, icon }) => (
                        <div
                            key={title}
                            className="rounded-[2rem] bg-white p-8 shadow-lg shadow-red-100 ring-1 ring-red-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-3xl">
                                {icon}
                            </div>
                            <h2 className="mb-3 text-2xl font-bold text-gray-900">{title}</h2>
                            <p className="text-gray-600 leading-relaxed">{text}</p>
                        </div>
                    ))}
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-[2rem] bg-gray-900 p-8 text-white md:p-10">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
                            How it works
                        </p>
                        <h2 className="mb-8 text-3xl font-bold md:text-4xl">
                            A delivery process designed for speed and trust
                        </h2>

                        <div className="space-y-5">
                            {serviceSteps.map((step, index) => (
                                <div key={step} className="flex items-start gap-4 rounded-2xl bg-white/5 p-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                                        {index + 1}
                                    </div>
                                    <p className="text-lg text-gray-200">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-red-100 ring-1 ring-red-100">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
                            Why customers choose us
                        </p>
                        <h3 className="mb-8 text-3xl font-bold text-gray-900">Fast and dependable</h3>

                        <div className="space-y-4 text-gray-700">
                            <p>• Same-day and scheduled delivery options</p>
                            <p>• Friendly support from dispatch to delivery</p>
                            <p>• A clear tracking experience for each order</p>
                            <p>• Coverage for homes, stores, and businesses</p>
                        </div>

                        <button className="mt-8 w-full rounded-full bg-red-600 px-6 py-3 text-lg font-bold text-white shadow-lg shadow-red-200 transition hover:bg-red-700">
                            Book a Delivery
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeliveryPage;
