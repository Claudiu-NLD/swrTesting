import { useGame } from "@/hooks/globalMutate/useGame";
import { useUpdateGameUsingSWRMutationHooks } from "@/hooks/useSWRMutation/useUpdateGameUsingSWRMutationHook";

interface IndividualGameProps {
  gameId: string;
}

export const IndividualGame: React.FC<IndividualGameProps> = ({ gameId }) => {
  const { data } = useGame(gameId);

  const {
    data: freshlyUpdateGame,
    trigger: updateGame,
    isMutating: isUpdatingGame,
    error: errorUpdatingGame,
  } = useUpdateGameUsingSWRMutationHooks(gameId);

  return (
    <div className="flex flex-col gap-2 items-center">
      <h1>
        <span className="font-bold">game title :</span> {data?.title}
      </h1>
      <h1>
        <span className="font-bold">game description:</span> {data?.description}
      </h1>
      <button
        className="bg-blue-600 text-white w-[120px] p-2"
        onClick={() => {
          const upercaseTitle = "updated";
          updateGame(
            { ...data, title: upercaseTitle, description: "updated" },
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
