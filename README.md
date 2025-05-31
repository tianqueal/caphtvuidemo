# CAPH TV UI Demo - Samsung TV UI Demonstration

A simple Tizen web application showcasing a basic user interface for Samsung Smart TVs, built using the CAPH 3.1.0 framework. This example demonstrates a grid of interactive "TV" elements that can be toggled on or off.

## Features

- Displays a 2x5 grid of "Smart TV" items.
- Allows navigation and selection of TV items using a TV remote (D-pad).
- Toggles the visual state (on/off) of a TV item when selected.
- Uses `aria-pressed` attribute for accessibility.
- Basic project structure for a Tizen web application using CAPH and jQuery.

## Prerequisites

To build and run this project, you will need:

- **Node.js and npm:** Required for installing Bower. You can download them from [https://nodejs.org/](https://nodejs.org/).
- **Bower:** A package manager used for CAPH library dependencies. If you don't have it, install it globally via npm:
  ```bash
  npm install -g bower
  ```
  Alternatively, on macOS, you might be able to install it using Homebrew:
  ```bash
  brew install bower
  ```
- **Tizen Studio** installed with the TV extensions.
  - Ensure you have the necessary TV SDKs and emulator/device profiles configured.
  - Tizen Studio is the primary IDE and is required for the full SDK, emulator management, and device management.
- A configured Samsung TV emulator or a physical Samsung Smart TV set up for development.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/tianqueal/caphtvuidemo.git
    cd caphtvuidemo
    ```
2.  **Install CAPH Dependencies:**
    The CAPH library included in this project uses Bower to manage its own dependencies (like jQuery).
    Navigate to the CAPH library directory and install its dependencies:
    ```bash
    cd lib/caph/3.1.0
    bower install
    cd ../../..  # Return to the project root directory
    ```
3.  **Import into Tizen Studio:**

    - Open Tizen Studio.
    - Select "File" > "Import...".
    - Choose "Tizen" > "Tizen Project".
    - Select "Select root directory" and browse to the cloned `caphtvuidemo` folder.
    - Ensure the project is correctly recognised and click "Finish".

    **Alternative for Code Editing (VS Code):**

    - While Tizen Studio is required for the underlying SDK and build/deployment tools, you can use **Visual Studio Code** for code editing.
    - The official **Tizen (C#/.NET & Web)** extension for VS Code ([Marketplace Link](https://marketplace.visualstudio.com/items?itemName=tizen.vscode-tizen-csharp)) can provide a more familiar editing experience and integrate with some Tizen functionalities.
    - **Note:** You will still need Tizen Studio installed on your system for the extension to function correctly, as it relies on the Tizen SDK tools.

## Building the Project

The project can be built directly from Tizen Studio:

1.  Right-click on the `caphtvuidemo` project in the Project Explorer.
2.  Select "Build Project".

Alternatively, Tizen Studio might build the project automatically when you attempt to run it. The build process will generate a `.wgt` package file.

## Running the Project

### On a Simulator

1.  Right-click on the `caphtvuidemo` project in the Project Explorer.
2.  Select "Run As" > "Tizen Web Simulator Application".

### On a Physical Device

1.  Connect your Samsung Smart TV to your development machine and ensure it's in [developer mode](https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/tv-device.html).
2.  In Tizen Studio, select your TV from the target device dropdown (Connection Explorer).
3.  Right-click on the `caphtvuidemo` project.
4.  Select "Run As" > "Tizen Web Application".

## Project Structure

```
caphtvuidemo/
├── .vscode/            # VS Code specific settings (e.g., launch.json)
├── css/                # Custom CSS files
│   ├── fonts.css
│   └── style.css
├── fonts/              # Font files
├── img/                # Image assets
├── js/                 # Custom JavaScript files
│   └── app.js
├── lib/                # CAPH framework and its dependencies (jQuery, etc.)
│   └── caph/
│       └── 3.1.0/
├── .gitignore          # Specifies intentionally untracked files that Git should ignore
├── .project            # Tizen Studio/Eclipse project metadata file
├── .tproject           # Tizen Studio project metadata
├── config.xml          # Tizen application configuration file
├── icon.png            # Application icon
├── index.html          # Main HTML file for the application
├── README.md           # Project documentation (this file)
└── tizen_web_project.yaml # Tizen web project build configuration
```

## Key Files

- `index.html`: The main entry point and structure of the application.
- `css/style.css`: Custom styles for the application.
- `js/app.js`: Custom JavaScript logic for interactivity.
- `config.xml`: Tizen application configuration, including permissions and metadata.
- `lib/caph/3.1.0/`: Contains the CAPH framework files.

## Libraries Used

- **CAPH 3.1.0:** A web UI framework for Samsung Smart TV applications.
- **jQuery (via CAPH):** Used by CAPH for DOM manipulation and event handling.
