"use client";

import { IndividualGame } from "@/components/individualGame";

interface Props {
  params: { gameId: string };
}

const Game = ({ params }: Props) => {
  const gameId = params.gameId;
  return (
    <div className="flex flex-col w-full h-screen text-center justify-center items-center">
      {gameId && <IndividualGame gameId={gameId} />}
    </div>
  );
};
export default Game;
