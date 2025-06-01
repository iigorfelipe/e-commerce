import { atom } from "jotai";

const showSearchProductsInputAtom = atom(false);
const searchProductsInputValueAtom = atom("");

const showSearchHeaderInputAtom = atom(false);
const searchHeaderInputValueAtom = atom("");

export {
  showSearchProductsInputAtom,
  searchProductsInputValueAtom,
  showSearchHeaderInputAtom,
  searchHeaderInputValueAtom,
};
