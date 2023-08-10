import {create} from "zustand"
import { ICard } from "../interfaces/card.interfaces";


// export interface IFruit{
//     id: number;
//     name: string;
// }

// interface IFruitStore{
//     fruitList: IFruit[],
//     addFruit: (newFruit: IFruit) => void;
//     removeFruit: (fruitId: number) => void;
// }

// export const useFruitStore = create<IFruitStore>((set) => ({
//     fruitList: [],
//     addFruit: (newFruit) => set(({fruitList}) => {
//         const newFruitList = [...fruitList, newFruit];
//         return { fruitList: newFruitList }; 
//     }),
//     removeFruit: (fruitId) => set(({fruitList}) => {
//         const newFruitList = fruitList
//         .filter(currentFruit => currentFruit.id !== fruitId);
//         return { fruitList: newFruitList };
//     })
// }))


interface ICountZustand{
    contador: number,
    addCount: () => void,
    reduceCountToOne: () => void
}
interface IValidatePlay{
    play: number,
    startGame: () => void,
    endGame: () => void
}
interface IHandleId{
    columnId: number,
    chooseColumnId: (id: number) => void,
    destroyColumnId: () => void
}
interface IAllColumns{
    firstColumn: ICard[] | [];
    secondColumn: ICard[] | [];
    thirdColumn: ICard[] | [];
}
export const useCountZustand = create<ICountZustand>((set) => ({
    contador: 0,
    addCount: () => set(({contador}) =>{
        const addedToCount = contador + 1
        return {contador: addedToCount}
    }),
    reduceCountToOne: () => set(() => {
        return {contador: 0}
    })

}))

export const validatePlayZustand = create<IValidatePlay>((set) => ({
    play: 0,
    startGame: () => set(({play}) => {
        const start = play + 1
        return {play: start}
    }),
    endGame: () => set(() => {
        const gameOver = 0
        return {play: gameOver}
    })
}))

export const handleColumnId = create<IHandleId>((set) => ({
    columnId: 0,
    chooseColumnId: (id: number) => set(() => {
        return {columnId: id}
    }),
    destroyColumnId: () => set(() => {
        return {columnId: 0}
    })  
}))

export const allColumns = create<IAllColumns>(() => ({
    firstColumn: [],
    secondColumn: [],
    thirdColumn: [],
}))