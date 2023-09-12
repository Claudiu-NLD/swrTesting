import { Database } from "./supabase";

export type Game = Database["public"]["Tables"]["games"]["Row"];
export type Player = Database["public"]["Tables"]["players"]["Row"];
