import React, { useEffect, useState, useRef } from "react";
import Filter from "../components/layout/Filter";
import Card from "../components/smallComponents/Card";

const Projects = () => {
  const [assets, setAssets] = useState([]); // List of currently displayed assets
  const [loading, setLoading] = useState(false); // Loading state
  const [page, setPage] = useState(0); // Current page index
  const loadMoreRef = useRef(null); // Ref for the load more div

  const allAssets = [
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/above-adventure-aerial-air.jpg",
      title: "Above Adventure Aerial View",
      content: "An aerial view capturing the stunning landscape of adventure locations.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/aroni-arsa-children-little.jpg",
      title: "Little Children Playing",
      content: "A heartwarming image of children at play.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg",
      title: "Bellingrath Gardens",
      content: "A scenic view of the beautiful Bellingrath Gardens.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg",
      title: "Stunning Garden Landscape",
      content: "A captivating landscape of Bellingrath Gardens.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/dolphin-marine-mammals-water-sea-64219.jpeg",
      title: "Dolphins in the Wild",
      content: "A mesmerizing photograph of dolphins swimming freely.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/drops-of-water-water-nature-liquid-40784.jpeg",
      title: "Drops of Water",
      content: "A close-up shot of water droplets, emphasizing nature’s beauty.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/elephant-cub-tsavo-kenya-66898.jpeg",
      title: "Elephant Cub in Tsavo",
      content: "An adorable image of a young elephant cub.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/field-clouds-sky-earth-46160.jpeg",
      title: "Field Under the Clouds",
      content: "A serene landscape of a field under a dramatic sky.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/garden-rose-red-pink-56866.jpeg",
      title: "Beautiful Roses",
      content: "A stunning display of red and pink roses.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/italy-mountains-dawn-daybreak-147411.jpeg",
      title: "Italian Mountains at Dawn",
      content: "A breathtaking view of the Italian mountains at dawn.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1002703.jpeg", title: "Scenic View", content: "A beautiful scenic view." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1024975.jpeg",
      title: "Nature Bliss",
      content: "An image that captures the beauty of nature.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1051838.jpeg",
      title: "Mountain Peaks",
      content: "A stunning view of mountain peaks.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1072824.jpeg",
      title: "Desert Landscape",
      content: "A picturesque desert landscape.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1076758.jpeg",
      title: "Lush Greenery",
      content: "A vibrant image of lush greenery.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1097456.jpeg", title: "Waterfall Beauty", content: "A mesmerizing waterfall." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1108099.jpeg", title: "Tranquil Beach", content: "A serene beach setting." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1108572.jpeg", title: "Forest Path", content: "A peaceful forest path." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1122639.jpeg", title: "Night Sky", content: "A beautiful view of the night sky." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1128797.jpeg", title: "Cityscape", content: "A breathtaking cityscape." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1133957.jpeg", title: "Sunset View", content: "A stunning sunset view." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1152359.jpeg",
      title: "Ocean Waves",
      content: "An image of beautiful ocean waves.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1172849.jpeg", title: "Wildlife", content: "An image showcasing wildlife." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1179225.jpeg",
      title: "Colorful Flowers",
      content: "A vibrant collection of colorful flowers.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1187079.jpeg", title: "Golden Fields", content: "A picturesque golden field." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1212487.jpeg", title: "Foggy Morning", content: "A serene foggy morning scene." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1226302.jpeg",
      title: "Rainy Day",
      content: "An image capturing the essence of a rainy day.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1227513.jpeg", title: "Snowy Landscape", content: "A beautiful snowy landscape." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1250260.jpeg",
      title: "Autumn Leaves",
      content: "An image of colorful autumn leaves.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-126271.jpeg",
      title: "Lavender Fields",
      content: "A stunning view of lavender fields.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1263986.jpeg",
      title: "Coastal Cliffs",
      content: "A dramatic view of coastal cliffs.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1308881.jpeg",
      title: "Starry Night",
      content: "A mesmerizing view of a starry night.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1323550.jpeg",
      title: "Mountain Lake",
      content: "A beautiful lake nestled in the mountains.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1350197.jpeg", title: "Cactus Garden", content: "A stunning cactus garden." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1353938.jpeg", title: "Rocky Shore", content: "A view of a rocky shore." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1368382.jpeg", title: "Calm Waters", content: "An image showcasing calm waters." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1386604.jpeg",
      title: "Lighthouse",
      content: "An image of a picturesque lighthouse.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1391498.jpeg",
      title: "Winter Wonderland",
      content: "A beautiful winter wonderland scene.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1416736.jpeg",
      title: "Peaceful Stream",
      content: "An image of a peaceful stream.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1420440.jpeg", title: "Flower Meadow", content: "A vibrant flower meadow." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1459495.jpeg", title: "Sky Reflection", content: "An image reflecting the sky." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1477166.jpeg", title: "Desert Sunset", content: "A beautiful desert sunset." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1533720.jpeg", title: "Tulip Field", content: "A stunning tulip field." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1580271.jpeg", title: "Wildflowers", content: "A vibrant wildflower display." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1659438.jpeg", title: "Butterflies", content: "An image of colorful butterflies." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-167684.jpeg", title: "Forest Stream", content: "A serene forest stream." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-172289.jpeg",
      title: "Rocky Mountain",
      content: "A breathtaking view of a rocky mountain.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1723637.jpeg", title: "River Landscape", content: "A beautiful river landscape." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1758144.jpeg", title: "City Lights", content: "An image of vibrant city lights." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1883385.jpeg", title: "Sunflower Field", content: "A stunning sunflower field." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1903611.jpeg",
      title: "Snowy Mountain",
      content: "A picturesque snowy mountain view.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1955134.jpeg", title: "Orchard", content: "A vibrant orchard." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1966641.jpeg", title: "Seaside", content: "A serene seaside view." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1984254.jpeg",
      title: "Morning Mist",
      content: "An image of a beautiful morning mist.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1984476.jpeg", title: "Rocky Beach", content: "A view of a rocky beach." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1986355.jpeg",
      title: "Wildlife in Nature",
      content: "An image showcasing wildlife in its natural habitat.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1995365.jpeg",
      title: "Peaceful Lake",
      content: "A serene image of a peaceful lake.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2023252.jpeg",
      title: "Mountain Reflections",
      content: "A stunning image of mountains reflecting in the water.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2048761.jpeg",
      title: "Quiet Forest",
      content: "An image of a quiet forest setting.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2095088.jpeg", title: "Golden Sunset", content: "A beautiful golden sunset view." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2101298.jpeg",
      title: "Fallen Leaves",
      content: "An image capturing the essence of fallen leaves.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2104484.jpeg",
      title: "Lavender Sunset",
      content: "A breathtaking view of lavender fields at sunset.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2151366.jpeg", title: "City Park", content: "A vibrant city park setting." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2222135.jpeg", title: "Glistening Lake", content: "A beautiful glistening lake." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2227513.jpeg", title: "Foggy Hills", content: "An image of foggy hills." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2230575.jpeg",
      title: "Climbing Roses",
      content: "A stunning image of climbing roses.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2255775.jpeg", title: "Sunlit Forest", content: "A sunlit forest scene." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2260957.jpeg", title: "Misty Mountains", content: "An image of misty mountains." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2273087.jpeg", title: "Evening Glow", content: "A serene evening glow setting." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2327489.jpeg",
      title: "Charming Village",
      content: "An image of a charming village.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2333386.jpeg", title: "Tulip Garden", content: "A vibrant tulip garden." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2343498.jpeg", title: "Cascading Water", content: "An image of cascading water." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2349838.jpeg", title: "City View", content: "An image showcasing a city view." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2359733.jpeg",
      title: "Bright Flowers",
      content: "A vibrant display of bright flowers.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2379592.jpeg", title: "Winter Cabin", content: "A cozy winter cabin in the snow." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2389534.jpeg",
      title: "Fishing Boat",
      content: "An image of a fishing boat on the water.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2391243.jpeg",
      title: "Orchard in Bloom",
      content: "A beautiful orchard in bloom.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2400323.jpeg", title: "Autumn Path", content: "A picturesque autumn path." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2400650.jpeg", title: "Snowy Trees", content: "An image of snowy trees." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2405151.jpeg", title: "Vibrant Sunset", content: "A vibrant sunset view." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2411628.jpeg", title: "Coastal Path", content: "A beautiful coastal path." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2416788.jpeg",
      title: "Countryside Landscape",
      content: "An image showcasing a beautiful countryside landscape.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2434559.jpeg",
      title: "Seaside Sunrise",
      content: "A stunning seaside sunrise view.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2435116.jpeg",
      title: "Mountain Trail",
      content: "An image of a picturesque mountain trail.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2435133.jpeg",
      title: "Island Paradise",
      content: "An image of a beautiful island paradise.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2457212.jpeg", title: "Clear Blue Sky", content: "An image of a clear blue sky." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2461705.jpeg", title: "Calm Sea", content: "An image of a calm sea." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2473302.jpeg", title: "Golden Hour", content: "An image of the golden hour." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2490468.jpeg",
      title: "Vibrant Beach",
      content: "An image of a vibrant beach setting.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2492575.jpeg",
      title: "Coastal Breeze",
      content: "An image of a gentle coastal breeze.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2502202.jpeg",
      title: "Floral Landscape",
      content: "An image of a beautiful floral landscape.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2508813.jpeg",
      title: "Colorful Sunset",
      content: "An image of a colorful sunset.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2514356.jpeg",
      title: "City at Night",
      content: "An image of a vibrant city at night.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2517105.jpeg", title: "Foggy Lake", content: "An image of a foggy lake." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2523938.jpeg",
      title: "Rainy Forest",
      content: "An image capturing the beauty of a rainy forest.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2534860.jpeg",
      title: "Sunset over Water",
      content: "An image of a sunset over water.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2536946.jpeg",
      title: "Hiking Trail",
      content: "An image of a beautiful hiking trail.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2539117.jpeg",
      title: "Snowy Mountain Range",
      content: "An image of a snowy mountain range.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2540123.jpeg",
      title: "Desert Sand Dunes",
      content: "An image of desert sand dunes.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2540128.jpeg",
      title: "Snowy Landscape",
      content: "An image of a beautiful snowy landscape.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2543772.jpeg",
      title: "Bright Green Field",
      content: "An image of a bright green field.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2555041.jpeg",
      title: "Mountain Refuge",
      content: "An image of a peaceful mountain refuge.",
    }
  ];

  // Load initial assets when the component mounts
  useEffect(() => {
    loadAssets();
  }, []);

  // Function to load assets based on the current page
  const loadAssets = () => {
    setLoading(true);
    setTimeout(() => {
      const nextAssets = allAssets.slice(page * 5, (page + 1) * 5); // Load 10 more assets
      setAssets((prevAssets) => [...prevAssets, ...nextAssets]);
      setLoading(false);
      setPage((prevPage) => prevPage + 1);
    }, 4000); // Simulate loading time
  };

  // Observer to detect when the user scrolls to the bottom of the page
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        loadAssets();
      }
    });

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [loading]);

  return (
    <div className="py-2">
      <Filter />
      <div className="flex flex-wrap justify-evenly py-6 gap-6 px-4">
        {assets.length > 0
          ? assets.map((asset, index) => <Card key={index} imagePath={asset.imagePath} title={asset.title} content={asset.content} />)
          : !loading && <p className="text-center">Scroll down to load more assets...</p>}
      </div>
      {loading && (
        <div className="flex justify-center items-center py-4">
          <LoadingAnimation />
        </div>
      )}
      <div ref={loadMoreRef} className="h-12"></div>
    </div>
  );
};

// Loading Animation Component
const LoadingAnimation = () => {
  return (
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce200"></div>
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce400"></div>
    </div>
  );
};

export default Projects;
