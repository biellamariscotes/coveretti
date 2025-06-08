<div align="center">
  <img src="public/brand/logo-with-name.png" alt="Coveretti Logo" width="300" />
</div>

<hr>

<br>

> ⚠️ **Work in Progress**: This project is currently under active development. Features and documentation may change frequently.

A powerful cover letter enhancement tool that helps you create compelling, personalized cover letters with AI-powered optimization.

## Project Status

🚧 **Currently in Development**

- ✅ Project setup and architecture  
- ✅ Tech stack selection and configuration  
- 🔄 Core enhancement functionality  
- 🔲 UI/UX implementation  
- 🔲 AI integration with Hugging Face  
- 🧪 Testing and optimization  

Stay tuned for updates as new features are implemented!

- **Multiple Enhancement Modes**: Choose from different enhancement styles to match your needs
- **AI-Powered Enhancement**: Leverages advanced AI to improve your cover letter content
- **Real-time Editing**: Built-in text editor for seamless writing experience
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface built with Tailwind CSS

## Tech Stack

| Component | Technology |
|-----------|------------|
| **Frontend Framework** | Next.js (App Router, React + RSC) |
| **State Management** | Zustand |
| **Database** | Firebase |
| **HTTP Requests** | Axios |
| **AI/ML API** | Hugging Face Interface |
| **UI Library** | Tailwind CSS / GSAP / Framer Motion |
| **Text Editor** | TipTap React |
| **Versioning** | Semantic Versioning |
| **Hosting** | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Hugging Face API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/coveretti.git
cd coveretti
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your environment variables:
```env
NEXT_PUBLIC_HUGGINGFACE_API_KEY=your_huggingface_api_key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Choose Enhancement Mode**: Select the type of enhancement that best fits your target job or industry
2. **Input Your Cover Letter**: Use the built-in editor to write or paste your existing cover letter
3. **Enhance**: Let the AI analyze and improve your content
4. **Review & Edit**: Make final adjustments using the integrated text editor
5. **Export**: Copy your enhanced cover letter for use in applications

## Enhancement Modes

- **Professional**: Formal tone suitable for corporate environments
- **Creative**: Engaging style for creative industries
- **Technical**: Technical language for engineering and IT roles
- **Executive**: Executive-level language for senior positions
- **Startup**: Dynamic tone for startup environments

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

### Project Structure

```
coveretti/
├── .github/            # GitHub workflows and templates
├── .next/              # Next.js build output
├── docs/               # Project documentation
├── node_modules/       # Dependencies
├── public/             # Static assets
├── src/                # Source code
│   ├── api/           # API routes and handlers
│   ├── app/           # Next.js App Router pages
│   ├── components/    # Reusable React components
│   ├── hooks/         # Custom React hooks
│   ├── interfaces/    # TypeScript interfaces
│   ├── lib/           # Utility functions and configurations
│   ├── stores/        # Zustand state management
│   ├── styles/        # Styling files
│   │   ├── palette/   # Color palette definitions
│   │   ├── _keyframe-animations.scss
│   │   ├── _variables.scss
│   │   └── globals.css
│   └── utils/         # Helper utilities
├── .gitignore         # Git ignore rules
├── .releaserc.json    # Semantic release configuration
├── eslint.config.mjs  # ESLint configuration
├── next-env.d.ts      # Next.js TypeScript declarations
├── next.config.ts     # Next.js configuration
├── package-lock.json  # Lock file for dependencies
├── package.json       # Project dependencies and scripts
├── postcss.config.mjs # PostCSS configuration
└── README.md          # Project documentation
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request


## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/biellamariscotes/coveretti/issues) on GitHub.

---

Built with ❤️ using Next.js