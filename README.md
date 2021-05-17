# Find movie app

#### Tech stack
- React (based on CRA starter)
- Typescript
- Styled components
- React Query

#### Demo
Demo can be find here: https://confident-lamport-efbe77.netlify.app/
#### App structure
Application contain following directories: 
- components (react components)
- hooks (custom hooks)
- providers (provider components)
- types (typping for application)
- utils (others)

Application is based on provider pattern. We have provider component that helps us to share data acros the application.
Since application is very little we can use for it just one context.
React query was used as data fetching tool (I have never used this and i wanted to test it).
Debouncing is used on input in order to avoid to many http requests.
