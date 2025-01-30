# Job Finder React Native Application

## Overview
A sophisticated mobile application built with React Native and Expo that helps users find job opportunities. The app provides a seamless experience for job searching with features like nearby jobs, popular jobs, detailed job views, and advanced search capabilities.

## Features

### 1. Home Screen
- Personalized welcome message
- Dynamic job type selection (Full-time, Part-time, Contractor)
- Search functionality with custom input field
- Popular jobs section with horizontal scrolling
- Nearby jobs section with vertical list

### 2. Job Search
- Real-time job search functionality
- Advanced filtering options
- Pagination support for search results
- Dynamic loading states with activity indicators

### 3. Job Details
- Comprehensive job information display
- Company details with logo
- Job description tabs (About, Qualifications, Responsibilities)
- Share job functionality
- Apply now button with external link
- Pull-to-refresh functionality

## Technology Stack

### Core Technologies
- React Native
- Expo Router for navigation
- Axios for API integration

### UI Components
- Custom styled components
- Native components (FlatList, ScrollView, etc.)
- Activity indicators for loading states
- Custom cards for job listings

### State Management
- React Hooks (useState, useCallback)
- Custom hooks for data fetching (useFetch)

### API Integration
- JSearch API from RapidAPI
- RESTful API calls with Axios
- Error handling and loading states

## Project Structure

```
├── app/                    # Main application screens
│   ├── _layout.js         # Root layout configuration
│   ├── index.js           # Entry point
│   ├── home.js            # Home screen
│   ├── job-details/       # Job details screen
│   └── search/            # Search functionality
├── components/            # Reusable UI components
│   ├── common/            # Shared components
│   ├── home/              # Home screen components
│   └── jobdetails/        # Job details components
├── constants/             # App constants and theme
├── assets/               # Static assets
│   ├── fonts/            # Custom fonts
│   ├── icons/            # App icons
│   └── images/           # Images
├── styles/               # Global styles
├── utils/                # Utility functions
└── hook/                 # Custom React hooks
```

## Component Details

### Home Components
1. **Welcome (components/home/welcome/Welcome.jsx)**
   - Handles user greeting
   - Search input functionality
   - Job type selection tabs

2. **Popularjobs (components/home/popular/Popularjobs.jsx)**
   - Displays popular job listings
   - Horizontal scrollable list
   - Job card selection handling

3. **Nearbyjobs (components/home/nearby/Nearbyjobs.jsx)**
   - Shows nearby job opportunities
   - Vertical scrollable list
   - Quick navigation to job details

### Job Details Components
1. **Company (components/jobdetails/company/Company.jsx)**
   - Displays company information
   - Company logo handling
   - Location information

2. **JobTabs**
   - Tab navigation for job details
   - About, Qualifications, Responsibilities sections

3. **JobFooter**
   - Apply now functionality
   - External link handling

## API Integration

### JSearch API Configuration
```javascript
const options = {
  method: "GET",
  url: `https://jsearch.p.rapidapi.com/search`,
  headers: {
    "X-RapidAPI-Key": 'YOUR_API_KEY',
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com"
  },
  params: {
    query: searchTerm,
    page: pageNumber
  }
};
```

### Custom Hook: useFetch
Location: `hook/useFetch.js`
- Handles API requests
- Manages loading states
- Error handling
- Data caching

## Installation Guide

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
- Create a RapidAPI account
- Get API key for JSearch API
- Configure API key in the project

4. Start the development server
```bash
npm start
# or
yarn start
```

## Usage

### Running the App
1. Start the development server
2. Use Expo Go app on your mobile device
3. Scan the QR code from terminal

### Development
1. Install Expo CLI globally
```bash
npm install -g expo-cli
```

2. Start development server
```bash
expo start
```

3. Choose platform
- Press 'a' for Android
- Press 'i' for iOS
- Press 'w' for web

## State Management

### Global State
- Utilizes React's Context API when needed
- Custom hooks for data fetching and caching

### Local State
- Component-level state management using useState
- Efficient state updates with useCallback

## Styling

### Theme Configuration
Location: `constants/theme.js`
- Color palette
- Font families
- Size constants

### Style Modules
- Component-specific styles
- Responsive design considerations
- Platform-specific adjustments

## Performance Optimization

1. **Image Optimization**
   - Lazy loading for images
   - Fallback images for failed loads
   - Proper image sizing

2. **List Rendering**
   - FlatList for efficient list rendering
   - Proper key implementation
   - List item recycling

3. **Data Fetching**
   - Cached API responses
   - Pagination implementation
   - Error boundary implementation

## Contributing

1. Fork the repository
2. Create your feature branch
```bash
git checkout -b feature/AmazingFeature
```
3. Commit your changes
```bash
git commit -m 'Add some AmazingFeature'
```
4. Push to the branch
```bash
git push origin feature/AmazingFeature
```
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- React Native community
- Expo team
- RapidAPI and JSearch API
- Contributors and maintainers

## Contact

Prashant Koirala - prashantkoirala465@gmail.com

Project Link: https://github.com/prashantkoirala465/Job-Finder-using-React-Native