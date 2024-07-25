// This type is used to define the shape of our data.

import { Button } from "../ui/button";

// You can use a Zod schema here if you want.
export type Form = {
  name: "string";
  date: "string";
  status: "string";
  action: "string";
};

export const columns: columnDef<Form>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "date",
    haader: "Fecha Creación",
  },
  {
    accessorKey: "status",
    header: "Estado",
  },
  {
    accessorKey: "action",
    header: "Acción",
    cell: <Button>Ver</Button>,
  },
];
