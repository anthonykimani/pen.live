"use client";

import React from "react";
import { TransactionColumns } from "./columns";
import { TransactionType } from "@/types/api-types";
import TransactionTable from ".";
import { transactionSource } from "@/helpers/transaction-source";

const TransactionsTableContainer = () => {
  const generateTblData = (item: TransactionType): TransactionType => {
    return {
      id: item.id,
      name: item.name,
      slug: item.slug,
      price: item.price,
      from: item.from,
      to: item.to,
      timeListed: item.timeListed,
    };
  };

  const tableData = Array.isArray(transactionSource)
    ? transactionSource
        .map((element) => generateTblData(element))
    : [];
  return <TransactionTable columns={TransactionColumns} data={tableData} />;
};

export default TransactionsTableContainer;
