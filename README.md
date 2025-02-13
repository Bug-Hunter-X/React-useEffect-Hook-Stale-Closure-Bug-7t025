# React useEffect Hook Stale Closure Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook and stale closures.  The bug arises when asynchronous operations (like API calls) are not properly handled within the effect, leading to unexpected behavior.

## Bug Description

The `bug.js` file contains a component that uses the `useEffect` hook to log the current count and perform a simulated API call. However, the API call uses the `count` variable from the closure, which might be outdated by the time the API response arrives, resulting in unexpected state.

## Solution

The `bugSolution.js` file provides a corrected version of the component.  The solution demonstrates how to avoid the stale closure problem by using functional updates within `setCount` and ensuring that the asynchronous operations correctly use the latest state.

## How to Reproduce

1. Clone the repository
2. Navigate to the directory
3. Run `npm install` to install dependencies
4. Run `npm start` to start the development server
5. Observe the console logs and the counter behavior in both the buggy and corrected versions of the component.
