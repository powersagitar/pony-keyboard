export const keyboardKeys = [
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
  ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
];

export default function Keyboard() {
  return (
    <div className="flex flex-col items-center max-h-[50vh]">
      {keyboardKeys.map((row) => {
        return (
          <div className="flex" key={`keyboard-row-${row}`}>
            {row.map((key) => (
              <i
                className="font-semibold w-24 h-24 text-2xl border-black border-solid border text-center content-center"
                key={`keyboard-key-${key}`}
                id={`keyboard-key-${key}`}
              >
                {key}
              </i>
            ))}
          </div>
        );
      })}
    </div>
  );
}
