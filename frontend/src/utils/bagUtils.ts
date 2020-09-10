import Book from '../types/Book'

export const getTotalBagValue = (books: Book[]) => {
  return books
    .map(book => book.price || 0)
    .reduce((accumulator, currentValue) => accumulator + parseFloat(String(currentValue)), 0);
}

export const convertToLocaleStrig = (bookPrice: string) => {
  return parseFloat(bookPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}