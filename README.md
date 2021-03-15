# ElectReact Template

A simple template to make a desktop app using create-react-app and electronjs

## Getting Started

Install the Dependecies and DevDependencies

```
npm install
```

Run the application

```
npm run start
```

### Note

- The original script was modified. See "package.json"
- Desktop app is set to fullscreen with minimum width and height. Configure it on "public/electron.js"
- When in development mode electron loads the react app via http://localhost:3000 so make sure nothing uses port 3000

## Deployment

This command create a folder called build(reactjs) and dist(reactjs). The folder is the only thing you need for deployment

```
npm run build
```
