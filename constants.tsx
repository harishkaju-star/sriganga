
import React from 'react';
import { CatalogBrand, BrandCatalog } from './types';
import { SpoolIcon, ShieldCheckIcon, LayersIcon, TruckIcon } from './components/Icons';

export const CATALOG_DATA: Record<CatalogBrand, BrandCatalog> = {
  [CatalogBrand.METRO_SPUN]: {
    brandName: "Metro Poly – Spun Poly",
    description: "Our premium line of Spun Polyester threads, engineered for versatility and smooth performance across apparel manufacturing.",
    products: [
      { id: 'ms1', name: 'General Purpose', count: '50s', ply: '2PLY', length: '1000m', packing: '10 cones/box', type: 'Spun Poly', useCase: 'Garment mfg, light fabrics' },
      { id: 'ms2', name: 'Fine Stitching', count: '80s', ply: '3PLY', length: '1000m', packing: '10 cones/box', type: 'Spun Poly', useCase: 'Delicate seams' },
      { id: 'ms3', name: 'Heavy Duty', count: '25s', ply: '3PLY', length: '1500m', packing: '1 cone/box', type: 'Spun Poly', useCase: 'Denim/industrial' },
      { id: 'ms4', name: 'Robust Apps', count: '20s', ply: '3PLY', length: '1000m', packing: '1 cone/box', type: 'Spun Poly', useCase: 'Upholstery/canvas' },
      { id: 'ms5', name: 'High Volume', count: '80s', ply: '3PLY', length: '5000m', packing: '1 cone/box', type: 'Spun Poly', useCase: 'Industrial fine stitching' },
      { id: 'ms6', name: 'Extended Length', count: '50s', ply: '2PLY', length: '3000m', packing: '1 cone/box', type: 'Spun Poly', useCase: 'Continuous production' },
    ]
  },
  [CatalogBrand.METRO_POLY]: {
    brandName: "Metro Poly – Poly Poly",
    description: "The peak of industrial strength. High-speed filament threads designed for extreme durability and abrasion resistance.",
    products: [
      { id: 'mp1', name: 'Versatile Strength', count: '25s', ply: '3PLY', length: '1500m', packing: '1 cone/box', type: 'Poly Poly', useCase: 'Industrial durable' },
      { id: 'mp2', name: 'Heavy Duty', count: '20s', ply: '3PLY', length: '1000m', packing: '1 cone/box', type: 'Poly Poly', useCase: 'Upholstery/outdoor' },
      { id: 'mp3', name: 'High Volume GP', count: '50s', ply: '2PLY', length: '1000m', packing: '10 cones/box', type: 'Poly Poly', useCase: 'Garment production' },
    ]
  },
  [CatalogBrand.OM_SHIV]: {
    brandName: "Om Shiv Ram",
    description: "Specialized invisible threads for quilting, hemming, and decorative applications where the stitch should be felt, not seen.",
    products: [
      { id: 'os1', name: 'Invisible Thread', count: '0.12mm', ply: '-', length: '1500m', packing: '10 cones/box', type: 'Invisible', useCase: 'Quilting/hemming' },
    ]
  }
};

export const ADVANTAGES = [
  { icon: <ShieldCheckIcon />, title: 'Uncompromising Quality', text: 'Superior strength, evenness, and exceptional colorfastness that lasts.' },
  { icon: <LayersIcon />, title: 'Versatility', text: 'Perfect for apparel, upholstery, leather goods, and outdoor fabrics.' },
  { icon: <SpoolIcon />, title: 'Superior Strength', text: 'Engineered for zero-breakage performance and durable industrial seams.' },
  { icon: <TruckIcon />, title: 'Reliable Supply', text: 'Global logistics with precision color matching and expert B2B support.' }
];

export interface QualityStep {
  title: string;
  description: string;
  spec: string;
  metric: string;
}

export const QUALITY_PROCESS: QualityStep[] = [
  { 
    title: "Fiber Selection", 
    description: "Sourcing high-tenacity raw fibers for maximum initial tensile strength.", 
    spec: "Material Purity", 
    metric: "AAA Grade" 
  },
  { 
    title: "Spinning & Plying", 
    description: "Advanced twisting techniques ensure uniform thread diameter and zero kinking.", 
    spec: "Twist Accuracy", 
    metric: "± 2% TPM" 
  },
  { 
    title: "Precision Dyeing", 
    description: "Multi-stage immersion for deep, vibrant, and consistent color range across batches.", 
    spec: "Color Variance", 
    metric: "Delta E < 1.0" 
  },
  { 
    title: "Heat Setting", 
    description: "Controlled heat treatment to prevent shrinkage and maintain structural integrity.", 
    spec: "Thermal Stability", 
    metric: "180°C Rated" 
  },
  { 
    title: "Winding & Lube", 
    description: "High-speed winding with precision silicon lubrication for low-friction sewing.", 
    spec: "Winding Tension", 
    metric: "Automated Control" 
  },
  { 
    title: "Quality Control", 
    description: "Rigorous stress testing for consistency, strength, and flawless finish.", 
    spec: "Defect Rate", 
    metric: "Zero Tolerance" 
  },
  { 
    title: "Logistics & Packing", 
    description: "Moisture-proof sealing and professional boxing for global industrial export.", 
    spec: "Packaging", 
    metric: "ISO Standard" 
  }
];

export const FAQS = [
  { q: "What is your Minimum Order Quantity (MOQ)?", a: "Standard MOQs vary by product line. Generally, we supply by the box (10 tubes per box for retail lengths, single cones for industrial sizes The minimum order quantity is 50 boxes per single color.." },
  { q: "Do you offer customized color matching?", a: "Yes! We specialize in custom color matching for large-scale garment production. Contact our support team with your shade card." },
  { q: "What is the typical lead time for bulk orders?", a: "Most standard colors are in stock and ship within 24-48 hours. Custom dyes typically take 7-14 business days." },
  { q: "Are your threads suitable for high-speed industrial machines?", a: "Absolutely. Our Poly-Poly range is specifically engineered for high-speed industrial sewing (up to 7,000 SPM) without breakage." }
];
