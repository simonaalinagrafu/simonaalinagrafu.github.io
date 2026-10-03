// The B2B sales cycle, as a wheel: six stages on a ring around a handshake,
// read clockwise from the top. It stands in the hero until a portrait exists, and it is not
// decoration — the six stages are the commercial cycle her job descriptions
// set out and the CV summary names: prospecting, the price offer, the
// negotiation, the contract, the order through production, the payment.
//
// The words come from the i18n dictionaries; geometry is computed below so the
// stages can be reordered or renamed without redrawing anything.
import IconPart from '@fx/components/IconPart';
import type { CycleStepId } from '@i18n/types';
import { useLocale } from '@modules/shared/useLocale';

// Order is the cycle; the icon and the colour travel with their stage.
//
// The colours are this diagram's own, not theme tokens — the one deliberate
// exception to "no raw palette colours in a component" (ARCHITECTURE.md): a
// wheel reads as a sequence only if each stage has a hue of its own, and no
// theme has six. They run warm to cool around the ring, in the same muted,
// print-like register as the three themes, and each carries white text at
// 5:1 or better.
const steps: Array<{ id: CycleStepId; icon: string; color: string }> = [
  { id: 'prospecting', icon: 'lucide:search', color: '#8c2332' },
  { id: 'offer', icon: 'lucide:file-text', color: '#a8482a' },
  { id: 'negotiation', icon: 'lucide:messages-square', color: '#8a6a1f' },
  { id: 'contract', icon: 'lucide:file-signature', color: '#2f6b4f' },
  { id: 'production', icon: 'lucide:printer', color: '#1f6b75' },
  { id: 'collection', icon: 'lucide:banknote', color: '#27407a' },
];

// A 440-unit square: stages sit on a ring of radius RING around the centre.
const SIZE = 440;
const C = SIZE / 2;
const RING = 150;
const NODE = 53;
const ICON = 30;
const HUB = 62;
const HANDSHAKE = 74;

const rad = (deg: number) => (deg * Math.PI) / 180;
/** Position on the ring; 0° is the top, angles grow clockwise. */
const onRing = (deg: number) => ({
  x: C + RING * Math.sin(rad(deg)),
  y: C - RING * Math.cos(rad(deg)),
});
const round = (n: number) => Math.round(n * 100) / 100;

export default function SalesCyclePart() {
  const { s } = useLocale();
  const cycle = s.home.cycle;
  const slice = 360 / steps.length;
  // No caption in the picture; the description below names it for screen readers.
  const label = `B2B — ${cycle.caption}: ${steps.map((step) => cycle.steps[step.id]).join(', ')}`;

  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="h-auto w-full" role="img" aria-label={label}>
      {/* The track the stages sit on. */}
      <circle cx={C} cy={C} r={RING} fill="none" stroke="var(--t-line)" strokeWidth="14" />

      {/* Between each pair of stages, a marker on the track pointing the way
          round, in the colour of the stage it leads to. */}
      {steps.map((step, i) => {
        const deg = (i + 0.5) * slice;
        const p = onRing(deg);
        const next = steps[(i + 1) % steps.length];
        return (
          <g key={step.id} transform={`translate(${round(p.x)} ${round(p.y)}) rotate(${deg})`}>
            <circle r="9.5" fill="var(--t-surface)" stroke={next.color} strokeWidth="2" />
            <path
              d="M-2 -4 2 0 -2 4"
              fill="none"
              stroke={next.color}
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        );
      })}

      {/* The centre: a handshake — the agreement the whole cycle turns around.
          No words; the stages carry those. */}
      <circle
        cx={C}
        cy={C}
        r={HUB}
        fill="var(--t-ink)"
        stroke="var(--t-surface)"
        strokeWidth="4"
        style={{ filter: 'drop-shadow(0 5px 7px rgb(0 0 0 / 0.2))' }}
      />
      <IconPart
        name="lucide:handshake"
        x={C - HANDSHAKE / 2}
        y={C - HANDSHAKE / 2}
        width={HANDSHAKE}
        height={HANDSHAKE}
        stroke="var(--t-bg)"
        strokeWidth="1.4"
      />

      {/* Stages: a coloured disc with the icon, the name, and its place in the order. */}
      {steps.map((step, i) => {
        const p = onRing(i * slice);
        const x = round(p.x);
        const y = round(p.y);
        return (
          <g key={step.id}>
            {/* The disc, lifted off the page by a soft shadow and a paper rim. */}
            <circle
              cx={x}
              cy={y}
              r={NODE}
              fill={step.color}
              stroke="var(--t-surface)"
              strokeWidth="4"
              style={{ filter: 'drop-shadow(0 5px 7px rgb(0 0 0 / 0.2))' }}
            />
            <IconPart
              name={step.icon}
              x={x - ICON / 2}
              y={y - ICON - 3}
              width={ICON}
              height={ICON}
              stroke="#ffffff"
              strokeWidth="1.75"
            />
            <text
              x={x}
              y={y + 21}
              textAnchor="middle"
              className="font-sans"
              fontSize="15"
              fontWeight="600"
              fill="#ffffff"
            >
              {cycle.steps[step.id]}
            </text>
            {/* The step number, on a paper badge ringed in the stage's colour. */}
            <circle
              cx={x - 38}
              cy={y - 38}
              r="13"
              fill="var(--t-surface)"
              stroke={step.color}
              strokeWidth="2.5"
            />
            <text
              x={x - 38}
              y={y - 33.5}
              textAnchor="middle"
              className="font-sans tabular-nums"
              fontSize="13"
              fontWeight="700"
              fill={step.color}
            >
              {i + 1}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
