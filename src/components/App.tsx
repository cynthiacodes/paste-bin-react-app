import "./App.css";
import { ListOfPastes } from "./ListOfPastes";
import { InputPastes } from "./InputPastes";

import { useEffect, useState } from "react";
import { PasteItem, PasteItemDB } from "./Interfaces";

import axios from "axios";

function convertPasteFormat(eachPaste: PasteItemDB) {
    const { id, title, description, creation_date: creationDate } = eachPaste;
    return {
        id,
        title,
        description,
        creationDate,
    };
}
function App() {
    const [pastes, setPastes] = useState<PasteItem[] | undefined>(undefined);

    const getPastes = async () => {
        try {
            const response = await axios.get(
                "https://paste-bin-backend.onrender.com/pastes/recent/10"
            );
            const allPastes = response.data.map((eachPaste: PasteItemDB) =>
                convertPasteFormat(eachPaste)
            );

            setPastes(allPastes);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    useEffect(() => {
        getPastes();
    }, []);

    return (
        <div className="App">
            <InputPastes getPastes={getPastes} />
            <ListOfPastes allPastes={pastes} />
        </div>
    );
}

export default App;
