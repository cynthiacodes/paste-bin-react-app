import { ListOfPastes } from "./ListOfPastes";
import { InputPastes } from "./InputPastes";
import "./App.css";
import { PasteItemDB } from "./PasteItemInterface";
import axios from "axios";

function App() {
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

            return allPastes;
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="App">
            <InputPastes />
            <ListOfPastes getPastes={getPastes} />
        </div>
    );
}

export default App;
