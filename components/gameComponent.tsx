import { useDeleteGameUsingSWRMutationHook } from "@/hooks/useSWRMutation/useDeleteGameUsingSWRMutationHook";
import { useUpdateGameUsingSWRMutationHooks } from "@/hooks/useSWRMutation/useUpdateGameUsingSWRMutationHook";
import { Game } from "@/types/supabase";
import Link from "next/link";

interface GameComponentProps {
  game: Game;
}

const GameComponent: React.FC<GameComponentProps> = ({ game }) => {
  const {
    data: freshlyUpdateGame,
    trigger: updateGame,
    isMutating: isUpdatingGame,
    error: errorUpdatingGame,
  } = useUpdateGameUsingSWRMutationHooks(game.id!);

  const {
    trigger: deleteGame,
    error: errorDeleteGame,
    isMutating: isRemovingGame,
  } = useDeleteGameUsingSWRMutationHook(game.id!);

  return (
    <div
      className="w-[300px] text-center p-2 border-2 m-8 border-black"
      key={game.id}
    >
      <h1>{game.title}</h1>
      <p>{game.description}</p>
      <div className="space-x-2">
        <button
          className="bg-blue-600 text-white w-[120px] p-2"
          onClick={() => {
            const upercaseTitle = "updated";
            updateGame(
              { ...game, title: upercaseTitle },
              {
                onSuccess: (data, key, config) => alert("game updated"),
                onError: (error, key, config) =>
                  alert("error updating game - " + error.message),
              }
            );
          }}
        >
          Update game
        </button>
        <button
          className="bg-red-600 text-white w-[120px] p-2"
          onClick={() => {
            deleteGame(game, {
              onSuccess: (data, key, config) => alert("game deleted"),
              onError: (error, key, config) =>
                alert("error deleting game - " + error.message),
            });
          }}
        >
          Delete game
        </button>
      </div>
      <Link href={`/clientPage/${game.id}`} className="text-blue-500">
        see this game
      </Link>
    </div>
  );
};

export default GameComponent;
