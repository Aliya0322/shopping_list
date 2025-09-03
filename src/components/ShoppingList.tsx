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
<ul className="shopping-list">
    {items.map((it) => (
      <li key={it.id}>
        <ShoppingItem item={it} onToggle={onToggle} onDelete={onDelete} />
      </li>
        ))}
</ul>
);
}