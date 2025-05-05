
import React from 'react';
import Layout from '../components/Layout';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <p className="text-muted-foreground mb-4">
          This is a simple, clean React application built with modern tools and best practices.
        </p>
        <p className="text-muted-foreground mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis vel nunc commodo
          vulputate. Proin in aliquet nisi. Duis facilisis, velit ac efficitur pulvinar, diam turpis
          finibus dui, eu tempor lacus nisi vel purus. Fusce at mauris semper, tincidunt nisl eget,
          faucibus felis.
        </p>
        <p className="text-muted-foreground">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
          Curabitur eleifend, velit sit amet tincidunt congue, nibh diam efficitur urna, vel 
          luctus tortor arcu eget nunc.
        </p>
      </div>
    </Layout>
  );
};

export default About;
