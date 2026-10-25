import { getTopDonators, Donator } from "../lib/getDonators";
import { Trophy, Crown, Medal, Award, Flame } from "lucide-react";

export default async function TopDonators() {
  const donators: Donator[] = await getTopDonators();

  const totalVotes = donators.reduce(
    (sum: number, d: Donator) => sum + (Number(d.votes) || 0),
    0
  );

  const topThree = donators.slice(0, 3);
  const remaining = donators.slice(3, 10);

  const getPodiumStyle = (index: number) => {
    switch (index) {
      case 0:
        return {
          cardBg: "bg-gradient-to-b from-amber-500/10 via-amber-50/60 to-white",
          borderColor: "border-amber-300 ring-2 ring-amber-400/30 shadow-lg shadow-amber-500/10",
          badgeBg: "bg-gradient-to-r from-amber-400 to-yellow-500 text-white shadow-md shadow-amber-400/40",
          textColor: "text-amber-800",
          voteColor: "text-amber-600",
          icon: <Crown className="w-5 h-5 text-amber-500 animate-bounce" />,
          title: "🥇 อันดับ 1 (Gold)",
        };
      case 1:
        return {
          cardBg: "bg-gradient-to-b from-slate-200/40 via-slate-50 to-white",
          borderColor: "border-slate-300 ring-1 ring-slate-300 shadow-md shadow-slate-400/10",
          badgeBg: "bg-gradient-to-r from-slate-400 to-slate-500 text-white shadow-md shadow-slate-400/30",
          textColor: "text-slate-700",
          voteColor: "text-slate-600",
          icon: <Medal className="w-5 h-5 text-slate-400" />,
          title: "🥈 อันดับ 2 (Silver)",
        };
      case 2:
        return {
          cardBg: "bg-gradient-to-b from-orange-200/30 via-orange-50/40 to-white",
          borderColor: "border-orange-300 ring-1 ring-orange-300/60 shadow-md shadow-orange-500/10",
          badgeBg: "bg-gradient-to-r from-orange-600 to-amber-700 text-white shadow-md shadow-orange-600/30",
          textColor: "text-orange-950",
          voteColor: "text-orange-700",
          icon: <Award className="w-5 h-5 text-orange-600" />,
          title: "🥉 อันดับ 3 (Bronze)",
        };
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-amber-50/60 via-white to-orange-50/40 border border-amber-200/80 p-6 md:p-8 rounded-3xl shadow-sm space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-100/80 pb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-white shadow-md shadow-amber-400/30">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                General Election Top Spenders
              </h2>
              <span className="flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-200/60">
                <Flame className="w-3 h-3 fill-rose-500 text-rose-500" /> Realtime
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              รวมยอด Top Donator แบบเรียลไทม์
            </p>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur px-5 py-2.5 rounded-2xl border border-amber-200/70 shadow-xs flex sm:flex-col justify-between items-center sm:items-end">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
            ยอดเงินที่ได้ทั้งหมด
          </span>
          <span className="text-xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            {totalVotes.toLocaleString()} <span className="text-xs font-bold text-slate-600">บาท</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {topThree.map((d: Donator, index: number) => {
          const style = getPodiumStyle(index)!;
          return (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${style.cardBg} ${style.borderColor}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5">
                  {style.icon}
                  <span className="text-xs font-bold text-slate-600">{style.title}</span>
                </div>
                <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black ${style.badgeBg}`}>
                  #{index + 1}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className={`text-lg font-black tracking-tight truncate ${style.textColor}`} title={d.name}>
                  {d.name}
                </h3>
                <div className="flex items-baseline gap-1.5">
                  <span className={`text-2xl font-black ${style.voteColor}`}>
                    {Number(d.votes).toLocaleString()}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">บาท</span>
                </div>
              </div>

              {d.message && (
                <div className="mt-3 pt-2.5 border-t border-slate-200/50">
                  <p className="text-xs text-slate-500 italic line-clamp-2">
                    "{d.message}"
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {remaining.length > 0 && (
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">
            อันดับที่ 4 – 10
          </h4>
          <div className="bg-white rounded-2xl border border-slate-200/80 divide-y divide-slate-100 overflow-hidden shadow-xs">
            {remaining.map((d: Donator, idx: number) => (
              <div
                key={idx}
                className="flex items-center justify-between px-4 py-3 hover:bg-slate-50/80 transition"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-6 text-center text-xs font-bold text-slate-400">
                    #{idx + 4}
                  </span>
                  <span className="text-sm font-bold text-slate-700 truncate">
                    {d.name}
                  </span>
                </div>
                <div className="flex items-baseline gap-1 text-right pl-3 flex-shrink-0">
                  <span className="text-sm font-extrabold text-slate-800">
                    {Number(d.votes).toLocaleString()}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">บาท</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}