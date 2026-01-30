---
name: uni-network
description: Promise-based HTTP client for uni-app - axios-inspired API with uni.request as default transport
---

# uni-network

Promise-based HTTP client for uni-app, inspired by axios@0.27.2. Uses uni.request/uni.uploadFile/uni.downloadFile as the underlying transport.

## Installation

```bash
npm i @uni-helper/uni-network
```

## Features

- Promise-based API
- Request/response interceptors
- Request cancellation
- TypeScript support
- Composition API integration
- Upload/download support

## Basic Usage

```ts
import { un } from '@uni-helper/uni-network'

// GET request
un('/user/123')

// POST request
un({
  method: 'POST',
  url: '/user/123',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone',
  },
})
```

## Request Aliases

```ts
import { un } from '@uni-helper/uni-network'

// HTTP verbs
un.get('/users')
un.post('/users', { name: 'John' })
un.put('/users/1', { name: 'Jane' })
un.patch('/users/1', { age: 30 })
un.delete('/users/1')

// Upload/download
un.upload({
  url: '/upload',
  filePath: tempFilePath,
  name: 'file',
})

un.download({
  url: '/files/report.pdf',
})
```

## Creating an Instance

```ts
import { createUniNetwork } from '@uni-helper/uni-network'

const http = createUniNetwork({
  baseURL: 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Use the instance
http.get('/users')
```

## Interceptors

```ts
import { un } from '@uni-helper/uni-network'

// Request interceptor
un.interceptors.request.use(
  (config) => {
    // Add auth token
    const token = uni.getStorageSync('token')
    if (token) {
      config.headers = config.headers || {}
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
un.interceptors.response.use(
  (response) => {
    // Transform response data
    return response.data
  },
  (error) => {
    // Handle errors globally
    if (error.statusCode === 401) {
      uni.redirectTo({ url: '/pages/login/index' })
    }
    return Promise.reject(error)
  }
)
```

## Configuration

```ts
interface UniNetworkConfig {
  // URL
  url?: string
  // Base URL
  baseURL?: string
  // Method
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | ...
  // Headers
  headers?: Record<string, string>
  // Request data
  data?: any
  // Query params
  params?: Record<string, any>
  // Timeout in ms
  timeout?: number
  // Response type
  responseType?: 'text' | 'arraybuffer'
  // Data type
  dataType?: 'json' | 'string'
  // Enable http2
  enableHttp2?: boolean
  // Enable quic
  enableQuic?: boolean
  // Enable cache
  enableCache?: boolean
  // SSL verify
  sslVerify?: boolean
}
```

## Request Cancellation

```ts
import { un } from '@uni-helper/uni-network'

const controller = new AbortController()

un.get('/long-request', {
  signal: controller.signal,
})

// Cancel after 5 seconds
setTimeout(() => {
  controller.abort()
}, 5000)
```

## Error Handling

```ts
import { un, UniNetworkError } from '@uni-helper/uni-network'

try {
  const response = await un.get('/users')
} catch (error) {
  if (error instanceof UniNetworkError) {
    console.log('Request failed:', error.message)
    console.log('Status:', error.statusCode)
  }
}
```

## Composition API

```ts
import { useUniNetwork } from '@uni-helper/uni-network'

const { data, error, loading, execute } = useUniNetwork({
  url: '/users',
  method: 'GET',
})

// Execute manually
await execute()
```

## TypeScript Support

```ts
import { un } from '@uni-helper/uni-network'

interface User {
  id: number
  name: string
  email: string
}

// Typed response
const { data } = await un.get<User>('/users/1')
console.log(data.name) // Type-safe access
```

<!--
Source references:
- https://github.com/uni-helper/uni-network
- https://uni-helper.js.org/uni-network
-->
