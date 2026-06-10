/**
 * Types representing the canvas templates, layers, and editor state.
 */

export interface BackgroundConfig {
  type: 'color' | 'gradient' | 'image';
  color: string; // fallback or absolute color
  gradient?: {
    from: string;
    to: string;
    angle: number; // in degrees
  };
  imageUrl?: string;
}

export type LayerType = 'text' | 'shape' | 'badge' | 'image';

export interface BaseLayer {
  id: string;
  type: LayerType;
  x: number; // relative to canvas pixels (e.g. 0-800)
  y: number;
  width: number;
  height: number;
  opacity: number; // 0 to 1
  rotation: number; // in degrees
  zIndex: number;
}

export interface TextLayer extends BaseLayer {
  type: 'text';
  text: string;
  fontFamily: string;
  fontSize: number;
  color: string;
  fontWeight: string; // 'normal', 'bold', '300', etc.
  fontStyle: string; // 'normal', 'italic'
  align: 'left' | 'center' | 'right';
  letterSpacing: number; // in pixels
}

export interface ShapeLayer extends BaseLayer {
  type: 'shape';
  shapeType: 'rect' | 'circle' | 'triangle' | 'star';
  fill: string;
  stroke: string;
  strokeWidth: number;
  borderRadius: number; // for rect only
}

export interface BadgeLayer extends BaseLayer {
  type: 'badge';
  text: string;
  badgeStyle: 'banner' | 'ribbon' | 'circle' | 'badge';
  fill: string;
  textColor: string;
}

export interface ImageLayer extends BaseLayer {
  type: 'image';
  src: string;
  blur: number; // in pixels
  cornerRadius: number;
}

export type Layer = TextLayer | ShapeLayer | BadgeLayer | ImageLayer;

export interface DesignTemplate {
  width: number; // e.g. 800
  height: number; // e.g. 800 or 1200x630
  background: BackgroundConfig;
  layers: Layer[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  // If this message generated/updated a design template, store it here
  templateState?: DesignTemplate;
  // Supporting references like image generation
  imageUrl?: string;
  isImageGeneration?: boolean;
}

export interface CopilotResponse {
  message: string;
  template?: DesignTemplate;
}
