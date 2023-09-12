import {
  useTestGame,
  useTestUpdateGame,
  useUpdateGame,
} from "@/hooks/useSWR/games";

interface IndividualGameProps {
  gameId: string;
}

export const IndividualGame: React.FC<IndividualGameProps> = ({ gameId }) => {
  const { data: game } = useTestGame(gameId, {
    onSuccess: (data) => console.log(data),
  });

  const { trigger: updateGame } = useTestUpdateGame(gameId);

  return (
    <div className="flex flex-col gap-2 items-center">
      {game?.id && (
        <>
          <h1>
            <span className="font-bold">game title :</span> {game?.title}
          </h1>
          <h1>
            <span className="font-bold">game description:</span>{" "}
            {game?.description}
          </h1>
          <button
            className="bg-blue-600 text-white w-[120px] p-2"
            onClick={() => {
              const upercaseTitle = "test";
              updateGame(
                {
                  ...game,
                  title: upercaseTitle,
                  description: upercaseTitle,
                  created_at: game?.created_at
                    ? new Date(game?.created_at).toISOString()
                    : null,
                },
                {
                  onSuccess: () => console.log("SUCCESS"),
                  onError: (error, key, config) =>
                    alert("error updating game - " + error.message),
                }
              );
            }}
          >
            Update game
          </button>
        </>
      )}
    </div>
  );
};
