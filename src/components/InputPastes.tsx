import axios from "axios";
import { useState } from "react";
import { PostType } from "./PasteItemInterface";

export function InputPastes(): JSX.Element {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleDescriptionInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    };

    const handleSubmitInput = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const pasteInput: PostType = {
                title: title,
                description: description,
            };

            const response = await axios.post(
                "https://paste-bin-backend.onrender.com/pastes",
                pasteInput
            );
            console.log("the following has been added", response.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmitInput}>
                <input
                    type="text"
                    value={title}
                    placeholder="Add your title here"
                    onChange={handleTitleInput}
                />
                <input
                    type="text"
                    value={description}
                    placeholder="Add code snippet here"
                    onChange={handleDescriptionInput}
                />
                <button>submit</button>
            </form>
        </>
    );
}
