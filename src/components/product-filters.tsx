import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const ProductFilter = () => {
  return (
    <form className="flex items-center gap-2" action="">
      <Input name="ID" placeholder="ID da transação"></Input>
      <Input name="Descrição" placeholder="Descrição da transação"></Input>
      <Button className="font-semibold" type="submit" variant="outline">
        <Search /> Filtrar
      </Button>
    </form>
  );
};

export default ProductFilter;
