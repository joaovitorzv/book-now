import Book from '../types/Book'

export const getTotalBagValue = (books: Book[]) => {
  return books
    .map(book => book.price || 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue)
}