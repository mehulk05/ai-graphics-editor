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
  Undo,
  Circle,
  Ticket,
  FileUp,
  AlertCircle,
  Monitor,
  Smartphone,
  FileText
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

const ASPECT_PRESETS = [
  { name: "Square", icon: Square, width: 800, height: 800, ratio: "1:1", desc: "Instagram Post" },
  { name: "Landscape", icon: Monitor, width: 1200, height: 675, ratio: "16:9", desc: "Landscape Banner, Ads, YouTube" },
  { name: "Portrait", icon: Smartphone, width: 800, height: 1000, ratio: "4:5", desc: "Instagram Feed Portrait" },
  { name: "Story / Reels", icon: Smartphone, width: 720, height: 1280, ratio: "9:16", desc: "IG Story, Reels, Shorts, TikTok" },
  { name: "Pinterest Pin", icon: FileText, width: 800, height: 1200, ratio: "2:3", desc: "Pinterest Pins" }
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
  const [activeTab, setActiveTab] = useState<'copilot' | 'presets'>('copilot');
  const [isFullscreenPreview, setIsFullscreenPreview] = useState<boolean>(false);
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

  // --- DYNAMIC CANVAS SCALE CONTROLLER ---
  useEffect(() => {
    const handleResize = () => {
      if (canvasContainerRef.current) {
        const containerWidth = canvasContainerRef.current.clientWidth;
        const containerHeight = canvasContainerRef.current.clientHeight || 650;
        
        // Calculate max scale fitting within container widths and heights with margins
        const scaleW = (containerWidth - 64) / activeTemplate.width;
        const scaleH = (containerHeight - 64) / activeTemplate.height;
        
        // Pick the tighter scale constraint so the canvas is fully visible and boxed
        const targetScale = Math.min(scaleW, scaleH, 1.0);
        setCanvasScale(Math.max(targetScale, 0.2));
      }
    };
    
    // Recalculate layout size on element mounts or windows resizing
    handleResize();
    
    if (canvasContainerRef.current) {
      const observer = new ResizeObserver(() => {
        handleResize();
      });
      observer.observe(canvasContainerRef.current);
      window.addEventListener("resize", handleResize);
      return () => {
        observer.disconnect();
        window.removeEventListener("resize", handleResize);
      };
    } else {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [activeTemplate.width, activeTemplate.height]);

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

  const reorderSpecificLayer = (layerId: string, direction: 'up' | 'down') => {
    setActiveTemplate((prev) => {
      // 1. Sort layers by zIndex ascending, using array index as tiebreaker
      const getOriginalIndex = (lay: Layer) => {
        return prev.layers.indexOf(lay);
      };

      const customSorted = [...prev.layers].sort((a, b) => {
        if (a.zIndex !== b.zIndex) return a.zIndex - b.zIndex;
        return getOriginalIndex(a) - getOriginalIndex(b);
      });

      // 2. Normalize zIndices to be 1, 2, ..., N
      customSorted.forEach((layer, i) => {
        layer.zIndex = i + 1;
      });

      // 3. Find our target layer in the sorted list
      const idx = customSorted.findIndex((l) => l.id === layerId);
      if (idx === -1) return prev;

      // 4. Calculate target index in sorted list
      const targetIdx = direction === 'up' ? idx + 1 : idx - 1;

      if (targetIdx >= 0 && targetIdx < customSorted.length) {
        // Swap their zIndexes
        const tempZ = customSorted[idx].zIndex;
        customSorted[idx].zIndex = customSorted[targetIdx].zIndex;
        customSorted[targetIdx].zIndex = tempZ;
      }

      // 5. Keep the array sorted by zIndex ascending so DOM matches stacking sequence
      const finalLayers = customSorted.sort((a, b) => a.zIndex - b.zIndex);
      return { ...prev, layers: finalLayers };
    });
  };

  const reorderSelectedLayer = (direction: 'up' | 'down') => {
    if (!selectedLayerId) return;
    reorderSpecificLayer(selectedLayerId, direction);
  };

  const deleteSpecificLayer = (layerId: string) => {
    setActiveTemplate((prev) => ({
      ...prev,
      layers: prev.layers.filter((l) => l.id !== layerId)
    }));
    if (selectedLayerId === layerId) {
      setSelectedLayerId(null);
    }
  };

  // --- IMAGE TO VECTOR DIGITIZATION ENGINE (GEMINI MULTIMODAL) ---
  const [isVectorizing, setIsVectorizing] = useState<boolean>(false);
  const [vectorizeError, setVectorizeError] = useState<string | null>(null);
  const [vectorizeMimeType, setVectorizeMimeType] = useState<string>("image/png");

  const handleVectorizeImage = async () => {
    if (!uploadedImageBase64) return;
    setIsVectorizing(true);
    setVectorizeError(null);
    try {
      const response = await fetch("/api/design/vectorize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          base64Image: uploadedImageBase64,
          mimeType: vectorizeMimeType
        })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.details || data.error || "Failed to vectorize image.");
      }

      if (data.template) {
        setActiveTemplate(data.template);
        setSelectedLayerId(null);
        
        setChatMessages((prev) => [
          ...prev,
          {
            id: `vectorize_success_${Date.now()}`,
            role: "assistant",
            content: `✨ **AI Recreated Graphic layers successfully!** \n\n${data.message}\n\nI have fully parsed your uploaded image and recreated it as a clean, responsive set of vector shapes, solid backdrop cards, beautiful color palettes, and fully editable typography fields.\n\n**Unlock these interactive adjustments now:**\n- Double-click or select any text layer in the right sidebar properties panel to change words, weights, and alignment.\n- Select backgrounds, buttons, linear gradients, and boundaries to change colors instantly (e.g., customize blue to red).\n- Use the brand-new Stacking Layers List to order, drag-reorder, layer, or delete objects easily.`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            templateState: data.template
          }
        ]);

        setActiveTab("copilot");
      } else {
        throw new Error("No template received in response layout.");
      }
    } catch (err: any) {
      console.error("Vectorize error:", err);
      setVectorizeError(err.message || "An unexpected error occurred during recreation. Let's try with a raw file or different graphic format!");
    } finally {
      setIsVectorizing(false);
    }
  };

  const resizeActiveCanvas = (targetWidth: number, targetHeight: number) => {
    setActiveTemplate((prev) => {
      const oldW = prev.width;
      const oldH = prev.height;
      if (oldW === targetWidth && oldH === targetHeight) return prev;

      // 1. Calculate center points
      const oldCx = oldW / 2;
      const oldCy = oldH / 2;
      const newCx = targetWidth / 2;
      const newCy = targetHeight / 2;

      // 2. Compute translation values
      const dx = newCx - oldCx;
      const dy = newCy - oldCy;

      // 3. Shift layer positions by center alignment offsets to avoid layout breaking
      const adjustedLayers = prev.layers.map((layer) => ({
        ...layer,
        x: Math.round(layer.x + dx),
        y: Math.round(layer.y + dy)
      }));

      return {
        ...prev,
        width: targetWidth,
        height: targetHeight,
        layers: adjustedLayers
      };
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
        <section id="copilot_sidebar" className="lg:col-span-3 flex flex-col bg-[#0F1117] h-[calc(100vh-64px)] max-h-[calc(100vh-64px)] overflow-hidden">
          
          {/* TAB HEADER */}
          <div className="flex items-center justify-around border border-slate-800 bg-[#0A0C10] p-1 m-4 rounded-xl">
            <button
              id="tab_copilot"
              onClick={() => setActiveTab('copilot')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-[11px] font-semibold rounded-lg transition-all ${
                activeTab === 'copilot'
                  ? "bg-slate-800 text-white shadow-md border border-slate-700"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <Sparkles className="w-3 h-3 text-indigo-400 shrink-0" />
              <span>Copilot Chat</span>
            </button>
            <button
              id="tab_presets"
              onClick={() => setActiveTab('presets')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-[11px] font-semibold rounded-lg transition-all ${
                activeTab === 'presets'
                  ? "bg-slate-800 text-white shadow-md border border-slate-700"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <Grid className="w-3 h-3 text-indigo-400 shrink-0" />
              <span>Presets</span>
            </button>
            <button
              id="tab_importer"
              onClick={() => setActiveTab('importer')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-[11px] font-semibold rounded-lg transition-all relative ${
                activeTab === 'importer'
                  ? "bg-slate-800 text-white shadow-md border border-slate-700"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <FileUp className="w-3 h-3 text-indigo-400 shrink-0" />
              <span className="relative">
                AI Convert
                <span className="absolute -top-1.5 -right-2.5 w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping" />
              </span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            
            {/* AI GRAPHIC RECREATION IMPORTER */}
            {activeTab === 'importer' && (
              <div className="h-full flex flex-col justify-between space-y-4 animate-fade-in text-xs">
                <div className="space-y-4 pr-1">
                  
                  {/* Informational intro header */}
                  <div className="p-3.5 bg-gradient-to-br from-indigo-950/20 to-slate-900 border border-slate-800/80 rounded-xl space-y-2">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
                      <span className="text-[10px] text-indigo-300 font-mono font-bold uppercase tracking-wider">Multimodal OCR Vectorizer</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Upload any flat graphic draft (e.g. flyers, banner mockups, drawings, screenshots of existing designs). Our AI decomposes it into completely editable vector text fields, boxes, backplane cards, color schemes and stock images.
                    </p>
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono bg-slate-950/50 p-2 rounded border border-slate-800">
                      <AlertCircle className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                      <span>Replaces active workspace layers.</span>
                    </div>
                  </div>

                  {/* Drag-drop zone */}
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const file = e.dataTransfer.files?.[0];
                      if (file && file.type.startsWith("image/")) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setUploadedImageBase64(reader.result as string);
                          setVectorizeMimeType(file.type);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    onClick={() => {
                      const input = document.createElement("input");
                      input.type = "file";
                      input.accept = "image/*";
                      input.onchange = (e: any) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setUploadedImageBase64(reader.result as string);
                            setVectorizeMimeType(file.type);
                          };
                          reader.readAsDataURL(file);
                        }
                      };
                      input.click();
                    }}
                    className={`p-6 border-2 border-dashed rounded-xl flex flex-col items-center justify-center gap-3 text-center cursor-pointer transition-all ${
                      uploadedImageBase64
                        ? "border-indigo-500/50 bg-[#121622]/40"
                        : "border-slate-800 hover:border-indigo-600/50 hover:bg-[#11141D]/50"
                    }`}
                  >
                    {uploadedImageBase64 ? (
                      <div className="space-y-3 w-full">
                        <div className="relative w-full max-w-[140px] aspect-square mx-auto rounded-lg overflow-hidden border border-slate-800 shadow-md" onClick={(e) => e.stopPropagation()}>
                          <img
                            src={uploadedImageBase64}
                            alt="Uploaded draft preview"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setUploadedImageBase64(null);
                            }}
                            className="absolute top-1 right-1 p-1 bg-slate-950/80 hover:bg-slate-900 text-slate-300 hover:text-white rounded-full transition-all"
                            title="Remove image"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="space-y-0.5">
                          <p className="text-[10px] font-mono text-indigo-400 font-bold">Image loaded successfully</p>
                          <p className="text-[9px] text-slate-500">Click icon to replace</p>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/15">
                          <FileUp className="w-4 h-4 text-indigo-400 animate-bounce" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-semibold text-slate-200 text-xs">Drag & drop draft image here</p>
                          <p className="text-[10px] text-slate-500">PNG, JPG, or SVG up to 10MB</p>
                          <span className="text-[9px] text-indigo-400/80 font-mono underline inline-block pt-1">Or click to select photo</span>
                        </div>
                      </>
                    )}
                  </div>

                  {uploadedImageBase64 && (
                    <div className="space-y-3.5">
                      <button
                        onClick={handleVectorizeImage}
                        disabled={isVectorizing}
                        className="w-full py-3 bg-[#4f46e5] hover:bg-[#4338ca] text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg shadow-indigo-600/15 cursor-pointer disabled:opacity-50"
                      >
                        {isVectorizing ? (
                          <>
                            <RefreshCw className="w-3.5 h-3.5 animate-spin text-white" />
                            <span>AI Recreating Stacking Layers...</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-3.5 h-3.5 text-white" />
                            <span>Digitize as Editable Canvas Graphics</span>
                          </>
                        )}
                      </button>

                      {vectorizeError && (
                        <div className="p-3 bg-red-950/20 border border-red-900/30 text-red-400 text-[10px] font-mono rounded-lg flex items-start gap-1.5 leading-relaxed">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0 text-red-400/80 mt-0.5" />
                          <span>{vectorizeError}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Informative Help card */}
                  <div className="p-3 bg-slate-900/50 border border-slate-850/60 rounded-xl space-y-1">
                    <span className="text-[9px] text-slate-400 font-mono font-bold uppercase tracking-wider block">Recommended flow</span>
                    <ol className="list-decimal pl-4 text-[10px] text-slate-500 space-y-1 leading-relaxed">
                      <li>Pick an advertisement or photo similar to the Botox flyer</li>
                      <li>Drop it above and click "Digitize"</li>
                      <li>Tap any text lines to translate content or switch fonts</li>
                      <li>Tap shapes (such as buttons) and input Hex codes instantly</li>
                    </ol>
                  </div>

                </div>
              </div>
            )}

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
        <section id="canvas_workspace" className="lg:col-span-6 flex flex-col dot-grid p-4 lg:p-8 h-[calc(100vh-64px)] relative overflow-hidden">
          
          {/* Top Panel Actions for active selection */}
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2 text-xs bg-[#11141D]/35 p-2 rounded-xl border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-slate-400 uppercase tracking-wide font-bold font-mono text-[10px]">Viewport:</span>
              <span className="font-mono text-indigo-400 font-bold bg-[#161a25]/90 border border-slate-800/70 px-2.5 py-1 rounded-md text-[11px]">
                {activeTemplate.width} × {activeTemplate.height} px
              </span>
              <span className="font-mono text-slate-500 bg-slate-900 border border-slate-850 px-2 py-1 rounded text-[10px]" title="Auto-computed workspace scale">
                {Math.round(canvasScale * 100)}% Zoom
              </span>
            </div>
            
            {/* FLOATING ACTION PILLS */}
            <div className="flex items-center gap-1 bg-[#161a25]/90 border border-slate-800/80 p-0.5 rounded-lg shadow-sm shadow-black/80">
              <button
                onClick={() => addLayer("text")}
                className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-md transition-all cursor-pointer font-medium"
                title="Add Text Layer"
              >
                <FontIcon className="w-3.5 h-3.5 text-indigo-400" />
                <span>Text</span>
              </button>
              <button
                onClick={() => addLayer("shape")}
                className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-md transition-all cursor-pointer font-medium"
                title="Add Shape"
              >
                <Square className="w-3.5 h-3.5 text-indigo-400" />
                <span>Shape</span>
              </button>
              <button
                onClick={() => addLayer("badge")}
                className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-md transition-all cursor-pointer font-medium"
                title="Add brand badge/sticker"
              >
                <BadgeAlert className="w-3.5 h-3.5 text-indigo-400" />
                <span>Sticker</span>
              </button>
              <button
                onClick={() => addLayer("image")}
                className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-md transition-all cursor-pointer font-medium"
                title="Add photo layer"
              >
                <Image className="w-3.5 h-3.5 text-indigo-400" />
                <span>Photo</span>
              </button>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setIsFullscreenPreview(true)}
                className="px-2.5 py-1.5 bg-[#161a25]/60 hover:bg-[#161a25] border border-slate-800/80 rounded-lg text-indigo-400 hover:text-white hover:border-indigo-500/20 transition-all font-semibold active:scale-95 text-[11px] select-none flex items-center gap-1.5 cursor-pointer"
                title="View image in full screen lightbox presentation"
              >
                <Maximize2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Fullscreen View</span>
              </button>
              <button
                onClick={() => setSelectedLayerId(null)}
                className="px-2.5 py-1.5 bg-[#161a25]/60 hover:bg-[#161a25] border border-slate-800/80 rounded-lg hover:text-white text-slate-400 transition-all font-semibold active:scale-95 text-[11px] select-none cursor-pointer"
              >
                Deselect Base
              </button>
              <button
                onClick={() => {
                  // Undo / Revert to first preset helper
                  setActiveTemplate(DESIGN_PRESETS[0].template);
                  setSelectedLayerId(null);
                }}
                className="px-2.5 py-1.5 bg-[#161a25]/60 hover:bg-[#161a25] border border-slate-800/80 rounded-lg hover:text-slate-200 text-slate-400 transition-all font-semibold active:scale-95 text-[11px] select-none flex items-center gap-1.5 cursor-pointer"
              >
                <Undo className="w-3 h-3 text-slate-500" />
                <span>Reset Stage</span>
              </button>
            </div>
          </div>

          {/* QUICK CANVAS ASPECT RATIO FORMAT SELECTOR */}
          <div className="flex items-center justify-between mb-3 px-3 py-2 bg-[#11141D]/90 border border-slate-800/85 rounded-xl text-xs backdrop-blur-sm shadow-md animate-fade-in">
            <div className="flex items-center gap-2">
              <Sliders className="w-3.5 h-3.5 text-indigo-400" />
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-slate-200 uppercase font-mono tracking-wide">Aspect Ratio Format</span>
                <span className="text-[9px] text-slate-500 font-mono">Real-time center-aligned resize</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              {ASPECT_PRESETS.map((p) => {
                const isCurrent = activeTemplate.width === p.width && activeTemplate.height === p.height;
                const IconComp = p.icon;
                return (
                  <button
                    key={`aspect_preset_${p.name}`}
                    onClick={() => resizeActiveCanvas(p.width, p.height)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-[10.5px] font-bold rounded-lg border transition-all cursor-pointer ${
                      isCurrent
                        ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/15"
                        : "bg-[#161a25]/60 hover:bg-[#161a25] border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                    title={`${p.desc} (${p.width}x${p.height}px)`}
                  >
                    <IconComp className="w-3 h-3 shrink-0" />
                    <span>{p.name}</span>
                    <span className={`text-[9px] font-mono ${isCurrent ? "text-indigo-200" : "text-slate-500"}`}>{p.ratio}</span>
                  </button>
                );
              })}
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

        {/* RIGHT COLUMN: LAYERS & PROPERTIES INSPECTOR */}
        <section id="inspector_sidebar" className="lg:col-span-3 flex flex-col bg-[#0F1117] h-[calc(100vh-64px)] max-h-[calc(100vh-64px)] overflow-hidden border-l border-slate-800">
          <div className="p-4 border-b border-slate-800 bg-[#0A0C10] flex items-center justify-between shadow-sm shrink-0">
            <div className="flex items-center gap-2">
              <Sliders className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <h3 className="text-[10px] font-bold font-mono uppercase tracking-wider text-slate-200">Properties Inspector</h3>
            </div>
            {selectedLayerId && (
              <span className="text-[9px] bg-indigo-500/10 text-indigo-300 font-mono border border-indigo-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                Active Layer
              </span>
            )}
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            
            {/* TOOLBAR FOR QUICK ADDING LAYERS */}
            <div className="p-3 bg-[#11141D] rounded-xl border border-slate-800/80 space-y-2 shadow-inner">
              <span className="text-[9px] text-indigo-400 font-mono font-bold uppercase tracking-wider block">Add Custom Canvas Layer</span>
              <div className="grid grid-cols-4 gap-1.5 text-center">
                <button
                  onClick={() => addLayer("text")}
                  className="flex flex-col items-center justify-center py-2 bg-[#161A25]/60 hover:bg-[#161a25] hover:scale-[1.03] text-slate-300 rounded-lg hover:text-white transition-all border border-slate-800/40 cursor-pointer"
                  title="Add Text Layer"
                >
                  <FontIcon className="w-4 h-4 mb-1 text-indigo-400 font-bold" />
                  <span className="text-[9px] font-mono font-medium">Text</span>
                </button>
                <button
                  onClick={() => addLayer("shape")}
                  className="flex flex-col items-center justify-center py-2 bg-[#161A25]/60 hover:bg-[#161a25] hover:scale-[1.03] text-slate-300 rounded-lg hover:text-white transition-all border border-slate-800/40 cursor-pointer"
                  title="Add Shape"
                >
                  <Square className="w-4 h-4 mb-1 text-indigo-400" />
                  <span className="text-[9px] font-mono font-medium">Shape</span>
                </button>
                <button
                  onClick={() => addLayer("badge")}
                  className="flex flex-col items-center justify-center py-2 bg-[#161A25]/60 hover:bg-[#161a25] hover:scale-[1.03] text-slate-300 rounded-lg hover:text-white transition-all border border-slate-800/40 cursor-pointer"
                  title="Add Brand Sticker"
                >
                  <BadgeAlert className="w-4 h-4 mb-1 text-indigo-400" />
                  <span className="text-[9px] font-mono font-medium">Sticker</span>
                </button>
                <button
                  onClick={() => addLayer("image")}
                  className="flex flex-col items-center justify-center py-2 bg-[#161A25]/60 hover:bg-[#161a25] hover:scale-[1.03] text-slate-300 rounded-lg hover:text-white transition-all border border-slate-800/40 cursor-pointer"
                  title="Add Photo Layer"
                >
                  <Image className="w-4 h-4 mb-1 text-indigo-400" />
                  <span className="text-[9px] font-mono font-medium">Photo</span>
                </button>
              </div>
            </div>

            {/* DYNAMIC SELECTED LAYER PROPERTIES EDITING */}
            {selectedLayerId ? (
              <div className="space-y-4 text-xs animate-fade-in">
                
                {/* Layer identifier header card */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-indigo-500/10 rounded-lg flex items-center justify-center border border-indigo-500/25">
                      <Move className="w-3.5 h-3.5 text-indigo-400" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-100 capitalize text-xs">
                        Active {getActiveLayer()?.type} Layer
                      </p>
                      <p className="text-[9px] font-mono text-slate-500 tracking-wider">ID: {selectedLayerId.substring(0, 10)}..</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-[#121620] border border-slate-850 p-1 rounded-lg shrink-0 shadow-sm">
                    <button
                      onClick={() => reorderSelectedLayer('up')}
                      title="Bring Layer Forward"
                      className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => reorderSelectedLayer('down')}
                      title="Send Layer Backward"
                      className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={deleteSelectedLayer}
                      title="Delete Layer"
                      className="p-1 hover:bg-red-950/30 rounded text-slate-400 hover:text-red-400 transition-colors ml-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Sub-form text configurations */}
                {getActiveLayer()?.type === "text" && (
                  <div className="space-y-3.5 p-3 bg-[#11141D] rounded-xl border border-slate-800/80 shadow-md">
                    <div className="flex items-center gap-1.5 border-b border-slate-850 pb-1.5">
                      <FontIcon className="w-3.5 h-3.5 text-indigo-400" />
                      <span className="text-[10px] text-slate-200 font-mono font-bold uppercase tracking-wider">Text Content & Font</span>
                    </div>
                    <div className="space-y-1">
                      <textarea
                        value={(getActiveLayer() as any).text}
                        onChange={(e) => updateSelectedLayerProps({ text: e.target.value })}
                        rows={2}
                        placeholder="Type text box details..."
                        className="w-full bg-[#161a25] border border-slate-800 rounded-lg p-2 text-xs text-white focus:border-indigo-500/50 focus:outline-none placeholder-slate-500 leading-relaxed font-sans"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Font Family</label>
                        <select
                          value={(getActiveLayer() as any).fontFamily}
                          onChange={(e) => updateSelectedLayerProps({ fontFamily: e.target.value })}
                          className="w-full bg-[#161a25] border border-slate-850 rounded-lg px-2 py-1.5 text-xs text-slate-100 focus:border-indigo-500/50"
                        >
                          <option value="Inter">Inter (Sans)</option>
                          <option value="Space Grotesk">Space Grotesk</option>
                          <option value="Playfair Display">Playfair Serif</option>
                          <option value="JetBrains Mono">JetBrains Mono</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Weight</label>
                        <select
                          value={(getActiveLayer() as any).fontWeight}
                          onChange={(e) => updateSelectedLayerProps({ fontWeight: e.target.value })}
                          className="w-full bg-[#161a25] border border-slate-850 rounded-lg px-2 py-1.5 text-xs text-slate-100 focus:border-indigo-500/50"
                        >
                          <option value="300">Light</option>
                          <option value="normal">Normal</option>
                          <option value="semibold">Medium</option>
                          <option value="bold">Bold</option>
                          <option value="900">Heavy</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Size (px)</label>
                        <input
                          type="number"
                          value={(getActiveLayer() as any).fontSize}
                          onChange={(e) => updateSelectedLayerProps({ fontSize: parseInt(e.target.value) || 20 })}
                          className="w-full bg-[#161a25] border border-slate-850 rounded-lg px-2.5 py-1 text-xs text-white focus:border-indigo-500/50 font-mono"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Text Color</label>
                        <div className="flex gap-1.5 items-center bg-[#161a25] border border-slate-850 rounded-lg p-1">
                          <input
                            type="color"
                            value={(getActiveLayer() as any).color}
                            onChange={(e) => updateSelectedLayerProps({ color: e.target.value })}
                            className="w-6 h-6 bg-transparent border-0 cursor-pointer shrink-0 rounded"
                          />
                          <span className="text-[9px] text-slate-300 font-mono uppercase">{(getActiveLayer() as any).color}</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Align</label>
                        <div className="grid grid-cols-3 gap-0.5 bg-[#161a25] border border-slate-850 p-0.5 rounded-lg text-center font-bold">
                          {(["left", "center", "right"] as const).map((align) => (
                            <button
                              key={align}
                              onClick={() => updateSelectedLayerProps({ align })}
                              className={`py-1 text-[9px] rounded capitalize transition-all cursor-pointer ${
                                (getActiveLayer() as any).align === align ? "bg-indigo-600 font-bold text-white shadow-sm" : "text-slate-400 self-center"
                              }`}
                            >
                              {align}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Spacing</label>
                        <input
                          type="number"
                          value={(getActiveLayer() as any).letterSpacing || 0}
                          onChange={(e) => updateSelectedLayerProps({ letterSpacing: parseInt(e.target.value) || 0 })}
                          className="w-full bg-[#161a25] border border-slate-850 rounded-lg px-2 py-1 text-xs text-white font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Sub-form shape configurations */}
                {getActiveLayer()?.type === "shape" && (
                  <div className="space-y-3.5 p-3 bg-[#11141D] rounded-xl border border-slate-800/80 shadow-md">
                    <div className="flex items-center gap-1.5 border-b border-slate-850 pb-1.5">
                      <Square className="w-3.5 h-3.5 text-indigo-400" />
                      <span className="text-[10px] text-slate-200 font-mono font-bold uppercase tracking-wider">Shape Category</span>
                    </div>
                    <div className="space-y-1">
                      <div className="grid grid-cols-3 gap-1 bg-[#161a25] p-0.5 rounded-lg border border-slate-850 text-center font-semibold">
                        {(["rect", "circle", "triangle"] as const).map((sh) => (
                          <button
                            key={sh}
                            onClick={() => updateSelectedLayerProps({ shapeType: sh })}
                            className={`py-1 rounded text-[9px] capitalize transition-all cursor-pointer ${
                              (getActiveLayer() as any).shapeType === sh ? "bg-indigo-600 text-white font-bold" : "text-slate-400"
                            }`}
                          >
                            {sh}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Fill Background</label>
                        <div className="flex gap-1.5 items-center bg-[#161a25] border border-slate-850 rounded-lg p-1">
                          <input
                            type="color"
                            value={(getActiveLayer() as any).fill}
                            onChange={(e) => updateSelectedLayerProps({ fill: e.target.value })}
                            className="w-6 h-6 bg-transparent border-0 cursor-pointer shrink-0 rounded"
                          />
                          <span className="text-[9px] text-slate-300 font-mono uppercase">{(getActiveLayer() as any).fill}</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Border Color</label>
                        <div className="flex gap-1.5 items-center bg-[#161a25] border border-slate-850 rounded-lg p-1">
                          <input
                            type="color"
                            value={(getActiveLayer() as any).stroke}
                            onChange={(e) => updateSelectedLayerProps({ stroke: e.target.value })}
                            className="w-6 h-6 bg-transparent border-0 cursor-pointer shrink-0 rounded"
                          />
                          <span className="text-[9px] text-slate-300 font-mono uppercase">{(getActiveLayer() as any).stroke}</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Border Width</label>
                        <input
                          type="number"
                          value={(getActiveLayer() as any).strokeWidth || 0}
                          onChange={(e) => updateSelectedLayerProps({ strokeWidth: parseInt(e.target.value) || 0 })}
                          className="w-full bg-[#161a25] border border-slate-850 rounded-lg px-2.5 py-1 text-xs text-white font-mono"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Rounding</label>
                        <input
                          type="number"
                          disabled={(getActiveLayer() as any).shapeType !== "rect"}
                          value={(getActiveLayer() as any).borderRadius || 0}
                          onChange={(e) => updateSelectedLayerProps({ borderRadius: parseInt(e.target.value) || 0 })}
                          className="w-full bg-[#161a25] border border-slate-850 rounded-lg px-2.5 py-1 text-xs text-white font-mono disabled:opacity-40"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Sub-form brand stickers/badges configurations */}
                {getActiveLayer()?.type === "badge" && (
                  <div className="space-y-3.5 p-3 bg-[#11141D] rounded-xl border border-slate-800/80 shadow-md">
                    <div className="flex items-center gap-1.5 border-b border-slate-850 pb-1.5">
                      <BadgeAlert className="w-3.5 h-3.5 text-indigo-400" />
                      <span className="text-[10px] text-slate-200 font-mono font-bold uppercase tracking-wider">Sticker Label</span>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Sticker Text</label>
                      <input
                        type="text"
                        value={(getActiveLayer() as any).text}
                        onChange={(e) => updateSelectedLayerProps({ text: e.target.value })}
                        className="w-full bg-[#161a25] border border-slate-800 rounded-lg p-2 text-xs text-white focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Fill Color</label>
                        <div className="flex gap-1 items-center bg-[#161a25] border border-slate-850 rounded-lg p-1">
                          <input
                            type="color"
                            value={(getActiveLayer() as any).fill}
                            onChange={(e) => updateSelectedLayerProps({ fill: e.target.value })}
                            className="w-5 h-5 bg-transparent border-0 cursor-pointer shrink-0 rounded"
                          />
                          <span className="text-[9px] text-slate-400 font-mono">{(getActiveLayer() as any).fill}</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Label Color</label>
                        <div className="flex gap-1 items-center bg-[#161a25] border border-slate-850 rounded-lg p-1">
                          <input
                            type="color"
                            value={(getActiveLayer() as any).textColor}
                            onChange={(e) => updateSelectedLayerProps({ textColor: e.target.value })}
                            className="w-5 h-5 bg-transparent border-0 cursor-pointer shrink-0 rounded"
                          />
                          <span className="text-[9px] text-slate-400 font-mono">{(getActiveLayer() as any).textColor}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Sticker Shape Category</label>
                      <div className="grid grid-cols-3 gap-1 bg-[#161a25] p-0.5 rounded-lg border border-slate-850 text-center font-semibold">
                        {(["banner", "circle", "ribbon"] as const).map((st) => (
                          <button
                            key={st}
                            onClick={() => updateSelectedLayerProps({ badgeStyle: st })}
                            className={`py-1 rounded text-[9px] capitalize transition-all cursor-pointer ${
                              (getActiveLayer() as any).badgeStyle === st ? "bg-indigo-600 text-white font-bold" : "text-slate-400"
                            }`}
                          >
                            {st}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Sub-form images/photos configurations */}
                {getActiveLayer()?.type === "image" && (
                  <div className="space-y-3.5 p-3 bg-[#11141D] rounded-xl border border-slate-800/80 shadow-md">
                    <div className="flex items-center gap-1.5 border-b border-slate-850 pb-1.5">
                      <Image className="w-3.5 h-3.5 text-indigo-400" />
                      <span className="text-[10px] text-slate-200 font-mono font-bold uppercase tracking-wider">Photo Layer Attributes</span>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Photo Source Image URL</label>
                      <textarea
                        value={(getActiveLayer() as any).src}
                        onChange={(e) => updateSelectedLayerProps({ src: e.target.value })}
                        rows={2}
                        className="w-full bg-[#161a25] border border-slate-800 rounded-lg p-2 text-[10px] text-white focus:outline-none font-mono leading-relaxed"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Blur</label>
                          <span className="text-[9px] font-mono text-indigo-400 font-bold">{(getActiveLayer() as any).blur || 0}px</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="20"
                          value={(getActiveLayer() as any).blur || 0}
                          onChange={(e) => updateSelectedLayerProps({ blur: parseInt(e.target.value) || 0 })}
                          className="w-full accent-indigo-500 h-1 bg-slate-800 rounded-lg cursor-pointer"
                        />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Rounding</label>
                          <span className="text-[9px] font-mono text-indigo-400 font-bold">{(getActiveLayer() as any).cornerRadius || 0}px</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={(getActiveLayer() as any).cornerRadius || 0}
                          onChange={(e) => updateSelectedLayerProps({ cornerRadius: parseInt(e.target.value) || 0 })}
                          className="w-full accent-indigo-500 h-1 bg-slate-800 rounded-lg cursor-pointer"
                        />
                      </div>
                    </div>
                    
                    {/* Generative AI Enhance button for custom photo */}
                    <div className="pt-2">
                      <button
                        onClick={handleEnhanceSelectedLayer}
                        disabled={isAIGenningImage}
                        className="w-full py-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-lg text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-indigo-600/10 cursor-pointer disabled:opacity-50"
                      >
                        {isAIGenningImage ? (
                          <>
                            <RefreshCw className="w-3.5 h-3.5 animate-spin text-white" />
                            <span>Remixing Details...</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
                            <span>Remix with AI</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* UNIVERSAL TRANSFORMS (X, Y, Width, Height, Rotate, Opacity) */}
                <div className="space-y-3.5 p-3 bg-[#11141D] rounded-xl border border-slate-800/80 shadow-md">
                  <div className="flex items-center gap-1.5 border-b border-slate-850 pb-1.5">
                    <Settings className="w-3.5 h-3.5 text-indigo-400 text-bold" />
                    <span className="text-[10px] text-slate-200 font-mono font-bold uppercase tracking-wider">Universal Geometry Transforms</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">X Position (px)</label>
                      <input
                        type="number"
                        value={getActiveLayer()?.x}
                        onChange={(e) => updateSelectedLayerProps({ x: parseInt(e.target.value) || 0 })}
                        className="w-full bg-[#161a25] border border-slate-850 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none font-mono"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Y Position (px)</label>
                      <input
                        type="number"
                        value={getActiveLayer()?.y}
                        onChange={(e) => updateSelectedLayerProps({ y: parseInt(e.target.value) || 0 })}
                        className="w-full bg-[#161a25] border border-slate-850 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none font-mono"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Width (px)</label>
                      <input
                        type="number"
                        value={getActiveLayer()?.width}
                        onChange={(e) => updateSelectedLayerProps({ width: Math.max(20, parseInt(e.target.value) || 20) })}
                        className="w-full bg-[#161a25] border border-slate-850 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none font-mono"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Height (px)</label>
                      <input
                        type="number"
                        value={getActiveLayer()?.height}
                        onChange={(e) => updateSelectedLayerProps({ height: Math.max(20, parseInt(e.target.value) || 20) })}
                        className="w-full bg-[#161a25] border border-slate-850 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none font-mono"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Rotation</label>
                        <span className="text-[9px] font-mono text-indigo-400 font-bold">{getActiveLayer()?.rotation || 0}°</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="360"
                        value={getActiveLayer()?.rotation || 0}
                        onChange={(e) => updateSelectedLayerProps({ rotation: parseInt(e.target.value) || 0 })}
                        className="w-full accent-indigo-500 h-1 bg-slate-800 rounded-lg cursor-pointer"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Opacity</label>
                        <span className="text-[9px] font-mono text-indigo-400 font-bold">{Math.round((getActiveLayer()?.opacity ?? 1) * 100)}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={Math.round((getActiveLayer()?.opacity ?? 1) * 100)}
                        onChange={(e) => updateSelectedLayerProps({ opacity: (parseInt(e.target.value) || 0) / 100 })}
                        className="w-full accent-indigo-500 h-1 bg-slate-800 rounded-lg cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              <div className="p-8 text-center bg-[#11141D]/30 border border-dashed border-slate-800/80 rounded-xl space-y-3">
                <div className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center mx-auto border border-slate-700/20">
                  <Move className="w-4 h-4 text-slate-500 animate-pulse" />
                </div>
                <div>
                  <p className="font-semibold text-slate-300 text-xs text-center">No Active Canvas Layer Selected</p>
                  <p className="text-[10px] text-slate-500 mt-1.5 leading-relaxed text-center">
                    Tap any text, sticker, or photo inside the workspace to adjust typography, colors, layers, transforms, and borders immediately here.
                  </p>
                </div>
              </div>
            )}

            {/* BACKGROUND EDITOR CONFIG SECTION (Always accessible at bottom!) */}
            <div className="space-y-3.5 p-3 bg-[#11141D] rounded-xl border border-slate-800/80 shadow-md">
              <div className="flex items-center gap-1.5 border-b border-slate-850 pb-1.5">
                <Palette className="w-3.5 h-3.5 text-indigo-400" />
                <span className="text-[10px] text-slate-200 font-mono font-bold uppercase tracking-wider block">Canvas Base Backdrop</span>
              </div>

              {/* Custom canvas dimensions */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="space-y-1">
                  <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Canvas Width (px)</label>
                  <input
                    type="number"
                    min="100"
                    max="2000"
                    value={activeTemplate.width}
                    onChange={(e) => {
                      const val = Math.max(100, Math.min(2000, parseInt(e.target.value) || 100));
                      resizeActiveCanvas(val, activeTemplate.height);
                    }}
                    className="w-full bg-[#161a25] border border-slate-850 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none font-mono"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Canvas Height (px)</label>
                  <input
                    type="number"
                    min="100"
                    max="2000"
                    value={activeTemplate.height}
                    onChange={(e) => {
                      const val = Math.max(100, Math.min(2000, parseInt(e.target.value) || 100));
                      resizeActiveCanvas(activeTemplate.width, val);
                    }}
                    className="w-full bg-[#161a25] border border-slate-850 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none font-mono"
                  />
                </div>
              </div>
              
              <div className="space-y-1.5 font-sans">
                <div className="flex bg-[#161a25] border border-slate-850 rounded-lg p-0.5">
                  {(["color", "gradient", "image"] as const).map((t) => {
                    const isCurrent = activeTemplate.background.type === t;
                    return (
                      <button
                        key={`b_inspector_${t}`}
                        onClick={() => {
                          setActiveTemplate((prev) => ({
                            ...prev,
                            background: {
                              ...prev.background,
                              type: t,
                              ...(t === "gradient" && !prev.background.gradient ? {
                                gradient: { from: "#3b82f6", to: "#1d4ed8", angle: 135 }
                              } : {}),
                              ...(t === "image" && !prev.background.imageUrl ? {
                                imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
                              } : {})
                            }
                          }));
                        }}
                        className={`flex-1 py-1 text-[10px] rounded transition-all capitalize select-none font-semibold cursor-pointer ${
                          isCurrent ? "bg-[#4f46e5]/85 text-white shadow-sm" : "text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>

              {activeTemplate.background.type === "color" && (
                <div className="space-y-1 pt-1 font-mono">
                  <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Solid Background Hex</label>
                  <div className="flex gap-2 items-center bg-[#161a25] border border-slate-850 rounded-lg p-1.5">
                    <input
                      type="color"
                      value={activeTemplate.background.color}
                      onChange={(e) => setActiveTemplate(prev => ({
                        ...prev,
                        background: { ...prev.background, color: e.target.value }
                      }))}
                      className="w-8 h-6 bg-transparent border-0 cursor-pointer shrink-0 rounded"
                    />
                    <input
                      type="text"
                      value={activeTemplate.background.color}
                      onChange={(e) => setActiveTemplate(prev => ({
                        ...prev,
                        background: { ...prev.background, color: e.target.value }
                      }))}
                      className="w-full bg-transparent border-0 focus:outline-[#413f63] p-0 text-xs text-white font-mono uppercase"
                    />
                  </div>
                </div>
              )}

              {activeTemplate.background.type === "gradient" && activeTemplate.background.gradient && (
                <div className="space-y-3 pt-1">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Gradient From</label>
                      <div className="flex gap-1.5 items-center bg-[#161a25] border border-slate-850 rounded-lg p-1">
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
                          className="w-6 h-6 bg-transparent border-0 cursor-pointer shrink-0 rounded font-bold"
                        />
                        <span className="text-[9px] text-slate-400 font-mono uppercase tracking-wider">{activeTemplate.background.gradient.from}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Gradient To</label>
                      <div className="flex gap-1.5 items-center bg-[#161a25] border border-slate-850 rounded-lg p-1">
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
                          className="w-6 h-6 bg-transparent border-0 cursor-pointer shrink-0 rounded font-semibold"
                        />
                        <span className="text-[9px] text-slate-400 font-mono uppercase tracking-wider">{activeTemplate.background.gradient.to}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">Angle</label>
                      <span className="text-[10px] font-mono text-indigo-400 font-semibold bg-indigo-500/5 px-1.5 py-0.5 rounded border border-indigo-500/10">{activeTemplate.background.gradient.angle}°</span>
                    </div>
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
                      className="w-full accent-indigo-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {activeTemplate.background.type === "image" && (
                <div className="space-y-2 pt-1 font-sans">
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Background Photo URL</label>
                    <input
                      type="text"
                      value={activeTemplate.background.imageUrl || ""}
                      onChange={(e) => setActiveTemplate(prev => ({
                        ...prev,
                        background: { ...prev.background, imageUrl: e.target.value }
                      }))}
                      placeholder="Unsplash background URL..."
                      className="w-full bg-[#161a25] border border-slate-800 rounded-lg p-2.5 text-xs text-white font-mono focus:border-indigo-500/50 focus:outline-none"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* CANVAS LAYERS LIST & REORDERING BOARD */}
            <div className="space-y-3 p-3 bg-[#11141D] rounded-xl border border-slate-800/80 shadow-md">
              <div className="flex items-center justify-between border-b border-slate-850 pb-1.5">
                <div className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-400 font-bold" />
                  <span className="text-[10px] text-slate-200 font-mono font-bold uppercase tracking-wider block">Canvas Stacking Layers</span>
                </div>
                <span className="text-[9px] font-mono text-slate-400 bg-slate-800/50 px-1.5 py-0.5 rounded border border-slate-700/30">
                  {activeTemplate.layers.length} Layers
                </span>
              </div>
              
              {activeTemplate.layers.length === 0 ? (
                <div className="py-4 text-center text-[10px] text-slate-500 font-mono">
                  No layers added yet. Use the quick toolbar above to add text, shapes or stickers!
                </div>
              ) : (
                <div className="space-y-1.5 max-h-[220px] overflow-y-auto custom-scrollbar pr-0.5">
                  {[...activeTemplate.layers]
                    .sort((a, b) => b.zIndex - a.zIndex)
                    .map((layer) => {
                      const isSelected = selectedLayerId === layer.id;
                      
                      let icon = <Layers className="w-3.5 h-3.5 text-slate-400" />;
                      let labelText = "Layer";
                      
                      if (layer.type === "text") {
                        icon = <FontIcon className="w-3.5 h-3.5 text-indigo-400" />;
                        labelText = layer.text || "(Empty Text)";
                      } else if (layer.type === "shape") {
                        icon = layer.shapeType === "circle" ? <Circle className="w-3.5 h-3.5 text-amber-400" /> : <Square className="w-3.5 h-3.5 text-emerald-400" />;
                        labelText = `Shape: ${layer.shapeType === "rect" ? "Rectangle" : layer.shapeType === "circle" ? "Circle" : "Triangle"}`;
                      } else if (layer.type === "badge") {
                        icon = <Ticket className="w-3.5 h-3.5 text-rose-400" />;
                        labelText = `Sticker: "${layer.text}"`;
                      } else if (layer.type === "image") {
                        icon = <Image className="w-3.5 h-3.5 text-violet-400" />;
                        labelText = "Photo Layer";
                      }
                      
                      return (
                        <div
                          key={`layer_board_item_${layer.id}`}
                          onClick={() => setSelectedLayerId(layer.id)}
                          className={`flex items-center justify-between p-2 rounded-lg border text-xs cursor-pointer select-none transition-all ${
                            isSelected
                              ? "bg-indigo-500/10 border-indigo-500/40 text-indigo-200 font-semibold shadow-sm"
                              : "bg-[#161a25]/40 border-slate-850 text-slate-300 hover:bg-[#161a25]/80 hover:border-slate-800"
                          }`}
                        >
                          <div className="flex items-center gap-2 overflow-hidden flex-1">
                            <div className="shrink-0">{icon}</div>
                            <span className="truncate max-w-[130px] text-[11px]">{labelText}</span>
                          </div>
                          
                          <div className="flex items-center gap-1 shrink-0 ml-1" onClick={(e) => e.stopPropagation()}>
                            <span className="text-[9px] font-mono font-bold bg-slate-800/80 text-indigo-400 border border-slate-700/50 px-1 py-0.5 rounded mr-1">
                              z{layer.zIndex}
                            </span>
                            <button
                              onClick={() => reorderSpecificLayer(layer.id, "up")}
                              title="Bring layer forward"
                              className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition-all cursor-pointer"
                            >
                              <ArrowUp className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => reorderSpecificLayer(layer.id, "down")}
                              title="Send layer backward"
                              className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition-all cursor-pointer"
                            >
                              <ArrowDown className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => deleteSpecificLayer(layer.id)}
                              title="Delete layer"
                              className="p-1 hover:bg-red-950/20 rounded text-slate-400 hover:text-red-450 transition-all cursor-pointer"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>

          </div>

          <div className="p-3 border-t border-slate-800 bg-[#0A0C10] text-center shrink-0">
            <span className="text-[9px] font-mono text-slate-500 tracking-wider">CANVAS PROPERTIES CONTEXT ENGINE</span>
          </div>
        </section>

      </main>

      {/* FULLSCREEN LIGHTBOX PORTAL MODAL PREVIEW */}
      <AnimatePresence>
        {isFullscreenPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-md flex flex-col items-center justify-between p-4"
          >
            {/* Top action bar of fullscreen lightbox */}
            <div className="w-full flex items-center justify-between px-6 py-4 border-b border-slate-800/60 bg-[#0A0C10]/80">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-white shadow-lg">
                  <Sparkles className="w-4 h-4 text-white animate-pulse" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">Full Screen design Live Check</h2>
                  <p className="text-[10px] text-indigo-400 font-mono tracking-wider">IMMERSIVE PREVIEW MODE</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleExportAsImage}
                  disabled={isImageRendering}
                  className="flex items-center gap-2 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white rounded-lg text-xs font-bold transition-all cursor-pointer shadow-lg shadow-indigo-500/20 active:scale-95 animate-fade-in"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Image</span>
                </button>
                <button
                  onClick={() => setIsFullscreenPreview(false)}
                  className="p-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700/60 text-slate-300 hover:text-white rounded-lg transition-all cursor-pointer"
                  title="Close Preview (ESC)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Center Canvas display */}
            <div className="flex-1 w-full flex items-center justify-center relative overflow-hidden select-none p-8" onClick={() => setIsFullscreenPreview(false)}>
              <div
                id="fullscreen_design_canvas"
                onClick={(e) => e.stopPropagation()} // Stop propagation from closing overlay
                style={{
                  width: `${activeTemplate.width}px`,
                  height: `${activeTemplate.height}px`,
                  transform: `scale(${Math.min((window.innerWidth - 65) / activeTemplate.width, (window.innerHeight - 190) / activeTemplate.height, 1.15)})`,
                  transformOrigin: "center center"
                }}
                className="relative shrink-0 shadow-3xl border border-slate-800 bg-[#0A0C10] rounded-sm overflow-hidden"
              >
                
                {/* BACKGROUND ELEMENT */}
                <div
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

                {/* DYNAMIC LAYER RENDERERS */}
                {activeTemplate.layers.map((layer) => {
                  const style: React.CSSProperties = {
                    position: "absolute",
                    left: `${layer.x}px`,
                    top: `${layer.y}px`,
                    width: `${layer.width}px`,
                    height: `${layer.height}px`,
                    transform: `translate(-50%, -50%) rotate(${layer.rotation || 0}deg)`,
                    zIndex: layer.zIndex,
                    opacity: layer.opacity,
                    userSelect: "none",
                    pointerEvents: "none"
                  };

                  return (
                    <div
                      key={`fs_layer_${layer.id}`}
                      style={style}
                      className="flex items-center justify-center"
                    >
                      
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
                        >
                          {(layer as any).text}
                        </div>
                      )}

                      {layer.type === "shape" && (
                        <div className="w-full h-full relative">
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
                          {(layer as any).shapeType === "triangle" && (
                            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                              <polygon
                                points="50,0 100,100 0,100"
                                fill={(layer as any).fill}
                                stroke={(layer as any).stroke}
                                strokeWidth={(layer as any).strokeWidth}
                              />
                            </svg>
                          )}
                        </div>
                      )}

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
                        >
                          {(layer as any).text}
                        </div>
                      )}

                      {layer.type === "image" && (
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: `${(layer as any).cornerRadius || 0}px`,
                            overflow: "hidden"
                          }}
                          className="w-full h-full"
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
                          />
                        </div>
                      )}

                    </div>
                  );
                })}

              </div>
            </div>

            {/* ESC info label */}
            <div className="py-4 text-center text-[10px] font-mono text-slate-500 bg-[#0A0C10]/45 w-full border-t border-slate-900 leading-relaxed select-none">
              Click backdrop anywhere or select Close (X) to exit Fullscreen Lightbox mode
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
