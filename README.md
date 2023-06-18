# 🎣WordWander Blog Website🎣

WordWander is a full-stack blog website built with Next.js, enabling users to create, share, view, and delete their own posts. It includes features like Google login for easy authentication, a dark/light mode toggle for personalized viewing, and a user-friendly interface.

## Features

- Google login: Users can log in to the website using their Google accounts, simplifying the authentication process.
- Authentication with Auth0: User authentication is handled securely with Auth0, ensuring data protection and access control.
- Dark/light mode toggle: Users can switch between a dark and light mode theme to suit their preferences.
- Post creation and uploading: Users can create and upload their own blog posts, sharing their thoughts and experiences with others.
- Post deletion: Users can delete their own posts if they wish to remove them from the website.
- Post viewing in detail: Users can view individual blog posts in detail, reading the entire content and associated information.

## Technologies Used

- Next.js: A React framework for building server-side rendered and statically generated applications.
- Auth0: An authentication and authorization platform for securing user authentication in applications.
- Pure CSS: A lightweight and minimalist CSS framework for building responsive and clean web interfaces.
- MongoDB: A NoSQL database for storing and managing user data and blog posts.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Pr454th/Word-Wander.git
```

2. Install the dependencies:

```bash
cd Word-Wander
npm install
```

3. Set up environment variables:

- Create a `.env.local` file in the root directory.
- Add the required environment variables, such as Auth0 credentials and MongoDB connection string.

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and visit `http://localhost:3000` to see the WordWander website.

## Contributing

Contributions are welcome! If you have any ideas, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is licensed under the [MIT License](LICENSE).
