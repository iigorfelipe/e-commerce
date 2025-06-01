import { atom } from "jotai";

const selectedFamilyAtom = atom<string | null>(null);

export { selectedFamilyAtom };
