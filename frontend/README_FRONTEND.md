# DAiSEE Emotion Recognition Frontend

A modern, professional web interface for real-time student emotion recognition using the DAiSEE dataset.

## Features

### Dashboard
- Real-time Statistics: Total samples, active models, average accuracy, and processing speed
- Model Performance Comparison: Interactive bar charts comparing accuracy and F1 scores
- Emotion Distribution: Pie chart showing the distribution of emotions across the dataset
- Training Progress: Line charts tracking validation accuracy over epochs

### Live Detection
- Webcam Integration: Real-time emotion detection from webcam feed
- Visual Feedback: Live emotion badges and confidence scores overlaid on video
- Detection History: Timestamped log of recent emotion detections
- Emotion Legend: Color-coded reference for all emotion states

### Model Comparison
- Detailed Model Cards: Comprehensive information for each model (CNN, CNN-LSTM, 3D CNN)
- Performance Metrics: Accuracy, F1 score, precision, and recall for each model
- Radar Chart: Multi-dimensional comparison of model characteristics
- Confusion Matrix: Detailed visualization of the best-performing model

## Design Highlights

- Dark Theme: Professional dark UI optimized for extended viewing
- Responsive Layout: Adapts seamlessly to desktop, tablet, and mobile screens
- Smooth Animations: Subtle transitions and hover effects for better UX
- Data Visualization: Interactive charts using Recharts library
- Color Coding: Each emotion has a distinct color for instant recognition

## Tech Stack

- React 18 with TypeScript
- Vite for fast development and optimized builds
- Recharts for data visualization
- React Webcam for camera access
- Lucide React for modern icons

## Installation & Usage

cd frontend
npm install
npm run dev
