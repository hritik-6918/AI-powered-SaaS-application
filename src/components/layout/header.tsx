import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, PenLine, Image, Video } from 'lucide-react';

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGetStarted = () => {
    navigate('/write');
  };

  return (
    <header className="border-b border-gray-700 bg-gray-900">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-blue-600">AI Studio</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/write" 
              className={`flex items-center space-x-2 transition-colors ${
                location.pathname === '/write' ? 'text-blue-600' : 'text-gray-300 hover:text-gray-100'
              }`}
            >
              <PenLine className="h-5 w-5" />
              <span>Write</span>
            </Link>
            <Link 
              to="/images" 
              className={`flex items-center space-x-2 transition-colors ${
                location.pathname === '/images' ? 'text-blue-600' : 'text-gray-300 hover:text-gray-100'
              }`}
            >
              <Image className="h-5 w-5" />
              <span>Images</span>
            </Link>
            <Link 
              to="/videos" 
              className={`flex items-center space-x-2 transition-colors ${
                location.pathname === '/videos' ? 'text-blue-600' : 'text-gray-300 hover:text-gray-100'
              }`}
            >
              <Video className="h-5 w-5" />
              <span>Videos</span>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-gray-100">Sign in</Button>
            <Button onClick={handleGetStarted} className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
}