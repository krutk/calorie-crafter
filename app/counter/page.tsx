"use client";

import Nav from "@/components/nav";
import { FormEvent, useState } from "react";

const Nutrition = () => {
  const [query, setQuery] = useState<string>("");
  const [nutritionData, setNutritionData] = useState<any[]>([]);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const apiKey: string = "D8+CL3MiyHNxp3fwm4bYxg==3EAkjeBV6Q5ZR8YE";

  const handleQuery = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/nutrition?query=${query}`,
        {
          headers: {
            "X-Api-Key": apiKey,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setNutritionData(data);
        setSelectedItems([...selectedItems, ...data]);
        setLoading(false);
        setQuery("");
      } else {
        console.error("Error:", response.status, response.statusText);
        setLoading(false);
      }
    } catch (error) {
      console.error("Request failed:", error);
      setLoading(false);
    }
  };

  const clearSelection = () => {
    setSelectedItems([]);
  };

  const totalCalories = selectedItems.reduce(
    (total, item) => total + item.calories,
    0
  );

  return (
    <div className="">
      <Nav />
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleQuery}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter food item"
            className="w-full border border-gray-300 rounded-md p-2 mb-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add Food Item
          </button>
        </form>
        {loading ? (
          <div className="text-center mt-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        ) : selectedItems.length > 0 ? (
          <div className="mt-4">
            <h2 className="text-lg font-bold mb-2">Selected Items:</h2>
            {selectedItems.map((item, index) => (
              <p key={index}>
                {item.name} - {item.calories} Calories (Quantity in gms{" "}
                {item.serving_size_g})
              </p>
            ))}
            <p className="font-semibold">
              Total Calories: {totalCalories.toFixed(1)}
            </p>
            <button
              onClick={clearSelection}
              className="bg-red-500 text-white px-4 py-2 rounded-md mt-2"
            >
              Clear Selection
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Nutrition;
