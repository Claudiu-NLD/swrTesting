import { useGame } from "@/hooks/globalMutate/useGame";
import { useUpdateGameUsingSWRMutationHooks } from "@/hooks/useSWRMutation/useUpdateGameUsingSWRMutationHook";
import { Game as ImportedGame } from "@/types/supabase";

interface IndividualGameProps {
  gameId: string;
}

export const IndividualGame: React.FC<IndividualGameProps> = ({ gameId }) => {
  const { data } = useGame(gameId);

  const {
    data: freshlyUpdateGame,
    trigger: updateGames,
    isMutating: isUpdatingGame,
    error: errorUpdatingGame,
  } = useUpdateGameUsingSWRMutationHooks();

  const handleUpdateGame = (arg: ImportedGame) => {
    updateGames(arg);
  };

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
          handleUpdateGame({
            ...(data as ImportedGame),
            title: "this new title",
          });
        }}
      >
        Update game
      </button>
    </div>
  );
};
