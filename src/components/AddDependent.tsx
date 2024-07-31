import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { PlusCircledIcon } from "@radix-ui/react-icons";

import DependentForm from "./DependentForm";

function AddDependent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-green-500 flex gap-2 hover:text-green-600 my-10"
        >
          Agregar Dependiente <PlusCircledIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[]">
        <DialogHeader>
          <DialogTitle>Llene la siguiente información</DialogTitle>
        </DialogHeader>
        <DependentForm />
      </DialogContent>
    </Dialog>
  );
}
export default AddDependent;
