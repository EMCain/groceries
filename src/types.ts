export interface groceryItem {
    name: string
    id: string
    parent_id?: string  // optional
    order: number,
    open: boolean,
    children: Array<groceryItem>
  }
  /** 
   * Type '
   * { name: string; 
   * id: string; 
   * parent_id: null; 
   * order: number; 
   * open: boolean; 
   * children: { name: string; id: string; parent_id: string; order: number; open: boolean; children: never[]; }[]; }[]' is not assignable to type 'groceryItem[]'.
   */