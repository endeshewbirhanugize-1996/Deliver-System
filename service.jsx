import React from "react";

const features = [
    {
        icon: "🚚",
        title: "Fast dispatch",
        text: "We move customer orders quickly from your store to the customer’s door with reliable daily coverage.",
    },
    {
        icon: "📦",
        title: "Order tracking",
        text: "Customers can follow every step of the delivery process from checkout to final drop-off.",
    },
    {
        icon: "💳",
        title: "Secure payments",
        text: "Support your online store with dependable handling for packaged purchases and repeat deliveries.",
    },
    {
        icon: "📈",
        title: "Business growth",
        text: "Increase delivery reach and customer satisfaction with a logistics partner built for scale.",
    },
];

const steps = [
    "Create your store order and confirm delivery details",
    "We assign the fastest available delivery option",
    "Track progress in real time until handover",
    "Receive feedback and keep customers coming back",
];

const pricing = [
    { label: "Starter Package", value: "29/mo" },
    { label: "Growth Package", value: "79/mo" },
    { label: "Enterprise Package", value: "Custom" },
];

const Service = () => {
    return (
        <section className="min-h-screen bg-gradient-to-b from-red-50 via-white to-gray-50 px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
                        E-commerce delivery
                    </p>
                    <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-6xl">
                        Smarter delivery for <span className="text-red-600">online businesses</span>
                    </h1>
                    <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
                        Help your customers shop with confidence by delivering faster, safer, and more reliably
                        from checkout to doorstep.
                    </p>
                </div>
                <div className="mb-16 grid gap-6 md:grid-cols-4">
                    {[
                        { value: "2,500+", label: "Orders delivered" },
                        { value: "24/7", label: "Support coverage" },
                        { value: "98%", label: "Customer satisfaction" },
                        { value: "15 min", label: "Average dispatch" },
                    ].map((item) => (
                        <div key={item.label} className="rounded-3xl bg-white p-6 text-center shadow-lg shadow-red-100 ring-1 ring-red-100">
                            <h3 className="text-3xl font-extrabold text-red-600">{item.value}</h3>
                            <p className="mt-2 text-gray-600">{item.label}</p>
                        </div>
                    ))}
                </div>
                <div className="mb-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {features.map(({ icon, title, text }) => (
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
                <div className="mb-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-[2rem] bg-gray-900 p-8 text-white md:p-10">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
                            How it works
                        </p>
                        <h2 className="mb-8 text-3xl font-bold md:text-4xl">
                            A simple process built for online sellers
                        </h2>
                        <div className="space-y-5">
                            {steps.map((step, index) => (
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
                            Pricing
                        </p>
                        <h3 className="mb-8 text-3xl font-bold text-gray-900">Flexible packages</h3>
                        <div className="space-y-4">
                            {pricing.map(({ label, value }) => (
                                <div key={label} className="flex items-center justify-between rounded-2xl bg-red-50 px-4 py-4">
                                    <span className="font-semibold text-gray-800">{label}</span>
                                    <span className="text-lg font-bold text-red-600">{value}</span>
                                </div>
                            ))}
                        </div>
                        <button className="mt-8 w-full rounded-full bg-red-600 px-6 py-3 text-lg font-bold text-white shadow-lg shadow-red-200 transition hover:bg-red-700">
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-red-100 ring-1 ring-red-100 md:p-12">
                    <div className="grid gap-8 md:grid-cols-2 md:items-center">
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
                                Why choose us
                            </p>
                            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                                Built to support your store from order to delivery
                            </h2>
                        </div>
                        <div className="space-y-4 text-gray-700">
                            <p>• Reliable delivery management for daily and bulk orders</p>
                            <p>• Real-time tracking that keeps customers informed</p>
                            <p>• Support tailored for growing businesses and online stores</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;