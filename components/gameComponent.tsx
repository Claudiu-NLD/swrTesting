import { useTestDeleteGame, useTestUpdateGame } from "@/hooks/useSWR/games";
import { Game } from "@/types/database";
import Link from "next/link";

interface GameComponentProps {
  game: Game;
}

const GameComponent: React.FC<GameComponentProps> = ({ game }) => {
  const { trigger: updateGame } = useTestUpdateGame(game.id);
  const { trigger: deleteGame } = useTestDeleteGame(game.id);

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
                onSuccess: () => console.log("SUCCESS"),
                onError: (error) =>
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
              onSuccess: () => console.log("SUCCESS"),
              onError: (error) =>
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
