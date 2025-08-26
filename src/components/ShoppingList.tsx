import type { Item } from "../App";
import { ShoppingItem } from "./ShoppingItem";
import "./ShoppingList.css"

interface ShoppingListProps {
    items: Item[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export default function ShoppingList({
    items,
    onToggle,
    onDelete,
}: ShoppingListProps) {
    if (items.length === 0) {
    return <p>Список пуст. Добавьте товары выше.</p>;
}



return (
<span>
    {items.map((it) => (
        <ShoppingItem key={it.id} item={it} onToggle={onToggle} onDelete={onDelete} />
        ))}
</span>
);
}