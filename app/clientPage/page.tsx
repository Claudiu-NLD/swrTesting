"use client";

import _ from "lodash";
import GameComponent from "@/components/gameComponent";
import { useCreateGame, useGames } from "@/hooks/useSWR/games";
import { useState } from "react";
import { Game } from "@/types/database";
import { useSWRConfig } from "swr";

export default function ClientPage() {
  const { cache } = useSWRConfig();
  console.log("CACHE KEYS", cache.keys());
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const { data, error } = useGames({ variables: null }); // fetch all games

  const {
    trigger: createGame,
    isMutating: isCreatingGame,
    error: sWRMutationError,
  } = useCreateGame({ variables: null });

  if (sWRMutationError) {
    console.log(error, "error");
  }

  const sortedGames = _.sortBy(data, (game) => game.created_at, "asc");

  const handleCreateGame = () => {
    createGame(
      {
        title: title,
        description: description,
        created_at: new Date().toISOString(),
      },
      {
        async onSuccess(data, key, config) {
          console.log("KEY", key);
          alert("game created - new ID is " + data?.id);
        },
        onError(error, key, config) {
          alert("error creating game - " + error.message);
        },
      }
    );
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
