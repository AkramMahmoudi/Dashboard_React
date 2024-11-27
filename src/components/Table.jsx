// src/components/Table.js

import React from "react";
import { Link } from "react-router-dom";

const Table = ({ data }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
      <thead className="bg-gray-50 dark:bg-neutral-800">
        <tr>
          <th scope="col" className="ps-6 py-3 text-start">
            <label htmlFor="hs-at-with-checkboxes-main" className="flex">
              <input
                type="checkbox"
                className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600"
                id="hs-at-with-checkboxes-main"
              />
              <span className="sr-only">Select All</span>
            </label>
          </th>
          <th scope="col" className="ps-6 py-3 text-start">
            Name
          </th>
          <th scope="col" className="ps-6 py-3 text-start">
            Position
          </th>
          <th scope="col" className="px-6 py-3 text-start">
            Status
          </th>
          <th scope="col" className="px-6 py-3 text-start">
            Portfolio
          </th>
          <th scope="col" className="px-6 py-3 text-start">
            Created
          </th>
          <th scope="col" className="px-6 py-3 text-end">
            {/* Empty header for actions */}
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
        {data.map((user) => (
          <tr key={user.id}>
            <td className="ps-6 py-3">
              <label htmlFor={`checkbox-${user.id}`} className="flex">
                <input
                  type="checkbox"
                  className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600"
                  id={`checkbox-${user.id}`}
                />
                <span className="sr-only">Select User</span>
              </label>
            </td>
            <td className="ps-6 py-3">
              <div className="flex items-center gap-x-3">
                <img
                  className="inline-block size-[38px] rounded-full"
                  src={user.avatar}
                  alt={`${user.name} Avatar`}
                />
                <div>
                  <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                    {user.name}
                  </span>
                  <span className="block text-sm text-gray-500 dark:text-neutral-500">
                    {user.email}
                  </span>
                </div>
              </div>
            </td>
            <td className="px-6 py-3">
              <div>
                <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                  {user.position}
                </span>
                <span className="block text-sm text-gray-500 dark:text-neutral-500">
                  {user.department}
                </span>
              </div>
            </td>
            <td className="px-6 py-3">
              <span
                className={`py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-full bg-${user.statusColor}-100 text-${user.statusColor}-800 dark:bg-${user.statusColor}-500/10 dark:text-${user.statusColor}-500`}
              >
                {user.status === "Active" ? (
                  <svg
                    className="size-2.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                ) : (
                  <svg
                    className="size-2.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm2.47 4.97a.75.75 0 1 0-1.06-1.06L7 8.94l-2.47-2.47a.75.75 0 0 0-1.06 1.06L6.94 10l-2.47 2.47a.75.75 0 0 0 1.06 1.06L8 11.06l2.47 2.47a.75.75 0 0 0 1.06-1.06L9.06 10l2.47-2.47z" />
                  </svg>
                )}
                {user.status}
              </span>
            </td>
            <td className="px-6 py-3">
              <div className="flex items-center gap-x-3">
                <span className="text-xs text-gray-500 dark:text-neutral-500">
                  {user.portfolio}
                </span>
                <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700">
                  <div
                    className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-neutral-200"
                    role="progressbar"
                    style={{ width: user.portfolio }}
                    aria-valuenow={parseInt(user.portfolio)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </td>
            <td className="px-6 py-3">
              <span className="text-sm text-gray-500 dark:text-neutral-500">
                {user.created}
              </span>
            </td>
            <td className="px-6 py-3 text-end">
              <Link
                to={`/edit/${user.id}`} // Assuming you have an edit route
                className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500"
              >
                Edit
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
