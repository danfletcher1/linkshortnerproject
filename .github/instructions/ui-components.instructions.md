---
description: Read this before modifying or creating UI components in the project.
---

# UI Component Rules

All UI elements in this app are built exclusively with **shadcn-ui**. Do not create custom components.

## Core Rules

- **shadcn-ui only**: Every UI element (buttons, inputs, dialogs, cards, badges, etc.) must use a shadcn-ui component. Never build custom equivalents from scratch.
- **No custom components**: If a shadcn-ui component exists for the use case, use it. Do not wrap or recreate it.
- **Adding components**: If a shadcn-ui component is not yet in the codebase, add it via the CLI (`npx shadcn@latest add <component>`) before using it.
- **Import path**: Always import from `@/components/ui/<component>`.
- **Styling**: Use Tailwind utility classes for layout and spacing adjustments. Do not write custom CSS for components already handled by shadcn-ui.

## Usage Pattern

```tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MyFeature() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Title</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Enter value" />
        <Button>Submit</Button>
      </CardContent>
    </Card>
  )
}
```
