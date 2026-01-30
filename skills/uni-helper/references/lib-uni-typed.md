---
name: uni-typed
description: TypeScript type definitions for uni-app templates - complete type safety for uni-app components
---

# uni-typed

TypeScript type definitions for uni-app template sections. Provides complete type safety and IntelliSense for uni-app components.

## Installation

```bash
# For uni-app
npm i -D @uni-helper/uni-app-types

# For uni-ui
npm i -D @uni-helper/uni-ui-types

# For uni-cloud
npm i -D @uni-helper/uni-cloud-types
```

## Setup

### Uni-app Types

```json
// tsconfig.json
{
  "compilerOptions": {
    "types": ["@uni-helper/uni-app-types"]
  }
}
```

### Uni-ui Types

```json
// tsconfig.json
{
  "compilerOptions": {
    "types": [
      "@uni-helper/uni-app-types",
      "@uni-helper/uni-ui-types"
    ]
  }
}
```

## Features

- Type-safe template event handlers
- Component prop type checking
- Custom event type definitions
- Ref type inference for components

## Component Types

### Template Type Safety

```vue
<script setup lang="ts">
import { ref } from 'vue'

const inputValue = ref('')
const count = ref(0)

const handleInput = (e: UniHelper.InputOnInputEvent) => {
  inputValue.value = e.detail.value
}

const handleChange = (e: UniHelper.SwitchOnChangeEvent) => {
  console.log(e.detail.value)
}
</script>

<template>
  <!-- Type-safe component usage -->
  <input
    type="text"
    :value="inputValue"
    @input="handleInput"
  />

  <switch :checked="true" @change="handleChange" />
</template>
```

### Component Ref Types

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Type-safe component refs
const videoRef = ref<UniHelper.VideoInstance>()
const mapRef = ref<UniHelper.MapInstance>()

onMounted(() => {
  // IntelliSense for component methods
  videoRef.value?.play()
  videoRef.value?.pause()
  videoRef.value?.seek(100)

  mapRef.value?.moveToLocation({
    latitude: 39.9,
    longitude: 116.4,
  })
})
</script>

<template>
  <video ref="videoRef" src="..." />
  <map ref="mapRef" />
</template>
```

## Event Types

### Common Event Types

```ts
// Input events
UniHelper.InputOnInputEvent
UniHelper.InputOnBlurEvent
UniHelper.InputOnFocusEvent

// Form events
UniHelper.SwitchOnChangeEvent
UniHelper.CheckboxOnChangeEvent
UniHelper.RadioOnChangeEvent
UniHelper.PickerOnChangeEvent
UniHelper.SliderOnChangeEvent

// Media events
UniHelper.VideoOnPlayEvent
UniHelper.VideoOnPauseEvent
UniHelper.VideoOnEndedEvent
UniHelper.VideoOnTimeUpdateEvent

// Touch events
UniHelper.ViewOnTouchstartEvent
UniHelper.ViewOnTouchmoveEvent
UniHelper.ViewOnTouchendEvent
UniHelper.ViewOnTapEvent
UniHelper.ViewOnLongpressEvent

// Scroll events
UniHelper.ScrollViewOnScrollEvent
UniHelper.ScrollViewOnScrolltolowerEvent
UniHelper.ScrollViewOnScrolltoupperEvent
```

### Custom Events

Define custom event types for your components:

```vue
<script setup lang="ts">
// Child component
const emit = defineEmits<{
  change: [value: string]
  submit: [data: { id: number; name: string }]
}>()
</script>
```

```vue
<script setup lang="ts">
// Parent component
import type { MyComponentOnChangeEvent } from './types'

const handleChange = (e: MyComponentOnChangeEvent) => {
  console.log(e.detail.value)
}
</script>

<template>
  <my-component @change="handleChange" />
</template>
```

## Why uni-typed?

DCloud's `@dcloudio/types` only provides TypeScript support for script sections. uni-typed fills the gap for template section type safety, providing:

- Component prop validation
- Event handler type checking
- Method IntelliSense on component refs
- Better IDE support (VS Code, WebStorm)

## Migration from v0 to v1

See the [migration guide](https://uni-helper.js.org/uni-typed/other/migrate-v0-to-v1) for upgrading instructions.

<!--
Source references:
- https://github.com/uni-helper/uni-typed
- https://uni-helper.js.org/uni-typed
-->
