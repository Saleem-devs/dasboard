import React from "react";
import { Header } from "../components";
import { Link } from "react-router-dom";
import { invoices } from "../data/dummy";

const Invoice = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header category="App" title="Invoice" />

      <div className="flex flex-col gap-6 items-center">
        {invoices.map((invoice) => (
          <Link
            to={`/invoice/${invoice.id}`}
            key={invoice.id}
            className="w-full bg-light-gray  flex justify-between items-center px-8 py-5 transition duration-500 rounded-lg hover:scale-y-110 dark:bg-main-dark-bg dark:text-white"
          >
            <p className="font-medium text-sm w-[20%]">{invoice.id}</p>
            <p className="font-medium text-sm w-[30%]">{invoice.name}</p>
            <p className="text-sm w-[20%]">{invoice.date}</p>
            <p className="font-medium w-[20%]">{invoice.amount}</p>
            <button
              className={`py-1.5 px-3 text-sm rounded ${
                invoice.status === "Pending"
                  ? "pending__status"
                  : "paid__status"
              }  w-[10%]`}
            >
              {invoice.status}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Invoice;
