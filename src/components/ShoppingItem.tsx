import type { Item } from "../App";
import './ShoppingItem.css'

export function ShoppingItem({
    item,
    onToggle,
    onDelete,
}: {
    item: Item;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}) {
return (
<div className="item-list">
<input
type="checkbox"
checked={item.purchased}
onChange={() => onToggle(item.id)}
aria-label={`Отметить «${item.title}» как купленное`}
/>
<span
className={`item-name ${item.purchased ? 'purchased' : ''}`}
>
{item.title}
</span>
<button onClick={() => onDelete(item.id)} aria-label={`Удалить ${item.title}`}>
Удалить
</button>
</div>
);
}