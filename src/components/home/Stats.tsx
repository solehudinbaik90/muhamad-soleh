const stats: { value: string; lines: [string, string] }[] = [
  { value: "10", lines: ["TAHUN BERPENGALAMAN", "MENGAJAR"] },
  { value: "200", lines: ["PROYEK SELESAI", "DI TAHUN INI"] },
  { value: "780", lines: ["ANGGOTA TIM", "DI 10 NEGARA"] },
];

export default function Stats() {
  return (
    <div className="mt-[60px] grid grid-cols-12 gap-[30px] md:gap-2">
      {stats.map(({ value, lines }) => (
        <div key={value} className="col-span-12 md:col-span-4" data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-[50px] font-semibold">
            <span className="counter">{value}</span>+
          </h2>
          <p className="text-white">
            {lines[0]} <br />
            {lines[1]}
          </p>
        </div>
      ))}
    </div>
  );
}
