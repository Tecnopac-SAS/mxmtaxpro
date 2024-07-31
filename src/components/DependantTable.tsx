"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";

const data = [
  {
    name: "Carlos Miguel",
    birthDay: "2021/08/04",
    socialSecurity: "123456789",
    relationship: "Hijo Menor",
    months: "07",
    childCare: "si",
  },
];

export const columns: ColumnDef[] = [
  {
    accessorKey: "name",
    header: "Nombre completo",
  },
  {
    accessorKey: "birthDay",
    header: "Nacimiento",
  },
  {
    accessorKey: "socialSecurity",
    header: "Seguro social",
  },
  {
    accessorKey: "relationship",
    header: "Parentesco",
  },
  {
    accessorKey: "months",
    header: "Numero de meses",
  },
  {
    accessorKey: "childCare",
    header: "Cuidado y Gastos de los Niños",
  },
  {
    id: "actions",
    header: "",
    cell: () => (
      <div className="flex gap-2">
        <Button size="icon">
          <Pencil2Icon className="h-4 w-4" />
        </Button>
        <Button size="icon">
          <TrashIcon className="h-4 w-4" />
        </Button>
      </div>
    ),
  },
];

export function DependantTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table className="w-full">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
