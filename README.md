# FlagTastic

A fun and interactive app designed to enhance the language-switching experience through engaging activities and vibrant flags. Utilizing i18n libraries, Material UI, and Tailwind CSS, FlagTastic provides a seamless interface for users to explore multiple languages.

## Features to be included

- **Language Flags**: Visual representation of available languages for easy identification.
- **Text Preview Area**: Users can input text and see real-time translations, helping them understand the language switch.
- **Language Switch Animation**: Smooth animations enhance the user experience when changing languages.
- **Themed Backgrounds**: Backgrounds that change based on the selected language, adding a dynamic visual element.

i18n libraries are used for the language swich feature along with material ui and tailwind css for ui.

Steps to use i18n for language switch feature

### 1. Installation
Begin by installing the necessary dependencies using npm:

```bash
npm install i18next react-i18next
```

### 2. Project Structure
Create a dedicated folder for i18n in the src directory to keep your language files organized:

src/
├── i18n/
│   ├── en.json
│   ├── my.json
│   ├── ko.json
│   └── index.js (Initialize here)
└── ...

### 3. Configure i18n
a. Import the i18n Configuration
In your project's index.js file, import the i18n configuration folder to initialize it:

b. Create Language JSON Files
Define a JSON file for each language you want to support. Each file should contain consistent keys for translations. You can check the files in my project for example.

c. Initialize i18n Configuration
Create an index.js file in your i18n folder to set up the i18n configuration.
You can check the code in my i18n.js file.

## 4. Using Translations in Components
To utilize translations in your React components, import the useTranslation hook from react-i18next: const { t, i18n } = useTranslation();

## 5. Implement Language Switching
Use i18n.changeLanguage(selected_language_parameter) to handle language switch.