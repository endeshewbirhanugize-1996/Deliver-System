import React from "react";

const pricingPlans = [
    {
        name: "Starter",
        price: "19",
        description: "Perfect for individuals and small daily orders.",
        features: [
            "Up to 5 deliveries per month",
            "Fast local dispatch",
            "Basic order tracking",
            "Customer support",
        ],
        featured: false,
    },
    {
        name: "Business",
        price: "49",
        description: "Built for shops and growing service providers.",
        features: [
            "Unlimited monthly deliveries",
            "Priority dispatch support",
            "Advanced tracking dashboard",
            "Business partner assistance",
        ],
        featured: true,
    },
    {
        name: "Enterprise",
        price: "99",
        description: "For larger operations with higher delivery volume.",
        features: [
            "Custom delivery schedules",
            "Dedicated account manager",
            "Bulk order support",
            "Flexible logistics planning",
        ],
        featured: false,
    },
];
const PricePage = () => {
    return (
        <section className="min-h-screen bg-gradient-to-b from-red-50 via-white to-gray-50 px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
                        Pricing
                    </p>
                    <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-6xl">
                        Simple pricing for <span className="text-red-600">every delivery need</span>
                    </h1>
                    <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
                        Choose a plan that matches your delivery volume, whether you are ordering for home use,
                        managing a business, or scaling your operations.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {pricingPlans.map(({name, price, description, features, featured }) => (
                        <div
                            key={name}
                            className={
                                featured
                                    ? "rounded-[2rem] border-2 border-red-500 bg-gray-900 p-8 text-white shadow-2xl shadow-red-200 md:scale-105"
                                    : "rounded-[2rem] border border-red-100 bg-white p-8 text-gray-900 shadow-lg shadow-red-100"
                            }
                        >
                            <div className="mb-6">
                                <p
                                    className={
                                        featured
                                            ? "mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-400"
                                            : "mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600" }
                                >
                                    {name}
                                </p>
                                <div className="flex items-end gap-2">
                                    <span className="text-4xl font-extrabold">{price}</span>
                                    <span className={featured ? "text-gray-300" : "text-gray-500"}>/ month</span>
                                </div>
                                <p className={featured ? "mt-4 text-gray-300" : "mt-4 text-gray-600"}>{description}</p>
                            </div>

                            <ul className="space-y-3">
                                {features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <span
                                            className={
                                                featured
                                                    ? "mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white"
                                                    : "mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600"
                                            }
                                        >
                                            ✓
                                        </span>
                                        <span className={featured ? "text-gray-200" : "text-gray-700"}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={
                                    featured
                                        ? "mt-8 w-full rounded-full bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-red-700"
                                        : "mt-8 w-full rounded-full border border-red-200 bg-red-50 px-6 py-3 font-bold text-red-700 transition hover:bg-red-100"
                                }
                            >
                                {featured ? "Get Started" : "Choose Plan"}
                            </button>
                        </div>
                    ))}
                </div>
                <div className="mt-16 rounded-[2rem] bg-white p-8 shadow-lg shadow-red-100 ring-1 ring-red-100 md:p-12">
                    <div className="grid gap-8 md:grid-cols-2 md:items-center">
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                                Why us
                            </p>
                            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                                Affordable pricing with reliable support
                            </h2>
                        </div>
                        <div className="space-y-4 text-gray-700">
                            <p>• Transparent pricing with no hidden fees</p>
                            <p>• Flexible plans for personal and business use</p>
                            <p>• Fast response times and dependable dispatch</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default PricePage;
