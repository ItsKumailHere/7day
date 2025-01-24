export interface Product {
    _id: string;
    productName: string;
    description: string;
    price: number;
    category: string;
    colors: string[];
    status: string;
    inventory: number;
    image: {
      asset: {
        url: string;
      }
    }
  }
  
  export const products = [
    {
      id: "1",
      name: "Air Max Velocity",
      description: "Experience ultimate comfort with our latest Air Max technology.",
      price: 129.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Running",
    },
    {
      id: "2",
      name: "Zoom Elite Pro",
      description: "Designed for speed and agility, perfect for professional athletes.",
      price: 159.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Performance",
    },
    {
      id: "3",
      name: "Street Style X",
      description: "Urban-inspired design meets cutting-edge comfort.",
      price: 89.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Casual",
    },
    {
      id: "4",
      name: "Bounce Lite",
      description: "Featherweight design for an effortless running experience.",
      price: 109.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Running",
    },
    {
      id: "5",
      name: "Flex Force One",
      description: "Flexibility meets durability in this all-purpose athletic shoe.",
      price: 119.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Training",
    },
    {
      id: "6",
      name: "Retro Classic",
      description: "Timeless design inspired by our iconic 80s models.",
      price: 99.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Lifestyle",
    },
    {
      id: "7",
      name: "Trail Blazer X",
      description: "Conquer any terrain with our advanced grip technology.",
      price: 139.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Outdoor",
    },
    {
      id: "8",
      name: "Cushion Cloud",
      description: "Experience walking on clouds with our softest sole yet.",
      price: 79.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Comfort",
    },
    {
      id: "9",
      name: "Hyper Boost Elite",
      description: "Engineered for elite performance in high-intensity workouts.",
      price: 169.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Performance",
    },
    {
      id: "10",
      name: "Eco Stride",
      description: "Sustainable materials meet modern design in this eco-friendly option.",
      price: 129.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Sustainable",
    },
  ];
  