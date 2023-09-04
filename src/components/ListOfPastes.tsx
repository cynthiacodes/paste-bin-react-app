import { Fragment, useState } from "react";
import { PasteItem, ListOfPastesProps } from "./Interfaces";

function limitText(text: string, amount: number) {
    const splitText = text.split(" ", amount);
    const ellipses = "...";
    return splitText.join(" ") + ellipses;
}

function formatDate(date: string) {
    return date.substring(0, 10);
}

export function ListOfPastes({ allPastes }: ListOfPastesProps): JSX.Element {
    const [selectedPaste, setSelectedPaste] = useState<PasteItem | null>();

    const handleSummaryClick = (paste: PasteItem) => setSelectedPaste(paste);

    const handleCloseSummary = () => setSelectedPaste(null);

    const renderEachSummary =
        allPastes &&
        allPastes.map((paste) => (
            <Fragment key={paste.id}>
                <li>
                    <h3>{paste.title} Date created: </h3>
                    {formatDate(paste.creationDate)} Description:{" "}
                    {limitText(paste.description, 5)}
                    <button onClick={() => handleSummaryClick(paste)}>
                        Read More
                    </button>
                </li>
            </Fragment>
        ));

    const renderFullSinglePaste = selectedPaste && (
        <>
            {" "}
            <h2>{selectedPaste.title}</h2>
            <p>{selectedPaste.description}</p>{" "}
            <button onClick={() => handleCloseSummary()}> close</button>
        </>
    );
    return (
        <>
            <ol> {renderEachSummary}</ol>

            {renderFullSinglePaste}
        </>
    );
}
