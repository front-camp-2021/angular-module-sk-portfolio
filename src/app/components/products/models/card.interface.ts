export interface Card {
    id: string,
    images: [string, string?],
    title: string,
    rating: number,
    price: number,
    brand: string,
    category: string,
    isCart: false,
    isWished: false,
    uniqId:number
}