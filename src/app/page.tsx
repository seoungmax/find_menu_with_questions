import { useState } from "react";

const QUESTIONS = [
  { q: "오늘은 밥이 먹고 싶나요?", yes: 1, no: 2 },
  { q: "국물이 있는 메뉴가 좋나요?", yes: "국밥", no: "비빔밥" },
  { q: "면 요리는 어떤가요?", yes: "라면", no: "샐러드" },
];

export default function Home() {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const handleAnswer = (answer: "yes" | "no") => {
    const next = QUESTIONS[step][answer];
    if (typeof next === "number") {
      setStep(next);
    } else if (typeof next === "string") {
      setResult(next);
    }
  };
  const restart = () => {
    setStep(0);
    setResult(null);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 px-4 py-8">
      <div className="w-full max-w-xs bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6 text-orange-500">오늘 뭐 먹지?</h1>
        {result ? (
          <div className="flex flex-col items-center gap-4">
            <div className="text-lg font-semibold">추천 메뉴: <span className="text-orange-600">{result}</span></div>
            <button
              className="mt-2 px-4 py-2 bg-orange-400 text-white rounded-full font-bold shadow hover:bg-orange-500 transition"
              onClick={restart}
            >
              다시하기
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="text-base text-center font-medium min-h-[48px]">{QUESTIONS[step].q}</div>
            <div className="flex gap-4 w-full">
              <button
                className="flex-1 px-4 py-2 bg-orange-400 text-white rounded-full font-bold shadow hover:bg-orange-500 transition"
                onClick={() => handleAnswer("yes")}
              >
                예
              </button>
              <button
                className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-full font-bold shadow hover:bg-gray-300 transition"
                onClick={() => handleAnswer("no")}
              >
                아니요
              </button>
            </div>
          </div>
        )}
      </div>
      <footer className="mt-8 text-xs text-gray-400">© 메뉴 추천 프로토타입</footer>
    </div>
  );
}
