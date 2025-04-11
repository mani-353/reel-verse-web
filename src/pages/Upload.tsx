
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Upload as UploadIcon, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import LoadingSpinner from '@/components/LoadingSpinner';

const Upload = () => {
  const [caption, setCaption] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const clearSelection = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile) {
      toast({
        title: "Error",
        description: "Please select a video to upload",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate upload process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Success",
      description: "Your reel has been uploaded!",
    });
    
    setIsLoading(false);
    navigate('/profile');
  };
  
  return (
    <div className="app-container">
      <Header />
      
      <main className="page-container">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-6">Upload a Reel</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {!selectedFile ? (
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <UploadIcon size={48} className="mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground mb-4">
                  Drag and drop a video file, or click to browse
                </p>
                
                <Input
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                  disabled={isLoading}
                />
                
                <label htmlFor="file-upload">
                  <Button 
                    type="button" 
                    className="bg-purple-gradient hover:opacity-90 transition-opacity"
                    disabled={isLoading}
                  >
                    Select Video
                  </Button>
                </label>
              </div>
            ) : (
              <div className="relative">
                <div className="aspect-[9/16] bg-black rounded-lg overflow-hidden flex items-center justify-center">
                  {previewUrl && (
                    <div className="w-full h-full flex items-center justify-center bg-muted">
                      <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center">
                        <span className="text-white text-2xl">▶</span>
                      </div>
                    </div>
                  )}
                </div>
                
                <button 
                  type="button"
                  onClick={clearSelection}
                  className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center"
                  disabled={isLoading}
                >
                  <X size={16} className="text-white" />
                </button>
              </div>
            )}
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Caption
                </label>
                <Textarea
                  placeholder="Write a caption..."
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  rows={3}
                  disabled={isLoading}
                  className="bg-background"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-purple-gradient hover:opacity-90 transition-opacity"
                disabled={isLoading || !selectedFile}
              >
                {isLoading ? <LoadingSpinner size="sm" /> : 'Upload Reel'}
              </Button>
            </div>
          </form>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Upload;
