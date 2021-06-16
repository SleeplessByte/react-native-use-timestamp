# react-native-use-timestamp

This package provides a hook to give the current timestamp, but only when the application is not running any interactions.

## Installation

```bash
yarn add react-native-use-timestamp
```

Even though this package is _meant_ for the `react-native` ecosystem, it has bundles for CJS, ES, UMD, and modern browsers.

## Usage

```typescript
// Runs callback every number_of_milliseconds
const now = useInaccurateTimestamp(callback, { every: number_of_milliseconds })
```

