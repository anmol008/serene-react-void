
import React from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';

const Index: React.FC = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Your React App</h1>
          <p className="text-xl text-muted-foreground mb-8">
            A clean, minimal starting point for your next web project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 border-t">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Feature One</h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius ligula ac ligula fringilla.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Feature Two</h2>
            <p className="text-muted-foreground">
              Suspendisse potenti. Vivamus id orci sed purus vestibulum commodo nec eget tellus.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Feature Three</h2>
            <p className="text-muted-foreground">
              Fusce commodo leo eu lorem vestibulum, non dignissim est aliquam. Pellentesque at magna.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
