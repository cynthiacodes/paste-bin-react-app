import axios from "axios";
import { useState, useEffect } from "react";
import { PasteItem } from "./PasteItemInterface";

export function ListOfPastes(): JSX.Element {
    const [pastes, setPastes] = useState<PasteItem[]>([]);

    const getPastes = async () => {
        try {
            const response = await axios.get(
                "https://paste-bin-backend.onrender.com/pastes"
            );
            const allPastes = response.data;
            setPastes(allPastes);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        getPastes();
    }, []);
    return (
        <>
            <ol>
                {" "}
                {pastes.map((paste) => (
                    <li key={paste.id}>
                        title: {paste.title}
                        date created: {paste.creationDate}
                        description: {paste.description}
                    </li>
                ))}
            </ol>
        </>
    );
}
