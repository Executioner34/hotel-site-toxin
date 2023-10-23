export type IItem = {
  name: string;
  value: number;
  max?: number;
  dictionary?: {
    [key: number]: string | undefined;
  };
};
