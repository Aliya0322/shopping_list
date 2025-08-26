import AddItemForm from "./components/AddItemForm";
import ShoppingList from "./components/ShoppingList";
import { makeId } from "./components/Helper";
import './App.css'
import { useState, useMemo } from "react";


export type Item = {
  id: string;
  title: string;
  purchased: boolean;
};

export default function App() {
const [items, setItems] = useState<Item[]>([]);


const remaining = useMemo(() => items.filter((i) => !i.purchased).length, [items]);


function addItem(title: string) {
setItems((prev) => [{ id: makeId(), title, purchased: false }, ...prev]);
}


function toggleItem(id: string) {
setItems((prev) => prev.map((it) => (it.id === id ? { ...it, purchased: !it.purchased } : it)));
}


function deleteItem(id: string) {
setItems((prev) => prev.filter((it) => it.id !== id));
}


return (
<main className="main">
<h1 className="shopping-list">Список покупок</h1>


<AddItemForm onAdd={addItem} />

<ShoppingList items={items} onToggle={toggleItem} onDelete={deleteItem} />


<footer className="footer">
{items.length > 0 ? (
<span>
Всего: {items.length} • Осталось купить: {remaining}
</span>
) : (
<span>Добавьте первый товар, чтобы начать</span>
)}
</footer>
</main>
);
}