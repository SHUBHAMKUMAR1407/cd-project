# React Learning Lab

A hands-on React playground built with Vite. This repository contains small, focused examples for learning React fundamentals and hooks, along with a few reusable mini-projects.

## What you will find here

- React components, JSX, props and conditional rendering
- Lists, keys, fragments and event handling
- State management with `useState` and derived state
- Side effects with `useEffect`, including cleanup and API-fetching examples
- `useContext`, `useReducer`, `useRef` and `useId`
- Performance patterns with `React.memo`, `useMemo` and `useCallback`
- Controlled forms, login and registration examples
- A Todo List with add, complete, delete, clear-all and `localStorage` support
- A reusable on/off Toggle Switch component
- Styling examples using CSS, CSS Modules, inline styles, Tailwind CSS and styled-components

## Tech stack

- React 19
- Vite 7
- JavaScript (ES modules)
- Tailwind CSS
- styled-components
- React Icons
- Font Awesome

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm or Bun

### Install dependencies

```bash
npm install
```

Or, if you use Bun:

```bash
bun install
```

### Start the development server

```bash
npm run dev
```

The app runs on [http://localhost:5151](http://localhost:5151).

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server on port `5151` |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Current demo

The active entry point is `src/App.jsx`. At the moment, it renders the `UseCallback` example:

```jsx
import UseCallback from "./components/hooks/Memo/UseCallback";

const App = () => <UseCallback />;
```

Most other lessons are kept in the repository as separate components. To explore a different example, import the component you want in `src/App.jsx` and render it there.

For example, to try the Todo project:

```jsx
import { Todo } from "./projects/Todo/Todo";

const App = () => <Todo />;
```

## Project structure

```text
src/
├── api/                    # Local JSON data used by examples
├── components/             # React lessons and reusable components
│   └── hooks/              # Hook-focused examples
├── projects/
│   ├── Todo/               # Todo app with localStorage persistence
│   └── ToggleSwitch/       # On/off toggle component
├── App.jsx                 # Currently selected lesson/demo
├── main.jsx                # React application entry point
├── App.css                 # App-level styles
└── index.css               # Global styles
```

## Todo List features

The Todo example is available in `src/projects/Todo/` and demonstrates:

- Adding tasks through a controlled form
- Preventing empty and duplicate tasks
- Marking tasks complete or incomplete
- Deleting individual tasks
- Clearing all tasks
- Persisting tasks in the browser with `localStorage`
- Displaying a live date and time

## Learning notes

Additional explanations and practice notes are collected in [`src/source.md`](src/source.md). The repository is intentionally organized as a learning space, so some files contain commented-out lesson variations and experiments.

## Build and lint

Before sharing changes, run:

```bash
npm run lint
npm run build
```

## License

This project is intended for learning and experimentation.
