# AI Rules for Clínica Viddas TV Display Application

This document outlines the technical stack and coding guidelines for developing the Clínica Viddas TV Display application. Adhering to these rules ensures consistency, maintainability, and optimal performance.

## Tech Stack Overview

*   **Framework:** React (version 18.x)
*   **Language:** TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS for utility-first styling. A custom color palette is defined in `tailwind.config.js`.
*   **Icons:** Lucide React for SVG icons.
*   **State Management:** React's built-in `useState` and `useEffect` hooks for local component state.
*   **HTTP Requests:** Native `fetch` API for data retrieval (e.g., weather data).
*   **Date & Time:** Native JavaScript `Date` object and `toLocaleTimeString`/`toLocaleDateString` for formatting.
*   **Project Structure:** Components are organized in `src/components/`, constants in `src/constants.ts`, and types in `src/types.ts`.

## Library Usage Rules

*   **UI Components:**
    *   **Existing Components:** Modify existing components using their current structure and Tailwind CSS.
    *   **New Components:** For new UI elements, prioritize using `shadcn/ui` components. If a suitable `shadcn/ui` component doesn't exist or requires significant customization, create a new custom component using Tailwind CSS.
*   **Icons:** Always use `lucide-react` for all icons. Do not use custom SVG icons or other icon libraries.
*   **Styling:** Exclusively use Tailwind CSS classes for all styling. Avoid inline styles or separate CSS modules unless absolutely necessary for specific animations or global overrides (like in `index.css`).
*   **State Management:** For component-level state, use React's `useState` and `useEffect`. For global state management, if needed in the future, a dedicated library (e.g., Zustand, React Context API) will be introduced and documented here.
*   **Data Fetching:** Use the native `fetch` API for making HTTP requests.
*   **Routing:** The application currently operates as a single-page display without explicit routing. If multi-page navigation becomes a requirement, `react-router-dom` should be integrated, and routes should be managed within `src/App.tsx`.
*   **Utility Functions:** Create small, focused utility files (e.g., `src/utils/toast.ts` if toast notifications are added) for reusable logic.
*   **Constants & Types:** All application-wide constants should reside in `src/constants.ts`, and all TypeScript interfaces/types in `src/types.ts`.