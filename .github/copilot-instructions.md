# Shared Components Library - AI Coding Guide

## Architecture Overview

This is a React component library built with TypeScript and Vite, providing reusable UI components for Orbis Education applications. The library uses ESM/CJS dual builds and PostCSS with custom CSS variables.

**Key Structure:**

- `lib/` - Library source code (exports to `dist/` for distribution)
- `src/` - Development sandbox for testing components
- Components organized by function: `form/`, `layout/`, `navigation/`, `common/`, `dialogBox/`, `alerts/`

## Development Patterns

### Component Architecture

- **Default exports only** - All components use `export { default as ComponentName }`
- **TypeScript props interfaces** - Define props as inline types (not separate interfaces)
- **Functional components with hooks** - No class components
- **Controlled components** - All form inputs require `value` and `updateValue` props

Example component structure:

```typescript
type ComponentProps = {
  id: string;
  value: string;
  updateValue: Dispatch<SetStateAction<any>> | ((value: any) => void);
  // ... other props
};

const Component = ({ prop = defaultValue }: ComponentProps) => {
  // Component logic
};

export default Component;
```

### Dependency Integration

- **shared-functions** - Core utility library (github:orbis-education/shared-functions)
  - Use `isEmpty()`, `isEmptyArray()`, `parse()` for common operations
  - Import: `import { isEmpty, parse } from "shared-functions"`

### Styling System

- **PostCSS with nested CSS** - No CSS modules, component-scoped classes
- **CSS variables in `:root`** - Orbis brand colors defined in `utilities/variables.css`
- **Modular CSS imports** - Each component type has dedicated CSS files
- **Color naming**: `--primaryBlue`, `--darkBlue`, `--orange` with opacity variants (`_05`, `_03`, `_01`)

### Form Component Conventions

All form components follow consistent patterns:

- `id` - String identifier (pattern: match state variable name)
- `label` - Display label text
- `value` - Controlled value from parent state
- `updateValue` - State setter function
- `isRequired` - Boolean, adds red asterisk via `<RequiredFieldAsterisk />`
- `inlineError` - String for validation messages
- `disabled` - Boolean for disable state
- `hint` - Additional help text below label

### Build & Development

- **Scripts:**
  - `npm run dev` - Development server with hot reload
  - `npm run build` - Library build to `dist/`
  - `npm run lint` - ESLint with zero warnings policy
  - `npm run typecheck` - TypeScript compilation check
- **Vite config** - Dual format build (ESM + CJS), external React deps
- **ESLint** - TypeScript, React hooks, React refresh plugins

### Type Definitions

- Place shared types in `lib/types/` (e.g., `FormTypes.ts`, `NavigationTypes.ts`)
- Define minimal, focused type interfaces
- Use optional properties with defaults in component destructuring

### Navigation Pattern

Navigation components use `componentToLoad` prop to track active state and `returnActiveClass` helper function to conditionally apply "active" class based on current component.

### Hook Patterns

Custom hooks follow `use[FeatureName]` naming and return objects with:

- State variables
- Helper functions
- Event handlers

Example: `usePagination` returns `{ currentPageRecords, totalPages, setCurrentPageNumber, ... }`

## Key Files to Reference

- [`lib/index.ts`](lib/index.ts) - All exported components and hooks
- [`lib/components/form/FormInput.tsx`](lib/components/form/FormInput.tsx) - Form component pattern
- [`lib/css/utilities/variables.css`](lib/css/utilities/variables.css) - Brand color system
- [`vite.config.js`](vite.config.js) - Build configuration
- [`package.json`](package.json) - Dependencies and scripts
