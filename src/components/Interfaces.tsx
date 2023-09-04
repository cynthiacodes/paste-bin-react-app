export interface PasteItem {
    id: number;
    title: string;
    description: string;
    creationDate: string;
}

export interface UserPostType {
    title: string;
    description: string;
}

export interface PasteItemDB {
    id: number;
    title: string;
    description: string;
    creation_date: string;
}

export interface ListOfPastesProps {
    allPastes: PasteItem[] | undefined;
}

export interface InputPastesProps {
    getPastes: () => Promise<void>;
}
