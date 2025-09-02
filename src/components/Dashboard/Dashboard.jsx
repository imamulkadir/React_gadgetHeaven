import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-center gap-2 bg-[#9538E2] p-4 pb-10">
        <h2 className="text-3xl font-bold text-white">Dashboard</h2>
        <p className="max-w-xl text-center text-sm text-gray-100">
          Welcome to the Gadget Heaven Dashboard. Here you can manage your
          products and customers.
        </p>
        <div className="flex gap-6">
          <button className="cursor-pointer rounded-2xl border-1 border-gray-100 bg-[#9538E2] px-12 py-2 hover:border-none hover:bg-white hover:text-[#9538E2]">
            Cart
          </button>
          <button className="cursor-pointer rounded-2xl border-1 border-gray-100 bg-white px-12 py-2 font-bold text-[#9538E2] hover:border-1 hover:bg-[#9538E2] hover:text-white">
            Wishlisht
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
