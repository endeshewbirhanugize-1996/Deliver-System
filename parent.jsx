import React from "react";

const ParentPage = () => {
    const features = [
        {
            title: "Fast Service",
            text: "We keep your deliveries moving quickly with dependable support and smart scheduling.",
            icon: "⚡",
        },
        {
            title: "Trusted Network",
            text: "Our growing delivery network helps families, shops, and businesses move goods with confidence.",
            icon: "🤝",
        },
        {
            title: "Easy Tracking",
            text: "Customers can stay updated from order to doorstep with a transparent delivery process.",
            icon: "📍",
        },
    ];
    return (
        <section className="min-h-screen bg-gradient-to-b from-red-50 to-white px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
                        Parent Support
                    </p>
                    <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-6xl">
                        A safer, easier way to <span className="text-red-600">deliver</span>
                    </h1>
                    <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
                        EthioDelivery helps families, stores, and service providers send packages with
                        speed, reliability, and peace of mind.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {features.map(({ title, text, icon }) => (
                        <div
                            key={title}
                            className="rounded-3xl bg-white p-8 shadow-lg shadow-red-100 ring-1 ring-red-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-3xl">
                                {icon}
                            </div>
                            <h2 className="mb-3 text-2xl font-bold text-gray-900">{title}</h2>
                            <p className="text-gray-600 leading-relaxed">{text}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-16 rounded-[2rem] bg-gray-900 p-8 text-white md:p-12">
                    <div className="grid gap-8 md:grid-cols-2 md:items-center">
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
                                Why parents choose us
                            </p>
                            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                                Built around convenience and trust
                            </h2>
                            <p className="text-lg text-gray-300">
                                From daily essentials to urgent package delivery, our service is crafted to
                                make every handoff simple and dependable.
                            </p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl bg-white/5 p-5">
                                <div className="mb-2 text-3xl">🛒</div>
                                <h3 className="font-semibold">Daily Orders</h3>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-5">
                                <div className="mb-2 text-3xl">📦</div>
                                <h3 className="font-semibold">Package Care</h3>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-5">
                                <div className="mb-2 text-3xl">💬</div>
                                <h3 className="font-semibold">Customer Support</h3>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-5">
                                <div className="mb-2 text-3xl">✅</div>
                                <h3 className="font-semibold">Reliable Delivery</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 text-center">
                    <button className="rounded-full bg-red-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-red-200 transition hover:bg-red-700">
                        Order With Us
                    </button>
                </div>
            </div>
        </section>
    );
};
export default ParentPage;
