import { Suspense } from "react";
import TopDonators from "../components/TopDonators";
import { 
  Ticket, 
  Calendar, 
  MessageCircle, 
  ExternalLink,  
  Sparkles,
  ChevronRight,
  Flame,
  CheckCircle2,
  MapPin ,
  Clock
} from "lucide-react";

import ScheduleSection from "../components/ScheduleSection";
const scheduleEvents = [
  {
    date: "26 OCT 2026",
    endDate: "2026-10-26T23:59:59+07:00", // ใส่วันที่สิ้นสุดกิจกรรม
    title: "The Haunted Graveyard #ป่าช้าสยองขวัญ",
    location: "MBK Center",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=MBK+Center",
    tag: "Halloween Event",
    tagColor: "bg-purple-100 text-purple-700 border-purple-200",
    times: [
      { slot: "17:15 - 18:15", activity: "บ้านผีสิง" },
      { slot: "18:30 - 19:30", activity: "Hachi Cha" },
    ],
  },
  {
    date: "30 OCT 2026",
    endDate: "2026-10-30T23:59:59+07:00",
    title: "BNK48 & CGM48 Special single 'Kimi to Doko ka e Ikitai' Busking & Random Play Dance Party",
    location: "The Street Ratchada , Bangkok",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Street+Ratchada",
    tag: "Busking & Dance",
    tagColor: "bg-blue-100 text-blue-700 border-blue-200",
    times: [],
  },
  {
    date: "31 OCT - 1 NOV 2026",
    endDate: "2026-11-01T23:59:59+07:00", // วันสุดท้ายของงานคือ 1 Nov
    title: "BNK48 & CGM48 Special single 'Kimi to Doko ka e Ikitai' Handshake event",
    location: "MCC Hall , The Mall Lifestore Ngarmwongwan , Nonthaburi",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Mall+Lifestore+Ngamwongwan",
    tag: "Handshake Event",
    tagColor: "bg-pink-100 text-pink-700 border-pink-200",
    times: [],
  },
  {
    date: "14 NOV 2026",
    endDate: "2026-11-14T23:59:59+07:00",
    title: "BNK48 & CGM48 Concert 2026: JOURNEY OF DREAMS",
    location: "MCC Hall , The Mall Lifestore Bangkapi , Bangkok",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Mall+Lifestore+Bangkapi",
    tag: "Concert",
    tagColor: "bg-rose-100 text-rose-700 border-rose-200",
    isHighlight: true,
    times: [],
  },
  {
    date: "14 NOV 2026",
    endDate: "2026-11-14T23:59:59+07:00",
    title: "BNK48 & CGM48 Senbatsu General Election 2026 : Final Results Announcement",
    location: "MCC Hall , The Mall Lifestore Bangkapi , Bangkok",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Mall+Lifestore+Bangkapi",
    tag: "GE Final Results",
    tagColor: "bg-amber-100 text-amber-800 border-amber-300",
    isHighlight: true,
    times: [],
  },
  {
    date: "15 NOV 2026",
    endDate: "2026-11-15T23:59:59+07:00",
    title: "BNK48 & CGM48 Senbatsu General Election 2026 : Heart to Heart",
    location: "MCC Hall , The Mall Lifestore Bangkapi , Bangkok",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Mall+Lifestore+Bangkapi",
    tag: "Heart to Heart",
    tagColor: "bg-red-100 text-red-700 border-red-200",
    times: [],
  },
];

// ข้อมูลจำลองโปรเจกต์ General Election สำหรับแถบเลื่อนซ้าย-ขวา
const geProjects = [
  {
    id: "squishy",
    title: "กระดานสกุชชี่",
    imageUrl: "/IMG_3912.JPG",
    isCompleted: true, // ยังเปิดอยู่
  },
  {
    id: "tea-room",
    title: "กระดาน Tea Room",
    imageUrl: "/กระดาน2.png",
    isCompleted: true,
  },
  {
    id: "openhouse",
    title: "กระดาน Open House",
    imageUrl: "/IMG_3910.JPG",
    isCompleted: true, // ปิดแล้ว
  },

  {
    id: "fire-up",
    title: "กระดานเติมไฟ",
    imageUrl: "/Iwn0yKfxdeFKs50B6otyNP_8FrcJVxWFuMixPoRXuJQ.MP4",
    isCompleted: false,
  },
];
export default function HomePage() 
{
  return (
    <div className="min-h-screen bg-transparent text-slate-800">
      {/* 1. Header บาร์บนสุด */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center gap-3">
          <div className="flex items-center gap-2.5 font-bold text-slate-800 text-base md:text-lg">
            <span className="text-xl md:text-2xl leading-none">🐰</span>
            <span className="tracking-tight">
              Esther Ink - Inkcha BNK48 supporters
            </span>
          </div>
          <a
            href="https://forms.gle/t9kr8Vf2ySJMBNL2A"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full font-semibold text-sm transition shadow-sm flex-shrink-0"
          >
            <Ticket className="w-4 h-4" />
            ซื้อบัตรจับมือกับทางบ้าน
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-10">
        {/* 2. Member Profile Card สไตล์ภาพลอยทะลุกรอบ (Floating Standee) */}
        <section className="relative mt-14 sm:mt-16 bg-gradient-to-br from-white via-pink-50/20 to-white p-6 sm:p-8 pt-16 sm:pt-8 rounded-3xl shadow-sm border border-pink-100 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6">
          
          {/* ฝั่งซ้าย: ข้อมูลประวัติและ Social Media */}
          <div className="space-y-3 text-center sm:text-left flex-1 order-2 sm:order-1 z-10">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="text-xs font-bold px-3 py-1 bg-pink-500 text-white rounded-full shadow-xs tracking-wide">
                BNK48 6th Generation team trainee
              </span>
              <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-full">
                #DoshitemoKimigaSukidaTH #AisuruHitoTH
              </span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                INKCHA <span className="text-pink-500 font-extrabold">(อิ๊งชา)</span>
              </h1>
              <p className="text-sm font-semibold text-slate-400 mt-0.5">
                Chalita Kittikoon | ชลิตา กิตติคุณ 🐰✨
              </p>
            </div>

            <div className="text-xs sm:text-sm text-slate-600 space-y-1.5 py-1">
              <p className="flex items-center justify-center sm:justify-start gap-2">
                <span className="font-bold text-slate-700">🎂 วันเกิด:</span> 31 กรกฎาคม 2007
                <span className="text-slate-300">|</span>
                <span className="font-bold text-slate-700">🩸 กรุ๊ปเลือด:</span> B
              </p>
              <p>
                <span className="font-bold text-slate-700">💜 Audition Candidate no:</span> 504
              </p>
              <p>
                <span className="font-bold text-slate-700">🍵 สิ่งที่ชอบ:</span> สุนัข แมว กระต่าย สีชมพู มาการอง
              </p>
              <p>
                <span className="font-bold text-slate-700">💖 Hobby:</span> ต่อโมเดลบ้านจิ๋ว ทำขนม เล่นกีตาร์ ร้องเพลง ตีแบดมินตัน
              </p>
            </div>

            {/* ปุ่ม Social Media */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-2">
              <a
                href="https://www.instagram.com/inkcha.bnk48.official/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white rounded-xl text-xs font-bold shadow-sm hover:shadow-md hover:scale-102 transition"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>Inkcha's IG account</span>
              </a>

              <a
                href="https://www.tiktok.com/@inkcha.bnk48official"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold shadow-sm hover:bg-slate-800 hover:scale-102 transition"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-.88-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.08a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.51z" />
                </svg>
                <span>Inkcha's TikTok</span>
              </a>
            </div>
          </div>

          {/* ฝั่งขวา: ภาพเมมเบอร์ครึ่งตัวแบบลอยทะลุกรอบ (Floating Standee) */}
          <div className="relative order-1 sm:order-2 flex-shrink-0 flex items-end justify-center -mt-20 sm:-mt-24 sm:-mb-8">
            {/* แสงเรืองรองสีชมพูด้านหลังตัวน้อง */}
            <div className="absolute w-48 h-48 sm:w-56 sm:h-56 bg-pink-300/30 rounded-full blur-2xl -z-1 pointer-events-none" />

            {/* ตัวภาพครึ่งตัว (แนะนำให้ใช้ไฟล์ภาพแบบไดคัทโปร่งใส) */}
            <img
              src="/inkcha.png"
              alt="Esther Ink BNK48"
              className="w-48 sm:w-60 md:w-64 h-auto object-contain drop-shadow-[0_12px_20px_rgba(236,72,153,0.25)] hover:scale-105 transition-transform duration-300 pointer-events-none select-none"
            />
          </div>

        </section>

        {/* Esther Ink - General Election Projects */}
        <section className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <h2 className="text-lg md:text-xl font-black text-slate-900 tracking-tight">
                Esther Ink - General Election Projects
              </h2>
            </div>
            <span className="text-xs text-slate-400 flex items-center gap-0.5">
              เลื่อนเพื่อดูทั้งหมด <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>

          {/* คอนเทนเนอร์เลื่อนแนวนอน */}
          <div className="flex gap-4 overflow-x-auto pb-4 pt-1 scroll-smooth snap-x snap-mandatory no-scrollbar">
            {geProjects.map((proj) => (
              <div
                key={proj.id}
                className={`min-w-[240px] md:min-w-[280px] snap-start rounded-2xl border overflow-hidden shadow-xs transition-all duration-300 flex flex-col justify-between group ${
                  proj.isCompleted
                    ? "bg-slate-50 border-slate-200"
                    : "bg-white border-slate-200/80 hover:shadow-md hover:-translate-y-1"
                }`}
              >
                {/* รูปภาพโปสเตอร์ (ถ้าปิดแล้วจะใส่ grayscale และ opacity จางลง) */}
                <div className="relative aspect-[4/5] w-full bg-slate-100 overflow-hidden">
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    className={`w-full h-full object-cover transition-all duration-500`}
                  />

                  {/* ป้ายชื่อกระดานมุมซ้ายบน */}
                  <span className={`absolute top-2.5 left-2.5 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs ${
                    proj.isCompleted 
                      ? "bg-slate-700/80 text-slate-200 backdrop-blur-md" 
                      : "bg-black/60 text-white backdrop-blur-md"
                  }`}>
                    {proj.title}
                  </span>

                  {/* แถบคาดกลางรูปถ้าปิดแล้ว */}
                  {proj.isCompleted && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
                      <span className="bg-slate-900/90 text-white text-xs font-black px-3.5 py-1.5 rounded-full tracking-widest uppercase shadow-lg border border-white/20 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> COMPLETED!
                      </span>
                    </div>
                  )}
                </div>

                {/* แถบระบุเป้าหมายด้านล่างรูป */}
                <div className={`p-3 flex items-center justify-between text-xs border-t ${
                  proj.isCompleted ? "bg-slate-100/80 border-slate-200" : "bg-white border-slate-100"
                }`}>
                  <span className="text-slate-500 font-medium">สถานะ</span>
                  {proj.isCompleted ? (
                    <span className="font-extrabold text-emerald-700 bg-emerald-100/90 border border-emerald-200/60 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Completed
                    </span>
                  ) : (
                    <span className="font-extrabold text-pink-600 bg-pink-50 border border-pink-100 px-2.5 py-0.5 rounded-md">
                      Now loading...
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Top Donators / Spenders (ดึงสดจาก Google Sheet) */}
        <section>
          <Suspense
            fallback={
              <div className="h-44 bg-amber-50/50 rounded-2xl flex items-center justify-center text-slate-400 text-sm animate-pulse border border-amber-100">
                กำลังโหลดข้อมูล Top Spenders จาก Google Sheets...
              </div>
            }
          >
            <TopDonators />
          </Suspense>
        </section>

        {/* 5. ตารางงาน & ช่องทางการติดต่อบ้านเบส */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* โซนตารางงานถัดไป */}
              <ScheduleSection events={scheduleEvents} />

          <section className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
            <h2 className="font-bold text-slate-900 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-pink-500" /> Contact us 
            </h2>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://line.me/ti/g2/l1A8i3F0V1RW6kHzu_mEPAx_6NH2DWDilIJtjQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 bg-green-50 text-green-900 rounded-xl text-sm font-semibold hover:bg-green-100 transition border border-green-200/60"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">💬</span>
                  <span>LINE OpenChat Esther Ink</span>
                </div>
                <ExternalLink className="w-4 h-4 text-green-600" />
              </a>

              <a
                href="https://x.com/estherinkcha"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 bg-slate-100 text-slate-800 rounded-xl text-sm font-semibold hover:bg-slate-200 transition border border-slate-200"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">𝕏</span>
                  <span>X (Twitter) @EstherInkcha</span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500" />
              </a>

              <a
                href="https://www.facebook.com/EstherInkcha/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 bg-blue-50 text-blue-900 rounded-xl text-sm font-semibold hover:bg-blue-100 transition border border-blue-200/60"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">📘</span>
                  <span>Facebook Esther Ink - Inkcha BNK48 Thailand supporters</span>
                </div>
                <ExternalLink className="w-4 h-4 text-blue-600" />
              </a>
            </div>
          </section>
          {/* 6. Performance & Music Videos (วางใต้ Contact us) */}
          <section className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500 border border-pink-100">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-extrabold text-slate-900 text-base tracking-tight">
                    Highlight Performance
                  </h2>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {/* คลิปที่ 1: Aisuru Hito */}
              <a
                href="https://youtu.be/rm0Zi0EpBVA?si=upOOiQPpwPoWm2OY"
                target="_blank"
                rel="noreferrer"
                className="group block p-3 rounded-2xl bg-slate-50 border border-slate-200/70 hover:bg-pink-50/40 hover:border-pink-200 transition-all duration-300"
              >
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900 mb-2.5">
                  <img
                    src="https://img.youtube.com/vi/rm0Zi0EpBVA/hqdefault.jpg"
                    alt="Aisuru Hito – เธอ (Dance Performance ver.)"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs text-rose-600 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-white transition-all">
                      <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-xs font-bold text-slate-800 group-hover:text-pink-600 transition-colors line-clamp-1">
                  Aisuru Hito – เธอ (Dance Performance ver.)
                </h3>
                <p className="text-[11px] text-slate-400 mt-0.5">BNK48 & CGM48 Team Vocalists</p>
              </a>

              {/* คลิปที่ 2: Doushitemo Kimi ga Suki da */}
              <a
                href="https://youtu.be/jRVOQHriw2w?si=eql1nD_S451BQNfH"
                target="_blank"
                rel="noreferrer"
                className="group block p-3 rounded-2xl bg-slate-50 border border-slate-200/70 hover:bg-pink-50/40 hover:border-pink-200 transition-all duration-300"
              >
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900 mb-2.5">
                  <img
                    src="https://img.youtube.com/vi/jRVOQHriw2w/hqdefault.jpg"
                    alt="Doushitemo Kimi ga Suki da – จะยังไงก็รักเธอ"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs text-rose-600 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-white transition-all">
                      <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 border border-pink-200 shadow-2xs">
                    6th Genetation Debut Song
                  </span>
                </div>
                <h3 className="text-xs font-bold text-slate-800 group-hover:text-pink-600 transition-colors line-clamp-1">
                  【MV full】Doushitemo Kimi ga Suki da – จะยังไงก็รักเธอ
                </h3>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}