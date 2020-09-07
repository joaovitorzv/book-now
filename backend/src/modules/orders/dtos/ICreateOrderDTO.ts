export default interface ICreateOrderDTO {
  customer_id: string;
  books_ordered: string[];
  order_total: number;
  delivery: number;
}