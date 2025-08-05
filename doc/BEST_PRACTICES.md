# Frontend Development Best Practices

This document outlines the best practices and conventions for developing the Vue.js frontend for the FHIR Snapshot module. Adhering to these guidelines will ensure consistency, maintainability, and scalability.

## 1. Core Principles & Technologies

- **Framework:** Vue.js 3 (Composition API)
- **Language:** TypeScript
- **State Management:** Pinia
- **Styling:** Bootstrap 5.3 (via CDN)
- **Icons:** Bootstrap Icons and Font Awesome (via CDN)
- **Build Tool:** Vite

## 2. File Structure & Naming

- **Components:** All Vue components should be in `src/components/` and organized into subdirectories based on feature (e.g., `monitor/`, `setup/`). Component files should be named in **PascalCase** (e.g., `MonitorTable.vue`).
- **Pages:** Page-level components that are mapped to routes should be in `src/pages/`.
- **Stores:** Pinia stores are located in `src/store/`.
- **Models:** TypeScript interfaces and types for our data structures are located in `src/models/`.
- **API Layer:** All communication with the backend should be abstracted in `src/API/`.
- **Case Sensitivity:** Be mindful that the filesystem may be case-insensitive, but the build process is not. Always use the correct casing for file paths in imports (e.g., `import ... from '@/API/mock'`).

## 3. Vue Components

### Composition API with `<script setup>`

All new components should use the Composition API with the `<script setup>` syntax. This is the current standard and leads to more concise and readable code.

### Styling

- **Utility-First CSS:** Prioritize using **Bootstrap 5.3 utility classes** (`p-3`, `mb-3`, `d-flex`, etc.) for layout and styling.
- **Avoid Custom CSS:** Do not write custom CSS in `<style>` blocks unless absolutely necessary. If you must, keep it scoped to the component using the `scoped` attribute.
- **Icons:** Use Bootstrap Icons (`bi`) or Font Awesome (`fas`) classes for icons.

### Component Interaction

- **Props for Input:** Components should receive data from their parents via `defineProps`.
- **Emits for Output:** Components should communicate with their parents by emitting events with `defineEmits`.
- **Avoid Direct DOM Manipulation:** Do not use vanilla JavaScript (e.g., `document.getElementById`) to manipulate the DOM. This can conflict with Vue's virtual DOM.
  - For simple show/hide logic, use the `v-show` directive.
  - If you must interact with a DOM element directly (e.g., to integrate a third-party library), use template refs (`ref()` or `useTemplateRef()`).

## 4. State Management (Pinia)

- **Store Structure:** Follow the setup store pattern (return a function from `defineStore`).
- **State:**
  - Use `ref()` for reactive primitives (strings, numbers, booleans).
  - Use `ref()` for reactive objects (`ref({})`) as it's more flexible for reassignment than `reactive()`.
- **Actions:**
  - All asynchronous operations and API calls must be performed within store actions.
  - Actions should contain the `try...catch` blocks for error handling.
  - Use the `useErrorsStore` to globally manage and display errors.
- **Getters:** Use `computed` properties for derived state.

**Example Store Structure:**

```typescript
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useErrorsStore } from './ErrorsStore'
import { api } from '@/API'

export const useMyStore = defineStore('myStore', () => {
  const errorsStore = useErrorsStore()
  const loading = ref(false)
  const items = ref([])

  const myComputedProperty = computed(() => items.value.length > 0)

  async function fetchItems() {
    loading.value = true
    try {
      items.value = await api.getItems()
    } catch (err) {
      errorsStore.addError(err, 'myStore')
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    items,
    myComputedProperty,
    fetchItems,
  }
})
```

## 5. TypeScript & Data Models

- **Strict Mode:** The project is configured with `strict: true`. All code should be strongly typed.
- **Interfaces and Types:** Define clear interfaces and types for all data structures in the `src/models/` directory.
- **Enums:** Due to the `"erasableSyntaxOnly": true` setting in `tsconfig.app.json`, traditional `enum` syntax is not allowed. Use `const` objects with `as const` instead.

**Example Enum Replacement:**

```typescript
// Instead of:
// export enum FetchStatus { Pending = 'Pending', ... }

// Use this pattern:
export const FetchStatus = {
    Pending: 'Pending',
    Fetching: 'Fetching',
    Completed: 'Completed',
    Failed: 'Failed',
} as const;

export type FetchStatus = (typeof FetchStatus)[keyof typeof FetchStatus];
```

## 6. Modals and Asynchronous UI

When using modals that require user input, wrap the modal's `show()` method in a `Promise` to allow for `async/await` syntax in the parent component. This makes the code for handling modal results much cleaner.

See `AddMrnModal.vue` for a reference implementation.
