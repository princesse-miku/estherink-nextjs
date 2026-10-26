"use client";

import { useState, useEffect } from "react";
import { Calendar, MapPin, Clock, Sparkles, ExternalLink } from "lucide-react";

interface ScheduleEvent {
  date: string;
  endDate: string;
  title: string;
  location: string;
  mapsUrl: string;
  tag: string;
  tagColor: string;
  isHighlight?: boolean;
  times: { slot: string; activity: string }[];
}

interface ScheduleSectionProps {
  events: ScheduleEvent[];
}

export default function ScheduleSection({ events }: ScheduleSectionProps) {
  // คำนวณฝั่ง Client เพื่อไม่ให้ชนกับ Next.js Build Time Prerender
  const [upcomingEvents, setUpcomingEvents] = useState<ScheduleEvent[]>(events);

  useEffect(() => {
    const now = new Date();
    setUpcomingEvents(events.filter((item) => new Date(item.endDate) >= now));
  }, [events]);

  return (
    <section className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500 border border-pink-100">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-black text-slate-900 tracking-tight">
              Inkcha's schedule
            </h2>
          </div>
        </div>
        <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">
          {upcomingEvents.length} Events
        </span>
      </div>
      {/* กรอบโชว์รูป Official Schedule */}
      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-2xs bg-slate-50">
        <a href="/856975538_2210134986236103_7181391173513989429_n.png.jpeg" target="_blank" rel="noreferrer" title="คลิกเพื่อดูภาพขนาดเต็ม">
          <img
            src="/856975538_2210134986236103_7181391173513989429_n.png.jpeg"
            alt="Official Schedule Inkcha BNK48"
            className="w-full h-auto object-cover hover:opacity-95 transition-opacity"
          />
        </a>
      </div>
      <div className="space-y-4">
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((item, idx) => (
            <div
              key={idx}
              className={`relative p-4 md:p-5 rounded-2xl border transition-all duration-200 hover:shadow-xs ${
                item.isHighlight
                  ? "bg-gradient-to-r from-amber-50/50 via-white to-pink-50/30 border-amber-200/80 ring-1 ring-amber-300/40"
                  : "bg-slate-50/70 border-slate-200/70 hover:bg-slate-50"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-black tracking-wide text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-md border border-pink-100">
                      {item.date}
                    </span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${item.tagColor}`}>
                      {item.tag}
                    </span>
                    {item.isHighlight && (
                      <span className="flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-400 text-amber-950">
                        <Sparkles className="w-3 h-3 fill-amber-950" /> Highlight
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm md:text-base font-extrabold text-slate-800 leading-snug">
                    {item.title}
                  </h3>

                  {item.times.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.times.map((t, tIdx) => (
                        <div
                          key={tIdx}
                          className="inline-flex items-center gap-1.5 text-xs bg-white border border-slate-200 px-2.5 py-1 rounded-lg text-slate-700 shadow-2xs"
                        >
                          <Clock className="w-3 h-3 text-pink-500" />
                          <span className="font-semibold text-pink-600">{t.slot}</span>
                          <span className="text-slate-400">|</span>
                          <span>{t.activity}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-1">
                    <a
                      href={item.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-pink-600 transition-colors group/map"
                      title="คลิกเพื่อเปิด Google Maps นำทาง"
                    >
                      <MapPin className="w-3.5 h-3.5 text-slate-400 group-hover/map:text-pink-500 transition-colors flex-shrink-0" />
                      <span className="underline decoration-slate-300 underline-offset-2 group-hover/map:decoration-pink-400">
                        {item.location}
                      </span>
                      <ExternalLink className="w-3 h-3 opacity-60 group-hover/map:opacity-100 transition-opacity flex-shrink-0 ml-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-slate-400 text-sm">
            To be announced soon....
          </div>
        )}
      </div>
    </section>
  );
}