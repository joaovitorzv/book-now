import Book from '../types/Book'

export const getTotalBagValue = (books: Book[]) => {
  return books
    .map(book => book.price || 0)
    .reduce((accumulator, currentValue) => accumulator + parseFloat(String(currentValue)), 0);
}

export const convertToLocaleStrig = (bookPrice: string) => {
  return parseFloat(bookPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export const formatDate = (date: Date) => {
  let day = new Date(date).getDay().toString().padStart(2, '0');
  let month = (new Date(date).getMonth() + 1).toString().padStart(2, '0');
  let year = new Date(date).getFullYear();

  return `${day}/${month}/${year}`;
}