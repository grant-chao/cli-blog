import { atom } from "recoil";

export const langState = atom({
    key: 'lang',
    default: 'en-us'
})

const SSR_ATOMS = {
    lang: langState
}

export const initializeRecoilState = (initialRecoilState) => ({set}) =>
    Object.keys(initialRecoilState).map((key) => {
        const value = initialRecoilState[key]
        const atom = SSR_ATOMS[key]
        set(atom, value)
    })


