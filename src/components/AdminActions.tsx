import { Button } from "./ui/button";

function AdminActions() {
  return (
    <div>
      <div className="flex justify-center gap-7">
        <Button variant={"ghost"}>Aprobar</Button>
        <Button variant={"destructive"}>Corregir</Button>
      </div>
      <div className="flex justify-center py-3">
        <textarea
          name="comment"
          id="comment"
          rows={4}
          cols={50}
          placeholder="Agrega un comentario"
        ></textarea>
      </div>

      <div className="flex justify-between border-t gap-7 border-gray-500 my-auto pt-5">
        <Button type="button">Volver</Button>
        <Button
          className="bg-redp hover:bg-redp w-40 mr-2"
          type="submit"
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
}
export default AdminActions;
