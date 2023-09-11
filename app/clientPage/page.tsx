"use client";

import { Game } from "@/types/supabase";
import { useGames } from "@/hooks/globalMutate/useGames";
import { useCreateGameUsingGlobalMutate } from "@/hooks/globalMutate/useCreateGameUsingGlobalMutate";
import { useCreateGameUsingSWRMutationHooks } from "@/hooks/useSWRMutation/useCreateGameUsingSWRMutationHook";
import { useCreateGameUsingBoundMutate } from "@/hooks/boundMutate/useCreateGameUsingBoundMutate";
import { useUpdateGameUsingGlobalMutate } from "@/hooks/globalMutate/useUpdateGameUsingGlobalMutate";
import { useUpdateGameUsingBoundMutate } from "@/hooks/boundMutate/useUpdateGameUsingBoundMutate";
import { useUpdateGameUsingSWRMutationHooks } from "@/hooks/useSWRMutation/useUpdateGameUsingSWRMutationHook";
import Link from "next/link";
import { useState } from "react";
import _ from "lodash";
import { useDeleteGameUsingSWRMutationHook } from "@/hooks/useSWRMutation/useDeleteGameUsingSWRMutationHook";
import GameComponent from "@/components/gameComponent";

export default function ClientPage() {
  // const fakeGame = {
  //   title: "this is the game title",
  //   description: "this is an awesome game",
  //   created_at: new Date(),
  // };

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const { data, error } = useGames(); // fetch all games
  // ---------------------- // using GLOBAL mutate // ------------------------//
  const { createGameUsingGlobalMutate } = useCreateGameUsingGlobalMutate();
  const { updateGameUsingGlobalMutate } = useUpdateGameUsingGlobalMutate();

  // ---------------------- // using BOUND mutate // ------------------------//
  const { createGameUsingBoundMuate } = useCreateGameUsingBoundMutate();
  const { updateGameUsingBoundMutate } = useUpdateGameUsingBoundMutate();

  // ---------------------- // using useSWRMutation // ------------------------//
  const {
    trigger,
    isMutating: isCreatingGame,
    error: sWRMutationError,
  } = useCreateGameUsingSWRMutationHooks();

  if (sWRMutationError) {
    console.log(error, "error");
  }

  const sortedGames = _.sortBy(data, (game) => game.created_at, "asc");

  const handleCreateGame = () => {
    trigger({ title: title, description: description, created_at: new Date() });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>this is the client side page</h1>{" "}
      {sortedGames &&
        sortedGames.map((game: Game) => (
          <GameComponent key={game.id} game={game} />
        ))}
      <div>
        <div className="flex flex-col gap-4 my-4">
          <input
            type="text"
            value={title}
            className="border-2 border-black p-2"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={description}
            className="border-2 border-black p-2"
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          className="bg-green-600 text-white w-[150px] h-[60px] p-2"
          onClick={handleCreateGame}
          disabled={isCreatingGame}
        >
          Create Game
        </button>
      </div>
    </main>
  );
}
