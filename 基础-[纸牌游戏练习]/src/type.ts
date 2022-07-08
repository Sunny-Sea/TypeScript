import {Color, Mark} from './enum'

export type Deck = NormalCard[];
export type NormalCard = {
    color: Color,
    mark: Mark
}