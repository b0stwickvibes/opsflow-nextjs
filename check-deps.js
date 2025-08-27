#!/usr/bin/env node

/**
 * OpsFlow NextJS Project Dependency Checker
 * This script checks for required dependencies and ensures they are installed correctly.
 */

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// Required packages
const REQUIRED_PACKAGES = [
  'postcss-preset-env',
  'tailwindcss',
  'autoprefixer',
  'next-themes'
];

console.log('🔍 Checking for required dependencies...');

// Check package.json
try {
  const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
  const allDependencies = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies
  };
  
  // Check if required packages exist in package.json
  const missingPackages = REQUIRED_PACKAGES.filter(pkg => !allDependencies[pkg]);
  
  if (missingPackages.length > 0) {
    console.log(`⚠️  Missing packages in package.json: ${missingPackages.join(', ')}`);
    console.log('💡 Installing missing packages...');
    
    try {
      execSync(`npm install --save-dev ${missingPackages.join(' ')}`, { stdio: 'inherit' });
      console.log('✅ Dependencies installed successfully!');
    } catch (error) {
      console.error('❌ Failed to install dependencies:', error.message);
      process.exit(1);
    }
  } else {
    console.log('✅ All required packages found in package.json');
  }
  
  // Check if node_modules directory exists
  if (!fs.existsSync('./node_modules')) {
    console.log('⚠️  node_modules directory not found. Running npm install...');
    try {
      execSync('npm install', { stdio: 'inherit' });
      console.log('✅ Dependencies installed successfully!');
    } catch (error) {
      console.error('❌ Failed to install dependencies:', error.message);
      process.exit(1);
    }
  }
  
  // Check if packages are actually installed in node_modules
  const missingModules = REQUIRED_PACKAGES.filter(pkg => {
    try {
      require.resolve(pkg);
      return false;
    } catch (e) {
      return true;
    }
  });
  
  if (missingModules.length > 0) {
    console.log(`⚠️  Some packages are in package.json but not installed in node_modules: ${missingModules.join(', ')}`);
    console.log('💡 Reinstalling packages...');
    
    try {
      execSync('npm install', { stdio: 'inherit' });
      console.log('✅ Dependencies reinstalled successfully!');
    } catch (error) {
      console.error('❌ Failed to reinstall dependencies:', error.message);
      process.exit(1);
    }
  } else {
    console.log('✅ All required packages are correctly installed in node_modules');
  }
  
  // Check PostCSS config
  if (fs.existsSync('./postcss.config.js')) {
    const postcssConfig = fs.readFileSync('./postcss.config.js', 'utf8');
    if (!postcssConfig.includes('postcss-preset-env')) {
      console.log('⚠️  postcss-preset-env not found in postcss.config.js');
      console.log('💡 Updating PostCSS config...');
      
      const updatedConfig = `
module.exports = {
  plugins: {
    'postcss-preset-env': {
      features: {
        'oklch': { preserve: true, fallback: true },
        'oklab': { preserve: true, fallback: true }
      },
      browsers: 'last 2 versions',
      stage: 3
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};`;
      
      fs.writeFileSync('./postcss.config.js', updatedConfig.trim(), 'utf8');
      console.log('✅ PostCSS config updated successfully!');
    } else {
      console.log('✅ PostCSS config looks good');
    }
  } else {
    console.log('⚠️  postcss.config.js not found. Creating...');
    
    const postcssConfig = `
module.exports = {
  plugins: {
    'postcss-preset-env': {
      features: {
        'oklch': { preserve: true, fallback: true },
        'oklab': { preserve: true, fallback: true }
      },
      browsers: 'last 2 versions',
      stage: 3
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};`;
    
    fs.writeFileSync('./postcss.config.js', postcssConfig.trim(), 'utf8');
    console.log('✅ Created postcss.config.js');
  }
  
  console.log('🎉 All dependency checks passed! You should be good to go.');
  console.log('');
  console.log('To start the development server, run:');
  console.log('npm run dev');
  
} catch (error) {
  console.error('❌ Error checking dependencies:', error.message);
  process.exit(1);
}
