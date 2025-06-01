import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SelectFamily = () => {
  return (
    <Select>
      <SelectTrigger className="bg-theme-muted w-full cursor-pointer rounded-none border-x-0 border-b-0 py-[41.5px]">
        <SelectValue placeholder="Famílias/Tecnologias" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Famílias/Tecnologias</SelectLabel>
          <SelectItem value="family 1">Famílias/Tecnologias 1</SelectItem>
          <SelectItem value="family 2">Famílias/Tecnologias 2</SelectItem>
          <SelectItem value="family 3">Famílias/Tecnologias 3</SelectItem>
          <SelectItem value="family 4">Famílias/Tecnologias 4</SelectItem>
          <SelectItem value="family 5">Famílias/Tecnologias 5</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export const SelectProduct = () => {
  return (
    <Select>
      <SelectTrigger className="bg-theme-muted w-full cursor-pointer rounded-none rounded-b-lg border-x-0 border-b-0 py-[41.5px]">
        <SelectValue placeholder="Famílias/Tecnologias" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Produtos</SelectLabel>
          <SelectItem value="product 1">Produtos 1</SelectItem>
          <SelectItem value="product 2">Produtos 2</SelectItem>
          <SelectItem value="product 3">Produtos 3</SelectItem>
          <SelectItem value="product 4">Produtos 4</SelectItem>
          <SelectItem value="product 5">Produtos 5</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
