# AI Development Rules for BM Imports

## Tech Stack

- **Frontend Framework**: React with functional components and hooks
- **Language**: JavaScript (with potential migration to TypeScript)
- **Styling**: Tailwind CSS with custom configuration
- **UI Components**: Flowbite and Flowbite React for pre-built components
- **Routing**: React Router for client-side navigation
- **Form Handling**: React IMask for input masking
- **Email Service**: EmailJS for contact form submissions
- **Icons**: Lucide React for consistent iconography
- **Build Tool**: Vite for fast development and production builds
- **Package Management**: npm

## Library Usage Rules

### UI and Styling
- Use **Tailwind CSS** for all custom styling and layout
- Leverage **Flowbite React** components for complex UI elements (modals, dropdowns, etc.)
- Use **Lucide React** icons exclusively for consistency
- Custom animations should use Tailwind's animation utilities or CSS keyframes

### Forms and Validation
- Implement form input masking with **React IMask**
- Use native HTML5 validation attributes where possible
- Handle form state with React's useState hook

### Routing
- Use **React Router** for all client-side navigation
- Define routes in the main App component
- Use programmatic navigation with useNavigate hook

### API Integration
- Use **EmailJS** for sending contact form data
- All API keys and sensitive data should be stored as environment variables
- Use async/await for API calls with proper error handling

### Images and Assets
- Store all images in the src/assets directory
- Import images directly in components rather than using public directory
- Optimize images for web use before importing

### Component Structure
- Create separate component files for reusable UI elements
- Use descriptive component names that match their function
- Implement responsive design using Tailwind's responsive prefixes
- Use React fragments to avoid unnecessary wrapper divs

### Performance and Best Practices
- Implement lazy loading for images where appropriate
- Use React.memo for components that render frequently
- Optimize bundle size by importing only necessary modules
- Follow accessibility guidelines for all interactive elements