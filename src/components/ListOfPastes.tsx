import axios from "axios";
import { useState, useEffect } from "react";
import { PasteItem, PasteItemDB } from "./PasteItemInterface";

export function ListOfPastes(): JSX.Element {
    const [pastes, setPastes] = useState<PasteItem[]>([]);

    const getPastes = async () => {
        try {
            const response = await axios.get(
                "https://paste-bin-backend.onrender.com/pastes"
            );
            const allPastes = response.data.map((eachPaste: PasteItemDB) => {
                const {
                    id,
                    title,
                    description,
                    creation_date: creationDate,
                } = eachPaste;
                return {
                    id,
                    title,
                    description,
                    creationDate,
                };
            });

            setPastes(allPastes);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const renderEachPaste = pastes.map((paste) => (
        <li key={paste.id}>
            title: {paste.title}
            date created: {paste.creationDate}
            description: {paste.description}
        </li>
    ));
    useEffect(() => {
        getPastes();
    }, []);
    return (
        <>
            <ol> {renderEachPaste}</ol>
        </>
    );
}
