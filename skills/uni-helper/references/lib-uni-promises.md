---
name: uni-promises
description: Promise wrappers for uni-app APIs - convert callback-based APIs to Promise-based
---

# uni-promises

Promise wrappers for uni-app's callback-based APIs. Convert uni-app APIs to return Promises for better async/await support.

## Installation

```bash
npm i @uni-helper/uni-promises
```

## Usage

Instead of using callbacks:

```ts
// Original callback style
uni.request({
  url: 'https://api.example.com',
  success: (res) => {
    console.log(res.data)
  },
  fail: (err) => {
    console.error(err)
  },
})
```

Use Promises:

```ts
import { request } from '@uni-helper/uni-promises'

// Promise style
const res = await request({
  url: 'https://api.example.com',
})
console.log(res.data)
```

## Available APIs

Most uni-app APIs are wrapped:

### Network
- `request` - HTTP request
- `uploadFile` - File upload
- `downloadFile` - File download
- `connectSocket` - WebSocket

### Storage
- `setStorage` - Set storage
- `getStorage` - Get storage
- `removeStorage` - Remove storage
- `clearStorage` - Clear all storage
- `getStorageInfo` - Storage info

### Media
- `chooseImage` - Select images
- `chooseVideo` - Select video
- `chooseMedia` - Select media
- `previewImage` - Preview images
- `saveImageToPhotosAlbum` - Save image
- `compressImage` - Compress image

### File
- `saveFile` - Save file
- `getFileInfo` - File info
- `getSavedFileList` - Saved files list
- `removeSavedFile` - Remove saved file
- `openDocument` - Open document

### Location
- `getLocation` - Get location
- `chooseLocation` - Choose location
- `openLocation` - Open location

### Device
- `getSystemInfo` - System info
- `getNetworkType` - Network type
- `scanCode` - QR/barcode scan
- `setClipboardData` - Copy to clipboard
- `getClipboardData` - Get clipboard

### UI
- `showToast` - Show toast
- `showModal` - Show modal
- `showActionSheet` - Show action sheet
- `showLoading` - Show loading
- `hideLoading` - Hide loading
- `showNavigationBarLoading` - Nav loading
- `hideNavigationBarLoading` - Hide nav loading
- `setNavigationBarTitle` - Set nav title
- `setNavigationBarColor` - Set nav color
- `pageScrollTo` - Scroll to position

### Navigation
- `navigateTo` - Navigate to page
- `redirectTo` - Redirect to page
- `reLaunch` - Re-launch app
- `switchTab` - Switch tab
- `navigateBack` - Go back

### Login
- `login` - User login
- `checkSession` - Check session
- `getUserProfile` - Get user profile
- `getUserInfo` - Get user info

### Payment
- `requestPayment` - Request payment

## Example Usage

```ts
import {
  showModal,
  showToast,
  getStorage,
  navigateTo,
  getSystemInfo,
  chooseImage,
  uploadFile,
} from '@uni-helper/uni-promises'

async function handleUserAction() {
  // Show confirmation
  const { confirm } = await showModal({
    title: 'Confirm',
    content: 'Are you sure?',
  })

  if (!confirm) return

  try {
    // Get cached data
    const { data: token } = await getStorage({ key: 'token' })

    // Get system info
    const systemInfo = await getSystemInfo()
    console.log('Platform:', systemInfo.platform)

    // Select image
    const { tempFilePaths } = await chooseImage({
      count: 1,
      sizeType: ['compressed'],
    })

    // Upload file
    const uploadRes = await uploadFile({
      url: 'https://api.example.com/upload',
      filePath: tempFilePaths[0],
      name: 'file',
    })

    await showToast({
      title: 'Success!',
      icon: 'success',
    })

    // Navigate
    await navigateTo({
      url: '/pages/success/index',
    })
  } catch (error) {
    await showToast({
      title: error.message || 'Failed',
      icon: 'error',
    })
  }
}
```

## Error Handling

All wrapped APIs reject with standard Error objects:

```ts
import { request } from '@uni-helper/uni-promises'

try {
  const res = await request({ url: 'https://api.example.com' })
} catch (error) {
  // error.message contains the fail callback message
  console.error('Request failed:', error.message)
}
```

<!--
Source references:
- https://github.com/uni-helper/uni-promises
- https://uni-helper.js.org/uni-promises
-->
