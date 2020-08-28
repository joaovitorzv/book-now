import Book from '../types/Book';

class BagStorage {
  private key = 'persist:bag';

  public getBooksBag(): Book[] {
    try {
      const books = JSON.parse(localStorage.getItem(this.key) || '[]');
      return books;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  public setBooksToBag(books: Book[]): void {
    localStorage.setItem(this.key, JSON.stringify(books || []));
  }

  public addBookToBag(book: Book): void {
    let books = [...this.getBooksBag()];
    if (books.find(b => b.id === book.id)) {
      console.log('Caiu no returne');
      return;
    }
    books = [...this.getBooksBag(), book]
    this.setBooksToBag(books);
  }

  public removeBookOfBag(id: string = '0'): void {
    const books = this.getBooksBag().filter(book => book.id !== id);
    this.setBooksToBag(books);
  }

  public clearBag(): void {
    localStorage.setItem(this.key, '[]');
  }
}

export default new BagStorage();