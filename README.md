# Expo Camera Preview Not Showing Immediately

This repository demonstrates a common issue with the Expo Camera API: the preview not showing immediately after component mount.  The issue arises from attempting to access the camera preview before it's fully initialized. The solution involves checking the camera's status before rendering the preview.

## Bug
The `bug.js` file shows the problem:  the camera preview is rendered directly, leading to an error or blank screen.

## Solution
The `bugSolution.js` file demonstrates the solution: using the `cameraType` and `status` from the `Camera` component to conditionally render the preview only after the camera is ready.