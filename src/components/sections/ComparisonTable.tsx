import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { comparisonRows } from "@/data/comparison";

export function ComparisonTable() {
  return (
    <section className="bg-sand-50 py-24 lg:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Why We're Better"
          title="TravelVista vs Others"
          description="See how we compare to other UK visa consultants on the things that matter most."
        />

        <Reveal className="overflow-x-auto rounded-2xl border border-navy-950/8 bg-white shadow-sm">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-navy-950/8 bg-navy-950 text-white">
                <th className="px-6 py-4 font-semibold">Feature</th>
                <th className="px-6 py-4 font-semibold">🏆 TravelVista Ltd</th>
                <th className="px-6 py-4 font-semibold">Others</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr
                  key={row.feature}
                  className={index % 2 === 0 ? "bg-white" : "bg-sand-50/60"}
                >
                  <td className="px-6 py-4 font-medium text-navy-950">{row.feature}</td>
                  <td className="px-6 py-4 text-navy-800">{row.travelvista}</td>
                  <td className="px-6 py-4 text-navy-700/70">{row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Container>
    </section>
  );
}
