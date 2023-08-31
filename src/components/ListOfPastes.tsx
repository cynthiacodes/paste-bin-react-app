import { useState, useEffect } from "react";
import { PasteItem } from "./PasteItemInterface";

interface ListOfPastesProps {
    getPastes: () => Promise<PasteItem[] | undefined>;
}

export function ListOfPastes({ getPastes }: ListOfPastesProps): JSX.Element {
    const [pastes, setPastes] = useState<PasteItem[] | undefined>(undefined);

    useEffect(() => {
        const fetchPastes = async () => {
            const allPastes = await getPastes();
            setPastes(allPastes);
        };

        fetchPastes();
    }, [getPastes]);

    const renderEachPaste =
        pastes &&
        pastes.map((paste) => (
            <li key={paste.id}>
                title: {paste.title}
                date created: {paste.creationDate}
                description: {paste.description}
            </li>
        ));
    return (
        <>
            <ol> {renderEachPaste}</ol>
        </>
    );
}
