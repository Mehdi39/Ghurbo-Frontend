import React from 'react';

const Tour = () => {
    return (
        <div className="flex items-end space-x-6 flex-wrap justify-center">
            <div className="flex flex-col">
                <label className="text-black" htmlFor="destination">
                    Full Name:
                </label>
                <input
                    placeholder="Full Name"
                    type="text"
                    id="destination"
                    className="rounded-full px-4 py-2 focus:outline-none border-2 border-green-400 focus:border-green-600"
                />
            </div>
            <div className="flex flex-col">
                <label className="text-black" htmlFor="date">
                    Date
                </label>
                <input
                    type="date"
                    id="date"
                    className="rounded-full px-4 py-2 focus:outline-none border-2 border-green-400 focus:border-green-600"
                />
            </div>
            <div className="flex flex-col">
                <label className="text-black" htmlFor="course-type">
                    Select Tour
                </label>
                <select
                    id="course-type"
                    className="rounded-full px-4 py-2 focus:outline-none border-2 border-green-400 focus:border-green-600"
                >
                    <option value="">Select a option</option>
                    <option value="">সাজেক ভ‌্যালি - রুংলুই পাড়া</option>
                    <option value="">ঝাড়ভোজ</option>
                    <option value="">কংলাক পাড়া</option>
                    <option value="">স্টোন গার্ডেন</option>
                    <option value="">আলুটিলা গুহা</option>
                    <option value="">ঝুলন্ত ব্রিজ</option>
                    <option value="">তারেং হেলিপ্যাড</option>
                    <option value="">রিসাং ঝর্ণা</option>
                </select>
            </div>

            <button className="px-8 py-2.5 text-white rounded-full bg-green-600 outline-none border-none transition hover:bg-lightBlue focus:outline-none focus:ring-2 focus:ring-lightBlue focus:ring-offset-2">
                Book
            </button>
        </div>
    );
};

export default Tour;