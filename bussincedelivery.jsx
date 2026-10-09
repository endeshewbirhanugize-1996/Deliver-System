import React from "react";

const features = [
    {
        icon: "🏢",
        title: "Business dispatch",
        text: "Streamline daily deliveries and repeat orders with a faster, more organized logistics system.",
    },
    {
        icon: "📦",
        title: "Bulk fulfillment",
        text: "Handle larger shipments and multiple orders efficiently with consistent business support.",
    },
    {
        icon: "📊",
        title: "Delivery insights",
        text: "Keep track of delivery performance and delivery volume with clearer operational visibility.",
    },
    {
        icon: "🤝",
        title: "Partner support",
        text: "Work with a responsive team that understands the needs of commerce and service businesses.",
    },
];

const steps = [
    "Tell us what your business needs and delivery volume",
    "Choose the best delivery service for your schedule and location",
    "We coordinate pickup, dispatch, and delivery updates",
    "Receive reliable fulfillment and faster customer satisfaction",
];

const BusinessDeliveryPage = () => {
    return (
        <section className="min-h-screen bg-gradient-to-b from-red-50 via-white to-gray-50 px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
                        Business delivery
                    </p>
                    <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-6xl">
                        Smart logistics support for <span className="text-red-600">stores and growing businesses</span>
                    </h1>
                    <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
                        We provide dependable delivery solutions for businesses of every size so your team can focus on growth while orders move on time.
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
                            <h3 className="mb-3 text-2xl font-bold text-gray-900">{title}</h3>
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
                            Delivery service built around business needs
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
                            Business benefits
                        </p>
                        <h3 className="mb-8 text-3xl font-bold text-gray-900">Reliable support</h3>

                        <div className="space-y-4 text-gray-700">
                            <p>• Daily and scheduled delivery planning</p>
                            <p>• Better customer experience and faster fulfillment</p>
                            <p>• Consistent communication throughout each order</p>
                            <p>• Flexible logistics for growing operations</p>
                        </div>

                        <button className="mt-8 w-full rounded-full bg-red-600 px-6 py-3 text-lg font-bold text-white shadow-lg shadow-red-200 transition hover:bg-red-700">
                            Partner With Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessDeliveryPage;

