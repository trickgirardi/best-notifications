import ProductFilters from "@/components/product-filters";
import CreateProductDialog from "@/components/create-product-dialog";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { PlusCircle } from "lucide-react";

const Cashimbo = () => {
  return (
    <div className="w-screen max-w-4xl mx-auto p-4 space-y-4">
      <div className="flex items-center justify-between ">
        <h1 className="text-2xl font-semibold">Cashimbo</h1>

        <ProductFilters />
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle /> Nova transação
            </Button>
          </DialogTrigger>
          <CreateProductDialog />
        </Dialog>
      </div>

      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableHead>ID da Transação</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Preço</TableHead>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{i}</TableCell>
                  <TableCell>Compra Notebook Samsung</TableCell>
                  <TableCell>R$ 3692,90</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Cashimbo;
