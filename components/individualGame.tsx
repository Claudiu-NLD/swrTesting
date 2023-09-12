import { useGame, useUpdateGame } from "@/hooks/useSWR/games";

interface IndividualGameProps {
  gameId: string;
}

export const IndividualGame: React.FC<IndividualGameProps> = ({ gameId }) => {
  const { data: game } = useGame({ variables: gameId });

  const {
    data: freshlyUpdateGame,
    trigger: updateGame,
    isMutating: isUpdatingGame,
    error: errorUpdatingGame,
  } = useUpdateGame({ variables: gameId });

  if (!game?.id) return null;

  return (
    <div className="flex flex-col gap-2 items-center">
      <h1>
        <span className="font-bold">game title :</span> {game?.title}
      </h1>
      <h1>
        <span className="font-bold">game description:</span> {game?.description}
      </h1>
      <button
        className="bg-blue-600 text-white w-[120px] p-2"
        onClick={() => {
          const upercaseTitle = "updated";
          updateGame(
            {
              ...game,
              title: upercaseTitle,
              description: "updated",
              created_at: game?.created_at
                ? new Date(game?.created_at).toISOString()
                : null,
            },
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
    </div>
  );
};
