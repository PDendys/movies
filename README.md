# Find movie app
Simple application for the finding movies. This one was build in order to present web technologies to the children (during primary school showcase).

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

#### Environment
Node 16.0.0 is required because react scripts packages was used. In order have possibility to use old node version nvm was introduced.