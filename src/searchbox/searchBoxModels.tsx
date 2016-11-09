export interface ITextInputProps {
    onSearch : (value: string) => void;
    text: string;
    placeholder: string;
    search: boolean;
}

export interface ITextInputState {
    text: string;
}