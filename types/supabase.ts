export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      games: {
        Row: {
          created_at: string | null;
          description: string | null;
          id: string;
          title: string;
        };
        Insert: {
          created_at?: string | null;
          description?: string | null;
          id?: string;
          title: string;
        };
        Update: {
          created_at?: string | null;
          description?: string | null;
          id?: string;
          title?: string;
        };
        Relationships: [];
      };
      players: {
        Row: {
          age: number | null;
          created_at: string | null;
          gameId: string;
          id: number;
          name: string | null;
        };
        Insert: {
          age?: number | null;
          created_at?: string | null;
          gameId?: string;
          id?: number;
          name?: string | null;
        };
        Update: {
          age?: number | null;
          created_at?: string | null;
          gameId?: string;
          id?: number;
          name?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
