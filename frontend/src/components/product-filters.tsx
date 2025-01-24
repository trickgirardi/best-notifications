"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

export const productsFiltersSchema = z.object({
  id: z.string(),
  name: z.string(),
});

type ProductsFiltersSchema = z.infer<typeof productsFiltersSchema>;

const ProductFilters = () => {
  const { register, handleSubmit } = useForm<ProductsFiltersSchema>({
    resolver: zodResolver(productsFiltersSchema),
  });

  const handleFilterProducts = (data: ProductsFiltersSchema) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFilterProducts)}
      className="flex items-center gap-2"
      action=""
    >
      <Input placeholder="ID da transação" {...register("id")}></Input>
      <Input placeholder="Descrição da transação" {...register("name")}></Input>
      <Button className="font-semibold" type="submit" variant="outline">
        <Search /> Filtrar
      </Button>
    </form>
  );
};

export default ProductFilters;
