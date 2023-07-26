This is a [Next.js](https://nextjs.org/) project that allows users to retrieve and decompress the abstract of research papers using their DOI (Digital Object Identifier). It leverages the OpenAlex API to access research articles and their abstracts.

## How to Use

1. Visit the projectt hosted on Vercel [https://summations-demo.vercel.app/](https://summations-demo.vercel.app/).
2. Enter the DOI of the research paper for which you want to retrieve the abstract.
3. Click on the "Get Abstract" button.
4. The application will make an API call to OpenAlex using the provided DOI and return the decompressed abstract as a single long paragraph.


## Local Development

- Install dependencies: npm install
- Change the constant value of BASE_URL(utils/Constants.ts) to http://localhost:3000/api
- Run the development server: npm run dev
- Open your browser and access http://localhost:3000 to use the application.

