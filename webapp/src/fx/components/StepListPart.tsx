// Numbered steps in a row: serif figure, title, one line of body. Data-driven;
// the page supplies the steps and any heading around them.
interface Step {
  title: string;
  body: string;
}

interface Props {
  steps: Step[];
}

export default function StepListPart({ steps }: Props) {
  return (
    <ol className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <li key={step.title} className="border-line border-t pt-5">
          <span className="figure text-3xl">{String(i + 1).padStart(2, '0')}</span>
          <h3 className="title-item mt-3">{step.title}</h3>
          <p className="text-muted mt-2 text-sm leading-relaxed">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
