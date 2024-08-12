"use client";

import * as React from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
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
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { Input } from "./ui/input";
const data = [
  {
    name: "Grace",
    lastName: "Nelson",
    state: "approved",
    socialDigits: "468-85-4040",
    registerDate: "09-06-1998",
  },
  {
    name: "Jerry",
    lastName: "Obrien",
    state: "pending",
    socialDigits: "100-76-1955",
    registerDate: "03-12-2004",
  },
  {
    name: "Tammy",
    lastName: "Bell",
    state: "revision",
    socialDigits: "832-50-1978",
    registerDate: "04-02-2002",
  },
  {
    name: "Megan",
    lastName: "Shah",
    state: "revision",
    socialDigits: "674-54-0554",
    registerDate: "29-07-2020",
  },
  {
    name: "Matthew",
    lastName: "Cervantes",
    state: "revision",
    socialDigits: "276-18-8490",
    registerDate: "28-03-2020",
  },
  {
    name: "Lisa",
    lastName: "Buchanan",
    state: "pending",
    socialDigits: "306-28-8290",
    registerDate: "09-08-2008",
  },
  {
    name: "Deborah",
    lastName: "Fischer",
    state: "pending",
    socialDigits: "545-95-1813",
    registerDate: "24-12-1986",
  },
  {
    name: "Diane",
    lastName: "Nguyen",
    state: "revision",
    socialDigits: "565-35-3343",
    registerDate: "05-11-1985",
  },
  {
    name: "Michael",
    lastName: "Orr",
    state: "approved",
    socialDigits: "527-80-8019",
    registerDate: "02-06-2016",
  },
  {
    name: "Jonathan",
    lastName: "Garcia",
    state: "pending",
    socialDigits: "546-08-7019",
    registerDate: "22-12-1971",
  },
  {
    name: "Kaitlin",
    lastName: "Moore",
    state: "revision",
    socialDigits: "490-41-4792",
    registerDate: "19-07-2013",
  },
  {
    name: "John",
    lastName: "Larson",
    state: "revision",
    socialDigits: "165-95-5217",
    registerDate: "07-08-1989",
  },
  {
    name: "Sara",
    lastName: "Ramirez",
    state: "approved",
    socialDigits: "019-74-9530",
    registerDate: "28-06-2022",
  },
  {
    name: "Tim",
    lastName: "Williams",
    state: "pending",
    socialDigits: "030-58-0887",
    registerDate: "19-08-1980",
  },
  {
    name: "Shannon",
    lastName: "Ramirez",
    state: "revision",
    socialDigits: "403-05-3873",
    registerDate: "05-12-1970",
  },
  {
    name: "Katherine",
    lastName: "Roberts",
    state: "pending",
    socialDigits: "117-61-9460",
    registerDate: "14-12-2020",
  },
  {
    name: "Michael",
    lastName: "David",
    state: "pending",
    socialDigits: "386-19-5381",
    registerDate: "08-07-1983",
  },
  {
    name: "Stephen",
    lastName: "Dennis",
    state: "revision",
    socialDigits: "129-75-2946",
    registerDate: "03-11-2004",
  },
  {
    name: "Jared",
    lastName: "Johnson",
    state: "pending",
    socialDigits: "695-81-9662",
    registerDate: "03-06-1989",
  },
  {
    name: "Rodney",
    lastName: "Livingston",
    state: "pending",
    socialDigits: "628-92-7520",
    registerDate: "14-11-2010",
  },
];

export const columns: ColumnDef[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "lastName",
    header: "Apellido",
  },
  {
    accessorKey: "state",
    header: "Estado del tramite",
    cell: ({ row }) => (
      <Badge variant={row.original.estado}>{row.original.estado}</Badge>
    ),
  },
  {
    accessorKey: "socialDigits",
    header: "Digítos Social",
  },
  {
    accessorKey: "Fecha de registro",
    header: "Fecha de registro",
  },

  {
    id: "acciones",
    header: "Acción",
    cell: () => (
      <>
        <a href="/multistep-form/">
          <Button
            variant="outline"
            size="sm"
          >
            Ver
          </Button>
        </a>
        <Button
          variant="outline"
          size="sm"
        >
          Descargar
        </Button>
      </>
    ),
  },
];

export function ClientsTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div className="w-full">
      <h2 className="border-b-black border font-semibold w-11/12">Clientes</h2>
      <div className="flex items-center py-4 w-11/12">
        <Input
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
        ></Input>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="ml-auto"
            >
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table className="w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="font-bold text-black"
                  >
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
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
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
