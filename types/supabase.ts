export type Game = {
  id?: string;
  title: string;
  description: string;
  created_at?: Date;
};

export type Player = {
  id?: string;
  name: string;
  age: number;
  gameId: string;
  created_at?: Date;
};
