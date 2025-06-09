import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
  type: 'dot' | 'card';
  trendData?: {
    name: string;
    growth: number;
    sparkline: number[];
  };
}

// Add prop for onlyParticles
interface NetworkVisualizationProps {
  onlyParticles?: boolean;
}

const NetworkVisualization: React.FC<NetworkVisualizationProps> = ({ onlyParticles }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationFrameRef = useRef<number>();
  
  const trendOptions = [
    { name: "AI Tools", growth: 145, sparkline: [10, 15, 12, 18, 25, 30, 35] },
    { name: "SaaS", growth: 78, sparkline: [5, 8, 12, 15, 18, 22, 25] },
    { name: "Gaming", growth: 32, sparkline: [15, 17, 14, 19, 22, 20, 24] },
    { name: "Health", growth: 89, sparkline: [8, 10, 13, 16, 19, 21, 26] },
    { name: "EdTech", growth: 56, sparkline: [6, 9, 11, 14, 17, 19, 23] },
    { name: "CleanTech", growth: 42, sparkline: [7, 8, 12, 16, 18, 20, 22] },
    { name: "FinTech", growth: 67, sparkline: [9, 11, 13, 17, 20, 23, 28] },
    { name: "E-commerce", growth: 45, sparkline: [12, 14, 16, 19, 21, 24, 27] },
    { name: "CyberSec", growth: 92, sparkline: [8, 12, 15, 19, 23, 26, 31] },
    { name: "IoT", growth: 38, sparkline: [11, 13, 15, 18, 20, 22, 25] },
    { name: "Blockchain", growth: 73, sparkline: [6, 10, 14, 18, 22, 25, 29] }
  ];
  
  useEffect(() => {
    if (!svgRef.current || !overlayRef.current) return;
    
    const svg = svgRef.current;
    const overlay = overlayRef.current;
    const rect = svg.getBoundingClientRect();
    
    // Generate nodes - only dots if onlyParticles, else mix
    const nodes: Node[] = [];
    const numNodes = 85;
    const numTrendCards = onlyParticles ? 0 : 11;
    
    for (let i = 0; i < numNodes; i++) {
      const isCard = i < numTrendCards;
      nodes.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height, // full area
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: [],
        type: isCard ? 'card' : 'dot',
        trendData: isCard ? trendOptions[i] : undefined
      });
    }
    
    // Create connections
    nodes.forEach((node, i) => {
      const numConnections = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < numConnections; j++) {
        const target = Math.floor(Math.random() * numNodes);
        if (target !== i && !node.connections.includes(target)) {
          node.connections.push(target);
        }
      }
    });
    
    nodesRef.current = nodes;
    
    // Initial drawing
    drawNetwork(svg, overlay, nodes);
    
    // Animation loop
    const animate = () => {
      nodesRef.current.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        // Bounce on all edges
        if (node.x <= 0 || node.x >= rect.width) node.vx *= -1;
        if (node.y <= 0 || node.y >= rect.height) node.vy *= -1;
      });
      
      // Clear SVG
      while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
      }
      
      // Clear overlay
      while (overlay.firstChild) {
        overlay.removeChild(overlay.firstChild);
      }
      
      drawNetwork(svg, overlay, nodesRef.current);
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [onlyParticles]);
  
  const drawNetwork = (svg: SVGSVGElement, overlay: HTMLDivElement, nodes: Node[]) => {
    // Draw connections
    nodes.forEach((node, i) => {
      node.connections.forEach(target => {
        const targetNode = nodes[target];
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', node.x.toString());
        line.setAttribute('y1', node.y.toString());
        line.setAttribute('x2', targetNode.x.toString());
        line.setAttribute('y2', targetNode.y.toString());
        line.classList.add('network-line');
        svg.appendChild(line);
      });
    });
    
    // Draw nodes and cards
    nodes.forEach(node => {
      if (node.type === 'dot') {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', node.x.toString());
        circle.setAttribute('cy', node.y.toString());
        circle.classList.add('network-node');
        svg.appendChild(circle);
      } else if (node.type === 'card' && node.trendData && !onlyParticles) {
        // Create trend card
        const card = document.createElement('div');
        card.className = 'absolute bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-lg p-2 shadow-sm';
        card.style.left = `${node.x - 45}px`;
        card.style.top = `${node.y - 30}px`;
        card.style.width = '90px';
        card.style.height = '60px';
        card.style.fontSize = '10px';
        card.style.zIndex = '1';
        card.style.position = 'relative';
        
        // Trend name at the top
        const name = document.createElement('div');
        name.className = 'font-medium text-gray-800 truncate text-xs mb-1';
        name.textContent = node.trendData.name;
        
        // Mini trend line (SVG) - positioned higher to not overlap with percentage
        const trendSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        trendSvg.setAttribute('width', '70');
        trendSvg.setAttribute('height', '20');
        trendSvg.style.marginBottom = '8px';
        
        // Create trend line path
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const points = node.trendData.sparkline;
        const maxValue = Math.max(...points);
        const minValue = Math.min(...points);
        const range = maxValue - minValue || 1;
        
        let pathData = '';
        points.forEach((value, index) => {
          const x = (index / (points.length - 1)) * 65;
          const y = 16 - ((value - minValue) / range) * 12;
          pathData += `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
        });
        
        path.setAttribute('d', pathData);
        path.setAttribute('stroke', '#16a34a');
        path.setAttribute('stroke-width', '1.5');
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke-linecap', 'round');
        
        trendSvg.appendChild(path);
        
        // Growth percentage in bottom right
        const growth = document.createElement('div');
        growth.className = 'absolute bottom-1 right-2 text-xs font-bold text-green-600';
        growth.textContent = `+${node.trendData.growth}%`;
        
        card.appendChild(name);
        card.appendChild(trendSvg);
        card.appendChild(growth);
        overlay.appendChild(card);
      }
    });
  };
  
  return (
    <>
      <svg 
        ref={svgRef} 
        className="w-full h-full absolute top-0 left-0 z-0 pointer-events-none"
        style={{ minHeight: 0, minWidth: 0, height: '100%', width: '100%' }}
      />
      <div 
        ref={overlayRef}
        className="w-full h-full absolute top-0 left-0 z-1 pointer-events-none overflow-hidden"
        style={{ minHeight: 0, minWidth: 0, height: '100%', width: '100%' }}
      />
    </>
  );
};

export default NetworkVisualization;
