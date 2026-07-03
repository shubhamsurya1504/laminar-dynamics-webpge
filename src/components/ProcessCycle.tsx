type Step = { label: string };

type ProcessCycleProps = {
  steps: Step[];
};

const CX = 250;
const CY = 250;
const ORBIT_R = 158;
const NODE_R = 62;

function nodePosition(index: number, total: number) {
  const angle = -Math.PI / 2 + (index * 2 * Math.PI) / total;
  return {
    x: CX + ORBIT_R * Math.cos(angle),
    y: CY + ORBIT_R * Math.sin(angle),
    angle,
  };
}

function arrowPosition(index: number, total: number) {
  const angle = nodePosition(index, total).angle + Math.PI / total;
  const r = ORBIT_R - 6;
  return {
    x: CX + r * Math.cos(angle),
    y: CY + r * Math.sin(angle),
    rotation: (angle * 180) / Math.PI + 90,
  };
}

export default function ProcessCycle({ steps }: ProcessCycleProps) {
  const items = steps.length > 0 ? steps : [];
  const total = items.length;

  if (total === 0) return null;

  return (
    <div className="mx-auto w-full max-w-[420px]">
      <svg
        viewBox="0 0 500 500"
        className="h-auto w-full"
        role="img"
        aria-label="Design, Simulate, Fabricate, Fly, Optimize process cycle"
      >
        {items.map((_, i) => {
          const arrow = arrowPosition(i, total);
          return (
            <g
              key={`arrow-${i}`}
              transform={`translate(${arrow.x} ${arrow.y}) rotate(${arrow.rotation})`}
            >
              <path
                d="M-14 -8 H8 L8 -14 L22 0 L8 14 L8 8 H-14 Z"
                fill="#8fa8bc"
              />
            </g>
          );
        })}

        {items.map((step, i) => {
          const { x, y } = nodePosition(i, total);
          return (
            <g key={`${step.label}-${i}`}>
              <circle
                cx={x}
                cy={y}
                r={NODE_R}
                fill="#3d6eb5"
                stroke="#ffffff"
                strokeWidth="3"
              />
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#ffffff"
                fontSize="22"
                fontWeight="600"
                fontFamily="var(--font-rajdhani), Rajdhani, sans-serif"
              >
                {step.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
