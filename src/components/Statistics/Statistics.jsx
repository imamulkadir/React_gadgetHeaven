import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  ComposedChart,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const products = useLoaderData();

  // Transform data directly
  const data = products.map((product) => ({
    name: product.product_title,
    price: product.price,
  }));

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-center gap-2 bg-[#9538E2] p-4 pb-10">
        <h2 className="text-3xl font-bold text-white">Statistics</h2>
        <p className="max-w-xl text-center text-sm text-gray-100">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="flex flex-col items-center justify-center rounded-b-lg bg-white p-4">
        <h2 className="my-4 text-2xl font-bold text-black">
          Analysis of Products Price
        </h2>
        <ResponsiveContainer width="60%" height={400}>
          <ComposedChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            {/* Bar Layer */}
            <Bar dataKey="price" barSize={40} fill="#8884d8" />

            {/* Area Layer */}
            <Area
              type="monotone"
              dataKey="price"
              stroke="#9538E2"
              fill="#9538E2"
              fillOpacity={0.2}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
