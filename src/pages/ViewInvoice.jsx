import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { invoices } from "../data/dummy";

const ViewInvoice = () => {
  const [invoice, setInvoice] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getInvoice = async () => {
      const invoiceData = invoices.find((invoice) => invoice.id === id);
      setInvoice(invoiceData);
    };

    getInvoice();
  }, [id]);

  if (!invoice) {
    return null;
  }

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Link
        to="/invoice"
        className=" text-gray-600 text-sm font-semibold dark:text-gray-200"
      >
        Go Back
      </Link>
      <h2 className="text-2xl font-semibold mt-8 mb-4 dark:text-white">
        Invoice Details - {id}
      </h2>

      <header className="w-full bg-light-gray  flex justify-between items-center p-5 dark:bg-main-dark-bg dark:text-white rounded-lg">
        <div className="flex gap-2 items-center">
          <p className="text-gray-600 text-sm font-semibold dark:text-gray-200 ">
            Status
          </p>
          <button
            className={`py-1.5 px-3 text-sm rounded ${
              invoice.status === "Pending" ? "pending__status" : "paid__status"
            }  `}
          >
            {invoice.status}
          </button>
        </div>
        <div className="flex item-center gap-3">
          <button className="py-1.5 px-3 text-sm rounded bg-gray-600 text-gray-200 dark:bg-gray-200 dark:text-gray-600">
            Edit
          </button>
          <button className="py-1.5 px-3 text-sm rounded bg-[#ec5757] text-gray-200">
            Delete
          </button>
          <button className="py-1.5 px-3 text-sm text-gray-200 rounded bg-[#1E4DB7]">
            Mark as paid
          </button>
        </div>
      </header>

      <section className="mt-10 w-full bg-light-gray p-5 dark:bg-main-dark-bg dark:text-white rounded-lg">
        <div className="flex justify-between">
          <div>
            <p className="font-semibold dark:text-white mb-1">{invoice.id}</p>
            <p className=" text-gray-600 text-sm font-semibold dark:text-gray-400">
              {invoice.project}
            </p>
          </div>

          <div className=" text-gray-600 text-sm font-semibold dark:text-gray-400">
            <p>{invoice.companyStreet}</p>
            <p>{invoice.companyState}</p>
            <p>{invoice.companyZip}</p>
            <p>{invoice.companyCountry}</p>
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <div>
            <div className="mb-3">
              <p className=" text-gray-600 text-sm font-semibold mb-1 dark:text-gray-400">
                Invoice Date
              </p>
              <p className="font-semibold dark:text-white ">{invoice.date}</p>
            </div>

            <div>
              <p className=" text-gray-600 text-sm font-semibold mb-1 dark:text-gray-400">
                Invoice Due Date
              </p>
              <p className="font-semibold dark:text-white ">
                {invoice.dueDate}
              </p>
            </div>
          </div>

          <div>
            <p className=" text-gray-600 text-sm font-semibold mb-1 dark:text-gray-400">
              Bill To
            </p>
            <p className="font-semibold dark:text-white ">{invoice.name}</p>
            <p className=" text-gray-600 text-sm font-semibold  dark:text-gray-400">
              {invoice.clientStreet}
            </p>
            <p className=" text-gray-600 text-sm font-semibold dark:text-gray-400">
              {invoice.clientState}
            </p>
            <p className=" text-gray-600 text-sm font-semibold dark:text-gray-400">
              {invoice.clientZip}
            </p>
            <p className=" text-gray-600 text-sm font-semibold dark:text-gray-400">
              {invoice.clientCountry}
            </p>
          </div>

          <div>
            <p className=" text-gray-600 text-sm font-semibold mb-1 dark:text-gray-400">
              Send To
            </p>
            <p className=" font-semibold dark:text-white">
              {invoice.clientEmail}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewInvoice;
