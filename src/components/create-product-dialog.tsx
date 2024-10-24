import { Button } from "./ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const CreateProductDialog = () => {
  return (
    <DialogContent className="space-y-4">
      <DialogHeader>
        <DialogTitle>Novo produto</DialogTitle>
        <DialogDescription>Adicionar uma nova transação</DialogDescription>
      </DialogHeader>

      <form className="space-y-4">
        <div className="grid grid-cols-5 items-center gap-3 text-right">
          <Label htmlFor="name">Descrição</Label>
          <Input className="col-span-4" id="name"></Input>
        </div>
        <div className="grid grid-cols-5 items-center gap-3 text-right">
          <Label htmlFor="price">Preço</Label>
          <Input className="col-span-4" id="price"></Input>
        </div>

        <DialogFooter className="mt-3">
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default CreateProductDialog;
