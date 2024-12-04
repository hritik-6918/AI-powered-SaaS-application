import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/layout/header';
import { HomePage } from '@/pages/home';
import { WritePage } from '@/pages/write';
import { ImagesPage } from '@/pages/images';
import { VideosPage } from '@/pages/videos';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/images" element={<ImagesPage />} />
          <Route path="/videos" element={<VideosPage />} />
        </Routes>
      </div>
    </Router>
  );
}