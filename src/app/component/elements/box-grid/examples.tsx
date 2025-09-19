"use client";
import React from 'react';
import { SVGReplicaGrid, InteractiveGrid, HeroGrid, SectionGrid } from './index';
import { Button } from '../../atoms/button';

// Example 1: SVG Replica Grid as Background with Content
export const BackgroundGridExample = () => {
  return (
    <div className="h-screen bg-black">
      <SVGReplicaGrid 
        className="w-full h-full"
        showPulses={true}
        pulseColor="white"
        borderColor="#2C465D"
        animationSpeed="normal"
      >
        {/* Your content floats over the grid */}
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white max-w-2xl px-8">
            <h1 className="text-5xl font-bold mb-6">
              Grid Background Example
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              This content is rendered over the animated grid background.
              The grid provides visual structure while your content remains the focus.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="solid">Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </SVGReplicaGrid>
    </div>
  );
};

// Example 2: Interactive Grid with Content in Specific Boxes
export const InteractiveGridExample = () => {
  const handleBoxClick = (row: number, col: number) => {
    alert(`Clicked box at row ${row}, column ${col}`);
  };

  return (
    <div className="h-screen bg-black">
      <InteractiveGrid
        className="w-full h-full"
        rows={3}
        cols={3}
        showPulses={true}
        onBoxClick={handleBoxClick}
        boxes={[
          {
            row: 0,
            col: 0,
            content: (
              <div className="text-white text-center">
                <h3 className="text-lg font-bold">Top Left</h3>
                <p className="text-sm text-gray-300">Feature 1</p>
              </div>
            ),
            className: "hover:bg-blue-500/10"
          },
          {
            row: 0,
            col: 2,
            content: (
              <div className="text-white text-center">
                <h3 className="text-lg font-bold">Top Right</h3>
                <p className="text-sm text-gray-300">Feature 2</p>
              </div>
            ),
            className: "hover:bg-green-500/10"
          },
          {
            row: 1,
            col: 1,
            content: (
              <div className="text-white text-center">
                <h2 className="text-2xl font-bold mb-4">Main Content</h2>
                <p className="text-gray-300 mb-4">Center stage content</p>
                <Button variant="outline">Action</Button>
              </div>
            ),
            className: "hover:bg-purple-500/10"
          },
          {
            row: 2,
            col: 0,
            content: (
              <div className="text-white text-center">
                <h3 className="text-lg font-bold">Bottom Left</h3>
                <p className="text-sm text-gray-300">Feature 3</p>
              </div>
            ),
            className: "hover:bg-yellow-500/10"
          },
          {
            row: 2,
            col: 2,
            content: (
              <div className="text-white text-center">
                <h3 className="text-lg font-bold">Bottom Right</h3>
                <p className="text-sm text-gray-300">Feature 4</p>
              </div>
            ),
            className: "hover:bg-red-500/10"
          }
        ]}
      />
    </div>
  );
};

// Example 3: Hero Grid with Left/Right Content Areas
export const HeroGridExample = () => {
  return (
    <div className="h-screen bg-black">
      <HeroGrid
        className="w-full h-full"
        showPulses={true}
        leftContent={
          <div className="text-white max-w-lg">
            <h1 className="text-5xl font-bold mb-6">
              Hero Section
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Perfect for landing pages with split content layout.
              The grid provides structure while keeping content organized.
            </p>
            <div className="flex gap-4">
              <Button variant="solid">Start Now</Button>
              <Button variant="outline">Watch Demo</Button>
            </div>
          </div>
        }
        rightContent={
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/10">
            <div className="text-white text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Visual Element</h3>
              <p className="text-gray-300">Supporting graphics or media</p>
            </div>
          </div>
        }
        centerContent={
          <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <p className="text-white text-sm text-center">
              Optional overlay content
            </p>
          </div>
        }
      />
    </div>
  );
};

// Example 4: Section Grid with Predefined Areas
export const SectionGridExample = () => {
  return (
    <div className="h-screen bg-black">
      <SectionGrid
        className="w-full h-full"
        showPulses={true}
        topLeft={
          <div className="text-white">
            <h3 className="text-xl font-bold mb-2">Analytics</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Users</span>
                <span className="text-green-400">+12%</span>
              </div>
              <div className="flex justify-between">
                <span>Revenue</span>
                <span className="text-blue-400">$2.4M</span>
              </div>
            </div>
          </div>
        }
        topRight={
          <div className="text-white">
            <h3 className="text-xl font-bold mb-2">Performance</h3>
            <div className="space-y-2">
              {['Speed', 'Reliability', 'Efficiency'].map((metric, i) => (
                <div key={metric} className="flex items-center gap-2">
                  <span className="text-sm">{metric}</span>
                  <div className="flex-1 bg-gray-700 rounded-full h-1">
                    <div 
                      className="bg-green-400 h-1 rounded-full"
                      style={{ width: `${85 + i * 5}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
        center={
          <div className="text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
            <p className="text-gray-300 mb-6">
              Real-time insights at your fingertips
            </p>
            <Button variant="solid">View Details</Button>
          </div>
        }
        bottomLeft={
          <div className="text-white">
            <h3 className="text-xl font-bold mb-2">Recent Activity</h3>
            <div className="space-y-1 text-sm text-gray-300">
              <p>• New user registered</p>
              <p>• Payment processed</p>
              <p>• Report generated</p>
            </div>
          </div>
        }
        bottomRight={
          <div className="text-white">
            <h3 className="text-xl font-bold mb-2">Quick Actions</h3>
            <div className="space-y-2">
              <Button variant="outline" className="w-full text-sm">
                Export Data
              </Button>
              <Button variant="outline" className="w-full text-sm">
                Generate Report
              </Button>
            </div>
          </div>
        }
      />
    </div>
  );
};

// Combined Example showing all variations
export const CombinedExample = () => {
  const [activeExample, setActiveExample] = React.useState(0);

  const examples = [
    { name: 'Background Grid', component: <BackgroundGridExample /> },
    { name: 'Interactive Grid', component: <InteractiveGridExample /> },
    { name: 'Hero Grid', component: <HeroGridExample /> },
    { name: 'Section Grid', component: <SectionGridExample /> }
  ];

  return (
    <div className="h-screen bg-black relative">
      {examples[activeExample].component}
      
      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex gap-2 bg-black/50 backdrop-blur-sm rounded-lg p-2 border border-white/20">
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => setActiveExample(index)}
              className={`px-4 py-2 rounded text-sm transition-colors ${
                activeExample === index
                  ? 'bg-white text-black'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {example.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
