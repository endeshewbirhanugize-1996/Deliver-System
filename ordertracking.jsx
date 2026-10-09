import React, { useState } from "react";

const trackingTimeline = [
    { title: "Order placed", detail: "Your package was received and confirmed", active: true },
    { title: "Packed", detail: "Items were packed and ready for dispatch", active: true },
    { title: "In transit", detail: "Courier is on the way to the destination", active: true },
    { title: "Out for delivery", detail: "The rider is heading to the final address", active: false },
    { title: "Delivered", detail: "Package handed over successfully", active: false },
];

const orderSummary = {
    orderId: "ETD-20485",
    item: "Home Essentials package",
    sender: "Addis Ababa, Ethiopia",
    receiver: "Bole Road, Addis Ababa",
    eta: "Today, 6:30 PM",
    rider: "Daniel M.",
};

const OrderTrackingPage = () => {
    const [status, setStatus] = useState("In transit");

    return (
        <section className="min-h-screen bg-gradient-to-b from-red-50 via-white to-gray-50 px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
                        Order tracking
                    </p>
                    <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-6xl">
                        Track your <span className="text-red-600">delivery live</span>
                    </h1>
                    <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
                        Real-time updates for every step of your order, from pickup to final handoff.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-red-100 ring-1 ring-red-100 md:p-10">
                        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                                    Current status
                                </p>
                                <h2 className="mt-2 text-3xl font-extrabold text-gray-900">{status}</h2>
                            </div>

                            <div className="rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-red-700">
                                ETA: {orderSummary.eta}
                            </div>
                        </div>

                        <div className="space-y-6">
                            {trackingTimeline.map(({ title, detail, active }) => (
                                <div key={title} className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <div
                                            className={
                                                active
                                                    ? "flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white"
                                                    : "flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm font-bold text-gray-500"
                                            }
                                        >
                                            ✓
                                        </div>
                                        {title !== trackingTimeline[trackingTimeline.length - 1].title && (
                                            <div className="mt-2 h-14 w-px bg-gray-200" />
                                        )}
                                    </div>

                                    <div className="pb-4">
                                        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                                        <p className="text-gray-600">{detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[2rem] bg-gray-900 p-8 text-white shadow-2xl shadow-gray-300">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
                            Delivery summary
                        </p>

                        <div className="space-y-5">
                            <div className="rounded-2xl bg-white/5 p-4">
                                <p className="text-sm text-gray-300">Order ID</p>
                                <h3 className="mt-1 text-xl font-bold">{orderSummary.orderId}</h3>
                            </div>

                            <div className="rounded-2xl bg-white/5 p-4">
                                <p className="text-sm text-gray-300">Package</p>
                                <h3 className="mt-1 text-lg font-semibold">{orderSummary.item}</h3>
                            </div>

                            <div className="rounded-2xl bg-white/5 p-4">
                                <p className="text-sm text-gray-300">From</p>
                                <h3 className="mt-1 text-lg font-semibold">{orderSummary.sender}</h3>
                            </div>

                            <div className="rounded-2xl bg-white/5 p-4">
                                <p className="text-sm text-gray-300">To</p>
                                <h3 className="mt-1 text-lg font-semibold">{orderSummary.receiver}</h3>
                            </div>

                            <div className="rounded-2xl bg-red-600/20 p-4 ring-1 ring-red-500/40">
                                <p className="text-sm text-red-100">Rider</p>
                                <h3 className="mt-1 text-xl font-bold">{orderSummary.rider}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderTrackingPage;