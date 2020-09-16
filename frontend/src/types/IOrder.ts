export default interface Order {
  id: string;
  delivery: string;
  books_ordered: string[];
  order_total: string;
  created_at: Date;
  customer: {
    name: string;
    email: string;
  }
}