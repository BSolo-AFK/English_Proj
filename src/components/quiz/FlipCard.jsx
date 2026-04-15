import { useState } from "react";
import { motion } from "framer-motion";
import Badge from "../ui/Badge";

export default function FlipCard({ q, a, dark }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div onClick={() => setFlipped(!flipped)}>
      <motion.div whileHover={{ y: -4 }} className="h-60 cursor-pointer">
        {!flipped ? (
          <div
            className={`h-full rounded-[28px] border p-6 ${
              dark ? "border-white/10 bg-white/5" : "border-stone-200 bg-white"
            }`}
          >
            <div className="flex h-full flex-col justify-between">
              <Badge className="w-fit bg-emerald-600 text-white">Question</Badge>
              <p
                className={`text-lg font-medium leading-7 ${
                  dark ? "text-stone-50" : "text-stone-900"
                }`}
              >
                {q}
              </p>
              <p className={`text-sm ${dark ? "text-stone-400" : "text-stone-500"}`}>
                Click to flip
              </p>
            </div>
          </div>
        ) : (
          <div
            className={`h-full rounded-[28px] border p-6 ${
              dark
                ? "border-emerald-400/20 bg-emerald-500/10"
                : "border-emerald-200 bg-emerald-50"
            }`}
          >
            <div className="flex h-full flex-col justify-between">
              <Badge className="w-fit bg-stone-900 text-stone-50">Answer</Badge>
              <p
                className={`text-lg font-medium leading-7 ${
                  dark ? "text-stone-50" : "text-stone-900"
                }`}
              >
                {a}
              </p>
              <p className={`text-sm ${dark ? "text-stone-400" : "text-stone-600"}`}>
                Click to flip back
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}