export interface Donator {
  rank: number;
  name: string;
  votes: number | string;
  message?: string;
}

export async function getTopDonators(): Promise<Donator[]> {
  const apiUrl = process.env.NEXT_PUBLIC_SHEET_API_URL;

  if (!apiUrl) {
    console.warn("NEXT_PUBLIC_SHEET_API_URL is not defined in .env.local");
  }

  try {
    const res = await fetch(`${apiUrl}?group=general_election`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`);
    }

    const data: Donator[] = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching donators from Google Sheets:", error);
    // Mock ข้อมูลสำหรับแสดงผลระหว่างรอต่อชีตจริง
    return [
      { rank: 1, name: "คุณวาฬใจดี (ตัวอย่าง)", votes: 5000, message: "สู้สุดใจ!" },
      { rank: 2, name: "สายซัพพอร์ต", votes: 3200, message: "เพื่อน้องเอสเธอร์" },
      { rank: 3, name: "Anonymous", votes: 1500, message: "โหวตทุกสัปดาห์" },
    ];
  }
}