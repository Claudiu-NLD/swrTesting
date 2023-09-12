"use client";

import _ from "lodash";
import { useTestCreateGame, useTestGames } from "@/hooks/useSWR/games";
import { useState } from "react";
import { deleteGame } from "@/hooks/functions/deleteGame";
import { fetchGames } from "@/hooks/functions/fetchGames";
import useSWR from "swr";
import { useSWRQuery } from "@/hooks/useSWR/useSWRQuery";
import { useSWRMutationQuery } from "@/hooks/useSWR/useSWRMutationQuery";
import GameComponent from "@/components/gameComponent";
import { Game } from "@/types/database";
import useSWRMutation from "swr/mutation";

export default function ClientPage() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const { data, error } = useTestGames(); // fetch all games
  const games = data?.data;

  const {
    trigger: createGame,
    isMutating: isCreatingGame,
    error: sWRMutationError,
  } = useTestCreateGame();

  if (sWRMutationError) {
    console.log(error, "error");
  }

  const sortedGames = _.sortBy(games, (game) => game.created_at, "asc");

  const handleCreateGame = () => {
    createGame(
      {
        title: title,
        description: description,
        created_at: new Date().toISOString(),
      },
      {
        async onSuccess({ data }, key, config) {
          const newGame = await data;
          alert("game created - new ID is " + newGame?.id);
        },
        onError(error, key, config) {
          alert("error creating game - " + error.message);
        },
      }
    );
  };

  const { data: testGames } = useSWR("test", () => fetchGames(), {
    onSuccess: ({ data }) => {
      data;
    },
  });
  const { trigger: testingBaseMutation } = useSWRMutation(
    "test",
    (_, { arg }: { arg: Game }) => deleteGame(arg)
  );

  const { data: test } = useSWRQuery(fetchGames, ["games"], undefined, {
    onSuccess: ({ data }) => console.log(data),
  });
  const { trigger } = useSWRMutationQuery(deleteGame, ["test", "testing"], {
    onSuccess: ({ data }) => console.log(data),
  });

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
