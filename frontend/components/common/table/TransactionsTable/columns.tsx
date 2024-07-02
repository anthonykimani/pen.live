import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "../data-table-header";
import { ColumnDef } from "@tanstack/react-table";
import { TransactionType } from "@/types/api-types";

export const TransactionColumns: ColumnDef<TransactionType>[] = [
  {
    id: "select",
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Price"
      />
    ),
  },
  {
    accessorKey: "from",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="From" />
    ),
  },
  {
    accessorKey: "to",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="To" />
    ),
  },
  {
    accessorKey: "timeListed",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="TimeListed" />
    ),
  },
];