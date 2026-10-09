import { useState } from "react";
import axios from "axios";
const initialFormData ={
    fullName: "",
    phone: "",
    location: "",
    item: "",
    service: "Express Delivery",
    notes: "",
};
const deliveryOptions = [
    "Express Delivery",
    "Same Day Delivery",
    "Business Delivery",
    "Scheduled Delivery",];
const OrderPage = () => {
    const [formData, setFormData] = useState(initialFormData);
    const handleChange =(event) => {
        const { name, value}=event.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value,
        }));
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/registor", formData);
            console.log("Order submitted:", response.data);
            alert("Your delivery request has been submitted successfully.");
            setFormData(initialFormData);
        } catch (error) {
            console.error("Order submit error:", error);
            alert("Failed to submit order. Please try again.");
        }
    };
    return (
        <section className="min-h-screen bg-gradient-to-b from-red-50 via-white to-gray-50 px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
                        Order Now
                    </p>
                    <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-6xl">
                        Request your <span className="text-red-600">delivery</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Fill in the details below and our team will arrange the fastest available delivery option.
                    </p>
                </div>
                <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
                    <form
                        onSubmit={handleSubmit}
                        className="rounded-[2rem] bg-white p-8 shadow-xl shadow-red-100 ring-1 ring-red-100 md:p-10">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="md:col-span-1">
                                <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your name"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"/>
                            </div>
                            <div className="md:col-span-1">
                                <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gray-700">
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="+251 9XX XXX XXX"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"/>
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="location" className="mb-2 block text-sm font-semibold text-gray-700">
                                    Delivery Location
                                </label>
                                <input
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    required
                                    placeholder="Street, area, city"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500" />
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="item" className="mb-2 block text-sm font-semibold text-gray-700">
                                    Item / Package Details
                                </label>
                                <input
                                    id="item"
                                    name="item"
                                    value={formData.item}
                                    onChange={handleChange}
                                    required
                                    placeholder="Describe the item or package"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                            <div className="md:col-span-1">
                                <label htmlFor="service" className="mb-2 block text-sm font-semibold text-gray-700">
                                    Service Type
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
                                >
                                    {deliveryOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="md:col-span-1">
                                <label htmlFor="service" className="mb-2 block text-sm font-semibold text-gray-700">
                                    Estimated Time
                                </label>
                                <input
                                    value="Within 1-3 hours"
                                    readOnly
                                    className="w-full rounded-xl border border-red-100 bg-red-50 px-4 py-3 font-medium text-red-700"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="notes" className="mb-2 block text-sm font-semibold text-gray-700">
                                    Special Notes
                                </label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Add any delivery instructions or contact notes"
                                    className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="mt-8 w-full rounded-full bg-red-600 px-6 py-3.5 text-lg font-bold text-white shadow-lg shadow-red-200 transition hover:bg-red-700">
                            Submit Order
                        </button>
                    </form>
                    <aside className="rounded-[2rem] bg-gray-900 p-8 text-white shadow-2xl shadow-gray-300">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
                            Delivery Summary
                        </p>
                        <div className="space-y-5">
                            <div className="rounded-2xl bg-white/5 p-4">
                                <p className="text-sm text-gray-300">Service</p>
                                <h3 className="mt-1 text-xl font-bold">{formData.service}</h3>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-4">
                                <p className="text-sm text-gray-300">Pickup</p>
                                <h3 className="mt-1 text-lg font-semibold">Addis Ababa</h3>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-4">
                                <p className="text-sm text-gray-300">Support</p>
                                <h3 className="mt-1 text-lg font-semibold">24/7 customer care</h3>
                            </div>
                            <div className="rounded-2xl bg-red-600/20 p-4 ring-1 ring-red-500/40">
                                <p className="text-sm text-red-100">Estimated Cost</p>
                                <h3 className="mt-1 text-3xl font-extrabold">15</h3>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};
export default OrderPage;
