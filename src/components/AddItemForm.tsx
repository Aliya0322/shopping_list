import { useState} from "react";
import type {FormEvent, ChangeEvent} from "react";
import './AddItemForm.css'

export default function AddItemForm({ onAdd }: { onAdd: (title: string) => void }) {
    const [title, setTitle] = useState("");


function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setTitle("");
}


function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
}


return (
<form onSubmit={handleSubmit} className="form">
<input
aria-label="Название товара"
value={title}
onChange={handleChange}
placeholder="Например: молоко"
className="input"
/>
<button type="submit" className = "submit-btn">
Добавить
</button>
</form>
);
}