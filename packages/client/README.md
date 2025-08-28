# Catalyst Client UI Components

A comprehensive collection of reusable UI components built with React and TypeScript, designed for modern web applications.

## 🚀 Features

- **TypeScript First**: Full TypeScript support with comprehensive type definitions
- **CSS Variables**: Customizable theming using CSS custom properties
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Accessibility**: Built with accessibility best practices
- **Modular**: Import only what you need
- **Customizable**: Extensive customization options through props and CSS variables

## 📦 Installation

```bash
npm install @catalyst/client
# or
yarn add @catalyst/client
# or
pnpm add @catalyst/client
```

## 🎨 Components

### Header Component
A flexible header component with navigation, search, and mobile menu support.

```tsx
import { Header } from '@catalyst/client';

const menuItems = [
  { id: '1', title: 'Home', url: '/' },
  { id: '2', title: 'About', url: '/about' },
  { 
    id: '3', 
    title: 'Products', 
    url: '/products',
    children: [
      { id: '3a', title: 'Category 1', url: '/products/cat1' },
      { id: '3b', title: 'Category 2', url: '/products/cat2' }
    ]
  }
];

<Header
  logo="/logo.png"
  menuItems={menuItems}
  onSearch={(query) => console.log('Search:', query)}
  onCartClick={() => console.log('Cart clicked')}
  onAccountClick={() => console.log('Account clicked')}
/>
```

### Footer Component
A comprehensive footer with multiple sections, social links, and responsive layout.

```tsx
import { Footer } from '@catalyst/client';

const footerLinks = [
  {
    id: '1',
    title: 'Company',
    links: [
      { id: '1a', title: 'About Us', url: '/about' },
      { id: '1b', title: 'Contact', url: '/contact' }
    ]
  }
];

const socialLinks = [
  { id: '1', title: 'Facebook', url: 'https://facebook.com', icon: '📘' },
  { id: '2', title: 'Twitter', url: 'https://twitter.com', icon: '🐦' }
];

<Footer
  logo="/logo.png"
  description="Your trusted source for quality products"
  links={footerLinks}
  socialLinks={socialLinks}
  copyright="© 2025 Your Company. All rights reserved."
/>
```

### Button Component
A versatile button component with multiple variants, sizes, and states.

```tsx
import { Button } from '@catalyst/client';

<Button variant="primary" size="large" loading={false}>
  Click Me
</Button>

<Button variant="outline" size="medium" disabled>
  Disabled Button
</Button>

<Button variant="danger" size="small" fullWidth>
  Delete Item
</Button>
```

**Variants**: `primary`, `secondary`, `outline`, `ghost`, `danger`
**Sizes**: `small`, `medium`, `large`

### Card Component
A flexible card component for displaying content with various styles.

```tsx
import { Card, CardHeader, CardBody, CardFooter } from '@catalyst/client';

<Card variant="elevated" padding="large" hover>
  <CardHeader>
    <h3>Card Title</h3>
  </CardHeader>
  <CardBody>
    <p>Card content goes here...</p>
  </CardBody>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

**Variants**: `default`, `elevated`, `outlined`, `flat`
**Padding**: `none`, `small`, `medium`, `large`
**Shadows**: `none`, `small`, `medium`, `large`

### Modal Component
A modal component with backdrop, keyboard support, and customizable sizes.

```tsx
import { Modal, ModalTrigger } from '@catalyst/client';

const [isOpen, setIsOpen] = useState(false);

<ModalTrigger onClick={() => setIsOpen(true)}>
  <Button>Open Modal</Button>
</ModalTrigger>

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  size="medium"
>
  <p>Modal content goes here...</p>
</Modal>
```

**Sizes**: `small`, `medium`, `large`, `full`

### Input Component
A flexible input component with validation, icons, and multiple variants.

```tsx
import { Input } from '@catalyst/client';

<Input
  label="Email Address"
  placeholder="Enter your email"
  type="email"
  variant="outlined"
  size="large"
  fullWidth
  leftIcon="📧"
  helperText="We'll never share your email"
/>

<Input
  label="Password"
  type="password"
  error="Password is required"
  variant="filled"
  size="medium"
/>
```

**Variants**: `default`, `outlined`, `filled`
**Sizes**: `small`, `medium`, `large`

## 🎨 Theming

All components use CSS custom properties for easy theming. You can override these variables in your CSS:

```css
:root {
  /* Button Variables */
  --button-primary-bg: #007bff;
  --button-primary-text: #ffffff;
  --button-radius: 6px;
  
  /* Card Variables */
  --card-bg: #ffffff;
  --card-border: #e5e5e5;
  --card-radius: 8px;
  
  /* Input Variables */
  --input-border: #d1d5db;
  --input-focus-border: #3b82f6;
  --input-radius: 6px;
  
  /* Header Variables */
  --header-bg: #ffffff;
  --header-text: #333333;
  --header-border: #e5e5e5;
  
  /* Footer Variables */
  --footer-bg: #f8f9fa;
  --footer-text: #666666;
  --footer-border: #e5e5e5;
}
```

## 📱 Responsive Design

All components are built with a mobile-first approach and include responsive breakpoints:

- **Mobile**: < 480px
- **Tablet**: < 768px
- **Desktop**: ≥ 768px

## ♿ Accessibility

Components include:
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- High contrast support

## 🔧 Customization

### CSS Classes
All components use BEM methodology for consistent and predictable class names.

### Props
Components accept standard HTML attributes and custom props for enhanced functionality.

### Styling
Use CSS variables, custom classes, or styled-components for advanced styling needs.

## 📚 Examples

See the [examples directory](./examples) for complete usage examples and advanced patterns.

## 🤝 Contributing

We welcome contributions! Please see our [contributing guide](../../CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.
