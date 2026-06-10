import React, { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  Download,
  Image,
  Type as FontIcon,
  Square,
  BadgeAlert,
  Send,
  RefreshCw,
  Plus,
  Trash2,
  Layers,
  Settings,
  ChevronRight,
  Move,
  CornerDownLeft,
  Copy,
  FolderOpen,
  ArrowUp,
  ArrowDown,
  Maximize2,
  Grid,
  Menu,
  X,
  Sliders,
  Palette,
  Check,
  Undo
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  DesignTemplate,
  Layer,
  ChatMessage,
  LayerType,
  BackgroundConfig
} from "./types";

// --- HIGH-QUALITY PRESETS LIBRARY ---
const DESIGN_PRESETS: { name: string; description: string; template: DesignTemplate }[] = [
  {
    name: "Golden Hour Sale",
    description: "Vibrant gradient with elegant typography for fashion promotions.",
    template: {
      width: 800,
      height: 800,
      background: {
        type: "gradient",
        color: "#fb923c",
        gradient: {
          from: "#ff7e5f",
          to: "#feb47b",
          angle: 135
        }
      },
      layers: [
        {
          id: "rect_frame",
          type: "shape",
          shapeType: "rect",
          x: 400,
          y: 400,
          width: 740,
          height: 740,
          opacity: 0.2,
          rotation: 0,
          zIndex: 1,
          fill: "transparent",
          stroke: "#ffffff",
          strokeWidth: 4,
          borderRadius: 16
        },
        {
          id: "badge_discount",
          type: "badge",
          badgeStyle: "ribbon",
          x: 400,
          y: 200,
          width: 250,
          height: 60,
          opacity: 1,
          rotation: -4,
          zIndex: 3,
          text: "LIMITED RUN",
          fill: "#000000",
          textColor: "#fdba74"
        },
        {
          id: "main_heading",
          type: "text",
          x: 400,
          y: 380,
          width: 650,
          height: 150,
          opacity: 1,
          rotation: 0,
          zIndex: 4,
          text: "SUMMER\nEXTRAVAGANZA",
          fontFamily: "Space Grotesk",
          fontSize: 64,
          color: "#ffffff",
          fontWeight: "bold",
          fontStyle: "normal",
          align: "center",
          letterSpacing: 2
        },
        {
          id: "sub_heading",
          type: "text",
          x: 400,
          y: 530,
          width: 500,
          height: 50,
          opacity: 1,
          rotation: 0,
          zIndex: 4,
          text: "Get up to 50% off all selected wear items",
          fontFamily: "Inter",
          fontSize: 22,
          color: "#ffffff",
          fontWeight: "normal",
          fontStyle: "normal",
          align: "center",
          letterSpacing: 0
        },
        {
          id: "shop_now_btn",
          type: "shape",
          shapeType: "rect",
          x: 400,
          y: 640,
          width: 180,
          height: 50,
          opacity: 1,
          rotation: 0,
          zIndex: 2,
          fill: "#ffffff",
          stroke: "#ffffff",
          strokeWidth: 0,
          borderRadius: 8
        },
        {
          id: "shop_now_text",
          type: "text",
          x: 400,
          y: 640,
          width: 180,
          height: 30,
          opacity: 1,
          rotation: 0,
          zIndex: 5,
          text: "SHOP NOW",
          fontFamily: "Inter",
          fontSize: 16,
          color: "#ff7e5f",
          fontWeight: "bold",
          fontStyle: "normal",
          align: "center",
          letterSpacing: 1
        }
      ]
    }
  },
  {
    name: "Cosmic Neon Promo",
    description: "Deep galactic background with striking neon overlays.",
    template: {
      width: 800,
      height: 800,
      background: {
        type: "gradient",
        color: "#0f172a",
        gradient: {
          from: "#090d16",
          to: "#1e1b4b",
          angle: 180
        }
      },
      layers: [
        {
          id: "neon_glowing_circle",
          type: "shape",
          shapeType: "circle",
          x: 400,
          y: 400,
          width: 480,
          height: 480,
          opacity: 0.15,
          rotation: 0,
          zIndex: 1,
          fill: "transparent",
          stroke: "#a855f7",
          strokeWidth: 20,
          borderRadius: 0
        },
        {
          id: "neon_badge",
          type: "badge",
          badgeStyle: "circle",
          x: 400,
          y: 280,
          width: 140,
          height: 140,
          opacity: 1,
          rotation: 12,
          zIndex: 3,
          text: "NEW IN",
          fill: "#ec4899",
          textColor: "#ffffff"
        },
        {
          id: "neon_heading",
          type: "text",
          x: 400,
          y: 450,
          width: 600,
          height: 100,
          opacity: 1,
          rotation: 0,
          zIndex: 4,
          text: "CYBERPUNK",
          fontFamily: "Space Grotesk",
          fontSize: 72,
          color: "#22d3ee",
          fontWeight: "bold",
          fontStyle: "italic",
          align: "center",
          letterSpacing: 4
        },
        {
          id: "neon_desc",
          type: "text",
          x: 400,
          y: 540,
          width: 500,
          height: 40,
          opacity: 1,
          rotation: 0,
          zIndex: 4,
          text: "The Next Generation Creative Framework",
          fontFamily: "JetBrains Mono",
          fontSize: 16,
          color: "#a855f7",
          fontWeight: "normal",
          fontStyle: "normal",
          align: "center",
          letterSpacing: 2
        }
      ]
    }
  },
  {
    name: "Luxury Minimalist",
    description: "High-end serif font pairings with airy cream margins.",
    template: {
      width: 800,
      height: 800,
      background: {
        type: "color",
        color: "#fcfaf2"
      },
      layers: [
        {
          id: "mid_divider",
          type: "shape",
          shapeType: "rect",
          x: 400,
          y: 420,
          width: 2,
          height: 140,
          opacity: 0.6,
          rotation: 0,
          zIndex: 2,
          fill: "#1e1e1e",
          stroke: "#1e1e1e",
          strokeWidth: 1,
          borderRadius: 0
        },
        {
          id: "brand_name",
          type: "text",
          x: 400,
          y: 220,
          width: 500,
          height: 40,
          opacity: 0.8,
          rotation: 0,
          zIndex: 4,
          text: "M A I S O N  D ' O R",
          fontFamily: "Inter",
          fontSize: 18,
          color: "#1e1e1e",
          fontWeight: "normal",
          fontStyle: "normal",
          align: "center",
          letterSpacing: 6
        },
        {
          id: "lux_heading_1",
          type: "text",
          x: 280,
          y: 380,
          width: 250,
          height: 100,
          opacity: 1,
          rotation: 0,
          zIndex: 4,
          text: "HAUTE",
          fontFamily: "Playfair Display",
          fontSize: 54,
          color: "#1e1e1e",
          fontWeight: "normal",
          fontStyle: "italic",
          align: "right",
          letterSpacing: 0
        },
        {
          id: "lux_heading_2",
          type: "text",
          x: 520,
          y: 460,
          width: 250,
          height: 100,
          opacity: 1,
          rotation: 0,
          zIndex: 4,
          text: "COUTURE",
          fontFamily: "Playfair Display",
          fontSize: 54,
          color: "#1e1e1e",
          fontWeight: "normal",
          fontStyle: "normal",
          align: "left",
          letterSpacing: 0
        },
        {
          id: "lux_sub",
          type: "text",
          x: 400,
          y: 620,
          width: 500,
          height: 40,
          opacity: 0.7,
          rotation: 0,
          zIndex: 4,
          text: "Autumn / Winter Exhibition 2026",
          fontFamily: "Inter",
          fontSize: 14,
          color: "#1e1e1e",
          fontWeight: "300",
          fontStyle: "normal",
          align: "center",
          letterSpacing: 2
        }
      ]
    }
  }
];

export default function App() {
  // --- STATE ---
  const [activeTemplate, setActiveTemplate] = useState<DesignTemplate>(DESIGN_PRESETS[0].template);
  const [selectedLayerId, setSelectedLayerId] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "initial_welcome",
      role: "assistant",
      content: "Hello! I am your AI Design Copilot. Describe what you'd like to create (e.g. 'Create an organic coffee voucher on a dark green background with a gold frame') or pick one of my preset canvases below to start designing together. I can edit this canvas instantly when you prompt me!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      templateState: DESIGN_PRESETS[0].template
    }
  ]);
  const [userPrompt, setUserPrompt] = useState<string>("");
  const [isCopilotGenerating, setIsCopilotGenerating] = useState<boolean>(false);
  const [generationStage, setGenerationStage] = useState<string>("");
  const [activeTab, setActiveTab] = useState<'copilot' | 'editor' | 'presets'>('copilot');
  const [uploadedImageBase64, setUploadedImageBase64] = useState<string | null>(null);
  const [isImageRendering, setIsImageRendering] = useState<boolean>(false);
  
  // Custom prompt guidelines or helpers
  const [aiImagePrompt, setAiImagePrompt] = useState<string>("");
  const [isAIGenningImage, setIsAIGenningImage] = useState<boolean>(false);
  const [canvasScale, setCanvasScale] = useState<number>(0.75);

  // References for drag & resize tracking
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    layerId: string;
    startX: number;
    startY: number;
    layerStartX: number;
    layerStartY: number;
    action: 'drag' | 'resize-br' | 'resize-tr' | 'resize-tl' | 'resize-bl';
    initialWidth: number;
    initialHeight: number;
  } | null>(null);

  // --- ESCAPE RESIZE ON SCREEN SIZE CHANGE ---
  useEffect(() => {
    const handleResize = () => {
      if (canvasContainerRef.current) {
        const containerWidth = canvasContainerRef.current.clientWidth;
        // Target 800px width for 100% size
        const targetScale = Math.min((containerWidth - 32) / 800, 0.9);
        setCanvasScale(Math.max(targetScale, 0.35));
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- DRAG / RESIZE DOM EVENTS ---
  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!dragRef.current) return;
      const drag = dragRef.current;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const dx = (clientX - drag.startX) / canvasScale;
      const dy = (clientY - drag.startY) / canvasScale;

      setActiveTemplate((prev) => {
        const updatedLayers = prev.layers.map((l) => {
          if (l.id !== drag.layerId) return l;

          if (drag.action === 'drag') {
            return {
              ...l,
              x: Math.round(drag.layerStartX + dx),
              y: Math.round(drag.layerStartY + dy)
            };
          } else if (drag.action === 'resize-br') {
            return {
              ...l,
              width: Math.max(20, Math.round(drag.initialWidth + dx)),
              height: Math.max(20, Math.round(drag.initialHeight + dy))
            };
          } else if (drag.action === 'resize-bl') {
            return {
              ...l,
              width: Math.max(20, Math.round(drag.initialWidth - dx)),
              height: Math.max(20, Math.round(drag.initialHeight + dy)),
              x: Math.round(drag.layerStartX + dx / 2) // keep simple, update coordinates
            };
          }

          return l;
        });

        return { ...prev, layers: updatedLayers };
      });
    };

    const handleUp = () => {
      if (dragRef.current) {
        dragRef.current = null;
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchmove", handleMove, { passive: false });
    window.addEventListener("touchend", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleUp);
    };
  }, [canvasScale]);

  // --- COGNITIVE HELPER: AI COPILOT TEMPLATE BUILDER ---
  const sendPromptToCopilot = async (promptText: string) => {
    if (!promptText.trim()) return;

    // Create immediate user message
    const newMessage: ChatMessage = {
      id: `msg_user_${Date.now()}`,
      role: "user",
      content: promptText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages((prev) => [...prev, newMessage]);
    setUserPrompt("");
    setIsCopilotGenerating(true);
    
    // Aesthetic simulated design increments
    const feedbackStages = [
      "Analyzing layout requirements...",
      "Configuring master color wheel ratios...",
      "Assembling design grid system...",
      "Refining font pairings...",
      "Balancing visual weights in real time..."
    ];
    let stageIdx = 0;
    setGenerationStage(feedbackStages[0]);
    const stageInterval = setInterval(() => {
      if (stageIdx < feedbackStages.length - 1) {
        stageIdx++;
        setGenerationStage(feedbackStages[stageIdx]);
      }
    }, 1200);

    try {
      // Build brief recent message payload
      const historyPayload = chatMessages.slice(-5).map((m) => ({
        role: m.role,
        content: m.content
      }));

      const response = await fetch("/api/design/copilot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: promptText,
          currentTemplate: activeTemplate,
          history: historyPayload
        })
      });

      const result = await response.json();
      clearInterval(stageInterval);

      if (response.ok && result.template) {
        setActiveTemplate(result.template);
        setChatMessages((prev) => [
          ...prev,
          {
            id: `msg_asst_${Date.now()}`,
            role: "assistant",
            content: result.message,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            templateState: result.template
          }
        ]);
        // Open Editor automatically after generation so we can inspect
        setActiveTab('editor');
      } else {
        throw new Error(result.error || "Copilot response invalid");
      }
    } catch (err: any) {
      console.error(err);
      setChatMessages((prev) => [
        ...prev,
        {
          id: `msg_err_${Date.now()}`,
          role: "assistant",
          content: `I hit a small snag executing that request directly: "${err.message || err}". Let me still keep the design ready! You can manually adjust elements or try an incremental instruction.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsCopilotGenerating(false);
      setGenerationStage("");
    }
  };

  // --- RUNTIME AI IMAGE GENERATOR ---
  const generateImageFromAIPrompt = async () => {
    if (!aiImagePrompt.trim()) return;

    setIsAIGenningImage(true);
    const textPrompt = aiImagePrompt;
    setAiImagePrompt("");

    // Create user announcement of intent in chat
    setChatMessages((prev) => [
      ...prev,
      {
        id: `msg_image_req_${Date.now()}`,
        role: "user",
        content: `Generate visual image asset for prompt: "${textPrompt}"`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);

    try {
      const response = await fetch("/api/image/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: textPrompt })
      });

      const result = await response.json();
      if (response.ok && result.imageUrl) {
        // Create an Image layer with the generated image
        const newLayer: Layer = {
          id: `ai_img_${Date.now()}`,
          type: "image",
          x: 400,
          y: 400,
          width: 400,
          height: 400,
          opacity: 1,
          rotation: 0,
          zIndex: activeTemplate.layers.length + 1,
          src: result.imageUrl,
          blur: 0,
          cornerRadius: 12
        };

        const updatedTemplate = {
          ...activeTemplate,
          layers: [...activeTemplate.layers, newLayer]
        };

        setActiveTemplate(updatedTemplate);
        setSelectedLayerId(newLayer.id);

        setChatMessages((prev) => [
          ...prev,
          {
            id: `msg_image_res_${Date.now()}`,
            role: "assistant",
            content: `I've successfully generated your custom AI graphic asset using my generative network and loaded it onto the active design frame as a style layer! You can resize, reposition, or apply blurs as needed.`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            imageUrl: result.imageUrl,
            isImageGeneration: true,
            templateState: updatedTemplate
          }
        ]);
        setActiveTab('editor');
      } else {
        throw new Error(result.error || "Failed image synthesis payload.");
      }
    } catch (err: any) {
      console.error(err);
      setChatMessages((prev) => [
        ...prev,
        {
          id: `msg_image_err_${Date.now()}`,
          role: "assistant",
          content: `I ran into some access variables generating that image directly. Ensure your secrets and network bindings are alive. I'll still keep drawing options available!`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsAIGenningImage(false);
    }
  };

  // --- MANUAL COMPONENT LAYER ACTIONS ---
  const addLayer = (type: LayerType) => {
    let newLayer: Layer;
    const baseId = `${type}_${Date.now()}`;
    const z = activeTemplate.layers.length + 1;

    if (type === "text") {
      newLayer = {
        id: baseId,
        type: "text",
        x: 400,
        y: 400,
        width: 300,
        height: 80,
        opacity: 1,
        rotation: 0,
        zIndex: z,
        text: "Double-Tap to Edit",
        fontFamily: "Inter",
        fontSize: 32,
        color: "#ffffff",
        fontWeight: "bold",
        fontStyle: "normal",
        align: "center",
        letterSpacing: 0
      };
    } else if (type === "shape") {
      newLayer = {
        id: baseId,
        type: "shape",
        x: 400,
        y: 400,
        width: 200,
        height: 200,
        opacity: 1,
        rotation: 0,
        zIndex: z,
        shapeType: "rect",
        fill: "#2563eb",
        stroke: "#ffffff",
        strokeWidth: 2,
        borderRadius: 8
      };
    } else if (type === "badge") {
      newLayer = {
        id: baseId,
        type: "badge",
        x: 400,
        y: 450,
        width: 180,
        height: 50,
        opacity: 1,
        rotation: 0,
        zIndex: z,
        text: "50% OFF TODAY!",
        badgeStyle: "banner",
        fill: "#f59e0b",
        textColor: "#000000"
      };
    } else {
      // image layer
      newLayer = {
        id: baseId,
        type: "image",
        x: 400,
        y: 400,
        width: 250,
        height: 250,
        opacity: 1,
        rotation: 0,
        zIndex: z,
        src: "https://picsum.photos/seed/design/400/400",
        blur: 0,
        cornerRadius: 8
      };
    }

    setActiveTemplate((prev) => ({
      ...prev,
      layers: [...prev.layers, newLayer]
    }));
    setSelectedLayerId(newLayer.id);
  };

  const deleteSelectedLayer = () => {
    if (!selectedLayerId) return;
    setActiveTemplate((prev) => ({
      ...prev,
      layers: prev.layers.filter((l) => l.id !== selectedLayerId)
    }));
    setSelectedLayerId(null);
  };

  const updateSelectedLayerProps = (properties: Partial<Layer>) => {
    if (!selectedLayerId) return;
    setActiveTemplate((prev) => ({
      ...prev,
      layers: prev.layers.map((l) => {
        if (l.id !== selectedLayerId) return l;
        return { ...l, ...properties } as Layer;
      })
    }));
  };

  const reorderSelectedLayer = (direction: 'up' | 'down') => {
    if (!selectedLayerId) return;
    setActiveTemplate((prev) => {
      const idx = prev.layers.findIndex((l) => l.id === selectedLayerId);
      if (idx === -1) return prev;
      
      const newLayers = [...prev.layers];
      const targetIdx = direction === 'up' ? idx + 1 : idx - 1;
      
      if (targetIdx >= 0 && targetIdx < newLayers.length) {
        // Swap original zIndexes keeping structured index ordering
        const tempZ = newLayers[idx].zIndex;
        newLayers[idx].zIndex = newLayers[targetIdx].zIndex;
        newLayers[targetIdx].zIndex = tempZ;
        
        // Swap array location too for cleaner layered lists
        const temp = newLayers[idx];
        newLayers[idx] = newLayers[targetIdx];
        newLayers[targetIdx] = temp;
      }
      return { ...prev, layers: newLayers };
    });
  };

  const handleStartDrag = (
    e: React.MouseEvent | React.TouchEvent,
    layerId: string,
    action: 'drag' | 'resize-br' | 'resize-bl' = 'drag'
  ) => {
    e.stopPropagation();
    const layer = activeTemplate.layers.find((l) => l.id === layerId);
    if (!layer) return;

    setSelectedLayerId(layerId);

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    dragRef.current = {
      layerId,
      startX: clientX,
      startY: clientY,
      layerStartX: layer.x,
      layerStartY: layer.y,
      action,
      initialWidth: layer.width,
      initialHeight: layer.height
    };
  };

  // --- HTML5 CANVAS EXPORT ENGINE (2X HIGH_DEFINITION) ---
  const handleExportAsImage = async () => {
    setIsImageRendering(true);
    try {
      const canvas = document.createElement("canvas");
      const exportScale = 2; // Crisp resolution (1600x1600)
      canvas.width = activeTemplate.width * exportScale;
      canvas.height = activeTemplate.height * exportScale;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Could not acquire offscreen canvas context.");

      // Clear layout
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw Background
      if (activeTemplate.background.type === "color") {
        ctx.fillStyle = activeTemplate.background.color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else if (activeTemplate.background.type === "gradient" && activeTemplate.background.gradient) {
        const { from, to, angle } = activeTemplate.background.gradient;
        const rad = (angle * Math.PI) / 180;
        
        // Gradient boundaries
        const r = Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2;
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        const x0 = cx - r * Math.cos(rad);
        const y0 = cy - r * Math.sin(rad);
        const x1 = cx + r * Math.cos(rad);
        const y1 = cy + r * Math.sin(rad);

        const gradient = ctx.createLinearGradient(x0, y0, x1, y1);
        gradient.addColorStop(0, from);
        gradient.addColorStop(1, to);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else if (activeTemplate.background.type === "image" && activeTemplate.background.imageUrl) {
        // Draw solid fallback
        ctx.fillStyle = activeTemplate.background.color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Load image synchronously inside flow
        await new Promise<void>((resolve) => {
          const img = new window.Image();
          img.crossOrigin = "anonymous";
          img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            resolve();
          };
          img.onerror = () => resolve(); // continue on loading errors
          img.src = activeTemplate.background.imageUrl!;
        });
      }

      // 2. Draw layers sequentially according to zIndex order
      const sortedLayers = [...activeTemplate.layers].sort((a, b) => a.zIndex - b.zIndex);
      
      for (const layer of sortedLayers) {
        ctx.save();
        ctx.globalAlpha = layer.opacity;

        // Apply translation for placement & rotation
        const lx = layer.x * exportScale;
        const ly = layer.y * exportScale;
        const lw = layer.width * exportScale;
        const lh = layer.height * exportScale;

        ctx.translate(lx, ly);
        if (layer.rotation) {
          ctx.rotate((layer.rotation * Math.PI) / 180);
        }

        if (layer.type === "text") {
          const tl = layer as any;
          ctx.fillStyle = tl.color;
          const styleStr = `${tl.fontStyle || 'normal'} ${tl.fontWeight || 'bold'} ${Math.round(tl.fontSize * exportScale)}px "${tl.fontFamily}"`;
          ctx.font = styleStr;
          ctx.textAlign = tl.align || "center";
          ctx.textBaseline = "middle";

          // Handle multiline text rendering
          const lines = tl.text.split("\n");
          const lineHeight = tl.fontSize * exportScale * 1.25;
          const startYOffset = -((lines.length - 1) * lineHeight) / 2;

          lines.forEach((line: string, index: number) => {
            ctx.fillText(line, 0, startYOffset + (index * lineHeight));
          });

        } else if (layer.type === "shape") {
          const sl = layer as any;
          ctx.fillStyle = sl.fill;
          ctx.strokeStyle = sl.stroke;
          ctx.lineWidth = sl.strokeWidth * exportScale;

          const rx = -lw / 2;
          const ry = -lh / 2;

          if (sl.shapeType === "rect") {
            const r = sl.borderRadius * exportScale;
            if (r > 0) {
              ctx.beginPath();
              ctx.roundRect?.(rx, ry, lw, lh, r);
              ctx.fill();
              if (sl.strokeWidth > 0) ctx.stroke();
            } else {
              ctx.fillRect(rx, ry, lw, lh);
              if (sl.strokeWidth > 0) ctx.strokeRect(rx, ry, lw, lh);
            }
          } else if (sl.shapeType === "circle") {
            ctx.beginPath();
            ctx.arc(0, 0, Math.min(lw, lh) / 2, 0, 2 * Math.PI);
            ctx.fill();
            if (sl.strokeWidth > 0) ctx.stroke();
          } else if (sl.shapeType === "triangle") {
            ctx.beginPath();
            ctx.moveTo(0, ry);
            ctx.lineTo(rx + lw, ry + lh);
            ctx.lineTo(rx, ry + lh);
            ctx.closePath();
            ctx.fill();
            if (sl.strokeWidth > 0) ctx.stroke();
          }

        } else if (layer.type === "badge") {
          const bl = layer as any;
          
          // Outer Badge Base Box
          ctx.fillStyle = bl.fill;
          const rx = -lw / 2;
          const ry = -lh / 2;
          ctx.beginPath();
          ctx.roundRect?.(rx, ry, lw, lh, bl.badgeStyle === "circle" ? lw / 2 : 10 * exportScale);
          ctx.fill();

          // Internal Sticker text
          ctx.fillStyle = bl.textColor;
          ctx.font = `bold ${Math.round(20 * exportScale)}px "Space Grotesk"`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(bl.text, 0, 0);

        } else if (layer.type === "image") {
          const il = layer as any;
          const rx = -lw / 2;
          const ry = -lh / 2;

          await new Promise<void>((resolve) => {
            const img = new window.Image();
            img.crossOrigin = "anonymous";
            img.onload = () => {
              // Apply rounded corners if specified
              if (il.cornerRadius > 0) {
                ctx.beginPath();
                ctx.roundRect?.(rx, ry, lw, lh, il.cornerRadius * exportScale);
                ctx.clip();
              }
              ctx.drawImage(img, rx, ry, lw, lh);
              resolve();
            };
            img.onerror = () => resolve();
            img.src = il.src;
          });
        }

        ctx.restore();
      }

      // Convert layout to download link
      const dataUrl = canvas.toDataURL("image/png");
      const downloadAnchor = document.createElement("a");
      downloadAnchor.href = dataUrl;
      downloadAnchor.download = `canvaai-design-${Date.now()}.png`;
      downloadAnchor.click();

    } catch (e) {
      console.error("Renderer Failure:", e);
    } finally {
      setIsImageRendering(false);
    }
  };

  // Enhance Selected Image layer using base64 and API
  const handleEnhanceSelectedLayer = async () => {
    const activeLayer = activeTemplate.layers.find((l) => l.id === selectedLayerId);
    if (!activeLayer || activeLayer.type !== "image") {
      alert("Please select an Image background layer to enhance!");
      return;
    }

    setIsAIGenningImage(true);
    try {
      const response = await fetch("/api/image/enhance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: "Enhance elements details, increase cinematic lighting quality, artistic 4k style",
          base64Image: (activeLayer as any).src,
          mimeType: "image/png"
        })
      });

      const data = await response.json();
      if (response.ok && data.imageUrl) {
        updateSelectedLayerProps({ src: data.imageUrl });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsAIGenningImage(false);
    }
  };

  const getActiveLayer = () => {
    return activeTemplate.layers.find((l) => l.id === selectedLayerId);
  };

  return (
    <div id="application_root" className="min-h-screen bg-[#0A0C10] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white flex flex-col overflow-x-hidden antialiased">
      
      {/* HEADER BANNER */}
      <header id="app_header" className="h-16 border-b border-slate-800 bg-[#0F1117] px-8 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/25">
            <Sparkles id="app_icon" className="w-4.5 h-4.5 text-white animate-pulse" />
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight text-white flex items-center gap-2">
              PixelGen AI <span className="text-[10px] bg-indigo-500/10 text-indigo-300 font-mono border border-indigo-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">Canvas Pro</span>
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            id="btn_download"
            onClick={handleExportAsImage}
            disabled={isImageRendering}
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-lg shadow-lg shadow-indigo-500/20 transition-all border border-indigo-500/20 disabled:opacity-50 active:scale-95 cursor-pointer flex items-center gap-2"
          >
            {isImageRendering ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Exporting Design...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-white" />
                <span>Export Design</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* THREE-PANEL CORE SPACE */}
      <main id="app_main" className="flex-1 w-full max-w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-slate-800 bg-[#080a0f]">
        
        {/* LEFT COLUMN: DESIGN ASSISTANT CHAT & COPILOT */}
        <section id="copilot_sidebar" className="lg:col-span-4 flex flex-col bg-[#0F1117] h-[calc(100vh-64px)] max-h-[calc(100vh-64px)] overflow-hidden">
          
          {/* TAB HEADER */}
          <div className="flex items-center justify-around border border-slate-800 bg-[#0A0C10] p-1.5 m-4 rounded-xl">
            <button
              id="tab_copilot"
              onClick={() => setActiveTab('copilot')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'copilot'
                  ? "bg-slate-800/85 text-white border-slate-700 shadow-md"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>AI Copilot Chat</span>
            </button>
            <button
              id="tab_editor"
              onClick={() => setActiveTab('editor')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'editor'
                  ? "bg-slate-800/85 text-white border-slate-700 shadow-md"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <Sliders className="w-3.5 h-3.5 text-indigo-400" />
              <span>Layers & Props</span>
            </button>
            <button
              id="tab_presets"
              onClick={() => setActiveTab('presets')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'presets'
                  ? "bg-slate-800/85 text-white border-slate-700 shadow-md"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <Grid className="w-3.5 h-3.5 text-indigo-400" />
              <span>Templates ({DESIGN_PRESETS.length})</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            
            {/* COPILOT CHAT INTERFACE */}
            {activeTab === 'copilot' && (
              <div className="h-full flex flex-col justify-between space-y-4">
                
                {/* Conversations Output Stream */}
                <div className="flex-1 space-y-4 overflow-y-auto pr-1 text-sm custom-scrollbar">
                  <AnimatePresence initial={false}>
                    {chatMessages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex flex-col space-y-1 max-w-[90%] ${
                          msg.role === 'user' ? "ml-auto items-end" : "mr-auto items-start"
                        }`}
                      >
                        <div
                          className={`px-4 py-3 rounded-2xl leading-relaxed ${
                            msg.role === 'user'
                              ? "bg-indigo-500/10 border border-indigo-500/25 text-indigo-100 rounded-tr-none"
                              : "bg-[#121826] border border-slate-800 text-gray-300 rounded-tl-none"
                          }`}
                        >
                          <p className="whitespace-pre-line">{msg.content}</p>
                          
                          {/* Inline images if any are synthesized */}
                          {msg.imageUrl && (
                            <div className="mt-3 rounded-lg overflow-hidden border border-slate-800 bg-[#000000]">
                              <img
                                src={msg.imageUrl}
                                alt="AI Generation"
                                className="max-h-48 w-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          )}
                        </div>
                        <span className="text-[10px] text-gray-500 px-2 font-mono">{msg.timestamp}</span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
 
                  {/* COCOPILOT THINKING MODE */}
                  {isCopilotGenerating && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-start gap-3 p-3 bg-gray-900/40 rounded-xl border border-slate-800 mr-auto max-w-[85%]"
                    >
                      <RefreshCw className="w-4 h-4 text-indigo-400 animate-spin mt-0.5" />
                      <div className="space-y-1">
                        <p className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                          AI Creative Director is thinking...
                        </p>
                        <p className="text-xs text-indigo-400 font-mono animate-pulse">{generationStage}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
 
                {/* PROMPT ACTION PANEL */}
                <div className="space-y-4 pt-3 border-t border-slate-800/80 bg-[#090b13]/60 p-2 rounded-xl border border-slate-800">
                  
                  {/* Preset Shortcuts */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block px-1">Quick Prompt Ideas:</span>
                    <div className="flex flex-wrap gap-1.5">
                      <button
                        onClick={() => {
                          setUserPrompt("Create a retro 50% discount flyer in striking neon violet, Space Grotesk header 'MIDNIGHT COUTURE' and white borders.");
                        }}
                        className="text-[11px] py-1 px-2.5 bg-slate-800/60 hover:bg-slate-800 text-slate-300 rounded-full border border-slate-700/60 transition-all text-left truncate max-w-[170px]"
                      >
                        ⚡ Midnight Couture Neon
                      </button>
                      <button
                        onClick={() => {
                          setUserPrompt("Make an organic creamy coffee background, rich espresso text saying 'BREW COFFEE', and a warm sticker tag 'Fresh Daily' centered.");
                        }}
                        className="text-[11px] py-1 px-2.5 bg-slate-800/60 hover:bg-slate-800 text-slate-300 rounded-full border border-slate-700/60 transition-all text-left truncate max-w-[170px]"
                      >
                        ☕ Creamy Espresso Post
                      </button>
                      <button
                        onClick={() => {
                          setUserPrompt("Minimalist luxury gold and gray voucher template, brand saying 'MAISON VILLE', centered fine golden line divider, title saying 'WINTER EXHIBITION'.");
                        }}
                        className="text-[11px] py-1 px-2.5 bg-slate-800/60 hover:bg-slate-800 text-slate-300 rounded-full border border-slate-700/60 transition-all text-left truncate max-w-[170px]"
                      >
                        ✨ Luxury Brand Frame
                      </button>
                    </div>
                  </div>
 
                  {/* Standard Text Area */}
                  <div className="relative">
                    <textarea
                      id="copilot_prompt_input"
                      value={userPrompt}
                      onChange={(e) => setUserPrompt(e.target.value)}
                      placeholder="Prompt layout details, text updates, position shifts..."
                      rows={2}
                      className="w-full bg-[#111422] border border-slate-800 focus:border-indigo-500/50 rounded-xl pl-3 pr-10 py-2.5 text-xs text-white placeholder-gray-500 outline-none resize-none focus:ring-1 focus:ring-indigo-500/20 transition-all leading-relaxed"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          sendPromptToCopilot(userPrompt);
                        }
                      }}
                    />
                    <button
                      id="btn_send_prompt"
                      onClick={() => sendPromptToCopilot(userPrompt)}
                      disabled={isCopilotGenerating || !userPrompt.trim()}
                      className="absolute right-2.5 bottom-2.5 p-1.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 text-white disabled:text-slate-600 rounded-lg transition-all active:scale-95 border-0 focus:outline-none"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
 
                  {/* Runtime AI Graphics Generator Block */}
                  <div className="pt-2 border-t border-slate-800/60">
                    <div className="flex items-center gap-1 mb-1 px-1">
                      <Image className="w-3 h-3 text-indigo-400" />
                      <span className="text-[10px] text-slate-400 font-semibold tracking-wide">Generate AI Graphic Asset Layer:</span>
                    </div>
                    <div className="flex gap-2">
                      <input
                        id="ai_asset_prompt_input"
                        type="text"
                        value={aiImagePrompt}
                        onChange={(e) => setAiImagePrompt(e.target.value)}
                        placeholder="e.g., A cinematic glowing futuristic blue lotus..."
                        className="flex-1 bg-gray-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none focus:border-indigo-500/50 transition-all placeholder-gray-500 font-medium"
                      />
                      <button
                        id="btn_generate_asset"
                        onClick={generateImageFromAIPrompt}
                        disabled={isAIGenningImage || !aiImagePrompt.trim()}
                        className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-indigo-400 font-semibold text-xs rounded-lg border border-indigo-500/25 hover:border-indigo-500/50 hover:bg-indigo-500/5 disabled:opacity-50 transition-all shrink-0 active:scale-95"
                      >
                        {isAIGenningImage ? "Synthesizing..." : "Create Layer"}
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            )}

            {/* MANUAL WYSIWYG LAYERS & PROPERTIES ADJUSTMENT */}
            {activeTab === 'editor' && (
              <div className="space-y-5 animate-fade-in text-xs">
                
                {/* TOOLBAR FOR ADDING LAYERS */}
                <div className="p-3 bg-gray-900/40 rounded-xl border border-gray-800/80 space-y-2">
                  <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider block">Add Custom Canvas Layer:</span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      id="btn_add_text"
                      onClick={() => addLayer("text")}
                      className="flex items-center justify-center gap-1.5 py-1.5 bg-gray-800/60 hover:bg-gray-800 text-gray-200 rounded-lg hover:text-white transition-all border border-gray-700/60"
                    >
                      <FontIcon className="w-3.5 h-3.5" />
                      <span>Text Layer</span>
                    </button>
                    <button
                      id="btn_add_shape"
                      onClick={() => addLayer("shape")}
                      className="flex items-center justify-center gap-1.5 py-1.5 bg-gray-800/60 hover:bg-gray-800 text-gray-200 rounded-lg hover:text-white transition-all border border-gray-700/60"
                    >
                      <Square className="w-3.5 h-3.5" />
                      <span>Shape Layer</span>
                    </button>
                    <button
                      id="btn_add_badge"
                      onClick={() => addLayer("badge")}
                      className="flex items-center justify-center gap-1.5 py-1.5 bg-gray-800/60 hover:bg-gray-800 text-gray-200 rounded-lg hover:text-white transition-all border border-gray-700/60"
                    >
                      <BadgeAlert className="w-3.5 h-3.5" />
                      <span>Sticker/Badge</span>
                    </button>
                    <button
                      id="btn_add_image"
                      onClick={() => addLayer("image")}
                      className="flex items-center justify-center gap-1.5 py-1.5 bg-gray-800/60 hover:bg-gray-800 text-gray-200 rounded-lg hover:text-white transition-all border border-gray-700/60"
                    >
                      <Image className="w-3.5 h-3.5" />
                      <span>Photo Layer</span>
                    </button>
                  </div>
                </div>

                {/* SELECTED LAYER PROPERTIES BOX */}
                {selectedLayerId ? (
                  <div className="space-y-4">
                    
                    {/* Layer Identifier Row */}
                    <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                      <div className="flex items-center gap-2">
                        <Move className="w-4 h-4 text-amber-400" />
                        <div>
                          <p className="font-semibold text-gray-100 capitalize">
                            Active: {getActiveLayer()?.type} Layer
                          </p>
                          <p className="text-[10px] font-mono text-gray-500">ID: {selectedLayerId}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => reorderSelectedLayer('up')}
                          title="Bring Layer Forward"
                          className="p-1 hover:bg-gray-800 rounded text-gray-400 hover:text-white"
                        >
                          <ArrowUp className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => reorderSelectedLayer('down')}
                          title="Send Layer Backward"
                          className="p-1 hover:bg-gray-800 rounded text-gray-400 hover:text-white"
                        >
                          <ArrowDown className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={deleteSelectedLayer}
                          title="Delete Layer"
                          className="p-1 hover:bg-red-950/40 rounded text-gray-400 hover:text-red-400 ml-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* DYNAMIC SHAPE CONTROLS */}
                    {getActiveLayer()?.type === "text" && (
                      <div className="space-y-3 p-3 bg-gray-900/40 rounded-xl border border-gray-800">
                        <span className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">Text Content & Font Settings</span>
                        
                        <div className="space-y-1">
                          <label className="text-[10px] text-gray-400">Content:</label>
                          <textarea
                            value={(getActiveLayer() as any).text}
                            onChange={(e) => updateSelectedLayerProps({ text: e.target.value })}
                            rows={3}
                            className="w-full bg-gray-900 border border-gray-800 rounded p-1.5 text-xs text-white"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="space-y-1">
                            <label className="text-[10px] text-gray-400">Font Family:</label>
                            <select
                              value={(getActiveLayer() as any).fontFamily}
                              onChange={(e) => updateSelectedLayerProps({ fontFamily: e.target.value })}
                              className="w-full bg-gray-900 border border-gray-800 rounded p-1 text-xs text-white"
                            >
                              <option value="Inter">Inter (Sans)</option>
                              <option value="Space Grotesk">Space Grotesk</option>
                              <option value="Playfair Display">Playfair Serif</option>
                              <option value="JetBrains Mono">JetBrains Mono</option>
                            </select>
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] text-gray-400">Font Weight:</label>
                            <select
                              value={(getActiveLayer() as any).fontWeight}
                              onChange={(e) => updateSelectedLayerProps({ fontWeight: e.target.value })}
                              className="w-full bg-gray-900 border border-gray-800 rounded p-1 text-xs text-white"
                            >
                              <option value="300">Light</option>
                              <option value="normal">Normal</option>
                              <option value="semibold">Medium</option>
                              <option value="bold">Bold</option>
                              <option value="900">Black/Heavy</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="space-y-1">
                            <label className="text-[10px] text-gray-400">Font Size (px):</label>
                            <input
                              type="number"
                              value={(getActiveLayer() as any).fontSize}
                              onChange={(e) => updateSelectedLayerProps({ fontSize: parseInt(e.target.value) || 20 })}
                              className="w-full bg-gray-900 border border-gray-800 rounded p-1 text-xs text-white"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] text-gray-400">Color:</label>
                            <div className="flex gap-1.5 items-center">
                              <input
                                type="color"
                                value={(getActiveLayer() as any).color}
                                onChange={(e) => updateSelectedLayerProps({ color: e.target.value })}
                                className="w-7 h-7 bg-transparent border-0 rounded cursor-pointer shrink-0"
                              />
                              <input
                                type="text"
                                value={(getActiveLayer() as any).color}
                                onChange={(e) => updateSelectedLayerProps({ color: e.target.value })}
                                className="w-full bg-gray-900 border border-gray-800 rounded px-1.5 py-1 text-xs text-white font-mono"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="space-y-1">
                            <label className="text-[10px] text-gray-400">Align:</label>
                            <select
                              value={(getActiveLayer() as any).align}
                              onChange={(e) => updateSelectedLayerProps({ align: e.target.value as any })}
                              className="w-full bg-gray-900 border border-gray-800 rounded p-1 text-xs text-white"
                            >
                              <option value="left">Left</option>
                              <option value="center">Center</option>
                              <option value="right">Right</option>
                            </select>
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] text-gray-400">Spacing (px):</label>
                            <input
                              type="number"
                              value={(getActiveLayer() as any).letterSpacing || 0}
                              onChange={(e) => updateSelectedLayerProps({ letterSpacing: parseInt(e.target.value) || 0 })}
                              className="w-full bg-gray-900 border border-gray-800 rounded p-1 text-xs text-white"
                            />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] text-indigo-400 font-semibold flex items-center gap-1">
                            <span>💡 Tip:</span>
                          </label>
                          <p className="text-[11px] text-gray-400 bg-gray-900/60 p-1.5 rounded">
                            You can also double-click on any text directly inside the canvas to rewrite it instantly!
                          </p>
                        </div>

                      </div>
                    )}

                    {getActiveLayer()?.type === "shape" && (
                      <div className="space-y-3 p-3 bg-gray-900/40 rounded-xl border border-gray-800">
                        <span className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">Shape Dimensions & Borders</span>
                        
                        <div className="grid grid-cols-2 gap-2">
                          <div className="space-y-1">
                            <label className="text-[10px] text-gray-400">Shape Type:</label>
                            <select
                              value={(getActiveLayer() as any).shapeType}
                              onChange={(e) => updateSelectedLayerProps({ shapeType: e.target.value as any })}
                              className="w-full bg-gray-900 border border-gray-800 rounded p-1 text-xs text-white"
                            >
                              <option value="rect">Rectangle</option>
                              <option value="circle">Circle</option>
                              <option value="triangle">Triangle</option>
                            </select>
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] text-gray-400">Fill Color:</label>
                            <input
                              type="color"
                              value={(getActiveLayer() as any).fill}
                              onChange={(e) => updateSelectedLayerProps({ fill: e.target.value })}
                              className="w-full h-7 bg-transparent border-0 cursor-pointer"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="space-y-1">
                            <label className="text-[10px] text-gray-400">Stroke Color:</label>
                            <input
                              type="color"
                              value={(getActiveLayer() as any).stroke}
                              onChange={(e) => updateSelectedLayerProps({ stroke: e.target.value })}
                              className="w-full h-7 bg-transparent border-0 cursor-pointer"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] text-gray-400">Stroke width (px):</label>
                            <input
                              type="number"
                              value={(getActiveLayer() as any).strokeWidth || 0}
                              onChange={(e) => updateSelectedLayerProps({ strokeWidth: parseInt(e.target.value) || 0 })}
                              className="w-full bg-gray-900 border border-gray-800 rounded p-1 text-xs text-white"
                            />
                          </div>
                        </div>

                        {(getActiveLayer() as any).shapeType === "rect" && (
                          <div className="space-y-1">
                            <label className="text-[10px] text-gray-400">Corner Radius (px):</label>
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={(getActiveLayer() as any).borderRadius || 0}
                              onChange={(e) => updateSelectedLayerProps({ borderRadius: parseInt(e.target.value) || 0 })}
                              className="w-full accent-indigo-500"
                            />
                          </div>
                        )}
                      </div>
                    )}

                    {getActiveLayer()?.type === "badge" && (
                      <div className="space-y-3 p-3 bg-gray-900/40 rounded-xl border border-gray-800">
                        <span className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">Badge & Sticker Settings</span>
                        
                        <div className="space-y-1">
                          <label className="text-[10px] text-gray-400">Sticker Text:</label>
                          <input
                            type="text"
                            value={(getActiveLayer() as any).text}
                            onChange={(e) => updateSelectedLayerProps({ text: e.target.value })}
                            className="w-full bg-gray-900 border border-gray-800 rounded p-1.5 text-xs text-white"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="space-y-1">
                            <label className="text-[10px] text-gray-400">Layout Shape:</label>
                            <select
                              value={(getActiveLayer() as any).badgeStyle}
                              onChange={(e) => updateSelectedLayerProps({ badgeStyle: e.target.value as any })}
                              className="w-full bg-gray-900 border border-gray-800 rounded p-1 text-xs text-white"
                            >
                              <option value="banner">Ribbon banner</option>
                              <option value="circle">Badge circle</option>
                              <option value="badge">Pill badge</option>
                            </select>
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] text-gray-400">Sticker Background:</label>
                            <input
                              type="color"
                              value={(getActiveLayer() as any).fill}
                              onChange={(e) => updateSelectedLayerProps({ fill: e.target.value })}
                              className="w-full h-7 bg-transparent border-0 cursor-pointer"
                            />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] text-gray-400">Text color:</label>
                          <input
                            type="color"
                            value={(getActiveLayer() as any).textColor}
                            onChange={(e) => updateSelectedLayerProps({ textColor: e.target.value })}
                            className="w-full h-7 bg-transparent border-0 cursor-pointer"
                          />
                        </div>
                      </div>
                    )}

                    {getActiveLayer()?.type === "image" && (
                      <div className="space-y-3 p-3 bg-gray-900/40 rounded-xl border border-gray-800">
                        <span className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">Photo layer details</span>
                        
                        <div className="space-y-1">
                          <label className="text-[10px] text-gray-400">Image Source (URL):</label>
                          <input
                            type="text"
                            value={(getActiveLayer() as any).src}
                            onChange={(e) => updateSelectedLayerProps({ src: e.target.value })}
                            className="w-full bg-gray-900 border border-gray-800 rounded p-1.5 text-xs text-white font-mono"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="space-y-1">
                            <label className="text-[10px] text-gray-400">Corners (px):</label>
                            <input
                              type="number"
                              value={(getActiveLayer() as any).cornerRadius || 0}
                              onChange={(e) => updateSelectedLayerProps({ cornerRadius: parseInt(e.target.value) || 0 })}
                              className="w-full bg-gray-900 border border-gray-800 rounded p-1 text-xs text-white"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] text-gray-400">Blur filter (px):</label>
                            <input
                              type="number"
                              value={(getActiveLayer() as any).blur || 0}
                              onChange={(e) => updateSelectedLayerProps({ blur: parseInt(e.target.value) || 0 })}
                              className="w-full bg-gray-900 border border-gray-800 rounded p-1 text-xs text-white"
                            />
                          </div>
                        </div>

                        <button
                          onClick={handleEnhanceSelectedLayer}
                          className="w-full flex items-center justify-center gap-2 py-1.5 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/20 rounded-lg text-xs font-semibold cursor-pointer"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>AI Redraw / Enhance Layer</span>
                        </button>
                      </div>
                    )}

                    {/* GENERAL TRANSFORM LAYOUT CONTROLS */}
                    <div className="space-y-3 p-3 bg-gray-900/40 rounded-xl border border-gray-800">
                      <span className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">Universal Layout Transforms</span>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <label className="text-[10px] text-gray-400">X Coordinate:</label>
                          <input
                            type="number"
                            value={getActiveLayer()?.x}
                            onChange={(e) => updateSelectedLayerProps({ x: parseInt(e.target.value) || 0 })}
                            className="w-full bg-gray-900 border border-gray-800 rounded p-1 text-xs text-white"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-gray-400">Y Coordinate:</label>
                          <input
                            type="number"
                            value={getActiveLayer()?.y}
                            onChange={(e) => updateSelectedLayerProps({ y: parseInt(e.target.value) || 0 })}
                            className="w-full bg-gray-900 border border-gray-800 rounded p-1 text-xs text-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <label className="text-[10px] text-gray-400">Width (px):</label>
                          <input
                            type="number"
                            value={getActiveLayer()?.width}
                            onChange={(e) => updateSelectedLayerProps({ width: parseInt(e.target.value) || 50 })}
                            className="w-full bg-gray-900 border border-gray-800 rounded p-1 text-xs text-white"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-gray-400">Height (px):</label>
                          <input
                            type="number"
                            value={getActiveLayer()?.height}
                            onChange={(e) => updateSelectedLayerProps({ height: parseInt(e.target.value) || 50 })}
                            className="w-full bg-gray-900 border border-gray-800 rounded p-1 text-xs text-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <label className="text-[10px] text-gray-400">Rotation (deg):</label>
                          <input
                            type="number"
                            value={getActiveLayer()?.rotation}
                            onChange={(e) => updateSelectedLayerProps({ rotation: parseInt(e.target.value) || 0 })}
                            className="w-full bg-gray-900 border border-gray-800 rounded p-1 text-xs text-white"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-gray-400">Opacity (alpha):</label>
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.05"
                            value={getActiveLayer()?.opacity}
                            onChange={(e) => updateSelectedLayerProps({ opacity: parseFloat(e.target.value) || 1 })}
                            className="w-full accent-indigo-500"
                          />
                        </div>
                      </div>
                    </div>

                  </div>
                ) : (
                  <div className="p-8 text-center text-gray-500 border border-dashed border-gray-800 rounded-xl">
                    <Move className="w-8 h-8 mx-auto text-gray-700 mb-2" />
                    <p className="font-semibold text-gray-400 text-xs">No Canvas Layer Selected</p>
                    <p className="text-[11px] text-gray-500 mt-1">Tap any text or shape inside the middle preview workspace to customize its look directly here!</p>
                  </div>
                )}

                {/* BACKGROUND PROPERTIES SECTION */}
                <div className="space-y-3 p-3 bg-gray-900/40 rounded-xl border border-gray-800">
                  <span className="text-[10px] text-gray-100 font-bold uppercase tracking-wider block">Master Canvas Frame Background</span>
                  
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-gray-400">Background Type:</label>
                    <div className="grid grid-cols-3 gap-1">
                      {(["color", "gradient", "image"] as const).map((t) => (
                        <button
                          key={t}
                          onClick={() => {
                            setActiveTemplate((prev) => ({
                              ...prev,
                              background: {
                                ...prev.background,
                                type: t,
                                // Default gradients/colors on switch
                                ...(t === "gradient" && !prev.background.gradient ? {
                                  gradient: { from: "#3b82f6", to: "#1d4ed8", angle: 135 }
                                } : {}),
                                ...(t === "image" && !prev.background.imageUrl ? {
                                  imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
                                } : {})
                              }
                            }));
                          }}
                          className={`py-1 rounded text-[10px] font-semibold border capitalize transition-all cursor-pointer ${
                            activeTemplate.background.type === t
                              ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/30"
                              : "bg-gray-900 text-gray-400 border-gray-800 hover:text-gray-200"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {activeTemplate.background.type === "color" && (
                    <div className="space-y-1">
                      <label className="text-[10px] text-gray-400">Solid Color Hex:</label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={activeTemplate.background.color}
                          onChange={(e) => setActiveTemplate(prev => ({
                            ...prev,
                            background: { ...prev.background, color: e.target.value }
                          }))}
                          className="w-10 h-8 bg-transparent border-0 cursor-pointer"
                        />
                        <input
                          type="text"
                          value={activeTemplate.background.color}
                          onChange={(e) => setActiveTemplate(prev => ({
                            ...prev,
                            background: { ...prev.background, color: e.target.value }
                          }))}
                          className="flex-1 bg-gray-900 border border-gray-800 rounded px-2 text-white font-mono"
                        />
                      </div>
                    </div>
                  )}

                  {activeTemplate.background.type === "gradient" && activeTemplate.background.gradient && (
                    <div className="space-y-2.5">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <label className="text-[10px] text-gray-400">From:</label>
                          <input
                            type="color"
                            value={activeTemplate.background.gradient.from}
                            onChange={(e) => setActiveTemplate(prev => ({
                              ...prev,
                              background: {
                                ...prev.background,
                                gradient: { ...prev.background.gradient!, from: e.target.value }
                              }
                            }))}
                            className="w-full h-8 bg-transparent border-0 cursor-pointer"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-gray-400">To:</label>
                          <input
                            type="color"
                            value={activeTemplate.background.gradient.to}
                            onChange={(e) => setActiveTemplate(prev => ({
                              ...prev,
                              background: {
                                ...prev.background,
                                gradient: { ...prev.background.gradient!, to: e.target.value }
                              }
                            }))}
                            className="w-full h-8 bg-transparent border-0 cursor-pointer"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] text-gray-400">Angle (deg): {activeTemplate.background.gradient.angle}°</label>
                        <input
                          type="range"
                          min="0"
                          max="360"
                          value={activeTemplate.background.gradient.angle}
                          onChange={(e) => setActiveTemplate(prev => ({
                            ...prev,
                            background: {
                              ...prev.background,
                              gradient: { ...prev.background.gradient!, angle: parseInt(e.target.value) || 0 }
                            }
                          }))}
                          className="w-full accent-indigo-500"
                        />
                      </div>
                    </div>
                  )}

                  {activeTemplate.background.type === "image" && (
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <label className="text-[10px] text-gray-400">Image URL:</label>
                        <input
                          type="text"
                          value={activeTemplate.background.imageUrl || ""}
                          onChange={(e) => setActiveTemplate(prev => ({
                            ...prev,
                            background: { ...prev.background, imageUrl: e.target.value }
                          }))}
                          placeholder="Unsplash, base64 or custom graphic url..."
                          className="w-full bg-gray-900 border border-gray-800 rounded p-1.5 text-white font-mono"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 font-mono block">Recommended aspect ratio: 1:1</span>
                      </div>
                    </div>
                  )}

                </div>

              </div>
            )}

            {/* PRESETS LIST FOR FAST GENERATION/STARTING OUT */}
            {activeTab === 'presets' && (
              <div className="space-y-3 animate-fade-in text-xs">
                {DESIGN_PRESETS.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => {
                      setActiveTemplate(preset.template);
                      setSelectedLayerId(null);
                      setChatMessages((prev) => [
                        ...prev,
                        {
                          id: `preset_load_${Date.now()}`,
                          role: "assistant",
                          content: `Loaded the base preset template style "${preset.name}". You can now write commands like 'make background deep green' or drag individual layers directly to adjust.`,
                          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                        }
                      ]);
                    }}
                    className="w-full bg-[#0F1117]/60 hover:bg-indigo-950/20 border border-slate-800 hover:border-indigo-500/30 p-4 rounded-xl transition-all text-left flex flex-col space-y-1.5 cursor-pointer outline-none focus:outline-none"
                  >
                    <div className="flex items-center justify-between w-full">
                      <p className="font-bold text-indigo-300 text-sm">{preset.name}</p>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    </div>
                    <p className="text-[11px] text-slate-400 font-medium">{preset.description}</p>
                  </button>
                ))}
              </div>
            )}

          </div>

          {/* SIDEBAR FOOTER INDICATOR */}
          <div className="p-3 border-t border-slate-800 bg-[#0A0C10] text-center">
            <span className="text-[9px] font-mono text-slate-500 tracking-wider">SECURE SERVER-SIDE CONVERSION ACTIVATED</span>
          </div>
        </section>

        {/* MIDDLE COLUMN: DRAG-AND-RESIZE WORKSPACE AREA */}
        <section id="canvas_workspace" className="lg:col-span-8 flex flex-col bg-[#0A0C10] p-4 lg:p-8 h-[calc(100vh-64px)] relative overflow-hidden">
          
          {/* Top Panel Actions for active selection */}
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-gray-500 uppercase tracking-wide font-bold font-mono">Workspace Canvas:</span>
              <span className="font-mono text-gray-300 font-semibold bg-gray-900 border border-gray-800 px-2.5 py-1 rounded">
                {activeTemplate.width} x {activeTemplate.height} px
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  // Quick layer deselection
                  setSelectedLayerId(null);
                }}
                className="px-3 py-1.5 bg-gray-900 border border-gray-800/80 rounded hover:bg-gray-850 text-gray-300 transition-all font-semibold active:scale-95 text-xs select-none"
              >
                Clear Selection
              </button>
              <button
                onClick={() => {
                  // Undo / Revert to first preset helper
                  setActiveTemplate(DESIGN_PRESETS[0].template);
                  setSelectedLayerId(null);
                }}
                className="px-3 py-1.5 bg-gray-900 border border-gray-800/80 rounded hover:bg-gray-850 text-gray-400 hover:text-gray-200 transition-all font-semibold active:scale-95 text-xs select-none flex items-center gap-1.5"
              >
                <Undo className="w-3 h-3" />
                <span>Reset Stage</span>
              </button>
            </div>
          </div>

          {/* CONTAINER AND CANVAS ROW */}
          <div
            ref={canvasContainerRef}
            className="flex-1 w-full flex items-center justify-center relative overflow-hidden select-none"
          >
            {/* Visual Frame boundaries helper */}
            <div
              id="design_canvas"
              style={{
                width: `${activeTemplate.width}px`,
                height: `${activeTemplate.height}px`,
                transform: `scale(${canvasScale})`,
                transformOrigin: "center center"
              }}
              className="relative shrink-0 shadow-2xl transition-transform duration-100 ease-out border border-gray-800/80 rounded-sm overflow-hidden"
            >
              
              {/* BACK GROUND LAYER */}
              <div
                id="canvas_background_layer"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: activeTemplate.background.color,
                  backgroundImage: activeTemplate.background.type === "gradient" && activeTemplate.background.gradient
                    ? `linear-gradient(${activeTemplate.background.gradient.angle}deg, ${activeTemplate.background.gradient.from}, ${activeTemplate.background.gradient.to})`
                    : activeTemplate.background.type === "image" && activeTemplate.background.imageUrl
                      ? `url(${activeTemplate.background.imageUrl})`
                      : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center center"
                }}
                className="absolute inset-0 pointer-events-none"
              />

              {/* RENDER DYNAMIC CANVAS LAYERS */}
              {activeTemplate.layers.map((layer) => {
                const isSelected = selectedLayerId === layer.id;
                
                // Absolute parameters calculated on the master 800x800 box
                const style: React.CSSProperties = {
                  position: "absolute",
                  left: `${layer.x}px`,
                  top: `${layer.y}px`,
                  width: `${layer.width}px`,
                  height: `${layer.height}px`,
                  transform: `translate(-50%, -50%) rotate(${layer.rotation || 0}deg)`,
                  zIndex: layer.zIndex,
                  opacity: layer.opacity,
                  cursor: "move",
                  userSelect: "none"
                };

                return (
                  <div
                    key={layer.id}
                    id={`dom_layer_${layer.id}`}
                    style={style}
                    onMouseDown={(e) => handleStartDrag(e, layer.id, 'drag')}
                    onTouchStart={(e) => handleStartDrag(e, layer.id, 'drag')}
                    className={`transition-shadow flex items-center justify-center ${
                      isSelected ? "ring-2 ring-indigo-500 ring-offset-2 ring-offset-black/50 shadow-xl shadow-indigo-500/20" : "hover:ring-1 hover:ring-slate-700"
                    }`}
                  >
                    
                    {/* CORE LAYER DATA SWITCH */}
                    
                    {/* TEXT BLOCK */}
                    {layer.type === "text" && (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          color: (layer as any).color,
                          fontFamily: (layer as any).fontFamily,
                          fontSize: `${(layer as any).fontSize}px`,
                          fontWeight: (layer as any).fontWeight || "bold",
                          fontStyle: (layer as any).fontStyle || "normal",
                          textAlign: (layer as any).align || "center",
                          letterSpacing: `${(layer as any).letterSpacing || 0}px`,
                          lineHeight: "1.25",
                          whiteSpace: "pre-line",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: (layer as any).align === "left" ? "flex-start" : (layer as any).align === "right" ? "flex-end" : "center"
                        }}
                        onDoubleClick={() => {
                          const rewrite = prompt("Edit absolute layer text content:", (layer as any).text);
                          if (rewrite !== null) {
                            updateSelectedLayerProps({ text: rewrite });
                          }
                        }}
                        className="select-none overflow-hidden"
                      >
                        {(layer as any).text}
                      </div>
                    )}

                    {/* SHAPE LAYER */}
                    {layer.type === "shape" && (
                      <div className="w-full h-full relative">
                        {/* Rect shape representation */}
                        {(layer as any).shapeType === "rect" && (
                          <div
                            style={{
                              width: "100%",
                              height: "100%",
                              backgroundColor: (layer as any).fill,
                              border: (layer as any).strokeWidth
                                ? `${(layer as any).strokeWidth}px solid ${(layer as any).stroke}`
                                : "none",
                              borderRadius: `${(layer as any).borderRadius || 0}px`
                            }}
                          />
                        )}
                        {/* Circle shape representation */}
                        {(layer as any).shapeType === "circle" && (
                          <div
                            style={{
                              width: "100%",
                              height: "100%",
                              backgroundColor: (layer as any).fill,
                              border: (layer as any).strokeWidth
                                ? `${(layer as any).strokeWidth}px solid ${(layer as any).stroke}`
                                : "none",
                              borderRadius: "50%"
                            }}
                          />
                        )}
                        {/* Triangle shape representation */}
                        {(layer as any).shapeType === "triangle" && (
                          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon
                              points="50,0 100,100 0,100"
                              fill={(layer as any).fill}
                              stroke={(layer as any).stroke}
                              strokeWidth={(layer as any).strokeWidth * 0.5}
                            />
                          </svg>
                        )}
                      </div>
                    )}

                    {/* BADGE STICKER */}
                    {layer.type === "badge" && (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: (layer as any).fill,
                          color: (layer as any).textColor,
                          borderRadius: (layer as any).badgeStyle === "circle" ? "50%" : "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "Space Grotesk, sans-serif",
                          fontSize: "15px",
                          fontWeight: "bold",
                          textAlign: "center",
                          boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
                          padding: "0 12px"
                        }}
                        className="select-none border border-black/10 overflow-hidden"
                      >
                        {(layer as any).text}
                      </div>
                    )}

                    {/* PHOTO IMAGE BLOCK */}
                    {layer.type === "image" && (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: `${(layer as any).cornerRadius || 0}px`,
                          overflow: "hidden"
                        }}
                        className="relative"
                      >
                        <img
                          src={(layer as any).src}
                          alt="Layout content"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            filter: (layer as any).blur ? `blur(${(layer as any).blur}px)` : "none"
                          }}
                          referrerPolicy="no-referrer"
                          className="pointer-events-none select-none"
                        />
                      </div>
                    )}

                    {/* SELECTED BOUNDING HIGHLIGHT GRID GRIPS */}
                    {isSelected && (
                      <>
                        {/* Label name tag on top */}
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-indigo-600 text-white border border-indigo-400/20 text-[9px] font-bold py-0.5 px-2 rounded uppercase tracking-wider font-mono shadow-md pointer-events-none whitespace-nowrap">
                          {layer.type} Layer
                        </div>

                        {/* Bottom-Right Resize Handle */}
                        <div
                          onMouseDown={(e) => handleStartDrag(e, layer.id, 'resize-br')}
                          onTouchStart={(e) => handleStartDrag(e, layer.id, 'resize-br')}
                          className="absolute -bottom-1 w-3 h-3 bg-white border-2 border-indigo-500 rounded-full cursor-se-resize -right-1 z-50 hover:scale-125 transition-transform"
                        />
                        
                        {/* Bottom-Left Resize Handle */}
                        <div
                          onMouseDown={(e) => handleStartDrag(e, layer.id, 'resize-bl')}
                          onTouchStart={(e) => handleStartDrag(e, layer.id, 'resize-bl')}
                          className="absolute -bottom-1 w-3 h-3 bg-white border-2 border-indigo-500 rounded-full cursor-sw-resize -left-1 z-50 hover:scale-125 transition-transform"
                        />
                      </>
                    )}

                  </div>
                );
              })}

            </div>
          </div>

          {/* LOWER WORKSPACE NOTICE */}
          <div className="text-center p-3 text-slate-400 bg-slate-900/40 rounded-xl border border-slate-800 flex items-center justify-center gap-2 shadow-inner">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
            <span className="text-[10px] uppercase font-bold font-mono tracking-wider text-slate-400">
              Workspace active &bull; Double-click any Text layer box to write details, drag corners to resize
            </span>
          </div>

        </section>

      </main>

    </div>
  );
}
