This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



## Notes

### Used Commands
    + npx create-next-app@latest => To create our Next.JS app
    
    +npm run dev => to run our Next.JS app

    + npm install @next-ui.org/react framer-motion => To install nextui and framer motion


### File Structure 
    + page.tsx => component file for a page
        - they represent the structure of a single page

        - similar to App.tsx

    + layout.tsx => a layout for a group of pages
        -it can represent an overall structure of multiple pages such as a nav/side bar.    

        - the root layout.tsx would be similar to the react index.html

### Routing
    + Next.JS will create routes to our page.tsx files based on our file structure
        - if you want to group files together inside a parent folder, but don't want that parent folder to show up in route, you can surround that folder's name in parenthesis
        Example: (pages)

### Rendering
    + Server Side Rendering (SSR) => when your code is rendered on the server and the server sends back a fully rendered static webpage
        - SSR cannot render anything that requires user interaction or the browser, such as buttons, inputs or hooks but they can have children that are client components to handle those

        - SSR is faster than rendering everything on the client

        - By default all components and pages are server components

    + Client Side Rendering (CSR) => when your code is sent and rendered on the client's system
        - This can be slower than SSR 

        - Client components cannot have child server components. Whenever you call a component inside of a client component it will become a client component, like their parent, it will be rendered on the client
        - client components can only have client children