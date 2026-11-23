import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { css } from "../../../../styled-system/css";
import { categories, programs, type Category } from "../_stories/programs.fixture";
import { ListItem } from "../list-item/list-item.component";
import { Tabs } from "./tabs.component";

const meta = {
  title: "Atoms/Tabs",
  component: Tabs,
  args: { label: "Program category", items: [], value: "L", onValueChange: () => {}, children: null },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

function ProgramTabs({ tone }: { tone: "light" | "dark" }) {
  const [category, setCategory] = useState<Category>("L");
  const [program, setProgram] = useState("L.00");
  return (
    <div className={css({ width: "300px" })}>
      <Tabs
        label="Program category"
        items={categories}
        value={category}
        onValueChange={setCategory}
        panelMaxHeight="220px"
        panelTone={tone}
      >
        <div role="listbox" aria-label="Programs">
          {programs[category].map((p) => (
            <ListItem
              key={p.code}
              tone={tone}
              code={p.code}
              selected={program === p.code}
              onSelect={() => setProgram(p.code)}
            >
              {p.name}
            </ListItem>
          ))}
        </div>
      </Tabs>
    </div>
  );
}

/** The program picker: category tabs over a scrollable program list. */
export const ProgramCategories: Story = { render: () => <ProgramTabs tone="light" /> };

export const DarkPanel: Story = { render: () => <ProgramTabs tone="dark" /> };
