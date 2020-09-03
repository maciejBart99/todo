/**
 * Interface for the 'Todos' data
 */
export interface TodosEntity {
  id: string; // Primary ID
  content: string;
  done: boolean;
  ownerId?: string;
}
